import Link from 'next/link'

export const metadata = {
  title: 'WohnungBot — AI Apartment Hunting Agent for Switzerland',
  description: 'Stop sending 100+ applications manually. WohnungBot auto-applies to Swiss apartments, manages your dossier, and tracks responses.',
}

export default function WohnungBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/wohnungbot/fr" className="text-slate-400 hover:text-white text-sm">🇫🇷 FR</Link>
          <Link href="/#agents" className="text-slate-400 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🏢</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          100+ Applications.<br/>
          <span className="text-emerald-400">Zero Responses?</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          The Swiss apartment hunt is broken. WohnungBot auto-applies to listings, 
          manages your dossier, and tracks every response — so you can finally stop refreshing Homegate.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">🤖 Auto-Apply</span>
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">📁 Dossier Management</span>
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">📊 Response Tracking</span>
        </div>
      </section>

      {/* Problem */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">The Swiss Housing Crisis Is Real</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">📨</div>
              <h3 className="text-white font-semibold mb-2">Application Fatigue</h3>
              <p className="text-slate-400">Copy-paste the same cover letter 100 times. Upload your dossier. Again. And again.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">👻</div>
              <h3 className="text-white font-semibold mb-2">Ghosted by Régies</h3>
              <p className="text-slate-400">No response. Not even a rejection. Just... silence. For weeks.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Listings Gone in Hours</h3>
              <p className="text-slate-400">By the time you see it, apply, and follow up — it's already rented.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-white font-semibold mb-2">Dossier Chaos</h3>
              <p className="text-slate-400">Betreibungsauszug, salary slips, ID copy, references... different format for every régie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">How WohnungBot Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📁</span>
              </div>
              <h3 className="text-white font-semibold mb-2">1. Upload Once</h3>
              <p className="text-slate-400 text-sm">Add your dossier once — ID, Betreibungsauszug, salary slips, references. We format it for every platform.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-white font-semibold mb-2">2. Set Criteria</h3>
              <p className="text-slate-400 text-sm">Location, price range, rooms, move-in date. WohnungBot monitors Homegate, Immoscout, and more.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-white font-semibold mb-2">3. Auto-Apply</h3>
              <p className="text-slate-400 text-sm">New listing? Applied within minutes. Personalized cover letter. Perfect dossier. Response tracked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
              <p className="text-slate-400">Average applications before finding an apartment in Zurich</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-emerald-400 mb-2">0.5%</div>
              <p className="text-slate-400">Vacancy rate in major Swiss cities</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-emerald-400 mb-2">2 hrs</div>
              <p className="text-slate-400">Average time before a good listing is gone</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-8 rounded-2xl border border-emerald-700/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join the Beta</h2>
          <p className="text-slate-300 mb-6">Be first to automate your apartment hunt. Early users get priority access + lifetime discount.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="WohnungBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email"
              placeholder="your@email.com" 
              required
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
            >
              Get Early Access
            </button>
          </form>
          <p className="text-slate-500 text-xs mt-4">No spam. We'll notify you when WohnungBot launches.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">Built by <Link href="/" className="text-emerald-400 hover:text-emerald-300">Agent Mafia</Link> — AI agents that actually do the work.</p>
          <div className="flex gap-6">
            <Link href="/#agents" className="text-slate-400 hover:text-white text-sm">All Agents</Link>
            <Link href="/wohnungbot/fr" className="text-slate-400 hover:text-white text-sm">Français</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
