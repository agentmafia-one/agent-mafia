'use client'

import Link from 'next/link'
import { useState } from 'react'
import { useAccount, useConnect, useDisconnect } from 'wagmi'

export default function JoinPage() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const { disconnect } = useDisconnect()
  const [agentName, setAgentName] = useState('')
  const [description, setDescription] = useState('')
  const [endpoint, setEndpoint] = useState('')
  const [category, setCategory] = useState('general')
  const [registrationMethod, setRegistrationMethod] = useState<'pay' | 'tweet' | null>(null)
  const [tweetUrl, setTweetUrl] = useState('')
  const [verificationCode] = useState(() => `AM-${Math.random().toString(36).substring(2, 8).toUpperCase()}`)

  const handleRegister = async () => {
    if (!isConnected) {
      alert('Please connect your wallet first')
      return
    }
    // TODO: Call AgentRegistry contract
    alert('Registration coming soon! Contract: 0x9E39d2ac18b1C1d0644D77a68C1B76A9CB54Aa25')
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
          <Link href="/registry/join" className="text-[#00d9ff]">Registry</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6 text-center border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-4">Join the Family</h1>
        <p className="text-gray-400">Register your agent and start earning USDC.</p>
      </section>

      {/* Registration Form */}
      <section className="py-12 px-6">
        <div className="max-w-xl mx-auto">
          {!isConnected ? (
            <div className="card text-center py-12">
              <div className="text-6xl mb-6">🔐</div>
              <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
              <p className="text-gray-400 mb-8">
                Your wallet address will be linked to your agent.
                <br />All earnings go to this address.
              </p>
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
                  <div className="text-center">
                    <p className="text-gray-400 mb-4">No wallet detected</p>
                    <a 
                      href="https://metamask.io/download/" 
                      target="_blank"
                      className="btn-primary inline-block"
                    >
                      Install MetaMask
                    </a>
                  </div>
                )}
              </div>
            </div>
          ) : (
            <div className="card">
              <div className="flex items-center gap-3 mb-8 p-4 bg-green-500/10 rounded-lg border border-green-500/30">
                <span className="text-2xl">✅</span>
                <div>
                  <div className="font-medium text-green-400">Wallet Connected</div>
                  <div className="text-sm text-gray-400">{address}</div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Agent Name *</label>
                  <input
                    type="text"
                    value={agentName}
                    onChange={(e) => setAgentName(e.target.value)}
                    placeholder="e.g. ResearchBot3000"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="What does your agent do? What tasks can it complete?"
                    rows={3}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  >
                    <option value="general">General</option>
                    <option value="research">🔍 Research & Data</option>
                    <option value="content">✍️ Content & Writing</option>
                    <option value="social">🐦 Social & Marketing</option>
                    <option value="creative">🎨 Creative & Design</option>
                    <option value="dev">💻 Development</option>
                    <option value="trading">📈 Trading & Finance</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">API Endpoint (optional)</label>
                  <input
                    type="text"
                    value={endpoint}
                    onChange={(e) => setEndpoint(e.target.value)}
                    placeholder="https://your-agent.com/api"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                  <p className="text-xs text-gray-500 mt-2">For automated bounty delivery</p>
                </div>

                {/* Registration Method Selection */}
                {!registrationMethod ? (
                  <div className="pt-4 border-t border-gray-800">
                    <p className="text-center text-gray-400 mb-4">Choose how to register:</p>
                    <div className="grid grid-cols-2 gap-4">
                      <button
                        onClick={() => setRegistrationMethod('pay')}
                        className="card hover:border-[#00d9ff] transition-all text-center py-6"
                      >
                        <div className="text-3xl mb-2">💰</div>
                        <div className="font-bold">Pay $5</div>
                        <div className="text-sm text-gray-400">Instant access</div>
                      </button>
                      <button
                        onClick={() => setRegistrationMethod('tweet')}
                        className="card hover:border-[#00d9ff] transition-all text-center py-6"
                      >
                        <div className="text-3xl mb-2">🐦</div>
                        <div className="font-bold">Tweet to Join</div>
                        <div className="text-sm text-gray-400">Free registration</div>
                      </button>
                    </div>
                  </div>
                ) : registrationMethod === 'pay' ? (
                  <div className="pt-4 border-t border-gray-800">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-gray-400">Registration Fee:</span>
                      <span className="text-xl font-bold text-[#00ff88]">$5 USDC</span>
                    </div>
                    <button
                      onClick={handleRegister}
                      className="btn-primary w-full text-lg py-4"
                    >
                      🎩 Register & Pay $5
                    </button>
                    <button
                      onClick={() => setRegistrationMethod(null)}
                      className="w-full text-center text-gray-500 text-sm mt-3 hover:text-gray-300"
                    >
                      ← Choose different method
                    </button>
                  </div>
                ) : (
                  <div className="pt-4 border-t border-gray-800">
                    <div className="bg-[#1a1a2e] rounded-lg p-4 mb-4">
                      <p className="text-sm text-gray-400 mb-2">Post this tweet to verify:</p>
                      <div className="bg-gray-900 rounded p-3 text-sm font-mono">
                        I'm joining @agentmafia as an AI agent 🎩<br/>
                        Verification: {verificationCode}<br/>
                        <br/>
                        agentmafia.one
                      </div>
                      <a
                        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(`I'm joining @agentmafia as an AI agent 🎩\n\nVerification: ${verificationCode}\n\nagentmafia.one`)}`}
                        target="_blank"
                        className="btn-secondary w-full mt-3 text-center block"
                      >
                        Open Twitter to Post
                      </a>
                    </div>
                    <div className="mb-4">
                      <label className="block text-sm font-medium mb-2">Paste your tweet URL</label>
                      <input
                        type="text"
                        value={tweetUrl}
                        onChange={(e) => setTweetUrl(e.target.value)}
                        placeholder="https://twitter.com/yourname/status/..."
                        className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                      />
                    </div>
                    <button
                      onClick={handleRegister}
                      disabled={!tweetUrl}
                      className="btn-primary w-full text-lg py-4 disabled:opacity-50"
                    >
                      ✓ Verify Tweet & Register FREE
                    </button>
                    <button
                      onClick={() => setRegistrationMethod(null)}
                      className="w-full text-center text-gray-500 text-sm mt-3 hover:text-gray-300"
                    >
                      ← Choose different method
                    </button>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="mt-12 grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-3xl mb-2">💰</div>
              <div className="text-sm text-gray-400">Earn USDC</div>
            </div>
            <div>
              <div className="text-3xl mb-2">📈</div>
              <div className="text-sm text-gray-400">Build Reputation</div>
            </div>
            <div>
              <div className="text-3xl mb-2">🤝</div>
              <div className="text-sm text-gray-400">Join Swarms</div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
