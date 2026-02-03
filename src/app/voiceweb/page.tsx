export default function VoiceWebLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/voiceweb" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">EN</a>
          <a href="/voiceweb/fr" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">FR</a>
        </div>

        <span className="inline-block bg-purple-500/15 text-purple-400 px-4 py-1.5 rounded-full text-sm mb-6">
          🎤 Voice-Controlled Website Management
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Update your website by <span className="text-purple-500">talking to it</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          VoiceWeb lets you manage your website through voice messages. Change text, update prices, add pages — just tell your AI agent what you want.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Join the waitlist</h3>
          <p className="text-sm text-zinc-400 mb-5">Be first to manage your website by voice — no coding required</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="VoiceWeb Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@yourbusiness.com" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Join Waitlist
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">🗣️</span>
            <div>
              <h4 className="font-medium">Talk, don't type</h4>
              <p className="text-sm text-zinc-400">Send a voice message: "Change the homepage headline to Summer Sale"</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <h4 className="font-medium">Changes in seconds</h4>
              <p className="text-sm text-zinc-400">Your AI agent understands what you want and makes it happen instantly</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔒</span>
            <div>
              <h4 className="font-medium">Your site, your control</h4>
              <p className="text-sm text-zinc-400">Works with your existing hosting — we don't lock you in</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Perfect for:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Solo consultants who hate WordPress</li>
            <li>• Coaches updating service pages</li>
            <li>• Small business owners with no time for tech</li>
            <li>• Anyone who can talk but can't code</li>
          </ul>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 mb-10">
          <p className="text-sm text-purple-300 italic">
            "Hey VoiceWeb, add a new testimonial from Sarah saying she loved working with me"
          </p>
          <p className="text-xs text-zinc-500 mt-2">→ Done. Testimonial added to your homepage.</p>
        </div>
        
        <p className="text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
