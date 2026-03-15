import Link from 'next/link'

export const metadata = {
  title: 'KKBot — Suivi Remboursements Caisse Maladie | Agent Mafia',
  description: 'Agent IA qui suit vos demandes de remboursement, relance votre assurance et conteste les refus. Ne perdez plus d\'argent face à votre caisse maladie.',
}

export default function KKBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-rose-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/kkbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-rose-600 hover:bg-rose-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Suivre Mes Remboursements
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-rose-500/20 text-rose-300 px-4 py-1 rounded-full text-sm mb-6">
          🏥 Suivi Remboursements Caisse Maladie
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Votre Caisse Maladie<br />
          <span className="text-rose-400">Vous Doit de l'Argent</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          KKBot suit chaque demande, relance les remboursements en attente et
          conteste les refus automatiquement. Arrêtez de perdre de l'argent.
        </p>
        <a href="#signup" className="inline-block bg-rose-600 hover:bg-rose-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Commencer le Suivi →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Cauchemar des Remboursements</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📄</div>
            <h3 className="text-xl font-semibold mb-2">Perdu dans la Pile</h3>
            <p className="text-gray-400">Vous avez soumis une demande il y a 3 mois. Payée ? Refusée ? Mystère total.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">❌</div>
            <h3 className="text-xl font-semibold mb-2">Refus Silencieux</h3>
            <p className="text-gray-400">Ils refusent en espérant que vous ne remarquerez pas. Pas d'email, pas d'appel — juste le silence.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">La Vie Est Trop Courte</h3>
            <p className="text-gray-400">Appeler la hotline, attendre en ligne, ré-expliquer la même chose. Il doit y avoir mieux.</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Le Coût Caché de Ne Pas Suivre</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-rose-400">CHF 800+</p>
            <p className="text-sm text-gray-400 mt-2">Non réclamés en moyenne par an</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-rose-400">23%</p>
            <p className="text-sm text-gray-400 mt-2">Des demandes refusées injustement</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-rose-400">45 jours</p>
            <p className="text-sm text-gray-400 mt-2">Délai moyen de paiement</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-rose-400">3 heures</p>
            <p className="text-sm text-gray-400 mt-2">Perdues en attente par an</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment KKBot Récupère Votre Argent</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">Soumettez Une Fois</h3>
            <p className="text-gray-400">Transférez vos factures à KKBot. On enregistre tout et commence le suivi automatiquement.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">On Relance</h3>
            <p className="text-gray-400">KKBot surveille le statut, envoie des rappels à votre assureur et escalade si nécessaire.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-rose-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">On Conteste</h3>
            <p className="text-gray-400">Demande refusée ? KKBot génère des lettres de contestation citant la LAMal.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Tout Ce Dont Vous Avez Besoin</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">📊</span>
            <div>
              <h3 className="font-semibold mb-1">Tableau de Bord</h3>
              <p className="text-gray-400 text-sm">Voyez toutes vos demandes en attente, payées et refusées au même endroit.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">⏰</span>
            <div>
              <h3 className="font-semibold mb-1">Relances Automatiques</h3>
              <p className="text-gray-400 text-sm">Pas de réponse sous 30 jours ? KKBot envoie un rappel automatiquement.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">⚖️</span>
            <div>
              <h3 className="font-semibold mb-1">Générateur de Contestation</h3>
              <p className="text-gray-400 text-sm">Lettres d'appel en un clic pour les refus, citant les règlements LAMal.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📱</span>
            <div>
              <h3 className="font-semibold mb-1">Alertes WhatsApp</h3>
              <p className="text-gray-400 text-sm">Soyez notifié quand une demande est payée ou nécessite votre attention.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏥</span>
            <div>
              <h3 className="font-semibold mb-1">Tous les Assureurs</h3>
              <p className="text-gray-400 text-sm">CSS, Helsana, Swica, Assura, Concordia — on gère tous les assureurs.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">💰</span>
            <div>
              <h3 className="font-semibold mb-1">Satisfait ou Remboursé</h3>
              <p className="text-gray-400 text-sm">Si on ne récupère pas plus que ce que vous payez, remboursement intégral.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Arrêtez de Perdre de l'Argent</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta et laissez KKBot se battre pour chaque franc qui vous est dû.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="KKBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-rose-500"
          />
          <button 
            type="submit"
            className="bg-rose-600 hover:bg-rose-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Accès Anticipé
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Pas de spam. On vous notifie quand KKBot est prêt.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Membre de <Link href="/" className="text-rose-400 hover:underline">Agent Mafia</Link> — Agents IA qui font vraiment le travail</p>
        </div>
      </footer>
    </div>
  )
}
