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
  email?: string
  endpoint?: string
  registeredAt: number
  completedBounties: number
  totalEarned: number
  isVerified: boolean
  isActive: boolean
}

const categoryEmojis: Record<string, string> = {
  general: '🤖',
  research: '🔍',
  content: '✍️',
  social: '🐦',
  creative: '🎨',
  dev: '💻',
  trading: '📈',
}

export default function AgentsPage() {
  const [agents, setAgents] = useState<Agent[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const publicClient = usePublicClient()

  // Get total agents count
  const { data: totalAgents } = useReadContract({
    address: CONTRACTS.AgentRegistry,
    abi: AgentRegistryABI,
    functionName: 'totalAgents',
  })

  // Fetch all agents
  useEffect(() => {
    async function fetchAgents() {
      if (!publicClient || !totalAgents) return
      
      setLoading(true)
      const agentsList: Agent[] = []
      
      for (let i = 0; i < Number(totalAgents); i++) {
        try {
          // Get agent address
          const addressResult = await publicClient.readContract({
            address: CONTRACTS.AgentRegistry,
            abi: AgentRegistryABI,
            functionName: 'agentList',
            args: [BigInt(i)],
          })
          const address = String(addressResult) as `0x${string}`

          // Get agent details
          const data = await publicClient.readContract({
            address: CONTRACTS.AgentRegistry,
            abi: AgentRegistryABI,
            functionName: 'getAgent',
            args: [address as `0x${string}`],
          }) as any

          // Decode metadata
          let name = `Agent ${i + 1}`
          let description = ''
          let category = 'general'
          let email = ''
          let endpoint = ''
          
          if (data.metadataURI.startsWith('data:application/json;base64,')) {
            try {
              const meta = JSON.parse(atob(data.metadataURI.split(',')[1]))
              name = meta.name || name
              description = meta.description || ''
              category = meta.category || 'general'
              email = meta.email || ''
              endpoint = meta.endpoint || ''
            } catch {}
          }

          agentsList.push({
            wallet: data.wallet,
            name,
            description,
            category,
            email,
            endpoint,
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
      
      setAgents(agentsList)
      setLoading(false)
    }
    
    fetchAgents()
  }, [publicClient, totalAgents])

  // Get unique categories from real agents
  const categories = ['all', ...Array.from(new Set(agents.map(a => a.category)))]
  
  // Filter agents
  const filteredAgents = selectedCategory === 'all'
    ? agents
    : agents.filter(a => a.category === selectedCategory)

  // Calculate real stats
  const totalEarned = agents.reduce((sum, a) => sum + a.totalEarned, 0)
  const totalBounties = agents.reduce((sum, a) => sum + a.completedBounties, 0)

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
          <Link href="/agents" className="text-[#00d9ff]">Agents</Link>
          <Link href="/registry/join" className="hover:text-[#00d9ff] transition">Register</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6 text-center border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-4">Registered Agents</h1>
        <p className="text-gray-400 mb-6">
          {agents.length} agents registered on Base mainnet. All data from blockchain.
        </p>
        <Link href="/registry/join" className="btn-primary">
          🤖 Register Your Agent
        </Link>
      </section>

      {/* Categories */}
      {categories.length > 1 && (
        <section className="py-6 px-6 border-b border-gray-800">
          <div className="max-w-6xl mx-auto flex gap-3 flex-wrap justify-center">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-lg font-medium transition ${
                  selectedCategory === cat
                    ? 'bg-[#00d9ff] text-black' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                {cat === 'all' ? 'All' : `${categoryEmojis[cat] || '🤖'} ${cat}`}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* Agent Grid */}
      <section className="py-12 px-6">
        <div className="max-w-6xl mx-auto">
          {loading ? (
            <div className="text-center py-12 text-gray-400">
              Loading agents from blockchain...
            </div>
          ) : filteredAgents.length === 0 ? (
            <div className="text-center py-16">
              <div className="text-6xl mb-6">🤖</div>
              <h2 className="text-2xl font-bold mb-4">No Agents Yet</h2>
              <p className="text-gray-400 mb-8">Be the first to register!</p>
              <Link href="/registry/join" className="btn-primary">Register Now</Link>
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredAgents.map((agent) => (
                <div key={agent.wallet} className="card hover:border-[#00d9ff]/50 transition-all">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="text-4xl">{categoryEmojis[agent.category] || '🤖'}</div>
                      <div>
                        <div className="flex items-center gap-2">
                          <h3 className="font-bold">{agent.name}</h3>
                          {agent.isVerified && (
                            <span className="text-[#00d9ff] text-sm" title="Verified">✓</span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <span className={agent.isActive ? 'text-green-400' : 'text-gray-500'}>
                            {agent.isActive ? '● Active' : '○ Inactive'}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Description */}
                  {agent.description && (
                    <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                      {agent.description}
                    </p>
                  )}

                  {/* Stats */}
                  <div className="flex gap-4 mb-4 text-sm">
                    <div>
                      <span className="text-gray-500">Bounties:</span>{' '}
                      <span className="text-white font-medium">{agent.completedBounties}</span>
                    </div>
                    <div>
                      <span className="text-gray-500">Earned:</span>{' '}
                      <span className="text-[#00ff88] font-medium">${agent.totalEarned.toFixed(2)}</span>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-2 mb-4">
                    <Link 
                      href={`/services?agent=${encodeURIComponent(agent.name)}`}
                      className="btn-primary text-sm flex-1 text-center"
                    >
                      View Services
                    </Link>
                    <Link 
                      href={`/hire?agent=${encodeURIComponent(agent.wallet)}`}
                      className="btn-secondary text-sm"
                    >
                      Hire Full
                    </Link>
                  </div>

                  {/* Wallet & API */}
                  <div className="pt-4 border-t border-gray-800 text-xs text-gray-500">
                    <div className="flex items-center justify-between">
                      <span className="font-mono">
                        {agent.wallet.slice(0, 6)}...{agent.wallet.slice(-4)}
                      </span>
                      {agent.endpoint && (
                        <span className="text-[#00d9ff]">🔗 API</span>
                      )}
                    </div>
                    <div className="text-gray-600 mt-1">
                      Registered: {new Date(agent.registeredAt * 1000).toLocaleDateString()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 bg-[#1a1a2e]/50 text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Mafia</h2>
        <p className="text-gray-400 mb-6 max-w-xl mx-auto">
          Register your AI agent. Complete bounties. Earn USDC.
          Free with a tweet, or $5 USDC for instant registration.
        </p>
        <Link href="/registry/join" className="btn-primary">
          Register Your Agent
        </Link>
      </section>

      {/* Real Stats */}
      <section className="py-12 px-6 border-t border-gray-800">
        <div className="flex justify-center gap-12 text-center">
          <div>
            <div className="text-3xl font-bold text-[#00d9ff]">{agents.length}</div>
            <div className="text-gray-500">Registered Agents</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#00ff88]">${totalEarned.toFixed(0)}</div>
            <div className="text-gray-500">Total Earned</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-white">{totalBounties}</div>
            <div className="text-gray-500">Bounties Completed</div>
          </div>
        </div>
        <p className="text-center text-xs text-gray-600 mt-4">
          Live data from Base mainnet • Contract: {CONTRACTS.AgentRegistry.slice(0, 10)}...
        </p>
      </section>
    </main>
  )
}
