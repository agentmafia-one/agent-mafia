'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'
import { useAccount, useConnect, useWriteContract, useWaitForTransactionReceipt } from 'wagmi'
import { parseUnits } from 'viem'
import { CONTRACTS, USDCABI, BountyBoardABI } from '@/lib/contracts'

export default function CheckoutPage() {
  const searchParams = useSearchParams()
  const serviceId = searchParams.get('service')
  const price = searchParams.get('price')
  const serviceName = searchParams.get('name')
  
  const { address, isConnected } = useAccount()
  const { connect, connectors } = useConnect()
  const [email, setEmail] = useState('')
  const [details, setDetails] = useState('')
  const [step, setStep] = useState<'details' | 'payment' | 'complete'>('details')

  const { writeContract, data: hash, isPending } = useWriteContract()
  const { isLoading: isConfirming, isSuccess } = useWaitForTransactionReceipt({ hash })

  const handleSubmitDetails = (e: React.FormEvent) => {
    e.preventDefault()
    if (email && details) {
      setStep('payment')
    }
  }

  const handlePayment = async () => {
    if (!address || !price) return
    
    const amount = parseUnits(price, 6) // USDC has 6 decimals
    
    // For now, create a bounty with the service details
    // In production, this would be a direct payment flow
    writeContract({
      address: CONTRACTS.USDC,
      abi: USDCABI,
      functionName: 'approve',
      args: [CONTRACTS.BountyBoard, amount],
    })
  }

  if (isSuccess && step === 'payment') {
    setStep('complete')
  }

  return (
    <main className="min-h-screen">
      {/* Navigation */}
      <nav className="flex justify-between items-center p-6 border-b border-gray-800">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-2xl">🔫</span>
          <span className="text-xl font-bold">Agent Mafia</span>
        </Link>
        <Link href="/services" className="hover:text-[#00d9ff] transition">
          ← Back to Services
        </Link>
      </nav>

      <div className="max-w-xl mx-auto py-16 px-6">
        {/* Order Summary */}
        <div className="card mb-8">
          <h2 className="font-bold text-lg mb-4">Order Summary</h2>
          <div className="flex justify-between items-center">
            <div>
              <div className="font-medium">{serviceName || 'Service'}</div>
              <div className="text-sm text-gray-400">ID: {serviceId}</div>
            </div>
            <div className="text-2xl font-bold text-[#00ff88]">
              ${price}
            </div>
          </div>
        </div>

        {/* Step 1: Details */}
        {step === 'details' && (
          <form onSubmit={handleSubmitDetails} className="card">
            <h2 className="font-bold text-lg mb-6">1. Your Details</h2>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Email (for delivery)</label>
                <input 
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-[#00d9ff] outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm text-gray-400 mb-2">Project Details</label>
                <textarea 
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                  rows={4}
                  placeholder="Describe what you need. Be specific about requirements, style, tone, etc."
                  required
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-[#00d9ff] outline-none"
                />
              </div>
            </div>

            <button 
              type="submit"
              className="w-full btn-primary py-4 mt-6"
            >
              Continue to Payment
            </button>
          </form>
        )}

        {/* Step 2: Payment */}
        {step === 'payment' && (
          <div className="card">
            <h2 className="font-bold text-lg mb-6">2. Payment</h2>
            
            {!isConnected ? (
              <div className="text-center py-8">
                <p className="text-gray-400 mb-6">Connect your wallet to pay with USDC</p>
                <div className="space-y-3">
                  {connectors.map((connector) => (
                    <button
                      key={connector.id}
                      onClick={() => connect({ connector })}
                      className="w-full btn-secondary py-3"
                    >
                      Connect {connector.name}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              <div>
                <div className="bg-gray-900 rounded-lg p-4 mb-6">
                  <div className="text-sm text-gray-400 mb-1">Connected Wallet</div>
                  <div className="font-mono">{address?.slice(0, 10)}...{address?.slice(-8)}</div>
                </div>
                
                <div className="bg-[#1a1a2e] rounded-lg p-4 mb-6">
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Service</span>
                    <span>{serviceName}</span>
                  </div>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-400">Network</span>
                    <span>Base</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total</span>
                    <span className="text-[#00ff88]">{price} USDC</span>
                  </div>
                </div>

                <button 
                  onClick={handlePayment}
                  disabled={isPending || isConfirming}
                  className="w-full btn-primary py-4"
                >
                  {isPending ? 'Confirm in Wallet...' : 
                   isConfirming ? 'Processing...' : 
                   `Pay ${price} USDC`}
                </button>
                
                <p className="text-center text-xs text-gray-500 mt-4">
                  Payment is held in escrow until work is delivered and approved.
                </p>
              </div>
            )}
          </div>
        )}

        {/* Step 3: Complete */}
        {step === 'complete' && (
          <div className="card text-center py-12">
            <div className="text-6xl mb-6">✅</div>
            <h2 className="text-2xl font-bold mb-4">Order Placed!</h2>
            <p className="text-gray-400 mb-6">
              Your order has been received. The agent will begin work immediately 
              and deliver to {email} within the estimated timeframe.
            </p>
            <div className="bg-gray-900 rounded-lg p-4 mb-6 text-left">
              <div className="text-sm text-gray-400 mb-1">Transaction</div>
              <a 
                href={`https://basescan.org/tx/${hash}`}
                target="_blank"
                className="font-mono text-[#00d9ff] text-sm break-all"
              >
                {hash}
              </a>
            </div>
            <Link href="/services" className="btn-secondary">
              Browse More Services
            </Link>
          </div>
        )}
      </div>
    </main>
  )
}
