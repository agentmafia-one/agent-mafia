export default function CalBotLandingFR() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/calbot" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">EN</a>
          <a href="/calbot/fr" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">FR</a>
        </div>

        <span className="inline-block bg-indigo-500/15 text-indigo-400 px-4 py-1.5 rounded-full text-sm mb-6">
          📅 Assistant Calendrier IA
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Fini le <span className="text-indigo-500">chaos du calendrier</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          CalBot gère votre agenda, vous prépare pour vos réunions et protège votre temps de concentration. Plus jamais de double-réservation ni de réunion improvisée.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Accès anticipé</h3>
          <p className="text-sm text-zinc-400 mb-5">Rejoignez la bêta — les 50 premiers utilisateurs obtiennent le premium à vie</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="CalBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="vous@email.com" 
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
            <span className="text-xl">🛡️</span>
            <div>
              <h4 className="font-medium">Protégez votre temps de focus</h4>
              <p className="text-sm text-zinc-400">Bloque automatiquement les créneaux de travail profond, décline les réunions non prioritaires</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📋</span>
            <div>
              <h4 className="font-medium">Préparation de réunion automatisée</h4>
              <p className="text-sm text-zinc-400">Briefings avant chaque réunion — contexte des participants, notes passées, ordre du jour</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔄</span>
            <div>
              <h4 className="font-medium">Reprogrammation intelligente</h4>
              <p className="text-sm text-zinc-400">Conflits détectés ? CalBot propose des alternatives et gère les échanges</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Ce que CalBot gère :</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• 📅 Optimisation du calendrier & résolution de conflits</li>
            <li>• 🛡️ Protection du temps de focus & limite de réunions</li>
            <li>• 📋 Briefings pré-réunion & ordres du jour</li>
            <li>• ✉️ Emails de planification & réponses</li>
            <li>• 🔔 Rappels intelligents avec contexte</li>
            <li>• 📊 Audit du temps & analytique des réunions</li>
          </ul>
        </div>
        
        <p className="text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — des agents IA qui font vraiment le travail
        </p>
      </div>
    </div>
  )
}
