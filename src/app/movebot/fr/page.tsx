import Link from 'next/link'

export const metadata = {
  title: 'MoveBot — Votre Assistant de Déménagement en Suisse | Agent Mafia',
  description: 'Agent IA qui gère le chaos administratif de l&apos;installation en Suisse. Formalités, inscriptions, check-lists — tout est fait.',
}

export default function MoveBotFrPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/movebot" className="text-slate-400 hover:text-white">🇬🇧 EN</Link>
          <Link href="/agents" className="text-slate-300 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">📦</div>
        <h1 className="text-5xl font-bold text-white mb-6">
          Vous déménagez en Suisse ?<br/>
          <span className="text-amber-400">Fini le cauchemar administratif.</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          MoveBot gère toutes les formalités de votre installation en Suisse.
          Inscription, permis, services, banque — tout au même endroit.
        </p>

        <div className="grid md:grid-cols-3 gap-6 text-left mb-12">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-lg font-semibold text-white mb-2">Check-list Personnalisée</h3>
            <p className="text-slate-400">Liste de tâches adaptée à votre canton, nationalité et situation familiale.</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-3">⏰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Suivi des Délais</h3>
            <p className="text-slate-400">Ne ratez jamais un délai d&apos;inscription. Règle des 14 jours ? On s&apos;en occupe.</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
            <div className="text-3xl mb-3">📄</div>
            <h3 className="text-lg font-semibold text-white mb-2">Préparation Documents</h3>
            <p className="text-slate-400">Sachez exactement quels documents apporter à chaque rendez-vous.</p>
          </div>
        </div>

        <div className="bg-slate-800 rounded-2xl p-8 max-w-md mx-auto border border-slate-700">
          <h2 className="text-2xl font-bold text-white mb-4">Accès Anticipé</h2>
          <p className="text-slate-400 mb-6">Soyez parmi les premiers à essayer MoveBot.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="MoveBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="votre@email.com" 
              required
              className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg text-white placeholder-slate-400 focus:outline-none focus:border-amber-400"
            />
            <button 
              type="submit"
              className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-slate-900 font-bold rounded-lg transition-colors"
            >
              Rejoindre la Liste →
            </button>
          </form>
        </div>
      </section>

      <footer className="text-center py-8 text-slate-500">
        <p>Créé par <Link href="/" className="text-amber-400 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  )
}
