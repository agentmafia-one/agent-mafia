'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function IntrusionBotPage() {
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
        _subject: 'IntrusionBot Beta Signup',
        agent: 'IntrusionBot',
        language: 'en'
      })
    });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/intrusionbot/fr" className="text-sm text-slate-400 hover:text-white">FR</Link>
          <span className="text-sm text-white font-medium">EN</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-6">🛡️</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Stop <span className="text-red-400">Intrum & Inkasso</span> From Ruining Your Life
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          An AI agent that knows Swiss debt collection laws better than they do. Fight unfair claims, dispute errors, and protect your credit score.
        </p>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 flex-1"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition"
            >
              Fight Back →
            </button>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-green-300 font-medium">✓ You're in! We'll notify you when IntrusionBot launches.</p>
          </div>
        )}
        <p className="text-sm text-slate-500 mt-4">Join the waitlist • Swiss debt law expertise</p>
      </section>

      {/* Problem */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">The Debt Collector Nightmare</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-4">📬</div>
            <h3 className="font-semibold mb-2">Scary Letters</h3>
            <p className="text-slate-400 text-sm">Threatening language designed to make you panic and pay — even for debts you don't owe.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="font-semibold mb-2">Inflated Fees</h3>
            <p className="text-slate-400 text-sm">Collection agencies add excessive fees that may not be legally justified under Swiss law.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-4">😰</div>
            <h3 className="font-semibold mb-2">Credit Damage</h3>
            <p className="text-slate-400 text-sm">Your Betreibungsregister gets entries that follow you for years — even for disputed claims.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">How IntrusionBot Protects You</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="bg-red-500/20 rounded-lg p-3 text-2xl">📋</div>
            <div>
              <h3 className="font-semibold mb-1">Analyzes Every Claim</h3>
              <p className="text-slate-400">Upload the collection letter. IntrusionBot checks if the debt is valid, if fees are legal, and finds errors in their process.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-red-500/20 rounded-lg p-3 text-2xl">⚖️</div>
            <div>
              <h3 className="font-semibold mb-1">Knows Swiss Debt Law</h3>
              <p className="text-slate-400">SchKG, Verjährung, Rechtsvorschlag — the agent knows every legal tool to protect you under Swiss debt collection law.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-red-500/20 rounded-lg p-3 text-2xl">✉️</div>
            <div>
              <h3 className="font-semibold mb-1">Drafts Your Response</h3>
              <p className="text-slate-400">Get a professional dispute letter ready to send — in German, French, or Italian. No lawyer fees.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Three Steps to Fight Back</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Upload the Letter</h3>
            <p className="text-slate-400 text-sm">Photo or PDF of the collection notice</p>
          </div>
          <div>
            <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">AI Analysis</h3>
            <p className="text-slate-400 text-sm">IntrusionBot finds errors and legal issues</p>
          </div>
          <div>
            <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Get Your Defense</h3>
            <p className="text-slate-400 text-sm">Professional response letter ready to send</p>
          </div>
        </div>
      </section>

      {/* Pricing hint */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <p className="text-slate-400 mb-2">One disputed claim can cost you thousands.</p>
          <p className="text-3xl font-bold mb-2">Starting at <span className="text-red-400">CHF 29</span>/dispute</p>
          <p className="text-slate-500 text-sm">Less than 30 minutes of a lawyer's time</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Don't Let Them Win</h2>
        <p className="text-slate-400 mb-8">Get early access to IntrusionBot and fight back against unfair debt collection.</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 flex-1"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition"
            >
              Join Waitlist
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-medium">✓ You're on the list!</p>
        )}
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>Built by <Link href="/" className="text-white hover:text-red-400">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </main>
  );
}
