import Link from 'next/link'

export const metadata = {
  title: 'VikingBot — Optimiseur Financier pour Écoles de Langues | Agent Mafia',
  description: 'Agent IA qui optimise les finances des écoles de langues. Automatisez la facturation, suivez les paiements et maximisez votre trésorerie.',
}

export default function VikingBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-purple-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/vikingbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Commencer
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-purple-500/20 text-purple-300 px-4 py-1 rounded-full text-sm mb-6">
          🎓 IA Finance pour Écoles de Langues
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Gérer une École<br />
          <span className="text-purple-400">Ne Devrait Pas Dire Courir Après les Paiements</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          VikingBot gère la facturation, le suivi des paiements et l'optimisation de trésorerie 
          pour les écoles de langues. Concentrez-vous sur l'enseignement, l'IA gère le reste.
        </p>
        <a href="#signup" className="inline-block bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Optimiser Mon École →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Casse-Tête des Écoles de Langues</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💳</div>
            <h3 className="text-xl font-semibold mb-2">Chasser les Retards de Paiement</h3>
            <p className="text-gray-400">Les étudiants paient en retard, les échelonnements sont oubliés, et vous passez des heures à envoyer des rappels.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">L'Enfer de la Facturation Manuelle</h3>
            <p className="text-gray-400">Créer des factures pour chaque étudiant, chaque trimestre, chaque cours. Des heures d'admin chaque mois.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Aveuglement sur la Trésorerie</h3>
            <p className="text-gray-400">Quand l'argent arrivera-t-il? Qui est en retard? Quels trimestres sont rentables? Vous devinez.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Comment VikingBot Vous Aide</h2>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <div className="text-center p-6">
            <div className="text-4xl mb-4">🤖</div>
            <h3 className="text-xl font-semibold mb-2">Facturation Auto</h3>
            <p className="text-gray-400">Générez et envoyez des factures automatiquement selon les inscriptions et le planning.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Rappels de Paiement</h3>
            <p className="text-gray-400">Des rappels professionnels envoyés au bon moment. Plus de conversations gênantes.</p>
          </div>
          <div className="text-center p-6">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Tableau de Bord Trésorerie</h3>
            <p className="text-gray-400">Revenus attendus, montants en retard et tendances saisonnières en un coup d'œil.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Conçu pour les Écoles de Langues</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold">Suivi Multi-Trimestres</h4>
              <p className="text-gray-400 text-sm">Gérez les paiements semestriels, cours intensifs et leçons privées au même endroit.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold">Plans de Paiement</h4>
              <p className="text-gray-400 text-sm">Proposez des facilités de paiement et suivez automatiquement chaque échéance.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold">Factures QR Suisses</h4>
              <p className="text-gray-400 text-sm">Générez des factures avec QR-code compatibles avec toutes les banques suisses.</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-800/50 p-4 rounded-lg">
            <span className="text-2xl">✅</span>
            <div>
              <h4 className="font-semibold">Support Multilingue</h4>
              <p className="text-gray-400 text-sm">Envoyez factures et rappels en allemand, français, anglais ou italien.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-xl italic text-gray-300 mb-4">
            "Enfin, je peux me concentrer sur mes étudiants au lieu des tableurs. VikingBot a réduit 
            mon temps administratif de 80% et je suis payé plus vite."
          </p>
          <p className="text-purple-400">— Christian, Directeur d'École de Langues</p>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à Simplifier Votre École?</h2>
        <p className="text-gray-400 mb-8">Rejoignez la bêta — places limitées pour directeurs d'écoles.</p>
        
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="VikingBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-purple-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Rejoindre la Bêta
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Gratuit pendant la bêta. Aucune carte requise.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Créé par <Link href="/" className="text-purple-400 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
        </div>
      </footer>
    </div>
  )
}
