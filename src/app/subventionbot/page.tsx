import Link from "next/link";

export const metadata = {
  title: "SubventionBot — Find Hidden Energy Subsidies in Your Canton | Agent Mafia",
  description: "Stop missing free money. SubventionBot finds solar, heat pump, and insulation subsidies specific to your Swiss canton. Get what you're owed.",
};

export default function SubventionBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-green-950 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-green-400">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/subventionbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <Link href="/#agents" className="text-sm text-gray-400 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
          💰 Energy Subsidies Agent
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          You're Missing
          <span className="text-green-400"> Free Money</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Every Swiss canton has different energy subsidies. Heat pumps, solar panels, insulation — 
          thousands of francs left on the table because nobody told you.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#signup" className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-bold text-lg transition">
            Find My Subsidies →
          </a>
        </div>
      </section>

      {/* Pain Points */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">The Swiss Subsidy Nightmare</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="text-3xl mb-4">🏔️</div>
            <h3 className="font-bold mb-2">26 Different Systems</h3>
            <p className="text-gray-400">Each canton has its own programs, deadlines, and rules. What works in Zurich doesn't apply in Geneva.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-bold mb-2">Hidden Programs</h3>
            <p className="text-gray-400">Municipal subsidies, federal incentives, utility rebates — nobody gives you the complete picture.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="font-bold mb-2">Deadlines Pass</h3>
            <p className="text-gray-400">Programs end, budgets run out, you find out too late. That CHF 5,000 rebate? Gone.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">SubventionBot Finds Your Money</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl">🔍</div>
              <div>
                <h3 className="font-bold mb-1">Canton-Specific Search</h3>
                <p className="text-gray-400">Enter your postal code, we scan cantonal, municipal, and federal programs.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">☀️</div>
              <div>
                <h3 className="font-bold mb-1">All Energy Types</h3>
                <p className="text-gray-400">Solar, heat pumps, pellet heating, insulation, windows, EV charging — every rebate found.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📝</div>
              <div>
                <h3 className="font-bold mb-1">Application Help</h3>
                <p className="text-gray-400">Pre-filled forms, required documents checklist, submission guidance.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🔔</div>
              <div>
                <h3 className="font-bold mb-1">New Program Alerts</h3>
                <p className="text-gray-400">Get notified when new subsidies launch or budgets are refreshed.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="font-bold mb-4 text-green-400">Example: Canton Vaud</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✅ Heat pump: up to CHF 10,000</li>
              <li>✅ Solar panels: CHF 400/kWp</li>
              <li>✅ Insulation: CHF 40/m²</li>
              <li>✅ EV charger: CHF 500</li>
              <li>✅ Total potential: CHF 15,000+</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">*Amounts vary by project and change annually</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Don't Leave Money on the Table</h2>
        <p className="text-gray-400 mb-8">Join the waitlist. We'll find every subsidy you qualify for.</p>
        <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="hidden" name="_subject" value="SubventionBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-green-400 outline-none"
          />
          <button type="submit" className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-bold transition">
            Get Early Access
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500">
          <p>Built by <Link href="/" className="text-green-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
        </div>
      </footer>
    </main>
  );
}
