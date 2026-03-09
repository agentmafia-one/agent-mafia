import Link from "next/link";

export const metadata = {
  title: "EWZBot — Zurich Electricity Optimizer | Agent Mafia",
  description: "Stop overpaying for electricity in Zurich. EWZBot tracks your usage, finds the best tariff, and manages your smart meter data.",
};

export default function EWZBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/ewzbot/fr" className="text-sm text-slate-400 hover:text-white">FR</Link>
          <Link href="/registry" className="text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
            All Agents
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">⚡</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Stop Overpaying for Electricity in Zurich
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          EWZBot analyzes your EWZ usage, finds the optimal tariff, and tracks your smart meter — so you never pay more than you should.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#signup" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg">
            Optimize My Bill →
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">The Zurich Electricity Trap</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="font-semibold mb-2">Confusing Tariffs</h3>
            <p className="text-slate-400">High/low tariff, solar feed-in, peak hours — EWZ pricing is a maze.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="font-semibold mb-2">Rising Costs</h3>
            <p className="text-slate-400">Electricity prices jumped 27% in 2023. Are you on the right plan?</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">🔌</div>
            <h3 className="font-semibold mb-2">Smart Meter Mystery</h3>
            <p className="text-slate-400">You have a smart meter but no idea what the data means or how to use it.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How EWZBot Cuts Your Bill</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="text-2xl">🔍</div>
            <div>
              <h3 className="font-semibold mb-1">Usage Analysis</h3>
              <p className="text-slate-400">We analyze your consumption patterns — when you use power, how much, peak vs. off-peak.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="font-semibold mb-1">Tariff Optimization</h3>
              <p className="text-slate-400">Find the best EWZ tariff for your usage. Switch high-draw activities to low-tariff hours.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">📱</div>
            <div>
              <h3 className="font-semibold mb-1">Smart Alerts</h3>
              <p className="text-slate-400">Get notified of unusual usage spikes before they hit your bill.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-white/5 rounded-2xl my-8 mx-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Simple Setup</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">1️⃣</div>
            <h3 className="font-semibold mb-2">Connect EWZ</h3>
            <p className="text-slate-400">Link your EWZ account or upload bills</p>
          </div>
          <div>
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="font-semibold mb-2">Get Analysis</h3>
            <p className="text-slate-400">We crunch the numbers and find savings</p>
          </div>
          <div>
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="font-semibold mb-2">Save Money</h3>
            <p className="text-slate-400">Implement recommendations, track results</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Beta</h2>
        <p className="text-slate-400 mb-8">Be first to try EWZBot. Free during beta.</p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="EWZBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-yellow-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
          >
            Get Early Access
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        <p>Part of <Link href="/" className="text-white hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  );
}
