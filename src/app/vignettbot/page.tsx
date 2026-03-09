import Link from "next/link";

export const metadata = {
  title: "VignettBot — Swiss Highway Vignette Manager | Agent Mafia",
  description: "Never miss your vignette renewal again. VignettBot tracks deadlines, manages e-vignettes, and helps avoid the CHF 200 fine.",
};

export default function VignettBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/vignettbot/fr" className="text-sm text-slate-400 hover:text-white">FR</Link>
          <Link href="/registry" className="text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
            All Agents
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🛣️</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Never Pay the CHF 200 Vignette Fine Again
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          VignettBot tracks your highway vignette, sends renewal reminders, and helps you switch to e-vignette — so you're always road-legal.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#signup" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg">
            Track My Vignette →
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">The Annual Vignette Trap</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">😤</div>
            <h3 className="font-semibold mb-2">Easy to Forget</h3>
            <p className="text-slate-400">January 31st deadline. One missed day = CHF 200 fine + CHF 40 for the vignette.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">🚗</div>
            <h3 className="font-semibold mb-2">Multiple Vehicles</h3>
            <p className="text-slate-400">Car, partner's car, company car — tracking them all is a headache.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="font-semibold mb-2">E-Vignette Confusion</h3>
            <p className="text-slate-400">Digital vignettes are new. What's linked? Is it valid? Where to buy?</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">How VignettBot Keeps You Legal</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="text-2xl">⏰</div>
            <div>
              <h3 className="font-semibold mb-1">Smart Reminders</h3>
              <p className="text-slate-400">Get notified in December — before the rush, before you forget.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">📱</div>
            <div>
              <h3 className="font-semibold mb-1">E-Vignette Management</h3>
              <p className="text-slate-400">Track all your digital vignettes in one place. License plates, validity dates, renewal links.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">🚘</div>
            <div>
              <h3 className="font-semibold mb-1">Multi-Vehicle Support</h3>
              <p className="text-slate-400">Family cars, work vehicles, motorcycles — one dashboard for everything.</p>
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
            <h3 className="font-semibold mb-2">Add Your Vehicles</h3>
            <p className="text-slate-400">Enter license plates and current vignette status</p>
          </div>
          <div>
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="font-semibold mb-2">Get Reminders</h3>
            <p className="text-slate-400">We'll notify you before renewal deadlines</p>
          </div>
          <div>
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="font-semibold mb-2">Stay Legal</h3>
            <p className="text-slate-400">Never worry about expired vignettes again</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Join the Beta</h2>
        <p className="text-slate-400 mb-8">Be first to try VignettBot. Free during beta.</p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="VignettBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-green-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
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
