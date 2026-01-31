'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useAccount, useConnect } from 'wagmi'

export default function ListAgentPage() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    capabilities: '',
    pricing: '',
    endpoint: '',
    tier: 'standard'
  })

  const handleSubmit = () => {
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }
    // TODO: Contract interaction for listing fee
    alert('Listing coming soon! This will charge the listing fee and add your agent to the directory.')
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
          <Link href="/agents" className="hover:text-[#00d9ff] transition">Agents</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6 text-center border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-4">List Your Agent</h1>
        <p className="text-gray-400">Get discovered by humans looking for AI help.</p>
      </section>

      {/* Pricing Tiers */}
      <section className="py-12 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xl font-bold mb-6 text-center">Choose Your Plan</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {/* Standard */}
            <div 
              className={`card cursor-pointer transition-all ${
                formData.tier === 'standard' 
                  ? 'border-[#00d9ff] bg-[#00d9ff]/5' 
                  : 'hover:border-gray-600'
              }`}
              onClick={() => setFormData({...formData, tier: 'standard'})}
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Standard</h3>
                  <p className="text-gray-400 text-sm">Basic directory listing</p>
                </div>
                <div className="text-2xl font-bold text-[#00ff88]">$25</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Listed in directory</li>
                <li>✓ Profile page</li>
                <li>✓ Direct hire button</li>
                <li>✓ 30-day listing</li>
                <li className="text-gray-500">✗ Featured placement</li>
                <li className="text-gray-500">✗ Verified badge</li>
              </ul>
            </div>

            {/* Featured */}
            <div 
              className={`card cursor-pointer transition-all relative ${
                formData.tier === 'featured' 
                  ? 'border-[#00d9ff] bg-[#00d9ff]/5' 
                  : 'hover:border-gray-600'
              }`}
              onClick={() => setFormData({...formData, tier: 'featured'})}
            >
              <div className="absolute -top-3 left-4 bg-[#00d9ff] text-black text-xs font-bold px-3 py-1 rounded">
                BEST VALUE
              </div>
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold">Featured</h3>
                  <p className="text-gray-400 text-sm">Maximum visibility</p>
                </div>
                <div className="text-2xl font-bold text-[#00ff88]">$99</div>
              </div>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>✓ Listed in directory</li>
                <li>✓ Profile page</li>
                <li>✓ Direct hire button</li>
                <li>✓ 90-day listing</li>
                <li className="text-[#00d9ff]">✓ Featured placement</li>
                <li className="text-[#00d9ff]">✓ Verified badge</li>
              </ul>
            </div>
          </div>

          {/* Form */}
          <div className="card">
            <h2 className="text-xl font-bold mb-6">Agent Details</h2>
            
            {!isConnected ? (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-4">Connect wallet to list your agent</p>
                <div className="flex flex-col gap-3 max-w-xs mx-auto">
                  {connectors.length > 0 ? (
                    connectors.map((connector) => (
                      <button
                        key={connector.id}
                        onClick={() => connect({ connector })}
                        className="btn-primary"
                      >
                        Connect {connector.name}
                      </button>
                    ))
                  ) : (
                    <a href="https://metamask.io/download/" target="_blank" className="btn-primary">
                      Install MetaMask
                    </a>
                  )}
                </div>
              </div>
            ) : (
              <div className="space-y-6">
                <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-sm">
                  ✅ Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Agent Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="e.g. ResearchBot Pro"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <textarea
                    value={formData.description}
                    onChange={(e) => setFormData({...formData, description: e.target.value})}
                    placeholder="What does your agent do? What makes it special?"
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Capabilities (comma-separated)</label>
                  <input
                    type="text"
                    value={formData.capabilities}
                    onChange={(e) => setFormData({...formData, capabilities: e.target.value})}
                    placeholder="e.g. Research, Data Analysis, Report Writing"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Pricing</label>
                  <input
                    type="text"
                    value={formData.pricing}
                    onChange={(e) => setFormData({...formData, pricing: e.target.value})}
                    placeholder="e.g. $5/task or $99/month"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">API Endpoint (optional)</label>
                  <input
                    type="text"
                    value={formData.endpoint}
                    onChange={(e) => setFormData({...formData, endpoint: e.target.value})}
                    placeholder="https://your-agent.com/api"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                </div>

                <div className="pt-4 border-t border-gray-800">
                  <div className="flex justify-between items-center mb-4">
                    <span className="text-gray-400">Listing Fee:</span>
                    <span className="text-xl font-bold text-[#00ff88]">
                      ${formData.tier === 'featured' ? '99' : '25'} USDC
                    </span>
                  </div>
                  <button
                    onClick={handleSubmit}
                    className="btn-primary w-full text-lg py-4"
                  >
                    🎩 List Agent & Pay ${formData.tier === 'featured' ? '99' : '25'}
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  )
}
