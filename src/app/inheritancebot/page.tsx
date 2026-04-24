import Link from 'next/link'

export const metadata = {
  title: 'InheritanceBot — Swiss Inheritance & Tax Navigator | Agent Mafia',
  description: 'AI agent that simplifies Swiss inheritance laws, tax optimization, and cross-border will drafting for expats and families.',
}

export default function InheritanceBotPage() {
  return (
    <<mainmain className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <<navnav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <<LinkLink href="/" className="text-2xl font-bold text-white">Agent Mafia</Link>
        <<divdiv className="flex gap-4 items-center">
          <<LinkLink href="/inheritancebot/fr" className="text-slate-400 hover:text-white">🇫🇷 FR</Link>
          <<LinkLink href="/agents" className="text-slate-300 hover:text-white">All Agents</Link>
        </div>
      </nav>

      <<sectionsection className="max-w-4xl mx-auto px-6 py-20 text-center">
        <<divdiv className="text-6xl mb-6">📜</div>
        <<hh1 className="text-5xl font-bold text-white mb-6">
          Swiss Inheritance Law?<<brbr/>
          <<spanspan className="text-amber-400">Don&apos;t leave it to chance.</span>
        </h1>
        <<pp className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          InheritanceBot helps expats and families navigate the labyrinth of Swiss tax rules, 
          mandatory heirship, and cross-border estate planning.
        </p>

        <<divdiv className="grid md:grid-cols-3 gap-6 text-left mb-12">
          <<divdiv className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <<divdiv className="text-3xl mb-3">⚖️</div>
            <<hh3 className="text-lg font-semibold text-white mb-2">Law Navigator</h3>
            <<pp className="text-slate-400">Understand Swiss mandatory portions (réserves) and how they impact your freedom to bequeath.</p>
          </div>
          <<divdiv className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <<divdiv className="text-3xl mb-3">💰</div>
            <<hh3 className="text-lg font-semibold text-white mb-2">Tax Optimization</h3>
            <<pp className="text-slate-400">Calculate inheritance taxes across different cantons and minimize the bite on your estate.</p>
          </div>
          <<divdiv className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <<divdiv className="text-3xl mb-3">🌍</div>
            <<hh3 className="text-lg font-semibold text-white mb-2">Cross-Border Wills</h3>
            <<pp className="text-slate-400">Coordinate your assets across borders to avoid conflicting laws and double taxation.</p>
          </div>
        </div>

        <<divdiv className="bg-slate-800 rounded-2xl p-8 max-w-md mx-auto border border-slate-700">
          <<hh2 className="text-2xl font-bold text-white mb-4">Get Early Access</h2>
          <<pp className="text-slate-400 mb-6">Secure your family&apos;s future with InheritanceBot.</p>
          <<formform action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <<inputinput type="hidden" name="_subject" value="InheritanceBot Beta Signup" />
            <<inputinput type="hidden" name="_captcha" value="false" />
            <<inputinput 
              type="email" 
              name="email" 
              placeholder="your@email.com" 
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
            <<buttonbutton 
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors"
            >
              Join Waitlist →
            </button>
          </form>
        </div>
      </section>

      <<footerfooter className="text-center py-8 text-slate-500">
        <<pp>Built by <<LinkLink href="/" className="text-amber-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  )
}
