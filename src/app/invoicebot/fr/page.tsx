import Link from 'next/link'

export const metadata = {
  title: 'InvoiceBot — Soyez Payé Plus Vite | Agent Mafia',
  description: 'Agent IA qui crée vos factures, envoie les rappels et relance les retards de paiement. Arrêtez de perdre de l\'argent.',
}

export default function InvoiceBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-amber-500">Agent Mafia</Link>
        <div className="flex items-center gap-4">
          <Link href="/invoicebot" className="text-slate-400 hover:text-white text-sm">EN</Link>
          <Link href="/#agents" className="text-slate-400 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-amber-500/10 rounded-full text-amber-500 text-sm font-medium mb-6">
          💸 Stop aux Impayés
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
          Des Factures Qui<br />
          <span className="text-amber-500">Se Paient Toutes Seules</span>
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          Agent IA qui crée vos factures pro, envoie les rappels automatiques 
          et relance les retards. Concentrez-vous sur votre travail, on s'occupe d'être payé.
        </p>
      </section>

      {/* Pain Points */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Ça Vous Parle?</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
            <div className="text-3xl mb-4">😤</div>
            <h3 className="text-lg font-semibold text-white mb-2">Courir Après les Paiements</h3>
            <p className="text-slate-400">Passer des heures à envoyer des "petits rappels" aux clients qui ne répondent plus</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Trésorerie Floue</h3>
            <p className="text-slate-400">Aucune idée de qui doit quoi, pour quand, ou ce qui est en retard</p>
          </div>
          <div className="bg-slate-800/50 rounded-xl p-6 border border-red-500/20">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="text-lg font-semibold text-white mb-2">Perte de Temps</h3>
            <p className="text-slate-400">Créer des factures manuellement au lieu de faire du travail facturable</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-white text-center mb-12">InvoiceBot S'en Charge</h2>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">📝</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Factures Instantanées</h3>
            <p className="text-slate-400">Dites ce que vous avez fait — facture pro créée en secondes</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">🔔</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Rappels Auto</h3>
            <p className="text-slate-400">Rappels polis avant l'échéance, relances fermes après</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <span className="text-2xl">⚡</span>
            </div>
            <h3 className="text-lg font-semibold text-white mb-2">Escalade</h3>
            <p className="text-slate-400">Pénalités de retard, mises en demeure, et recouvrement si nécessaire</p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="container mx-auto px-6 py-16 bg-slate-800/30 rounded-3xl max-w-5xl">
        <h2 className="text-3xl font-bold text-white text-center mb-12">Comment Ça Marche</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-500 mb-4">1</div>
            <h3 className="text-lg font-semibold text-white mb-2">Connectez</h3>
            <p className="text-slate-400">Liez votre banque ou processeur de paiement</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-500 mb-4">2</div>
            <h3 className="text-lg font-semibold text-white mb-2">Facturez</h3>
            <p className="text-slate-400">"Facture Acme 2'500 CHF pour site web" — fait</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-amber-500 mb-4">3</div>
            <h3 className="text-lg font-semibold text-white mb-2">Soyez Payé</h3>
            <p className="text-slate-400">Le bot gère les rappels jusqu'au paiement</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Arrêtez de Laisser l'Argent sur la Table</h2>
        <p className="text-slate-300 mb-8">Rejoignez la beta — payé plus vite, stressé moins</p>
        
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="max-w-md mx-auto flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="InvoiceBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://agentmafia.one/invoicebot/fr?thanks=1" />
          
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-6 py-4 bg-slate-800 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
          />
          <button 
            type="submit"
            className="px-8 py-4 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-xl transition-colors"
          >
            Accès Anticipé
          </button>
        </form>
        
        <p className="text-sm text-slate-500 mt-4">À partir de 49 CHF/mois • Pas de carte requise pour la beta</p>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            Créé par <Link href="/" className="text-amber-500 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail
          </p>
          <div className="flex gap-6">
            <Link href="/#agents" className="text-slate-400 hover:text-white text-sm">Tous les Agents</Link>
            <Link href="/invoicebot" className="text-slate-400 hover:text-white text-sm">English</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
