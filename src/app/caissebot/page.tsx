import Link from 'next/link'

export const metadata = {
  title: 'CaisseBot — Swiss Health Insurance Optimizer | Agent Mafia',
  description: 'AI agent that compares Krankenkasse premiums and finds the best health insurance for you. Save thousands on LAMal premiums every year.',
}

export default function CaisseBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/caissebot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Compare Now
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm mb-6">
          🏥 Swiss Health Insurance Optimizer
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Paying Too Much<br />
          <span className="text-emerald-400">for Krankenkasse?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          CaisseBot compares every Swiss health insurance provider, finds the optimal
          franchise, and handles the switch for you. Save CHF 1,000+ per year without
          compromising coverage.
        </p>
        <a href="#signup" className="inline-block bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Find My Savings →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Premium Pain</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Premiums Keep Rising</h3>
            <p className="text-gray-400">Every year, same story: +5-10% increase. Your salary doesn't rise that fast, but your Krankenkasse does.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🔢</div>
            <h3 className="text-xl font-semibold mb-2">50+ Insurers to Compare</h3>
            <p className="text-gray-400">CSS, Helsana, Swica, Assura, Concordia... Who has time to compare all these plans and franchises?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Miss November, Miss Savings</h3>
            <p className="text-gray-400">You can only switch once a year. Miss the November deadline and you're stuck for 12 more months.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Swiss Health Insurance by the Numbers</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">CHF 350+</p>
            <p className="text-sm text-gray-400 mt-2">Average monthly premium</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">50+</p>
            <p className="text-sm text-gray-400 mt-2">Insurance providers</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">CHF 1,200</p>
            <p className="text-sm text-gray-400 mt-2">Average annual savings</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">Nov 30</p>
            <p className="text-sm text-gray-400 mt-2">Switch deadline</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How CaisseBot Saves You Money</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">Share Your Profile</h3>
            <p className="text-gray-400">Age, canton, current insurer, health habits. CaisseBot maps your needs in 2 minutes.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">Compare All Options</h3>
            <p className="text-gray-400">Every insurer, every franchise (CHF 300-2,500), every model (telmed, HMO, standard). Ranked by total cost.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">Switch Automatically</h3>
            <p className="text-gray-400">CaisseBot generates your cancellation letter, sends it by deadline, and confirms your new coverage.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔍</span>
            <div>
              <h3 className="font-semibold mb-1">Real-Time Premium Comparison</h3>
              <p className="text-gray-400 text-sm">All 50+ insurers, updated daily. No outdated data.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold mb-1">Franchise Optimizer</h3>
              <p className="text-gray-400 text-sm">Based on your health history, we recommend CHF 300, 500, 1000, 1500, or 2500.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏥</span>
            <div>
              <h3 className="font-semibold mb-1">Accident Coverage Check</h3>
              <p className="text-gray-400 text-sm">Working 8+ hours? You might be paying for coverage you already have.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📅</span>
            <div>
              <h3 className="font-semibold mb-1">Deadline Reminders</h3>
              <p className="text-gray-400 text-sm">We alert you in October so you never miss the November switch window.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">✉️</span>
            <div>
              <h3 className="font-semibold mb-1">Auto-Generated Letters</h3>
              <p className="text-gray-400 text-sm">Cancellation and switch letters ready to sign and send.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <div>
              <h3 className="font-semibold mb-1">Family Plans</h3>
              <p className="text-gray-400 text-sm">Optimize for the whole household. Kids have different rules!</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Stop Overpaying for Health Insurance</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta and be first to optimize your Krankenkasse. CaisseBot launches before the November 2026 switch window.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="CaisseBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
          />
          <button 
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Get Early Access
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">No spam. We'll notify you when CaisseBot is ready.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Part of <Link href="/" className="text-emerald-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
        </div>
      </footer>
    </div>
  )
}
