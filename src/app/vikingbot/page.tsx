import Link from 'next/link'

export const metadata = {
  title: 'VikingBot — Language School Finance Optimizer | Agent Mafia',
  description: 'AI agent that optimizes finances for language schools. Automate invoicing, track student payments, and maximize cash flow.',
}

export default function VikingBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/vikingbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Get Started
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm mb-6">
          🎓 Language School Finance AI
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Running a School<br />
          <span className="text-purple-400">Shouldn't Mean Chasing Payments</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          VikingBot handles invoicing, payment tracking, and cash flow optimization 
          for language schools. Focus on teaching while AI handles the business.
        </p>
        <a href="#signup" className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Optimize My School →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Language School Struggle</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">Chasing Late Payments</h3>
            <p className="text-gray-400">Students pay late, installments get missed, and you spend hours sending reminders instead of teaching.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Manual Invoicing Hell</h3>
            <p className="text-gray-400">Creating invoices for each student, each term, each class. Hours of admin work every month.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Cash Flow Blindspots</h3>
            <p className="text-gray-400">When will money arrive? Who's overdue? Which terms are most profitable? You're guessing.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">How VikingBot Helps</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">Auto-Invoicing</h3>
            <p className="text-gray-400">Generate and send invoices automatically based on enrollment and class schedules.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Payment Reminders</h3>
            <p className="text-gray-400">Friendly, professional reminders sent at the right time. No awkward conversations.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Cash Flow Dashboard</h3>
            <p className="text-gray-400">See expected income, overdue amounts, and seasonal trends at a glance.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Built for Language Schools</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold">Multi-Term Tracking</h4>
              <p className="text-gray-400 text-sm">Handle semester payments, intensive course fees, and private lesson billing in one place.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold">Installment Plans</h4>
              <p className="text-gray-400 text-sm">Offer flexible payment plans and automatically track each installment.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold">Swiss QR Invoices</h4>
              <p className="text-gray-400 text-sm">Generate proper Swiss QR-code invoices that work with any bank.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold">Multi-Language Support</h4>
              <p className="text-gray-400 text-sm">Send invoices and reminders in German, French, English, or Italian.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl italic text-gray-300 mb-4">
            "Finally, I can focus on my students instead of spreadsheets. VikingBot reduced 
            my admin time by 80% and I get paid faster."
          </p>
          <p className="text-purple-400">— Christian, Language School Owner</p>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to Streamline Your School?</h2>
        <p className="text-gray-400 mb-8">Join the beta — limited spots for language school owners.</p>
        
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="VikingBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Join Beta
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Free during beta. No credit card required.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Built by <Link href="/" className="text-purple-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
        </div>
      </footer>
    </div>
  )
}
