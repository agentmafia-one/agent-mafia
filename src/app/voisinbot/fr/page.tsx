export default function VoisinBotLandingFR() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/voisinbot" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">EN</a>
          <a href="/voisinbot/fr" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">FR</a>
        </div>

        <span className="inline-block bg-orange-500/15 text-orange-400 px-4 py-1.5 rounded-full text-sm mb-6">
          🏠 Résolution de conflits de voisinage par IA
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Mettez fin à la guerre avec vos <span className="text-orange-500">voisins</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          VoisinBot vous aide à résoudre les nuisances sonores, les conflits d'espaces communs et les différends — sans passer par les tribunaux.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Accès anticipé</h3>
          <p className="text-sm text-zinc-400 mb-5">Rejoignez la bêta — les 50 premiers utilisateurs ont une évaluation gratuite</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="VoisinBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="votre@email.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-orange-500 hover:bg-orange-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              S'inscrire
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">🔇</span>
            <div>
              <h4 className="font-medium">Stop au bruit sans confrontation</h4>
              <p className="text-sm text-zinc-400">L'IA rédige des lettres polies mais fermes — n'escalade que si nécessaire</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📋</span>
            <div>
              <h4 className="font-medium">Documentez correctement les incidents</h4>
              <p className="text-sm text-zinc-400">Construisez un dossier valide avec horodatages, photos et témoignages</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚖️</span>
            <div>
              <h4 className="font-medium">Connaissez vos options légales</h4>
              <p className="text-sm text-zinc-400">Droit du bail suisse, règles PPE et règlements communaux — expliqués simplement</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Conflits courants traités:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Bruit nocturne (musique, fêtes, télé)</li>
            <li>• Conflits de buanderie commune</li>
            <li>• Disputes de places de parking</li>
            <li>• Problèmes d'animaux (aboiements, odeurs)</li>
            <li>• Nuisances balcon/terrasse (fumée, BBQ)</li>
            <li>• Violations du règlement d'immeuble</li>
          </ul>
        </div>
        
        <p className="text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — Des agents IA qui font vraiment le travail
        </p>
      </div>
    </div>
  )
}
