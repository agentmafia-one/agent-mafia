// Contract addresses on Base mainnet
export const CONTRACTS = {
  AgentRegistry: '0x9E39d2ac18b1C1d0644D77a68C1B76A9CB54Aa25',
  BountyBoard: '0xFA4Db70667FDffBc5F53C838DF70E190F197be2c',
  SwarmBounty: '0xcF7C1c63b141F14abdD21BEE42b237A42Ea81E98',
  USDC: '0x833589fCD6eDb6E08f4c7C32D4f71b54bdA02913', // USDC on Base
} as const

// Agent Registry ABI
export const AgentRegistryABI = [
  {
    inputs: [{ name: 'metadataURI', type: 'string' }],
    name: 'register',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'metadataURI', type: 'string' },
      { name: 'signature', type: 'bytes' },
    ],
    name: 'registerFree',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'wallet', type: 'address' }],
    name: 'isAgent',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'wallet', type: 'address' }],
    name: 'getAgent',
    outputs: [
      {
        components: [
          { name: 'wallet', type: 'address' },
          { name: 'metadataURI', type: 'string' },
          { name: 'registeredAt', type: 'uint256' },
          { name: 'completedBounties', type: 'uint256' },
          { name: 'totalEarned', type: 'uint256' },
          { name: 'isVerified', type: 'bool' },
          { name: 'isActive', type: 'bool' },
        ],
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'totalAgents',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'registrationFee',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const

// Bounty Board ABI
export const BountyBoardABI = [
  {
    inputs: [
      { name: 'metadataURI', type: 'string' },
      { name: 'reward', type: 'uint256' },
      { name: 'deadline', type: 'uint256' },
      { name: 'isAnonymous', type: 'bool' },
    ],
    name: 'createBounty',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'bountyId', type: 'uint256' }],
    name: 'claimBounty',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'bountyId', type: 'uint256' },
      { name: 'submissionHash', type: 'bytes32' },
    ],
    name: 'submitWork',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'bountyId', type: 'uint256' }],
    name: 'getBounty',
    outputs: [
      {
        components: [
          { name: 'id', type: 'uint256' },
          { name: 'poster', type: 'address' },
          { name: 'reward', type: 'uint256' },
          { name: 'platformFee', type: 'uint256' },
          { name: 'metadataURI', type: 'string' },
          { name: 'deadline', type: 'uint256' },
          { name: 'createdAt', type: 'uint256' },
          { name: 'claimedBy', type: 'address' },
          { name: 'claimedAt', type: 'uint256' },
          { name: 'submissionHash', type: 'bytes32' },
          { name: 'status', type: 'uint8' },
          { name: 'isAnonymous', type: 'bool' },
        ],
        name: '',
        type: 'tuple',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'bountyCount',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'agent', type: 'address' }],
    name: 'balances',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      { name: 'to', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'withdraw',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [{ name: 'bountyId', type: 'uint256' }],
    name: 'approveBounty',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
] as const

// USDC ABI (for approvals)
export const USDCABI = [
  {
    inputs: [
      { name: 'spender', type: 'address' },
      { name: 'amount', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [{ name: '', type: 'bool' }],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      { name: 'owner', type: 'address' },
      { name: 'spender', type: 'address' },
    ],
    name: 'allowance',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: 'account', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
] as const
