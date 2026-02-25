'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function TicketBotPageFR() {
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
    subjectInput.value = 'TicketBot Signup (FR)';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'ticketbot-landing-fr';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/ticketbot/fr?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "🎫",
      title: "Analyse de l'amende",
      description: "Téléchargez votre amende. Nous analysons les erreurs de procédure, zones invalides et frais contestables."
    },
    {
      icon: "📝",
      title: "Génération automatique",
      description: "Obtenez une lettre de contestation professionnelle en français, allemand ou italien. Prête à envoyer."
    },
    {
      icon: "⏰",
      title: "Suivi des délais",
      description: "Ne manquez jamais votre délai de recours. Recevez des rappels avant l'expiration des 30 jours."
    },
    {
      icon: "📊",
      title: "Prédiction de succès",
      description: "Connaissez vos chances avant de contester. Basé sur des milliers de cas d'amendes en Suisse."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/ticketbot/fr" className="text-2xl font-bold">🎫 TicketBot</Link>
        <div className="flex gap-4 items-center">
          <Link href="/ticketbot" className="text-gray-400 hover:text-white">EN</Link>
          <Link href="/agents" className="text-gray-400 hover:text-white">Tous les agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-red-500/20 rounded-full text-red-400 text-sm mb-6">
          🚂 Contestez vos amendes transport
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Une amende TPG/SBB?<br />
          <span className="text-red-500">Ne payez pas encore.</span>
        </h1>
        
        <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
          Les amendes CFF, TPG, TL, BVB sont souvent contestables. TicketBot trouve 
          les erreurs de procédure et génère des lettres de recours professionnelles. 
          Taux de succès: 40%+ sur les contestations valides.
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
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-red-600 hover:bg-red-700 rounded-lg font-semibold transition"
              >
                Rejoindre la bêta
              </button>
            </div>
            <p className="text-gray-500 text-sm mt-3">Accès bêta gratuit. Sans carte de crédit.</p>
          </form>
        ) : (
          <div className="max-w-md mx-auto mb-16 p-6 bg-green-500/20 rounded-lg">
            <p className="text-green-400 font-semibold">✅ Vous êtes inscrit! Nous vous notifierons au lancement de TicketBot.</p>
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
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Téléchargez l'amende</h3>
              <p className="text-gray-400">Photo ou PDF de votre amende de transport</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Analyse automatique</h3>
              <p className="text-gray-400">L'IA analyse les erreurs de procédure et motifs valides</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-red-600 flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Envoyez votre recours</h3>
              <p className="text-gray-400">Lettre professionnelle prête à envoyer dans votre langue</p>
            </div>
          </div>
        </div>

        {/* Pricing hint */}
        <div className="p-8 rounded-xl bg-gradient-to-r from-red-900/30 to-gray-800/30 border border-red-800/50 mb-20">
          <h3 className="text-2xl font-bold mb-4">Tarifs</h3>
          <p className="text-gray-300 mb-4">
            <span className="text-4xl font-bold text-white">CHF 19</span> par contestation
          </p>
          <p className="text-gray-400">Payez uniquement si nous trouvons des motifs valides. Pas de succès, pas de frais.</p>
        </div>

        {/* Footer */}
        <footer className="text-center text-gray-500 text-sm border-t border-gray-800 pt-8">
          <p className="mb-2">Fait partie de <Link href="/" className="text-red-400 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
          <p>© 2026 Agent Mafia. Construit en Suisse 🇨🇭</p>
        </footer>
      </main>
    </div>
  );
}
