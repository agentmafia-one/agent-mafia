export default function TaxBotLandingFR() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      <div className="max-w-xl mx-auto px-6 py-16 text-center">
        {/* Language Toggle */}
        <div className="flex justify-center gap-2 mb-8">
          <a href="/taxbot" className="px-3 py-1 bg-white/5 text-zinc-400 hover:text-white rounded-full text-sm">EN</a>
          <a href="/taxbot/fr" className="px-3 py-1 bg-emerald-500/20 text-emerald-400 rounded-full text-sm font-medium">FR</a>
        </div>

        <span className="inline-block bg-emerald-500/15 text-emerald-400 px-4 py-1.5 rounded-full text-sm mb-6">
          🧾 Optimisation fiscale IA
        </span>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-5 leading-tight">
          Arrêtez de <span className="text-emerald-500">surpayer vos impôts</span>
        </h1>
        
        <p className="text-xl text-zinc-400 mb-10 leading-relaxed">
          TaxBot suit vos dépenses déductibles, trouve les déductions oubliées et optimise votre déclaration suisse automatiquement.
        </p>
        
        <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 mb-10">
          <h3 className="text-lg font-semibold mb-2">Accès anticipé</h3>
          <p className="text-sm text-zinc-400 mb-5">Rejoignez la bêta — les 50 premiers utilisateurs obtiennent une analyse fiscale gratuite</p>
          
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-3">
            <input type="hidden" name="_subject" value="TaxBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="vous@email.ch" 
              required
              className="flex-1 px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
            />
            <button type="submit" className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold transition-all hover:-translate-y-0.5">
              Rejoindre
            </button>
          </form>
        </div>
        
        <div className="space-y-4 text-left mb-10">
          <div className="flex gap-3">
            <span className="text-xl">📸</span>
            <div>
              <h4 className="font-medium">Photographiez vos reçus</h4>
              <p className="text-sm text-zinc-400">Prenez une photo — l'IA extrait le montant, la catégorie et l'ajoute automatiquement à votre suivi de déductions</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">🔍</span>
            <div>
              <h4 className="font-medium">Trouvez les déductions oubliées</h4>
              <p className="text-sm text-zinc-400">L'IA analyse vos dépenses et suggère les déductions que vous manquez — trajets, bureau à domicile, 3e pilier</p>
            </div>
          </div>
          <div className="flex gap-3">
            <span className="text-xl">📊</span>
            <div>
              <h4 className="font-medium">Optimisation cantonale</h4>
              <p className="text-sm text-zinc-400">Découvrez les déductions autorisées par votre canton — les règles varient entre GE, VD, ZH et les autres</p>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl p-6 mb-10 text-left">
          <h4 className="font-semibold mb-3 text-zinc-300">Déductions que nous trouvons :</h4>
          <ul className="text-sm text-zinc-400 space-y-1">
            <li>• 🚗 Frais de transport (voiture, transports publics)</li>
            <li>• 🏠 Déductions bureau à domicile</li>
            <li>• 🏥 Frais médicaux au-dessus du seuil</li>
            <li>• 🎓 Formation et perfectionnement professionnel</li>
            <li>• 👶 Frais de garde d'enfants</li>
            <li>• 🏦 Cotisations 3e pilier</li>
            <li>• 💝 Dons et cadeaux</li>
            <li>• 🔧 Entretien immobilier (propriétaires)</li>
          </ul>
        </div>
        
        <p className="text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — des agents IA qui font vraiment le travail
        </p>
      </div>
    </div>
  )
}
