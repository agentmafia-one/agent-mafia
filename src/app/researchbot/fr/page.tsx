import Link from 'next/link'

export const metadata = {
  title: 'ResearchBot — Recherche Approfondie en Autopilote | Agent Mafia',
  description: 'Agent IA de recherche qui creuse pour vous. Obtenez des rapports complets, analyses concurrentielles et insights marché en quelques minutes.',
}

export default function ResearchBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/researchbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Accès Anticipé
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm mb-6">
          🔬 Agent IA de Recherche
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Des Heures de Recherche.<br />
          <span className="text-purple-400">En Quelques Minutes.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Arrêtez de vous noyer dans les onglets. ResearchBot explore les sources, 
          croise les données et livre des rapports complets pendant que vous décidez.
        </p>
        <a href="#signup" className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Rejoindre la Bêta →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">La Recherche est un Trou Noir Temporel</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🕳️</div>
            <h3 className="text-xl font-semibold mb-2">Surcharge d'Onglets</h3>
            <p className="text-gray-400">30 onglets ouverts, impossible de retrouver cette stat. Ça vous parle ?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Vampire de Temps</h3>
            <p className="text-gray-400">Une "recherche rapide" qui devient un rabbit hole de 4 heures. Encore.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🤔</div>
            <h3 className="text-xl font-semibold mb-2">Contexte Manquant</h3>
            <p className="text-gray-400">Vous avez des données, mais sont-elles fiables ? Actuelles ? Pas le temps de tout vérifier.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Laissez ResearchBot Faire le Travail</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📋</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Rapports Approfondis</h3>
            <p className="text-gray-400">Recherche complète avec sources, résumés et insights clés organisés pour vous.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔍</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Veille Concurrentielle</h3>
            <p className="text-gray-400">Suivez vos concurrents, analysez leurs stratégies, restez en avance avec un monitoring automatisé.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-purple-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📊</span>
            </div>
            <h3 className="text-xl font-semibold mb-2">Analyse de Marché</h3>
            <p className="text-gray-400">Tendances sectorielles, taille de marché, projections — tout vérifié et sourcé.</p>
          </div>
        </div>
      </section>

      {/* How it Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment Ça Marche</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Dites à ResearchBot Ce Que Vous Cherchez</h3>
              <p className="text-gray-400">"Analyse du marché européen des bornes de recharge" ou "Stratégie de prix du concurrent X"</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">L'IA Explore de Multiples Sources</h3>
              <p className="text-gray-400">Articles académiques, actualités, rapports, documents d'entreprise — tout croisé pour exactitude.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Recevez un Rapport Complet</h3>
              <p className="text-gray-400">Résumé exécutif, analyses détaillées, graphiques et liens sources — prêt à utiliser.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Conçu Pour</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="text-3xl mb-3">💼</div>
            <p className="font-medium">Analystes</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="text-3xl mb-3">🚀</div>
            <p className="font-medium">Fondateurs</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="text-3xl mb-3">📈</div>
            <p className="font-medium">Investisseurs</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <div className="text-3xl mb-3">🎯</div>
            <p className="font-medium">Stratèges</p>
          </div>
        </div>
      </section>

      {/* Pricing Hint */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">À partir de</p>
        <p className="text-4xl font-bold mb-4">99 CHF<span className="text-xl text-gray-400">/mois</span></p>
        <p className="text-gray-400">Recherches illimitées • Support prioritaire • Templates personnalisés</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-purple-900 to-gray-900 p-8 rounded-2xl border border-purple-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Accès Anticipé</h2>
          <p className="text-gray-300 mb-6">Rejoignez la bêta et obtenez 50% de réduction au lancement.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="ResearchBot Beta Signup (FR)" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre adresse email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
            />
            <button type="submit" className="w-full bg-purple-600 hover:bg-purple-700 py-3 rounded-lg font-semibold transition-colors">
              Demander l'Accès →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">Pas de spam. Juste les infos de lancement.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Créé par <Link href="/" className="text-purple-400 hover:text-purple-300">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
      </footer>
    </div>
  )
}
