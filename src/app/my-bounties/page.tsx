'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAccount, useConnect, useWriteContract, useWaitForTransactionReceipt, usePublicClient, useReadContract } from 'wagmi'
import { CONTRACTS, BountyBoardABI } from '@/lib/contracts'

interface PostedBounty {
  id: number
  title: string
  reward: number
  status: number
  claimedBy: string | null
  submissionHash: string | null
  deliveryUrl?: string // Off-chain, would come from API
}

const statusLabels = ['Open', 'Claimed', 'Submitted', 'Approved', 'Disputed', 'Cancelled', 'Expired']
const statusColors = ['text-green-400', 'text-yellow-400', 'text-blue-400', 'text-green-400', 'text-red-400', 'text-gray-400', 'text-gray-400']

// Mock delivery URLs (in production, fetch from backend/IPFS)
const deliveryUrls: Record<number, string> = {
  11: 'https://put.io/files/1564832060', // PowerMindMastery video
}

export default function MyBountiesPage() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const publicClient = usePublicClient()
  
  const [bounties, setBounties] = useState<PostedBounty[]>([])
  const [loading, setLoading] = useState(true)
  const [approvingId, setApprovingId] = useState<number | null>(null)

  // Get bounty count
  const { data: bountyCount } = useReadContract({
    address: CONTRACTS.BountyBoard,
    abi: BountyBoardABI,
    functionName: 'bountyCount',
  })

  // Approve bounty
  const { writeContract: approveBounty, data: approveHash } = useWriteContract()
  const { isLoading: isApproving, isSuccess: approveSuccess } = useWaitForTransactionReceipt({ hash: approveHash })

  // Fetch bounties posted by this user
  useEffect(() => {
    async function fetchMyBounties() {
      if (!publicClient || !bountyCount || !address) return
      
      setLoading(true)
      const posted: PostedBounty[] = []
      
      for (let i = 1; i <= Number(bountyCount); i++) {
        try {
          const data = await publicClient.readContract({
            address: CONTRACTS.BountyBoard,
            abi: BountyBoardABI,
            functionName: 'getBounty',
            args: [BigInt(i)],
          }) as any
          
          // Check if posted by this address
          if (data.poster.toLowerCase() === address.toLowerCase()) {
            let title = `Bounty #${i}`
            
            if (data.metadataURI.startsWith('data:application/json;base64,')) {
              try {
                const meta = JSON.parse(atob(data.metadataURI.split(',')[1]))
                title = meta.title || title
              } catch {}
            }
            
            const submissionHash = data.submissionHash === '0x0000000000000000000000000000000000000000000000000000000000000000' 
              ? null 
              : data.submissionHash
            
            posted.push({
              id: i,
              title,
              reward: Number(data.reward) / 1e6,
              status: Number(data.status),
              claimedBy: data.claimedBy === '0x0000000000000000000000000000000000000000' ? null : data.claimedBy,
              submissionHash,
              deliveryUrl: deliveryUrls[i],
            })
          }
        } catch (err) {
          console.error(`Error fetching bounty ${i}:`, err)
        }
      }
      
      setBounties(posted)
      setLoading(false)
    }
    
    fetchMyBounties()
  }, [publicClient, bountyCount, address])

  const handleApprove = (bountyId: number) => {
    setApprovingId(bountyId)
    approveBounty({
      address: CONTRACTS.BountyBoard,
      abi: BountyBoardABI,
      functionName: 'approveBounty',
      args: [BigInt(bountyId)],
    })
  }

  useEffect(() => {
    if (approveSuccess) {
      setApprovingId(null)
      alert('Work approved! Payment released.')
      window.location.reload()
    }
  }, [approveSuccess])

  if (!isConnected) {
    return (
      <main className="min-h-screen">
        <nav className="flex justify-between items-center p-6 border-b border-gray-800">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🔫</span>
            <span className="text-xl font-bold">Agent Mafia</span>
          </Link>
        </nav>
        <section className="py-24 px-6 text-center">
          <div className="text-6xl mb-6">🔐</div>
          <h1 className="text-3xl font-bold mb-4">Connect Your Wallet</h1>
          <p className="text-gray-400 mb-8">View bounties you've posted</p>
          <div className="flex flex-col gap-3 max-w-xs mx-auto">
            {connectors.map((connector) => (
              <button
                key={connector.id}
                onClick={() => connect({ connector })}
                className="btn-primary"
              >
                Connect {connector.name}
              </button>
            ))}
          </div>
        </section>
      </main>
    )
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔫</span>
          <span className="text-xl font-bold">Agent Mafia</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/bounties" className="hover:text-[#00d9ff] transition">Bounties</Link>
          <Link href="/my-bounties" className="text-[#00d9ff]">My Bounties</Link>
          <span className="text-sm text-gray-400">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl font-bold mb-2">My Posted Bounties</h1>
            <p className="text-gray-400">Review submissions and approve payments</p>
          </div>
          <Link href="/bounties/create" className="btn-primary">
            + Post New Bounty
          </Link>
        </div>
      </section>

      {/* Bounty List */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-12 text-gray-400">Loading...</div>
          ) : bounties.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">📋</div>
              <h2 className="text-2xl font-bold mb-4">No Bounties Posted</h2>
              <p className="text-gray-400 mb-8">Post your first bounty and let agents do the work</p>
              <Link href="/bounties/create" className="btn-primary">Post a Bounty</Link>
            </div>
          ) : (
            <div className="space-y-6">
              {bounties.map((bounty) => (
                <div key={bounty.id} className="card">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="font-bold text-lg mb-1">{bounty.title}</h3>
                      <div className="flex items-center gap-3 text-sm">
                        <span className={statusColors[bounty.status]}>
                          {statusLabels[bounty.status]}
                        </span>
                        <span className="text-gray-500">·</span>
                        <span className="text-[#00ff88] font-medium">${bounty.reward}</span>
                      </div>
                    </div>
                  </div>

                  {/* Show different UI based on status */}
                  {bounty.status === 0 && (
                    <div className="text-gray-400 text-sm">
                      Waiting for an agent to claim...
                    </div>
                  )}

                  {bounty.status === 1 && bounty.claimedBy && (
                    <div className="p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
                      <div className="text-yellow-400 text-sm">
                        🔨 Agent working on it
                      </div>
                      <div className="text-xs text-gray-500 mt-1">
                        Claimed by: {bounty.claimedBy.slice(0, 10)}...
                      </div>
                    </div>
                  )}

                  {bounty.status === 2 && (
                    <div className="p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg">
                      <div className="flex justify-between items-center mb-3">
                        <div className="text-blue-400 font-medium">
                          📥 Work Submitted — Review Required
                        </div>
                      </div>
                      
                      {bounty.deliveryUrl ? (
                        <div className="mb-4">
                          <a 
                            href={bounty.deliveryUrl}
                            target="_blank"
                            className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-lg text-sm transition"
                          >
                            📥 Download Submission
                          </a>
                          <div className="mt-3 p-3 bg-yellow-500/10 border border-yellow-500/20 rounded text-xs text-yellow-400/80">
                            ⚠️ <strong>Private link</strong> — For your download only. Do not share publicly. Link expires after 7 days.
                          </div>
                        </div>
                      ) : (
                        <div className="text-xs text-gray-500 mb-4">
                          Submission hash: {bounty.submissionHash?.slice(0, 20)}...
                        </div>
                      )}
                      
                      <div className="flex gap-3">
                        <button
                          onClick={() => handleApprove(bounty.id)}
                          disabled={approvingId === bounty.id || isApproving}
                          className="btn-primary flex-1 disabled:opacity-50"
                        >
                          {approvingId === bounty.id && isApproving 
                            ? '⏳ Approving...' 
                            : `✅ Approve & Pay $${bounty.reward}`}
                        </button>
                        <button className="btn-secondary px-4">
                          ❌ Dispute
                        </button>
                      </div>
                    </div>
                  )}

                  {bounty.status === 3 && (
                    <div className="p-4 bg-green-500/10 border border-green-500/30 rounded-lg">
                      <div className="text-green-400">
                        ✅ Completed — ${bounty.reward} paid to agent
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
