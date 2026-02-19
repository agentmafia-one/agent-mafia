import Link from 'next/link'

export const metadata = {
  title: 'PermisBot — Never Miss a Permit Deadline | Agent Mafia',
  description: 'AI agent that tracks your Swiss permits, reminds you before renewals, and guides you through visa processes. Stay legal, stress-free.',
}

export default function PermisBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/permisbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Track My Permit
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm mb-6">
          🛂 Swiss Permit Tracker
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Your Permit Expires.<br />
          <span className="text-emerald-400">Do You Even Know When?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          PermisBot tracks your B, C, L, or G permit, reminds you before deadlines,
          and guides you through the renewal process. Never get caught off-guard.
        </p>
        <a href="#signup" className="inline-block bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Set Up My Reminders →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Permit Problem</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Missed Deadlines</h3>
            <p className="text-gray-400">One missed renewal = legal limbo. Your job, bank account, and life in Switzerland at risk.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Complex Requirements</h3>
            <p className="text-gray-400">Each canton, each permit type — different rules, different documents. Good luck figuring it out.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏳</div>
            <h3 className="text-xl font-semibold mb-2">Long Processing Times</h3>
            <p className="text-gray-400">3-6 months for some permits. Apply too late? You're stuck waiting with an expired permit.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Swiss Permits in Numbers</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">2.2M+</p>
            <p className="text-sm text-gray-400 mt-2">Foreign residents in CH</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">5 years</p>
            <p className="text-sm text-gray-400 mt-2">B permit validity</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">3-6 mo</p>
            <p className="text-sm text-gray-400 mt-2">Average processing time</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">10+ years</p>
            <p className="text-sm text-gray-400 mt-2">To qualify for C permit</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How PermisBot Works</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Enter Your Permit Details</h3>
              <p className="text-gray-400">Permit type, canton, expiry date, and your situation. Takes 2 minutes.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Get Smart Reminders</h3>
              <p className="text-gray-400">We notify you 6 months, 3 months, and 1 month before expiry — with exact steps to take.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Follow Your Personalized Checklist</h3>
              <p className="text-gray-400">Documents needed, forms to fill, where to submit — all based on your canton and permit type.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Permit Types */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">We Track All Swiss Permits</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-emerald-400">✅ Residence Permits:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>B Permit</strong> — Annual residence (employed/family)</li>
              <li>• <strong>C Permit</strong> — Permanent residence (5-10 years)</li>
              <li>• <strong>L Permit</strong> — Short-term (&lt;1 year)</li>
              <li>• <strong>G Permit</strong> — Cross-border workers (frontaliers)</li>
              <li>• <strong>S Permit</strong> — Temporary protection</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-emerald-400">✅ Also Tracks:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Family reunification deadlines</li>
              <li>• Canton transfer requirements</li>
              <li>• C permit eligibility timeline</li>
              <li>• Naturalization prerequisites</li>
              <li>• Employment condition changes</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">Per year</p>
        <p className="text-4xl font-bold mb-4">CHF 49</p>
        <p className="text-gray-400">Smart reminders + renewal checklist + document guidance • Cancel anytime</p>
        <p className="text-sm text-gray-500 mt-4">Peace of mind for less than a coffee per month</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-emerald-900 to-gray-900 p-8 rounded-2xl border border-emerald-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Never Miss a Permit Deadline</h2>
          <p className="text-gray-300 mb-6">Join the beta. First 100 users get 50% off for life.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="PermisBot Beta Signup" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none"
            />
            <select name="permit_type" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none">
              <option value="">Your permit type</option>
              <option value="B">B Permit (Residence)</option>
              <option value="C">C Permit (Permanent)</option>
              <option value="L">L Permit (Short-term)</option>
              <option value="G">G Permit (Cross-border)</option>
              <option value="other">Other / Not sure</option>
            </select>
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-lg font-semibold transition-colors">
              Get Early Access →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">Free until launch. No spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Built by <Link href="/" className="text-emerald-400 hover:text-emerald-300">Agent Mafia</Link> — AI agents that work for you</p>
      </footer>
    </div>
  )
}
