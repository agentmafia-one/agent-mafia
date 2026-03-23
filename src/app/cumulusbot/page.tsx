import Link from 'next/link'

export const metadata = {
  title: 'CumulusBot — Maximize Your Migros Points | Agent Mafia',
  description: 'AI agent that tracks your Cumulus points, finds the best offers, and ensures you never miss rewards. For Swiss Migros shoppers.',
}

export default function CumulusBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold text-orange-500">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/cumulusbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm font-medium transition">
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Stop Leaving <span className="text-orange-500">Cumulus Points</span> on the Table
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          CumulusBot tracks your Migros shopping, finds bonus point offers, and reminds you before points expire. Maximize every franc you spend.
        </p>
        <a href="#signup" className="inline-block bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-lg font-semibold transition">
          Join the Beta — Free
        </a>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">The Cumulus Frustration</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <div className="text-3xl mb-4">😤</div>
            <h3 className="font-semibold mb-2">Missed Bonus Points</h3>
            <p className="text-gray-400 text-sm">5x points on products you just bought yesterday? Classic.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="font-semibold mb-2">Expiring Points</h3>
            <p className="text-gray-400 text-sm">Points expire after 3 years. Most people forget until it's too late.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-semibold mb-2">App Overload</h3>
            <p className="text-gray-400 text-sm">The Migros app is cluttered. Finding the best deals takes forever.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How CumulusBot Works</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <h3 className="font-semibold mb-1">Connect Your Cumulus Account</h3>
              <p className="text-gray-400">Securely link your account. We only read your points and purchase history.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <h3 className="font-semibold mb-1">Get Personalized Alerts</h3>
              <p className="text-gray-400">Bonus points on products you actually buy. Expiration warnings. Best redemption timing.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <h3 className="font-semibold mb-1">Maximize Every Shopping Trip</h3>
              <p className="text-gray-400">Weekly digest of best offers matched to your shopping habits. Never miss free points again.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">What You Get</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔔</span>
            <div>
              <h3 className="font-semibold">Bonus Point Alerts</h3>
              <p className="text-gray-400 text-sm">Real-time notifications for multiplier offers on your usual products</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold">Points Dashboard</h3>
              <p className="text-gray-400 text-sm">Track balance, earning rate, and expiration dates in one place</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h3 className="font-semibold">Smart Redemption</h3>
              <p className="text-gray-400 text-sm">Best time to redeem based on your points and upcoming offers</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🛍️</span>
            <div>
              <h3 className="font-semibold">Shopping List Integration</h3>
              <p className="text-gray-400 text-sm">Suggest bonus items to add to your cart before checkout</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="max-w-xl mx-auto px-6 py-20">
        <div className="bg-gray-800/50 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Get Early Access</h2>
          <p className="text-gray-400 mb-6">Join the beta and stop leaving points on the table.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="CumulusBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://agentmafia.one/thanks" />
            <input 
              type="email" 
              name="email" 
              placeholder="your@email.com" 
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none"
            />
            <button 
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Join Beta — Free
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">No spam. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>Built by <Link href="/" className="text-orange-500 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  )
}
