import Link from 'next/link'

export const metadata = {
  title: 'AssuranceBot — Optimize Your Swiss Health Insurance | Agent Mafia',
  description: 'AI agent that compares Swiss health insurance (LAMal), finds the best franchise, and helps you switch during open season. Save CHF 1,000+ per year.',
}

export default function AssuranceBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/assurancebot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Compare My Insurance
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm mb-6">
          🏥 Swiss Health Insurance Optimizer
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Are You Overpaying<br />
          <span className="text-green-400">For Health Insurance?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          AssuranceBot compares all Swiss Krankenkasse options, finds your ideal franchise, 
          and switches you automatically. Save CHF 1,000+ per year.
        </p>
        <a href="#signup" className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Find Cheaper Insurance →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Swiss Insurance Problem</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Premiums Explode</h3>
            <p className="text-gray-400">+6% average increase every year. Your insurer counts on you not switching.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🤯</div>
            <h3 className="text-xl font-semibold mb-2">60+ Insurers</h3>
            <p className="text-gray-400">Comparing them all manually? Nobody has time. You stick with what you have.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">November Deadline</h3>
            <p className="text-gray-400">Miss the switching window and you're locked in for another year of overpaying.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Swiss Health Insurance Facts</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-green-400">CHF 350+</p>
            <p className="text-sm text-gray-400 mt-2">Avg. monthly premium</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-green-400">CHF 2,500</p>
            <p className="text-sm text-gray-400 mt-2">Max franchise saves most</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-green-400">60+</p>
            <p className="text-sm text-gray-400 mt-2">Insurance providers</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-green-400">Nov 30</p>
            <p className="text-sm text-gray-400 mt-2">Annual switching deadline</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How AssuranceBot Works</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Share Your Current Situation</h3>
              <p className="text-gray-400">Your canton, age, current insurer, and how often you visit doctors.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AssuranceBot Compares Everything</h3>
              <p className="text-gray-400">All 60+ insurers, all franchise options, all models (HMO, Telmed, standard). In seconds.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Switch With One Click</h3>
              <p className="text-gray-400">We generate your cancellation letter and new application. You just sign.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Explainer */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Which Franchise Is Right?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400">✅ CHF 2,500 Franchise If:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• You're healthy and rarely see doctors</li>
              <li>• You're under 40 with no chronic conditions</li>
              <li>• You have savings for unexpected costs</li>
              <li>• You can handle CHF 2,500 + 10% up to CHF 700</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-400">⚠️ CHF 300 Franchise If:</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• You have chronic conditions</li>
              <li>• Regular medications needed</li>
              <li>• Frequent doctor visits expected</li>
              <li>• Prefer predictable monthly costs</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">Annual optimization service</p>
        <p className="text-4xl font-bold mb-4">CHF 49</p>
        <p className="text-gray-400">Full comparison + best recommendation + switching assistance • Saves CHF 1,000+ avg</p>
        <p className="text-sm text-gray-500 mt-4">Free comparison • Pay only if you switch</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-green-900 to-gray-900 p-8 rounded-2xl border border-green-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Stop Overpaying for Insurance</h2>
          <p className="text-gray-300 mb-6">Free comparison. See how much you could save.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="AssuranceBot Beta Signup" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none"
            />
            <select name="canton" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none">
              <option value="">Your canton</option>
              <option value="GE">Genève</option>
              <option value="VD">Vaud</option>
              <option value="ZH">Zürich</option>
              <option value="BE">Bern</option>
              <option value="BS">Basel-Stadt</option>
              <option value="other">Other canton</option>
            </select>
            <select name="situation" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none">
              <option value="">Current situation</option>
              <option value="never-compared">Never compared insurers</option>
              <option value="years-ago">Compared years ago</option>
              <option value="recent-increase">Just got premium increase</option>
              <option value="new-to-ch">New to Switzerland</option>
            </select>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold transition-colors">
              Get Free Comparison →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">100% free. No obligation. No spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Built by <Link href="/" className="text-green-400 hover:text-green-300">Agent Mafia</Link> — AI agents that work for you</p>
      </footer>
    </div>
  )
}
