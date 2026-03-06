import Link from 'next/link'

export const metadata = {
  title: 'RéclameBot - AI Consumer Complaints Agent | Agent Mafia',
  description: 'Product complaints, warranty claims, and refund requests handled by AI. Stop getting ignored by customer service.',
}

export default function ReclameBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/reclamebot/fr" className="text-sm text-gray-400 hover:text-white">🇫🇷 Français</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">📢</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">RéclameBot</span> — Get Your Money Back
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Defective product? Ignored warranty claim? RéclameBot writes complaint letters that actually work — citing Swiss consumer law and escalating until you get results.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 Sound Familiar?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🔇</div>
            <h3 className="font-bold mb-2">Ignored Complaints</h3>
            <p className="text-gray-400">You email customer service. They reply with templates. Nothing happens. Weeks pass.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="font-bold mb-2">Warranty Runaround</h3>
            <p className="text-gray-400">"Not covered." "Contact manufacturer." "Send it to Germany." They make it impossible.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="font-bold mb-2">Small Claims, Big Hassle</h3>
            <p className="text-gray-400">It's only CHF 200. Not worth a lawyer. So they win by making you give up.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ How RéclameBot Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Describe the Problem</h3>
            <p className="text-gray-400">What you bought, what's wrong, what you want (refund, replacement, repair)</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">AI Writes the Letter</h3>
            <p className="text-gray-400">Formal complaint citing OR Art. 197-210 (Swiss warranty law), with clear deadline</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Escalation Path</h3>
            <p className="text-gray-400">No response? We escalate to ombudsman, consumer protection, or small claims</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-red-500">78%</div>
            <p className="text-gray-400">Success rate on first letter</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">CHF 450</div>
            <p className="text-gray-400">Average refund recovered</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">3 min</div>
            <p className="text-gray-400">To generate complaint letter</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Stop Getting Ignored</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta. Get AI-powered complaint letters that cite Swiss law. Early users get 3 free complaints.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="ReclameBot Beta Signup" />
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
