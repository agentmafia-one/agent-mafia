import Link from 'next/link'

export const metadata = {
  title: 'PilierBot — Optimisez Votre 3ème Pilier Suisse | Agent Mafia',
  description: 'Agent IA qui maximise votre 3ème pilier suisse (Pilier 3a/3b). Comparez les prestataires, optimisez vos déductions fiscales et construisez votre retraite intelligemment.',
}

export default function PilierBotFrPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-indigo-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/pilierbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-indigo-600 hover:bg-indigo-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Optimiser Mon 3ème Pilier
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-indigo-500/20 text-indigo-300 px-4 py-1 rounded-full text-sm mb-6">
          🏦 Optimiseur de 3ème Pilier Suisse
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Votre 3ème Pilier<br />
          <span className="text-indigo-400">Travaille-t-il Assez?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          PilierBot compare tous les prestataires 3a suisses, maximise vos déductions fiscales 
          et trouve les fonds les plus performants. Économisez CHF 2'000+ d'impôts chaque année.
        </p>
        <a href="#signup" className="inline-block bg-indigo-600 hover:bg-indigo-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Optimiser Mon 3ème Pilier →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Problème du 3ème Pilier</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏦</div>
            <h3 className="text-xl font-semibold mb-2">Mauvais Prestataire</h3>
            <p className="text-gray-400">Les banques facturent des frais élevés pour des rendements faibles. Vous pourriez gagner 3x plus avec le bon fonds.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Déductions Manquées</h3>
            <p className="text-gray-400">CHF 7'056 de déduction max (2026). Pas au maximum? Vous donnez de l'argent au fisc.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-xl font-semibold mb-2">Pas de Stratégie</h3>
            <p className="text-gray-400">3a vs 3b? Plusieurs comptes? Timing de retrait? La plupart des gens improvisent.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Faits sur le 3ème Pilier Suisse</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-indigo-400">CHF 7'056</p>
            <p className="text-sm text-gray-400 mt-2">Déduction max 3a (salarié)</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-indigo-400">CHF 2'000+</p>
            <p className="text-sm text-gray-400 mt-2">Économie d'impôts moyenne</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-indigo-400">5+</p>
            <p className="text-sm text-gray-400 mt-2">Comptes recommandés</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-indigo-400">31 déc</p>
            <p className="text-sm text-gray-400 mt-2">Délai de versement</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Ce Que Fait PilierBot</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">🔍</div>
            <h3 className="text-xl font-semibold mb-2">Compare les Prestataires</h3>
            <p className="text-gray-400">Analyse tous les prestataires 3a suisses — frais, rendements, options de fonds. Trouvez votre match parfait.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Maximise les Rendements</h3>
            <p className="text-gray-400">Passez des comptes d'épargne aux fonds actions. Votre profil de risque, allocation optimisée.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Stratégie Fiscale</h3>
            <p className="text-gray-400">Plusieurs comptes, retraits échelonnés, décisions 3a vs 3b — tout calculé.</p>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-md mx-auto bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h2 className="text-2xl font-bold text-center mb-2">Accès Anticipé</h2>
          <p className="text-gray-400 text-center mb-6">Rejoignez la bêta — optimisez votre 3ème pilier avec l'IA</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="PilierBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              placeholder="votre@email.com"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-700 rounded-lg focus:outline-none focus:border-indigo-500"
            />
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 py-3 rounded-lg font-semibold transition-colors"
            >
              Rejoindre la Bêta →
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">Gratuit pendant la bêta. Pas de spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">Créé par Agent Mafia — Agents IA qui font vraiment le travail</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/" className="hover:text-white">Accueil</Link>
            <Link href="/agents" className="hover:text-white">Tous les Agents</Link>
            <a href="mailto:dev@agentmafia.one" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
