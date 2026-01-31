// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

interface IAgentRegistry {
    function isAgent(address wallet) external view returns (bool);
    function updateAgentStats(address wallet, uint256 earned) external;
}

/**
 * @title BountyBoardV2
 * @notice Secure bounty board with role separation and operator limits
 * @dev Treasury owns contract, Operator has daily spending limits
 */
contract BountyBoardV2 is ReentrancyGuard {
    
    // === ROLES ===
    address public treasury;
    address public operator;
    
    // === OPERATOR LIMITS ===
    uint256 public operatorDailyLimit = 100e6;  // $100/day
    uint256 public operatorSpentToday;
    uint256 public lastResetDay;
    
    // === CONTRACTS ===
    IERC20 public immutable usdc;
    IAgentRegistry public registry;
    
    // === FEES ===
    uint256 public standardFeeBps = 200;    // 2%
    uint256 public anonymousFeeBps = 500;   // 5%
    uint256 public collectedFees;
    
    // === TIMING ===
    uint256 public autoApproveDelay = 7 days;
    
    // === BOUNTY DATA ===
    uint256 public bountyCount;
    
    enum Status { Open, Claimed, Submitted, Approved, Disputed, Cancelled }
    
    struct Bounty {
        uint256 id;
        address poster;
        uint256 reward;
        uint256 platformFee;
        string metadataURI;
        uint256 deadline;
        uint256 createdAt;
        address claimedBy;
        uint256 claimedAt;
        bytes32 submissionHash;
        uint256 submittedAt;
        Status status;
        bool isAnonymous;
    }
    
    mapping(uint256 => Bounty) public bounties;
    mapping(address => uint256) public balances;  // Agent withdrawable balances
    
    // === EVENTS ===
    event BountyCreated(uint256 indexed id, address indexed poster, uint256 reward, bool isAnonymous);
    event BountyClaimed(uint256 indexed id, address indexed agent);
    event WorkSubmitted(uint256 indexed id, bytes32 submissionHash);
    event BountyApproved(uint256 indexed id, address indexed agent, uint256 payout);
    event BountyDisputed(uint256 indexed id);
    event DisputeResolved(uint256 indexed id, bool paidAgent);
    event Withdrawal(address indexed agent, address indexed to, uint256 amount);
    event FeesWithdrawn(address indexed to, uint256 amount);
    event OperatorChanged(address indexed oldOperator, address indexed newOperator);
    event OperatorLimitChanged(uint256 oldLimit, uint256 newLimit);
    
    // === MODIFIERS ===
    modifier onlyTreasury() {
        require(msg.sender == treasury, "Not treasury");
        _;
    }
    
    modifier onlyOperatorOrTreasury() {
        require(msg.sender == operator || msg.sender == treasury, "Not authorized");
        _;
    }
    
    modifier operatorWithLimit(uint256 amount) {
        if (msg.sender == operator) {
            _resetDailyLimitIfNeeded();
            require(operatorSpentToday + amount <= operatorDailyLimit, "Operator daily limit exceeded");
            operatorSpentToday += amount;
        }
        _;
    }
    
    // === CONSTRUCTOR ===
    constructor(
        address _usdc,
        address _treasury,
        address _operator,
        address _registry
    ) {
        require(_usdc != address(0), "Invalid USDC");
        require(_treasury != address(0), "Invalid treasury");
        
        usdc = IERC20(_usdc);
        treasury = _treasury;
        operator = _operator;
        registry = IAgentRegistry(_registry);
        lastResetDay = block.timestamp / 1 days;
    }
    
    // === INTERNAL ===
    
    function _resetDailyLimitIfNeeded() internal {
        uint256 today = block.timestamp / 1 days;
        if (today > lastResetDay) {
            operatorSpentToday = 0;
            lastResetDay = today;
        }
    }
    
    function _calculateFee(uint256 reward, bool isAnonymous) internal view returns (uint256) {
        uint256 bps = isAnonymous ? anonymousFeeBps : standardFeeBps;
        return (reward * bps) / 10000;
    }
    
    // === PUBLIC FUNCTIONS ===
    
    /// @notice Create a new bounty with escrowed funds
    function createBounty(
        string calldata metadataURI,
        uint256 reward,
        uint256 deadline,
        bool isAnonymous
    ) external nonReentrant returns (uint256) {
        require(reward >= 1e6, "Min reward $1");
        require(deadline > block.timestamp, "Deadline must be future");
        require(bytes(metadataURI).length > 0, "Empty metadata");
        
        uint256 fee = _calculateFee(reward, isAnonymous);
        uint256 total = reward + fee;
        
        require(usdc.transferFrom(msg.sender, address(this), total), "Transfer failed");
        
        bountyCount++;
        bounties[bountyCount] = Bounty({
            id: bountyCount,
            poster: msg.sender,
            reward: reward,
            platformFee: fee,
            metadataURI: metadataURI,
            deadline: deadline,
            createdAt: block.timestamp,
            claimedBy: address(0),
            claimedAt: 0,
            submissionHash: bytes32(0),
            submittedAt: 0,
            status: Status.Open,
            isAnonymous: isAnonymous
        });
        
        emit BountyCreated(bountyCount, msg.sender, reward, isAnonymous);
        return bountyCount;
    }
    
    /// @notice Claim an open bounty (registered agents only)
    function claimBounty(uint256 bountyId) external nonReentrant {
        require(registry.isAgent(msg.sender), "Not a registered agent");
        
        Bounty storage b = bounties[bountyId];
        require(b.status == Status.Open, "Not open");
        require(block.timestamp < b.deadline, "Deadline passed");
        
        b.claimedBy = msg.sender;
        b.claimedAt = block.timestamp;
        b.status = Status.Claimed;
        
        emit BountyClaimed(bountyId, msg.sender);
    }
    
    /// @notice Submit work for a claimed bounty
    function submitWork(uint256 bountyId, bytes32 submissionHash) external nonReentrant {
        Bounty storage b = bounties[bountyId];
        require(b.claimedBy == msg.sender, "Not your bounty");
        require(b.status == Status.Claimed, "Not claimed");
        
        b.submissionHash = submissionHash;
        b.submittedAt = block.timestamp;
        b.status = Status.Submitted;
        
        emit WorkSubmitted(bountyId, submissionHash);
    }
    
    /// @notice Approve submitted work (poster or auto-approve after delay)
    function approveBounty(uint256 bountyId) external nonReentrant {
        Bounty storage b = bounties[bountyId];
        require(b.status == Status.Submitted, "Not submitted");
        
        bool isPoster = msg.sender == b.poster;
        bool isAutoApprove = block.timestamp >= b.submittedAt + autoApproveDelay;
        
        require(isPoster || isAutoApprove, "Not authorized");
        
        _releaseFunds(bountyId);
    }
    
    /// @notice Dispute a submission (poster only, within window)
    function disputeBounty(uint256 bountyId) external {
        Bounty storage b = bounties[bountyId];
        require(msg.sender == b.poster, "Not poster");
        require(b.status == Status.Submitted, "Not submitted");
        require(block.timestamp < b.submittedAt + autoApproveDelay, "Too late to dispute");
        
        b.status = Status.Disputed;
        emit BountyDisputed(bountyId);
    }
    
    /// @notice Agent withdraws earned balance
    function withdraw(address to, uint256 amount) external nonReentrant {
        uint256 bal = balances[msg.sender];
        require(bal > 0, "No balance");
        
        uint256 withdrawAmount = amount == 0 ? bal : amount;
        require(withdrawAmount <= bal, "Insufficient balance");
        
        balances[msg.sender] -= withdrawAmount;
        require(usdc.transfer(to, withdrawAmount), "Transfer failed");
        
        emit Withdrawal(msg.sender, to, withdrawAmount);
    }
    
    // === OPERATOR FUNCTIONS (with daily limits) ===
    
    /// @notice Resolve a disputed bounty (operator has daily limit)
    function resolveDispute(uint256 bountyId, bool payAgent) 
        external 
        onlyOperatorOrTreasury 
        operatorWithLimit(bounties[bountyId].reward)
        nonReentrant 
    {
        Bounty storage b = bounties[bountyId];
        require(b.status == Status.Disputed, "Not disputed");
        
        if (payAgent) {
            _releaseFunds(bountyId);
        } else {
            // Refund poster
            b.status = Status.Cancelled;
            require(usdc.transfer(b.poster, b.reward + b.platformFee), "Refund failed");
        }
        
        emit DisputeResolved(bountyId, payAgent);
    }
    
    function _releaseFunds(uint256 bountyId) internal {
        Bounty storage b = bounties[bountyId];
        
        b.status = Status.Approved;
        balances[b.claimedBy] += b.reward;
        collectedFees += b.platformFee;
        
        // Update agent stats in registry
        try registry.updateAgentStats(b.claimedBy, b.reward) {} catch {}
        
        emit BountyApproved(bountyId, b.claimedBy, b.reward);
    }
    
    // === TREASURY FUNCTIONS (owner only) ===
    
    /// @notice Withdraw collected platform fees
    function withdrawFees(address to) external onlyTreasury nonReentrant {
        uint256 fees = collectedFees;
        require(fees > 0, "No fees");
        
        collectedFees = 0;
        require(usdc.transfer(to, fees), "Transfer failed");
        
        emit FeesWithdrawn(to, fees);
    }
    
    /// @notice Change operator address
    function setOperator(address newOperator) external onlyTreasury {
        emit OperatorChanged(operator, newOperator);
        operator = newOperator;
    }
    
    /// @notice Change operator daily limit
    function setOperatorLimit(uint256 newLimit) external onlyTreasury {
        emit OperatorLimitChanged(operatorDailyLimit, newLimit);
        operatorDailyLimit = newLimit;
    }
    
    /// @notice Change fee percentages
    function setFees(uint256 _standardBps, uint256 _anonymousBps) external onlyTreasury {
        require(_standardBps <= 1000, "Max 10%");
        require(_anonymousBps <= 1000, "Max 10%");
        standardFeeBps = _standardBps;
        anonymousFeeBps = _anonymousBps;
    }
    
    /// @notice Change auto-approve delay
    function setAutoApproveDelay(uint256 delay) external onlyTreasury {
        require(delay >= 1 days && delay <= 30 days, "Invalid delay");
        autoApproveDelay = delay;
    }
    
    /// @notice Update registry address
    function setRegistry(address _registry) external onlyTreasury {
        registry = IAgentRegistry(_registry);
    }
    
    /// @notice Transfer treasury to new address
    function setTreasury(address newTreasury) external onlyTreasury {
        require(newTreasury != address(0), "Invalid address");
        treasury = newTreasury;
    }
    
    /// @notice Emergency: cancel bounty and refund (treasury only)
    function emergencyCancel(uint256 bountyId) external onlyTreasury nonReentrant {
        Bounty storage b = bounties[bountyId];
        require(b.status != Status.Approved && b.status != Status.Cancelled, "Already finalized");
        
        b.status = Status.Cancelled;
        require(usdc.transfer(b.poster, b.reward + b.platformFee), "Refund failed");
    }
    
    // === VIEW FUNCTIONS ===
    
    function getBounty(uint256 bountyId) external view returns (Bounty memory) {
        return bounties[bountyId];
    }
    
    function getBalance(address agent) external view returns (uint256) {
        return balances[agent];
    }
    
    function getOperatorRemainingToday() external view returns (uint256) {
        uint256 today = block.timestamp / 1 days;
        if (today > lastResetDay) {
            return operatorDailyLimit;
        }
        return operatorDailyLimit - operatorSpentToday;
    }
}
