import Link from 'next/link'

export const metadata = {
  title: 'ResearchBot — Deep Research on Autopilot | Agent Mafia',
  description: 'AI research agent that digs deep so you don\'t have to. Get comprehensive reports, competitor analysis, and market insights in minutes.',
}

export default function ResearchBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/researchbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm mb-6">
          🔬 AI Research Agent
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Hours of Research.<br />
          <span className="text-purple-400">Done in Minutes.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Stop drowning in tabs. ResearchBot digs through sources, cross-references data, 
          and delivers comprehensive reports while you focus on decisions.
        </p>
        <a href="#signup" className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Join the Beta →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Research is a Time Black Hole</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🕳️</div>
            <h3 className="text-xl font-semibold mb-2">Tab Overload</h3>
            <p className="text-gray-400">30 tabs open, no idea where you found that one stat you need. Sound familiar?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Time Vampire</h3>
            <p className="text-gray-400">What started as "quick research" became a 4-hour rabbit hole. Again.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🤔</div>
            <h3 className="text-xl font-semibold mb-2">Missing Context</h3>
            <p className="text-gray-400">You found data, but is it reliable? Current? You don't have time to verify everything.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Let ResearchBot Do the Heavy Lifting</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Deep Dive Reports</h3>
            <p className="text-gray-400">Comprehensive research with sources, summaries, and key insights organized for you.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Competitor Intel</h3>
            <p className="text-gray-400">Track competitors, analyze their strategies, and stay ahead with automated monitoring.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Market Analysis</h3>
            <p className="text-gray-400">Industry trends, market size, growth projections — all verified and cited.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tell ResearchBot What You Need</h3>
              <p className="text-gray-400">"Research the European EV charging market" or "Analyze competitor X's pricing strategy"</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AI Scours Multiple Sources</h3>
              <p className="text-gray-400">Academic papers, news, reports, company filings — all cross-referenced for accuracy.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Get a Polished Report</h3>
              <p className="text-gray-400">Executive summary, detailed findings, charts, and source links — ready to use.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Built For</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="text-3xl mb-3">💼</div>
            <p className="font-medium">Analysts</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="text-3xl mb-3">🚀</div>
            <p className="font-medium">Founders</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="text-3xl mb-3">📈</div>
            <p className="font-medium">Investors</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="text-3xl mb-3">🎯</div>
            <p className="font-medium">Strategists</p>
          </div>
        </div>
      </section>

      {/* Pricing Hint */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">Starting at</p>
        <p className="text-4xl font-bold mb-4">$99<span className="text-xl text-gray-400">/month</span></p>
        <p className="text-gray-400">Unlimited research requests • Priority support • Custom templates</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-purple-900 to-gray-900 p-8 rounded-2xl border border-purple-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Get Early Access</h2>
          <p className="text-gray-300 mb-6">Join the beta and get 50% off when we launch.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="ResearchBot Beta Signup" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition-colors">
              Request Access →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">No spam. Just launch updates.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Built by <Link href="/" className="text-purple-400 hover:text-purple-300">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </div>
  )
}
