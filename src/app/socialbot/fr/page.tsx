import Link from 'next/link'

export const metadata = {
  title: 'SocialBot — Agent IA pour la Gestion des Réseaux Sociaux | Agent Mafia',
  description: 'Automatisez la programmation de contenu, le suivi engagement et la croissance audience. Votre community manager IA.',
}

export default function SocialBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/socialbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <div className="text-6xl mb-6">📱</div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-pink-400 to-purple-500 bg-clip-text text-transparent">
          SocialBot
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Fini de jongler entre les plateformes. L'IA qui programme vos posts, suit l'engagement et fait grandir votre audience.
        </p>
        <p className="text-lg text-pink-400 mb-12">
          Votre community manager 24/7
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">📅</div>
            <h3 className="text-lg font-semibold mb-2">Programmation Intelligente</h3>
            <p className="text-gray-400">L'IA choisit les meilleurs moments. Planifiez des semaines de contenu en minutes.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold mb-2">Suivi Engagement</h3>
            <p className="text-gray-400">Analytics temps réel sur toutes les plateformes. Sachez ce qui fonctionne.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">🚀</div>
            <h3 className="text-lg font-semibold mb-2">Croissance Audience</h3>
            <p className="text-gray-400">L'IA suggère le contenu qui résonne. Gagnez des followers en autopilote.</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-xl mx-auto px-6 py-16 text-center">
        <h2 className="text-2xl font-bold mb-6">Rejoignez la Bêta</h2>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="SocialBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-pink-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Accès Anticipé
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        Créé par <Link href="/" className="text-pink-400 hover:underline">Agent Mafia</Link>
        <p className="mt-2">Des agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  )
}
