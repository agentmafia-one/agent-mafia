'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TicketBotPage() {
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
    subjectInput.value = 'TicketBot Signup';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'ticketbot-landing-en';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/ticketbot?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "🎫",
      title: "Fine Analysis",
      description: "Upload your ticket. We analyze it for procedural errors, invalid zones, and disputable charges."
    },
    {
      icon: "📝",
      title: "Auto-Generate Appeals",
      description: "Get a professionally drafted dispute letter in German, French, or Italian. Ready to send."
    },
    {
      icon: "⏰",
      title: "Deadline Tracking",
      description: "Never miss your appeal window. Get reminders before your 30-day dispute period expires."
    },
    {
      icon: "📊",
      title: "Success Prediction",
      description: "Know your chances before you appeal. Based on thousands of Swiss transport fine outcomes."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">🎫 TicketBot</Link>
        <div className="flex gap-4 items-center">
          <Link href="/ticketbot/fr" className="text-gray-400 hover:text-white">FR</Link>
          <Link href="/agents" className="text-gray-400 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-sm mb-6">
          🚂 Fight Transport Fines
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Got a transport fine?<br />
          <span className="text-red-500">Don't pay yet.</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          SBB, TPG, TL, BVB fines are often disputable. TicketBot finds procedural errors 
          and generates professional appeal letters. Success rate: 40%+ on valid disputes.
        </p>

        {/* Email Signup */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
              >
                Join Beta
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">Free beta access. No credit card required.</p>
          </form>
        ) : (
          <div className="max-w-md mx-auto mb-16 p-6 bg-green-500/20 rounded-lg">
            <p className="text-green-400 font-semibold">✅ You're on the list! We'll notify you when TicketBot launches.</p>
          </div>
        )}

        {/* Features */}
        <div className="grid md:grid-cols-2 gap-6 text-left mb-20">
          {features.map((feature, i) => (
            <div key={i} className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
              <span className="text-3xl mb-4 block">{feature.icon}</span>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* How it works */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-10">How it works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Upload Your Fine</h3>
              <p className="text-gray-400">Photo or PDF of your transport ticket/fine</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">We Find Issues</h3>
              <p className="text-gray-400">AI analyzes for procedural errors & valid grounds</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Send Your Appeal</h3>
              <p className="text-gray-400">Professional letter ready to send in your language</p>
            </div>
          </div>
        </div>

        {/* Pricing hint */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-red-900/30 to-gray-800/30 border border-red-800/50 mb-20">
          <h3 className="text-2xl font-bold mb-4">Pricing</h3>
          <p className="text-gray-300 mb-4">
            <span className="text-4xl font-bold text-white">CHF 19</span> per dispute
          </p>
          <p className="text-gray-400">Only pay if we find valid grounds to appeal. No success, no fee.</p>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p className="mb-2">Part of <Link href="/" className="text-red-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
          <p>© 2026 Agent Mafia. Built in Switzerland 🇨🇭</p>
        </footer>
      </main>
    </div>
  );
}
