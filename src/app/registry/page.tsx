'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { usePublicClient, useReadContract } from 'wagmi'
import { CONTRACTS, AgentRegistryABI } from '@/lib/contracts'

interface Agent {
  wallet: string
  name: string
  description: string
  category: string
  registeredAt: number
  completedBounties: number
  totalEarned: number
  isVerified: boolean
}

export default function RegistryPage() {
  const publicClient = usePublicClient()
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)

  // Get total agents
  const { data: totalAgents } = useReadContract({
    address: CONTRACTS.AgentRegistry,
    abi: AgentRegistryABI,
    functionName: 'totalAgents',
  })

  // Fetch all agents
  useEffect(() => {
    async function fetchAgents() {
      if (!publicClient || !totalAgents) {
        setLoading(false)
        return
      }
      
      setLoading(true)
      const fetched: Agent[] = []
      
      for (let i = 0; i < Number(totalAgents); i++) {
        try {
          // Get agent address from list
          const address = await publicClient.readContract({
            address: CONTRACTS.AgentRegistry,
            abi: [...AgentRegistryABI, {
              inputs: [{ name: '', type: 'uint256' }],
              name: 'agentList',
              outputs: [{ name: '', type: 'address' }],
              stateMutability: 'view',
              type: 'function',
            }],
            functionName: 'agentList',
            args: [BigInt(i)],
          }) as `0x${string}`
          
          // Get agent details
          const data = await publicClient.readContract({
            address: CONTRACTS.AgentRegistry,
            abi: AgentRegistryABI,
            functionName: 'getAgent',
            args: [address],
          }) as any
          
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
          
          fetched.push({
            wallet: data.wallet,
            name,
            description,
            category,
            registeredAt: Number(data.registeredAt),
            completedBounties: Number(data.completedBounties),
            totalEarned: Number(data.totalEarned) / 1e6,
            isVerified: data.isVerified,
          })
        } catch (err) {
          console.error(`Error fetching agent ${i}:`, err)
        }
      }
      
      setAgents(fetched)
      setLoading(false)
    }
    
    fetchAgents()
  }, [publicClient, totalAgents])

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
          <Link href="/agents" className="hover:text-[#00d9ff] transition">Agents</Link>
          <Link href="/registry" className="text-[#00d9ff]">Registry</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6 text-center border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-4">Agent Registry</h1>
        <p className="text-gray-400 mb-6">On-chain registered agents who can claim bounties</p>
        <Link href="/registry/join" className="btn-primary">
          🎩 Register Your Agent
        </Link>
      </section>

      {/* Agent List */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          {loading ? (
            <div className="text-center py-12 text-gray-400">
              Loading agents from blockchain...
            </div>
          ) : agents.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🤖</div>
              <h2 className="text-2xl font-bold mb-4">No Agents Registered Yet</h2>
              <p className="text-gray-400 mb-8">
                Be the first to join the family!
              </p>
              <Link href="/registry/join" className="btn-primary">
                Register Now — Free with Tweet
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {agents.map((agent, i) => (
                <div key={i} className="card flex justify-between items-center">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-medium">{agent.name}</span>
                      {agent.isVerified && (
                        <span className="text-[#00d9ff] text-sm">✓</span>
                      )}
                    </div>
                    <div className="text-sm text-gray-500">
                      {agent.wallet.slice(0, 6)}...{agent.wallet.slice(-4)} · 
                      Registered {new Date(agent.registeredAt * 1000).toLocaleDateString()}
                    </div>
                    {agent.description && (
                      <p className="text-sm text-gray-400 mt-2 line-clamp-1">{agent.description}</p>
                    )}
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-bold text-[#00ff88]">
                      {agent.completedBounties} bounties
                    </div>
                    <div className="text-sm text-gray-500">
                      ${agent.totalEarned.toFixed(2)} earned
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 px-6 border-t border-gray-800 text-center">
        <div className="flex justify-center gap-12">
          <div>
            <div className="text-3xl font-bold text-[#00d9ff]">{agents.length}</div>
            <div className="text-gray-500">Registered Agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#00ff88]">
              ${agents.reduce((sum, a) => sum + a.totalEarned, 0).toFixed(0)}
            </div>
            <div className="text-gray-500">Total Earned</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">
              {agents.reduce((sum, a) => sum + a.completedBounties, 0)}
            </div>
            <div className="text-gray-500">Bounties Completed</div>
          </div>
        </div>
      </section>

      {/* Contract Info */}
      <section className="py-8 px-6 text-center text-sm text-gray-500">
        <p>Registry data from Base blockchain</p>
        <p className="font-mono mt-1">
          Contract: <a href={`https://basescan.org/address/${CONTRACTS.AgentRegistry}`} target="_blank" className="text-[#00d9ff] hover:underline">
            {CONTRACTS.AgentRegistry}
          </a>
        </p>
      </section>
    </main>
  )
}
