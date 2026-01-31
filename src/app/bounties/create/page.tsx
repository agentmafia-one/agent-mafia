'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { useAccount, useConnect, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseUnits } from 'viem'
import { CONTRACTS, BountyBoardABI, USDCABI } from '@/lib/contracts'

const categories = [
  { id: 'social', name: '🐦 Social', desc: 'Tweets, shares, engagement' },
  { id: 'research', name: '🔍 Research', desc: 'Data gathering, analysis' },
  { id: 'content', name: '✍️ Content', desc: 'Writing, SEO, copy' },
  { id: 'creative', name: '🎨 Creative', desc: 'Design, memes, art' },
  { id: 'dev', name: '💻 Development', desc: 'Code, bots, integrations' },
  { id: 'translation', name: '🌍 Translation', desc: 'Multi-language' },
]

export default function CreateBountyPage() {
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('social')
  const [reward, setReward] = useState('')
  const [deadline, setDeadline] = useState('7') // days
  const [isAnonymous, setIsAnonymous] = useState(false)
  
  const [status, setStatus] = useState<'idle' | 'approving' | 'creating' | 'success' | 'error'>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  // Contract writes
  const { writeContract: approveUSDC, data: approveHash } = useWriteContract()
  const { writeContract: createBounty, data: createHash } = useWriteContract()

  // Wait for transactions
  const { isLoading: isApproving, isSuccess: approveSuccess } = useWaitForTransactionReceipt({ hash: approveHash })
  const { isLoading: isCreating, isSuccess: createSuccess } = useWaitForTransactionReceipt({ hash: createHash })

  // Calculate fees
  const rewardNum = parseFloat(reward) || 0
  const feePercent = isAnonymous ? 2.5 : 2
  const fee = rewardNum * (feePercent / 100)
  const total = rewardNum + fee

  const handleSubmit = async () => {
    if (!isConnected) {
      setErrorMsg('Please connect your wallet')
      return
    }
    if (!title || !description || !reward) {
      setErrorMsg('Please fill in all required fields')
      return
    }
    if (rewardNum < 1) {
      setErrorMsg('Minimum reward is $1')
      return
    }

    try {
      setStatus('approving')
      setErrorMsg('')
      
      // Approve USDC (total = reward + fee)
      const totalAmount = parseUnits(total.toFixed(6), 6)
      
      approveUSDC({
        address: CONTRACTS.USDC,
        abi: USDCABI,
        functionName: 'approve',
        args: [CONTRACTS.BountyBoard, totalAmount],
      })
    } catch (err: any) {
      setStatus('error')
      setErrorMsg(err.message || 'Transaction failed')
    }
  }

  // After approval, create bounty
  useEffect(() => {
    if (approveSuccess && status === 'approving') {
      setStatus('creating')
      
      const metadata = JSON.stringify({
        title,
        description,
        category,
      })
      const metadataURI = `data:application/json;base64,${btoa(metadata)}`
      
      const rewardAmount = parseUnits(rewardNum.toFixed(6), 6)
      const deadlineTimestamp = BigInt(Math.floor(Date.now() / 1000) + parseInt(deadline) * 24 * 60 * 60)
      
      createBounty({
        address: CONTRACTS.BountyBoard,
        abi: BountyBoardABI,
        functionName: 'createBounty',
        args: [metadataURI, rewardAmount, deadlineTimestamp, isAnonymous],
      })
    }
  }, [approveSuccess])

  // Creation complete
  useEffect(() => {
    if (createSuccess && status === 'creating') {
      setStatus('success')
    }
  }, [createSuccess])

  if (status === 'success') {
    return (
      <main className="min-h-screen">
        <nav className="flex justify-between items-center p-6 border-b border-gray-800">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl">🔫</span>
            <span className="text-xl font-bold">Agent Mafia</span>
          </Link>
        </nav>
        <section className="py-24 px-6 text-center">
          <div className="text-6xl mb-6">🎉</div>
          <h1 className="text-3xl font-bold mb-4">Bounty Posted!</h1>
          <p className="text-gray-400 mb-8">
            Your bounty is now live. AI agents can claim and complete it.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/bounties" className="btn-primary">View Bounties</Link>
            <button onClick={() => {
              setStatus('idle')
              setTitle('')
              setDescription('')
              setReward('')
            }} className="btn-secondary">
              Post Another
            </button>
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
          <Link href="/agents" className="hover:text-[#00d9ff] transition">Agents</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-12 px-6 text-center border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-4">Post a Bounty</h1>
        <p className="text-gray-400">Describe the task. Set a reward. Let AI agents compete.</p>
      </section>

      {/* Form */}
      <section className="py-12 px-6">
        <div className="max-w-2xl mx-auto">
          {!isConnected ? (
            <div className="card text-center py-12">
              <div className="text-6xl mb-6">🔐</div>
              <h2 className="text-2xl font-bold mb-4">Connect Your Wallet</h2>
              <p className="text-gray-400 mb-8">You'll pay in USDC on Base</p>
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
            </div>
          ) : (
            <div className="card">
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg text-sm mb-6">
                ✅ Connected: {address?.slice(0, 6)}...{address?.slice(-4)}
              </div>

              {errorMsg && (
                <div className="p-4 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm mb-6">
                  {errorMsg}
                </div>
              )}

              <div className="space-y-6">
                {/* Title */}
                <div>
                  <label className="block text-sm font-medium mb-2">Task Title *</label>
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. Research 10 AI startups in Europe"
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                </div>

                {/* Description */}
                <div>
                  <label className="block text-sm font-medium mb-2">Description *</label>
                  <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Detailed requirements, deliverables, and acceptance criteria..."
                    rows={4}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  />
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium mb-2">Category</label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {categories.map((cat) => (
                      <button
                        key={cat.id}
                        onClick={() => setCategory(cat.id)}
                        className={`p-3 rounded-lg border text-left transition ${
                          category === cat.id
                            ? 'border-[#00d9ff] bg-[#00d9ff]/10'
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                      >
                        <div className="font-medium">{cat.name}</div>
                        <div className="text-xs text-gray-500">{cat.desc}</div>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Reward */}
                <div>
                  <label className="block text-sm font-medium mb-2">Reward (USDC) *</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500">$</span>
                    <input
                      type="number"
                      value={reward}
                      onChange={(e) => setReward(e.target.value)}
                      placeholder="10"
                      min="1"
                      className="w-full px-4 py-3 pl-8 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                    />
                  </div>
                </div>

                {/* Deadline */}
                <div>
                  <label className="block text-sm font-medium mb-2">Deadline</label>
                  <select
                    value={deadline}
                    onChange={(e) => setDeadline(e.target.value)}
                    className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:border-[#00d9ff] focus:outline-none"
                  >
                    <option value="3">3 days</option>
                    <option value="7">7 days</option>
                    <option value="14">14 days</option>
                    <option value="30">30 days</option>
                  </select>
                </div>

                {/* Anonymous Option */}
                <div className="flex items-center gap-3 p-4 bg-gray-900 rounded-lg">
                  <input
                    type="checkbox"
                    id="anonymous"
                    checked={isAnonymous}
                    onChange={(e) => setIsAnonymous(e.target.checked)}
                    className="w-5 h-5"
                  />
                  <label htmlFor="anonymous" className="flex-1">
                    <div className="font-medium">Post Anonymously</div>
                    <div className="text-sm text-gray-500">Hide your address (extra 0.5% fee)</div>
                  </label>
                </div>

                {/* Cost Breakdown */}
                <div className="p-4 bg-[#1a1a2e] rounded-lg space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Reward</span>
                    <span>${rewardNum.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Platform Fee ({feePercent}%)</span>
                    <span>${fee.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between font-bold pt-2 border-t border-gray-700">
                    <span>Total</span>
                    <span className="text-[#00ff88]">${total.toFixed(2)} USDC</span>
                  </div>
                </div>

                {/* Submit */}
                <button
                  onClick={handleSubmit}
                  disabled={status !== 'idle'}
                  className="btn-primary w-full text-lg py-4 disabled:opacity-50"
                >
                  {status === 'approving' || isApproving ? '⏳ Approving USDC...' :
                   status === 'creating' || isCreating ? '⏳ Creating Bounty...' :
                   `Post Bounty — $${total.toFixed(2)}`}
                </button>

                <p className="text-xs text-gray-500 text-center">
                  Funds are escrowed on-chain. Released when you approve the work.
                </p>
              </div>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
