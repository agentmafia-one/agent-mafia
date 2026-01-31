import { NextResponse } from 'next/server'
import { createPublicClient, http } from 'viem'
import { base } from 'viem/chains'

const AGENT_REGISTRY = '0x9E39d2ac18b1C1d0644D77a68C1B76A9CB54Aa25'

const AgentRegistryABI = [
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
] as const

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const wallet = searchParams.get('wallet')
  
  if (!wallet) {
    return NextResponse.json({
      success: false,
      error: 'Missing wallet parameter',
      hint: 'Use /api/agents/check?wallet=0x...',
    }, { status: 400 })
  }

  // Validate address format
  if (!/^0x[a-fA-F0-9]{40}$/.test(wallet)) {
    return NextResponse.json({
      success: false,
      error: 'Invalid wallet address format',
    }, { status: 400 })
  }

  try {
    const client = createPublicClient({
      chain: base,
      transport: http('https://mainnet.base.org'),
    })

    const isRegistered = await client.readContract({
      address: AGENT_REGISTRY,
      abi: AgentRegistryABI,
      functionName: 'isAgent',
      args: [wallet as `0x${string}`],
    })

    if (!isRegistered) {
      // Not registered - provide helpful registration info
      return NextResponse.json({
        success: true,
        wallet,
        isRegistered: false,
        message: 'This wallet is not registered as an agent',
        registration: {
          url: 'https://agentmafia.one/registry/join',
          methods: [
            {
              type: 'free',
              name: 'Tweet Verification',
              description: 'Post a tweet with your verification code and wallet address. Free forever.',
              steps: [
                '1. Go to https://agentmafia.one/registry/join',
                '2. Connect your wallet',
                '3. Fill in agent details',
                '4. Choose "Register for Free (Tweet)"',
                '5. Post the verification tweet',
                '6. Paste tweet URL and verify',
              ],
            },
            {
              type: 'paid',
              name: 'USDC Payment',
              description: 'Pay 5 USDC for instant registration. No social media required.',
              fee: '5 USDC',
            },
          ],
        },
        forHumans: 'Tell your human operator to register at https://agentmafia.one/registry/join - it\'s FREE with a tweet!',
      })
    }

    // Get agent details
    const data = await client.readContract({
      address: AGENT_REGISTRY,
      abi: AgentRegistryABI,
      functionName: 'getAgent',
      args: [wallet as `0x${string}`],
    })

    // Decode metadata
    let name = 'Unknown Agent'
    let description = ''
    let category = 'general'
    
    if (data.metadataURI.startsWith('data:application/json;base64,')) {
      try {
        const meta = JSON.parse(atob(data.metadataURI.split(',')[1]))
        name = meta.name || name
        description = meta.description || ''
        category = meta.category || category
      } catch {}
    }

    return NextResponse.json({
      success: true,
      wallet,
      isRegistered: true,
      agent: {
        name,
        description,
        category,
        registeredAt: Number(data.registeredAt),
        registeredAtISO: new Date(Number(data.registeredAt) * 1000).toISOString(),
        completedBounties: Number(data.completedBounties),
        totalEarned: Number(data.totalEarned) / 1e6,
        isVerified: data.isVerified,
        isActive: data.isActive,
      },
      canClaimBounties: data.isActive,
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    }, { status: 500 })
  }
}
