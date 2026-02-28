import Link from 'next/link'

export const metadata = {
  title: 'WohnungBot — Agent IA de Recherche d\'Appartement en Suisse',
  description: 'Arrêtez d\'envoyer 100+ dossiers manuellement. WohnungBot postule automatiquement, gère votre dossier et suit les réponses.',
}

export default function WohnungBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/wohnungbot" className="text-slate-400 hover:text-white text-sm">🇬🇧 EN</Link>
          <Link href="/#agents" className="text-slate-400 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🏢</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          100+ Candidatures.<br/>
          <span className="text-emerald-400">Zéro Réponse ?</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          La recherche d'appartement en Suisse est cassée. WohnungBot postule automatiquement, 
          gère votre dossier et suit chaque réponse — pour que vous puissiez enfin arrêter de rafraîchir Homegate.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">🤖 Candidature Auto</span>
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">📁 Gestion de Dossier</span>
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">📊 Suivi des Réponses</span>
        </div>
      </section>

      {/* Problem */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">La Crise du Logement Est Réelle</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">📨</div>
              <h3 className="text-white font-semibold mb-2">Fatigue des Candidatures</h3>
              <p className="text-slate-400">Copier-coller la même lettre 100 fois. Télécharger votre dossier. Encore. Et encore.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">👻</div>
              <h3 className="text-white font-semibold mb-2">Ignoré par les Régies</h3>
              <p className="text-slate-400">Pas de réponse. Même pas un refus. Juste... le silence. Pendant des semaines.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">⚡</div>
              <h3 className="text-white font-semibold mb-2">Annonces Parties en Heures</h3>
              <p className="text-slate-400">Le temps de voir, postuler et relancer — c'est déjà loué.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-white font-semibold mb-2">Chaos du Dossier</h3>
              <p className="text-slate-400">Extrait de poursuites, fiches de salaire, copie ID, références... format différent pour chaque régie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Comment WohnungBot Fonctionne</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📁</span>
              </div>
              <h3 className="text-white font-semibold mb-2">1. Téléchargez Une Fois</h3>
              <p className="text-slate-400 text-sm">Ajoutez votre dossier une fois — ID, extrait de poursuites, fiches de salaire, références. On le formate pour chaque plateforme.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🎯</span>
              </div>
              <h3 className="text-white font-semibold mb-2">2. Définissez vos Critères</h3>
              <p className="text-slate-400 text-sm">Lieu, budget, nombre de pièces, date d'emménagement. WohnungBot surveille Homegate, Immoscout, et plus.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-emerald-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">🚀</span>
              </div>
              <h3 className="text-white font-semibold mb-2">3. Candidature Auto</h3>
              <p className="text-slate-400 text-sm">Nouvelle annonce ? Candidature envoyée en minutes. Lettre personnalisée. Dossier parfait. Réponse suivie.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-emerald-400 mb-2">100+</div>
              <p className="text-slate-400">Candidatures moyennes avant de trouver un appartement à Zurich</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-emerald-400 mb-2">0.5%</div>
              <p className="text-slate-400">Taux de vacance dans les grandes villes suisses</p>
            </div>
            <div className="bg-slate-800/50 p-8 rounded-xl border border-slate-700">
              <div className="text-4xl font-bold text-emerald-400 mb-2">2 heures</div>
              <p className="text-slate-400">Temps moyen avant qu'une bonne annonce disparaisse</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-emerald-900/50 to-teal-900/50 p-8 rounded-2xl border border-emerald-700/50 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Rejoignez la Beta</h2>
          <p className="text-slate-300 mb-6">Soyez parmi les premiers à automatiser votre recherche d'appartement. Accès prioritaire + réduction à vie.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="WohnungBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email"
              placeholder="votre@email.com" 
              required
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-emerald-500"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold rounded-lg transition-colors"
            >
              Accès Anticipé
            </button>
          </form>
          <p className="text-slate-500 text-xs mt-4">Pas de spam. On vous notifie au lancement de WohnungBot.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">Créé par <Link href="/" className="text-emerald-400 hover:text-emerald-300">Agent Mafia</Link> — Des agents IA qui font vraiment le travail.</p>
          <div className="flex gap-6">
            <Link href="/#agents" className="text-slate-400 hover:text-white text-sm">Tous les Agents</Link>
            <Link href="/wohnungbot" className="text-slate-400 hover:text-white text-sm">English</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
