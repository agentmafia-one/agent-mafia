'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SwissPostBotPage() {
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
    subjectInput.value = 'SwissPostBot Signup';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'swisspostbot-landing-en';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/swisspostbot?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "📦",
      title: "Smart Package Tracking",
      description: "Track all your Swiss Post, DHL, UPS, and FedEx packages in one place. Get proactive alerts."
    },
    {
      icon: "🛃",
      title: "Customs Fee Calculator",
      description: "Know your customs duties BEFORE ordering. Avoid surprise fees at the door."
    },
    {
      icon: "📝",
      title: "Auto-Complaint Filing",
      description: "Lost package? Damaged delivery? Generate and file official complaints automatically."
    },
    {
      icon: "💰",
      title: "Refund Recovery",
      description: "Track refund status and escalate automatically if Swiss Post doesn't respond."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">📦 SwissPostBot</Link>
        <div className="flex gap-4 items-center">
          <Link href="/swisspostbot/fr" className="text-gray-400 hover:text-white">FR</Link>
          <Link href="/agents" className="text-gray-400 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-400 text-sm mb-6">
          📦 Never Lose a Package Again
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Your Swiss Post <span className="text-yellow-400">AI Assistant</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Track packages, calculate customs, file complaints, and recover refunds. 
          All automated. Works with Swiss Post, La Poste, and international carriers.
        </p>

        {/* Email Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="your@email.com"
              required
              className="px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 flex-1"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-bold text-black transition"
            >
              Join Beta
            </button>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 max-w-md mx-auto mb-12">
            <p className="text-green-400 font-bold">✅ You're on the list! We'll be in touch soon.</p>
          </div>
        )}

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 mt-16">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 text-left">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Pain Points */}
        <div className="mt-20 text-left max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-6 text-center">Sound Familiar?</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-red-400">😤</span>
              <span>CHF 50 customs fee for a CHF 30 order? "Administrative handling" my ass.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">😤</span>
              <span>"Your package has been delivered" — but my mailbox is empty.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">😤</span>
              <span>Filing a complaint with Swiss Post takes 45 minutes and 3 forms.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">😤</span>
              <span>Tracking says "in customs" for 2 weeks. No explanation. No updates.</span>
            </li>
          </ul>
        </div>

        {/* How it works */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Connect Your Tracking</h3>
              <p className="text-gray-400">Forward shipping confirmations or paste tracking numbers</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Get Smart Alerts</h3>
              <p className="text-gray-400">We monitor and alert you to delays, customs, or issues</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Auto-Resolve Problems</h3>
              <p className="text-gray-400">One click to file complaints and track refunds</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">Early Access: CHF 9/month</h2>
          <p className="text-gray-300 mb-6">Unlimited tracking, customs calculator, complaint filing included.</p>
          <Link href="#" onClick={() => document.querySelector('input')?.focus()} className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-bold text-black transition">
            Join the Beta →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-500">
        <p>Built by <Link href="/" className="text-yellow-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
      </footer>
    </div>
  );
}
