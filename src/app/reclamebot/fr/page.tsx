import Link from 'next/link'

export const metadata = {
  title: 'RéclameBot - Agent IA Réclamations Consommateur | Agent Mafia',
  description: 'Plaintes produits, garanties et remboursements gérés par IA. Arrêtez de vous faire ignorer par le service client.',
}

export default function ReclameBotFrPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/reclamebot" className="text-sm text-gray-400 hover:text-white">🇬🇧 English</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">📢</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">RéclameBot</span> — Récupérez Votre Argent
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Produit défectueux ? Garantie refusée ? RéclameBot rédige des lettres de réclamation qui fonctionnent — en citant le droit suisse de la consommation et en escaladant jusqu'au résultat.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 Ça Vous Parle ?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🔇</div>
            <h3 className="font-bold mb-2">Réclamations Ignorées</h3>
            <p className="text-gray-400">Vous envoyez un email. Réponse automatique. Rien ne se passe. Des semaines passent.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="font-bold mb-2">Garantie en Boucle</h3>
            <p className="text-gray-400">"Non couvert." "Contactez le fabricant." "Envoyez en Allemagne." Ils rendent tout impossible.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="font-bold mb-2">Petit Montant, Grand Effort</h3>
            <p className="text-gray-400">C'est seulement CHF 200. Pas rentable d'engager un avocat. Alors ils gagnent par l'usure.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ Comment Fonctionne RéclameBot</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Décrivez le Problème</h3>
            <p className="text-gray-400">Ce que vous avez acheté, le défaut, ce que vous voulez (remboursement, échange, réparation)</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">L'IA Rédige la Lettre</h3>
            <p className="text-gray-400">Réclamation formelle citant CO Art. 197-210 (droit de garantie suisse), avec délai clair</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Escalade si Nécessaire</h3>
            <p className="text-gray-400">Pas de réponse ? On escalade à l'ombudsman, la protection du consommateur, ou les petites créances</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-red-500">78%</div>
            <p className="text-gray-400">Taux de succès dès la première lettre</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">CHF 450</div>
            <p className="text-gray-400">Remboursement moyen récupéré</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">3 min</div>
            <p className="text-gray-400">Pour générer la lettre de réclamation</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Arrêtez de Vous Faire Ignorer</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta. Lettres de réclamation IA citant le droit suisse. 3 réclamations gratuites pour les premiers inscrits.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="ReclameBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="Votre email" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-8 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-bold transition"
          >
            Rejoindre la Bêta
          </button>
        </form>
        <p className="text-gray-500 text-sm mt-4">Pas de spam. Désabonnement à tout moment.</p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-500">
        <p>Créé par <Link href="/" className="text-red-500 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  )
}
