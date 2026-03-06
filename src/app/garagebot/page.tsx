import Link from 'next/link'

export const metadata = {
  title: 'GarageBot - AI Car Maintenance Agent | Agent Mafia',
  description: 'MFK preparation, service reminders, and garage price comparison. Stop overpaying for car maintenance in Switzerland.',
}

export default function GarageBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/garagebot/fr" className="text-sm text-gray-400 hover:text-white">🇫🇷 Français</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🔧</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">GarageBot</span> — Pass Your MFK, Save on Repairs
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Swiss vehicle inspections (MFK) stress you out. Garages overcharge for "pre-checks." GarageBot tells you exactly what to fix, compares prices, and reminds you before deadlines.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 The Swiss Garage Problem</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-bold mb-2">MFK Anxiety</h3>
            <p className="text-gray-400">Every 2 years, the inspection looms. Fail it = no driving. Garages push expensive "pre-checks."</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="font-bold mb-2">Overcharged on Repairs</h3>
            <p className="text-gray-400">CHF 150/hour labor rates. Parts marked up 3x. Most people don't know what's fair.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🗓️</div>
            <h3 className="font-bold mb-2">Missed Deadlines</h3>
            <p className="text-gray-400">Forgot your service? MFK expired? Driving unregistered = fines and insurance problems.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ How GarageBot Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Add Your Vehicle</h3>
            <p className="text-gray-400">Enter your car details — we track MFK dates, service intervals, and warranty status</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">MFK Prep Checklist</h3>
            <p className="text-gray-400">Get a personalized list of what inspectors check — fix issues yourself or know what's coming</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Compare Garage Prices</h3>
            <p className="text-gray-400">Need repairs? We get quotes from multiple garages near you — save 30-50% on average</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-red-500">40%</div>
            <p className="text-gray-400">Average savings on repairs</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">98%</div>
            <p className="text-gray-400">MFK pass rate with our prep</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">0</div>
            <p className="text-gray-400">Missed deadlines with reminders</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Stop Stressing About Your Car</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta. Get MFK reminders, prep checklists, and fair price quotes. Early users get 3 months free.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="GarageBot Beta Signup" />
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
            className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-bold transition"
          >
            Join Beta
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-4">No spam. Unsubscribe anytime.</p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-500">
        <p>Built by <Link href="/" className="text-red-500 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  )
}
