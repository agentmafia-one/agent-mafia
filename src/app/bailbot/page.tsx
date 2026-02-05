export default function BailBotLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/bailbot" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">EN</a>
          <a href="/bailbot/fr" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">FR</a>
        </div>

        <span className="inline-block bg-teal-500/15 text-teal-400 px-4 py-1.5 rounded-full text-sm mb-6">
          📜 AI Lease Protection
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Fight unfair <span className="text-teal-500">rent increases</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          BailBot helps Swiss tenants challenge illegal rent hikes, dispute termination notices, and know their rights under tenancy law.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Get early access</h3>
          <p className="text-sm text-zinc-400 mb-5">Join the beta — first 50 users get free lease analysis</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="BailBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@email.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Join Beta
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">📈</span>
            <div>
              <h4 className="font-medium">Challenge illegal rent increases</h4>
              <p className="text-sm text-zinc-400">AI calculates if your increase is legal based on reference rates and checks all formal requirements</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📋</span>
            <div>
              <h4 className="font-medium">Dispute termination notices</h4>
              <p className="text-sm text-zinc-400">Know if your notice is valid — get extension requests and contest forms drafted automatically</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚖️</span>
            <div>
              <h4 className="font-medium">Swiss tenancy law explained</h4>
              <p className="text-sm text-zinc-400">CO 253-274, reference interest rates, cantonal rules — in plain language you can understand</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Common issues we help with:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Rent increase notifications</li>
            <li>• Lease termination disputes</li>
            <li>• Deposit return problems</li>
            <li>• Repair/maintenance requests</li>
            <li>• Subletting permissions</li>
            <li>• Lease transfer (cession de bail)</li>
            <li>• Renovation evictions</li>
          </ul>
        </div>
        
        <p className="text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
