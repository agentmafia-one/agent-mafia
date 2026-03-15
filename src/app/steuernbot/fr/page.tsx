import Link from 'next/link'

export const metadata = {
  title: 'SteuernBot — Optimiseur Fiscal Cantonal Suisse | Agent Mafia',
  description: 'Agent IA qui compare les taux d\'imposition des 26 cantons suisses. Trouvez le meilleur endroit pour vivre et économisez des milliers de francs chaque année.',
}

export default function SteuernBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/steuernbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Optimiser
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-6">
          🏔️ Optimiseur Fiscal Cantonal
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Mauvais Canton =<br />
          <span className="text-blue-400">Mauvais Taux d'Impôt</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          SteuernBot compare les impôts sur le revenu et la fortune dans les 26 cantons suisses.
          Découvrez où vous paieriez le moins — et si déménager vaut le coup.
        </p>
        <a href="#signup" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Calculer Mes Économies →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Labyrinthe Fiscal Cantonal</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">26 Systèmes Fiscaux Différents</h3>
            <p className="text-gray-400">Chaque canton fixe ses propres taux. Genève vs Zoug peut représenter CHF 50K+ de différence sur le même salaire.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏘️</div>
            <h3 className="text-xl font-semibold mb-2">Coefficients Communaux</h3>
            <p className="text-gray-400">Même au sein d'un canton, la commune compte. Collonge-Bellerive vs Carouge ? Énorme différence.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Surprises sur l'Impôt Fortune</h3>
            <p className="text-gray-400">Certains cantons taxent votre patrimoine agressivement. Votre portefeuille peut coûter plus cher que votre salaire.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">La Fiscalité Suisse en Chiffres</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">26</p>
            <p className="text-sm text-gray-400 mt-2">Cantons avec des taux différents</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">2'200+</p>
            <p className="text-sm text-gray-400 mt-2">Communes avec leurs propres coefficients</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">22% → 45%</p>
            <p className="text-sm text-gray-400 mt-2">Fourchette du taux marginal maximum</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 50K+</p>
            <p className="text-sm text-gray-400 mt-2">Économies annuelles potentielles</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment SteuernBot Trouve Votre Canton Optimal</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">Entrez Vos Finances</h3>
            <p className="text-gray-400">Revenus, fortune, situation familiale, déductions. SteuernBot modélise votre situation fiscale complète.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">Comparez Tous les Cantons</h3>
            <p className="text-gray-400">Voyez votre facture fiscale exacte dans chaque canton et commune. Classés du moins cher au plus cher.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">Vue d'Ensemble Complète</h3>
            <p className="text-gray-400">Intégrez les différences de loyer, coûts de transport, style de vie. Déménager en vaut-il vraiment la peine ?</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Tout Ce Dont Vous Avez Besoin</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🗺️</span>
            <div>
              <h3 className="font-semibold mb-1">Les 26 Cantons Comparés</h3>
              <p className="text-gray-400 text-sm">De Zoug à Genève, Schwytz à Vaud. Chaque système fiscal modélisé.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏠</span>
            <div>
              <h3 className="font-semibold mb-1">Précision au Niveau Communal</h3>
              <p className="text-gray-400 text-sm">Pas seulement les taux cantonaux — les coefficients réels de 2'200+ communes.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">💎</span>
            <div>
              <h3 className="font-semibold mb-1">Calculateur Impôt Fortune</h3>
              <p className="text-gray-400 text-sm">Votre portefeuille, immobilier, actifs. Voyez où la fortune est taxée le moins.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <div>
              <h3 className="font-semibold mb-1">Optimisation Familiale</h3>
              <p className="text-gray-400 text-sm">Marié vs célibataire, déductions enfants, crédits garde. Tout pris en compte.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🚂</span>
            <div>
              <h3 className="font-semibold mb-1">Analyse Coûts de Transport</h3>
              <p className="text-gray-400 text-sm">Moins d'impôts à Zoug mais travaillez à Zurich ? On calcule si le trajet en vaut la peine.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📈</span>
            <div>
              <h3 className="font-semibold mb-1">Projections Multi-Années</h3>
              <p className="text-gray-400 text-sm">Planifiez. Voyez comment les économies fiscales s'accumulent sur 5, 10, 20 ans.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Trouvez Votre Canton Optimal</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta et soyez le premier à comparer tous les cantons suisses. Arrêtez de laisser de l'argent sur la table.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="SteuernBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-blue-500"
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Accès Anticipé
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Pas de spam. On vous notifie quand SteuernBot est prêt.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Membre de <Link href="/" className="text-blue-400 hover:underline">Agent Mafia</Link> — Agents IA qui font vraiment le travail</p>
        </div>
      </footer>
    </div>
  )
}
