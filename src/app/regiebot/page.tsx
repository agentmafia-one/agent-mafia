export default function RegieBotLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/regiebot" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">EN</a>
          <a href="/regiebot/fr" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">FR</a>
        </div>

        <span className="inline-block bg-red-500/15 text-red-400 px-4 py-1.5 rounded-full text-sm mb-6">
          ⚖️ AI Legal Assistant for Swiss Tenants
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Fight back against your <span className="text-red-500">régie</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          RégieBot helps you dispute unfair charges, recover your deposit, and know your rights as a Swiss tenant — without expensive lawyers.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Get early access</h3>
          <p className="text-sm text-zinc-400 mb-5">Join the beta — first 50 tenants get free case review</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="RégieBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@email.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Join Beta
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">💰</span>
            <div>
              <h4 className="font-medium">Get your deposit back</h4>
              <p className="text-sm text-zinc-400">AI analyzes your état des lieux and disputes unfair deductions</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📝</span>
            <div>
              <h4 className="font-medium">Draft legal letters in minutes</h4>
              <p className="text-sm text-zinc-400">Professional mise en demeure and formal complaints — in French or German</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚖️</span>
            <div>
              <h4 className="font-medium">Know your rights under Swiss law</h4>
              <p className="text-sm text-zinc-400">CO Art. 253-274g explained in plain language for your specific situation</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Common issues we handle:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Unfair deposit deductions (frais de remise en état)</li>
            <li>• Illegal rent increases (hausse de loyer abusive)</li>
            <li>• Repairs the régie refuses to make</li>
            <li>• Termination disputes (congé abusif)</li>
            <li>• Excessive charges (décompte de charges)</li>
          </ul>
        </div>
        
        <p className="text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
