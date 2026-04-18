'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function CostLivingBotFRPage() {
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
    subjectInput.value = 'CostLivingBot Inscription Beta';
    form.appendChild(subjectInput);
    
    const sourceInput = document.createElement('input');
    sourceInput.name = 'source';
    sourceInput.value = 'costlivingbot-landing-fr';
    form.appendChild(sourceInput);
    
    const redirectInput = document.createElement('input');
    redirectInput.name = '_next';
    redirectInput.value = 'https://agentmafia.one/costlivingbot/fr?thanks=1';
    form.appendChild(redirectInput);
    
    document.body.appendChild(form);
    form.submit();
    setSubmitted(true);
  };

  const features = [
    {
      icon: "🏙️",
      title: "Comparaison par Canton",
      description: "Comparez le coût de la vie dans les 26 cantons. Loyer, courses, transport, assurance maladie — côte à côte, vrais chiffres."
    },
    {
      icon: "💰",
      title: "Calculateur de Salaire",
      description: "Entrez votre salaire brut. Obtenez le net après impôts, contributions sociales et déductions pilier. Par canton, par ville."
    },
    {
      icon: "📊",
      title: "Optimiseur de Budget",
      description: "Dites-nous votre style de vie. On vous montre le canton le moins cher qui correspond à vos exigences. Pas de surprises."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold">🏙️ CostLivingBot</Link>
        <div className="flex gap-4 items-center">
          <Link href="/costlivingbot" className="text-gray-400 hover:text-white">EN</Link>
          <Link href="/agents" className="text-gray-400 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm mb-6">
          🇨🇭 Intelligence du Coût de la Vie en Suisse
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Arrêtez de deviner ce que<br />
          <span className="text-green-400">coûte vraiment la Suisse.</span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
          Vous déménagez en Suisse ? Vous changez de canton ? CostLivingBot vous donne les vrais chiffres — loyer, impôts, assurance maladie, courses — par canton, par ville, par style de vie.
        </p>

        {/* CTA */}
        {submitted ? (
          <div className="bg-green-500/20 rounded-2xl p-8 max-w-md mx-auto">
            <div className="text-4xl mb-4">✅</div>
            <h3 className="text-xl font-bold mb-2">Vous êtes sur la liste !</h3>
            <p className="text-gray-400">On vous préviendra quand CostLivingBot sera prêt.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="votre@email.com"
              required
              className="flex-1 px-5 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              type="submit"
              className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-xl font-bold transition-colors"
            >
              Accès Anticipé
            </button>
          </form>
        )}
        <p className="text-sm text-gray-500 mt-4">Gratuit pendant la bêta. Jamais de spam.</p>
      </main>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Déménager à l&apos;aveugle, c&apos;est cher.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { icon: "😱", text: "Le loyer à Zürich est 40% plus cher qu&apos;à Berne — mais personne ne le dit avant de signer le bail." },
            { icon: "💸", text: "Les primes d&apos;assurance maladie varient de CHF 200+/mois entre cantons. Même couverture, prix différent." },
            { icon: "🧮", text: "Votre salaire net change de 15-25% selon le canton. Un salaire genevois ≠ un salaire zougiste." }
          ].map((item, i) => (
            <div key={i} className="bg-gray-800/50 rounded-2xl p-6">
              <div className="text-3xl mb-3">{item.icon}</div>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Ce que fait CostLivingBot.</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700/50">
              <div className="text-3xl mb-3">{f.icon}</div>
              <h3 className="text-lg font-bold mb-2">{f.title}</h3>
              <p className="text-gray-400">{f.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Comment ça marche.</h2>
        <div className="space-y-4">
          {[
            { step: "1", text: "Dites-nous d&apos;où vous déménagez — et où vous envisagez d&apos;aller." },
            { step: "2", text: "CostLivingBot récupère les vraies données : loyer, impôts, primes KK, abo CFF, courses." },
            { step: "3", text: "Obtenez une analyse personnalisée avec votre salaire exact, par canton." }
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-4 bg-gray-800/30 rounded-xl p-5">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center font-bold flex-shrink-0">
                {item.step}
              </div>
              <p className="text-gray-300">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing hint */}
      <section className="max-w-4xl mx-auto px-6 py-16 text-center">
        <div className="bg-gray-800/50 rounded-2xl p-8 border border-gray-700/50 inline-block">
          <p className="text-gray-400 mb-2">À partir de</p>
          <p className="text-4xl font-bold text-green-400">$49<span className="text-lg text-gray-500">/mois</span></p>
          <p className="text-gray-500 mt-2">Rentabilisé en un seul &quot;j&apos;aurais dû choisir Zug&quot;.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-10 text-gray-600 border-t border-gray-800">
        <p>Créé par <Link href="/" className="text-white hover:text-green-400">Agent Mafia</Link> — Des agents IA qui font vraiment le travail.</p>
      </footer>
    </div>
  );
}
