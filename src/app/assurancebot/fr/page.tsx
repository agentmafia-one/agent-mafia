import Link from 'next/link'

export const metadata = {
  title: 'AssuranceBot — Optimisez Votre Caisse Maladie | Agent Mafia',
  description: 'Agent IA qui compare toutes les caisses maladie suisses, trouve la franchise idéale et vous aide à changer. Économisez CHF 1\'000+ par an.',
}

export default function AssuranceBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-green-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/assurancebot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Comparer Mon Assurance
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-green-500/20 text-green-300 px-4 py-1 rounded-full text-sm mb-6">
          🏥 Optimiseur de Caisse Maladie
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Payez-Vous Trop Cher<br />
          <span className="text-green-400">Votre Assurance Maladie?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          AssuranceBot compare toutes les caisses maladie suisses, trouve votre franchise idéale 
          et vous fait changer automatiquement. Économisez CHF 1'000+ par an.
        </p>
        <a href="#signup" className="inline-block bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Trouver Moins Cher →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Problème de l'Assurance Suisse</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Primes Explosives</h3>
            <p className="text-gray-400">+6% d'augmentation moyenne chaque année. Votre assureur compte sur votre inaction.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🤯</div>
            <h3 className="text-xl font-semibold mb-2">60+ Assureurs</h3>
            <p className="text-gray-400">Tout comparer manuellement? Personne n'a le temps. Vous gardez ce que vous avez.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Deadline Novembre</h3>
            <p className="text-gray-400">Ratez la fenêtre de changement et vous êtes bloqué une année de plus à trop payer.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">L'Assurance Maladie en Chiffres</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-green-400">CHF 350+</p>
            <p className="text-sm text-gray-400 mt-2">Prime mensuelle moyenne</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-green-400">CHF 2'500</p>
            <p className="text-sm text-gray-400 mt-2">Franchise max = plus d'économies</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-green-400">60+</p>
            <p className="text-sm text-gray-400 mt-2">Caisses maladie</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-green-400">30 Nov</p>
            <p className="text-sm text-gray-400 mt-2">Date limite de changement</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment Fonctionne AssuranceBot</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Partagez Votre Situation</h3>
              <p className="text-gray-400">Votre canton, âge, assureur actuel, et fréquence de visites chez le médecin.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">AssuranceBot Compare Tout</h3>
              <p className="text-gray-400">Les 60+ assureurs, toutes les franchises, tous les modèles (HMO, Telmed, standard). En secondes.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Changez en Un Clic</h3>
              <p className="text-gray-400">On génère votre lettre de résiliation et nouvelle demande. Vous signez, c'est tout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Franchise Explainer */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Quelle Franchise Choisir?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-green-400">✅ Franchise CHF 2'500 Si:</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Vous êtes en bonne santé, peu de visites</li>
              <li>• Vous avez moins de 40 ans, pas de maladie chronique</li>
              <li>• Vous avez des économies pour les imprévus</li>
              <li>• Vous pouvez assumer CHF 2'500 + 10% jusqu'à CHF 700</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-400">⚠️ Franchise CHF 300 Si:</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• Vous avez des conditions chroniques</li>
              <li>• Médicaments réguliers nécessaires</li>
              <li>• Visites fréquentes attendues</li>
              <li>• Préférez des coûts mensuels prévisibles</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">Service d'optimisation annuelle</p>
        <p className="text-4xl font-bold mb-4">CHF 49</p>
        <p className="text-gray-400">Comparaison complète + meilleure recommandation + aide au changement • Économie moyenne CHF 1'000+</p>
        <p className="text-sm text-gray-500 mt-4">Comparaison gratuite • Payez uniquement si vous changez</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-green-900 to-gray-900 p-8 rounded-2xl border border-green-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Arrêtez de Trop Payer</h2>
          <p className="text-gray-300 mb-6">Comparaison gratuite. Voyez combien vous pourriez économiser.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="AssuranceBot Beta Signup (FR)" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none"
            />
            <select name="canton" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none">
              <option value="">Votre canton</option>
              <option value="GE">Genève</option>
              <option value="VD">Vaud</option>
              <option value="ZH">Zürich</option>
              <option value="BE">Berne</option>
              <option value="BS">Bâle-Ville</option>
              <option value="other">Autre canton</option>
            </select>
            <select name="situation" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-green-500 focus:outline-none">
              <option value="">Votre situation</option>
              <option value="never-compared">Jamais comparé</option>
              <option value="years-ago">Comparé il y a longtemps</option>
              <option value="recent-increase">Viens de recevoir une augmentation</option>
              <option value="new-to-ch">Nouveau en Suisse</option>
            </select>
            <button type="submit" className="w-full bg-green-600 hover:bg-green-700 py-3 rounded-lg font-semibold transition-colors">
              Obtenir Ma Comparaison Gratuite →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">100% gratuit. Sans engagement. Pas de spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Créé par <Link href="/" className="text-green-400 hover:text-green-300">Agent Mafia</Link> — Des agents IA qui travaillent pour vous</p>
      </footer>
    </div>
  )
}
