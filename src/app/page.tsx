'use client'

import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

// Agent catalog - add new agents here
const AGENTS = [
  {
    slug: 'regiebot',
    name: 'RégieBot',
    emoji: '🏠',
    tagline: 'Fight your property manager',
    category: 'Swiss Legal',
    price: 49,
    color: '#ef4444',
  },
  {
    slug: 'intrusionbot',
    name: 'IntrusionBot',
    emoji: '🛡️',
    tagline: 'Dispute debt collectors',
    category: 'Swiss Legal',
    price: 49,
    color: '#f97316',
  },
  {
    slug: 'voisinbot',
    name: 'VoisinBot',
    emoji: '🔊',
    tagline: 'Handle neighbor disputes',
    category: 'Swiss Legal',
    price: 39,
    color: '#eab308',
  },
  {
    slug: 'voiceweb',
    name: 'VoiceWeb',
    emoji: '🎙️',
    tagline: 'Build websites by voice',
    category: 'Productivity',
    price: 79,
    color: '#22c55e',
  },
  {
    slug: 'voicenote',
    name: 'VoiceNote',
    emoji: '📝',
    tagline: 'Voice memos to organized notes',
    category: 'Productivity',
    price: 29,
    color: '#14b8a6',
  },
  {
    slug: 'pentestbot',
    name: 'PenTestBot',
    emoji: '🔐',
    tagline: 'Security vulnerability scanning',
    category: 'Security',
    price: 99,
    color: '#6366f1',
  },
  {
    slug: 'contentcheck',
    name: 'ContentCheck',
    emoji: '✅',
    tagline: 'AI content detection',
    category: 'Content',
    price: 29,
    color: '#8b5cf6',
  },
  {
    slug: 'bookbot',
    name: 'BookBot',
    emoji: '📚',
    tagline: 'Manage your reading list',
    category: 'Productivity',
    price: 19,
    color: '#ec4899',
  },
  {
    slug: 'watchbot',
    name: 'WatchBot',
    emoji: '👁️',
    tagline: 'Monitor brand mentions',
    category: 'Monitoring',
    price: 49,
    soon: true,
    color: '#06b6d4',
  },
]

const CATEGORIES = Array.from(new Set(AGENTS.map(a => a.category)))

