import Link from 'next/link'

export const metadata = {
  title: 'AVSBot — Track Your Swiss Retirement | Agent Mafia',
  description: 'AI agent that tracks your AVS/AHV contributions, calculates your future pension, and spots missing years. Know exactly what you\'ll get.',
}

export default function AVSBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/avsbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Check My AVS
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-6">
          🏦 Swiss Retirement Tracker
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          How Much AVS Will<br />
          <span className="text-blue-400">You Actually Get?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          AVSBot tracks your AHV/AVS contributions, finds missing years, 
          and calculates your real pension. No more guessing.
        </p>
        <a href="#signup" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Calculate My Pension →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The AVS Problem</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">❓</div>
            <h3 className="text-xl font-semibold mb-2">No Clarity</h3>
            <p className="text-gray-400">Your AVS statement is confusing. How much will you actually receive? Nobody knows.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🕳️</div>
            <h3 className="text-xl font-semibold mb-2">Missing Years</h3>
            <p className="text-gray-400">Gaps in your contribution history reduce your pension forever. Did you miss any?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📉</div>
            <h3 className="text-xl font-semibold mb-2">Max CHF 2,450/mo</h3>
            <p className="text-gray-400">That's the maximum. Most people get less. Are you on track for the full amount?</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">AVS in Numbers (2024)</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 2,450</p>
            <p className="text-sm text-gray-400 mt-2">Maximum monthly pension</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 1,225</p>
            <p className="text-sm text-gray-400 mt-2">Minimum monthly pension</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">44 years</p>
            <p className="text-sm text-gray-400 mt-2">Full contribution period</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">−2.3%</p>
            <p className="text-sm text-gray-400 mt-2">Per missing year</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How AVSBot Works</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Upload Your AVS Statement</h3>
              <p className="text-gray-400">Get it from your Caisse de compensation or via AHVeasy. Takes 2 minutes.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AVSBot Analyzes Everything</h3>
              <p className="text-gray-400">We scan for missing years, calculate your projected pension, and flag issues.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Get Your Retirement Forecast</h3>
              <p className="text-gray-400">Clear report: estimated pension, gaps to fill, and optimization tips.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Who Needs AVSBot?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">✅ High Priority:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Expats</strong> — Did your home country years transfer?</li>
              <li>• <strong>Self-employed</strong> — Are you paying enough?</li>
              <li>• <strong>Part-timers</strong> — Multiple jobs = multiple gaps</li>
              <li>• <strong>Parents</strong> — Did childcare years get credited?</li>
              <li>• <strong>Over 50s</strong> — Still time to fill gaps</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-400">⚠️ Common Mistakes:</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• "I always worked" — But not always in Switzerland</li>
              <li>• "My employer handles it" — Errors happen</li>
              <li>• "I'm too young to care" — Gaps compound</li>
              <li>• "It's automatic" — Nothing is automatic</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">One-time analysis</p>
        <p className="text-4xl font-bold mb-4">CHF 79</p>
        <p className="text-gray-400">Full AVS analysis + pension forecast + gap identification • No subscription</p>
        <p className="text-sm text-gray-500 mt-4">Includes one year of tracking reminders</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-blue-900 to-gray-900 p-8 rounded-2xl border border-blue-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Know Your Future Pension</h2>
          <p className="text-gray-300 mb-6">Free check to see if you have gaps. Full analysis: CHF 79.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="AVSBot Beta Signup" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            <select name="situation" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none">
              <option value="">Your situation</option>
              <option value="employed">Employed in Switzerland</option>
              <option value="self-employed">Self-employed</option>
              <option value="expat">Expat (worked abroad)</option>
              <option value="part-time">Part-time / Multiple jobs</option>
              <option value="approaching-retirement">Approaching retirement (50+)</option>
            </select>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors">
              Get My AVS Check →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">Free initial check. No spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Built by <Link href="/" className="text-blue-400 hover:text-blue-300">Agent Mafia</Link> — AI agents that work for you</p>
      </footer>
    </div>
  )
}
