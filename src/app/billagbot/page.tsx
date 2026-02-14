import Link from 'next/link'

export const metadata = {
  title: 'BillagBot — Fight Back Against Serafe | Agent Mafia',
  description: 'AI agent that handles Serafe/Billag disputes, exemption claims, and billing errors. Stop overpaying the Swiss radio tax.',
}

export default function BillagBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/billagbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Stop Overpaying
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-red-500/20 text-red-300 px-4 py-1 rounded-full text-sm mb-6">
          📺 Swiss Radio Tax Fighter
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Serafe Sent Another Bill?<br />
          <span className="text-red-400">Fight Back.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          BillagBot handles Serafe disputes, exemption claims, and billing errors. 
          Stop paying CHF 335/year if you don't have to.
        </p>
        <a href="#signup" className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Check If You Qualify →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Serafe Problem</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">CHF 335/Year</h3>
            <p className="text-gray-400">Everyone pays. Even if you don't own a TV or radio. Even students. Even the blind.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">Exemption Maze</h3>
            <p className="text-gray-400">Exemptions exist but the process is confusing. Wrong form? Denied. Late? Pay anyway.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-2">Business Rates</h3>
            <p className="text-gray-400">Companies pay up to CHF 35,590/year. Are you in the right category? Probably not.</p>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Who Can Get Exempted?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-red-400">✅ You MAY Qualify If:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Receiving AHV/IV supplementary benefits (EL)</li>
              <li>• Receiving social assistance</li>
              <li>• Diplomat or international org employee</li>
              <li>• Living in a care home (already covered)</li>
              <li>• Part of a household that already pays</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-400">❌ Common Misconceptions:</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• "I don't have a TV" — Doesn't matter anymore</li>
              <li>• "I only stream Netflix" — Still have to pay</li>
              <li>• "I'm a student" — Only exempt with EL</li>
              <li>• "I'm blind" — Partial reduction, not exempt</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How BillagBot Works</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tell Us Your Situation</h3>
              <p className="text-gray-400">Quick questionnaire: income source, household, residency status.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">BillagBot Finds Your Options</h3>
              <p className="text-gray-400">We check exemption criteria, business category errors, and billing mistakes.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Get Your Dispute Letter</h3>
              <p className="text-gray-400">Ready-to-send letter in German, French, or Italian. We track the response.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-8">For Businesses</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-6">
            Serafe charges businesses based on annual turnover. Many are in the wrong category.
          </p>
          <div className="bg-gray-900/50 p-6 rounded-xl mb-6">
            <p className="text-sm text-gray-400 mb-2">Business rates range from</p>
            <p className="text-3xl font-bold">CHF 160 <span className="text-gray-400">to</span> CHF 35,590<span className="text-lg text-gray-400">/year</span></p>
          </div>
          <p className="text-gray-400">BillagBot verifies your category and disputes overcharges automatically.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">One-time fee</p>
        <p className="text-4xl font-bold mb-4">CHF 49</p>
        <p className="text-gray-400">Dispute letter + exemption check + tracking • No subscription</p>
        <p className="text-sm text-gray-500 mt-4">Money back if you don't qualify for any savings</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-red-900 to-gray-900 p-8 rounded-2xl border border-red-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Check Your Exemption Status</h2>
          <p className="text-gray-300 mb-6">Free check. We only charge if you can save money.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="BillagBot Exemption Check" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
            />
            <select name="situation" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none">
              <option value="">Select your situation</option>
              <option value="individual">Individual / Household</option>
              <option value="business">Business</option>
              <option value="student">Student</option>
              <option value="social-assistance">Receiving social assistance</option>
              <option value="el">Receiving EL (supplementary benefits)</option>
            </select>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-colors">
              Check My Status →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">Free check. No spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Built by <Link href="/" className="text-red-400 hover:text-red-300">Agent Mafia</Link> — AI agents that fight for you</p>
      </footer>
    </div>
  )
}
