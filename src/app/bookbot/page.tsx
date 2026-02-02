export default function BookBotLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        <span className="inline-block bg-indigo-500/15 text-indigo-400 px-4 py-1.5 rounded-full text-sm mb-6">
          🤖 AI Agent for Shopify Sellers
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Stop drowning in <span className="text-indigo-500">Shopify bookkeeping</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          BookBot syncs your Shopify sales to QuickBooks automatically and sends you a weekly P&L — so you always know your numbers.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Get early access</h3>
          <p className="text-sm text-zinc-400 mb-5">Join the beta — first 10 stores get lifetime 50% off</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="BookBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@yourstore.com" 
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
            <span className="text-xl">⚡</span>
            <div>
              <h4 className="font-medium">Auto-sync to QuickBooks</h4>
              <p className="text-sm text-zinc-400">Sales, refunds, fees — all categorized correctly, every day</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📊</span>
            <div>
              <h4 className="font-medium">Weekly P&L in your inbox</h4>
              <p className="text-sm text-zinc-400">Know your profit margin without opening a spreadsheet</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔒</span>
            <div>
              <h4 className="font-medium">Tax-ready books</h4>
              <p className="text-sm text-zinc-400">Stop scrambling at year-end — your books stay clean</p>
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
