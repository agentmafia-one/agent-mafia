export default function BailBotFR() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/bailbot" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">EN</a>
          <a href="/bailbot/fr" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">FR</a>
        </div>

        <span className="inline-block bg-teal-500/15 text-teal-400 px-4 py-1.5 rounded-full text-sm mb-6">
          📜 Protection Locative IA
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Contestez les <span className="text-teal-500">hausses de loyer</span> abusives
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          BailBot aide les locataires suisses à contester les augmentations illégales, les résiliations de bail et à connaître leurs droits.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Accès anticipé</h3>
          <p className="text-sm text-zinc-400 mb-5">Rejoignez la bêta — les 50 premiers utilisateurs reçoivent une analyse de bail gratuite</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="BailBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="vous@email.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-teal-500 hover:bg-teal-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Rejoindre
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">📈</span>
            <div>
              <h4 className="font-medium">Contestez les hausses illégales</h4>
              <p className="text-sm text-zinc-400">L'IA calcule si votre augmentation est légale selon le taux hypothécaire de référence et vérifie les exigences formelles</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📋</span>
            <div>
              <h4 className="font-medium">Contestez les résiliations</h4>
              <p className="text-sm text-zinc-400">Vérifiez si votre congé est valide — demandes de prolongation et formulaires de contestation rédigés automatiquement</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚖️</span>
            <div>
              <h4 className="font-medium">Droit du bail expliqué</h4>
              <p className="text-sm text-zinc-400">CO 253-274, taux hypothécaires, règles cantonales — en langage simple et compréhensible</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Problèmes courants que nous traitons :</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Avis de hausse de loyer</li>
            <li>• Litiges de résiliation de bail</li>
            <li>• Problèmes de restitution de garantie</li>
            <li>• Demandes de réparations/entretien</li>
            <li>• Autorisations de sous-location</li>
            <li>• Cession de bail</li>
            <li>• Évictions pour rénovation</li>
          </ul>
        </div>
        
        <p className="text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — des agents IA qui font vraiment le travail
        </p>
      </div>
    </div>
  )
}
