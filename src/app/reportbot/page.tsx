'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ReportBotPage() {
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
    subjectInput.value = 'ReportBot Signup';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'reportbot-landing-en';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/reportbot?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "📊",
      title: "Auto KPI Dashboards",
      description: "Connect your data sources. Get live dashboards with revenue, churn, MRR, burn rate — updated every morning."
    },
    {
      icon: "📬",
      title: "Daily Briefings",
      description: "Wake up to a concise email: yesterday's numbers, anomalies detected, and what needs your attention today."
    },
    {
      icon: "🔔",
      title: "Smart Alerts",
      description: "Don't wait for monthly reviews. Get instant alerts when KPIs cross thresholds or trends shift unexpectedly."
    },
    {
      icon: "📈",
      title: "Trend Analysis",
      description: "Week-over-week, month-over-month trends. Spot patterns before they become problems — or opportunities."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">📊 ReportBot</Link>
        <div className="flex gap-4 items-center">
          <Link href="/reportbot/fr" className="text-gray-400 hover:text-white">FR</Link>
          <Link href="/agents" className="text-gray-400 hover:text-white">All Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
          📋 Daily Briefings & KPI Dashboards
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Stop chasing dashboards.<br />
          <span className="text-blue-500">Let the report come to you.</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          ReportBot monitors your business KPIs 24/7 and delivers actionable daily briefings. 
          No more digging through 5 tools to know how yesterday went.
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
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Join Beta
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">Free beta access. No credit card required.</p>
          </form>
        ) : (
          <div className="max-w-md mx-auto mb-16 p-6 bg-green-500/20 rounded-lg">
            <p className="text-green-400 font-semibold">✅ You're on the list! We'll notify you when ReportBot launches.</p>
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
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Connect Your Data</h3>
              <p className="text-gray-400">Stripe, Google Analytics, CRM, spreadsheets — we integrate with what you use</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Set Your KPIs</h3>
              <p className="text-gray-400">Tell us what matters. Revenue, signups, churn — we track it all</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Wake Up to Insights</h3>
              <p className="text-gray-400">Daily email briefing at 7am. Dashboard always live. Alerts in real-time</p>
            </div>
          </div>
        </div>

        {/* Pricing hint */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-blue-900/30 to-gray-800/30 border border-blue-800/50 mb-20">
          <h3 className="text-2xl font-bold mb-4">Pricing</h3>
          <p className="text-gray-300 mb-4">
            <span className="text-4xl font-bold text-white">$49</span>/month
          </p>
          <p className="text-gray-400">Unlimited KPIs, unlimited users, unlimited data sources.</p>
        </div>

        {/* FAQ */}
        <div className="mb-20 text-left">
          <h2 className="text-3xl font-bold mb-10 text-center">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {[
              { q: "What data sources do you support?", a: "Stripe, Google Analytics, Shopify, HubSpot, Intercom, and any spreadsheet. More integrations added monthly." },
              { q: "Is my data secure?", a: "Yes. All data is encrypted in transit and at rest. We never store raw data — only aggregated metrics. Swiss hosting available." },
              { q: "Can I customize which KPIs I track?", a: "Absolutely. You define what matters. We track everything and alert you on what you care about." },
              { q: "What if I have multiple businesses?", a: "One account, unlimited dashboards. Each business gets its own KPI set and briefing schedule." },
              { q: "Can I cancel anytime?", a: "Yes. No contracts, no commitments. Cancel with one click." }
            ].map((faq, i) => (
              <div key={i} className="p-6 rounded-xl bg-gray-800/50 border border-gray-700">
                <h3 className="text-lg font-semibold mb-2">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p className="mb-2">Part of <Link href="/" className="text-blue-400 hover:underline">Agent Mafia</Link> — AI agents that actually do the work</p>
          <p>© 2026 Agent Mafia. Built in Switzerland 🇨🇭</p>
        </footer>
      </main>
    </div>
  );
}
