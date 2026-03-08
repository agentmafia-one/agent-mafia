import Link from "next/link";

export const metadata = {
  title: "ImportBot — Swiss Customs Duty Calculator | Agent Mafia",
  description: "Stop getting surprised by customs fees. ImportBot calculates duties, optimizes VAT, and handles declarations for your online purchases.",
};

export default function ImportBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/importbot/fr" className="text-sm text-slate-400 hover:text-white">FR</Link>
          <Link href="/registry" className="text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
            All Agents
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">📦</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Stop Getting Surprised by Swiss Customs Fees
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          ImportBot calculates duties before you buy, optimizes VAT, and handles customs declarations — so you always know the real cost.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg">
            Calculate My Duties →
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">The Swiss Online Shopping Trap</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">😱</div>
            <h3 className="font-semibold mb-2">Surprise Fees</h3>
            <p className="text-slate-400">Order €100, pay CHF 40+ in customs. The CHF 65 threshold catches everyone.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">🧮</div>
            <h3 className="font-semibold mb-2">Complex Rules</h3>
            <p className="text-slate-400">Different rates for different products. VAT, duties, handling fees — it all adds up.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-semibold mb-2">Paperwork Hell</h3>
            <p className="text-slate-400">Self-declaring saves money but requires forms, proof, and patience.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How ImportBot Saves You Money</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="text-2xl">🔍</div>
            <div>
              <h3 className="font-semibold mb-1">Pre-Purchase Calculator</h3>
              <p className="text-slate-400">Know the real landed cost before you click buy. Duties, VAT, handling — all included.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="font-semibold mb-1">Threshold Optimization</h3>
              <p className="text-slate-400">Split orders, time purchases, choose the right shipping — stay under limits legally.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">📝</div>
            <div>
              <h3 className="font-semibold mb-1">Declaration Assistance</h3>
              <p className="text-slate-400">Self-clearing guide with pre-filled forms. Skip the CHF 18 Post handling fee.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="max-w-xl mx-auto px-6 py-20">
        <div className="bg-white/5 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Get Early Access</h2>
          <p className="text-slate-400 mb-6">Join the beta and never overpay on imports again.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="ImportBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="your@email.com" 
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
            />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
              Join Beta
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>Built by <Link href="/" className="text-slate-400 hover:text-white">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  );
}
