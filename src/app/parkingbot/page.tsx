export default function ParkingBotLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/parkingbot" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">EN</a>
          <a href="/parkingbot/fr" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">FR</a>
        </div>

        <span className="inline-block bg-orange-500/15 text-orange-400 px-4 py-1.5 rounded-full text-sm mb-6">
          🚗 AI Parking Defense
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Fight <span className="text-orange-500">parking fines</span> in Switzerland
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          ParkingBot analyzes your parking ticket, finds legal grounds to contest, and generates appeal letters for Swiss municipalities.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Get early access</h3>
          <p className="text-sm text-zinc-400 mb-5">Join the beta — first 50 users get free fine analysis</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="ParkingBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="you@email.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Join Beta
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">📸</span>
            <div>
              <h4 className="font-medium">Photo analysis of your ticket</h4>
              <p className="text-sm text-zinc-400">Upload your fine — AI checks for missing info, signage issues, and procedural errors</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚖️</span>
            <div>
              <h4 className="font-medium">Find contestation grounds</h4>
              <p className="text-sm text-zinc-400">Unclear signage, broken meters, medical emergencies, delivery permits — we know what works</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">✍️</span>
            <div>
              <h4 className="font-medium">Generate appeal letters</h4>
              <p className="text-sm text-zinc-400">Professional opposition letters for Geneva, Zurich, Lausanne, Basel — in German or French</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Common parking issues we handle:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Blue zone violations (no disc / expired)</li>
            <li>• White zone overstays</li>
            <li>• Resident permit disputes</li>
            <li>• Private parking lot fines</li>
            <li>• Loading zone issues</li>
            <li>• Handicap spot disputes</li>
            <li>• Towing fee challenges</li>
            <li>• Rental car ticket responsibility</li>
          </ul>
        </div>

        <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6 mb-10">
          <p className="text-orange-300 text-sm">
            💡 <strong>Did you know?</strong> ~30% of parking fines in Switzerland have procedural errors that make them contestable. Most people just pay.
          </p>
        </div>
        
        <p className="text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
