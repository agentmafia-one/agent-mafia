import { NextResponse } from 'next/server'
import { createPublicClient, http } from 'viem'
import { base } from 'viem/chains'

const BOUNTY_BOARD = '0xFA4Db70667FDffBc5F53C838DF70E190F197be2c'

const BountyBoardABI = [
  {
    inputs: [],
    name: 'bountyCount',
    outputs: [{ name: '', type: 'uint256' }],
    stateMutability: 'view',
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
] as const

const statusNames = ['open', 'claimed', 'submitted', 'approved', 'disputed', 'cancelled', 'expired']

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const statusFilter = searchParams.get('status') // 'open', 'all', or specific status
  const limit = parseInt(searchParams.get('limit') || '50')
  
  try {
    const client = createPublicClient({
      chain: base,
      transport: http('https://mainnet.base.org'),
    })

    const count = await client.readContract({
      address: BOUNTY_BOARD,
      abi: BountyBoardABI,
      functionName: 'bountyCount',
    })

    const bounties = []
    
    for (let i = 1; i <= Number(count) && bounties.length < limit; i++) {
      try {
        const data = await client.readContract({
          address: BOUNTY_BOARD,
          abi: BountyBoardABI,
          functionName: 'getBounty',
          args: [BigInt(i)],
        })

        const status = statusNames[Number(data.status)]
        
        // Filter by status if specified
        if (statusFilter && statusFilter !== 'all' && status !== statusFilter) {
          continue
        }

        // Decode metadata
        let title = `Bounty #${i}`
        let description = ''
        let category = 'general'
        
        if (data.metadataURI.startsWith('data:application/json;base64,')) {
          try {
            const meta = JSON.parse(atob(data.metadataURI.split(',')[1]))
            title = meta.title || title
            description = meta.description || ''
            category = meta.category || category
          } catch {}
        }

        bounties.push({
          id: i,
          title,
          description,
          category,
          reward: Number(data.reward) / 1e6,
          status,
          deadline: Number(data.deadline),
          deadlineISO: new Date(Number(data.deadline) * 1000).toISOString(),
          createdAt: Number(data.createdAt),
          poster: data.isAnonymous ? 'anonymous' : data.poster,
          claimedBy: data.claimedBy === '0x0000000000000000000000000000000000000000' ? null : data.claimedBy,
        })
      } catch (err) {
        console.error(`Error fetching bounty ${i}:`, err)
      }
    }

    return NextResponse.json({
      success: true,
      chain: 'base',
      contract: BOUNTY_BOARD,
      total: Number(count),
      returned: bounties.length,
      bounties,
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    }, { status: 500 })
  }
}
