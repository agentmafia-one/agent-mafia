import Link from "next/link"

export const metadata = {
  title: "LeadBot — AI Lead Qualification Agent | Agent Mafia",
  description: "AI agent that qualifies leads 24/7, scores prospects, and fills your CRM with sales-ready opportunities.",
}

export default function LeadBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Nav */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/leadbot/fr" className="text-white/70 hover:text-white text-sm">🇫🇷 FR</Link>
          <Link href="/#agents" className="text-white/70 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Stop Chasing<br /><span className="text-emerald-400">Dead Leads</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            AI agent that qualifies leads 24/7, scores prospects automatically, and delivers only sales-ready opportunities to your team.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">😤</div>
            <h3 className="text-lg font-semibold text-white mb-2">Wasted Sales Time</h3>
            <p className="text-white/60">Your closers spend 60% of their time on leads that were never going to buy.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">🌙</div>
            <h3 className="text-lg font-semibold text-white mb-2">Leads Go Cold</h3>
            <p className="text-white/60">Hot prospects submit forms at 2 AM. By morning? They've already talked to your competitor.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">No Lead Scoring</h3>
            <p className="text-white/60">Every lead looks the same. No way to know who's ready to buy vs. who's just browsing.</p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl p-8 border border-emerald-500/30 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">How LeadBot Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-white mb-2">Instant Response</h3>
              <p className="text-white/60 text-sm">LeadBot engages every inbound lead within seconds, 24/7. Never miss a hot prospect again.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-white mb-2">Smart Qualification</h3>
              <p className="text-white/60 text-sm">AI asks the right questions: budget, timeline, decision-maker status. Scores leads automatically.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-white mb-2">CRM Handoff</h3>
              <p className="text-white/60 text-sm">Qualified leads go straight to your CRM with full context. Your team closes, not qualifies.</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">What LeadBot Does For You</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "⚡ Responds to leads in under 60 seconds",
              "🎯 BANT qualification (Budget, Authority, Need, Timeline)",
              "📈 Lead scoring based on your criteria",
              "🔗 Integrates with HubSpot, Salesforce, Pipedrive",
              "💬 Conversational AI — not robotic forms",
              "📅 Books meetings directly in your calendar",
              "🌐 Works via email, chat, or SMS",
              "📊 Weekly reports on lead quality trends",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Get LeadBot for Your Sales Team</h2>
          <p className="text-white/70 mb-6">Join the beta. First 50 signups get 30 days free.</p>
          
          <form 
            action="https://formsubmit.co/dev@agentmafia.one" 
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="_subject" value="LeadBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              Join Beta →
            </button>
          </form>
          
          <p className="text-white/50 text-sm mt-4">No spam. Unsubscribe anytime.</p>
        </div>

        {/* Pricing hint */}
        <div className="text-center mt-12">
          <p className="text-white/50">Starting at <span className="text-emerald-400 font-semibold">$99/month</span> • Unlimited leads</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">Part of <Link href="/" className="text-white hover:text-emerald-400">Agent Mafia</Link> — AI agents that work for you</p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/#agents" className="hover:text-white">All Agents</Link>
            <a href="mailto:dev@agentmafia.one" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
