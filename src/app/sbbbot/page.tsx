import Link from 'next/link'

export const metadata = {
  title: 'SBBBot - AI Train Delay Compensation Agent | Agent Mafia',
  description: 'Automatically claim compensation for SBB/CFF train delays. Never miss a refund again.',
}

export default function SBBBotPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/sbbbot/fr" className="text-sm text-gray-400 hover:text-white">🇫🇷 Français</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🚂</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">SBBBot</span> — Get Your Train Delay Refunds
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Your train was late? You deserve compensation. Most people never claim it. SBBBot files claims automatically so you get money back without lifting a finger.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 Sound Familiar?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="font-bold mb-2">Constant Delays</h3>
            <p className="text-gray-400">30+ minutes late, again. But who has time to file a claim?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-bold mb-2">Complicated Forms</h3>
            <p className="text-gray-400">SBB's refund process is tedious. Most people just give up.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="font-bold mb-2">Lost Money</h3>
            <p className="text-gray-400">You're entitled to refunds but leave hundreds on the table each year.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ How SBBBot Works</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Connect Your GA/Halbtax</h3>
            <p className="text-gray-400">Link your SwissPass or travel card securely</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">We Monitor Your Trips</h3>
            <p className="text-gray-400">AI detects delays that qualify for compensation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Auto-File Claims</h3>
            <p className="text-gray-400">Refunds deposited directly to your account</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Stop Losing Money to Train Delays</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Join the beta. Get notified when SBBBot launches. Early users get 3 months free.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="SBBBot Beta Signup" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            required
            placeholder="your@email.com" 
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-bold transition-colors"
          >
            Get Early Access
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>Built by <Link href="/" className="text-red-500 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  )
}
