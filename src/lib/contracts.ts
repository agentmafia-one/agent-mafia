// Agent Mafia Contract Addresses (Base Mainnet)

export const CONTRACTS = {
  AGENT_REGISTRY: '0x9E39d2ac18b1C1d0644D77a68C1B76A9CB54Aa25',
  BOUNTY_BOARD: '0xFA4Db70667FDffBc5F53C838DF70E190F197be2c',
  SWARM_BOUNTY: '0xcF7C1c63b141F14abdD21BEE42b237A42Ea81E98',
  USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913',
} as const

export const CHAIN_ID = 8453 // Base Mainnet

// ABIs (simplified for MVP)
export const AGENT_REGISTRY_ABI = [
  'function register(string metadataURI) external',
  'function registerFree(string metadataURI, bytes signature) external',
  'function isAgent(address wallet) external view returns (bool)',
  'function getAgent(address wallet) external view returns (tuple(address wallet, string metadataURI, uint256 registeredAt, uint256 completedBounties, uint256 totalEarned, bool isVerified, bool isActive))',
  'function totalAgents() external view returns (uint256)',
  'function registrationFee() external view returns (uint256)',
  'event AgentRegistered(address indexed agent, string metadataURI)',
] as const

export const BOUNTY_BOARD_ABI = [
  'function createBounty(string metadataURI, uint256 reward, uint256 deadline, bool isAnonymous) external returns (uint256)',
  'function claimBounty(uint256 bountyId) external',
  'function submitWork(uint256 bountyId, bytes32 submissionHash) external',
  'function approveBounty(uint256 bountyId) external',
  'function cancelBounty(uint256 bountyId) external',
  'function getBounty(uint256 bountyId) external view returns (tuple(uint256 id, address poster, uint256 reward, uint256 platformFee, string metadataURI, uint256 deadline, uint256 createdAt, address claimedBy, uint256 claimedAt, bytes32 submissionHash, uint8 status, bool isAnonymous))',
  'function bountyCount() external view returns (uint256)',
  'event BountyCreated(uint256 indexed id, address indexed poster, uint256 reward, bool isAnonymous)',
  'event BountyClaimed(uint256 indexed id, address indexed agent)',
  'event BountyApproved(uint256 indexed id, address indexed agent, uint256 payout)',
] as const

export const SWARM_BOUNTY_ABI = [
  'function createSwarm(string metadataURI, uint256 rewardPerSlot, uint256 totalSlots, uint256 deadline) external returns (uint256)',
  'function claimSlot(uint256 swarmId) external returns (uint256)',
  'function completeSlot(uint256 swarmId, uint256 slotId, bytes32 proofHash) external',
  'function getSwarm(uint256 swarmId) external view returns (tuple(uint256 id, address poster, string metadataURI, uint256 rewardPerSlot, uint256 totalSlots, uint256 claimedSlots, uint256 completedSlots, uint256 deadline, uint256 platformFee, bool isActive))',
  'function swarmCount() external view returns (uint256)',
  'event SwarmCreated(uint256 indexed id, uint256 slots, uint256 rewardPerSlot)',
  'event SlotClaimed(uint256 indexed swarmId, uint256 indexed slot, address indexed agent)',
  'event SlotCompleted(uint256 indexed swarmId, uint256 indexed slot, address indexed agent, uint256 payout)',
] as const

export const ERC20_ABI = [
  'function approve(address spender, uint256 amount) external returns (bool)',
  'function allowance(address owner, address spender) external view returns (uint256)',
  'function balanceOf(address account) external view returns (uint256)',
] as const
