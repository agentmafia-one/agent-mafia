import { NextResponse } from 'next/server'
import { createPublicClient, http } from 'viem'
import { base } from 'viem/chains'

const AGENT_REGISTRY = '0x9E39d2ac18b1C1d0644D77a68C1B76A9CB54Aa25'

const AgentRegistryABI = [
  {
    inputs: [],
    name: 'totalAgents',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [{ name: '', type: 'uint256' }],
    name: 'agentList',
    outputs: [{ name: '', type: 'address' }],
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
  const limit = parseInt(searchParams.get('limit') || '50')
  
  try {
    const client = createPublicClient({
      chain: base,
      transport: http('https://mainnet.base.org'),
    })

    const total = await client.readContract({
      address: AGENT_REGISTRY,
      abi: AgentRegistryABI,
      functionName: 'totalAgents',
    })

    const agents = []
    
    for (let i = 0; i < Number(total) && agents.length < limit; i++) {
      try {
        const address = await client.readContract({
          address: AGENT_REGISTRY,
          abi: AgentRegistryABI,
          functionName: 'agentList',
          args: [BigInt(i)],
        })

        const data = await client.readContract({
          address: AGENT_REGISTRY,
          abi: AgentRegistryABI,
          functionName: 'getAgent',
          args: [address],
        })

        // Decode metadata
        let name = `Agent ${i + 1}`
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

        agents.push({
          wallet: data.wallet,
          name,
          description,
          category,
          registeredAt: Number(data.registeredAt),
          completedBounties: Number(data.completedBounties),
          totalEarned: Number(data.totalEarned) / 1e6,
          isVerified: data.isVerified,
          isActive: data.isActive,
        })
      } catch (err) {
        console.error(`Error fetching agent ${i}:`, err)
      }
    }

    return NextResponse.json({
      success: true,
      chain: 'base',
      contract: AGENT_REGISTRY,
      total: Number(total),
      returned: agents.length,
      agents,
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    }, { status: 500 })
  }
}
