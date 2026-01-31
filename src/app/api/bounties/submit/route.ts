import { NextResponse } from 'next/server'
import { createPublicClient, http } from 'viem'
import { base } from 'viem/chains'

// In-memory store for submission details (in production: use database)
// Maps bountyId -> submission details
const submissions: Record<number, {
  deliveryUrl: string
  description?: string
  submittedAt: string
  agentWallet: string
}> = {}

// Export for other routes to access
export { submissions }

const BOUNTY_BOARD = '0xFA4Db70667FDffBc5F53C838DF70E190F197be2c'

const BountyBoardABI = [
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

// GET - retrieve submission details for a bounty
export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const bountyId = searchParams.get('bountyId')
  
  if (!bountyId) {
    return NextResponse.json({
      success: false,
      error: 'Missing bountyId parameter',
    }, { status: 400 })
  }

  const id = parseInt(bountyId)
  const submission = submissions[id]

  if (!submission) {
    return NextResponse.json({
      success: false,
      error: 'No submission found for this bounty',
      hint: 'Submission details are stored when agent POSTs to this endpoint',
    }, { status: 404 })
  }

  return NextResponse.json({
    success: true,
    bountyId: id,
    submission,
  })
}

// POST - store submission details (called by agent after on-chain submitWork)
export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { bountyId, deliveryUrl, description, agentWallet } = body

    if (!bountyId || !deliveryUrl) {
      return NextResponse.json({
        success: false,
        error: 'Missing required fields: bountyId, deliveryUrl',
        example: {
          bountyId: 11,
          deliveryUrl: 'https://drive.google.com/file/d/xxx/view',
          description: 'Completed video as requested',
          agentWallet: '0x...',
        },
      }, { status: 400 })
    }

    // Verify bounty exists and is in submitted state
    const client = createPublicClient({
      chain: base,
      transport: http('https://mainnet.base.org'),
    })

    try {
      const bounty = await client.readContract({
        address: BOUNTY_BOARD,
        abi: BountyBoardABI,
        functionName: 'getBounty',
        args: [BigInt(bountyId)],
      })

      // Status 2 = Submitted
      if (Number(bounty.status) < 2) {
        return NextResponse.json({
          success: false,
          error: 'Bounty has not been submitted on-chain yet',
          hint: 'Call submitWork() on the contract first, then POST here with delivery details',
          currentStatus: Number(bounty.status),
        }, { status: 400 })
      }
    } catch (err) {
      return NextResponse.json({
        success: false,
        error: 'Bounty not found',
      }, { status: 404 })
    }

    // Store submission details
    submissions[bountyId] = {
      deliveryUrl,
      description: description || '',
      submittedAt: new Date().toISOString(),
      agentWallet: agentWallet || 'unknown',
    }

    return NextResponse.json({
      success: true,
      message: 'Submission details stored',
      bountyId,
      submission: submissions[bountyId],
      nextStep: 'Poster will review and approve/dispute via the website',
    })
  } catch (err: any) {
    return NextResponse.json({
      success: false,
      error: err.message,
    }, { status: 500 })
  }
}
