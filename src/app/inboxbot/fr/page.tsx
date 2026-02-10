import Link from "next/link"

export const metadata = {
  title: "InboxBot — Agent IA de Triage Email | Agent Mafia",
  description: "Agent IA qui trie votre boîte de réception, rédige des réponses et vous montre uniquement ce qui compte. Récupérez vos matinées.",
}

export default function InboxBotFrPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      {/* Nav */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/inboxbot" className="text-white/70 hover:text-white text-sm">🇬🇧 EN</Link>
          <Link href="/#agents" className="text-white/70 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">📧</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Votre Boîte Mail<br /><span className="text-blue-400">Tue Votre Journée</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Agent IA qui trie vos emails 24h/24, rédige des réponses et ne vous montre que l'essentiel. Récupérez vos matinées.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">😵</div>
            <h3 className="text-lg font-semibold text-white mb-2">Inbox Surchargée</h3>
            <p className="text-white/60">Vous ouvrez vos emails pour une chose. Deux heures plus tard, vous n'avez pas commencé le vrai travail.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">🔴</div>
            <h3 className="text-lg font-semibold text-white mb-2">Emails Importants Ratés</h3>
            <p className="text-white/60">Ce message client d'il y a 3 jours ? Enterré sous 200 newsletters et fils CC.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Angoisse de Répondre</h3>
            <p className="text-white/60">Rédiger des réponses prend une éternité. Plus vous attendez, pire c'est.</p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl p-8 border border-blue-500/30 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Comment Fonctionne InboxBot</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-white mb-2">Triage Intelligent</h3>
              <p className="text-white/60 text-sm">InboxBot catégorise les emails : urgent, actionnable, pour info, ou archive. Vous ne voyez que l'essentiel.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-white mb-2">Rédige les Réponses</h3>
              <p className="text-white/60 text-sm">L'IA rédige des réponses dans votre style. Relisez et envoyez en un clic — ou laissez-le gérer les réponses routinières.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-blue-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-white mb-2">Briefing Quotidien</h3>
              <p className="text-white/60 text-sm">Commencez la journée avec un résumé de 2 minutes : quoi traiter, quoi peut attendre, quoi est déjà géré.</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Ce que InboxBot Fait Pour Vous</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "🎯 Remonte les emails urgents instantanément — même à 3h du matin",
              "✍️ Rédige des réponses dans votre style d'écriture",
              "📊 Briefing email quotidien sur Telegram/Slack",
              "🗑️ Archive automatiquement newsletters et fils CC-all",
              "📅 Extrait les actions et échéances",
              "🔗 Compatible Gmail, Outlook, IMAP",
              "🔒 Confidentialité d'abord : vos emails restent les vôtres",
              "⚡ Gère 500+ emails/jour sans effort",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Reprenez le Contrôle de Votre Inbox</h2>
          <p className="text-white/70 mb-6">Rejoignez la bêta. Les 50 premiers inscrits ont 30 jours gratuits.</p>
          
          <form 
            action="https://formsubmit.co/dev@agentmafia.one" 
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="_subject" value="InboxBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              placeholder="votre@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-blue-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-blue-500 hover:bg-blue-400 text-white font-semibold rounded-xl transition-colors"
            >
              Rejoindre la Bêta →
            </button>
          </form>
          
          <p className="text-white/50 text-sm mt-4">Pas de spam. Désinscription à tout moment.</p>
        </div>

        {/* Pricing hint */}
        <div className="text-center mt-12">
          <p className="text-white/50">À partir de <span className="text-blue-400 font-semibold">49 CHF/mois</span> • Emails illimités</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">Fait partie de <Link href="/" className="text-white hover:text-blue-400">Agent Mafia</Link> — Des agents IA qui travaillent pour vous</p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/#agents" className="hover:text-white">Tous les Agents</Link>
            <a href="mailto:dev@agentmafia.one" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
