import Link from 'next/link'

export const metadata = {
  title: 'PropertyBot — Agent IA pour Professionnels Immobiliers | Agent Mafia',
  description: 'Automatisez vos annonces, matchez les acheteurs et concluez plus vite. Votre assistant immobilier IA.',
}

export default function PropertyBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/propertybot" className="text-sm text-gray-400 hover:text-white">EN</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="text-center py-20 px-6">
        <div className="text-6xl mb-6">🏠</div>
        <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
          PropertyBot
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          Concluez plus d'affaires avec moins d'effort. L'IA qui gère vos annonces, matche les acheteurs et relance automatiquement.
        </p>
        <p className="text-lg text-amber-400 mb-12">
          Votre assistant immobilier 24/7
        </p>
      </section>

      {/* Features */}
      <section className="max-w-4xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-lg font-semibold mb-2">Annonces Intelligentes</h3>
            <p className="text-gray-400">Descriptions auto-générées, sync multi-plateforme, prix mis à jour instantanément.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">🎯</div>
            <h3 className="text-lg font-semibold mb-2">Matching Acheteurs</h3>
            <p className="text-gray-400">L'IA match les biens aux préférences des acheteurs. Fini les recherches manuelles.</p>
          </div>
          <div className="bg-gray-800/50 rounded-xl p-6 border border-gray-700">
            <div className="text-3xl mb-4">📞</div>
            <h3 className="text-lg font-semibold mb-2">Relances Auto</h3>
            <p className="text-gray-400">Ne perdez plus aucun lead. Relances automatiques et prise de RDV.</p>
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
          <input type="hidden" name="_subject" value="PropertyBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-600 focus:border-amber-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Accès Anticipé
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        Créé par <Link href="/" className="text-amber-400 hover:underline">Agent Mafia</Link>
        <p className="mt-2">Des agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  )
}
