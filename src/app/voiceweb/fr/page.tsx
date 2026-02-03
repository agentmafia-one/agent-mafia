export default function VoiceWebFrench() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/voiceweb" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">EN</a>
          <a href="/voiceweb/fr" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">FR</a>
        </div>

        <span className="inline-block bg-purple-500/15 text-purple-400 px-4 py-1.5 rounded-full text-sm mb-6">
          🎤 Gestion de site web par la voix
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Mettez à jour votre site en <span className="text-purple-500">lui parlant</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          VoiceWeb vous permet de gérer votre site web par messages vocaux. Changez les textes, mettez à jour les prix, ajoutez des pages — dites simplement ce que vous voulez.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Rejoignez la liste d'attente</h3>
          <p className="text-sm text-zinc-400 mb-5">Soyez parmi les premiers à gérer votre site par la voix — sans coder</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="VoiceWeb Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="vous@votreentreprise.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-purple-500 hover:bg-purple-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Rejoindre
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">🗣️</span>
            <div>
              <h4 className="font-medium">Parlez, n'écrivez plus</h4>
              <p className="text-sm text-zinc-400">Envoyez un message vocal: "Change le titre en Soldes d'été"</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚡</span>
            <div>
              <h4 className="font-medium">Modifications instantanées</h4>
              <p className="text-sm text-zinc-400">Votre agent IA comprend ce que vous voulez et l'applique en secondes</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔒</span>
            <div>
              <h4 className="font-medium">Votre site, votre contrôle</h4>
              <p className="text-sm text-zinc-400">Fonctionne avec votre hébergement existant — pas de lock-in</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Parfait pour:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Consultants indépendants qui détestent WordPress</li>
            <li>• Coachs qui mettent à jour leurs services</li>
            <li>• Entrepreneurs sans temps pour la technique</li>
            <li>• Tous ceux qui savent parler mais pas coder</li>
          </ul>
        </div>

        <div className="bg-purple-500/10 border border-purple-500/20 rounded-xl p-6 mb-10">
          <p className="text-sm text-purple-300 italic">
            "Hey VoiceWeb, ajoute un témoignage de Marie qui dit qu'elle a adoré travailler avec moi"
          </p>
          <p className="text-xs text-zinc-500 mt-2">→ C'est fait. Témoignage ajouté à votre page d'accueil.</p>
        </div>
        
        <p className="text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — des agents IA qui font vraiment le travail
        </p>
      </div>
    </div>
  )
}
