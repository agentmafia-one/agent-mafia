import Link from 'next/link'

export const metadata = {
  title: 'PilierBot — Swiss 3rd Pillar Optimizer | Agent Mafia',
  description: 'AI agent that maximizes your Pillar 3a retirement savings. Find the best providers, optimize tax deductions, and build wealth smarter.',
}

export default function PilierBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/pilierbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Optimize Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-6">
          🏦 Swiss Retirement Optimizer
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Your 3rd Pillar<br />
          <span className="text-blue-400">Is Underperforming</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          PilierBot analyzes your Pillar 3a options, finds providers with the lowest fees 
          and highest returns, and maximizes your tax savings. Build real wealth for retirement.
        </p>
        <a href="#signup" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Optimize My 3a →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Pillar 3a Problem</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📉</div>
            <h3 className="text-xl font-semibold mb-2">Banks Pay Almost Nothing</h3>
            <p className="text-gray-400">Traditional bank 3a accounts yield 0.5% or less. Inflation eats your retirement savings every year.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Hidden Fees Destroy Returns</h3>
            <p className="text-gray-400">Some 3a funds charge 1.5%+ in fees. Over 30 years, that's tens of thousands lost to your provider.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🤷</div>
            <h3 className="text-xl font-semibold mb-2">Which Provider Is Best?</h3>
            <p className="text-gray-400">VIAC, Finpension, Frankly, banks... 20+ options with different strategies, fees, and performance.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Pillar 3a by the Numbers</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 7,056</p>
            <p className="text-sm text-gray-400 mt-2">2024 max contribution (employed)</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">~25%</p>
            <p className="text-sm text-gray-400 mt-2">Tax savings on contributions</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 100K+</p>
            <p className="text-sm text-gray-400 mt-2">Fee difference over 30 years</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">Dec 31</p>
            <p className="text-sm text-gray-400 mt-2">Yearly contribution deadline</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How PilierBot Helps</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Analyze Your Situation</h3>
            <p className="text-gray-400">Tell us your age, canton, income, and risk tolerance. We calculate your optimal strategy.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Compare All Providers</h3>
            <p className="text-gray-400">VIAC, Finpension, Frankly, True Wealth, banks — we compare fees, performance, and features.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Maximize Your Returns</h3>
            <p className="text-gray-400">Get a personalized recommendation with projected savings. We help you switch if needed.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">What You Get</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold mb-1">Provider Comparison</h3>
              <p className="text-gray-400 text-sm">Side-by-side analysis of all Swiss 3a providers with real fee calculations.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🧮</span>
            <div>
              <h3 className="font-semibold mb-1">Tax Optimization</h3>
              <p className="text-gray-400 text-sm">Calculate exact tax savings by canton and optimize contribution timing.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📈</span>
            <div>
              <h3 className="font-semibold mb-1">Investment Strategy</h3>
              <p className="text-gray-400 text-sm">Choose between conservative, balanced, or aggressive based on your timeline.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔔</span>
            <div>
              <h3 className="font-semibold mb-1">Deadline Reminders</h3>
              <p className="text-gray-400 text-sm">Never miss the December 31st contribution deadline again.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold mb-1">Multiple Account Strategy</h3>
              <p className="text-gray-400 text-sm">Learn how to split 3a across 5 accounts for staggered withdrawals.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔄</span>
            <div>
              <h3 className="font-semibold mb-1">Transfer Assistance</h3>
              <p className="text-gray-400 text-sm">Switch providers seamlessly without losing a single day of growth.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Stop Losing Money to Fees</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Join the beta and get a free 3a optimization analysis. See exactly how much you 
          could save by switching to a better provider.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="PilierBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Get Free Analysis
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Join 50+ Swiss savers optimizing their retirement</p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">Built by Agent Mafia — AI agents that actually do the work</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white">All Agents</Link>
            <Link href="/pilierbot/fr" className="hover:text-white">Français</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
