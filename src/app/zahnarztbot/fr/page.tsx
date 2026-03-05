import Link from 'next/link'

export const metadata = {
  title: 'ZahnarztBot - Agent IA Coûts Dentaires | Agent Mafia',
  description: 'Comparez les prix dentaires suisses, trouvez des options abordables à l\'étranger et comprenez votre couverture assurance. Arrêtez de surpayer vos soins dentaires.',
}

export default function ZahnarztBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-black text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-red-500">Agent Mafia</Link>
        <Link href="/zahnarztbot" className="text-sm text-gray-400 hover:text-white">🇬🇧 English</Link>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🦷</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          <span className="text-red-500">ZahnarztBot</span> — Échappez aux Prix Dentaires Suisses
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Les soins dentaires en Suisse sont hors de prix — une couronne peut coûter CHF 2'000+. ZahnarztBot compare les prix, trouve des dentistes de qualité à l'étranger et vérifie ce que votre assurance couvre vraiment.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">😤 Le Cauchemar Dentaire</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="font-bold mb-2">Prix 3-4x Plus Élevés</h3>
            <p className="text-gray-400">Un plombage en Suisse : CHF 300. Le même en Allemagne : 80€. Faites le calcul.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏥</div>
            <h3 className="font-bold mb-2">Assurance Rarement Incluse</h3>
            <p className="text-gray-400">La LAMal de base ne couvre pas le dentaire. Les complémentaires ont des limites et délais d'attente.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🌍</div>
            <h3 className="font-bold mb-2">Confusion Transfrontalière</h3>
            <p className="text-gray-400">Allemagne, France, Hongrie — où aller ? La qualité varie et l'organisation est un casse-tête.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">✨ Comment ZahnarztBot Fonctionne</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
            <h3 className="font-bold mb-2">Décrivez Votre Traitement</h3>
            <p className="text-gray-400">Couronne, implant, détartrage, appareil — dites-nous ce dont vous avez besoin</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
            <h3 className="font-bold mb-2">Comparez les Options</h3>
            <p className="text-gray-400">Obtenez les prix des dentistes suisses ET des cliniques vérifiées dans les pays voisins</p>
          </div>
          <div className="text-center">
            <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
            <h3 className="font-bold mb-2">Vérification Assurance</h3>
            <p className="text-gray-400">On analyse votre police et on vous dit exactement ce qui est couvert (souvent moins que prévu)</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto text-center">
          <div>
            <div className="text-4xl font-bold text-red-500">70%</div>
            <p className="text-gray-400">Économies moyennes à l'étranger</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">CHF 1'500+</div>
            <p className="text-gray-400">Économisés par implant</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-red-500">200+</div>
            <p className="text-gray-400">Cliniques vérifiées dans notre réseau</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">🎯 Arrêtez de Surpayer le Dentaire</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta. Obtenez une comparaison gratuite pour votre prochain traitement dentaire. Les premiers utilisateurs bénéficient de 3 mois gratuits.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="ZahnarztBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-colors"
          >
            Rejoindre la Bêta →
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-500">
        <p>Fait partie de <Link href="/" className="text-red-500 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  )
}
