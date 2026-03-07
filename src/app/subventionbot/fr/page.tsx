import Link from "next/link";

export const metadata = {
  title: "SubventionBot — Trouvez les Subventions Énergie de Votre Canton | Agent Mafia",
  description: "Arrêtez de rater de l'argent gratuit. SubventionBot trouve les subventions solaires, pompes à chaleur et isolation spécifiques à votre canton suisse.",
};

export default function SubventionBotFRPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-green-950 to-gray-900 text-white">
      {/* Nav */}
      <nav className="flex justify-between items-center p-6 max-w-6xl mx-auto">
        <Link href="/" className="text-2xl font-bold text-green-400">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/subventionbot" className="text-sm text-gray-400 hover:text-white">EN</Link>
          <Link href="/#agents" className="text-sm text-gray-400 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-4xl mx-auto px-6 py-20 text-center">
        <div className="inline-block px-4 py-2 bg-green-500/20 rounded-full text-green-400 text-sm font-medium mb-6">
          💰 Agent Subventions Énergie
        </div>
        <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
          Vous Ratez de
          <span className="text-green-400"> l'Argent Gratuit</span>
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Chaque canton suisse a des subventions différentes. Pompes à chaleur, panneaux solaires, isolation — 
          des milliers de francs perdus parce que personne ne vous a informé.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#signup" className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-lg font-bold text-lg transition">
            Trouver Mes Subventions →
          </a>
        </div>
      </section>

      {/* Pain Points */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Le Cauchemar des Subventions Suisses</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="text-3xl mb-4">🏔️</div>
            <h3 className="font-bold mb-2">26 Systèmes Différents</h3>
            <p className="text-gray-400">Chaque canton a ses propres programmes, délais et règles. Ce qui marche à Zurich ne s'applique pas à Genève.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="text-3xl mb-4">📋</div>
            <h3 className="font-bold mb-2">Programmes Cachés</h3>
            <p className="text-gray-400">Subventions communales, incitations fédérales, rabais des fournisseurs — personne ne vous donne l'image complète.</p>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <div className="text-3xl mb-4">⏰</div>
            <h3 className="font-bold mb-2">Délais Dépassés</h3>
            <p className="text-gray-400">Les programmes se terminent, les budgets s'épuisent, vous l'apprenez trop tard. Cette prime de CHF 5'000? Disparue.</p>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="max-w-4xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">SubventionBot Trouve Votre Argent</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="text-2xl">🔍</div>
              <div>
                <h3 className="font-bold mb-1">Recherche par Canton</h3>
                <p className="text-gray-400">Entrez votre code postal, nous scannons les programmes cantonaux, communaux et fédéraux.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">☀️</div>
              <div>
                <h3 className="font-bold mb-1">Tous Types d'Énergie</h3>
                <p className="text-gray-400">Solaire, pompes à chaleur, chauffage pellets, isolation, fenêtres, bornes EV — toutes les primes trouvées.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">📝</div>
              <div>
                <h3 className="font-bold mb-1">Aide aux Demandes</h3>
                <p className="text-gray-400">Formulaires pré-remplis, liste des documents requis, guide de soumission.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="text-2xl">🔔</div>
              <div>
                <h3 className="font-bold mb-1">Alertes Nouveaux Programmes</h3>
                <p className="text-gray-400">Soyez notifié quand de nouvelles subventions arrivent ou que les budgets sont renouvelés.</p>
              </div>
            </div>
          </div>
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="font-bold mb-4 text-green-400">Exemple: Canton de Vaud</h3>
            <ul className="space-y-3 text-gray-300">
              <li>✅ Pompe à chaleur: jusqu'à CHF 10'000</li>
              <li>✅ Panneaux solaires: CHF 400/kWc</li>
              <li>✅ Isolation: CHF 40/m²</li>
              <li>✅ Borne de recharge: CHF 500</li>
              <li>✅ Potentiel total: CHF 15'000+</li>
            </ul>
            <p className="text-sm text-gray-500 mt-4">*Montants variables selon projet, changent annuellement</p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="signup" className="max-w-2xl mx-auto px-6 py-20 text-center">
        <h2 className="text-3xl font-bold mb-4">Ne Laissez Plus d'Argent sur la Table</h2>
        <p className="text-gray-400 mb-8">Rejoignez la liste d'attente. Nous trouverons toutes les subventions auxquelles vous avez droit.</p>
        <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
          <input type="hidden" name="_subject" value="SubventionBot Beta Signup (FR)" />
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="email"
            name="email"
            placeholder="votre@email.com"
            required
            className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 focus:border-green-400 outline-none"
          />
          <button type="submit" className="px-6 py-3 bg-green-500 hover:bg-green-600 rounded-lg font-bold transition">
            Accès Anticipé
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-8 text-center text-gray-500">
          <p>Créé par <Link href="/" className="text-green-400 hover:underline">Agent Mafia</Link> — Des agents IA qui font vraiment le travail</p>
        </div>
      </footer>
    </main>
  );
}
