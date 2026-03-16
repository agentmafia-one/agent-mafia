'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function StagiaireBot() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    await fetch('https://formsubmit.co/ajax/dev@agentmafia.one', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        _subject: 'StagiaireBot Beta Signup',
        agent: 'StagiaireBot',
        language: 'EN'
      })
    });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">
          Agent<span className="text-indigo-400">Mafia</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/stagiairebot/fr" className="text-gray-400 hover:text-white transition">
            🇫🇷 FR
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-6">🎓</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Your Internship Contract is
          <span className="text-indigo-400"> Probably Illegal</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Swiss labor law protects interns too. StagiaireBot analyzes your contract, 
          verifies fair pay, and fights for your rights.
        </p>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            The Internship Trap 🪤
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Unpaid or Underpaid</h3>
              <p className="text-gray-400">
                Many Swiss internships pay below minimum or nothing. Know what you're legally entitled to.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-2">Shady Contracts</h3>
              <p className="text-gray-400">
                Missing clauses, illegal terms, unclear duration. Most interns sign without understanding.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">😰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Afraid to Ask</h3>
              <p className="text-gray-400">
                Question your employer and risk losing the opportunity. You need leverage.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            How StagiaireBot Protects You
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gray-800/30 p-6 rounded-xl">
              <span className="text-2xl">📄</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Contract Analysis</h3>
                <p className="text-gray-400">
                  Upload your internship contract. We flag illegal clauses, missing protections, 
                  and unfair terms in minutes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-800/30 p-6 rounded-xl">
              <span className="text-2xl">💵</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Fair Pay Verification</h3>
                <p className="text-gray-400">
                  Compare your compensation to industry standards and legal minimums. 
                  Know if you're being exploited.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-800/30 p-6 rounded-xl">
              <span className="text-2xl">✉️</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Negotiation Templates</h3>
                <p className="text-gray-400">
                  Professional letters to request contract changes or dispute unfair treatment. 
                  AI-written, legally sound.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent to-indigo-950/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Don't Sign Blind
          </h2>
          <p className="text-gray-300 mb-8">
            Join the beta. Get your contract reviewed before it's too late.
          </p>
          
          {submitted ? (
            <div className="bg-green-500/20 border border-green-500 rounded-xl p-6">
              <p className="text-green-400 text-lg">
                ✓ You're on the list! We'll notify you when StagiaireBot launches.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 flex-1 max-w-md"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition"
              >
                Get Early Access
              </button>
            </form>
          )}

          <p className="text-gray-500 text-sm mt-4">
            Free beta access. No spam.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 mb-4">
            Part of <Link href="/" className="text-indigo-400 hover:underline">Agent Mafia</Link> — 
            AI agents that actually do the work
          </p>
          <p className="text-gray-600 text-sm">
            © 2026 Agent Mafia. Protecting interns across Switzerland.
          </p>
        </div>
      </footer>
    </main>
  );
}
