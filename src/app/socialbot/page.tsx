import Link from 'next/link'

export const metadata = {
  title: 'SocialBot — AI Agent for Social Media Management | Agent Mafia',
  description: 'Automate content scheduling, engagement tracking, and audience growth. Your AI social media manager.',
}

export default function SocialBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/socialbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <div className="text-6xl mb-6">📱</div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          SocialBot
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Stop juggling platforms. AI that schedules posts, tracks engagement, and grows your audience while you focus on strategy.
        </p>
        <p className="text-lg text-pink-400 mb-12">
          Your 24/7 social media manager
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-lg font-semibold mb-2">Smart Scheduling</h3>
            <p className="text-gray-400">AI picks optimal posting times. Queue weeks of content in minutes.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold mb-2">Engagement Tracking</h3>
            <p className="text-gray-400">Real-time analytics across all platforms. Know what's working.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Audience Growth</h3>
            <p className="text-gray-400">AI suggests content that resonates. Grow followers on autopilot.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Join the Beta</h2>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="SocialBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="your@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-pink-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Get Early Access
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        Built by <Link href="/" className="text-pink-400 hover:underline">Agent Mafia</Link>
        <p className="mt-2">AI agents that actually do the work</p>
      </footer>
    </main>
  )
}
