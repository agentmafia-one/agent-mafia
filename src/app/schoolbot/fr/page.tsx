import Link from 'next/link'

export const metadata = {
  title: 'SchoolBot — Naviguez le Système Scolaire Suisse | Agent Mafia',
  description: 'Agent IA qui guide les parents expats dans le système scolaire suisse. Inscription, langues, public vs privé — tout décodé.',
}

export default function SchoolBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-blue-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/schoolbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Obtenir de l'Aide
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-blue-500/20 text-blue-300 px-4 py-1 rounded-full text-sm mb-6">
          🏫 Navigateur Scolaire Suisse
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          L'École Suisse Est Complexe.<br />
          <span className="text-blue-400">Décodons-la Ensemble.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          SchoolBot aide les parents expats à naviguer l'inscription scolaire, les cours de langue, 
          les options public vs privé, et les règles cantonales. Stop aux devinettes.
        </p>
        <a href="#signup" className="inline-block bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Aidez-moi à Inscrire Mon Enfant →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Défi des Parents Expats</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🗣️</div>
            <h3 className="text-xl font-semibold mb-2">Choc Linguistique</h3>
            <p className="text-gray-400">Votre enfant commence l'école en allemand, français ou italien — selon le canton. Sans transition.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">26 Systèmes Différents</h3>
            <p className="text-gray-400">Chaque canton a ses propres règles, calendrier et processus d'inscription. Ce qui marche à Zurich échoue à Genève.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">Labyrinthe du Privé</h3>
            <p className="text-gray-400">Les écoles internationales coûtent CHF 25-50K/an. Lesquelles valent le coup ? Lesquelles ont des places ?</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">L'École Suisse en Chiffres</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">26</p>
            <p className="text-sm text-gray-400 mt-2">Systèmes cantonaux différents</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">4 langues</p>
            <p className="text-sm text-gray-400 mt-2">Allemand/Français/Italien/Romanche</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">CHF 35K</p>
            <p className="text-sm text-gray-400 mt-2">Frais moyens école internationale</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-blue-400">4-6 ans</p>
            <p className="text-sm text-gray-400 mt-2">Début du jardin d'enfants (variable)</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment Fonctionne SchoolBot</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Décrivez Votre Situation</h3>
              <p className="text-gray-400">Votre canton, l'âge de votre enfant, les langues parlées, et votre calendrier. Nous cartographions vos options.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Obtenez un Guide Cantonal</h3>
              <p className="text-gray-400">Étapes d'inscription école publique, documents requis, délais clés — pour VOTRE canton.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Comparez Vos Options</h3>
              <p className="text-gray-400">Public, privé, bilingue, international — nous vous aidons à peser coûts, qualité et adéquation.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Ce Que Couvre SchoolBot</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">📝</span>
            <div>
              <h3 className="font-semibold mb-1">Processus d'Inscription</h3>
              <p className="text-gray-400 text-sm">Étape par étape pour l'inscription à l'école publique dans votre commune</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">🗣️</span>
            <div>
              <h3 className="font-semibold mb-1">Intégration Linguistique</h3>
              <p className="text-gray-400 text-sm">Options DaZ, FLE, et classes d'intégration pour votre enfant</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">🏫</span>
            <div>
              <h3 className="font-semibold mb-1">Comparaison d'Écoles</h3>
              <p className="text-gray-400 text-sm">Public vs privé vs international — avantages, inconvénients, coûts</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">📅</span>
            <div>
              <h3 className="font-semibold mb-1">Dates Clés</h3>
              <p className="text-gray-400 text-sm">Délais d'inscription, rentrée scolaire, calendrier des vacances</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">🎓</span>
            <div>
              <h3 className="font-semibold mb-1">Voie Gymnasiale</h3>
              <p className="text-gray-400 text-sm">Comprendre le parcours vers la Maturité et les exigences de préparation</p>
            </div>
          </div>
          <div className="flex items-start gap-4 bg-gray-900/50 p-6 rounded-xl">
            <span className="text-2xl">🆘</span>
            <div>
              <h3 className="font-semibold mb-1">Résolution de Problèmes</h3>
              <p className="text-gray-400 text-sm">Harcèlement, problèmes de notes, conflits avec enseignants — comment naviguer</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
          <h2 className="text-3xl font-bold text-center mb-4">Obtenez Votre Guide Scolaire</h2>
          <p className="text-gray-400 text-center mb-8">
            Rejoignez la beta — les 50 premières familles reçoivent une aide personnalisée gratuite.
          </p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="SchoolBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_next" value="https://agentmafia.one/schoolbot/fr?success=true" />
            <input
              type="email"
              name="email"
              placeholder="votre@email.com"
              required
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <input
              type="text"
              name="canton"
              placeholder="Votre canton (ex: Genève, Vaud)"
              className="w-full px-4 py-3 bg-gray-900 border border-gray-600 rounded-lg focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors"
            >
              Rejoindre la Beta →
            </button>
          </form>
          <p className="text-xs text-gray-500 text-center mt-4">
            Nous respectons votre vie privée. Pas de spam, jamais.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            Fait partie de <Link href="/" className="text-blue-400 hover:underline">Agent Mafia</Link> — Agents IA qui travaillent pour vous
          </p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link href="/agents" className="hover:text-white">Tous les Agents</Link>
            <Link href="/" className="hover:text-white">Accueil</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
