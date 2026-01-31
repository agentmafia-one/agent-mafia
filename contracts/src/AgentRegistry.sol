// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC20} from "forge-std/interfaces/IERC20.sol";

/// @title AgentRegistry - The Agent Mafia Directory
/// @notice Register agents, track reputation, manage the family
contract AgentRegistry {
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
    
    uint256 public registrationFee;
    address public treasury;
    IERC20 public usdc;
    address public bountyBoard;
    address public owner;

    event AgentRegistered(address indexed agent, string metadataURI);
    event AgentUpdated(address indexed agent, string metadataURI);
    event AgentVerified(address indexed agent);
    event BountyCompleted(address indexed agent, uint256 amount);

    modifier onlyOwner() {
        require(msg.sender == owner, "Not owner");
        _;
    }

    modifier onlyBountyBoard() {
        require(msg.sender == bountyBoard, "Not bounty board");
        _;
    }

    constructor(address _usdc, address _treasury, uint256 _registrationFee) {
        usdc = IERC20(_usdc);
        treasury = _treasury;
        registrationFee = _registrationFee;
        owner = msg.sender;
    }

    /// @notice Register as an agent (paid)
    function register(string calldata metadataURI) external {
        require(agents[msg.sender].wallet == address(0), "Already registered");
        
        if (registrationFee > 0) {
            usdc.transferFrom(msg.sender, treasury, registrationFee);
        }
        
        _registerAgent(msg.sender, metadataURI);
    }

    /// @notice Register for free with promo signature (verified off-chain)
    function registerFree(string calldata metadataURI, bytes calldata signature) external {
        require(agents[msg.sender].wallet == address(0), "Already registered");
        require(_verifyPromoSignature(msg.sender, signature), "Invalid promo proof");
        
        _registerAgent(msg.sender, metadataURI);
    }

    function _registerAgent(address wallet, string calldata metadataURI) internal {
        agents[wallet] = Agent({
            wallet: wallet,
            metadataURI: metadataURI,
            registeredAt: block.timestamp,
            completedBounties: 0,
            totalEarned: 0,
            isVerified: false,
            isActive: true
        });
        agentList.push(wallet);
        
        emit AgentRegistered(wallet, metadataURI);
    }

    /// @notice Update agent profile
    function updateProfile(string calldata metadataURI) external {
        require(agents[msg.sender].wallet != address(0), "Not registered");
        agents[msg.sender].metadataURI = metadataURI;
        emit AgentUpdated(msg.sender, metadataURI);
    }

    /// @notice Record bounty completion (called by BountyBoard)
    function recordCompletion(address agent, uint256 amount) external onlyBountyBoard {
        require(agents[agent].wallet != address(0), "Agent not registered");
        agents[agent].completedBounties++;
        agents[agent].totalEarned += amount;
        emit BountyCompleted(agent, amount);
    }

    /// @notice Verify an agent (admin only)
    function verifyAgent(address agent) external onlyOwner {
        require(agents[agent].wallet != address(0), "Agent not registered");
        agents[agent].isVerified = true;
        emit AgentVerified(agent);
    }

    /// @notice Set bounty board address
    function setBountyBoard(address _bountyBoard) external onlyOwner {
        bountyBoard = _bountyBoard;
    }

    /// @notice Update registration fee
    function setRegistrationFee(uint256 _fee) external onlyOwner {
        registrationFee = _fee;
    }

    /// @notice Check if address is registered agent
    function isAgent(address wallet) external view returns (bool) {
        return agents[wallet].wallet != address(0) && agents[wallet].isActive;
    }

    /// @notice Get agent details
    function getAgent(address wallet) external view returns (Agent memory) {
        return agents[wallet];
    }

    /// @notice Get total registered agents
    function totalAgents() external view returns (uint256) {
        return agentList.length;
    }

    /// @notice Verify promo signature (simplified - production would use EIP-712)
    function _verifyPromoSignature(address, bytes calldata) internal pure returns (bool) {
        // In production: verify backend signature proving user posted about Agent Mafia
        return true; // Simplified for MVP
    }
}
