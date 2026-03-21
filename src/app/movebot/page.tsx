import Link from 'next/link'

export const metadata = {
  title: 'MoveBot — Your Swiss Relocation Assistant | Agent Mafia',
  description: 'AI agent that handles the chaos of moving to Switzerland. Admin tasks, registrations, checklists — done.',
}

export default function MoveBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/movebot/fr" className="text-slate-400 hover:text-white">🇫🇷 FR</Link>
          <Link href="/agents" className="text-slate-300 hover:text-white">All Agents</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">📦</div>
        <h1 className="text-5xl font-bold text-white mb-6">
          Moving to Switzerland?<br/>
          <span className="text-amber-400">Stop drowning in admin.</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          MoveBot handles the bureaucratic nightmare of relocating to Switzerland. 
          Registration, permits, utilities, banking — all tracked in one place.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-lg font-semibold text-white mb-2">Smart Checklist</h3>
            <p className="text-slate-400">Personalized to-do list based on your canton, nationality, and family situation.</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Deadline Tracking</h3>
            <p className="text-slate-400">Never miss registration deadlines. 14-day commune rule? We&apos;ve got you.</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="text-lg font-semibold text-white mb-2">Document Prep</h3>
            <p className="text-slate-400">Know exactly what documents you need before each appointment.</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 max-w-md mx-auto border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Get Early Access</h2>
          <p className="text-slate-400 mb-6">Be first to try MoveBot when it launches.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="MoveBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="your@email.com" 
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
            <button 
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors"
            >
              Join Waitlist →
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center py-8 text-slate-500">
        <p>Built by <Link href="/" className="text-amber-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  )
}
