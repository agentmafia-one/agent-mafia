import Link from 'next/link'

export const metadata = {
  title: 'DéménageBot — Swiss Moving & Canton Change Assistant | Agent Mafia',
  description: 'AI agent that handles your Swiss relocation admin. Canton registration, address changes, insurance updates, utility transfers. Move stress-free.',
}

export default function DemenageBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/demenagebot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Start Moving
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-orange-500/20 text-orange-300 px-4 py-1 rounded-full text-sm mb-6">
          📦 Swiss Relocation Assistant
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Moving in Switzerland?<br />
          <span className="text-orange-400">The Admin is Worse Than Packing.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          DéménageBot handles every administrative task when you move — canton registration,
          address updates, insurance transfers, utility changes. Focus on your new home,
          not paperwork.
        </p>
        <a href="#signup" className="inline-block bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Plan My Move →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Swiss Moving Chaos</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏛️</div>
            <h3 className="text-xl font-semibold mb-2">26 Cantons, 26 Systems</h3>
            <p className="text-gray-400">Each canton has different rules. What worked in Zürich fails in Vaud. Registration deadlines vary.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Endless Address Changes</h3>
            <p className="text-gray-400">Bank, insurance, employer, Billag, Post, electricity, internet, car registration... Did you forget one?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">14-Day Deadline</h3>
            <p className="text-gray-400">You must register within 14 days of moving. Miss it? Fines. But who has time when unpacking?</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Moving in Switzerland</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">500K+</p>
            <p className="text-sm text-gray-400 mt-2">People move yearly</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">14 days</p>
            <p className="text-sm text-gray-400 mt-2">Registration deadline</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">15+</p>
            <p className="text-sm text-gray-400 mt-2">Addresses to update</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">CHF 200+</p>
            <p className="text-sm text-gray-400 mt-2">Late registration fine</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How DéménageBot Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">Enter Your Move</h3>
            <p className="text-gray-400">Old address, new address, move date. DéménageBot creates your personalized checklist.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">Connect Your Accounts</h3>
            <p className="text-gray-400">Bank, insurance, utilities. We pull your current providers and prepare update requests.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">We Handle Everything</h3>
            <p className="text-gray-400">DéménageBot sends notifications, files registrations, and confirms every change. You just move.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Everything Handled</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏛️</span>
            <div>
              <h3 className="font-semibold mb-1">Canton Registration</h3>
              <p className="text-gray-400 text-sm">Departure from old commune, arrival at new one. Forms pre-filled.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📮</span>
            <div>
              <h3 className="font-semibold mb-1">Post Redirect</h3>
              <p className="text-gray-400 text-sm">Mail forwarding activated. Nothing gets lost during transition.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏥</span>
            <div>
              <h3 className="font-semibold mb-1">Insurance Updates</h3>
              <p className="text-gray-400 text-sm">Health, car, liability — all notified with new address.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold mb-1">Utilities Transfer</h3>
              <p className="text-gray-400 text-sm">Electricity, internet, mobile — seamless handover.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🚗</span>
            <div>
              <h3 className="font-semibold mb-1">Vehicle Registration</h3>
              <p className="text-gray-400 text-sm">New canton plates? We handle the paperwork.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📅</span>
            <div>
              <h3 className="font-semibold mb-1">Deadline Tracking</h3>
              <p className="text-gray-400 text-sm">Never miss the 14-day registration window.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Move Without the Admin Nightmare</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta and let DéménageBot handle your Swiss relocation. Focus on your new home, not paperwork.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="DéménageBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
          />
          <button 
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Get Early Access
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">No spam. We'll notify you when DéménageBot is ready.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Part of <Link href="/" className="text-orange-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
        </div>
      </footer>
    </div>
  )
}
