import Link from "next/link";

export const metadata = {
  title: "VignettBot — Gestion de Vignette Autoroutière Suisse | Agent Mafia",
  description: "Ne ratez plus jamais le renouvellement de votre vignette. VignettBot suit les délais, gère les e-vignettes et vous évite l'amende de CHF 200.",
};

export default function VignettBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/vignettbot" className="text-sm text-slate-400 hover:text-white">EN</Link>
          <Link href="/registry" className="text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
            Tous les Agents
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🛣️</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Ne Payez Plus Jamais l'Amende de CHF 200
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          VignettBot suit votre vignette autoroutière, envoie des rappels de renouvellement et vous aide à passer à l'e-vignette — pour rester toujours en règle.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#signup" className="bg-green-600 hover:bg-green-700 px-8 py-4 rounded-lg font-semibold text-lg">
            Suivre Ma Vignette →
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Le Piège Annuel de la Vignette</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">😤</div>
            <h3 className="font-semibold mb-2">Facile à Oublier</h3>
            <p className="text-slate-400">Délai au 31 janvier. Un jour de retard = CHF 200 d'amende + CHF 40 pour la vignette.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">🚗</div>
            <h3 className="font-semibold mb-2">Plusieurs Véhicules</h3>
            <p className="text-slate-400">Voiture, véhicule du conjoint, voiture d'entreprise — tout suivre est un casse-tête.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">🔄</div>
            <h3 className="font-semibold mb-2">Confusion E-Vignette</h3>
            <p className="text-slate-400">Les vignettes numériques sont nouvelles. Qu'est-ce qui est lié ? Est-ce valide ? Où acheter ?</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Comment VignettBot Vous Garde en Règle</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="text-2xl">⏰</div>
            <div>
              <h3 className="font-semibold mb-1">Rappels Intelligents</h3>
              <p className="text-slate-400">Notification en décembre — avant la ruée, avant d'oublier.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">📱</div>
            <div>
              <h3 className="font-semibold mb-1">Gestion E-Vignette</h3>
              <p className="text-slate-400">Suivez toutes vos vignettes numériques en un seul endroit. Plaques, dates de validité, liens de renouvellement.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">🚘</div>
            <div>
              <h3 className="font-semibold mb-1">Multi-Véhicules</h3>
              <p className="text-slate-400">Voitures familiales, véhicules de travail, motos — un tableau de bord pour tout.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="max-w-4xl mx-auto px-6 py-16 bg-white/5 rounded-2xl my-8 mx-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Configuration Simple</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl mb-4">1️⃣</div>
            <h3 className="font-semibold mb-2">Ajoutez Vos Véhicules</h3>
            <p className="text-slate-400">Entrez les plaques et l'état actuel de la vignette</p>
          </div>
          <div>
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="font-semibold mb-2">Recevez des Rappels</h3>
            <p className="text-slate-400">Nous vous notifions avant les délais de renouvellement</p>
          </div>
          <div>
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="font-semibold mb-2">Restez en Règle</h3>
            <p className="text-slate-400">Plus jamais de souci de vignette expirée</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Rejoignez la Bêta</h2>
        <p className="text-slate-400 mb-8">Soyez parmi les premiers à essayer VignettBot. Gratuit pendant la bêta.</p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="VignettBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-green-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-green-600 hover:bg-green-700 px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
          >
            Accès Anticipé
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 text-center text-slate-400">
        <p>Fait partie de <Link href="/" className="text-white hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
      </footer>
    </main>
  );
}
