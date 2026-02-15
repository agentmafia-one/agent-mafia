import Link from 'next/link'

export const metadata = {
  title: 'PropertyBot — AI Agent for Real Estate Professionals | Agent Mafia',
  description: 'Automate listings, match buyers, and close deals faster. Your AI-powered real estate assistant.',
}

export default function PropertyBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/propertybot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <div className="text-6xl mb-6">🏠</div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          PropertyBot
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Close more deals with less work. AI that manages listings, matches buyers, and handles follow-ups automatically.
        </p>
        <p className="text-lg text-amber-400 mb-12">
          Your 24/7 real estate assistant
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-lg font-semibold mb-2">Smart Listings</h3>
            <p className="text-gray-400">Auto-generate descriptions, sync across platforms, update pricing instantly.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Buyer Matching</h3>
            <p className="text-gray-400">AI matches properties to buyer preferences. No more manual searching.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="text-lg font-semibold mb-2">Auto Follow-ups</h3>
            <p className="text-gray-400">Never miss a lead. Automated outreach and appointment scheduling.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Join the Beta</h2>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="PropertyBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-amber-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get Early Access
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        Built by <Link href="/" className="text-amber-400 hover:underline">Agent Mafia</Link>
        <p className="mt-2">AI agents that actually do the work</p>
      </footer>
    </main>
  )
}
