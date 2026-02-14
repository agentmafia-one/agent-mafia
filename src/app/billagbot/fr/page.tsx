import Link from 'next/link'

export const metadata = {
  title: 'BillagBot — Contestez Serafe | Agent Mafia',
  description: 'Agent IA pour contester Serafe, demander des exemptions et corriger les erreurs de facturation. Arrêtez de surpayer la redevance radio-TV.',
}

export default function BillagBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-red-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/billagbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Vérifier Mon Exemption
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-red-500/20 text-red-300 px-4 py-1 rounded-full text-sm mb-6">
          📺 Contestation Redevance Serafe
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Encore une Facture Serafe ?<br />
          <span className="text-red-400">Ripostez.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          BillagBot gère vos contestations Serafe, demandes d'exemption et erreurs de facturation. 
          Arrêtez de payer CHF 335/an si vous n'êtes pas obligé.
        </p>
        <a href="#signup" className="inline-block bg-red-600 hover:bg-red-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Vérifier Si Je Suis Exempté →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Problème Serafe</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">💸</div>
            <h3 className="text-xl font-semibold mb-2">CHF 335/An</h3>
            <p className="text-gray-400">Tout le monde paie. Même sans TV ni radio. Même les étudiants. Même les aveugles.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📝</div>
            <h3 className="text-xl font-semibold mb-2">Labyrinthe d'Exemptions</h3>
            <p className="text-gray-400">Les exemptions existent mais le processus est confus. Mauvais formulaire ? Refusé. En retard ? Payez quand même.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏢</div>
            <h3 className="text-xl font-semibold mb-2">Tarifs Entreprises</h3>
            <p className="text-gray-400">Les entreprises paient jusqu'à CHF 35'590/an. Êtes-vous dans la bonne catégorie ? Probablement pas.</p>
          </div>
        </div>
      </section>

      {/* Who Qualifies */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Qui Peut Être Exempté ?</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-red-400">✅ Vous POUVEZ Être Exempté Si :</h3>
            <ul className="space-y-2 text-gray-300">
              <li>• Vous recevez des prestations complémentaires AVS/AI (PC)</li>
              <li>• Vous recevez l'aide sociale</li>
              <li>• Vous êtes diplomate ou employé d'organisation internationale</li>
              <li>• Vous vivez en EMS (déjà couvert)</li>
              <li>• Vous faites partie d'un ménage qui paie déjà</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-gray-400">❌ Idées Reçues :</h3>
            <ul className="space-y-2 text-gray-400">
              <li>• "Je n'ai pas de TV" — Ça ne compte plus</li>
              <li>• "Je regarde que Netflix" — Vous devez quand même payer</li>
              <li>• "Je suis étudiant" — Exempté uniquement avec PC</li>
              <li>• "Je suis aveugle" — Réduction partielle, pas exempté</li>
            </ul>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment Fonctionne BillagBot</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">1</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Décrivez Votre Situation</h3>
              <p className="text-gray-400">Questionnaire rapide : source de revenus, ménage, statut de résidence.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">2</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">BillagBot Analyse Vos Options</h3>
              <p className="text-gray-400">Nous vérifions les critères d'exemption, erreurs de catégorie entreprise et erreurs de facturation.</p>
            </div>
          </div>
          <div className="flex gap-6 items-start">
            <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 text-xl font-bold">3</div>
            <div>
              <h3 className="text-xl font-semibold mb-2">Recevez Votre Lettre de Contestation</h3>
              <p className="text-gray-400">Lettre prête à envoyer en allemand, français ou italien. Nous suivons la réponse.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Business Section */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-8">Pour les Entreprises</h2>
        <div className="max-w-2xl mx-auto text-center">
          <p className="text-xl text-gray-300 mb-6">
            Serafe facture les entreprises selon leur chiffre d'affaires. Beaucoup sont dans la mauvaise catégorie.
          </p>
          <div className="bg-gray-900/50 p-6 rounded-xl mb-6">
            <p className="text-sm text-gray-400 mb-2">Tarifs entreprises de</p>
            <p className="text-3xl font-bold">CHF 160 <span className="text-gray-400">à</span> CHF 35'590<span className="text-lg text-gray-400">/an</span></p>
          </div>
          <p className="text-gray-400">BillagBot vérifie votre catégorie et conteste les surfacturations automatiquement.</p>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto px-6 py-16 text-center">
        <p className="text-gray-400 mb-2">Frais unique</p>
        <p className="text-4xl font-bold mb-4">CHF 49</p>
        <p className="text-gray-400">Lettre de contestation + vérification exemption + suivi • Pas d'abonnement</p>
        <p className="text-sm text-gray-500 mt-4">Remboursé si vous ne pouvez pas économiser</p>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-red-900 to-gray-900 p-8 rounded-2xl border border-red-500/30 text-center">
          <h2 className="text-3xl font-bold mb-4">Vérifiez Votre Statut d'Exemption</h2>
          <p className="text-gray-300 mb-6">Vérification gratuite. Nous facturons uniquement si vous pouvez économiser.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="BillagBot Vérification Exemption (FR)" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="email"
              name="email"
              required
              placeholder="Votre adresse email"
              className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none"
            />
            <select name="situation" className="w-full px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:border-red-500 focus:outline-none">
              <option value="">Sélectionnez votre situation</option>
              <option value="individual">Particulier / Ménage</option>
              <option value="business">Entreprise</option>
              <option value="student">Étudiant</option>
              <option value="social-assistance">Bénéficiaire aide sociale</option>
              <option value="el">Bénéficiaire PC (prestations complémentaires)</option>
            </select>
            <button type="submit" className="w-full bg-red-600 hover:bg-red-700 py-3 rounded-lg font-semibold transition-colors">
              Vérifier Mon Statut →
            </button>
          </form>
          <p className="text-sm text-gray-500 mt-4">Vérification gratuite. Pas de spam.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-gray-800 text-center text-gray-400">
        <p>Créé par <Link href="/" className="text-red-400 hover:text-red-300">Agent Mafia</Link> — Des agents IA qui se battent pour vous</p>
      </footer>
    </div>
  )
}
