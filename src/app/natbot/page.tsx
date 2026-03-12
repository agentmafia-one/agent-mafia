import Link from 'next/link'

export const metadata = {
  title: 'NatBot — Your Swiss Citizenship Guide | Agent Mafia',
  description: 'AI agent that guides you through Swiss naturalization. Track requirements, prepare documents, navigate cantonal rules. Your path to the red passport.',
}

export default function NatBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/natbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Start My Journey
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-red-500/20 text-red-300 px-4 py-1 rounded-full text-sm mb-6">
          🇨🇭 Swiss Citizenship Navigator
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          10+ Years in Switzerland.<br />
          <span className="text-red-400">Ready for the Red Passport?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          NatBot guides you through Swiss naturalization — tracking requirements,
          preparing documents, and navigating your commune's specific rules.
          Your AI co-pilot to citizenship.
        </p>
        <a href="#signup" className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Check My Eligibility →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Naturalization Nightmare</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Endless Documents</h3>
            <p className="text-gray-400">Birth certificates, criminal records, tax statements, integration proof... from multiple countries. Good luck.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏘️</div>
            <h3 className="text-xl font-semibold mb-2">Every Commune is Different</h3>
            <p className="text-gray-400">2,136 communes, 2,136 different rules. What works in Zürich fails in Geneva. Total chaos.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏳</div>
            <h3 className="text-xl font-semibold mb-2">Years of Waiting</h3>
            <p className="text-gray-400">1-3 years processing time. One mistake? Start over. Miss a deadline? Back of the queue.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Swiss Naturalization in Numbers</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-red-400">10+ years</p>
            <p className="text-sm text-gray-400 mt-2">Residence required</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-red-400">CHF 2-5K</p>
            <p className="text-sm text-gray-400 mt-2">Application fees</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-red-400">40K+</p>
            <p className="text-sm text-gray-400 mt-2">Naturalizations/year</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-red-400">B1-B2</p>
            <p className="text-sm text-gray-400 mt-2">Language level needed</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How NatBot Guides You</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Eligibility Check</h3>
            <p className="text-gray-400">Instant assessment based on your residence history, canton, and personal situation.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Document Checklist</h3>
            <p className="text-gray-400">Commune-specific requirements. Know exactly what you need before you start.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🗓️</div>
            <h3 className="text-xl font-semibold mb-2">Timeline Tracker</h3>
            <p className="text-gray-400">Track your application, get reminders, never miss a deadline or interview.</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Basic Requirements</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>10 years residence</strong> (or 5 with C permit for some)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>C permit</strong> at time of application</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>Language proficiency</strong> — B1 oral, A2 written (varies by canton)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>Integration</strong> — social, cultural, professional ties to Switzerland</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>Clean record</strong> — no serious criminal convictions</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>Financial independence</strong> — no recent social assistance</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Your Swiss Passport Awaits</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta. Get personalized guidance for your naturalization journey.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="NatBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="Enter your email" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Start My Journey
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Free eligibility check. No spam.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>Part of <Link href="/" className="text-red-400 hover:text-red-300">Agent Mafia</Link> — AI agents that work for you</p>
        </div>
      </footer>
    </div>
  )
}
