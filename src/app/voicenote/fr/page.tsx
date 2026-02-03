export default function VoiceNoteFrench() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/voicenote" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">EN</a>
          <a href="/voicenote/fr" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">FR</a>
        </div>

        <span className="inline-block bg-amber-500/15 text-amber-400 px-4 py-1.5 rounded-full text-sm mb-6">
          🎙️ Notes vocales intelligentes
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Enregistrez une fois, <span className="text-amber-500">retrouvez toujours</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          VoiceNote capture vos mémos vocaux, les transcrit instantanément et rend chaque idée recherchable. Ne perdez plus jamais une pensée.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Rejoignez la liste d'attente</h3>
          <p className="text-sm text-zinc-400 mb-5">Transformez le chaos vocal en organisation brillante</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="VoiceNote Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="vous@email.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-amber-500 hover:bg-amber-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5 text-black">
              Rejoindre
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">🎤</span>
            <div>
              <h4 className="font-medium">Envoyez la voix, recevez le texte</h4>
              <p className="text-sm text-zinc-400">Déposez un mémo vocal via Telegram — transcription instantanée</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔍</span>
            <div>
              <h4 className="font-medium">Recherchez tout ce que vous avez dit</h4>
              <p className="text-sm text-zinc-400">"C'était quoi cette idée de mardi?" — trouvée en secondes</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">☁️</span>
            <div>
              <h4 className="font-medium">Sauvegardé pour toujours</h4>
              <p className="text-sm text-zinc-400">Vos notes se synchronisent avec votre cloud — vos données vous appartiennent</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Parfait pour:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Entrepreneurs capturant des idées en déplacement</li>
            <li>• Consultants documentant leurs appels clients</li>
            <li>• Créatifs qui pensent à voix haute</li>
            <li>• Tous ceux qui se noient dans les mémos vocaux</li>
          </ul>
        </div>

        <div className="bg-amber-500/10 border border-amber-500/20 rounded-xl p-6 mb-10">
          <p className="text-sm text-amber-300 italic">
            "Je viens d'avoir une super idée pour la campagne marketing... [mémo de 45 secondes]"
          </p>
          <p className="text-xs text-zinc-500 mt-2">→ Transcrit. Tagué #marketing. Recherchable pour toujours.</p>
        </div>
        
        <p className="text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — des agents IA qui font vraiment le travail
        </p>
      </div>
    </div>
  )
}
