// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";

/**
 * @title AgentRegistryV2
 * @notice Secure agent registration with role separation
 * @dev Treasury owns contract, Operator handles day-to-day
 */
contract AgentRegistryV2 is ReentrancyGuard {
    
    // === ROLES ===
    address public treasury;    // Owner - receives fees, full control
    address public operator;    // Limited - day-to-day operations
    
    // === STATE ===
    IERC20 public immutable usdc;
    uint256 public registrationFee = 5e6; // $5 USDC
    uint256 public totalAgents;
    
    struct Agent {
        address wallet;
        string metadataURI;
        uint256 registeredAt;
        uint256 completedBounties;
        uint256 totalEarned;
        bool isVerified;
        bool isActive;
    }
    
    mapping(address => Agent) public agents;
    address[] public agentList;
    
    // === EVENTS ===
    event AgentRegistered(address indexed wallet, string metadataURI);
    event AgentVerified(address indexed wallet);
    event AgentDeactivated(address indexed wallet);
    event FeesWithdrawn(address indexed to, uint256 amount);
    event OperatorChanged(address indexed oldOperator, address indexed newOperator);
    event TreasuryChanged(address indexed oldTreasury, address indexed newTreasury);
    event RegistrationFeeChanged(uint256 oldFee, uint256 newFee);
    
    // === MODIFIERS ===
    modifier onlyTreasury() {
        require(msg.sender == treasury, "Not treasury");
        _;
    }
    
    modifier onlyOperatorOrTreasury() {
        require(msg.sender == operator || msg.sender == treasury, "Not authorized");
        _;
    }
    
    // === CONSTRUCTOR ===
    constructor(address _usdc, address _treasury, address _operator) {
        require(_usdc != address(0), "Invalid USDC");
        require(_treasury != address(0), "Invalid treasury");
        
        usdc = IERC20(_usdc);
        treasury = _treasury;
        operator = _operator;
    }
    
    // === PUBLIC FUNCTIONS ===
    
    /// @notice Register as an agent (anyone can call, pays fee)
    function register(string calldata metadataURI) external nonReentrant {
        require(!isAgent(msg.sender), "Already registered");
        require(bytes(metadataURI).length > 0, "Empty metadata");
        
        // Collect fee (goes to contract, treasury withdraws later)
        if (registrationFee > 0) {
            require(usdc.transferFrom(msg.sender, address(this), registrationFee), "Fee transfer failed");
        }
        
        agents[msg.sender] = Agent({
            wallet: msg.sender,
            metadataURI: metadataURI,
            registeredAt: block.timestamp,
            completedBounties: 0,
            totalEarned: 0,
            isVerified: false,
            isActive: true
        });
        
        agentList.push(msg.sender);
        totalAgents++;
        
        emit AgentRegistered(msg.sender, metadataURI);
    }
    
    /// @notice Check if address is registered agent
    function isAgent(address wallet) public view returns (bool) {
        return agents[wallet].wallet != address(0);
    }
    
    /// @notice Get agent details
    function getAgent(address wallet) external view returns (Agent memory) {
        require(isAgent(wallet), "Not an agent");
        return agents[wallet];
    }
    
    // === OPERATOR FUNCTIONS (Low-risk daily operations) ===
    
    /// @notice Verify an agent (operator or treasury)
    function verifyAgent(address wallet) external onlyOperatorOrTreasury {
        require(isAgent(wallet), "Not an agent");
        agents[wallet].isVerified = true;
        emit AgentVerified(wallet);
    }
    
    /// @notice Deactivate an agent (operator or treasury)
    function deactivateAgent(address wallet) external onlyOperatorOrTreasury {
        require(isAgent(wallet), "Not an agent");
        agents[wallet].isActive = false;
        emit AgentDeactivated(wallet);
    }
    
    /// @notice Reactivate an agent (operator or treasury)
    function reactivateAgent(address wallet) external onlyOperatorOrTreasury {
        require(isAgent(wallet), "Not an agent");
        agents[wallet].isActive = true;
    }
    
    /// @notice Update agent stats (called by BountyBoard)
    function updateAgentStats(address wallet, uint256 earned) external onlyOperatorOrTreasury {
        require(isAgent(wallet), "Not an agent");
        agents[wallet].completedBounties++;
        agents[wallet].totalEarned += earned;
    }
    
    // === TREASURY FUNCTIONS (High-risk, owner only) ===
    
    /// @notice Withdraw collected registration fees
    function withdrawFees(address to) external onlyTreasury nonReentrant {
        uint256 balance = usdc.balanceOf(address(this));
        require(balance > 0, "No fees to withdraw");
        require(usdc.transfer(to, balance), "Transfer failed");
        emit FeesWithdrawn(to, balance);
    }
    
    /// @notice Change registration fee
    function setRegistrationFee(uint256 newFee) external onlyTreasury {
        require(newFee <= 100e6, "Fee too high"); // Max $100
        emit RegistrationFeeChanged(registrationFee, newFee);
        registrationFee = newFee;
    }
    
    /// @notice Change operator address
    function setOperator(address newOperator) external onlyTreasury {
        emit OperatorChanged(operator, newOperator);
        operator = newOperator;
    }
    
    /// @notice Transfer treasury (ownership) to new address
    function setTreasury(address newTreasury) external onlyTreasury {
        require(newTreasury != address(0), "Invalid address");
        emit TreasuryChanged(treasury, newTreasury);
        treasury = newTreasury;
    }
    
    // === VIEW FUNCTIONS ===
    
    function getAgentCount() external view returns (uint256) {
        return totalAgents;
    }
    
    function getCollectedFees() external view returns (uint256) {
        return usdc.balanceOf(address(this));
    }
}
