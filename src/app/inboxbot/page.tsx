import Link from "next/link"

export const metadata = {
  title: "InboxBot — AI Email Triage Agent | Agent Mafia",
  description: "AI agent that triages your inbox, drafts replies, and surfaces only what matters. Reclaim your mornings.",
}

export default function InboxBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Nav */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/inboxbot/fr" className="text-white/70 hover:text-white text-sm">🇫🇷 FR</Link>
          <Link href="/#agents" className="text-white/70 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">📧</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Your Inbox Is<br /><span className="text-blue-400">Killing Your Day</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            AI agent that triages email 24/7, drafts responses, and surfaces only what truly needs your attention. Get your mornings back.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">😵</div>
            <h3 className="text-lg font-semibold text-white mb-2">Inbox Overwhelm</h3>
            <p className="text-white/60">You open email to check one thing. Two hours later, you haven't started real work.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">🔴</div>
            <h3 className="text-lg font-semibold text-white mb-2">Missed Important Emails</h3>
            <p className="text-white/60">That client message from 3 days ago? Buried under 200 newsletters and CC-all threads.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Reply Anxiety</h3>
            <p className="text-white/60">Drafting responses takes forever. The longer you wait, the worse it gets.</p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 border border-blue-500/30 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">How InboxBot Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-white mb-2">Smart Triage</h3>
              <p className="text-white/60 text-sm">InboxBot categorizes incoming email: urgent, actionable, FYI, or archive. You see only what matters.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-white mb-2">Draft Replies</h3>
              <p className="text-white/60 text-sm">AI drafts responses in your voice. Review and send with one click — or let it handle routine replies.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-white mb-2">Daily Briefing</h3>
              <p className="text-white/60 text-sm">Start your day with a 2-minute summary: what needs action, what can wait, what's already handled.</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">What InboxBot Does For You</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "🎯 Surfaces urgent emails instantly — even at 3 AM",
              "✍️ Drafts replies in your writing style",
              "📊 Daily email briefing in Telegram/Slack",
              "🗑️ Auto-archives newsletters & CC-all noise",
              "📅 Extracts action items and deadlines",
              "🔗 Works with Gmail, Outlook, IMAP",
              "🔒 Privacy-first: your emails stay yours",
              "⚡ Handles 500+ emails/day effortlessly",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Reclaim Your Inbox</h2>
          <p className="text-white/70 mb-6">Join the beta. First 50 signups get 30 days free.</p>
          
          <form 
            action="https://formsubmit.co/dev@agentmafia.one" 
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="_subject" value="InboxBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-colors"
            >
              Join Beta →
            </button>
          </form>
          
          <p className="text-white/50 text-sm mt-4">No spam. Unsubscribe anytime.</p>
        </div>

        {/* Pricing hint */}
        <div className="text-center mt-12">
          <p className="text-white/50">Starting at <span className="text-blue-400 font-semibold">$49/month</span> • Unlimited emails</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">Part of <Link href="/" className="text-white hover:text-blue-400">Agent Mafia</Link> — AI agents that work for you</p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/#agents" className="hover:text-white">All Agents</Link>
            <a href="mailto:dev@agentmafia.one" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
