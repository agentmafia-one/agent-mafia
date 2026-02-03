export default function VoiceNoteLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/voicenote" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">EN</a>
          <a href="/voicenote/fr" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">FR</a>
        </div>

        <span className="inline-block bg-amber-500/15 text-amber-400 px-4 py-1.5 rounded-full text-sm mb-6">
          🎙️ Voice Notes That Work For You
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Record once, <span className="text-amber-500">find forever</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          VoiceNote captures your voice memos, transcribes them instantly, and makes every idea searchable. Never lose a thought again.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Join the waitlist</h3>
          <p className="text-sm text-zinc-400 mb-5">Be first to turn voice chaos into organized brilliance</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="VoiceNote Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@email.com" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5 text-black">
              Join Waitlist
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">🎤</span>
            <div>
              <h4 className="font-medium">Send voice, get text</h4>
              <p className="text-sm text-zinc-400">Drop a voice note via Telegram — instant transcription, no extra apps</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔍</span>
            <div>
              <h4 className="font-medium">Search everything you've said</h4>
              <p className="text-sm text-zinc-400">"What was that idea I had last Tuesday?" — found in seconds</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">☁️</span>
            <div>
              <h4 className="font-medium">Backed up forever</h4>
              <p className="text-sm text-zinc-400">Your notes sync to your cloud storage — you own your data</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Perfect for:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Entrepreneurs capturing ideas on the go</li>
            <li>• Consultants documenting client calls</li>
            <li>• Creatives who think out loud</li>
            <li>• Anyone drowning in voice memos</li>
          </ul>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-10">
          <p className="text-sm text-amber-300 italic">
            "Just had a great idea for the marketing campaign... [45 second voice note]"
          </p>
          <p className="text-xs text-zinc-500 mt-2">→ Transcribed. Tagged #marketing. Searchable forever.</p>
        </div>
        
        <p className="text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
