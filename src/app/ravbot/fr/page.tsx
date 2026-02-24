'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function RAVBotFRPage() {
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
    subjectInput.value = 'RAVBot Signup (FR)';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'ravbot-landing-fr';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/ravbot/fr?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "📋",
      title: "Guide d'Inscription",
      description: "Inscription ORP/RAV étape par étape. Sachez exactement quels documents apporter à votre premier rendez-vous."
    },
    {
      icon: "⏰",
      title: "Suivi des Délais",
      description: "Ne ratez jamais un contrôle obligatoire. Alertes pour vos quotas de recherche et délais de reporting."
    },
    {
      icon: "📝",
      title: "Préparation Documents",
      description: "Génération automatique des formulaires. Téléchargez vos certificats. Suivez ce qui est en attente."
    },
    {
      icon: "💼",
      title: "Preuves de Recherche",
      description: "Enregistrez vos candidatures automatiquement. Générez les rapports mensuels. Atteignez vos quotas sans stress."
    },
    {
      icon: "🌐",
      title: "Support Multilingue",
      description: "Naviguez le système dans votre langue. Traductions en allemand, français, italien, anglais."
    },
    {
      icon: "💰",
      title: "Calculateur d'Indemnités",
      description: "Connaissez vos droits. Calculez vos indemnités chômage selon votre historique salarial."
    }
  ];

  const painPoints = [
    "Processus d'inscription confus avec délais stricts",
    "Documents requis qui varient selon le canton",
    "Quotas de recherche d'emploi difficiles à suivre",
    "Rendez-vous manqué = suspension des indemnités",
    "Barrière linguistique qui complique tout"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <Link href="/ravbot" className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">EN</Link>
        <span className="px-3 py-1 bg-purple-600 rounded text-sm font-medium">FR</span>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-purple-600/20 rounded-full text-purple-400 text-sm mb-6">
            Pour les Demandeurs d'Emploi en Suisse
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Le Chômage Suisse<br />Enfin Simplifié
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            L'ORP/RAV est un cauchemar administratif. Délais, quotas, documents — une erreur et vos indemnités s'arrêtent.
            Laissez RAVBot gérer la bureaucratie pendant que vous cherchez votre prochain emploi.
          </p>
          
          {/* Email Signup */}
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                Rejoindre la Beta
              </button>
            </form>
          ) : (
            <div className="text-green-400 text-lg">✓ Vous êtes inscrit ! On vous contacte bientôt.</div>
          )}
          <p className="text-sm text-gray-500 mt-3">Gratuit pendant la beta. Aucune carte requise.</p>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">La Galère ORP/RAV, On Connaît</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Comment RAVBot Vous Aide</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Comment Ça Marche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Connectez Votre Dossier</h3>
              <p className="text-gray-400 text-sm">Entrez votre canton et vos infos d'inscription. On adapte tout à votre situation.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Suivez Tout</h3>
              <p className="text-gray-400 text-sm">Délais, candidatures, rendez-vous — tout au même endroit avec rappels intelligents.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Restez Conforme</h3>
              <p className="text-gray-400 text-sm">Générez les rapports requis. Ne ratez jamais un quota. Gardez vos indemnités.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Ne Laissez Pas la Bureaucratie Vous Coûter Vos Indemnités</h2>
          <p className="text-gray-400 mb-8">Rejoignez la beta et laissez RAVBot gérer la paperasse pendant que vous vous concentrez sur votre recherche d'emploi.</p>
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 flex-1"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                Rejoindre la Beta
              </button>
            </form>
          ) : (
            <div className="text-green-400 text-lg">✓ Vous êtes inscrit !</div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>Créé par <Link href="/" className="text-purple-400 hover:text-purple-300">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
        </div>
      </footer>
    </div>
  );
}
