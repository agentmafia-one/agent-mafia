import Link from "next/link";

export const metadata = {
  title: "EWZBot — Optimiseur d'Électricité Zurich | Agent Mafia",
  description: "Arrêtez de surpayer votre électricité à Zurich. EWZBot analyse votre consommation, trouve le meilleur tarif et gère vos données de compteur intelligent.",
};

export default function EWZBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-xl font-bold">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/ewzbot" className="text-sm text-slate-400 hover:text-white">EN</Link>
          <Link href="/registry" className="text-sm bg-white/10 px-4 py-2 rounded-lg hover:bg-white/20">
            Tous les Agents
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">⚡</div>
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Arrêtez de Surpayer Votre Électricité à Zurich
        </h1>
        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
          EWZBot analyse votre consommation EWZ, trouve le tarif optimal et surveille votre compteur intelligent — pour ne plus jamais payer trop.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#signup" className="bg-yellow-500 hover:bg-yellow-600 text-black px-8 py-4 rounded-lg font-semibold text-lg">
            Optimiser Ma Facture →
          </a>
        </div>
      </section>

      {/* Problem */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Le Piège de l'Électricité à Zurich</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">📊</div>
            <h3 className="font-semibold mb-2">Tarifs Confus</h3>
            <p className="text-slate-400">Tarif haut/bas, injection solaire, heures de pointe — les prix EWZ sont un labyrinthe.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">📈</div>
            <h3 className="font-semibold mb-2">Coûts en Hausse</h3>
            <p className="text-slate-400">Les prix de l'électricité ont augmenté de 27% en 2023. Êtes-vous sur le bon forfait ?</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl">
            <div className="text-3xl mb-4">🔌</div>
            <h3 className="font-semibold mb-2">Mystère du Compteur</h3>
            <p className="text-slate-400">Vous avez un compteur intelligent mais aucune idée de ce que signifient les données.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-2xl font-bold mb-8 text-center">Comment EWZBot Réduit Votre Facture</h2>
        <div className="space-y-6">
          <div className="flex gap-4 items-start">
            <div className="text-2xl">🔍</div>
            <div>
              <h3 className="font-semibold mb-1">Analyse de Consommation</h3>
              <p className="text-slate-400">Nous analysons vos habitudes — quand vous consommez, combien, heures pleines vs creuses.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">💡</div>
            <div>
              <h3 className="font-semibold mb-1">Optimisation Tarifaire</h3>
              <p className="text-slate-400">Trouvez le meilleur tarif EWZ. Déplacez les activités énergivores aux heures creuses.</p>
            </div>
          </div>
          <div className="flex gap-4 items-start">
            <div className="text-2xl">📱</div>
            <div>
              <h3 className="font-semibold mb-1">Alertes Intelligentes</h3>
              <p className="text-slate-400">Soyez notifié des pics de consommation inhabituels avant qu'ils n'impactent votre facture.</p>
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
            <h3 className="font-semibold mb-2">Connectez EWZ</h3>
            <p className="text-slate-400">Liez votre compte EWZ ou téléchargez vos factures</p>
          </div>
          <div>
            <div className="text-4xl mb-4">2️⃣</div>
            <h3 className="font-semibold mb-2">Obtenez l'Analyse</h3>
            <p className="text-slate-400">Nous analysons les données et trouvons les économies</p>
          </div>
          <div>
            <div className="text-4xl mb-4">3️⃣</div>
            <h3 className="font-semibold mb-2">Économisez</h3>
            <p className="text-slate-400">Appliquez les recommandations, suivez les résultats</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="max-w-xl mx-auto px-6 py-20 text-center">
        <h2 className="text-2xl font-bold mb-4">Rejoignez la Bêta</h2>
        <p className="text-slate-400 mb-8">Soyez parmi les premiers à essayer EWZBot. Gratuit pendant la bêta.</p>
        <form 
          action="https://formsubmit.co/dev@agentmafia.one" 
          method="POST"
          className="flex flex-col sm:flex-row gap-4"
        >
          <input type="hidden" name="_subject" value="EWZBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input 
            type="email" 
            name="email"
            placeholder="votre@email.com" 
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-yellow-500 focus:outline-none"
          />
          <button 
            type="submit"
            className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 rounded-lg font-semibold whitespace-nowrap"
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
