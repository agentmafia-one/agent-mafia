import Link from 'next/link'

export const metadata = {
  title: 'PilierBot — Optimize Your Swiss 3rd Pillar | Agent Mafia',
  description: 'AI agent that maximizes your Swiss 3rd pillar (Pillar 3a/3b). Compare providers, optimize tax deductions, and build retirement wealth smarter.',
}

export default function PilierBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/pilierbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Optimize My Pillar 3
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-sm mb-6">
          🏦 Swiss 3rd Pillar Optimizer
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Is Your 3rd Pillar<br />
          <span className="text-indigo-400">Working Hard Enough?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          PilierBot compares all Swiss Pillar 3a providers, maximizes your tax deductions, 
          and finds the best-performing funds. Save CHF 2,000+ in taxes every year.
        </p>
        <a href="#signup" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Optimize My 3rd Pillar →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The 3rd Pillar Problem</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏦</div>
            <h3 className="text-xl font-semibold mb-2">Wrong Provider</h3>
            <p className="text-gray-400">Banks charge high fees for low returns. You could earn 3x more with the right fund.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Missed Deductions</h3>
            <p className="text-gray-400">CHF 7,056 max deduction (2026). Not maxing out? You're giving money to the taxman.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">No Strategy</h3>
            <p className="text-gray-400">3a vs 3b? Multiple accounts? Withdrawal timing? Most people just guess.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Swiss 3rd Pillar Facts</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-indigo-400">CHF 7,056</p>
            <p className="text-sm text-gray-400 mt-2">Max 3a deduction (employed)</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-indigo-400">CHF 2,000+</p>
            <p className="text-sm text-gray-400 mt-2">Avg. yearly tax savings</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-indigo-400">5+</p>
            <p className="text-sm text-gray-400 mt-2">Accounts recommended</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-indigo-400">Dec 31</p>
            <p className="text-sm text-gray-400 mt-2">Contribution deadline</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What PilierBot Does</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Compare Providers</h3>
            <p className="text-gray-400">Analyze all Swiss 3a providers — fees, returns, fund options. Find your perfect match.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Maximize Returns</h3>
            <p className="text-gray-400">Switch from savings accounts to equity funds. Your risk profile, optimized allocation.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Tax Strategy</h3>
            <p className="text-gray-400">Multiple accounts, staggered withdrawals, 3a vs 3b decisions — all calculated.</p>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-md mx-auto bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-2">Get Early Access</h2>
          <p className="text-gray-400 text-center mb-6">Join the beta — optimize your 3rd pillar with AI</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="PilierBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition-colors"
            >
              Join Beta →
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">Free during beta. No spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">Built by Agent Mafia — AI agents that actually do the work</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white">Home</Link>
            <Link href="/agents" className="hover:text-white">All Agents</Link>
            <a href="mailto:dev@agentmafia.one" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
