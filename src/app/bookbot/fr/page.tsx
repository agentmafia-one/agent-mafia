export default function BookBotFR() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/bookbot" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">EN</a>
          <a href="/bookbot/fr" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">FR</a>
        </div>

        <span className="inline-block bg-indigo-500/15 text-indigo-400 px-4 py-1.5 rounded-full text-sm mb-6">
          📊 Agent IA pour Vendeurs Shopify
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Arrêtez de vous noyer dans la <span className="text-indigo-500">comptabilité Shopify</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          BookBot synchronise vos ventes Shopify avec QuickBooks automatiquement et vous envoie un P&L hebdomadaire — pour toujours connaître vos chiffres.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Accès anticipé</h3>
          <p className="text-sm text-zinc-400 mb-5">Rejoignez la bêta — les 10 premières boutiques obtiennent 50% à vie</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="BookBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="vous@votreboutique.com" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-indigo-500 hover:bg-indigo-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Rejoindre
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <h4 className="font-medium">Synchronisation auto avec QuickBooks</h4>
              <p className="text-sm text-zinc-400">Ventes, remboursements, frais — tout catégorisé correctement, chaque jour</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📊</span>
            <div>
              <h4 className="font-medium">P&L hebdomadaire dans votre boîte mail</h4>
              <p className="text-sm text-zinc-400">Connaissez votre marge bénéficiaire sans ouvrir un tableur</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔒</span>
            <div>
              <h4 className="font-medium">Comptabilité prête pour les impôts</h4>
              <p className="text-sm text-zinc-400">Fini le stress de fin d'année — vos comptes restent propres</p>
            </div>
          </div>
        </div>
        
        <p className="text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — des agents IA qui font vraiment le travail
        </p>
      </div>
    </div>
  )
}
