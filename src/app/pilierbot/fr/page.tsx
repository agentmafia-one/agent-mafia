import Link from 'next/link'

export const metadata = {
  title: 'PilierBot — Optimiseur 3ème Pilier Suisse | Agent Mafia',
  description: 'Agent IA qui maximise votre épargne retraite 3a. Trouvez les meilleurs prestataires, optimisez vos déductions fiscales et bâtissez votre patrimoine.',
}

export default function PilierBotFrPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/pilierbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Optimiser
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-6">
          🏦 Optimiseur Retraite Suisse
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Votre 3ème Pilier<br />
          <span className="text-blue-400">Sous-performe</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          PilierBot analyse vos options de pilier 3a, trouve les prestataires avec les frais 
          les plus bas et les meilleurs rendements, et maximise vos économies d'impôts.
        </p>
        <a href="#signup" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Optimiser Mon 3a →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Problème du Pilier 3a</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📉</div>
            <h3 className="text-xl font-semibold mb-2">Les Banques Ne Paient Rien</h3>
            <p className="text-gray-400">Les comptes 3a bancaires traditionnels rapportent 0.5% ou moins. L'inflation ronge votre épargne retraite chaque année.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Les Frais Cachés Tuent les Rendements</h3>
            <p className="text-gray-400">Certains fonds 3a facturent plus de 1.5% de frais. Sur 30 ans, ce sont des dizaines de milliers perdus.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🤷</div>
            <h3 className="text-xl font-semibold mb-2">Quel Prestataire Choisir ?</h3>
            <p className="text-gray-400">VIAC, Finpension, Frankly, les banques... 20+ options avec des stratégies, frais et performances différentes.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Le Pilier 3a en Chiffres</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 7'056</p>
            <p className="text-sm text-gray-400 mt-2">Cotisation max 2024 (salarié)</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">~25%</p>
            <p className="text-sm text-gray-400 mt-2">Économies d'impôts sur cotisations</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 100K+</p>
            <p className="text-sm text-gray-400 mt-2">Différence de frais sur 30 ans</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">31 Déc</p>
            <p className="text-sm text-gray-400 mt-2">Date limite cotisation annuelle</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment PilierBot Vous Aide</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
            <h3 className="text-xl font-semibold mb-2">Analyse Votre Situation</h3>
            <p className="text-gray-400">Indiquez votre âge, canton, revenus et tolérance au risque. Nous calculons votre stratégie optimale.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
            <h3 className="text-xl font-semibold mb-2">Compare Tous les Prestataires</h3>
            <p className="text-gray-400">VIAC, Finpension, Frankly, True Wealth, banques — nous comparons frais, performance et fonctionnalités.</p>
          </div>
          <div className="text-center">
            <div className="bg-blue-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
            <h3 className="text-xl font-semibold mb-2">Maximise Vos Rendements</h3>
            <p className="text-gray-400">Recevez une recommandation personnalisée avec les économies projetées. Nous vous aidons à changer si nécessaire.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Ce Que Vous Obtenez</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold mb-1">Comparaison des Prestataires</h3>
              <p className="text-gray-400 text-sm">Analyse côte à côte de tous les prestataires 3a suisses avec calculs de frais réels.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🧮</span>
            <div>
              <h3 className="font-semibold mb-1">Optimisation Fiscale</h3>
              <p className="text-gray-400 text-sm">Calculez les économies d'impôts exactes par canton et optimisez le timing des cotisations.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📈</span>
            <div>
              <h3 className="font-semibold mb-1">Stratégie d'Investissement</h3>
              <p className="text-gray-400 text-sm">Choisissez entre prudent, équilibré ou agressif selon votre horizon.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔔</span>
            <div>
              <h3 className="font-semibold mb-1">Rappels de Délais</h3>
              <p className="text-gray-400 text-sm">Ne manquez plus jamais la date limite du 31 décembre pour vos cotisations.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold mb-1">Stratégie Multi-Comptes</h3>
              <p className="text-gray-400 text-sm">Apprenez à répartir votre 3a sur 5 comptes pour des retraits échelonnés.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔄</span>
            <div>
              <h3 className="font-semibold mb-1">Assistance au Transfert</h3>
              <p className="text-gray-400 text-sm">Changez de prestataire en douceur sans perdre un seul jour de croissance.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Arrêtez de Perdre de l'Argent en Frais</h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta et obtenez une analyse d'optimisation 3a gratuite. Voyez exactement 
          combien vous pourriez économiser en changeant de prestataire.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="PilierBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-blue-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Analyse Gratuite
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Rejoignez 50+ épargnants suisses qui optimisent leur retraite</p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">Créé par Agent Mafia — Agents IA qui font vraiment le travail</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white">Tous les Agents</Link>
            <Link href="/pilierbot" className="hover:text-white">English</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
