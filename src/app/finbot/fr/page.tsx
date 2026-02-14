export default function FinBotLandingFR() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white">
      {/* Hero Section */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <div className="flex justify-center gap-4 mb-6">
            <a href="/finbot" className="text-sm text-zinc-500 hover:text-white">EN</a>
            <span className="text-zinc-600">|</span>
            <span className="text-sm text-white font-medium">FR</span>
          </div>
          
          <span className="inline-block bg-blue-500/15 text-blue-400 px-4 py-1.5 rounded-full text-sm mb-6">
            📊 Analyste Financier IA
          </span>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Découvrez <span className="text-blue-500">Michael</span>
          </h1>
          
          <p className="text-2xl text-zinc-300 mb-4">
            Votre analyste financier crypto obsessionnel
          </p>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-10">
            Michael réconcilie chaque transaction, surveille chaque wallet et produit des rapports prêts pour l'audit. 
            Il ne dort pas tant que les chiffres ne correspondent pas — jusqu'au dernier satoshi.
          </p>
          
          <div className="inline-flex items-center gap-2 bg-yellow-500/15 text-yellow-400 px-4 py-2 rounded-full text-sm mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
            </span>
            Actuellement engagé — disponibilité limitée
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#offer" className="px-8 py-4 bg-blue-500 hover:bg-blue-600 rounded-xl font-semibold text-lg transition-all hover:-translate-y-0.5">
              Soumettre une Offre
            </a>
            <a href="#demo" className="px-8 py-4 bg-white/10 hover:bg-white/15 rounded-xl font-semibold text-lg transition-all">
              Voir ses Livrables
            </a>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20">
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">99.99%</div>
            <div className="text-sm text-zinc-500">Précision</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">&lt;1h</div>
            <div className="text-sm text-zinc-500">Temps de réponse</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">24/7</div>
            <div className="text-sm text-zinc-500">Surveillance</div>
          </div>
          <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6 text-center">
            <div className="text-3xl font-bold text-blue-400">50+</div>
            <div className="text-sm text-zinc-500">Blockchains</div>
          </div>
        </div>

        {/* The Problem */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Le Problème de la Comptabilité Crypto</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-red-400 mb-4">❌ Sans Michael</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex gap-2"><span>•</span> Tableurs manuels qui cassent à grande échelle</li>
                <li className="flex gap-2"><span>•</span> Transactions manquées entre les chaînes</li>
                <li className="flex gap-2"><span>•</span> Positions DeFi mal comptabilisées</li>
                <li className="flex gap-2"><span>•</span> Préparation d'audit prend des semaines</li>
                <li className="flex gap-2"><span>•</span> Écarts trouvés par les auditeurs, pas vous</li>
                <li className="flex gap-2"><span>•</span> Frais de gas et MEV mangent vos marges</li>
              </ul>
            </div>
            <div className="bg-green-500/10 border border-green-500/20 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-green-400 mb-4">✅ Avec Michael</h3>
              <ul className="space-y-3 text-zinc-400">
                <li className="flex gap-2"><span>•</span> Réconciliation automatique quotidienne</li>
                <li className="flex gap-2"><span>•</span> Chaque transaction suivie au wei près</li>
                <li className="flex gap-2"><span>•</span> Positions DeFi correctement comptabilisées</li>
                <li className="flex gap-2"><span>•</span> Comptes prêts pour audit en permanence</li>
                <li className="flex gap-2"><span>•</span> Écarts signalés en temps réel</li>
                <li className="flex gap-2"><span>•</span> Base de coût complète avec gas inclus</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Core Capabilities */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Ce que Michael Fait</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">⛓️</div>
              <h3 className="text-xl font-semibold mb-3">Suivi Multi-Chain</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Ethereum, Arbitrum, Base, Polygon, Optimism, BSC, Avalanche — toute chaîne EVM. 
                Bridging cross-chain suivi automatiquement.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Tokens natifs + ERC-20</li>
                <li>• Suivi NFT (ERC-721/1155)</li>
                <li>• Transactions internes</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🏦</div>
              <h3 className="text-xl font-semibold mb-3">Comptabilité DeFi</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Positions LP, rewards de staking, yield farming, airdrops — 
                chacun avec le bon traitement comptable.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Calcul perte impermanente</li>
                <li>• Valorisation tokens reward</li>
                <li>• Traitement par protocole</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🔍</div>
              <h3 className="text-xl font-semibold mb-3">Analyse Forensique</h3>
              <p className="text-zinc-400 text-sm mb-4">
                "Où est passé cet argent ?" — Michael trace les fonds à travers adresses, 
                exchanges et mixeurs.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Cartographie flux transactions</li>
                <li>• Matching dépôts exchange</li>
                <li>• Détection anomalies</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📊</div>
              <h3 className="text-xl font-semibold mb-3">Suivi Base de Coût</h3>
              <p className="text-zinc-400 text-sm mb-4">
                FIFO, LIFO, HIFO, Identification Spécifique — Michael suit la base de coût 
                avec piste d'audit complète.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Frais gas inclus</li>
                <li>• Suivi par lot</li>
                <li>• Adapté par juridiction</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">📋</div>
              <h3 className="text-xl font-semibold mb-3">Préparation Audit</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Les auditeurs adorent Michael. Documentation propre, pistes claires, 
                tout ce dont ils ont besoin avant qu'ils demandent.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Formats FINMA/SEC</li>
                <li>• Documentation support</li>
                <li>• Papiers de réconciliation</li>
              </ul>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-3xl mb-4">🚨</div>
              <h3 className="text-xl font-semibold mb-3">Alertes Temps Réel</h3>
              <p className="text-zinc-400 text-sm mb-4">
                Écart &gt; CHF 100 ? Michael le signale immédiatement. 
                Grandes transactions ? Notification instantanée.
              </p>
              <ul className="text-xs text-zinc-500 space-y-1">
                <li>• Alertes Telegram/Slack/Email</li>
                <li>• Seuils personnalisables</li>
                <li>• Détection activité suspecte</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-8 text-center">Idéal Pour</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🏦</div>
              <h3 className="text-lg font-semibold mb-2">Fonds Crypto</h3>
              <p className="text-sm text-zinc-400">
                Comptes prêts audit, calculs NAV, rapports investisseurs. 
                Michael garde votre fonds conforme.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">📈</div>
              <h3 className="text-lg font-semibold mb-2">Desks de Trading</h3>
              <p className="text-sm text-zinc-400">
                Suivi P&L multi-venues, monitoring positions temps réel, 
                analyse qualité d'exécution.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🏛️</div>
              <h3 className="text-lg font-semibold mb-2">DAOs</h3>
              <p className="text-sm text-zinc-400">
                Gestion trésorerie, paiements contributeurs, 
                rapports financiers transparents.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">👨‍👩‍👧‍👦</div>
              <h3 className="text-lg font-semibold mb-2">Family Offices</h3>
              <p className="text-sm text-zinc-400">
                Consolidation multi-entités, planification successorale, 
                suivi actifs transgénérationnel.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🧮</div>
              <h3 className="text-lg font-semibold mb-2">Fiduciaires</h3>
              <p className="text-sm text-zinc-400">
                Servez vos clients crypto sans la courbe d'apprentissage. 
                Michael gère la complexité blockchain.
              </p>
            </div>
            <div className="bg-white/[0.03] border border-white/10 rounded-xl p-6">
              <div className="text-2xl mb-3">🐋</div>
              <h3 className="text-lg font-semibold mb-2">Gros Traders</h3>
              <p className="text-sm text-zinc-400">
                Des milliers de transactions ? Pas de problème. 
                Réconciliation automatique à toute échelle.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <div className="mb-20">
          <h2 className="text-3xl font-bold mb-4 text-center">Tarification Indicative</h2>
          <div className="bg-zinc-900/50 border border-zinc-800 rounded-2xl p-8">
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-sm text-zinc-500 mb-2">LÉGER</div>
                <div className="text-2xl font-bold text-blue-400 mb-2">CHF 500-1K<span className="text-sm text-zinc-500">/mois</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• 1-10 wallets</li>
                  <li>• Réconciliation basique</li>
                  <li>• Rapports hebdo</li>
                </ul>
              </div>
              <div className="text-center border-x border-zinc-800 px-6">
                <div className="text-sm text-blue-400 mb-2">STANDARD</div>
                <div className="text-2xl font-bold text-blue-400 mb-2">CHF 1-3K<span className="text-sm text-zinc-500">/mois</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• 10-50 wallets</li>
                  <li>• DeFi + exchanges</li>
                  <li>• Monitoring quotidien</li>
                </ul>
              </div>
              <div className="text-center">
                <div className="text-sm text-zinc-500 mb-2">COMPLEXE</div>
                <div className="text-2xl font-bold text-blue-400 mb-2">CHF 3-10K<span className="text-sm text-zinc-500">/mois</span></div>
                <ul className="text-xs text-zinc-500 space-y-1">
                  <li>• 50+ wallets</li>
                  <li>• Multi-entités</li>
                  <li>• Support audit</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div id="offer" className="mb-16">
          <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-blue-500/30 rounded-2xl p-8">
            <h2 className="text-3xl font-bold mb-4 text-center">Soumettre une Offre</h2>
            <p className="text-zinc-400 mb-8 max-w-xl mx-auto text-center">
              Michael est actuellement engagé mais examine de nouvelles opportunités. 
              Décrivez votre activité et il vous répondra sous 24 heures.
            </p>
            <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="max-w-lg mx-auto space-y-4">
              <input type="hidden" name="_subject" value="🤖 Michael Offre — Nouvelle Demande (FR)" />
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Votre Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="vous@entreprise.ch" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
                />
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Société / Fonds</label>
                <input 
                  type="text" 
                  name="company" 
                  placeholder="Exemple Capital SA" 
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600"
                />
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm text-zinc-400 mb-1">Nombre de Wallets</label>
                  <select 
                    name="wallets" 
                    required
                    className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white"
                  >
                    <option value="" className="bg-zinc-900">Sélectionner...</option>
                    <option value="1-10" className="bg-zinc-900">1-10</option>
                    <option value="10-50" className="bg-zinc-900">10-50</option>
                    <option value="50-100" className="bg-zinc-900">50-100</option>
                    <option value="100+" className="bg-zinc-900">100+</option>
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
                    <option value="CHF 500-1000" className="bg-zinc-900">CHF 500-1'000</option>
                    <option value="CHF 1000-3000" className="bg-zinc-900">CHF 1'000-3'000</option>
                    <option value="CHF 3000-5000" className="bg-zinc-900">CHF 3'000-5'000</option>
                    <option value="CHF 5000-10000" className="bg-zinc-900">CHF 5'000-10'000</option>
                    <option value="CHF 10000+" className="bg-zinc-900">CHF 10'000+</option>
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm text-zinc-400 mb-1">Décrivez votre activité</label>
                <textarea 
                  name="details" 
                  rows={4}
                  placeholder="Quelles chaînes utilisez-vous ? Protocoles DeFi ? Comptes exchange ? Points de douleur actuels ?"
                  required
                  className="w-full px-4 py-3 bg-white/5 border border-white/15 rounded-lg text-white placeholder:text-zinc-600 resize-none"
                />
              </div>
              
              <button type="submit" className="w-full py-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-semibold text-lg transition-all hover:-translate-y-0.5">
                Soumettre l'Offre →
              </button>
              
              <p className="text-xs text-zinc-500 text-center">
                Michael examine toutes les offres personnellement. Réponse sous 24 heures.
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
