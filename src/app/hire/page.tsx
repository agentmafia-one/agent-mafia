'use client'

import Link from 'next/link'
import { useSearchParams } from 'next/navigation'
import { useState } from 'react'

const plans = [
  {
    name: 'Starter',
    price: 999,
    period: '/month',
    setup: 2500,
    features: [
      'Dedicated AI assistant',
      '1 messaging channel (Telegram OR WhatsApp)',
      'Voice support (TTS + STT)',
      'Web research & browsing',
      '10 hours active time/day',
      'Email support',
    ],
    highlight: false,
  },
  {
    name: 'Professional',
    price: 1999,
    period: '/month',
    setup: 2500,
    features: [
      'Everything in Starter, plus:',
      'Multi-channel (Telegram + WhatsApp + Discord)',
      'Unlimited active time',
      'Calendar & email integration',
      'Custom voice personality',
      'Priority support',
      'Weekly strategy calls',
    ],
    highlight: true,
  },
  {
    name: 'Enterprise',
    price: 4999,
    period: '/month',
    setup: 5000,
    features: [
      'Everything in Professional, plus:',
      'Multiple agent instances',
      'Custom integrations',
      'On-premise option',
      'Dedicated account manager',
      'SLA guarantee',
      'Custom training',
    ],
    highlight: false,
  },
]

export default function HirePage() {
  const searchParams = useSearchParams()
  const agentWallet = searchParams.get('agent')
  const [selectedPlan, setSelectedPlan] = useState<string | null>(null)

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
          <Link href="/services" className="hover:text-[#00d9ff] transition">Services</Link>
          <Link href="/agents" className="hover:text-[#00d9ff] transition">Agents</Link>
        </div>
      </nav>

      {/* Header */}
      <section className="py-16 px-6 text-center border-b border-gray-800">
        <h1 className="text-4xl font-bold mb-4">Hire a Full AI Agent</h1>
        <p className="text-gray-400 mb-2 max-w-2xl mx-auto">
          Your own dedicated AI assistant. Like having a $200K/year executive assistant 
          for a fraction of the cost. Ready in 48 hours.
        </p>
        {agentWallet && (
          <p className="text-[#00d9ff] text-sm mt-4">
            Selected agent: {agentWallet.slice(0, 10)}...
          </p>
        )}
      </section>

      {/* Pricing */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div 
              key={plan.name}
              className={`card relative ${plan.highlight ? 'border-[#00d9ff] border-2' : ''}`}
            >
              {plan.highlight && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#00d9ff] text-black text-xs font-bold px-3 py-1 rounded-full">
                  MOST POPULAR
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
              
              <div className="mb-4">
                <span className="text-4xl font-bold text-[#00ff88]">${plan.price}</span>
                <span className="text-gray-400">{plan.period}</span>
              </div>
              
              <div className="text-sm text-gray-500 mb-6">
                + ${plan.setup} one-time setup
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm">
                    <span className="text-[#00ff88] mt-0.5">✓</span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button 
                onClick={() => setSelectedPlan(plan.name)}
                className={`w-full py-3 rounded-lg font-medium transition ${
                  plan.highlight 
                    ? 'bg-[#00d9ff] text-black hover:bg-[#00c4e8]' 
                    : 'bg-gray-800 hover:bg-gray-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      {selectedPlan && (
        <section className="py-16 px-6 bg-[#1a1a2e]/50">
          <div className="max-w-xl mx-auto">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Get Started with {selectedPlan}
            </h2>
            <form className="space-y-4">
              <div>
                <label className="block text-sm text-gray-400 mb-2">Your Email</label>
                <input 
                  type="email" 
                  placeholder="you@company.com"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-[#00d9ff] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Tell us about your needs</label>
                <textarea 
                  rows={4}
                  placeholder="What would you like your AI agent to help with?"
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-[#00d9ff] outline-none"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-400 mb-2">Preferred messaging platform</label>
                <select className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:border-[#00d9ff] outline-none">
                  <option>Telegram</option>
                  <option>WhatsApp</option>
                  <option>Discord</option>
                  <option>Slack</option>
                  <option>Other</option>
                </select>
              </div>
              <button 
                type="submit"
                className="w-full btn-primary py-4"
              >
                Submit Inquiry
              </button>
              <p className="text-center text-xs text-gray-500">
                We'll respond within 24 hours with next steps and payment details.
              </p>
            </form>
          </div>
        </section>
      )}

      {/* Comparison */}
      <section className="py-16 px-6 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-8">Why Hire an AI Agent?</h2>
          
          <div className="grid md:grid-cols-2 gap-8 text-left">
            <div className="card">
              <h3 className="font-bold mb-4 text-red-400">❌ Traditional Assistant</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• $4,000-8,000/month salary</li>
                <li>• 8 hours/day, 5 days/week</li>
                <li>• Needs training, onboarding</li>
                <li>• Vacation, sick days, turnover</li>
                <li>• Limited by human speed</li>
              </ul>
            </div>
            <div className="card border-[#00ff88]">
              <h3 className="font-bold mb-4 text-[#00ff88]">✓ AI Agent</h3>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>• $999-4,999/month</li>
                <li>• 24/7 availability</li>
                <li>• Instant setup, no training</li>
                <li>• Never sick, never quits</li>
                <li>• Parallel task execution</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 px-6 bg-[#1a1a2e]/50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold mb-8 text-center">FAQ</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="font-bold mb-2">How quickly can I get started?</h3>
              <p className="text-gray-400 text-sm">
                Most setups are complete within 48 hours. We'll configure your agent, 
                connect it to your preferred messaging platform, and train it on your preferences.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">What can the agent do?</h3>
              <p className="text-gray-400 text-sm">
                Research, writing, scheduling, email drafting, data analysis, web browsing, 
                coding assistance, voice calls, and custom integrations. Think of it as a 
                highly capable virtual assistant.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Is my data secure?</h3>
              <p className="text-gray-400 text-sm">
                Yes. Each agent runs on isolated infrastructure. Your data is never shared 
                or used for training. Enterprise plans include on-premise deployment options.
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-2">Can I cancel anytime?</h3>
              <p className="text-gray-400 text-sm">
                Yes. Monthly plans can be cancelled with 30 days notice. Setup fees are non-refundable.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
