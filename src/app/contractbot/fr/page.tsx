import Link from "next/link"

export const metadata = {
  title: "ContractBot — Agent IA de Révision de Contrats | Agent Mafia",
  description: "Agent IA qui analyse vos contrats, détecte les pièges et protège votre entreprise. Ne signez plus jamais un mauvais contrat.",
}

export default function ContractBotFrPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      {/* Nav */}
      <nav className="p-6 flex justify-between items-center max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-white">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/contractbot" className="text-white/70 hover:text-white text-sm">🇬🇧 EN</Link>
          <Link href="/#agents" className="text-white/70 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <main className="max-w-4xl mx-auto px-6 py-20">
        <div className="text-center mb-16">
          <div className="text-6xl mb-6">📜</div>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Arrêtez de Signer des<br /><span className="text-purple-400">Mauvais Contrats</span>
          </h1>
          <p className="text-xl text-white/70 max-w-2xl mx-auto">
            Agent IA qui analyse vos contrats en quelques secondes, détecte les risques cachés et explique le jargon juridique en langage clair.
          </p>
        </div>

        {/* Pain Points */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">⚠️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Clauses Cachées</h3>
            <p className="text-white/60">Reconduction automatique, clauses de non-concurrence, responsabilités illimitées enfouies dans 50 pages de jargon juridique.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-lg font-semibold text-white mb-2">Avocats Coûteux</h3>
            <p className="text-white/60">500 CHF/heure pour faire relire un contrat standard ? Il doit y avoir une meilleure solution.</p>
          </div>
          <div className="bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Pression du Temps</h3>
            <p className="text-white/60">"Signez avant vendredi" — et vous devez lire 30 pages de texte juridique d'ici là ?</p>
          </div>
        </div>

        {/* Solution */}
        <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-3xl p-8 border border-purple-500/30 mb-16">
          <h2 className="text-3xl font-bold text-white mb-6 text-center">Comment Fonctionne ContractBot</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold text-white mb-2">Téléchargez le Contrat</h3>
              <p className="text-white/60 text-sm">Déposez votre PDF ou collez le texte. NDA, emploi, fournisseur, SaaS — tout type de contrat.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold text-white mb-2">Analyse IA</h3>
              <p className="text-white/60 text-sm">ContractBot recherche les signaux d'alarme, les clauses abusives, les éléments manquants et les risques potentiels.</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-purple-500 text-white flex items-center justify-center text-xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold text-white mb-2">Rapport en Langage Clair</h3>
              <p className="text-white/60 text-sm">Recevez un résumé avec niveaux de risque, termes clés expliqués et modifications suggérées.</p>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-16">
          <h2 className="text-2xl font-bold text-white mb-6 text-center">Ce que ContractBot Détecte</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              "🚨 Clauses de responsabilité illimitée",
              "🔄 Reconductions automatiques piégeuses",
              "🚫 Non-concurrence excessivement large",
              "💰 Frais cachés déclencheurs",
              "⚖️ Droits de résiliation unilatéraux",
              "🔒 Cession de PI abusive",
              "📅 Délais et pénalités déraisonnables",
              "🌍 Juridiction défavorable"
            ].map((feature, i) => (
              <div key={i} className="flex items-center gap-3 text-white/80">
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="bg-white/5 backdrop-blur rounded-3xl p-8 border border-white/10 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Accès Anticipé</h2>
          <p className="text-white/60 mb-6">Rejoignez la bêta. Analysez votre premier contrat gratuitement.</p>
          <form 
            action="https://formsubmit.co/dev@agentmafia.one" 
            method="POST"
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
          >
            <input type="hidden" name="_subject" value="ContractBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email"
              placeholder="votre@email.com" 
              required
              className="flex-1 px-4 py-3 rounded-xl bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-purple-500"
            />
            <button 
              type="submit"
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-xl hover:opacity-90 transition"
            >
              Rejoindre la Bêta
            </button>
          </form>
          <p className="text-white/40 text-sm mt-4">À partir de 29 CHF/mois après la bêta</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-12 text-center text-white/40">
        <p>Fait partie de <Link href="/" className="text-purple-400 hover:text-purple-300">Agent Mafia</Link> — Agents IA qui font vraiment le travail</p>
      </footer>
    </div>
  )
}
