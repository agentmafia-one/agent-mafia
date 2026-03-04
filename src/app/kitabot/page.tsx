import Link from 'next/link'

export const metadata = {
  title: 'KitaBot - AI Daycare Waitlist Agent | Agent Mafia',
  description: 'Navigate Swiss Kita waitlists, track applications, and maximize subsidy eligibility. Stop the daycare nightmare.',
}

export default function KitaBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/kitabot/fr" className="text-sm text-gray-400 hover:text-white">🇫🇷 Français</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">👶</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">KitaBot</span> — Conquer the Kita Waitlist
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Swiss daycare waitlists are insane — 2-3 years in cities. KitaBot tracks your applications, finds openings, and handles subsidy paperwork so you can actually go back to work.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 The Kita Nightmare</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="font-bold mb-2">2-3 Year Waitlists</h3>
            <p className="text-gray-400">You need to register before your baby is even born. Miss the window? You're stuck.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="font-bold mb-2">Multiple Applications</h3>
            <p className="text-gray-400">Apply to 10+ Kitas, track each one manually, and hope for a miracle.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="font-bold mb-2">Subsidy Confusion</h3>
            <p className="text-gray-400">Each canton has different rules. You might qualify for help but never know it.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ How KitaBot Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Add Your Kitas</h3>
            <p className="text-gray-400">Tell us which daycares you've applied to (or let us find the best ones)</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">AI Tracks Everything</h3>
            <p className="text-gray-400">We monitor waitlist positions, chase follow-ups, spot new openings</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Get Alerts + Subsidies</h3>
            <p className="text-gray-400">Instant notification when a spot opens. We prep your subsidy application too.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Stop Stressing About Daycare</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta. We'll help you navigate the Swiss Kita system. Early users get 3 months free.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="KitaBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            required
            placeholder="your@email.com" 
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-bold transition-colors"
          >
            Get Early Access
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-500">
        <p>Built by <Link href="/" className="text-red-500 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  )
}
