import Link from 'next/link'

export const metadata = {
  title: 'ZahnarztBot - AI Dental Cost Agent | Agent Mafia',
  description: 'Compare Swiss dental prices, find affordable options abroad, and understand your insurance coverage. Stop overpaying for dental care.',
}

export default function ZahnarztBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/zahnarztbot/fr" className="text-sm text-gray-400 hover:text-white">🇫🇷 Français</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🦷</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">ZahnarztBot</span> — Escape Swiss Dental Prices
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Swiss dental is insanely expensive — a crown can cost CHF 2,000+. ZahnarztBot compares prices, finds quality dentists abroad, and checks what your insurance actually covers.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 The Dental Nightmare</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="font-bold mb-2">3-4x Higher Prices</h3>
            <p className="text-gray-400">A filling in Switzerland: CHF 300. Same filling in Germany: €80. You do the math.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏥</div>
            <h3 className="font-bold mb-2">Insurance Rarely Covers</h3>
            <p className="text-gray-400">Basic LAMal doesn't cover dental. Supplemental plans have limits and waiting periods.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="font-bold mb-2">Cross-Border Confusion</h3>
            <p className="text-gray-400">Germany, France, Hungary — where to go? Quality varies, and planning is a headache.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ How ZahnarztBot Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Describe Your Treatment</h3>
            <p className="text-gray-400">Crown, implant, cleaning, braces — tell us what you need done</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">Compare Options</h3>
            <p className="text-gray-400">Get prices from Swiss dentists AND vetted clinics in nearby countries</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Insurance Check</h3>
            <p className="text-gray-400">We analyze your policy and tell you exactly what's covered (usually less than you think)</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-red-500">70%</div>
            <p className="text-gray-400">Average savings going abroad</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">CHF 1,500+</div>
            <p className="text-gray-400">Saved per implant</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">200+</div>
            <p className="text-gray-400">Vetted clinics in our network</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Stop Overpaying for Dental</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta. Get a free cost comparison for your next dental treatment. Early users get 3 months free.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="ZahnarztBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-colors"
          >
            Join Beta →
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-500">
        <p>Part of <Link href="/" className="text-red-500 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  )
}
