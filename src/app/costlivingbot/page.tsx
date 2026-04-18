'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CostLivingBotPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    const form = document.createElement('form');
    form.action = 'https://formsubmit.co/dev@agentmafia.one';
    form.method = 'POST';
    
    const emailInput = document.createElement('input');
    emailInput.name = 'email';
    emailInput.value = email;
    form.appendChild(emailInput);
    
    const subjectInput = document.createElement('input');
    subjectInput.name = '_subject';
    subjectInput.value = 'CostLivingBot Beta Signup';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'costlivingbot-landing-en';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/costlivingbot?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "🏙️",
      title: "Canton Comparison",
      description: "Compare cost of living across all 26 cantons. Rent, groceries, transport, health insurance — side by side, real numbers."
    },
    {
      icon: "💰",
      title: "Salary Calculator",
      description: "Input your gross salary. Get net take-home after taxes, social contributions, and pillar deductions. By canton, by city."
    },
    {
      icon: "📊",
      title: "Budget Optimizer",
      description: "Tell us your lifestyle. We show you the cheapest canton that fits your quality-of-life requirements. No surprises."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">🏙️ CostLivingBot</Link>
        <div className="flex gap-4 items-center">
          <Link href="/costlivingbot/fr" className="text-gray-400 hover:text-white">FR</Link>
          <Link href="/agents" className="text-gray-400 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm mb-6">
          🇨🇭 Swiss Cost of Living Intelligence
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Stop guessing what Switzerland<br />
          <span className="text-green-400">actually costs.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Moving to Switzerland? Switching cantons? CostLivingBot gives you real numbers — rent, taxes, health insurance, groceries — by canton, by city, by lifestyle.
        </p>

        {/* CTA */}
        {submitted ? (
          <div className="bg-green-500/20 rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">You&apos;re on the list!</h3>
            <p className="text-gray-400">We&apos;ll notify you when CostLivingBot is ready.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="flex-1 px-5 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-xl font-bold transition-colors"
            >
              Get Early Access
            </button>
          </form>
        )}
        <p className="text-sm text-gray-500 mt-4">Free during beta. No spam, ever.</p>
      </main>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Moving blind is expensive.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "😱", text: "Zürich rent is 40% more than Bern — but nobody tells you until you sign the lease." },
            { icon: "💸", text: "Health insurance premiums vary CHF 200+/month between cantons. Same coverage, different price." },
            { icon: "🧮", text: "Your net salary changes 15-25% depending on canton. A Geneva salary ≠ a Zug salary." }
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/50 rounded-2xl p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">What CostLivingBot does.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">How it works.</h2>
        <div className="space-y-4">
          {[
            { step: "1", text: "Tell us where you&apos;re moving from — and where you&apos;re considering." },
            { step: "2", text: "CostLivingBot pulls real data: rent, taxes, KK premiums, SBB passes, groceries." },
            { step: "3", text: "Get a personalized cost breakdown with your exact salary, by canton." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-gray-800/30 rounded-xl p-5">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing hint */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 inline-block">
          <p className="text-gray-400 mb-2">Starting at</p>
          <p className="text-4xl font-bold text-green-400">$49<span className="text-lg text-gray-500">/mo</span></p>
          <p className="text-gray-500 mt-2">Pay for itself in one &quot;should have chosen Zug&quot; moment.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-600 border-t border-gray-800">
        <p>Built by <Link href="/" className="text-white hover:text-green-400">Agent Mafia</Link> — AI agents that actually do the work.</p>
      </footer>
    </div>
  );
}
