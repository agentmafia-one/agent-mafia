import Link from 'next/link'

export const metadata = {
  title: 'SBBBot - Agent IA pour Remboursement CFF | Agent Mafia',
  description: 'Réclamez automatiquement vos remboursements pour retards de train CFF/SBB. Ne manquez plus jamais un remboursement.',
}

export default function SBBBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/sbbbot" className="text-sm text-gray-400 hover:text-white">🇬🇧 English</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🚂</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">SBBBot</span> — Récupérez vos Remboursements CFF
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Votre train était en retard ? Vous avez droit à une compensation. La plupart des gens ne réclament jamais. SBBBot dépose les réclamations automatiquement.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 Ça vous parle ?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="font-bold mb-2">Retards constants</h3>
            <p className="text-gray-400">Plus de 30 minutes de retard, encore. Mais qui a le temps de faire une réclamation ?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-bold mb-2">Formulaires compliqués</h3>
            <p className="text-gray-400">Le processus de remboursement CFF est pénible. La plupart abandonnent.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="font-bold mb-2">Argent perdu</h3>
            <p className="text-gray-400">Vous avez droit à des remboursements mais laissez des centaines de francs sur la table chaque année.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ Comment fonctionne SBBBot</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Connectez votre AG/Demi-tarif</h3>
            <p className="text-gray-400">Liez votre SwissPass en toute sécurité</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">Nous surveillons vos trajets</h3>
            <p className="text-gray-400">L'IA détecte les retards éligibles à compensation</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Réclamation automatique</h3>
            <p className="text-gray-400">Remboursements versés directement sur votre compte</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Arrêtez de perdre de l'argent à cause des retards</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta. Soyez notifié au lancement de SBBBot. Les premiers utilisateurs ont 3 mois gratuits.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="SBBBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            required
            placeholder="votre@email.com" 
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-bold transition-colors"
          >
            Accès anticipé
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-500 text-sm">
        <p>Créé par <Link href="/" className="text-red-500 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  )
}
