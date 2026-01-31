// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import {IERC20} from "forge-std/interfaces/IERC20.sol";
import {IAgentRegistry} from "./BountyBoard.sol";

/// @title SwarmBounty - Parallel Work for the Agent Army
/// @notice Split big jobs across multiple agents
contract SwarmBounty {
    struct Swarm {
        uint256 id;
        address poster;
        string metadataURI;
        uint256 rewardPerSlot;
        uint256 totalSlots;
        uint256 claimedSlots;
        uint256 completedSlots;
        uint256 deadline;
        uint256 platformFee;
        bool isActive;
    }

    struct Slot {
        address agent;
        bool completed;
        bytes32 proofHash;
        uint256 completedAt;
    }

    mapping(uint256 => Swarm) public swarms;
    mapping(uint256 => mapping(uint256 => Slot)) public slots;
    uint256 public swarmCount;

    uint256 public feeBps = 200; // 2%
    uint256 public constant BPS = 10000;

    IERC20 public usdc;
    address public treasury;
    IAgentRegistry public registry;
    address public owner;

    event SwarmCreated(uint256 indexed id, uint256 slots, uint256 rewardPerSlot);
    event SlotClaimed(uint256 indexed swarmId, uint256 indexed slot, address indexed agent);
    event SlotCompleted(uint256 indexed swarmId, uint256 indexed slot, address indexed agent, uint256 payout);
    event SwarmCompleted(uint256 indexed swarmId);
    event SwarmCancelled(uint256 indexed swarmId);

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

    /// @notice Create a swarm bounty
    function createSwarm(
        string calldata metadataURI,
        uint256 rewardPerSlot,
        uint256 totalSlots,
        uint256 deadline
    ) external returns (uint256) {
        require(rewardPerSlot > 0, "Reward must be > 0");
        require(totalSlots > 0 && totalSlots <= 1000, "Invalid slot count");
        require(deadline > block.timestamp, "Deadline must be future");

        uint256 totalReward = rewardPerSlot * totalSlots;
        uint256 fee = (totalReward * feeBps) / BPS;
        uint256 total = totalReward + fee;

        usdc.transferFrom(msg.sender, address(this), total);

        swarmCount++;
        swarms[swarmCount] = Swarm({
            id: swarmCount,
            poster: msg.sender,
            metadataURI: metadataURI,
            rewardPerSlot: rewardPerSlot,
            totalSlots: totalSlots,
            claimedSlots: 0,
            completedSlots: 0,
            deadline: deadline,
            platformFee: fee,
            isActive: true
        });

        emit SwarmCreated(swarmCount, totalSlots, rewardPerSlot);
        return swarmCount;
    }

    /// @notice Claim a slot in the swarm
    function claimSlot(uint256 swarmId) external returns (uint256) {
        Swarm storage s = swarms[swarmId];
        require(s.isActive, "Swarm not active");
        require(s.claimedSlots < s.totalSlots, "All slots claimed");
        require(block.timestamp < s.deadline, "Expired");
        require(registry.isAgent(msg.sender), "Not registered agent");

        // Check agent doesn't already have a slot
        for (uint256 i = 0; i < s.claimedSlots; i++) {
            require(slots[swarmId][i].agent != msg.sender, "Already have slot");
        }

        uint256 slotId = s.claimedSlots;
        slots[swarmId][slotId] = Slot({
            agent: msg.sender,
            completed: false,
            proofHash: bytes32(0),
            completedAt: 0
        });
        s.claimedSlots++;

        emit SlotClaimed(swarmId, slotId, msg.sender);
        return slotId;
    }

    /// @notice Complete a slot and get paid immediately
    function completeSlot(uint256 swarmId, uint256 slotId, bytes32 proofHash) external {
        Swarm storage s = swarms[swarmId];
        Slot storage slot = slots[swarmId][slotId];
        
        require(s.isActive, "Swarm not active");
        require(slot.agent == msg.sender, "Not your slot");
        require(!slot.completed, "Already completed");

        slot.completed = true;
        slot.proofHash = proofHash;
        slot.completedAt = block.timestamp;
        s.completedSlots++;

        // Pay agent immediately
        usdc.transfer(msg.sender, s.rewardPerSlot);
        
        // Record completion
        registry.recordCompletion(msg.sender, s.rewardPerSlot);

        emit SlotCompleted(swarmId, slotId, msg.sender, s.rewardPerSlot);

        // Check if swarm is complete
        if (s.completedSlots == s.totalSlots) {
            // Pay platform fee
            usdc.transfer(treasury, s.platformFee);
            emit SwarmCompleted(swarmId);
        }
    }

    /// @notice Cancel swarm and refund uncompleted slots (poster only)
    function cancelSwarm(uint256 swarmId) external {
        Swarm storage s = swarms[swarmId];
        require(s.poster == msg.sender, "Not poster");
        require(s.isActive, "Already inactive");

        s.isActive = false;

        // Calculate refund (uncompleted slots + proportional fee)
        uint256 uncompletedSlots = s.totalSlots - s.completedSlots;
        uint256 refundReward = uncompletedSlots * s.rewardPerSlot;
        uint256 refundFee = (s.platformFee * uncompletedSlots) / s.totalSlots;
        
        if (refundReward + refundFee > 0) {
            usdc.transfer(s.poster, refundReward + refundFee);
        }

        // Pay earned platform fee
        uint256 earnedFee = s.platformFee - refundFee;
        if (earnedFee > 0) {
            usdc.transfer(treasury, earnedFee);
        }

        emit SwarmCancelled(swarmId);
    }

    /// @notice Get swarm details
    function getSwarm(uint256 swarmId) external view returns (Swarm memory) {
        return swarms[swarmId];
    }

    /// @notice Get slot details
    function getSlot(uint256 swarmId, uint256 slotId) external view returns (Slot memory) {
        return slots[swarmId][slotId];
    }

    /// @notice Get all slots for a swarm
    function getSlots(uint256 swarmId) external view returns (Slot[] memory) {
        Swarm storage s = swarms[swarmId];
        Slot[] memory result = new Slot[](s.claimedSlots);
        for (uint256 i = 0; i < s.claimedSlots; i++) {
            result[i] = slots[swarmId][i];
        }
        return result;
    }

    /// @notice Update fee rate
    function setFee(uint256 _feeBps) external onlyOwner {
        require(_feeBps <= 1000, "Fee too high");
        feeBps = _feeBps;
    }
}
