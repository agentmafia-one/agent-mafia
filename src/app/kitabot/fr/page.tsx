import Link from 'next/link'

export const metadata = {
  title: 'KitaBot - Agent IA pour Crèches | Agent Mafia',
  description: 'Gérez les listes d\'attente des crèches suisses, suivez vos demandes et optimisez vos subventions. Fini le cauchemar des garderies.',
}

export default function KitaBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/kitabot" className="text-sm text-gray-400 hover:text-white">🇬🇧 English</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">👶</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">KitaBot</span> — Conquérez les Listes d'Attente
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Les listes d'attente des crèches suisses sont folles — 2-3 ans en ville. KitaBot suit vos demandes, trouve les places disponibles et gère vos demandes de subventions.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 Le Cauchemar des Crèches</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="font-bold mb-2">2-3 Ans d'Attente</h3>
            <p className="text-gray-400">Il faut s'inscrire avant même la naissance. Raté le délai ? Vous êtes coincés.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="font-bold mb-2">Multiples Candidatures</h3>
            <p className="text-gray-400">Postuler à 10+ crèches, suivre chacune manuellement, et espérer un miracle.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="font-bold mb-2">Subventions Confuses</h3>
            <p className="text-gray-400">Chaque canton a ses règles. Vous pourriez avoir droit à une aide sans le savoir.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ Comment KitaBot Fonctionne</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Ajoutez Vos Crèches</h3>
            <p className="text-gray-400">Indiquez-nous vos candidatures (ou laissez-nous trouver les meilleures)</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">L'IA Suit Tout</h3>
            <p className="text-gray-400">Nous surveillons les positions, relançons, détectons les nouvelles places</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Alertes + Subventions</h3>
            <p className="text-gray-400">Notification instantanée dès qu'une place se libère. On prépare aussi vos subventions.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Arrêtez de Stresser pour la Crèche</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta. On vous aide à naviguer le système suisse. Les premiers utilisateurs ont 3 mois gratuits.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="KitaBot Beta Signup (FR)" />
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
            Accès Anticipé
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-500">
        <p>Créé par <Link href="/" className="text-red-500 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  )
}
