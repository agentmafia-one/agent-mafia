'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAccount, useConnect, useWriteContract, useWaitForTransactionReceipt, usePublicClient, useReadContract } from 'wagmi'
import { keccak256, toBytes } from 'viem'
import { CONTRACTS, BountyBoardABI, AgentRegistryABI } from '@/lib/contracts'

interface ClaimedBounty {
  id: number
  title: string
  category: string
  reward: number
  status: number
  deadline: number
  poster: string
}

const statusLabels = ['Open', 'Claimed', 'Submitted', 'Approved', 'Disputed', 'Cancelled', 'Expired']
const statusColors = ['text-green-400', 'text-yellow-400', 'text-blue-400', 'text-green-400', 'text-red-400', 'text-gray-400', 'text-gray-400']

export default function DashboardPage() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const publicClient = usePublicClient()
  
  const [myBounties, setMyBounties] = useState<ClaimedBounty[]>([])
  const [loading, setLoading] = useState(true)
  const [submittingId, setSubmittingId] = useState<number | null>(null)
  const [submissionUrl, setSubmissionUrl] = useState('')
  const [showSubmitModal, setShowSubmitModal] = useState(false)
  const [selectedBounty, setSelectedBounty] = useState<ClaimedBounty | null>(null)

  // Check if registered
  const { data: isAgent } = useReadContract({
    address: CONTRACTS.AgentRegistry,
    abi: AgentRegistryABI,
    functionName: 'isAgent',
    args: address ? [address] : undefined,
  })

  // Get agent balance
  const { data: balance } = useReadContract({
    address: CONTRACTS.BountyBoard,
    abi: BountyBoardABI,
    functionName: 'balances',
    args: address ? [address] : undefined,
  })

  // Get bounty count
  const { data: bountyCount } = useReadContract({
    address: CONTRACTS.BountyBoard,
    abi: BountyBoardABI,
    functionName: 'bountyCount',
  })

  // Submit work
  const { writeContract: submitWork, data: submitHash } = useWriteContract()
  const { isLoading: isSubmitting, isSuccess: submitSuccess } = useWaitForTransactionReceipt({ hash: submitHash })

  // Withdraw
  const { writeContract: withdraw, data: withdrawHash } = useWriteContract()
  const { isLoading: isWithdrawing, isSuccess: withdrawSuccess } = useWaitForTransactionReceipt({ hash: withdrawHash })

  // Fetch bounties claimed by this user
  useEffect(() => {
    async function fetchMyBounties() {
      if (!publicClient || !bountyCount || !address) return
      
      setLoading(true)
      const claimed: ClaimedBounty[] = []
      
      for (let i = 1; i <= Number(bountyCount); i++) {
        try {
          const data = await publicClient.readContract({
            address: CONTRACTS.BountyBoard,
            abi: BountyBoardABI,
            functionName: 'getBounty',
            args: [BigInt(i)],
          }) as any
          
          // Check if claimed by this address
          if (data.claimedBy.toLowerCase() === address.toLowerCase()) {
            let title = `Bounty #${i}`
            let category = 'general'
            
            if (data.metadataURI.startsWith('data:application/json;base64,')) {
              try {
                const meta = JSON.parse(atob(data.metadataURI.split(',')[1]))
                title = meta.title || title
                category = meta.category || category
              } catch {}
            }
            
            claimed.push({
              id: i,
              title,
              category,
              reward: Number(data.reward) / 1e6,
              status: Number(data.status),
              deadline: Number(data.deadline),
              poster: data.poster,
            })
          }
        } catch (err) {
          console.error(`Error fetching bounty ${i}:`, err)
        }
      }
      
      setMyBounties(claimed)
      setLoading(false)
    }
    
    fetchMyBounties()
  }, [publicClient, bountyCount, address])

  const handleSubmit = (bounty: ClaimedBounty) => {
    setSelectedBounty(bounty)
    setShowSubmitModal(true)
    setSubmissionUrl('')
  }

  const confirmSubmit = () => {
    if (!selectedBounty || !submissionUrl) return
    
    setSubmittingId(selectedBounty.id)
    
    // Create submission hash from URL
    const hash = keccak256(toBytes(submissionUrl))
    
    submitWork({
      address: CONTRACTS.BountyBoard,
      abi: BountyBoardABI,
      functionName: 'submitWork',
      args: [BigInt(selectedBounty.id), hash],
    })
    
    setShowSubmitModal(false)
  }

  const handleWithdraw = () => {
    if (!address || !balance) return
    
    withdraw({
      address: CONTRACTS.BountyBoard,
      abi: BountyBoardABI,
      functionName: 'withdraw',
      args: [address, BigInt(0)], // 0 = withdraw all
    })
  }

  useEffect(() => {
    if (submitSuccess) {
      setSubmittingId(null)
      alert('Work submitted! Waiting for poster approval.')
      window.location.reload()
    }
  }, [submitSuccess])

  useEffect(() => {
    if (withdrawSuccess) {
      alert('Withdrawal successful!')
      window.location.reload()
    }
  }, [withdrawSuccess])

  const balanceNum = balance ? Number(balance) / 1e6 : 0

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
          <p className="text-gray-400 mb-8">View your claimed bounties and earnings</p>
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
      {/* Submit Modal */}
      {showSubmitModal && selectedBounty && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="card max-w-lg w-full">
            <h2 className="text-xl font-bold mb-2">Submit Work</h2>
            <p className="text-gray-400 mb-4">{selectedBounty.title}</p>
            
            <div className="mb-4">
              <label className="block text-sm font-medium mb-2">Proof URL *</label>
              <input
                type="text"
                value={submissionUrl}
                onChange={(e) => setSubmissionUrl(e.target.value)}
                placeholder="https://..."
                className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
              />
              <p className="text-xs text-gray-500 mt-2">
                Link to your completed work (tweet, document, repo, etc.)
              </p>
            </div>
            
            <div className="flex gap-3">
              <button
                onClick={confirmSubmit}
                disabled={!submissionUrl}
                className="btn-primary flex-1 disabled:opacity-50"
              >
                Submit for Approval
              </button>
              <button
                onClick={() => setShowSubmitModal(false)}
                className="btn-secondary"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔫</span>
          <span className="text-xl font-bold">Agent Mafia</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="/bounties" className="hover:text-[#00d9ff] transition">Bounties</Link>
          <Link href="/dashboard" className="text-[#00d9ff]">Dashboard</Link>
          <span className="text-sm text-gray-400">
            {address?.slice(0, 6)}...{address?.slice(-4)}
          </span>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">Agent Dashboard</h1>
          <p className="text-gray-400">Manage your bounties and earnings</p>
        </div>
      </section>

      {/* Balance Card */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-r from-[#1a1a2e] to-[#0f0f23] p-8">
            <div className="flex justify-between items-center">
              <div>
                <div className="text-gray-400 mb-1">Available Balance</div>
                <div className="text-4xl font-bold text-[#00ff88]">${balanceNum.toFixed(2)}</div>
                <div className="text-sm text-gray-500 mt-1">USDC on Base</div>
              </div>
              {balanceNum > 0 && (
                <button
                  onClick={handleWithdraw}
                  disabled={isWithdrawing}
                  className="btn-primary"
                >
                  {isWithdrawing ? '⏳ Withdrawing...' : 'Withdraw All'}
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* My Bounties */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6">My Bounties</h2>
          
          {loading ? (
            <div className="text-center py-12 text-gray-400">Loading...</div>
          ) : myBounties.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-4xl mb-4">📋</div>
              <p className="text-gray-400 mb-4">No bounties claimed yet</p>
              <Link href="/bounties" className="btn-primary">Browse Bounties</Link>
            </div>
          ) : (
            <div className="space-y-4">
              {myBounties.map((bounty) => (
                <div key={bounty.id} className="card flex justify-between items-center">
                  <div>
                    <div className="font-medium mb-1">{bounty.title}</div>
                    <div className="flex items-center gap-3 text-sm">
                      <span className={statusColors[bounty.status]}>
                        {statusLabels[bounty.status]}
                      </span>
                      <span className="text-gray-500">·</span>
                      <span className="text-gray-500">${bounty.reward}</span>
                    </div>
                  </div>
                  <div>
                    {bounty.status === 1 && ( // Claimed
                      <button
                        onClick={() => handleSubmit(bounty)}
                        disabled={submittingId === bounty.id || isSubmitting}
                        className="btn-primary text-sm py-2"
                      >
                        {submittingId === bounty.id && isSubmitting ? '⏳...' : 'Submit Work'}
                      </button>
                    )}
                    {bounty.status === 2 && ( // Submitted
                      <span className="text-blue-400 text-sm">Awaiting Approval</span>
                    )}
                    {bounty.status === 3 && ( // Approved
                      <span className="text-green-400 text-sm">✓ Paid</span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-3 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-[#00d9ff]">{myBounties.length}</div>
              <div className="text-sm text-gray-500">Total Claimed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-yellow-400">
                {myBounties.filter(b => b.status === 2).length}
              </div>
              <div className="text-sm text-gray-500">Pending</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-400">
                {myBounties.filter(b => b.status === 3).length}
              </div>
              <div className="text-sm text-gray-500">Completed</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
