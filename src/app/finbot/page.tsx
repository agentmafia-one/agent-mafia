export default function FinBotLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <span className="inline-block bg-blue-500/15 text-blue-400 px-4 py-1.5 rounded-full text-sm mb-6">
          📊 AI Financial Analyst
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Crypto reconciliation that <span className="text-blue-500">never sleeps</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          Michael tracks every transaction, reconciles every wallet, and produces audit-ready reports. Down to the last satoshi.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Get Michael for your fund</h3>
          <p className="text-sm text-zinc-400 mb-5">14-day free trial — real reconciliation from day one</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="FinBot (Michael) Inquiry" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@company.com" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Get Started
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">⛓️</span>
            <div>
              <h4 className="font-medium">Multi-chain reconciliation</h4>
              <p className="text-sm text-zinc-400">Ethereum, Arbitrum, Base, Polygon — any EVM chain. Cross-chain tracking included.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔍</span>
            <div>
              <h4 className="font-medium">Discrepancy detection</h4>
              <p className="text-sm text-zinc-400">Flags any mismatch &gt; $100 immediately. Traces the source. Documents everything.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🏦</span>
            <div>
              <h4 className="font-medium">DeFi accounting</h4>
              <p className="text-sm text-zinc-400">LP positions, staking rewards, yield farming, airdrops — all properly accounted.</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📋</span>
            <div>
              <h4 className="font-medium">Audit-ready reports</h4>
              <p className="text-sm text-zinc-400">Weekly summaries, cost basis tracking, regulatory compliance. Auditors love Michael.</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">What Michael does daily:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• ✅ Reconcile all wallet transactions</li>
            <li>• 🚨 Flag discrepancies immediately</li>
            <li>• 📈 Track P&L and unrealized gains</li>
            <li>• 💰 Calculate cost basis (FIFO/LIFO/Specific ID)</li>
            <li>• 📊 Monitor pending transactions</li>
            <li>• 📝 Document everything for audit trail</li>
          </ul>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-2 text-blue-400">💬 Michael's Philosophy</h4>
          <p className="text-sm text-zinc-300 italic mb-2">"The blockchain doesn't lie, but people misread it."</p>
          <p className="text-sm text-zinc-300 italic mb-2">"Off by one satoshi? That's a red flag, not a rounding error."</p>
          <p className="text-sm text-zinc-300 italic">"I'll sleep when the books close."</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-10">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-400">99.99%</div>
            <div className="text-xs text-zinc-500">Accuracy</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-400">&lt;1hr</div>
            <div className="text-xs text-zinc-500">Response time</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-4">
            <div className="text-2xl font-bold text-blue-400">24/7</div>
            <div className="text-xs text-zinc-500">Monitoring</div>
          </div>
        </div>

        <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-4 text-zinc-300">Pricing</h4>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium">Starter</span>
                <span className="text-xs text-zinc-500 ml-2">Daily reconciliation + weekly reports</span>
              </div>
              <span className="text-blue-400 font-semibold">$499/mo</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium">Professional</span>
                <span className="text-xs text-zinc-500 ml-2">+ DeFi tracking + forensics</span>
              </div>
              <span className="text-blue-400 font-semibold">$999/mo</span>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <span className="font-medium">Enterprise</span>
                <span className="text-xs text-zinc-500 ml-2">Multi-entity + dedicated + SLA</span>
              </div>
              <span className="text-blue-400 font-semibold">Custom</span>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
