import Link from 'next/link'

export const metadata = {
  title: 'SteuernBot — Swiss Canton Tax Optimizer | Agent Mafia',
  description: 'AI agent that compares tax rates across all 26 Swiss cantons. Find the optimal place to live and save thousands in taxes every year.',
}

export default function SteuernBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/steuernbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Optimize Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-6">
          🏔️ Swiss Canton Tax Optimizer
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Wrong Canton =<br />
          <span className="text-blue-400">Wrong Tax Rate</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          SteuernBot compares income and wealth taxes across all 26 Swiss cantons.
          Find where you'd pay the least — and whether moving makes financial sense.
        </p>
        <a href="#signup" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Calculate My Savings →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Canton Tax Maze</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">26 Different Tax Systems</h3>
            <p className="text-gray-400">Each canton sets its own rates. Geneva vs Zug can mean CHF 50K+ difference on the same salary.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏘️</div>
            <h3 className="text-xl font-semibold mb-2">Commune Multipliers</h3>
            <p className="text-gray-400">Even within a canton, your commune matters. Collonge-Bellerive vs Carouge? Huge difference.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Wealth Tax Surprises</h3>
            <p className="text-gray-400">Some cantons tax your assets aggressively. Your portfolio could cost you more than your salary.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Swiss Taxation by the Numbers</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">26</p>
            <p className="text-sm text-gray-400 mt-2">Cantons with different rates</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">2,200+</p>
            <p className="text-sm text-gray-400 mt-2">Communes with own multipliers</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">22% → 45%</p>
            <p className="text-sm text-gray-400 mt-2">Top marginal rate range</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 50K+</p>
            <p className="text-sm text-gray-400 mt-2">Potential annual savings</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How SteuernBot Finds Your Optimal Canton</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">Enter Your Financials</h3>
            <p className="text-gray-400">Income, wealth, family status, deductions. SteuernBot models your complete tax picture.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">Compare All Cantons</h3>
            <p className="text-gray-400">See your exact tax bill in every canton and commune. Ranked from cheapest to most expensive.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">Get the Full Picture</h3>
            <p className="text-gray-400">Factor in rent differences, commute costs, and lifestyle. Is moving actually worth it?</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🗺️</span>
            <div>
              <h3 className="font-semibold mb-1">All 26 Cantons Compared</h3>
              <p className="text-gray-400 text-sm">From Zug to Geneva, Schwyz to Vaud. Every tax system modeled.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏠</span>
            <div>
              <h3 className="font-semibold mb-1">Commune-Level Precision</h3>
              <p className="text-gray-400 text-sm">Not just canton rates — actual commune multipliers for 2,200+ municipalities.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">💎</span>
            <div>
              <h3 className="font-semibold mb-1">Wealth Tax Calculator</h3>
              <p className="text-gray-400 text-sm">Your portfolio, real estate, and assets. See where wealth is taxed lightest.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <div>
              <h3 className="font-semibold mb-1">Family Optimization</h3>
              <p className="text-gray-400 text-sm">Married vs single, kids' deductions, childcare credits. All factored in.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🚂</span>
            <div>
              <h3 className="font-semibold mb-1">Commute Cost Analysis</h3>
              <p className="text-gray-400 text-sm">Lower taxes in Zug but work in Zurich? We calculate if it's worth the commute.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📈</span>
            <div>
              <h3 className="font-semibold mb-1">Multi-Year Projections</h3>
              <p className="text-gray-400 text-sm">Plan ahead. See how tax savings compound over 5, 10, 20 years.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Find Your Tax-Optimal Canton</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta and be first to compare all Swiss cantons. Stop leaving money on the table.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="SteuernBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Get Early Access
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">No spam. We'll notify you when SteuernBot is ready.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Part of <Link href="/" className="text-blue-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
        </div>
      </footer>
    </div>
  )
}
