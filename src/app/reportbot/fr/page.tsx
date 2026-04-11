'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function ReportBotFrPage() {
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
    subjectInput.value = 'ReportBot Signup (FR)';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'reportbot-landing-fr';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/reportbot/fr?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "📊",
      title: "Tableaux de bord KPI auto",
      description: "Connectez vos sources de données. Recevez des dashboards live avec revenus, churn, MRR, burn rate — mis à jour chaque matin."
    },
    {
      icon: "📬",
      title: "Briefings quotidiens",
      description: "Réveillez-vous avec un email concis : les chiffres d'hier, les anomalies détectées, et ce qui demande votre attention aujourd'hui."
    },
    {
      icon: "🔔",
      title: "Alertes intelligentes",
      description: "Ne plus attendre les revues mensuelles. Recevez des alertes instantanées quand vos KPIs franchissent des seuils."
    },
    {
      icon: "📈",
      title: "Analyse de tendances",
      description: "Semaine après semaine, mois après mois. Repérez les patterns avant qu'ils ne deviennent des problèmes — ou des opportunités."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">📊 ReportBot</Link>
        <div className="flex gap-4 items-center">
          <Link href="/reportbot" className="text-gray-400 hover:text-white">EN</Link>
          <Link href="/agents" className="text-gray-400 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 text-sm mb-6">
          📋 Briefings quotidiens & Tableaux de bord KPI
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Arrêtez de chercher vos chiffres.<br />
          <span className="text-blue-500">Laissez le rapport venir à vous.</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          ReportBot surveille vos KPIs business 24h/24 et livre des briefings quotidiens exploitables. 
          Fini de fouiller dans 5 outils pour savoir comment s'est passée la veille.
        </p>

        {/* Email Signup */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="max-w-md mx-auto mb-16">
            <div className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg font-semibold transition"
              >
                Accès Bêta
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">Accès bêta gratuit. Sans carte bancaire.</p>
          </form>
        ) : (
          <div className="max-w-md mx-auto mb-16 p-6 bg-green-500/20 rounded-lg">
            <p className="text-green-400 font-semibold">✅ Vous êtes sur la liste ! On vous préviendra au lancement de ReportBot.</p>
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
          <h2 className="text-3xl font-bold mb-10">Comment ça marche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Connectez vos données</h3>
              <p className="text-gray-400">Stripe, Google Analytics, CRM, tableaux — on intègre ce que vous utilisez</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Définissez vos KPIs</h3>
              <p className="text-gray-400">Dites-nous ce qui compte. Revenus, inscriptions, churn — on suit tout</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Réveillez-vous avec des insights</h3>
              <p className="text-gray-400">Briefing email quotidien à 7h. Dashboard toujours live. Alertes en temps réel</p>
            </div>
          </div>
        </div>

        {/* Pricing hint */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-blue-900/30 to-gray-800/30 border border-blue-800/50 mb-20">
          <h3 className="text-2xl font-bold mb-4">Tarifs</h3>
          <p className="text-gray-300 mb-4">
            <span className="text-4xl font-bold text-white">CHF 49</span>/mois
          </p>
          <p className="text-gray-400">KPIs illimités, utilisateurs illimités, sources de données illimitées.</p>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p className="mb-2">Partie de <Link href="/" className="text-blue-400 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
          <p>© 2026 Agent Mafia. Construit en Suisse 🇨🇭</p>
        </footer>
      </main>
    </div>
  );
}
