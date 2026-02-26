import Link from 'next/link'

export const metadata = {
  title: 'MieterBot — AI Tenant Rights Agent for Switzerland',
  description: 'Fight unfair rent increases, get your deposit back, and know your rights as a Swiss tenant. AI-powered tenant defense.',
}

export default function MieterBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/mieterbot/fr" className="text-slate-400 hover:text-white text-sm">🇫🇷 FR</Link>
          <Link href="/#agents" className="text-slate-400 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🏠</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Landlord Has Lawyers.<br/>
          <span className="text-amber-400">Now You Have MieterBot.</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Fight unfair rent increases, get your deposit back, and know your tenant rights under Swiss law. 
          AI-powered defense that actually works.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">🛡️ Swiss Tenancy Law</span>
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">📝 Dispute Letters</span>
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">💰 Deposit Recovery</span>
        </div>
      </section>

      {/* Problem */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Sound Familiar?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-white font-semibold mb-2">Rent Increase Notice</h3>
              <p className="text-slate-400">Got a Mietzinserhöhung and don't know if it's legal? Most tenants just accept it.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">💸</div>
              <h3 className="text-white font-semibold mb-2">Missing Deposit</h3>
              <p className="text-slate-400">Moved out 6 months ago, still waiting for your Kaution. Régie ignores your emails.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-white font-semibold mb-2">Repair Requests Ignored</h3>
              <p className="text-slate-400">Broken heating, mold on walls — landlord says "it's fine." You know it's not.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-white font-semibold mb-2">Unfair Deductions</h3>
              <p className="text-slate-400">État des lieux claims CHF 2,000 for "cleaning" — after you spent 3 days scrubbing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">How MieterBot Fights For You</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Analyze Your Situation</h3>
              <p className="text-slate-400 text-sm">Upload your lease, rent increase, or dispute. MieterBot identifies your rights under Swiss tenancy law.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✍️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Generate Legal Letters</h3>
              <p className="text-slate-400 text-sm">Get professional dispute letters citing CO Art. 269-270, cantonal references, and proper legal language.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Track & Escalate</h3>
              <p className="text-slate-400 text-sm">MieterBot tracks deadlines, sends follow-ups, and prepares Schlichtungsbehörde submissions if needed.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">What MieterBot Handles</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Rent Increase Disputes</h3>
                <p className="text-slate-400 text-sm">Challenge illegal increases (initial rent, reference rate changes, renovation costs)</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Deposit Recovery</h3>
                <p className="text-slate-400 text-sm">Demand your Kaution back within legal deadlines, dispute unfair deductions</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Repair Requests</h3>
                <p className="text-slate-400 text-sm">Document defects, send formal Mängelrüge, know when rent reduction applies</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Lease Termination</h3>
                <p className="text-slate-400 text-sm">Challenge invalid Kündigungen, understand notice periods, extension requests</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Accessory Costs</h3>
                <p className="text-slate-400 text-sm">Verify Nebenkosten calculations, challenge unjustified charges</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-8 border border-amber-500/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Join the Beta</h2>
          <p className="text-slate-300 mb-6">Get early access to MieterBot. First 50 tenants get priority support.</p>
          <form 
            action="https://formsubmit.co/dev@agentmafia.one" 
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input type="hidden" name="_subject" value="MieterBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email"
              placeholder="your@email.com" 
              required
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors"
            >
              Get Early Access
            </button>
          </form>
          <p className="text-slate-500 text-sm mt-4">No spam. Just tenant defense updates.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            Part of <Link href="/" className="text-amber-400 hover:text-amber-300">Agent Mafia</Link> — AI agents that actually do the work
          </p>
          <div className="flex gap-6">
            <Link href="/#agents" className="text-slate-400 hover:text-white text-sm">All Agents</Link>
            <Link href="/mieterbot/fr" className="text-slate-400 hover:text-white text-sm">🇫🇷 Version française</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
