'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function IntrusionBotFRPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    await fetch('https://formsubmit.co/ajax/dev@agentmafia.one', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        _subject: 'IntrusionBot Beta Signup (FR)',
        agent: 'IntrusionBot',
        language: 'fr'
      })
    });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-950 via-red-950 to-slate-950 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/intrusionbot" className="text-sm text-slate-400 hover:text-white">EN</Link>
          <span className="text-sm text-white font-medium">FR</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-6">🛡️</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Stoppez <span className="text-red-400">Intrum & Inkasso</span> Avant Qu'ils Ne Vous Ruinent
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Un agent IA qui connaît le droit suisse du recouvrement mieux qu'eux. Contestez les créances injustes, corrigez les erreurs, protégez votre score de crédit.
        </p>
        
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 flex-1"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition"
            >
              Riposter →
            </button>
          </form>
        ) : (
          <div className="bg-green-500/20 border border-green-500/50 rounded-lg p-4 max-w-md mx-auto">
            <p className="text-green-300 font-medium">✓ C'est fait ! On vous prévient dès le lancement d'IntrusionBot.</p>
          </div>
        )}
        <p className="text-sm text-slate-500 mt-4">Rejoignez la liste d'attente • Expertise droit suisse du recouvrement</p>
      </section>

      {/* Problem */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Le Cauchemar du Recouvrement</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-4">📬</div>
            <h3 className="font-semibold mb-2">Lettres Menaçantes</h3>
            <p className="text-slate-400 text-sm">Un langage intimidant conçu pour vous faire paniquer et payer — même pour des dettes que vous ne devez pas.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="font-semibold mb-2">Frais Gonflés</h3>
            <p className="text-slate-400 text-sm">Les agences de recouvrement ajoutent des frais excessifs qui ne sont pas toujours justifiés légalement.</p>
          </div>
          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
            <div className="text-3xl mb-4">😰</div>
            <h3 className="font-semibold mb-2">Crédit Endommagé</h3>
            <p className="text-slate-400 text-sm">Votre extrait des poursuites reçoit des inscriptions qui vous suivent pendant des années — même pour des créances contestées.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Comment IntrusionBot Vous Protège</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="bg-red-500/20 rounded-lg p-3 text-2xl">📋</div>
            <div>
              <h3 className="font-semibold mb-1">Analyse Chaque Créance</h3>
              <p className="text-slate-400">Téléchargez la lettre de recouvrement. IntrusionBot vérifie si la dette est valide, si les frais sont légaux, et trouve les erreurs de procédure.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-red-500/20 rounded-lg p-3 text-2xl">⚖️</div>
            <div>
              <h3 className="font-semibold mb-1">Connaît le Droit Suisse</h3>
              <p className="text-slate-400">LP, prescription, opposition — l'agent connaît tous les outils juridiques pour vous protéger selon la loi sur la poursuite pour dettes.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="bg-red-500/20 rounded-lg p-3 text-2xl">✉️</div>
            <div>
              <h3 className="font-semibold mb-1">Rédige Votre Réponse</h3>
              <p className="text-slate-400">Obtenez une lettre de contestation professionnelle prête à envoyer — en français, allemand ou italien. Sans frais d'avocat.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-16 max-w-4xl mx-auto">
        <h2 className="text-2xl font-bold mb-8 text-center">Trois Étapes pour Riposter</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-semibold mb-2">Téléchargez la Lettre</h3>
            <p className="text-slate-400 text-sm">Photo ou PDF de l'avis de recouvrement</p>
          </div>
          <div>
            <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-semibold mb-2">Analyse IA</h3>
            <p className="text-slate-400 text-sm">IntrusionBot identifie les erreurs et problèmes légaux</p>
          </div>
          <div>
            <div className="bg-white/10 rounded-full w-12 h-12 flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-semibold mb-2">Recevez Votre Défense</h3>
            <p className="text-slate-400 text-sm">Lettre de réponse professionnelle prête à envoyer</p>
          </div>
        </div>
      </section>

      {/* Pricing hint */}
      <section className="px-6 py-16 max-w-4xl mx-auto text-center">
        <div className="bg-white/5 rounded-2xl p-8 border border-white/10">
          <p className="text-slate-400 mb-2">Une créance contestée peut vous coûter des milliers.</p>
          <p className="text-3xl font-bold mb-2">À partir de <span className="text-red-400">CHF 29</span>/litige</p>
          <p className="text-slate-500 text-sm">Moins de 30 minutes du temps d'un avocat</p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Ne Les Laissez Pas Gagner</h2>
        <p className="text-slate-400 mb-8">Obtenez un accès anticipé à IntrusionBot et ripostez contre le recouvrement abusif.</p>
        {!submitted ? (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
            <input
              type="email"
              required
              placeholder="votre@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder:text-slate-400 flex-1"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition"
            >
              Rejoindre la Liste
            </button>
          </form>
        ) : (
          <p className="text-green-400 font-medium">✓ Vous êtes inscrit !</p>
        )}
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 border-t border-white/10 text-center text-slate-500 text-sm">
        <p>Créé par <Link href="/" className="text-white hover:text-red-400">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  );
}
