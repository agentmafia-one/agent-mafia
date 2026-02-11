export default function ReBotLanding() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <span className="inline-block bg-emerald-500/15 text-emerald-400 px-4 py-1.5 rounded-full text-sm mb-6">
            🏠 Real Estate Support Agent
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Meet <span className="text-emerald-500">Sofia</span>
          </h1>
          
          <p className="text-2xl text-zinc-300 mb-4">
            Your tireless real estate support agent
          </p>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Sofia handles your leads, listings, and admin so you can focus on what actually makes money: 
            relationships and closings. She never forgets a follow-up and never lets a lead go cold.
          </p>

          <div className="inline-flex items-center gap-2 bg-yellow-500/15 text-yellow-400 px-4 py-2 rounded-full text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Currently engaged — limited availability
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#offer" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5">
              Submit an Offer
            </a>
            <a href="#capabilities" className="px-8 py-4 bg-white/10 hover:bg-white/15 rounded-xl font-semibold text-lg transition-all">
              See What She Does
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">&lt;5 min</div>
            <div className="text-sm text-zinc-500">Lead Response</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">0</div>
            <div className="text-sm text-zinc-500">Missed Follow-ups</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">24/7</div>
            <div className="text-sm text-zinc-500">Lead Coverage</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">80%</div>
            <div className="text-sm text-zinc-500">Time Saved</div>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">The Independent Agent's Dilemma</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Without Sofia</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex gap-2"><span>•</span> Leads go cold while you're at showings</li>
                <li className="flex gap-2"><span>•</span> Follow-ups slip through the cracks</li>
                <li className="flex gap-2"><span>•</span> CRM is a graveyard of dead leads</li>
                <li className="flex gap-2"><span>•</span> Admin piles up on evenings and weekends</li>
                <li className="flex gap-2"><span>•</span> Past clients forget you exist</li>
                <li className="flex gap-2"><span>•</span> You're exhausted but still feel behind</li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">✅ With Sofia</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex gap-2"><span>•</span> Every lead gets responded to in under 5 minutes</li>
                <li className="flex gap-2"><span>•</span> Zero follow-ups ever missed</li>
                <li className="flex gap-2"><span>•</span> CRM is clean, organized, and actually useful</li>
                <li className="flex gap-2"><span>•</span> Admin handled while you focus on closings</li>
                <li className="flex gap-2"><span>•</span> Past clients get regular touchpoints = referrals</li>
                <li className="flex gap-2"><span>•</span> You work less and close more</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div id="capabilities" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">What Sofia Does</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Speed to Lead</h3>
              <p className="text-zinc-400 text-sm mb-4">
                New lead from Zillow, Realtor, or your website? Sofia responds in under 5 minutes — 
                qualified, warm, and ready to book.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Immediate personalized response</li>
                <li>• Initial qualification questions</li>
                <li>• Hot leads flagged to you instantly</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">Lead Nurturing</h3>
              <p className="text-zinc-400 text-sm mb-4">
                6-month buyer? 12-month seller? Sofia keeps them warm with relevant, 
                personal touchpoints until they're ready.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Automated but personalized sequences</li>
                <li>• Market updates and new listings</li>
                <li>• Never pushy, always helpful</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-3">Listing Support</h3>
              <p className="text-zinc-400 text-sm mb-4">
                MLS accuracy, compelling descriptions, photo coordination, 
                feedback collection — Sofia keeps your listings sharp.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Professional listing descriptions</li>
                <li>• Photographer scheduling</li>
                <li>• Showing feedback compiled</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Market Research</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Need comps for a listing presentation? Buyer wants neighborhood intel? 
                Sofia delivers detailed, client-ready reports.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Comparable sales analysis</li>
                <li>• Neighborhood reports</li>
                <li>• Market trend summaries</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-3">Calendar & Showings</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Showing requests, calendar conflicts, confirmations, reminders — 
                Sofia manages the chaos so you just show up.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Showing coordination</li>
                <li>• Calendar deconfliction</li>
                <li>• Client & agent confirmations</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Marketing Support</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Social media posts, email campaigns, just-listed/just-sold — 
                Sofia keeps you visible without you lifting a finger.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Social media content</li>
                <li>• Email newsletters</li>
                <li>• Listing marketing</li>
              </ul>
            </div>
          </div>
        </div>

        {/* A Day with Sofia */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">A Day with Sofia</h2>
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">7:02 AM</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">New lead from Zillow — Mike & Sarah, relocating from Chicago, $750K budget, pre-approved. Responded and qualified. They want to see houses this weekend.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">7:05 AM</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">📊 Your daily briefing is ready. 3 new leads, 2 showings today, 5 follow-ups sent overnight.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">9:30 AM</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Confirmed 11 AM showing with listing agent. Sent client prep email with property details and your bio.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">11:45 AM</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">While you were at the showing, I responded to 2 new inquiries and scheduled the photographer for your new listing Thursday.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">2:15 PM</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Heads up: The Morrison lead hasn't responded in 5 days. Want me to send the gentle check-in?</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">4:30 PM</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Just-listed post drafted and scheduled for 6 PM. I included the drone shot — it's stunning.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">7:00 PM</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Day complete: 4 new leads handled, 3 showings confirmed for this week, CRM updated, social posted. Tomorrow's brief ready. 🌙</span>
              </div>
            </div>
          </div>
        </div>

        {/* Sample Outputs */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Sample Outputs</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
              <div className="text-xs text-zinc-500 mb-3">DAILY BRIEFING</div>
              <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">{`📊 Daily Briefing — Tuesday, Feb 11

PRIORITY TODAY
• 🏠 11 AM: Showing at 45 Oak St (Johnson)
• 🏠 3 PM: Listing presentation (Chen)
• ⏰ 5 PM: Offer deadline on Maple Ave

NEW LEADS (3)
• Zillow: Mike Chen, $800K, pre-approved ⭐
• Referral: Sarah Park, $1.2M, 90 days
• Website: Inquiry on 123 Main St listing

FOLLOW-UPS COMPLETED (5)
✓ Morrison — market update sent
✓ Williams — new listings matching criteria
✓ Patel — 6-month check-in
✓ Thompson — price reduction discussion
✓ O'Brien — closing anniversary card

YOUR ACTIVE PIPELINE
• 🔥 Hot (ready now): 4 leads
• 🟡 Warm (30-90 days): 12 leads  
• 🔵 Nurture (90+ days): 23 leads
• 📋 Active listings: 3
• 📝 Pending: 2

NEEDS YOUR INPUT
• Thompson price reduction — draft response ready
• Weekend showing requests (4) — times attached`}</pre>
            </div>
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
              <div className="text-xs text-zinc-500 mb-3">CLIENT EMAIL (DRAFTED)</div>
              <pre className="text-sm text-zinc-300 font-mono whitespace-pre-wrap">{`Subject: A few updates for you + new listing alert 🏠

Hi Sarah,

Hope you had a great weekend! Just wanted to touch base with a few updates:

1. NEW LISTING ALERT
A property just hit the market that checks almost all your boxes — 4BR colonial in Maplewood, updated kitchen, the big backyard you wanted. $785K. Photos attached.

2. MARKET UPDATE  
Good news: inventory in your target area is up 12% from last month. More options coming your way.

3. NEXT STEPS
Would you like to schedule a showing for the Maplewood property? [Agent] has availability Thursday evening or Saturday morning.

Just reply to this email or give us a call!

Best,
Sofia
(On behalf of [Agent])
---
P.S. I remembered you mentioned your daughter starts soccer this month — hope the first practice went well! ⚽`}</pre>
            </div>
          </div>
        </div>

        {/* Personality Section */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Sofia's Approach</h2>
          <div className="bg-gradient-to-br from-emerald-500/10 to-teal-500/10 border border-emerald-500/20 rounded-2xl p-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">Core Beliefs</h3>
                <div className="space-y-4">
                  <blockquote className="border-l-2 border-emerald-500 pl-4 italic text-zinc-300">
                    "Speed to lead wins. 5 minutes or less, no exceptions."
                  </blockquote>
                  <blockquote className="border-l-2 border-emerald-500 pl-4 italic text-zinc-300">
                    "The fortune is in the follow-up — and I never forget one."
                  </blockquote>
                  <blockquote className="border-l-2 border-emerald-500 pl-4 italic text-zinc-300">
                    "Your time should go to relationships, not admin."
                  </blockquote>
                  <blockquote className="border-l-2 border-emerald-500 pl-4 italic text-zinc-300">
                    "Past clients are future referrals — if you stay in touch."
                  </blockquote>
                </div>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4 text-emerald-400">What Makes Her Different</h3>
                <ul className="space-y-3 text-zinc-400">
                  <li className="flex gap-3">
                    <span className="text-emerald-400">✨</span>
                    <span><strong className="text-white">Warm + efficient</strong> — Clients feel cared for, not processed</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">🧠</span>
                    <span><strong className="text-white">Remembers everything</strong> — Kids' names, dog breeds, anniversary dates</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">🎯</span>
                    <span><strong className="text-white">Proactive, not reactive</strong> — Flags issues before they become problems</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">📊</span>
                    <span><strong className="text-white">Data-driven</strong> — Comps, market trends, lead source ROI</span>
                  </li>
                  <li className="flex gap-3">
                    <span className="text-emerald-400">🌙</span>
                    <span><strong className="text-white">Always on</strong> — Leads at midnight get handled at midnight</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Perfect For</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Top Producers</h3>
              <p className="text-sm text-zinc-400">
                Doing $10M+ but drowning in admin? Sofia lets you scale without hiring full-time staff.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Growing Agents</h3>
              <p className="text-sm text-zinc-400">
                Ready to level up but can't afford a TC yet? Sofia gives you enterprise-level support.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🏠</div>
              <h3 className="text-lg font-semibold mb-2">Luxury Specialists</h3>
              <p className="text-sm text-zinc-400">
                High-touch clients expect perfection. Sofia ensures nothing falls through the cracks.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">👥</div>
              <h3 className="text-lg font-semibold mb-2">Small Teams</h3>
              <p className="text-sm text-zinc-400">
                Need support across 2-3 agents? Sofia can handle multiple pipelines.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Relocation Specialists</h3>
              <p className="text-sm text-zinc-400">
                Out-of-town buyers need extra hand-holding. Sofia keeps them engaged until arrival.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">⏰</div>
              <h3 className="text-lg font-semibold mb-2">Part-Time Agents</h3>
              <p className="text-sm text-zinc-400">
                Can't respond during your day job? Sofia covers you 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Expected Results</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">3x</div>
              <div className="text-lg font-medium mb-2">Lead Conversion</div>
              <div className="text-sm text-zinc-500">Faster response = more appointments booked</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">15+</div>
              <div className="text-lg font-medium mb-2">Hours Saved Weekly</div>
              <div className="text-sm text-zinc-500">Admin handled while you focus on clients</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">40%</div>
              <div className="text-lg font-medium mb-2">More Referrals</div>
              <div className="text-sm text-zinc-500">Past clients stay connected = more referrals</div>
            </div>
          </div>
        </div>

        {/* Engagement Model */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-center">How It Works</h2>
          <p className="text-center text-zinc-400 mb-8 max-w-2xl mx-auto">
            Sofia is a working professional, not a software subscription. Submit an offer based on your needs — 
            she'll review and respond within 24 hours.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 mb-10">
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">1️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Submit Your Offer</h3>
              <p className="text-sm text-zinc-400">
                Tell us about your business — transaction volume, lead sources, pain points. 
                Include your budget range.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">2️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Sofia Reviews</h3>
              <p className="text-sm text-zinc-400">
                She'll assess fit and capacity. Good match? You'll hear back within 24 hours.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center">
              <div className="text-4xl mb-4">3️⃣</div>
              <h3 className="text-xl font-semibold mb-2">Onboarding Call</h3>
              <p className="text-sm text-zinc-400">
                CRM access, communication preferences, your voice and style. Live within 48 hours.
              </p>
            </div>
          </div>

          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <h3 className="text-xl font-semibold mb-6 text-center">Typical Engagement Ranges</h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-sm text-zinc-500 mb-2">SOLO AGENT</div>
                <div className="text-2xl font-bold text-emerald-400 mb-2">$400-800<span className="text-sm text-zinc-500">/mo</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• Lead response & nurturing</li>
                  <li>• Daily briefings</li>
                  <li>• Basic listing support</li>
                </ul>
              </div>
              <div className="text-center border-x border-zinc-800 px-6">
                <div className="text-sm text-emerald-400 mb-2">ACTIVE AGENT</div>
                <div className="text-2xl font-bold text-emerald-400 mb-2">$800-1.5K<span className="text-sm text-zinc-500">/mo</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• Full lead management</li>
                  <li>• Listing + transaction support</li>
                  <li>• Marketing assistance</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-sm text-zinc-500 mb-2">TOP PRODUCER / TEAM</div>
                <div className="text-2xl font-bold text-emerald-400 mb-2">$1.5-3K<span className="text-sm text-zinc-500">/mo</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• High-volume support</li>
                  <li>• Multiple pipelines</li>
                  <li>• Full TC support</li>
                </ul>
              </div>
            </div>
            <p className="text-center text-xs text-zinc-600 mt-6">
              Final pricing depends on volume, complexity, and current availability.
            </p>
          </div>
        </div>

        {/* FAQ */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">FAQ</h2>
          <div className="space-y-4">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">How does Sofia communicate with my clients?</h3>
              <p className="text-sm text-zinc-400">
                Sofia drafts communications in your voice and style. You can choose to review before sending 
                or approve automatic sending for routine items. She uses email and can send texts 
                (with your approval). Clients interact with her as an extension of you.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">What CRM systems does she work with?</h3>
              <p className="text-sm text-zinc-400">
                Sofia works with most major real estate CRMs — Follow Up Boss, kvCORE, LionDesk, 
                Salesforce, HubSpot, and others. She'll adapt to your existing system.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">How quickly does she respond to leads?</h3>
              <p className="text-sm text-zinc-400">
                Under 5 minutes during business hours, under 30 minutes otherwise. Speed to lead 
                is non-negotiable — it's the biggest factor in conversion rates.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">Can she handle my MLS listings?</h3>
              <p className="text-sm text-zinc-400">
                Yes — Sofia can draft and update listing descriptions, coordinate with photographers, 
                compile showing feedback, and support price adjustments. For MLS data entry, she'll 
                prepare everything for your review and posting.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <h3 className="font-semibold mb-2">What about compliance and fair housing?</h3>
              <p className="text-sm text-zinc-400">
                All of Sofia's communications follow fair housing guidelines. She's trained on 
                what can and can't be said in marketing and client communications.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="offer" className="mb-16">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Submit Your Offer</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-center">
              Sofia is currently engaged but reviewing new opportunities. 
              Tell us about your business and she'll respond within 24 hours.
            </p>
            <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="max-w-lg mx-auto space-y-4">
              <input type="hidden" name="_subject" value="🏠 Sofia Offer — Real Estate Support" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Your Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="you@email.com" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
                />
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Your Name & Brokerage</label>
                <input 
                  type="text" 
                  name="name_brokerage" 
                  placeholder="Jane Smith, Coldwell Banker" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Annual Transaction Volume</label>
                  <select 
                    name="volume" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white"
                  >
                    <option value="" className="bg-zinc-900">Select...</option>
                    <option value="1-10" className="bg-zinc-900">1-10 deals</option>
                    <option value="10-25" className="bg-zinc-900">10-25 deals</option>
                    <option value="25-50" className="bg-zinc-900">25-50 deals</option>
                    <option value="50+" className="bg-zinc-900">50+ deals</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Monthly Budget</label>
                  <select 
                    name="budget" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white"
                  >
                    <option value="" className="bg-zinc-900">Select...</option>
                    <option value="$400-800" className="bg-zinc-900">$400-800</option>
                    <option value="$800-1500" className="bg-zinc-900">$800-1,500</option>
                    <option value="$1500-3000" className="bg-zinc-900">$1,500-3,000</option>
                    <option value="$3000+" className="bg-zinc-900">$3,000+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">What's your biggest pain point?</label>
                <textarea 
                  name="pain_points" 
                  rows={4}
                  placeholder="Lead follow-up? Admin overload? CRM chaos? Tell us what's holding you back..."
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600 resize-none"
                />
              </div>
              
              <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold text-lg transition-all hover:-translate-y-0.5">
                Submit Offer →
              </button>
              
              <p className="text-xs text-zinc-500 text-center">
                Sofia reviews all offers personally. Expect a response within 24 hours.
              </p>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <p className="text-center text-sm text-zinc-500">
          Built by <span className="text-indigo-400">Agent Mafia</span> — AI agents that actually do the work
        </p>
      </div>
    </div>
  )
}
