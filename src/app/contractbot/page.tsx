import Link from "next/link"

export const metadata = {
  title: "ContractBot — AI Contract Review Agent | Agent Mafia",
  description: "AI agent that reviews contracts, spots red flags, and protects your business. Never sign a bad deal again.",
}

export default function ContractBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Nav */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/contractbot/fr" className="text-white/70 hover:text-white text-sm">🇫🇷 FR</Link>
          <Link href="/#agents" className="text-white/70 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">📜</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Stop Signing<br /><span className="text-purple-400">Bad Contracts</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            AI agent that reviews contracts in seconds, spots hidden risks, and explains legal jargon in plain English.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Hidden Clauses</h3>
            <p className="text-white/60">Auto-renewal traps, non-compete clauses, and liability bombs buried in 50 pages of legal text.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-lg font-semibold text-white mb-2">Expensive Lawyers</h3>
            <p className="text-white/60">$500/hour to have someone review a standard contract? There has to be a better way.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Time Pressure</h3>
            <p className="text-white/60">"Sign by Friday" — and you're supposed to read 30 pages of legalese by then?</p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">How ContractBot Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-white mb-2">Upload Contract</h3>
              <p className="text-white/60 text-sm">Drop your PDF or paste the text. NDAs, employment, vendor, SaaS — any contract type.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-white mb-2">AI Analysis</h3>
              <p className="text-white/60 text-sm">ContractBot scans for red flags, unfair terms, missing clauses, and potential risks.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-white mb-2">Plain English Report</h3>
              <p className="text-white/60 text-sm">Get a summary with risk ratings, key terms explained, and suggested changes.</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">What ContractBot Catches</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "🚨 Unlimited liability clauses",
              "🔄 Sneaky auto-renewal terms",
              "🚫 Overly broad non-compete restrictions",
              "💰 Hidden fee triggers",
              "⚖️ One-sided termination rights",
              "🔒 IP assignment overreach",
              "📅 Unreasonable deadlines & penalties",
              "🌍 Unfavorable jurisdiction clauses"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80">
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get Early Access</h2>
          <p className="text-white/60 mb-6">Join the beta. Review your first contract free.</p>
          <form 
            action="https://formsubmit.co/dev@agentmafia.one" 
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="_subject" value="ContractBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email"
              placeholder="your@email.com" 
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition"
            >
              Join Beta
            </button>
          </form>
          <p className="text-white/40 text-sm mt-4">Starting at $29/mo after beta</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-white/40">
        <p>Part of <Link href="/" className="text-purple-400 hover:text-purple-300">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </div>
  )
}
