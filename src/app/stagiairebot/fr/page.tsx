'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function StagiaireBotFR() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch('https://formsubmit.co/ajax/dev@agentmafia.one', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        _subject: 'StagiaireBot Beta Signup (FR)',
        agent: 'StagiaireBot',
        language: 'FR'
      })
    });
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-950 to-gray-900">
      {/* Navigation */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">
          Agent<span className="text-indigo-400">Mafia</span>
        </Link>
        <div className="flex gap-4 items-center">
          <Link href="/stagiairebot" className="text-gray-400 hover:text-white transition">
            🇬🇧 EN
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="px-6 py-20 max-w-4xl mx-auto text-center">
        <div className="text-6xl mb-6">🎓</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Votre Contrat de Stage est
          <span className="text-indigo-400"> Probablement Illégal</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Le droit du travail suisse protège aussi les stagiaires. StagiaireBot analyse 
          votre contrat, vérifie la rémunération équitable et défend vos droits.
        </p>
      </section>

      {/* Problem Section */}
      <section className="px-6 py-16 bg-black/30">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Le Piège du Stage 🪤
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">💰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Non-Payé ou Sous-Payé</h3>
              <p className="text-gray-400">
                De nombreux stages en Suisse paient en dessous du minimum ou rien du tout. 
                Connaissez vos droits légaux.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold text-white mb-2">Contrats Douteux</h3>
              <p className="text-gray-400">
                Clauses manquantes, termes illégaux, durée floue. La plupart des stagiaires 
                signent sans comprendre.
              </p>
            </div>
            <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
              <div className="text-3xl mb-4">😰</div>
              <h3 className="text-xl font-semibold text-white mb-2">Peur de Demander</h3>
              <p className="text-gray-400">
                Questionner l'employeur et risquer de perdre l'opportunité. 
                Vous avez besoin d'un levier.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">
            Comment StagiaireBot Vous Protège
          </h2>
          <div className="space-y-6">
            <div className="flex items-start gap-4 bg-gray-800/30 p-6 rounded-xl">
              <span className="text-2xl">📄</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Analyse du Contrat</h3>
                <p className="text-gray-400">
                  Téléchargez votre contrat de stage. Nous identifions les clauses illégales, 
                  protections manquantes et termes abusifs en quelques minutes.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-800/30 p-6 rounded-xl">
              <span className="text-2xl">💵</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Vérification du Salaire Équitable</h3>
                <p className="text-gray-400">
                  Comparez votre rémunération aux standards de l'industrie et aux minimums légaux. 
                  Sachez si vous êtes exploité.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-gray-800/30 p-6 rounded-xl">
              <span className="text-2xl">✉️</span>
              <div>
                <h3 className="text-xl font-semibold text-white mb-2">Modèles de Négociation</h3>
                <p className="text-gray-400">
                  Lettres professionnelles pour demander des modifications au contrat ou 
                  contester un traitement injuste. Rédigées par IA, juridiquement solides.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 bg-gradient-to-b from-transparent to-indigo-950/50">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ne Signez Pas à l'Aveugle
          </h2>
          <p className="text-gray-300 mb-8">
            Rejoignez la bêta. Faites analyser votre contrat avant qu'il ne soit trop tard.
          </p>
          
          {submitted ? (
            <div className="bg-green-500/20 border border-green-500 rounded-xl p-6">
              <p className="text-green-400 text-lg">
                ✓ Vous êtes inscrit ! Nous vous notifierons au lancement de StagiaireBot.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="votre@email.com"
                required
                className="px-6 py-4 rounded-xl bg-gray-800 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-indigo-500 flex-1 max-w-md"
              />
              <button
                type="submit"
                className="px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold rounded-xl transition"
              >
                Accès Anticipé
              </button>
            </form>
          )}

          <p className="text-gray-500 text-sm mt-4">
            Accès bêta gratuit. Pas de spam.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-12 border-t border-gray-800">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-500 mb-4">
            Fait partie de <Link href="/" className="text-indigo-400 hover:underline">Agent Mafia</Link> — 
            Agents IA qui font vraiment le travail
          </p>
          <p className="text-gray-600 text-sm">
            © 2026 Agent Mafia. Protection des stagiaires en Suisse.
          </p>
        </div>
      </footer>
    </main>
  );
}
