export default function ContentCheckLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/contentcheck" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">EN</a>
          <a href="/contentcheck/fr" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">FR</a>
        </div>

        <span className="inline-block bg-blue-500/15 text-blue-400 px-4 py-1.5 rounded-full text-sm mb-6">
          ✓ Content Guidelines Agent
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Does your post follow <span className="text-blue-500">your rules?</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          ContentCheck reviews your social posts against your custom guidelines. Catch compliance issues, brand violations, and policy breaches before you publish.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Get early access</h3>
          <p className="text-sm text-zinc-400 mb-5">Be first to automate your content compliance</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="ContentCheck Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@company.com" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Get Access
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">📋</span>
            <div>
              <h4 className="font-medium">Your rules, enforced automatically</h4>
              <p className="text-sm text-zinc-400">Define guidelines once — we check every post against them</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔗</span>
            <div>
              <h4 className="font-medium">Paste URL, get instant review</h4>
              <p className="text-sm text-zinc-400">Works with LinkedIn, Twitter, Instagram, Facebook — any public post</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <h4 className="font-medium">Review before or after publishing</h4>
              <p className="text-sm text-zinc-400">Check drafts via screenshot or live posts via URL</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Built for regulated industries:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Finance & Banking — FINMA, SEC compliance</li>
            <li>• Healthcare — HIPAA, advertising rules</li>
            <li>• Legal — Bar association guidelines</li>
            <li>• Any company with brand or policy standards</li>
          </ul>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-10">
          <p className="text-sm text-blue-300 font-medium mb-2">Example check:</p>
          <p className="text-sm text-zinc-400 italic">
            "Your post contains 'private placement' — this language suggests securities solicitation. Recommend removing."
          </p>
          <p className="text-xs text-zinc-500 mt-2">Guideline violated: No public investment solicitation</p>
        </div>

        <div className="flex justify-center gap-4 mb-10">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">∞</div>
            <div className="text-xs text-zinc-500">Custom rules</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">&lt;1min</div>
            <div className="text-xs text-zinc-500">Review time</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-400">24/7</div>
            <div className="text-xs text-zinc-500">Monitoring</div>
          </div>
        </div>
        
        <p className="text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
