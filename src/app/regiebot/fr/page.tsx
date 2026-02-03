export default function RegieBotFrench() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/regiebot" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">EN</a>
          <a href="/regiebot/fr" className="px-3 py-1 bg-indigo-500/20 text-indigo-400 rounded-full text-sm font-medium">FR</a>
        </div>

        <span className="inline-block bg-red-500/15 text-red-400 px-4 py-1.5 rounded-full text-sm mb-6">
          ⚖️ Assistant juridique IA pour locataires suisses
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Faites valoir vos droits face à votre <span className="text-red-500">régie</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          RégieBot vous aide à contester les frais abusifs, récupérer votre garantie de loyer et connaître vos droits — sans avocat coûteux.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Accès anticipé</h3>
          <p className="text-sm text-zinc-400 mb-5">Rejoignez la bêta — les 50 premiers locataires reçoivent une analyse gratuite</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="RégieBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="vous@email.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-red-500 hover:bg-red-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Rejoindre
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">💰</span>
            <div>
              <h4 className="font-medium">Récupérez votre garantie</h4>
              <p className="text-sm text-zinc-400">L'IA analyse votre état des lieux et conteste les déductions abusives</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📝</span>
            <div>
              <h4 className="font-medium">Rédigez des courriers en minutes</h4>
              <p className="text-sm text-zinc-400">Mises en demeure et réclamations formelles — prêtes à envoyer</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">⚖️</span>
            <div>
              <h4 className="font-medium">Connaissez vos droits</h4>
              <p className="text-sm text-zinc-400">Le CO Art. 253-274g expliqué clairement pour votre situation</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Problèmes courants que nous traitons:</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• Retenues abusives sur la garantie (frais de remise en état)</li>
            <li>• Augmentations de loyer illégales (hausse abusive)</li>
            <li>• Réparations que la régie refuse d'effectuer</li>
            <li>• Contestation de congé (congé abusif)</li>
            <li>• Charges excessives (décompte de charges)</li>
          </ul>
        </div>
        
        <p className="text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — des agents IA qui font vraiment le travail
        </p>
      </div>
    </div>
  )
}
