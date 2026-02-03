export default function ContentCheckFrench() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/contentcheck" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">EN</a>
          <a href="/contentcheck/fr" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">FR</a>
        </div>

        <span className="inline-block bg-blue-500/15 text-blue-400 px-4 py-1.5 rounded-full text-sm mb-6">
          ✓ Agent de conformité contenu
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Votre post respecte-t-il <span className="text-blue-500">vos règles?</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          ContentCheck vérifie vos publications contre vos directives personnalisées. Détectez les problèmes de conformité avant de publier.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Accès anticipé</h3>
          <p className="text-sm text-zinc-400 mb-5">Automatisez votre conformité de contenu</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="ContentCheck Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="vous@entreprise.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Accéder
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">📋</span>
            <div>
              <h4 className="font-medium">Vos règles, appliquées automatiquement</h4>
              <p className="text-sm text-zinc-400">Définissez vos directives une fois — chaque post est vérifié</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔗</span>
            <div>
              <h4 className="font-medium">Collez l'URL, obtenez une revue instantanée</h4>
              <p className="text-sm text-zinc-400">LinkedIn, Twitter, Instagram, Facebook — tout post public</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <h4 className="font-medium">Vérifiez avant ou après publication</h4>
              <p className="text-sm text-zinc-400">Brouillons via screenshot ou posts live via URL</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Pour les industries réglementées:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Finance & Banque — Conformité FINMA</li>
            <li>• Santé — Règles publicitaires</li>
            <li>• Juridique — Directives de l'ordre</li>
            <li>• Toute entreprise avec des standards</li>
          </ul>
        </div>

        <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6 mb-10">
          <p className="text-sm text-blue-300 font-medium mb-2">Exemple de vérification:</p>
          <p className="text-sm text-zinc-400 italic">
            "Votre post contient 'placement privé' — ce terme suggère une sollicitation de titres. Recommandation: supprimer."
          </p>
          <p className="text-xs text-zinc-500 mt-2">Règle violée: Pas de sollicitation publique</p>
        </div>
        
        <p className="text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — des agents IA qui font vraiment le travail
        </p>
      </div>
    </div>
  )
}
