import Link from 'next/link'

export const metadata = {
  title: 'PermisBot — Ne Ratez Jamais un Délai de Permis | Agent Mafia',
  description: 'Agent IA qui suit vos permis suisses, vous rappelle avant les renouvellements et vous guide dans les démarches. Restez en règle, sans stress.',
}

export default function PermisBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/permisbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Suivre Mon Permis
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm mb-6">
          🛂 Suivi de Permis Suisse
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Votre Permis Expire.<br />
          <span className="text-emerald-400">Savez-Vous Quand ?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          PermisBot suit votre permis B, C, L ou G, vous rappelle avant les délais
          et vous guide dans le processus de renouvellement. Plus jamais de mauvaises surprises.
        </p>
        <a href="#signup" className="inline-block bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Configurer Mes Rappels →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Problème des Permis</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-xl font-semibold mb-2">Délais Oubliés</h3>
            <p className="text-gray-400">Un renouvellement raté = vide juridique. Votre emploi, compte bancaire et vie en Suisse en danger.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Exigences Complexes</h3>
            <p className="text-gray-400">Chaque canton, chaque type de permis — règles différentes, documents différents. Bonne chance !</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏳</div>
            <h3 className="text-xl font-semibold mb-2">Longs Délais de Traitement</h3>
            <p className="text-gray-400">3-6 mois pour certains permis. Demande trop tardive ? Vous attendez avec un permis expiré.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Les Permis Suisses en Chiffres</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">2.2M+</p>
            <p className="text-sm text-gray-400 mt-2">Résidents étrangers en Suisse</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">5 ans</p>
            <p className="text-sm text-gray-400 mt-2">Validité permis B</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">3-6 mois</p>
            <p className="text-sm text-gray-400 mt-2">Délai moyen de traitement</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">10+ ans</p>
            <p className="text-sm text-gray-400 mt-2">Pour obtenir le permis C</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment Fonctionne PermisBot</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Entrez Vos Détails de Permis</h3>
              <p className="text-gray-400">Type de permis, canton, date d'expiration et votre situation. Prend 2 minutes.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Recevez des Rappels Intelligents</h3>
              <p className="text-gray-400">Nous vous notifions 6 mois, 3 mois et 1 mois avant l'expiration — avec les étapes exactes à suivre.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Suivez Votre Checklist Personnalisée</h3>
              <p className="text-gray-400">Documents nécessaires, formulaires à remplir, où soumettre — tout basé sur votre canton et type de permis.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Permit Types */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Nous Suivons Tous les Permis Suisses</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-emerald-400">✅ Permis de Séjour :</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Permis B</strong> — Séjour annuel (employé/famille)</li>
              <li>• <strong>Permis C</strong> — Établissement permanent (5-10 ans)</li>
              <li>• <strong>Permis L</strong> — Court séjour (&lt;1 an)</li>
              <li>• <strong>Permis G</strong> — Frontaliers</li>
              <li>• <strong>Permis S</strong> — Protection temporaire</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-emerald-400">✅ Suivi Également :</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Délais de regroupement familial</li>
              <li>• Exigences de changement de canton</li>
              <li>• Éligibilité au permis C</li>
              <li>• Prérequis de naturalisation</li>
              <li>• Changements de conditions d'emploi</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">Par an</p>
        <p className="text-4xl font-bold mb-4">CHF 49</p>
        <p className="text-gray-400">Rappels intelligents + checklist de renouvellement + guide documents • Résiliable à tout moment</p>
        <p className="text-sm text-gray-500 mt-4">La tranquillité d'esprit pour moins qu'un café par mois</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-emerald-900 to-gray-900 p-8 rounded-2xl border border-emerald-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Ne Ratez Plus Jamais un Délai</h2>
          <p className="text-gray-300 mb-6">Rejoignez la beta. Les 100 premiers utilisateurs ont 50% de réduction à vie.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="PermisBot Beta Signup (FR)" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none"
            />
            <select name="permit_type" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-emerald-500 focus:outline-none">
              <option value="">Votre type de permis</option>
              <option value="B">Permis B (Séjour)</option>
              <option value="C">Permis C (Établissement)</option>
              <option value="L">Permis L (Court séjour)</option>
              <option value="G">Permis G (Frontalier)</option>
              <option value="other">Autre / Pas sûr</option>
            </select>
            <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 py-3 rounded-lg font-semibold transition-colors">
              Accès Anticipé →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">Gratuit jusqu'au lancement. Pas de spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Créé par <Link href="/" className="text-emerald-400 hover:text-emerald-300">Agent Mafia</Link> — Des agents IA qui travaillent pour vous</p>
      </footer>
    </div>
  )
}
