'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function FrontalierBotFRPage() {
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
    subjectInput.value = 'FrontalierBot Signup (FR)';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'frontalierbot-landing-fr';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/frontalierbot/fr?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "🛂",
      title: "Suivi du Permis G",
      description: "Ne ratez plus jamais un renouvellement. Alertes 90 jours avant avec checklist des documents."
    },
    {
      icon: "💰",
      title: "Optimisation Fiscale",
      description: "Naviguez les conventions fiscales France/Allemagne/Italie. Évitez la double imposition."
    },
    {
      icon: "📋",
      title: "Statut Quasi-Résident",
      description: "Calculez si vous êtes éligible. Préparez le dossier. Réclamez les avantages fiscaux suisses."
    },
    {
      icon: "🏥",
      title: "Guide Assurance Maladie",
      description: "CMU ou LAMal ? Quel canton s'applique ? Couverture accident expliquée clairement."
    },
    {
      icon: "🚗",
      title: "Admin Transfrontalière",
      description: "Immatriculation, douanes, cartes carburant, vignette — tout est géré."
    },
    {
      icon: "📊",
      title: "Décodeur de Fiches de Paie",
      description: "Comprenez vos bulletins suisses. Suivez vos cotisations AVS. Planifiez votre retraite."
    }
  ];

  const painPoints = [
    "Déclarations fiscales dans DEUX pays chaque année",
    "Renouvellements de permis G avec des règles changeantes",
    "Calculs quasi-résident incompréhensibles",
    "Choix paralysant entre CMU et LAMal",
    "Cotisations AVS impossibles à suivre ou comprendre"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 text-white">
      {/* Language Toggle */}
      <div className="absolute top-4 right-4 flex gap-2 z-50">
        <Link href="/frontalierbot" className="px-3 py-1 bg-gray-700 hover:bg-gray-600 rounded text-sm">EN</Link>
        <span className="px-3 py-1 bg-purple-600 rounded text-sm font-medium">FR</span>
      </div>

      {/* Hero Section */}
      <section className="pt-20 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block px-4 py-1 bg-purple-600/20 rounded-full text-purple-400 text-sm mb-6">
            Pour les 350 000+ travailleurs frontaliers en Suisse
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Stop à la Paperasse<br />Transfrontalière
          </h1>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            FrontalierBot gère votre permis G, impôts, assurances et admin — 
            pour que vous puissiez vous concentrer sur votre travail.
          </p>

          {/* Email Signup */}
          <div className="max-w-md mx-auto">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Votre email"
                  required
                  className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
                >
                  Rejoindre la Liste
                </button>
              </form>
            ) : (
              <div className="p-4 bg-green-600/20 border border-green-500 rounded-lg">
                <p className="text-green-400">✓ Vous êtes inscrit ! Nous vous préviendrons au lancement.</p>
              </div>
            )}
            <p className="text-sm text-gray-500 mt-3">Pilote gratuit pour les 50 premiers frontaliers</p>
          </div>
        </div>
      </section>

      {/* Pain Points */}
      <section className="py-16 px-4 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Être Frontalier Ne Devrait Pas Être Si Compliqué</h2>
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
          <h2 className="text-3xl font-bold text-center mb-12">Votre Agent Admin Transfrontalier</h2>
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
          <h2 className="text-2xl font-bold text-center mb-8">Fonctionne Pour Tous les Pays Limitrophes</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-gray-800 rounded-xl text-center">
              <span className="text-4xl mb-3 block">🇫🇷</span>
              <h3 className="font-semibold mb-2">France</h3>
              <p className="text-sm text-gray-400">Genève, Vaud, Jura, Bâle. CMU vs LAMal. Impôts français. Règles quasi-résident.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl text-center">
              <span className="text-4xl mb-3 block">🇩🇪</span>
              <h3 className="font-semibold mb-2">Allemagne</h3>
              <p className="text-sm text-gray-400">Bâle, Schaffhouse, Thurgovie. Conventions fiscales allemandes. Coordination sociale.</p>
            </div>
            <div className="p-6 bg-gray-800 rounded-xl text-center">
              <span className="text-4xl mb-3 block">🇮🇹</span>
              <h3 className="font-semibold mb-2">Italie</h3>
              <p className="text-sm text-gray-400">Tessin. Règles fiscales italiennes. Déclarations INL. Avantages communes frontalières.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">Comment FrontalierBot Fonctionne</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h3 className="font-semibold mb-2">Décrivez Votre Situation</h3>
              <p className="text-gray-400 text-sm">Indiquez votre pays de résidence, canton de travail et statut actuel. 2 minutes.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h3 className="font-semibold mb-2">Conseils Personnalisés</h3>
              <p className="text-gray-400 text-sm">Votre agent analyse votre situation et identifie ce qui nécessite attention.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h3 className="font-semibold mb-2">Restez Conforme Automatiquement</h3>
              <p className="text-gray-400 text-sm">Rappels, préparation des documents, guidance étape par étape — tout dans Telegram.</p>
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
              <p className="text-gray-400">Frontaliers en Suisse</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400">2</p>
              <p className="text-gray-400">Déclarations par An</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-purple-400">3K€+</p>
              <p className="text-gray-400">Économies Moyennes Trouvées</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Prêt à Simplifier Votre Vie de Frontalier ?</h2>
          <p className="text-gray-400 mb-8">Rejoignez la liste d'attente et soyez parmi les premiers à essayer FrontalierBot.</p>
          
          {!submitted ? (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Votre email"
                required
                className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none text-white"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-purple-600 hover:bg-purple-700 rounded-lg font-semibold transition-colors"
              >
                Rejoindre la Liste
              </button>
            </form>
          ) : (
            <div className="p-4 bg-green-600/20 border border-green-500 rounded-lg max-w-md mx-auto">
              <p className="text-green-400">✓ Vous êtes inscrit !</p>
            </div>
          )}
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center text-gray-500 text-sm">
          <p>Fait partie de <Link href="/" className="text-purple-400 hover:text-purple-300">Agent Mafia</Link> — Des agents IA qui travaillent pour vous</p>
        </div>
      </footer>
    </div>
  );
}
