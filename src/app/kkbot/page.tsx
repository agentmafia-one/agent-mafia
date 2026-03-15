import Link from 'next/link'

export const metadata = {
  title: 'KKBot — Swiss Health Insurance Claims Tracker | Agent Mafia',
  description: 'AI agent that tracks your Krankenkasse claims, follows up on reimbursements, and fights rejected claims. Never lose money to your health insurer again.',
}

export default function KKBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-rose-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/kkbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Track Claims
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-rose-500/20 text-rose-300 px-4 py-1 rounded-full text-sm mb-6">
          🏥 Health Insurance Claims Tracker
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Your Krankenkasse<br />
          <span className="text-rose-400">Owes You Money</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          KKBot tracks every claim, follows up on pending reimbursements, and
          disputes rejected claims automatically. Stop leaving money on the table.
        </p>
        <a href="#signup" className="inline-block bg-rose-600 hover:bg-rose-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Start Tracking →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Reimbursement Nightmare</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Lost in the Pile</h3>
            <p className="text-gray-400">You submitted a claim 3 months ago. Did they pay? Did they reject it? Who knows.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">❌</div>
            <h3 className="text-xl font-semibold mb-2">Silent Rejections</h3>
            <p className="text-gray-400">They reject claims hoping you won't notice. No email, no call — just silence.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Life's Too Short</h3>
            <p className="text-gray-400">Calling the hotline, waiting on hold, explaining the same thing again. There has to be a better way.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">The Hidden Cost of Not Tracking</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-rose-400">CHF 800+</p>
            <p className="text-sm text-gray-400 mt-2">Average unclaimed per year</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-rose-400">23%</p>
            <p className="text-sm text-gray-400 mt-2">Claims rejected unfairly</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-rose-400">45 days</p>
            <p className="text-sm text-gray-400 mt-2">Average delay to payment</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-rose-400">3 hours</p>
            <p className="text-sm text-gray-400 mt-2">Wasted on hold annually</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How KKBot Gets Your Money Back</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">Submit Once</h3>
            <p className="text-gray-400">Forward your invoices to KKBot. We log everything and start tracking automatically.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">We Follow Up</h3>
            <p className="text-gray-400">KKBot monitors status, sends reminders to your insurer, and escalates when needed.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">Fight Rejections</h3>
            <p className="text-gray-400">Claim rejected? KKBot generates dispute letters citing Swiss law and precedents.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Everything You Need</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold mb-1">Claims Dashboard</h3>
              <p className="text-gray-400 text-sm">See all pending, paid, and rejected claims in one place.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">⏰</span>
            <div>
              <h3 className="font-semibold mb-1">Auto Follow-Up</h3>
              <p className="text-gray-400 text-sm">If no response in 30 days, KKBot sends a reminder automatically.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">⚖️</span>
            <div>
              <h3 className="font-semibold mb-1">Dispute Generator</h3>
              <p className="text-gray-400 text-sm">One-click appeal letters for rejected claims, citing LAMal regulations.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📱</span>
            <div>
              <h3 className="font-semibold mb-1">WhatsApp Updates</h3>
              <p className="text-gray-400 text-sm">Get notified when claims are paid or need attention.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏥</span>
            <div>
              <h3 className="font-semibold mb-1">All Insurers Supported</h3>
              <p className="text-gray-400 text-sm">CSS, Helsana, Swica, Assura, Concordia — we handle them all.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">💰</span>
            <div>
              <h3 className="font-semibold mb-1">Money-Back Guarantee</h3>
              <p className="text-gray-400 text-sm">If we don't recover more than you pay, you get a full refund.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Stop Losing Money to Your Insurer</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta and let KKBot fight for every franc you're owed.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="KKBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-rose-500"
          />
          <button 
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Get Early Access
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">No spam. We'll notify you when KKBot is ready.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Part of <Link href="/" className="text-rose-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
        </div>
      </footer>
    </div>
  )
}
