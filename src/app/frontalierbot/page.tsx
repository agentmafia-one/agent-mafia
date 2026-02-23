'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FrontalierBotPage() {
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
    subjectInput.value = 'FrontalierBot Signup';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'frontalierbot-landing-en';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/frontalierbot?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "🛂",
      title: "G Permit Tracking",
      description: "Never miss a renewal. Get alerts 90 days before expiry with document checklist."
    },
    {
      icon: "💰",
      title: "Tax Optimization",
      description: "Navigate France/Germany/Italy tax treaties. Avoid double taxation. Maximize deductions."
    },
    {
      icon: "📋",
      title: "Quasi-Resident Status",
      description: "Calculate if you qualify. Prepare the paperwork. Claim Swiss tax benefits."
    },
    {
      icon: "🏥",
      title: "Insurance Guidance",
      description: "CMU vs LAMal decision. Which canton rules apply. Accident coverage explained."
    },
    {
      icon: "🚗",
      title: "Cross-Border Admin",
      description: "Vehicle registration, customs, fuel cards, highway vignette — all sorted."
    },
    {
      icon: "📊",
      title: "Payslip Decoder",
      description: "Understand Swiss payslips. Track AVS contributions. Plan retirement across borders."
    }
  ];

  const painPoints = [
    "Tax returns in TWO countries every year",
    "G permit renewals with ever-changing rules",
    "Quasi-resident calculations that make no sense",
    "Health insurance choice paralysis (CMU vs LAMal)",
    "AVS contributions you can't track or understand"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <span className="px-3 py-1 bg-purple-600 rounded text-sm font-medium">EN</span>
        <Link href="/frontalierbot/fr" className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">FR</Link>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-purple-600/20 rounded-full text-purple-400 text-sm mb-6">
            For 350,000+ Cross-Border Workers in Switzerland
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Stop Drowning in<br />Cross-Border Paperwork
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            FrontalierBot handles your G permit, taxes, insurance, and admin — 
            so you can focus on your job, not bureaucracy in two countries.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Join Waitlist
                </button>
              </form>
            ) : (
              <div className="p-4 bg-green-600/20 border border-green-500 rounded-lg">
                <p className="text-green-400">✓ You're on the list! We'll notify you at launch.</p>
              </div>
            )}
            <p className="text-sm text-gray-500 mt-3">Free pilot for first 50 frontaliers</p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Being a Frontalier Shouldn't Be This Hard</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-800 rounded-lg">
                <span className="text-red-400 text-xl">✗</span>
                <p className="text-gray-300">{point}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Your Cross-Border Admin Agent</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 bg-gray-800 rounded-xl hover:bg-gray-750 transition-colors">
                <span className="text-4xl mb-4 block">{feature.icon}</span>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Country-Specific Section */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Works for All Border Countries</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-xl text-center">
              <span className="text-4xl mb-3 block">🇫🇷</span>
              <h3 className="font-semibold mb-2">France</h3>
              <p className="text-sm text-gray-400">Geneva, Vaud, Jura, Basel. CMU vs LAMal. French tax returns. Quasi-resident rules.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl text-center">
              <span className="text-4xl mb-3 block">🇩🇪</span>
              <h3 className="font-semibold mb-2">Germany</h3>
              <p className="text-sm text-gray-400">Basel, Schaffhausen, Thurgau. German tax treaties. Social security coordination.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl text-center">
              <span className="text-4xl mb-3 block">🇮🇹</span>
              <h3 className="font-semibold mb-2">Italy</h3>
              <p className="text-sm text-gray-400">Ticino. Italian tax rules. INL declarations. Border municipality benefits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How FrontalierBot Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Connect Your Situation</h3>
              <p className="text-gray-400 text-sm">Tell us your home country, work canton, and current status. Takes 2 minutes.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Get Personalized Guidance</h3>
              <p className="text-gray-400 text-sm">Your agent analyzes your situation and flags what needs attention now.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Stay Compliant Automatically</h3>
              <p className="text-gray-400 text-sm">Reminders, document prep, and step-by-step guidance — all in Telegram.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-purple-400">350K+</p>
              <p className="text-gray-400">Frontaliers in Switzerland</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400">2</p>
              <p className="text-gray-400">Tax Returns per Year</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400">€3K+</p>
              <p className="text-gray-400">Average Savings Found</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Simplify Cross-Border Life?</h2>
          <p className="text-gray-400 mb-8">Join the waitlist and be first to try FrontalierBot when we launch.</p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                Join Waitlist
              </button>
            </form>
          ) : (
            <div className="p-4 bg-green-600/20 border border-green-500 rounded-lg max-w-md mx-auto">
              <p className="text-green-400">✓ You're on the list!</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>Part of <Link href="/" className="text-purple-400 hover:text-purple-300">Agent Mafia</Link> — AI agents that work for you</p>
        </div>
      </footer>
    </div>
  );
}
