import Link from 'next/link'

export const metadata = {
  title: 'GarageBot - Agent IA Entretien Auto | Agent Mafia',
  description: 'Préparation contrôle technique, rappels d\'entretien et comparaison de prix. Arrêtez de surpayer pour l\'entretien auto en Suisse.',
}

export default function GarageBotFrPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/garagebot" className="text-sm text-gray-400 hover:text-white">🇬🇧 English</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🔧</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">GarageBot</span> — Réussissez votre CT, Économisez sur les Réparations
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Le contrôle technique suisse vous stresse. Les garages surfacturent les "pré-contrôles." GarageBot vous dit exactement quoi réparer, compare les prix et vous rappelle avant les échéances.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 Le Problème des Garages Suisses</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-bold mb-2">L'Angoisse du Contrôle</h3>
            <p className="text-gray-400">Tous les 2 ans, l'inspection approche. Échec = pas de conduite. Les garages poussent des "pré-contrôles" coûteux.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="font-bold mb-2">Surfacturation des Réparations</h3>
            <p className="text-gray-400">CHF 150/heure de main d'œuvre. Pièces majorées de 3x. La plupart des gens ignorent le juste prix.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🗓️</div>
            <h3 className="font-bold mb-2">Échéances Oubliées</h3>
            <p className="text-gray-400">Service oublié ? CT expiré ? Rouler sans contrôle = amendes et problèmes d'assurance.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ Comment Fonctionne GarageBot</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Ajoutez Votre Véhicule</h3>
            <p className="text-gray-400">Entrez les détails de votre voiture — nous suivons les dates de CT, intervalles d'entretien et garanties</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">Checklist de Préparation CT</h3>
            <p className="text-gray-400">Recevez une liste personnalisée des points contrôlés — réparez vous-même ou anticipez les coûts</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Comparez les Prix des Garages</h3>
            <p className="text-gray-400">Besoin de réparations ? Nous obtenons des devis de plusieurs garages près de chez vous — économisez 30-50% en moyenne</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-red-500">40%</div>
            <p className="text-gray-400">Économies moyennes sur les réparations</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">98%</div>
            <p className="text-gray-400">Taux de réussite CT avec notre préparation</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">0</div>
            <p className="text-gray-400">Échéances manquées avec nos rappels</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Arrêtez de Stresser pour Votre Voiture</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta. Rappels CT, checklists de préparation et devis au juste prix. Les premiers utilisateurs ont 3 mois gratuits.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="GarageBot Beta Signup (FR)" />
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
