'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function SwissPostBotFRPage() {
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
    subjectInput.value = 'SwissPostBot Signup (FR)';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'swisspostbot-landing-fr';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/swisspostbot/fr?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "📦",
      title: "Suivi Intelligent",
      description: "Suivez tous vos colis La Poste, DHL, UPS et FedEx en un seul endroit. Alertes proactives."
    },
    {
      icon: "🛃",
      title: "Calculateur de Douane",
      description: "Connaissez vos frais de douane AVANT de commander. Plus de surprises à la livraison."
    },
    {
      icon: "📝",
      title: "Réclamations Automatiques",
      description: "Colis perdu ? Livraison endommagée ? Générez et déposez vos plaintes automatiquement."
    },
    {
      icon: "💰",
      title: "Récupération de Remboursements",
      description: "Suivez l'état de vos remboursements et escaladez automatiquement si La Poste ne répond pas."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">📦 SwissPostBot</Link>
        <div className="flex gap-4 items-center">
          <Link href="/swisspostbot" className="text-gray-400 hover:text-white">EN</Link>
          <Link href="/agents" className="text-gray-400 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-yellow-500/20 rounded-full text-yellow-400 text-sm mb-6">
          📦 Ne Perdez Plus Jamais un Colis
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Votre Assistant <span className="text-yellow-400">La Poste IA</span>
        </h1>
        
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Suivez vos colis, calculez la douane, déposez des réclamations et récupérez vos remboursements.
          Tout est automatisé. Fonctionne avec La Poste Suisse et les transporteurs internationaux.
        </p>

        {/* Email Form */}
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto mb-12">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
              className="px-6 py-4 rounded-lg bg-gray-800 border border-gray-700 text-white placeholder-gray-400 flex-1"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-bold text-black transition"
            >
              Rejoindre la Bêta
            </button>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-500 rounded-lg p-6 max-w-md mx-auto mb-12">
            <p className="text-green-400 font-bold">✅ Vous êtes inscrit ! Nous vous contacterons bientôt.</p>
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
          <h2 className="text-3xl font-bold mb-6 text-center">Ça vous parle ?</h2>
          <ul className="space-y-4 text-gray-300">
            <li className="flex items-start gap-3">
              <span className="text-red-400">😤</span>
              <span>CHF 50 de frais de douane pour une commande de CHF 30 ? "Frais de manutention" mon œil.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">😤</span>
              <span>"Votre colis a été livré" — mais ma boîte aux lettres est vide.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">😤</span>
              <span>Déposer une réclamation à La Poste prend 45 minutes et 3 formulaires.</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400">😤</span>
              <span>Le suivi dit "en douane" depuis 2 semaines. Aucune explication. Aucune mise à jour.</span>
            </li>
          </ul>
        </div>

        {/* How it works */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold mb-10">Comment ça marche</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">1</div>
              <h3 className="font-bold mb-2">Connectez vos suivis</h3>
              <p className="text-gray-400">Transférez vos confirmations d'expédition ou collez vos numéros de suivi</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">2</div>
              <h3 className="font-bold mb-2">Recevez des alertes intelligentes</h3>
              <p className="text-gray-400">Nous surveillons et vous alertons en cas de retards, douane ou problèmes</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center text-black font-bold text-xl mx-auto mb-4">3</div>
              <h3 className="font-bold mb-2">Résolution automatique</h3>
              <p className="text-gray-400">Un clic pour déposer des réclamations et suivre les remboursements</p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30 rounded-2xl p-10">
          <h2 className="text-3xl font-bold mb-4">Accès Anticipé : CHF 9/mois</h2>
          <p className="text-gray-300 mb-6">Suivi illimité, calculateur de douane, dépôt de réclamations inclus.</p>
          <Link href="#" onClick={() => document.querySelector('input')?.focus()} className="inline-block px-8 py-4 bg-yellow-500 hover:bg-yellow-600 rounded-lg font-bold text-black transition">
            Rejoindre la Bêta →
          </Link>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-gray-800 mt-20 py-8 text-center text-gray-500">
        <p>Créé par <Link href="/" className="text-yellow-400 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
      </footer>
    </div>
  );
}
