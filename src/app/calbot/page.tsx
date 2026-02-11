export default function CalBotLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/calbot" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">EN</a>
          <a href="/calbot/fr" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">FR</a>
        </div>

        <span className="inline-block bg-indigo-500/15 text-indigo-400 px-4 py-1.5 rounded-full text-sm mb-6">
          📅 AI Calendar Manager
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Stop drowning in <span className="text-indigo-500">calendar chaos</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          CalBot manages your calendar, preps you for meetings, and protects your focus time. Never double-book or walk into a meeting unprepared again.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Get early access</h3>
          <p className="text-sm text-zinc-400 mb-5">Join the beta — first 50 users get free premium for life</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="CalBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@email.com" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Join Beta
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">🛡️</span>
            <div>
              <h4 className="font-medium">Protect your focus time</h4>
              <p className="text-sm text-zinc-400">Auto-block deep work hours, decline low-priority meetings, suggest better times</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📋</span>
            <div>
              <h4 className="font-medium">Meeting prep, automated</h4>
              <p className="text-sm text-zinc-400">Get briefings before each meeting — attendee context, past notes, agenda items</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔄</span>
            <div>
              <h4 className="font-medium">Smart rescheduling</h4>
              <p className="text-sm text-zinc-400">Conflicts detected? CalBot proposes alternatives and handles the back-and-forth</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">What CalBot handles:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• 📅 Calendar optimization & conflict resolution</li>
            <li>• 🛡️ Focus time protection & meeting limits</li>
            <li>• 📋 Pre-meeting briefings & agendas</li>
            <li>• ✉️ Scheduling emails & responses</li>
            <li>• 🔔 Smart reminders with context</li>
            <li>• 📊 Time audit & meeting analytics</li>
          </ul>
        </div>
        
        <p className="text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
