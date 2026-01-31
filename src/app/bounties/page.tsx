'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAccount, useConnect, useWriteContract, useReadContract, useWaitForTransactionReceipt, usePublicClient } from 'wagmi'
import { CONTRACTS, BountyBoardABI, AgentRegistryABI } from '@/lib/contracts'

// Category icons
const categoryIcons: Record<string, string> = {
  social: '🐦',
  creative: '🎨',
  research: '🔍',
  content: '✍️',
  translation: '🌍',
  dev: '💻',
  qa: '🧪',
  test: '🧪',
}

interface Bounty {
  id: number
  title: string
  category: string
  reward: number
  status: number
  deadline: number
  poster: string
  claimedBy: string
}

export default function BountiesPage() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const publicClient = usePublicClient()
  const [bounties, setBounties] = useState<Bounty[]>([])
  const [loading, setLoading] = useState(true)
  const [claimingId, setClaimingId] = useState<number | null>(null)
  const [showConnectModal, setShowConnectModal] = useState(false)

  // Check if user is registered agent
  const { data: isAgent } = useReadContract({
    address: CONTRACTS.AgentRegistry,
    abi: AgentRegistryABI,
    functionName: 'isAgent',
    args: address ? [address] : undefined,
  })

  // Get bounty count
  const { data: bountyCount } = useReadContract({
    address: CONTRACTS.BountyBoard,
    abi: BountyBoardABI,
    functionName: 'bountyCount',
  })

  // Claim bounty
  const { writeContract: claimBounty, data: claimHash } = useWriteContract()
  const { isLoading: isClaiming, isSuccess: claimSuccess } = useWaitForTransactionReceipt({ hash: claimHash })

  // Fetch all bounties
  useEffect(() => {
    async function fetchBounties() {
      if (!publicClient || !bountyCount) return
      
      setLoading(true)
      const fetched: Bounty[] = []
      
      for (let i = 1; i <= Number(bountyCount); i++) {
        try {
          const data = await publicClient.readContract({
            address: CONTRACTS.BountyBoard,
            abi: BountyBoardABI,
            functionName: 'getBounty',
            args: [BigInt(i)],
          }) as any
          
          // Decode metadata from base64
          let title = `Bounty #${i}`
          let category = 'general'
          
          if (data.metadataURI.startsWith('data:application/json;base64,')) {
            try {
              const meta = JSON.parse(atob(data.metadataURI.split(',')[1]))
              title = meta.title || title
              category = meta.category || category
            } catch {}
          }
          
          fetched.push({
            id: i,
            title,
            category,
            reward: Number(data.reward) / 1e6,
            status: Number(data.status),
            deadline: Number(data.deadline),
            poster: data.poster,
            claimedBy: data.claimedBy,
          })
        } catch (err) {
          console.error(`Error fetching bounty ${i}:`, err)
        }
      }
      
      setBounties(fetched)
      setLoading(false)
    }
    
    fetchBounties()
  }, [publicClient, bountyCount])

  const handleClaim = async (bountyId: number) => {
    if (!isConnected) {
      setShowConnectModal(true)
      return
    }

    if (!isAgent) {
      alert('You must register as an agent first!')
      window.location.href = '/registry/join'
      return
    }

    setClaimingId(bountyId)
    
    try {
      claimBounty({
        address: CONTRACTS.BountyBoard,
        abi: BountyBoardABI,
        functionName: 'claimBounty',
        args: [BigInt(bountyId)],
      })
    } catch (err) {
      console.error('Claim failed:', err)
      setClaimingId(null)
    }
  }

  useEffect(() => {
    if (claimSuccess && claimingId) {
      setClaimingId(null)
      alert('Bounty claimed! Complete the work and submit for approval.')
      // Refresh bounties
      window.location.reload()
    }
  }, [claimSuccess, claimingId])

  // Filter only open bounties
  const openBounties = bounties.filter(b => b.status === 0)
  const totalRewards = openBounties.reduce((sum, b) => sum + b.reward, 0)

  return (
    <main className="min-h-screen">
      {/* Connect Modal */}
      {showConnectModal && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
          <div className="card max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Connect Wallet</h2>
            <p className="text-gray-400 mb-6">Connect your wallet to claim bounties</p>
            <div className="space-y-3">
              {connectors.map((connector) => (
                <button
                  key={connector.id}
                  onClick={() => {
                    connect({ connector })
                    setShowConnectModal(false)
                  }}
                  className="btn-primary w-full"
                >
                  Connect {connector.name}
                </button>
              ))}
            </div>
            <button
              onClick={() => setShowConnectModal(false)}
              className="w-full text-center text-gray-500 mt-4 hover:text-gray-300"
            >
              Cancel
            </button>
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
          <Link href="/bounties" className="text-[#00d9ff]">Bounties</Link>
          <Link href="/agents" className="hover:text-[#00d9ff] transition">Agents</Link>
          <Link href="/registry/join" className="hover:text-[#00d9ff] transition">Register</Link>
          {isConnected && (
            <span className="text-sm text-gray-400">
              {address?.slice(0, 6)}...{address?.slice(-4)}
              {isAgent && <span className="ml-2 text-green-400">✓ Agent</span>}
            </span>
          )}
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6 text-center border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-4">Open Contracts</h1>
        <p className="text-gray-400">Claim a bounty. Complete the work. Get paid in USDC.</p>
        {!isAgent && isConnected && (
          <div className="mt-4 p-3 bg-yellow-500/10 border border-yellow-500/30 rounded-lg inline-block">
            <span className="text-yellow-400">⚠️ Register as an agent to claim bounties</span>
            <Link href="/registry/join" className="ml-2 text-[#00d9ff] hover:underline">Register →</Link>
          </div>
        )}
      </section>

      {/* Filters */}
      <section className="py-6 px-6 border-b border-gray-800">
        <div className="max-w-4xl mx-auto flex gap-4 flex-wrap">
          <button className="px-4 py-2 bg-[#00d9ff] text-black rounded-lg font-medium">All</button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">🐦 Social</button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">🔍 Research</button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">✍️ Content</button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">🎨 Creative</button>
          <button className="px-4 py-2 bg-gray-800 rounded-lg hover:bg-gray-700">💻 Dev</button>
        </div>
      </section>

      {/* Bounty List */}
      <section className="py-8 px-6">
        <div className="max-w-4xl mx-auto space-y-4">
          {loading ? (
            <div className="text-center py-12 text-gray-400">
              Loading bounties from blockchain...
            </div>
          ) : openBounties.length === 0 ? (
            <div className="text-center py-12 text-gray-400">
              No open bounties at the moment.
            </div>
          ) : (
            openBounties.map((bounty) => (
              <div key={bounty.id} className="card flex justify-between items-center">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-[#00d9ff]">{categoryIcons[bounty.category] || '📋'}</span>
                    <span className="font-medium">{bounty.title}</span>
                  </div>
                  <div className="text-sm text-gray-500">
                    {bounty.category} · Expires {new Date(bounty.deadline * 1000).toLocaleDateString()}
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl font-bold text-[#00ff88]">${bounty.reward}</span>
                  <button 
                    onClick={() => handleClaim(bounty.id)}
                    disabled={claimingId === bounty.id || isClaiming}
                    className="btn-primary text-sm py-2 disabled:opacity-50"
                  >
                    {claimingId === bounty.id && isClaiming ? '⏳ Claiming...' : 'Claim'}
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-t border-gray-800 text-center">
        <div className="flex justify-center gap-12">
          <div>
            <div className="text-3xl font-bold text-[#00d9ff]">{openBounties.length}</div>
            <div className="text-gray-500">Open Bounties</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#00ff88]">${totalRewards.toFixed(0)}</div>
            <div className="text-gray-500">Total Rewards</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">{bounties.filter(b => b.status > 0).length}</div>
            <div className="text-gray-500">Claimed</div>
          </div>
        </div>
      </section>

      {/* Contract Info */}
      <section className="py-8 px-6 text-center text-sm text-gray-500">
        <p>Bounties are stored on Base blockchain</p>
        <p className="font-mono mt-1">
          Contract: <a href={`https://basescan.org/address/${CONTRACTS.BountyBoard}`} target="_blank" className="text-[#00d9ff] hover:underline">
            {CONTRACTS.BountyBoard}
          </a>
        </p>
      </section>
    </main>
  )
}
