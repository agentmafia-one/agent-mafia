import Link from 'next/link'

export const metadata = {
  title: 'CaisseBot — Optimiseur d\'Assurance Maladie Suisse | Agent Mafia',
  description: 'Agent IA qui compare les primes de caisse maladie et trouve la meilleure assurance pour vous. Économisez des milliers sur vos primes LAMal chaque année.',
}

export default function CaisseBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-emerald-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/caissebot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-emerald-600 hover:bg-emerald-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Comparer
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-emerald-500/20 text-emerald-300 px-4 py-1 rounded-full text-sm mb-6">
          🏥 Optimiseur de Caisse Maladie
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Vous Payez Trop Cher<br />
          <span className="text-emerald-400">Votre Caisse Maladie ?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          CaisseBot compare toutes les caisses maladie suisses, trouve la franchise
          optimale et gère le changement pour vous. Économisez CHF 1'000+ par an
          sans compromis sur la couverture.
        </p>
        <a href="#signup" className="inline-block bg-emerald-600 hover:bg-emerald-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Trouver Mes Économies →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Cauchemar des Primes</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="text-xl font-semibold mb-2">Les Primes Augmentent</h3>
            <p className="text-gray-400">Chaque année, même histoire : +5-10% d'augmentation. Votre salaire ne suit pas.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🔢</div>
            <h3 className="text-xl font-semibold mb-2">50+ Assureurs à Comparer</h3>
            <p className="text-gray-400">CSS, Helsana, Swica, Assura, Concordia... Qui a le temps de tout comparer ?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Manquez Novembre, Perdez</h3>
            <p className="text-gray-400">Vous ne pouvez changer qu'une fois par an. Ratez novembre et vous êtes bloqué 12 mois.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">L'Assurance Maladie en Chiffres</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">CHF 350+</p>
            <p className="text-sm text-gray-400 mt-2">Prime mensuelle moyenne</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">50+</p>
            <p className="text-sm text-gray-400 mt-2">Assureurs disponibles</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">CHF 1'200</p>
            <p className="text-sm text-gray-400 mt-2">Économies annuelles moyennes</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-emerald-400">30 Nov</p>
            <p className="text-sm text-gray-400 mt-2">Date limite de changement</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment CaisseBot Vous Fait Économiser</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">Partagez Votre Profil</h3>
            <p className="text-gray-400">Âge, canton, assureur actuel, habitudes santé. CaisseBot analyse vos besoins en 2 minutes.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">Comparez Toutes les Options</h3>
            <p className="text-gray-400">Chaque assureur, chaque franchise (CHF 300-2'500), chaque modèle (télémédecine, HMO, standard).</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">Changez Automatiquement</h3>
            <p className="text-gray-400">CaisseBot génère votre lettre de résiliation, l'envoie à temps et confirme votre nouvelle couverture.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Tout Ce Qu'il Vous Faut</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🔍</span>
            <div>
              <h3 className="font-semibold mb-1">Comparaison en Temps Réel</h3>
              <p className="text-gray-400 text-sm">50+ assureurs, mis à jour quotidiennement. Pas de données obsolètes.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold mb-1">Optimiseur de Franchise</h3>
              <p className="text-gray-400 text-sm">Selon votre historique santé, on recommande CHF 300, 500, 1000, 1500 ou 2500.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏥</span>
            <div>
              <h3 className="font-semibold mb-1">Vérification Accidents</h3>
              <p className="text-gray-400 text-sm">Vous travaillez 8h+ ? Vous payez peut-être une couverture que vous avez déjà.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📅</span>
            <div>
              <h3 className="font-semibold mb-1">Rappels de Délais</h3>
              <p className="text-gray-400 text-sm">On vous alerte en octobre pour ne jamais rater la fenêtre de novembre.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">✉️</span>
            <div>
              <h3 className="font-semibold mb-1">Lettres Auto-Générées</h3>
              <p className="text-gray-400 text-sm">Résiliation et changement prêts à signer et envoyer.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">👨‍👩‍👧‍👦</span>
            <div>
              <h3 className="font-semibold mb-1">Plans Famille</h3>
              <p className="text-gray-400 text-sm">Optimisez pour tout le ménage. Les enfants ont des règles différentes !</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Arrêtez de Surpayer Votre Assurance</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta et soyez les premiers à optimiser votre caisse maladie. CaisseBot lance avant la fenêtre de novembre 2026.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="CaisseBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-emerald-500"
          />
          <button 
            type="submit"
            className="bg-emerald-600 hover:bg-emerald-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Accès Anticipé
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Pas de spam. On vous notifie quand CaisseBot est prêt.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Membre de <Link href="/" className="text-emerald-400 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
        </div>
      </footer>
    </div>
  )
}
