'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RAVBotPage() {
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
    subjectInput.value = 'RAVBot Signup';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'ravbot-landing-en';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/ravbot?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "📋",
      title: "Registration Guide",
      description: "Step-by-step RAV/ORP registration. Know exactly what documents you need before your first appointment."
    },
    {
      icon: "⏰",
      title: "Deadline Tracker",
      description: "Never miss a mandatory check-in. Get alerts for job application quotas and reporting deadlines."
    },
    {
      icon: "📝",
      title: "Document Prep",
      description: "Auto-generate required forms. Upload certificates. Track what's pending vs approved."
    },
    {
      icon: "💼",
      title: "Job Search Proof",
      description: "Log applications automatically. Generate monthly reports. Meet your quota without the spreadsheet chaos."
    },
    {
      icon: "🌐",
      title: "Multi-Language Support",
      description: "Navigate the system in your language. Translations for German, French, Italian, English."
    },
    {
      icon: "💰",
      title: "Benefits Calculator",
      description: "Know your entitlements. Calculate unemployment benefits based on your salary history."
    }
  ];

  const painPoints = [
    "Confusing registration process with strict deadlines",
    "Document requirements that change by canton",
    "Job application quotas that are hard to track",
    "Missed appointments = suspended benefits",
    "Language barriers make everything harder"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <span className="px-3 py-1 bg-purple-600 rounded text-sm font-medium">EN</span>
        <Link href="/ravbot/fr" className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">FR</Link>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-purple-600/20 rounded-full text-purple-400 text-sm mb-6">
            For Job Seekers Navigating Swiss Unemployment
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Swiss Unemployment<br />Made Simple
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            RAV/ORP navigation is a nightmare. Deadlines, quotas, documents — one mistake and your benefits stop.
            Let RAVBot handle the bureaucracy so you can focus on finding your next job.
          </p>
          
          {/* Email Signup */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                Join Beta
              </button>
            </form>
          ) : (
            <div className="text-green-400 text-lg">✓ You're on the list! We'll be in touch soon.</div>
          )}
          <p className="text-sm text-gray-500 mt-3">Free during beta. No credit card required.</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">The RAV/ORP Struggle Is Real</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {painPoints.map((point, i) => (
              <div key={i} className="flex items-start gap-3 p-4 bg-gray-800 rounded-lg">
                <span className="text-red-400">✗</span>
                <span className="text-gray-300">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How RAVBot Helps</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className="p-6 bg-gray-800/50 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-colors">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4 bg-gray-800/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Connect Your Case</h3>
              <p className="text-gray-400 text-sm">Enter your canton and registration details. We'll customize everything to your situation.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Track Everything</h3>
              <p className="text-gray-400 text-sm">Deadlines, applications, appointments — all in one place with smart reminders.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Stay Compliant</h3>
              <p className="text-gray-400 text-sm">Generate required reports. Never miss a quota. Keep your benefits flowing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Don't Let Bureaucracy Cost You Benefits</h2>
          <p className="text-gray-400 mb-8">Join the beta and let RAVBot handle the paperwork while you focus on your job search.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                Join Beta
              </button>
            </form>
          ) : (
            <div className="text-green-400 text-lg">✓ You're on the list!</div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>Built by <Link href="/" className="text-purple-400 hover:text-purple-300">Agent Mafia</Link> — AI agents that actually do the work</p>
        </div>
      </footer>
    </div>
  );
}
