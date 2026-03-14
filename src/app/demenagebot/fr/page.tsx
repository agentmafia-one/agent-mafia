import Link from 'next/link'

export const metadata = {
  title: 'DéménageBot — Assistant Déménagement & Changement de Canton | Agent Mafia',
  description: 'Agent IA qui gère toute l\'admin de votre déménagement suisse. Inscription au canton, changements d\'adresse, assurances, transferts. Déménagez sans stress.',
}

export default function DemenageBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-orange-900 to-gray-900 text-white">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/demenagebot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <a href="#signup" className="bg-orange-600 hover:bg-orange-700 px-4 py-2 rounded-lg text-sm font-medium transition-colors">
            Déménager
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block bg-orange-500/20 text-orange-300 px-4 py-1 rounded-full text-sm mb-6">
          📦 Assistant Déménagement Suisse
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Vous Déménagez en Suisse ?<br />
          <span className="text-orange-400">L'Admin est Pire que les Cartons.</span>
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
          DéménageBot gère chaque tâche administrative de votre déménagement — inscription
          au canton, changements d'adresse, transferts d'assurance, services. Concentrez-vous
          sur votre nouveau chez-vous, pas la paperasse.
        </p>
        <a href="#signup" className="inline-block bg-orange-600 hover:bg-orange-700 px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
          Planifier Mon Déménagement →
        </a>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Le Chaos du Déménagement Suisse</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">🏛️</div>
            <h3 className="text-xl font-semibold mb-2">26 Cantons, 26 Systèmes</h3>
            <p className="text-gray-400">Chaque canton a ses règles. Ce qui marchait à Zürich échoue à Vaud. Les délais varient.</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="text-xl font-semibold mb-2">Changements d'Adresse Infinis</h3>
            <p className="text-gray-400">Banque, assurance, employeur, Serafe, Poste, électricité, internet, voiture... Vous en avez oublié ?</p>
          </div>
          <div className="bg-gray-800/50 p-6 rounded-xl border border-gray-700">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-xl font-semibold mb-2">Délai de 14 Jours</h3>
            <p className="text-gray-400">Vous devez vous inscrire sous 14 jours. Raté ? Amendes. Mais qui a le temps en déballant ?</p>
          </div>
        </div>
      </section>

      {/* Key Numbers */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Déménager en Suisse</h2>
        <div className="grid md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center">
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">500K+</p>
            <p className="text-sm text-gray-400 mt-2">Déménagements par an</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">14 jours</p>
            <p className="text-sm text-gray-400 mt-2">Délai d'inscription</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">15+</p>
            <p className="text-sm text-gray-400 mt-2">Adresses à mettre à jour</p>
          </div>
          <div className="bg-gray-900/50 p-6 rounded-xl">
            <p className="text-3xl font-bold text-orange-400">CHF 200+</p>
            <p className="text-sm text-gray-400 mt-2">Amende inscription tardive</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">Comment DéménageBot Fonctionne</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">1</div>
            <h3 className="text-xl font-semibold mb-2">Entrez Votre Déménagement</h3>
            <p className="text-gray-400">Ancienne adresse, nouvelle adresse, date. DéménageBot crée votre checklist personnalisée.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">2</div>
            <h3 className="text-xl font-semibold mb-2">Connectez Vos Comptes</h3>
            <p className="text-gray-400">Banque, assurance, services. On récupère vos prestataires et préparons les mises à jour.</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl">3</div>
            <h3 className="text-xl font-semibold mb-2">On Gère Tout</h3>
            <p className="text-gray-400">DéménageBot envoie les notifications, inscriptions et confirmations. Vous n'avez qu'à déménager.</p>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto px-6 py-16 bg-gray-800/30">
        <h2 className="text-3xl font-bold text-center mb-12">Tout Est Géré</h2>
        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏛️</span>
            <div>
              <h3 className="font-semibold mb-1">Inscription au Canton</h3>
              <p className="text-gray-400 text-sm">Départ ancienne commune, arrivée nouvelle. Formulaires pré-remplis.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📮</span>
            <div>
              <h3 className="font-semibold mb-1">Redirection Postale</h3>
              <p className="text-gray-400 text-sm">Transfert de courrier activé. Rien ne se perd pendant la transition.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🏥</span>
            <div>
              <h3 className="font-semibold mb-1">Mise à Jour Assurances</h3>
              <p className="text-gray-400 text-sm">Maladie, auto, RC — tous notifiés avec nouvelle adresse.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">💡</span>
            <div>
              <h3 className="font-semibold mb-1">Transfert Services</h3>
              <p className="text-gray-400 text-sm">Électricité, internet, mobile — transfert sans coupure.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">🚗</span>
            <div>
              <h3 className="font-semibold mb-1">Immatriculation Véhicule</h3>
              <p className="text-gray-400 text-sm">Nouvelles plaques cantonales ? On gère la paperasse.</p>
            </div>
          </div>
          <div className="flex items-start gap-4">
            <span className="text-2xl">📅</span>
            <div>
              <h3 className="font-semibold mb-1">Suivi des Délais</h3>
              <p className="text-gray-400 text-sm">Ne ratez jamais le délai de 14 jours.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Déménagez Sans le Cauchemar Admin</h2>
        <p className="text-gray-300 mb-8 max-w-xl mx-auto">
          Rejoignez la bêta et laissez DéménageBot gérer votre déménagement suisse. Concentrez-vous sur votre nouveau chez-vous.
        </p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-3"
        >
          <input type="hidden" name="_subject" value="DéménageBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:border-orange-500"
          />
          <button 
            type="submit"
            className="bg-orange-600 hover:bg-orange-700 px-6 py-3 rounded-lg font-semibold transition-colors whitespace-nowrap"
          >
            Accès Anticipé
          </button>
        </form>
        <p className="text-sm text-gray-500 mt-4">Pas de spam. On vous notifie quand DéménageBot est prêt.</p>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 py-8">
        <div className="container mx-auto px-6 text-center text-gray-500 text-sm">
          <p>Membre de <Link href="/" className="text-orange-400 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
        </div>
      </footer>
    </div>
  )
}
