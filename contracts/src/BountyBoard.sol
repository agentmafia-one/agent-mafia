// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC20} from "forge-std/interfaces/IERC20.sol";

interface IAgentRegistry {
    function isAgent(address wallet) external view returns (bool);
    function recordCompletion(address agent, uint256 amount) external;
}

/// @title BountyBoard - The Agent Mafia Contract Board
/// @notice Post bounties, claim work, get paid. No questions asked.
contract BountyBoard {
    enum Status { Open, Claimed, Submitted, Approved, Disputed, Cancelled, Expired }

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
        Status status;
        bool isAnonymous;
    }

    mapping(uint256 => Bounty) public bounties;
    uint256 public bountyCount;

    // Custodial balances for agents
    mapping(address => uint256) public balances;

    uint256 public standardFeeBps = 200;   // 2%
    uint256 public anonymousFeeBps = 250;  // 2.5%
    uint256 public constant BPS = 10000;

    IERC20 public usdc;
    address public treasury;
    IAgentRegistry public registry;
    address public owner;

    // Auto-approve after this many seconds if no dispute
    uint256 public autoApproveDelay = 7 days;

    event BountyCreated(uint256 indexed id, address indexed poster, uint256 reward, bool isAnonymous);
    event BountyClaimed(uint256 indexed id, address indexed agent);
    event WorkSubmitted(uint256 indexed id, bytes32 submissionHash);
    event BountyApproved(uint256 indexed id, address indexed agent, uint256 payout);
    event BountyDisputed(uint256 indexed id);
    event BountyCancelled(uint256 indexed id);
    event BountyExpired(uint256 indexed id);
    event Withdrawal(address indexed agent, address indexed to, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    constructor(address _usdc, address _treasury, address _registry) {
        usdc = IERC20(_usdc);
        treasury = _treasury;
        registry = IAgentRegistry(_registry);
        owner = msg.sender;
    }

    /// @notice Create a bounty with escrowed funds
    function createBounty(
        string calldata metadataURI,
        uint256 reward,
        uint256 deadline,
        bool isAnonymous
    ) external returns (uint256) {
        require(reward > 0, "Reward must be > 0");
        require(deadline > block.timestamp, "Deadline must be future");

        uint256 feeBps = isAnonymous ? anonymousFeeBps : standardFeeBps;
        uint256 fee = (reward * feeBps) / BPS;
        uint256 total = reward + fee;

        usdc.transferFrom(msg.sender, address(this), total);

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
            status: Status.Open,
            isAnonymous: isAnonymous
        });

        emit BountyCreated(bountyCount, msg.sender, reward, isAnonymous);
        return bountyCount;
    }

    /// @notice Claim an open bounty
    function claimBounty(uint256 bountyId) external {
        Bounty storage b = bounties[bountyId];
        require(b.status == Status.Open, "Not open");
        require(block.timestamp < b.deadline, "Expired");
        require(registry.isAgent(msg.sender), "Not registered agent");

        b.claimedBy = msg.sender;
        b.claimedAt = block.timestamp;
        b.status = Status.Claimed;

        emit BountyClaimed(bountyId, msg.sender);
    }

    /// @notice Submit completed work
    function submitWork(uint256 bountyId, bytes32 submissionHash) external {
        Bounty storage b = bounties[bountyId];
        require(b.claimedBy == msg.sender, "Not claimer");
        require(b.status == Status.Claimed, "Not in claimed state");

        b.submissionHash = submissionHash;
        b.status = Status.Submitted;

        emit WorkSubmitted(bountyId, submissionHash);
    }

    /// @notice Approve work and release payment (poster only)
    function approveBounty(uint256 bountyId) external {
        Bounty storage b = bounties[bountyId];
        require(b.poster == msg.sender, "Not poster");
        require(b.status == Status.Submitted, "Not submitted");

        _releaseFunds(bountyId);
    }

    /// @notice Auto-approve if no dispute after delay
    function autoApprove(uint256 bountyId) external {
        Bounty storage b = bounties[bountyId];
        require(b.status == Status.Submitted, "Not submitted");
        require(block.timestamp > b.claimedAt + autoApproveDelay, "Too early");

        _releaseFunds(bountyId);
    }

    function _releaseFunds(uint256 bountyId) internal {
        Bounty storage b = bounties[bountyId];
        
        // Credit agent balance (custodial)
        balances[b.claimedBy] += b.reward;
        // Pay platform immediately
        usdc.transfer(treasury, b.platformFee);

        b.status = Status.Approved;

        // Update agent stats
        registry.recordCompletion(b.claimedBy, b.reward);

        emit BountyApproved(bountyId, b.claimedBy, b.reward);
    }

    /// @notice Withdraw earned balance to specified address
    /// @param to Destination wallet (owner's wallet)
    /// @param amount Amount to withdraw (0 = all)
    function withdraw(address to, uint256 amount) external {
        uint256 bal = balances[msg.sender];
        require(bal > 0, "No balance");
        
        uint256 withdrawAmount = amount == 0 ? bal : amount;
        require(withdrawAmount <= bal, "Insufficient balance");

        balances[msg.sender] -= withdrawAmount;
        usdc.transfer(to, withdrawAmount);

        emit Withdrawal(msg.sender, to, withdrawAmount);
    }

    /// @notice Get agent's current balance
    function getBalance(address agent) external view returns (uint256) {
        return balances[agent];
    }

    /// @notice Dispute submitted work (poster only)
    function disputeBounty(uint256 bountyId) external {
        Bounty storage b = bounties[bountyId];
        require(b.poster == msg.sender, "Not poster");
        require(b.status == Status.Submitted, "Not submitted");

        b.status = Status.Disputed;
        emit BountyDisputed(bountyId);
        // Manual resolution by admin
    }

    /// @notice Cancel unclaimed bounty and refund
    function cancelBounty(uint256 bountyId) external {
        Bounty storage b = bounties[bountyId];
        require(b.poster == msg.sender, "Not poster");
        require(b.status == Status.Open, "Already claimed");

        usdc.transfer(b.poster, b.reward + b.platformFee);
        b.status = Status.Cancelled;

        emit BountyCancelled(bountyId);
    }

    /// @notice Unclaim expired bounty (anyone can call)
    function expireBounty(uint256 bountyId) external {
        Bounty storage b = bounties[bountyId];
        require(b.status == Status.Claimed, "Not claimed");
        require(block.timestamp > b.deadline, "Not expired");

        // Reset to open or refund
        b.claimedBy = address(0);
        b.claimedAt = 0;
        b.status = Status.Open;
        // Extend deadline by 7 days
        b.deadline = block.timestamp + 7 days;

        emit BountyExpired(bountyId);
    }

    /// @notice Resolve dispute (admin only)
    function resolveDispute(uint256 bountyId, bool payAgent) external onlyOwner {
        Bounty storage b = bounties[bountyId];
        require(b.status == Status.Disputed, "Not disputed");

        if (payAgent) {
            _releaseFunds(bountyId);
        } else {
            // Refund poster
            usdc.transfer(b.poster, b.reward + b.platformFee);
            b.status = Status.Cancelled;
        }
    }

    /// @notice Get bounty details
    function getBounty(uint256 bountyId) external view returns (Bounty memory) {
        return bounties[bountyId];
    }

    /// @notice Update fee rates
    function setFees(uint256 _standardBps, uint256 _anonymousBps) external onlyOwner {
        require(_standardBps <= 1000, "Fee too high"); // Max 10%
        require(_anonymousBps <= 1000, "Fee too high");
        standardFeeBps = _standardBps;
        anonymousFeeBps = _anonymousBps;
    }

    /// @notice Update auto-approve delay
    function setAutoApproveDelay(uint256 _delay) external onlyOwner {
        autoApproveDelay = _delay;
    }
}
