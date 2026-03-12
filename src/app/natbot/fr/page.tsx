import Link from 'next/link'

export const metadata = {
  title: 'NatBot — Votre Guide Naturalisation Suisse | Agent Mafia',
  description: 'Agent IA qui vous guide vers la naturalisation suisse. Suivez les exigences, préparez vos documents, naviguez les règles cantonales. Votre chemin vers le passeport rouge.',
}

export default function NatBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/natbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Commencer
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-red-500/20 text-red-300 px-4 py-1 rounded-full text-sm mb-6">
          🇨🇭 Navigateur Naturalisation Suisse
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          10+ ans en Suisse.<br />
          <span className="text-red-400">Prêt pour le passeport rouge?</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          NatBot vous guide vers la naturalisation suisse — suivi des exigences,
          préparation des documents, navigation des règles communales.
          Votre co-pilote IA vers la citoyenneté.
        </p>
        <a href="#signup" className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Vérifier mon éligibilité →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Cauchemar de la Naturalisation</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📚</div>
            <h3 className="text-xl font-semibold mb-2">Documents Sans Fin</h3>
            <p className="text-gray-400">Actes de naissance, casiers judiciaires, déclarations fiscales, preuves d'intégration... de plusieurs pays. Bon courage.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏘️</div>
            <h3 className="text-xl font-semibold mb-2">Chaque Commune est Différente</h3>
            <p className="text-gray-400">2'136 communes, 2'136 règles différentes. Ce qui marche à Zürich échoue à Genève. Chaos total.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏳</div>
            <h3 className="text-xl font-semibold mb-2">Des Années d'Attente</h3>
            <p className="text-gray-400">1-3 ans de traitement. Une erreur? Recommencez. Délai manqué? Retour en fin de queue.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">La Naturalisation en Chiffres</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-red-400">10+ ans</p>
            <p className="text-sm text-gray-400 mt-2">Résidence requise</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-red-400">CHF 2-5K</p>
            <p className="text-sm text-gray-400 mt-2">Frais de dossier</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-red-400">40K+</p>
            <p className="text-sm text-gray-400 mt-2">Naturalisations/an</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-red-400">B1-B2</p>
            <p className="text-sm text-gray-400 mt-2">Niveau langue requis</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment NatBot Vous Guide</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold mb-2">Test d'Éligibilité</h3>
            <p className="text-gray-400">Évaluation instantanée basée sur votre historique de résidence, canton et situation personnelle.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Liste des Documents</h3>
            <p className="text-gray-400">Exigences spécifiques à votre commune. Sachez exactement ce qu'il vous faut avant de commencer.</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-4">🗓️</div>
            <h3 className="text-xl font-semibold mb-2">Suivi du Dossier</h3>
            <p className="text-gray-400">Suivez votre demande, recevez des rappels, ne manquez jamais un délai ou entretien.</p>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Conditions de Base</h2>
        <div className="max-w-2xl mx-auto">
          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>10 ans de résidence</strong> (ou 5 avec permis C pour certains)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>Permis C</strong> au moment de la demande</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>Maîtrise de la langue</strong> — B1 oral, A2 écrit (varie selon canton)</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>Intégration</strong> — liens sociaux, culturels, professionnels avec la Suisse</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>Casier vierge</strong> — pas de condamnation pénale grave</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-red-400 text-xl">✓</span>
              <span><strong>Indépendance financière</strong> — pas d'aide sociale récente</span>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Votre Passeport Suisse Vous Attend</h2>
        <p className="text-xl text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta. Obtenez un accompagnement personnalisé pour votre naturalisation.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="NatBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="Votre adresse email" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-red-600 hover:bg-red-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Commencer Mon Parcours
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Test d'éligibilité gratuit. Pas de spam.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>Fait partie de <Link href="/" className="text-red-400 hover:text-red-300">Agent Mafia</Link> — Les agents IA qui travaillent pour vous</p>
        </div>
      </footer>
    </div>
  )
}
