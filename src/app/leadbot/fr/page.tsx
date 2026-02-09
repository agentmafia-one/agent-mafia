import Link from "next/link"

export const metadata = {
  title: "LeadBot — Agent IA de Qualification de Leads | Agent Mafia",
  description: "Agent IA qui qualifie vos prospects 24/7, note automatiquement les leads et remplit votre CRM avec des opportunités prêtes à vendre.",
}

export default function LeadBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-emerald-900 to-slate-900">
      {/* Nav */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/leadbot" className="text-white/70 hover:text-white text-sm">🇬🇧 EN</Link>
          <Link href="/#agents" className="text-white/70 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Arrêtez de Courir Après<br /><span className="text-emerald-400">des Leads Morts</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Agent IA qui qualifie vos prospects 24h/24, note automatiquement les leads et livre uniquement des opportunités prêtes à vendre à votre équipe.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">😤</div>
            <h3 className="text-lg font-semibold text-white mb-2">Temps Commercial Perdu</h3>
            <p className="text-white/60">Vos closers passent 60% de leur temps sur des leads qui n'achèteront jamais.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">🌙</div>
            <h3 className="text-lg font-semibold text-white mb-2">Leads Refroidis</h3>
            <p className="text-white/60">Les prospects chauds remplissent vos formulaires à 2h du matin. Au réveil ? Ils ont déjà parlé à vos concurrents.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Pas de Lead Scoring</h3>
            <p className="text-white/60">Chaque lead se ressemble. Impossible de savoir qui est prêt à acheter vs qui fait du lèche-vitrine.</p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-3xl p-8 border border-emerald-500/30 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Comment LeadBot Fonctionne</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-white mb-2">Réponse Instantanée</h3>
              <p className="text-white/60 text-sm">LeadBot engage chaque lead entrant en quelques secondes, 24/7. Ne ratez plus jamais un prospect chaud.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-white mb-2">Qualification Intelligente</h3>
              <p className="text-white/60 text-sm">L'IA pose les bonnes questions : budget, délai, pouvoir de décision. Note les leads automatiquement.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-emerald-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-white mb-2">Transfert CRM</h3>
              <p className="text-white/60 text-sm">Les leads qualifiés vont directement dans votre CRM avec tout le contexte. Votre équipe conclut, pas qualifie.</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Ce que LeadBot Fait Pour Vous</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "⚡ Répond aux leads en moins de 60 secondes",
              "🎯 Qualification BANT (Budget, Autorité, Besoin, Timing)",
              "📈 Lead scoring selon vos critères",
              "🔗 S'intègre avec HubSpot, Salesforce, Pipedrive",
              "💬 IA conversationnelle — pas de formulaires robotiques",
              "📅 Réserve des rendez-vous dans votre agenda",
              "🌐 Fonctionne via email, chat ou SMS",
              "📊 Rapports hebdomadaires sur la qualité des leads",
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 bg-white/5 rounded-xl p-4">
                <span className="text-white">{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white/10 backdrop-blur rounded-3xl p-8 border border-white/20 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Obtenez LeadBot pour Votre Équipe Commerciale</h2>
          <p className="text-white/70 mb-6">Rejoignez la bêta. Les 50 premiers inscrits ont 30 jours gratuits.</p>
          
          <form 
            action="https://formsubmit.co/dev@agentmafia.one" 
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="_subject" value="LeadBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input
              type="email"
              name="email"
              placeholder="votre@email.com"
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:border-emerald-500"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold rounded-xl transition-colors"
            >
              Rejoindre la Bêta →
            </button>
          </form>
          
          <p className="text-white/50 text-sm mt-4">Pas de spam. Désabonnement à tout moment.</p>
        </div>

        {/* Pricing hint */}
        <div className="text-center mt-12">
          <p className="text-white/50">À partir de <span className="text-emerald-400 font-semibold">99€/mois</span> • Leads illimités</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-white/50 text-sm">Fait partie de <Link href="/" className="text-white hover:text-emerald-400">Agent Mafia</Link> — Des agents IA qui travaillent pour vous</p>
          <div className="flex gap-6 text-sm text-white/50">
            <Link href="/#agents" className="hover:text-white">Tous les Agents</Link>
            <a href="mailto:dev@agentmafia.one" className="hover:text-white">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  )
}
