import Link from "next/link";

export const metadata = {
  title: "ImportBot — Calculateur de Douane Suisse | Agent Mafia",
  description: "Fini les surprises avec les frais de douane. ImportBot calcule les droits, optimise la TVA et gère les déclarations.",
};

export default function ImportBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/importbot" className="text-sm text-slate-400 hover:text-white">EN</Link>
          <Link href="/registry" className="text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
            Tous les Agents
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">📦</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Fini les Surprises de Frais de Douane
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          ImportBot calcule les droits avant l'achat, optimise la TVA et gère les déclarations — pour connaître le vrai coût.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#signup" className="bg-blue-600 hover:bg-blue-700 px-8 py-4 rounded-lg font-semibold text-lg">
            Calculer Mes Droits →
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Le Piège des Achats en Ligne</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">😱</div>
            <h3 className="font-semibold mb-2">Frais Surprise</h3>
            <p className="text-slate-400">Commander €100, payer CHF 40+ de douane. Le seuil de CHF 65 piège tout le monde.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">🧮</div>
            <h3 className="font-semibold mb-2">Règles Complexes</h3>
            <p className="text-slate-400">Taux différents par produit. TVA, droits, frais de manutention — ça s'accumule.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-semibold mb-2">Paperasse Infernale</h3>
            <p className="text-slate-400">L'auto-déclaration économise mais demande formulaires et patience.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Comment ImportBot Vous Fait Économiser</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="text-2xl">🔍</div>
            <div>
              <h3 className="font-semibold mb-1">Calculateur Pré-Achat</h3>
              <p className="text-slate-400">Connaissez le coût réel avant d'acheter. Droits, TVA, manutention — tout inclus.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="font-semibold mb-1">Optimisation des Seuils</h3>
              <p className="text-slate-400">Divisez les commandes, choisissez le bon transporteur — restez sous les limites légalement.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">📝</div>
            <div>
              <h3 className="font-semibold mb-1">Aide à la Déclaration</h3>
              <p className="text-slate-400">Guide d'auto-dédouanement avec formulaires pré-remplis. Évitez les CHF 18 de frais Poste.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Signup */}
      <section id="signup" className="max-w-xl mx-auto px-6 py-20">
        <div className="bg-white/5 p-8 rounded-2xl text-center">
          <h2 className="text-2xl font-bold mb-4">Accès Anticipé</h2>
          <p className="text-slate-400 mb-6">Rejoignez la bêta et ne surpayez plus vos imports.</p>
          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="ImportBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email" 
              placeholder="votre@email.com" 
              required
              className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-blue-500 outline-none"
            />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg font-semibold">
              Rejoindre la Bêta
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-slate-500 text-sm">
        <p>Créé par <Link href="/" className="text-slate-400 hover:text-white">Agent Mafia</Link> — Des agents IA qui travaillent pour vous</p>
      </footer>
    </main>
  );
}