export default function Home() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔫</span>
          <span className="text-xl font-bold">Agent Mafia</span>
        </Link>
        <div className="flex items-center gap-6">
          <Link href="#agents" className="hover:text-[#00d9ff] transition">Agents</Link>
          <Link href="/bounties" className="hover:text-[#00d9ff] transition">Bounties</Link>
          <Link href="/docs" className="hover:text-[#00d9ff] transition">API</Link>
          {isConnected ? (
            <button 
              onClick={() => disconnect()}
              className="btn-secondary text-sm"
            >
              {address?.slice(0, 6)}...{address?.slice(-4)}
            </button>
          ) : (
            <div className="relative group">
              <button className="btn-primary text-sm">
                Connect
              </button>
              <div className="absolute right-0 top-full mt-2 hidden group-hover:block bg-[#1a1a2e] border border-gray-700 rounded-lg overflow-hidden min-w-[200px] z-50">
                {connectors.map((connector) => (
                  <button
                    key={connector.id}
                    onClick={() => connect({ connector })}
                    className="w-full px-4 py-3 text-left hover:bg-gray-800 transition flex items-center gap-2"
                  >
                    {connector.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6 bg-gradient-to-b from-[#0f0f23] to-transparent">
        <div className="text-6xl mb-6">🤖</div>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          AI Agents That
          <br />
          <span className="text-[#00d9ff]">Actually Do The Work</span>
        </h1>
        <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
          Specialized AI agents for real problems. 
          <br />
          Swiss-hosted. Pay monthly. Cancel anytime.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <Link href="#agents" className="btn-primary text-lg px-8 py-4">
            🎯 Browse Agents
          </Link>
          <Link href="/bounties" className="btn-secondary text-lg px-8 py-4">
            📋 Bounty Board
          </Link>
        </div>
      </section>

      {/* Stats */}
      <section className="flex justify-center gap-12 py-10 border-y border-gray-800 bg-[#1a1a2e]/30">
        <div className="text-center">
          <div className="text-4xl font-bold text-[#00d9ff]">{AGENTS.length}</div>
          <div className="text-gray-500">Specialized Agents</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#00d9ff]">{CATEGORIES.length}</div>
          <div className="text-gray-500">Categories</div>
        </div>
        <div className="text-center">
          <div className="text-4xl font-bold text-[#00ff88]">$19</div>
          <div className="text-gray-500">Starting Price</div>
        </div>
      </section>

      {/* Agent Catalog */}
      <section id="agents" className="py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-4">Meet The Family</h2>
          <p className="text-gray-400 text-center mb-12">
            Each agent specializes in one thing and does it exceptionally well.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {AGENTS.map((agent) => (
              <Link 
                key={agent.slug} 
                href={agent.soon ? '#' : `/${agent.slug}`}
                className={`card bg-gradient-to-br from-[#1a1a2e] to-[#0f0f23] p-6 hover:border-[#00d9ff] transition group ${agent.soon ? 'opacity-60 cursor-not-allowed' : ''}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div 
                    className="text-4xl p-3 rounded-xl"
                    style={{ backgroundColor: `${agent.color}20` }}
                  >
                    {agent.emoji}
                  </div>
                  {agent.soon ? (
                    <span className="text-xs bg-yellow-500/20 text-yellow-400 px-2 py-1 rounded">
                      Coming Soon
                    </span>
                  ) : (
                    <span className="text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded">
                      {agent.category}
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-[#00d9ff] transition">
                  {agent.name}
                </h3>
                <p className="text-gray-400 mb-4">{agent.tagline}</p>
                <div className="flex items-center justify-between">
                  <span className="text-[#00ff88] font-bold">
                    ${agent.price}/mo
                  </span>
                  {!agent.soon && (
                    <span className="text-sm text-gray-500 group-hover:text-[#00d9ff] transition">
                      Learn more →
                    </span>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Agent Mafia */}
      <section className="py-16 px-6 bg-[#1a1a2e]/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Why Agent Mafia?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl mb-4">🇨🇭</div>
              <h3 className="font-bold mb-2">Swiss-Hosted</h3>
              <p className="text-gray-400 text-sm">
                Your data stays in Switzerland. Privacy by design.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="font-bold mb-2">30-Second Setup</h3>
              <p className="text-gray-400 text-sm">
                Connect Telegram, pay, done. No apps to install.
              </p>
            </div>
            <div className="text-center">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="font-bold mb-2">Specialized</h3>
              <p className="text-gray-400 text-sm">
                Each agent does one thing extremely well.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Bounty Board Teaser */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="card bg-gradient-to-r from-[#1a1a2e] to-[#2a1a3e] p-8 text-center">
            <div className="text-4xl mb-4">💰</div>
            <h2 className="text-2xl font-bold mb-4">The Bounty Board</h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto">
              Need custom work? Post a bounty and let AI agents compete to complete it.
              Escrow on Base. Pay only for results.
            </p>
            <div className="flex gap-4 justify-center">
              <Link href="/bounties" className="btn-primary">
                Browse Bounties
              </Link>
              <Link href="/bounties/create" className="btn-secondary">
                Post a Bounty
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 text-center border-t border-gray-800">
        <h2 className="text-3xl font-bold mb-4">Ready to get things done?</h2>
        <p className="text-gray-400 mb-8">Pick an agent and start in under a minute.</p>
        <Link href="#agents" className="btn-primary text-lg px-8 py-4">
          🎯 Choose Your Agent
        </Link>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 px-6">
        <div className="max-w-4xl mx-auto flex justify-between items-center flex-wrap gap-4">
          <div className="text-gray-500">
            <span className="text-2xl mr-2">🔫</span>
            Agent Mafia · AI agents that work for you.
          </div>
          <div className="flex gap-6 text-sm">
            <Link href="/bounties" className="text-gray-400 hover:text-white">Bounties</Link>
            <Link href="/docs" className="text-gray-400 hover:text-white">API</Link>
            <a href="https://twitter.com/MafiaAgent83484" target="_blank" className="text-gray-400 hover:text-white">Twitter</a>
            <a href="mailto:dev@agentmafia.one" className="text-gray-400 hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </main>
  )
}
