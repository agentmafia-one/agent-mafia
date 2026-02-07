import Link from 'next/link'

export const metadata = {
  title: 'InvoiceBot — Get Paid Faster | Agent Mafia',
  description: 'AI agent that creates invoices, sends reminders, and chases late payments. Stop losing money to slow payers.',
}

export default function InvoiceBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-amber-500">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/invoicebot/fr" className="text-slate-400 hover:text-white text-sm">FR</Link>
          <Link href="/#agents" className="text-slate-400 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-amber-500/10 rounded-full text-amber-500 text-sm font-medium mb-6">
          💸 Stop Chasing Payments
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Invoices That<br />
          <span className="text-amber-500">Pay Themselves</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          AI agent that creates professional invoices, sends automatic reminders, 
          and escalates late payments. You focus on work, we get you paid.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Sound Familiar?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
            <div className="text-3xl mb-4">😤</div>
            <h3 className="text-lg font-semibold text-white mb-2">Chasing Payments</h3>
            <p className="text-slate-400">Spending hours sending "friendly reminders" to clients who ghost you</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Cash Flow Chaos</h3>
            <p className="text-slate-400">No idea who owes what, when it's due, or what's overdue</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Time Drain</h3>
            <p className="text-slate-400">Creating invoices manually instead of doing billable work</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">InvoiceBot Handles It</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Instant Invoices</h3>
            <p className="text-slate-400">Just tell it what you did — professional invoice created in seconds</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔔</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Auto Reminders</h3>
            <p className="text-slate-400">Polite nudges before due date, firm follow-ups after</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Escalation</h3>
            <p className="text-slate-400">Late fees, final notices, and collection handoff if needed</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16 bg-slate-800/30 rounded-3xl max-w-5xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">How It Works</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-500 mb-4">1</div>
            <h3 className="text-lg font-semibold text-white mb-2">Connect</h3>
            <p className="text-slate-400">Link your bank or payment processor</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-500 mb-4">2</div>
            <h3 className="text-lg font-semibold text-white mb-2">Invoice</h3>
            <p className="text-slate-400">"Invoice Acme Corp $2,500 for website" — done</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-500 mb-4">3</div>
            <h3 className="text-lg font-semibold text-white mb-2">Get Paid</h3>
            <p className="text-slate-400">Bot handles reminders until money lands</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Stop Leaving Money on the Table</h2>
        <p className="text-slate-300 mb-8">Join the beta — get paid faster, stress less</p>
        
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="InvoiceBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://agentmafia.one/invoicebot?thanks=1" />
          
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl transition-colors"
          >
            Get Early Access
          </button>
        </form>
        
        <p className="text-sm text-slate-500 mt-4">Starting at $49/month • No credit card required for beta</p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            Built by <Link href="/" className="text-amber-500 hover:underline">Agent Mafia</Link> — AI agents that actually do the work
          </p>
          <div className="flex gap-6">
            <Link href="/#agents" className="text-slate-400 hover:text-white text-sm">All Agents</Link>
            <Link href="/invoicebot/fr" className="text-slate-400 hover:text-white text-sm">Français</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
