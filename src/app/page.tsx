'use client'

import Link from 'next/link'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

// Agent catalog - all 38 agents
const AGENTS = [
  // 🇨🇭 Swiss Legal
  { slug: 'regiebot', name: 'RégieBot', emoji: '🏠', tagline: 'Fight your property manager', category: 'Swiss Legal', price: 49, color: '#ef4444' },
  { slug: 'intrusionbot', name: 'IntrusionBot', emoji: '🛡️', tagline: 'Dispute debt collectors', category: 'Swiss Legal', price: 49, color: '#f97316' },
  { slug: 'voisinbot', name: 'VoisinBot', emoji: '🔊', tagline: 'Handle neighbor disputes', category: 'Swiss Legal', price: 39, color: '#eab308' },
  { slug: 'bailbot', name: 'BailBot', emoji: '📜', tagline: 'Lease issues & rent disputes', category: 'Swiss Legal', price: 49, color: '#dc2626' },
  { slug: 'mieterbot', name: 'MieterBot', emoji: '🏢', tagline: 'Tenant rights & deposit claims', category: 'Swiss Legal', price: 39, color: '#b91c1c' },
  { slug: 'parkingbot', name: 'ParkingBot', emoji: '🅿️', tagline: 'Parking fine disputes', category: 'Swiss Legal', price: 29, color: '#991b1b' },
  
  // 🇨🇭 Swiss Admin
  { slug: 'avsbot', name: 'AVSBot', emoji: '🏛️', tagline: 'AVS/AHV contribution tracking', category: 'Swiss Admin', price: 39, color: '#0ea5e9' },
  { slug: 'permisbot', name: 'PermisBot', emoji: '🪪', tagline: 'Permit renewals & visa tracking', category: 'Swiss Admin', price: 49, color: '#0284c7' },
  { slug: 'billagbot', name: 'BillagBot', emoji: '📺', tagline: 'Serafe billing disputes', category: 'Swiss Admin', price: 29, color: '#0369a1' },
  { slug: 'ravbot', name: 'RAVBot', emoji: '💼', tagline: 'Unemployment navigation', category: 'Swiss Admin', price: 39, color: '#075985' },
  { slug: 'frontalierbot', name: 'FrontalierBot', emoji: '🚂', tagline: 'Cross-border worker help', category: 'Swiss Admin', price: 49, color: '#0c4a6e' },
  { slug: 'pilierbot', name: 'PilierBot', emoji: '🏦', tagline: '3rd pillar optimization', category: 'Swiss Admin', price: 49, color: '#164e63' },
  
  // 🏥 Insurance & Health
  { slug: 'assurancebot', name: 'AssuranceBot', emoji: '🏥', tagline: 'Health insurance comparison', category: 'Insurance', price: 39, color: '#22c55e' },
  { slug: 'zahnarztbot', name: 'ZahnarztBot', emoji: '🦷', tagline: 'Dental cost comparison', category: 'Insurance', price: 29, color: '#16a34a' },
  
  // 🚗 Transport & Cars
  { slug: 'sbbbot', name: 'SBBBot', emoji: '🚄', tagline: 'Train delay compensation', category: 'Transport', price: 29, color: '#dc2626' },
  { slug: 'ticketbot', name: 'TicketBot', emoji: '🎫', tagline: 'Transport fine disputes', category: 'Transport', price: 29, color: '#b91c1c' },
  { slug: 'garagebot', name: 'GarageBot', emoji: '🔧', tagline: 'MFK prep & garage prices', category: 'Transport', price: 39, color: '#78716c' },
  
  // 📦 Services
  { slug: 'swisspostbot', name: 'SwissPostBot', emoji: '📦', tagline: 'Package tracking & complaints', category: 'Services', price: 29, color: '#fbbf24' },
  { slug: 'reclamebot', name: 'RéclameBot', emoji: '📢', tagline: 'Consumer complaints & refunds', category: 'Services', price: 29, color: '#f59e0b' },
  
  // 👨‍👩‍👧 Family & Living
  { slug: 'kitabot', name: 'KitaBot', emoji: '👶', tagline: 'Daycare waitlist management', category: 'Family', price: 29, color: '#f472b6' },
  { slug: 'schoolbot', name: 'SchoolBot', emoji: '🎒', tagline: 'Swiss school navigation', category: 'Family', price: 29, color: '#ec4899' },
  { slug: 'wohnungbot', name: 'WohnungBot', emoji: '🏠', tagline: 'Apartment hunting automation', category: 'Family', price: 49, color: '#db2777' },
  
  // 💼 Business
  { slug: 'bookbot', name: 'BookBot', emoji: '📊', tagline: 'Shopify bookkeeping autopilot', category: 'Business', price: 49, color: '#6366f1' },
  { slug: 'invoicebot', name: 'InvoiceBot', emoji: '🧾', tagline: 'Auto-invoicing & reminders', category: 'Business', price: 39, color: '#4f46e5' },
  { slug: 'contractbot', name: 'ContractBot', emoji: '📝', tagline: 'Contract review & red flags', category: 'Business', price: 79, color: '#4338ca' },
  { slug: 'leadbot', name: 'LeadBot', emoji: '🎯', tagline: 'Lead qualification & CRM', category: 'Business', price: 49, color: '#3730a3' },
  { slug: 'taxbot', name: 'TaxBot', emoji: '💰', tagline: 'Tax deduction tracking', category: 'Business', price: 49, color: '#312e81' },
  
  // ⚡ Productivity
  { slug: 'voiceweb', name: 'VoiceWeb', emoji: '🎙️', tagline: 'Build websites by voice', category: 'Productivity', price: 79, color: '#22c55e' },
  { slug: 'voicenote', name: 'VoiceNote', emoji: '📝', tagline: 'Voice memos to notes', category: 'Productivity', price: 29, color: '#14b8a6' },
  { slug: 'inboxbot', name: 'InboxBot', emoji: '📧', tagline: 'Email triage & auto-replies', category: 'Productivity', price: 39, color: '#06b6d4' },
  { slug: 'calbot', name: 'CalBot', emoji: '📅', tagline: 'Calendar management', category: 'Productivity', price: 29, color: '#0891b2' },
  { slug: 'researchbot', name: 'ResearchBot', emoji: '🔬', tagline: 'Deep research & reports', category: 'Productivity', price: 49, color: '#0e7490' },
  
  // 🏡 Real Estate
  { slug: 'propertybot', name: 'PropertyBot', emoji: '🏡', tagline: 'Listing & buyer matching', category: 'Real Estate', price: 79, color: '#059669' },
  { slug: 'rebot', name: 'ReBot', emoji: '🔑', tagline: 'Real estate assistant', category: 'Real Estate', price: 79, color: '#047857' },
  { slug: 'finbot', name: 'FinBot', emoji: '📈', tagline: 'Investment analysis', category: 'Finance', price: 99, color: '#10b981' },
  
  // 🔒 Security & Tech
  { slug: 'pentestbot', name: 'PenTestBot', emoji: '🔐', tagline: 'Security vulnerability scanning', category: 'Security', price: 99, color: '#6366f1' },
  { slug: 'contentcheck', name: 'ContentCheck', emoji: '✅', tagline: 'AI content detection', category: 'Content', price: 29, color: '#8b5cf6' },
  { slug: 'socialbot', name: 'SocialBot', emoji: '📱', tagline: 'Social media management', category: 'Marketing', price: 39, color: '#a855f7' },
  
  // 👁️ Monitoring
  { slug: 'watchbot', name: 'WatchBot', emoji: '👁️', tagline: 'Brand mention monitoring', category: 'Monitoring', price: 49, color: '#06b6d4' },
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
