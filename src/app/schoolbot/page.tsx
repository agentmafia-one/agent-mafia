import Link from 'next/link'

export const metadata = {
  title: 'SchoolBot — Navigate Swiss Schools Like a Local | Agent Mafia',
  description: 'AI agent that guides expat parents through the Swiss school system. Enrollment, language requirements, public vs private — all decoded.',
}

export default function SchoolBotPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/schoolbot/fr" className="text-sm text-gray-400 hover:text-white">FR</Link>
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Get School Help
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-6">
          🏫 Swiss School Navigator
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Swiss Schools Are Confusing.<br />
          <span className="text-blue-400">Let's Decode Them Together.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          SchoolBot helps expat parents navigate enrollment, language classes, 
          public vs private options, and canton-specific rules. Stop guessing, start knowing.
        </p>
        <a href="#signup" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Help Me Enroll My Child →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">The Expat Parent Struggle</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🗣️</div>
            <h3 className="text-xl font-semibold mb-2">Language Shock</h3>
            <p className="text-gray-400">Your kid starts school in German, French, or Italian — depending on canton. No transition period.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">26 Different Systems</h3>
            <p className="text-gray-400">Each canton has its own rules, calendar, and enrollment process. What works in Zurich fails in Geneva.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Private School Maze</h3>
            <p className="text-gray-400">International schools cost CHF 25-50K/year. Which ones are worth it? Which have spots?</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Swiss Schools in Numbers</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">26</p>
            <p className="text-sm text-gray-400 mt-2">Different canton systems</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">4 languages</p>
            <p className="text-sm text-gray-400 mt-2">German/French/Italian/Romansh</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 35K</p>
            <p className="text-sm text-gray-400 mt-2">Avg. international school fee</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">Age 4-6</p>
            <p className="text-sm text-gray-400 mt-2">Kindergarten starts (varies)</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">How SchoolBot Works</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Tell Us Your Situation</h3>
              <p className="text-gray-400">Your canton, child's age, languages spoken, and timeline. We map out your options.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Get Canton-Specific Guidance</h3>
              <p className="text-gray-400">Public school enrollment steps, required documents, key deadlines — for YOUR canton.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Compare Your Options</h3>
              <p className="text-gray-400">Public, private, bilingual, international — we help you weigh costs, quality, and fit.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">What SchoolBot Covers</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">📝</span>
            <div>
              <h3 className="font-semibold mb-1">Enrollment Process</h3>
              <p className="text-gray-400 text-sm">Step-by-step for public school registration in your commune</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">🗣️</span>
            <div>
              <h3 className="font-semibold mb-1">Language Integration</h3>
              <p className="text-gray-400 text-sm">DaZ, FLE, and integration class options for your child</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">🏫</span>
            <div>
              <h3 className="font-semibold mb-1">School Comparison</h3>
              <p className="text-gray-400 text-sm">Public vs private vs international — pros, cons, costs</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">📅</span>
            <div>
              <h3 className="font-semibold mb-1">Key Dates</h3>
              <p className="text-gray-400 text-sm">Enrollment deadlines, school year start, vacation calendars</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">🎓</span>
            <div>
              <h3 className="font-semibold mb-1">Gymnasium Track</h3>
              <p className="text-gray-400 text-sm">Understanding the Matura path and preparation requirements</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">🆘</span>
            <div>
              <h3 className="font-semibold mb-1">Problem Solving</h3>
              <p className="text-gray-400 text-sm">Bullying, grade issues, teacher conflicts — how to navigate</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-4">Get School Guidance</h2>
          <p className="text-gray-400 text-center mb-8">
            Join the beta — first 50 families get personalized help for free.
          </p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="SchoolBot Beta Signup" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://agentmafia.one/schoolbot?success=true" />
            <input
              type="email"
              name="email"
              placeholder="your@email.com"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="canton"
              placeholder="Your canton (e.g., Zurich, Geneva)"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors"
            >
              Join the Beta →
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">
            We respect your privacy. No spam, ever.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Part of <Link href="/" className="text-blue-400 hover:underline">Agent Mafia</Link> — AI agents that work for you
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/agents" className="hover:text-white">All Agents</Link>
            <Link href="/" className="hover:text-white">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
