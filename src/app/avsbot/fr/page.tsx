import Link from 'next/link'

export const metadata = {
  title: 'AVSBot — Suivez Votre Retraite Suisse | Agent Mafia',
  description: 'Agent IA qui suit vos cotisations AVS, calcule votre future rente et détecte les années manquantes. Sachez exactement ce que vous recevrez.',
}

export default function AVSBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/avsbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Vérifier Mon AVS
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-6">
          🏦 Suivi Retraite Suisse
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Combien d'AVS Allez-Vous<br />
          <span className="text-blue-400">Vraiment Recevoir ?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          AVSBot suit vos cotisations AVS/AHV, trouve les années manquantes 
          et calcule votre vraie rente. Fini les devinettes.
        </p>
        <a href="#signup" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Calculer Ma Rente →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Problème AVS</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">❓</div>
            <h3 className="text-xl font-semibold mb-2">Aucune Clarté</h3>
            <p className="text-gray-400">Votre relevé AVS est confus. Combien allez-vous vraiment recevoir ? Personne ne sait.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🕳️</div>
            <h3 className="text-xl font-semibold mb-2">Années Manquantes</h3>
            <p className="text-gray-400">Les lacunes dans vos cotisations réduisent votre rente à vie. En avez-vous raté ?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📉</div>
            <h3 className="text-xl font-semibold mb-2">Max CHF 2'450/mois</h3>
            <p className="text-gray-400">C'est le maximum. La plupart reçoivent moins. Êtes-vous en bonne voie ?</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">L'AVS en Chiffres (2024)</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 2'450</p>
            <p className="text-sm text-gray-400 mt-2">Rente mensuelle maximale</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 1'225</p>
            <p className="text-sm text-gray-400 mt-2">Rente mensuelle minimale</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">44 ans</p>
            <p className="text-sm text-gray-400 mt-2">Période de cotisation complète</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">−2.3%</p>
            <p className="text-sm text-gray-400 mt-2">Par année manquante</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment Fonctionne AVSBot</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Téléchargez Votre Relevé AVS</h3>
              <p className="text-gray-400">Obtenez-le de votre Caisse de compensation ou via AHVeasy. Prend 2 minutes.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AVSBot Analyse Tout</h3>
              <p className="text-gray-400">Nous scannons les années manquantes, calculons votre rente projetée et signalons les problèmes.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Recevez Votre Prévision Retraite</h3>
              <p className="text-gray-400">Rapport clair : rente estimée, lacunes à combler et conseils d'optimisation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Who Needs This */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Qui a Besoin d'AVSBot ?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-blue-400">✅ Priorité Haute :</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• <strong>Expatriés</strong> — Vos années à l'étranger ont-elles été transférées ?</li>
              <li>• <strong>Indépendants</strong> — Payez-vous assez ?</li>
              <li>• <strong>Temps partiel</strong> — Plusieurs emplois = plusieurs lacunes</li>
              <li>• <strong>Parents</strong> — Les années de garde ont-elles été créditées ?</li>
              <li>• <strong>Plus de 50 ans</strong> — Encore le temps de combler les lacunes</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-400">⚠️ Erreurs Courantes :</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• "J'ai toujours travaillé" — Mais pas toujours en Suisse</li>
              <li>• "Mon employeur s'en occupe" — Les erreurs arrivent</li>
              <li>• "Je suis trop jeune" — Les lacunes s'accumulent</li>
              <li>• "C'est automatique" — Rien n'est automatique</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">Analyse unique</p>
        <p className="text-4xl font-bold mb-4">CHF 79</p>
        <p className="text-gray-400">Analyse AVS complète + prévision retraite + identification lacunes • Sans abonnement</p>
        <p className="text-sm text-gray-500 mt-4">Inclut un an de rappels de suivi</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-blue-900 to-gray-900 p-8 rounded-2xl border border-blue-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Connaissez Votre Future Rente</h2>
          <p className="text-gray-300 mb-6">Vérification gratuite pour voir si vous avez des lacunes. Analyse complète : CHF 79.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="AVSBot Beta Signup (FR)" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
            />
            <select name="situation" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none">
              <option value="">Votre situation</option>
              <option value="employed">Employé en Suisse</option>
              <option value="self-employed">Indépendant</option>
              <option value="expat">Expatrié (travaillé à l'étranger)</option>
              <option value="part-time">Temps partiel / Plusieurs emplois</option>
              <option value="approaching-retirement">Proche de la retraite (50+)</option>
            </select>
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors">
              Vérifier Mon AVS →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">Vérification initiale gratuite. Pas de spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Créé par <Link href="/" className="text-blue-400 hover:text-blue-300">Agent Mafia</Link> — Des agents IA qui travaillent pour vous</p>
      </footer>
    </div>
  )
}
