export default function TaxBotLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/taxbot" className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">EN</a>
          <a href="/taxbot/fr" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">FR</a>
        </div>

        <span className="inline-block bg-emerald-500/15 text-emerald-400 px-4 py-1.5 rounded-full text-sm mb-6">
          🧾 AI Tax Optimization
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Stop overpaying <span className="text-emerald-500">Swiss taxes</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          TaxBot tracks your deductible expenses, finds missed deductions, and optimizes your Swiss tax return automatically.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Get early access</h3>
          <p className="text-sm text-zinc-400 mb-5">Join the beta — first 50 users get free tax analysis</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="TaxBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@email.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Join Beta
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">📸</span>
            <div>
              <h4 className="font-medium">Snap receipts, track deductions</h4>
              <p className="text-sm text-zinc-400">Photo a receipt — AI extracts amount, category, and adds it to your deduction tracker automatically</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔍</span>
            <div>
              <h4 className="font-medium">Find missed deductions</h4>
              <p className="text-sm text-zinc-400">AI scans your expenses and suggests deductions you're probably missing — commute costs, home office, 3a pillar</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📊</span>
            <div>
              <h4 className="font-medium">Cantonal optimization</h4>
              <p className="text-sm text-zinc-400">Know which deductions your canton allows — rules vary widely between GE, VD, ZH and others</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Deductions we help you find:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• 🚗 Commute costs (car, public transport)</li>
            <li>• 🏠 Home office deductions</li>
            <li>• 🏥 Medical expenses above threshold</li>
            <li>• 🎓 Education & professional training</li>
            <li>• 👶 Childcare costs</li>
            <li>• 🏦 3a pillar contributions</li>
            <li>• 💝 Donations & gifts</li>
            <li>• 🔧 Property maintenance (owners)</li>
          </ul>
        </div>
        
        <p className="text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
