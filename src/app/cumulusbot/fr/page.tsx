import Link from 'next/link'

export const metadata = {
  title: 'CumulusBot — Maximisez vos Points Migros | Agent Mafia',
  description: 'Agent IA qui suit vos points Cumulus, trouve les meilleures offres et vous assure de ne jamais rater de récompenses. Pour les clients Migros en Suisse.',
}

export default function CumulusBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold text-orange-500">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/cumulusbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm font-medium transition">
            Accès Anticipé
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🛒</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Arrêtez de Perdre vos <span className="text-orange-500">Points Cumulus</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          CumulusBot suit vos achats Migros, trouve les offres bonus et vous rappelle avant l'expiration de vos points. Maximisez chaque franc dépensé.
        </p>
        <a href="#signup" className="inline-block bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-lg font-semibold transition">
          Rejoindre la Beta — Gratuit
        </a>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">La Frustration Cumulus</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <div className="text-3xl mb-4">😤</div>
            <h3 className="font-semibold mb-2">Points Bonus Ratés</h3>
            <p className="text-gray-400 text-sm">5x points sur des produits achetés hier ? Classique.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="font-semibold mb-2">Points Expirés</h3>
            <p className="text-gray-400 text-sm">Les points expirent après 3 ans. La plupart des gens oublient jusqu'à ce qu'il soit trop tard.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl">
            <div className="text-3xl mb-4">📱</div>
            <h3 className="font-semibold mb-2">App Surchargée</h3>
            <p className="text-gray-400 text-sm">L'app Migros est encombrée. Trouver les bonnes offres prend une éternité.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Comment CumulusBot Fonctionne</h2>
        <div className="space-y-6">
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">1</div>
            <div>
              <h3 className="font-semibold mb-1">Connectez Votre Compte Cumulus</h3>
              <p className="text-gray-400">Liaison sécurisée. Nous lisons uniquement vos points et historique d'achats.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">2</div>
            <div>
              <h3 className="font-semibold mb-1">Recevez des Alertes Personnalisées</h3>
              <p className="text-gray-400">Points bonus sur vos produits habituels. Alertes d'expiration. Meilleur moment pour utiliser vos points.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <div className="bg-orange-600 text-white w-8 h-8 rounded-full flex items-center justify-center font-bold shrink-0">3</div>
            <div>
              <h3 className="font-semibold mb-1">Maximisez Chaque Course</h3>
              <p className="text-gray-400">Résumé hebdomadaire des meilleures offres adaptées à vos habitudes. Ne ratez plus jamais de points gratuits.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Ce Que Vous Obtenez</h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="flex items-start gap-3">
            <span className="text-2xl">🔔</span>
            <div>
              <h3 className="font-semibold">Alertes Points Bonus</h3>
              <p className="text-gray-400 text-sm">Notifications en temps réel pour les offres multiplicateur sur vos produits habituels</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold">Tableau de Bord Points</h3>
              <p className="text-gray-400 text-sm">Suivez solde, taux d'accumulation et dates d'expiration en un seul endroit</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🎯</span>
            <div>
              <h3 className="font-semibold">Utilisation Intelligente</h3>
              <p className="text-gray-400 text-sm">Meilleur moment pour utiliser vos points selon votre solde et les offres à venir</p>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <span className="text-2xl">🛍️</span>
            <div>
              <h3 className="font-semibold">Intégration Liste de Courses</h3>
              <p className="text-gray-400 text-sm">Suggestions d'articles bonus à ajouter à votre panier avant le passage en caisse</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="max-w-xl mx-auto px-6 py-20">
        <div className="bg-gray-800/50 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Accès Anticipé</h2>
          <p className="text-gray-400 mb-6">Rejoignez la beta et arrêtez de perdre des points.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="CumulusBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://agentmafia.one/merci" />
            <input 
              type="email" 
              name="email" 
              placeholder="votre@email.com" 
              required
              className="w-full px-4 py-3 rounded-lg bg-gray-900 border border-gray-700 focus:border-orange-500 focus:outline-none"
            />
            <button 
              type="submit"
              className="w-full bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition"
            >
              Rejoindre la Beta — Gratuit
            </button>
          </form>
          <p className="text-xs text-gray-500 mt-4">Pas de spam. Désabonnement à tout moment.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8 text-center text-gray-500 text-sm">
        <p>Créé par <Link href="/" className="text-orange-500 hover:underline">Agent Mafia</Link> — Agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  )
}
