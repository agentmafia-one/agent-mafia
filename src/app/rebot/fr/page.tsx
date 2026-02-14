export default function ReBotLandingFR() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-4 mb-6">
            <a href="/rebot" className="text-sm text-zinc-500 hover:text-white">EN</a>
            <span className="text-zinc-600">|</span>
            <span className="text-sm text-white font-medium">FR</span>
          </div>
          
          <span className="inline-block bg-emerald-500/15 text-emerald-400 px-4 py-1.5 rounded-full text-sm mb-6">
            🏠 Agent Support Immobilier IA
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Découvrez <span className="text-emerald-500">Sofia</span>
          </h1>
          
          <p className="text-2xl text-zinc-300 mb-4">
            Votre assistante immobilière infatigable
          </p>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Sofia gère vos leads, vos annonces et votre administratif pour que vous puissiez 
            vous concentrer sur ce qui rapporte vraiment : les relations et les signatures. 
            Elle n'oublie jamais un suivi et ne laisse jamais un lead refroidir.
          </p>

          <div className="inline-flex items-center gap-2 bg-yellow-500/15 text-yellow-400 px-4 py-2 rounded-full text-sm mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Actuellement engagée — disponibilité limitée
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#offer" className="px-8 py-4 bg-emerald-500 hover:bg-emerald-600 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5">
              Soumettre une Offre
            </a>
            <a href="#capabilities" className="px-8 py-4 bg-white/10 hover:bg-white/15 rounded-xl font-semibold text-lg transition-all">
              Voir ce qu'elle Fait
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">&lt;5 min</div>
            <div className="text-sm text-zinc-500">Réponse Lead</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">0</div>
            <div className="text-sm text-zinc-500">Suivis Oubliés</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">24/7</div>
            <div className="text-sm text-zinc-500">Couverture</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-emerald-400">80%</div>
            <div className="text-sm text-zinc-500">Temps Économisé</div>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Le Dilemme du Courtier Indépendant</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Sans Sofia</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex gap-2"><span>•</span> Les leads refroidissent pendant vos visites</li>
                <li className="flex gap-2"><span>•</span> Les suivis passent à travers les mailles</li>
                <li className="flex gap-2"><span>•</span> Votre CRM est un cimetière de leads morts</li>
                <li className="flex gap-2"><span>•</span> L'admin s'accumule soirs et week-ends</li>
                <li className="flex gap-2"><span>•</span> Vos anciens clients vous oublient</li>
                <li className="flex gap-2"><span>•</span> Vous êtes épuisé mais toujours en retard</li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">✅ Avec Sofia</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex gap-2"><span>•</span> Chaque lead reçoit une réponse en moins de 5 min</li>
                <li className="flex gap-2"><span>•</span> Zéro suivi jamais oublié</li>
                <li className="flex gap-2"><span>•</span> CRM propre, organisé et vraiment utile</li>
                <li className="flex gap-2"><span>•</span> Admin géré pendant que vous signez</li>
                <li className="flex gap-2"><span>•</span> Anciens clients contactés régulièrement = recommandations</li>
                <li className="flex gap-2"><span>•</span> Vous travaillez moins et vendez plus</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div id="capabilities" className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Ce que Sofia Fait</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-3">Rapidité sur les Leads</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Nouveau lead d'Immoscout, Homegate ou votre site ? Sofia répond en moins de 5 minutes — 
                qualifié, chaleureux et prêt à réserver.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Réponse personnalisée immédiate</li>
                <li>• Questions de qualification initiales</li>
                <li>• Leads chauds signalés instantanément</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">Nurturing Leads</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Acheteur dans 6 mois ? Vendeur dans 1 an ? Sofia les garde au chaud avec 
                des contacts pertinents et personnels.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Séquences automatisées mais personnalisées</li>
                <li>• Mises à jour marché et nouvelles annonces</li>
                <li>• Jamais pushy, toujours utile</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🏡</div>
              <h3 className="text-xl font-semibold mb-3">Support Annonces</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Descriptions convaincantes, coordination photos, 
                collecte feedbacks — Sofia garde vos annonces au top.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Descriptions professionnelles</li>
                <li>• Planification photographe</li>
                <li>• Compilation feedbacks visites</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Études de Marché</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Besoin de comparables pour une estimation ? L'acheteur veut des infos quartier ? 
                Sofia livre des rapports détaillés prêts pour client.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Analyse ventes comparables</li>
                <li>• Rapports de quartier</li>
                <li>• Synthèses tendances marché</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📅</div>
              <h3 className="text-xl font-semibold mb-3">Agenda & Visites</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Demandes de visite, conflits d'agenda, confirmations, rappels — 
                Sofia gère le chaos pour que vous n'ayez qu'à vous présenter.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Coordination des visites</li>
                <li>• Gestion des conflits agenda</li>
                <li>• Confirmations clients & agents</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📱</div>
              <h3 className="text-xl font-semibold mb-3">Support Marketing</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Posts réseaux sociaux, campagnes email, nouvelle annonce/vente réalisée — 
                Sofia vous garde visible sans effort.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Contenu réseaux sociaux</li>
                <li>• Newsletters email</li>
                <li>• Marketing annonces</li>
              </ul>
            </div>
          </div>
        </div>

        {/* A Day with Sofia */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Une Journée avec Sofia</h2>
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-6">
            <div className="space-y-4 font-mono text-sm">
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">7:02</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Nouveau lead Homegate — Marc & Sophie, relocalisation de Zurich, budget CHF 1.2M, préapprouvé. Répondu et qualifié. Ils veulent voir des biens ce weekend.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">7:05</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">📊 Votre briefing quotidien est prêt. 3 nouveaux leads, 2 visites aujourd'hui, 5 suivis envoyés cette nuit.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">9:30</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Visite 11h confirmée avec l'agent vendeur. Email de préparation envoyé au client avec détails du bien et votre bio.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">11:45</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Pendant votre visite, j'ai répondu à 2 nouvelles demandes et programmé le photographe pour votre nouvelle annonce jeudi.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">14:15</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Info : Le lead Müller n'a pas répondu depuis 5 jours. Voulez-vous que j'envoie une relance douce ?</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">16:30</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Post "Nouvelle annonce" rédigé et programmé pour 18h. J'ai inclus la photo drone — elle est superbe.</span>
              </div>
              <div className="flex gap-4">
                <span className="text-zinc-500 w-16">19:00</span>
                <span className="text-emerald-400">Sofia:</span>
                <span className="text-zinc-300">Journée terminée : 4 nouveaux leads gérés, 3 visites confirmées pour cette semaine, CRM à jour, post publié. Briefing demain prêt. 🌙</span>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Parfait Pour</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🏆</div>
              <h3 className="text-lg font-semibold mb-2">Top Producers</h3>
              <p className="text-sm text-zinc-400">
                Vous faites CHF 10M+ mais noyé dans l'admin ? Sofia vous permet de scaler sans embaucher.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🚀</div>
              <h3 className="text-lg font-semibold mb-2">Agents en Croissance</h3>
              <p className="text-sm text-zinc-400">
                Prêt à passer au niveau supérieur mais budget serré ? Sofia vous donne un support professionnel.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🏠</div>
              <h3 className="text-lg font-semibold mb-2">Spécialistes Luxe</h3>
              <p className="text-sm text-zinc-400">
                Les clients haut de gamme attendent la perfection. Sofia s'assure que rien ne passe à travers.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">👥</div>
              <h3 className="text-lg font-semibold mb-2">Petites Équipes</h3>
              <p className="text-sm text-zinc-400">
                Besoin de support pour 2-3 agents ? Sofia peut gérer plusieurs pipelines.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🌍</div>
              <h3 className="text-lg font-semibold mb-2">Relocalisation</h3>
              <p className="text-sm text-zinc-400">
                Acheteurs expatriés qui ont besoin d'accompagnement. Sofia les garde engagés jusqu'à l'arrivée.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">⏰</div>
              <h3 className="text-lg font-semibold mb-2">Agents à Temps Partiel</h3>
              <p className="text-sm text-zinc-400">
                Impossible de répondre pendant votre autre job ? Sofia vous couvre 24/7.
              </p>
            </div>
          </div>
        </div>

        {/* Results */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Résultats Attendus</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">3x</div>
              <div className="text-lg font-medium mb-2">Conversion Leads</div>
              <div className="text-sm text-zinc-500">Réponse rapide = plus de RDV bookés</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">15+</div>
              <div className="text-lg font-medium mb-2">Heures Économisées/Semaine</div>
              <div className="text-sm text-zinc-500">Admin géré pendant que vous vendez</div>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-8 text-center">
              <div className="text-5xl font-bold text-emerald-400 mb-2">40%</div>
              <div className="text-lg font-medium mb-2">Plus de Recommandations</div>
              <div className="text-sm text-zinc-500">Anciens clients contactés = plus de bouche-à-oreille</div>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-center">Tarification Indicative</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-sm text-zinc-500 mb-2">AGENT SOLO</div>
                <div className="text-2xl font-bold text-emerald-400 mb-2">CHF 400-800<span className="text-sm text-zinc-500">/mois</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• Réponse leads & nurturing</li>
                  <li>• Briefings quotidiens</li>
                  <li>• Support annonces basique</li>
                </ul>
              </div>
              <div className="text-center border-x border-zinc-800 px-6">
                <div className="text-sm text-emerald-400 mb-2">AGENT ACTIF</div>
                <div className="text-2xl font-bold text-emerald-400 mb-2">CHF 800-1.5K<span className="text-sm text-zinc-500">/mois</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• Gestion leads complète</li>
                  <li>• Support annonces + transactions</li>
                  <li>• Assistance marketing</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-sm text-zinc-500 mb-2">TOP PRODUCER / ÉQUIPE</div>
                <div className="text-2xl font-bold text-emerald-400 mb-2">CHF 1.5-3K<span className="text-sm text-zinc-500">/mois</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• Support haut volume</li>
                  <li>• Pipelines multiples</li>
                  <li>• Support TC complet</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="offer" className="mb-16">
          <div className="bg-gradient-to-br from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Soumettre une Offre</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-center">
              Sofia est actuellement engagée mais examine de nouvelles opportunités. 
              Décrivez votre activité et elle vous répondra sous 24 heures.
            </p>
            <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="max-w-lg mx-auto space-y-4">
              <input type="hidden" name="_subject" value="🏠 Sofia Offre — Support Immobilier (FR)" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Votre Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="vous@email.ch" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
                />
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Votre Nom & Agence</label>
                <input 
                  type="text" 
                  name="name_agency" 
                  placeholder="Marie Dupont, Barnes Genève" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Volume Transactions Annuel</label>
                  <select 
                    name="volume" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white"
                  >
                    <option value="" className="bg-zinc-900">Sélectionner...</option>
                    <option value="1-10" className="bg-zinc-900">1-10 ventes</option>
                    <option value="10-25" className="bg-zinc-900">10-25 ventes</option>
                    <option value="25-50" className="bg-zinc-900">25-50 ventes</option>
                    <option value="50+" className="bg-zinc-900">50+ ventes</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Budget Mensuel</label>
                  <select 
                    name="budget" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white"
                  >
                    <option value="" className="bg-zinc-900">Sélectionner...</option>
                    <option value="CHF 400-800" className="bg-zinc-900">CHF 400-800</option>
                    <option value="CHF 800-1500" className="bg-zinc-900">CHF 800-1'500</option>
                    <option value="CHF 1500-3000" className="bg-zinc-900">CHF 1'500-3'000</option>
                    <option value="CHF 3000+" className="bg-zinc-900">CHF 3'000+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Quel est votre plus gros problème ?</label>
                <textarea 
                  name="pain_points" 
                  rows={4}
                  placeholder="Suivi leads ? Surcharge admin ? CRM chaotique ? Dites-nous ce qui vous freine..."
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600 resize-none"
                />
              </div>
              
              <button type="submit" className="w-full py-4 bg-emerald-500 hover:bg-emerald-600 rounded-lg font-semibold text-lg transition-all hover:-translate-y-0.5">
                Soumettre l'Offre →
              </button>
              
              <p className="text-xs text-zinc-500 text-center">
                Sofia examine toutes les offres personnellement. Réponse sous 24 heures.
              </p>
            </form>
          </div>
        </div>
        
        {/* Footer */}
        <p className="text-center text-sm text-zinc-500">
          Créé par <span className="text-indigo-400">Agent Mafia</span> — Des agents IA qui travaillent vraiment pour vous
        </p>
      </div>
    </div>
  )
}
