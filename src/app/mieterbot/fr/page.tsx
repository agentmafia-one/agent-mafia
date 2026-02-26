import Link from 'next/link'

export const metadata = {
  title: 'MieterBot — Agent IA Droits des Locataires Suisse',
  description: 'Contestez les hausses de loyer abusives, récupérez votre dépôt de garantie et connaissez vos droits. Défense des locataires par IA.',
}

export default function MieterBotFRPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900">
      {/* Nav */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-white font-bold text-xl">Agent Mafia</Link>
        <div className="flex gap-4 items-center">
          <Link href="/mieterbot" className="text-slate-400 hover:text-white text-sm">🇬🇧 EN</Link>
          <Link href="/#agents" className="text-slate-400 hover:text-white">Tous les Agents</Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="container mx-auto px-6 py-20 text-center">
        <div className="text-6xl mb-6">🏠</div>
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Votre Régie a des Avocats.<br/>
          <span className="text-amber-400">Vous Avez MieterBot.</span>
        </h1>
        <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-8">
          Contestez les hausses de loyer abusives, récupérez votre dépôt de garantie 
          et connaissez vos droits selon le droit suisse. Défense IA qui fonctionne vraiment.
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">🛡️ Droit du Bail Suisse</span>
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">📝 Lettres de Contestation</span>
          <span className="px-4 py-2 bg-slate-700/50 rounded-full text-slate-300 text-sm">💰 Récupération Garantie</span>
        </div>
      </section>

      {/* Problem */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ça Vous Dit Quelque Chose ?</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">📈</div>
              <h3 className="text-white font-semibold mb-2">Avis d'Augmentation de Loyer</h3>
              <p className="text-slate-400">Reçu une hausse de loyer et vous ne savez pas si c'est légal ? La plupart des locataires acceptent sans broncher.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">💸</div>
              <h3 className="text-white font-semibold mb-2">Garantie Disparue</h3>
              <p className="text-slate-400">Déménagé il y a 6 mois, toujours pas de garantie. La régie ignore vos emails.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">🔧</div>
              <h3 className="text-white font-semibold mb-2">Réparations Ignorées</h3>
              <p className="text-slate-400">Chauffage en panne, moisissures aux murs — le propriétaire dit "c'est normal". Vous savez que non.</p>
            </div>
            <div className="bg-slate-800/50 p-6 rounded-xl border border-slate-700">
              <div className="text-3xl mb-3">📋</div>
              <h3 className="text-white font-semibold mb-2">Retenues Abusives</h3>
              <p className="text-slate-400">L'état des lieux réclame CHF 2'000 pour "nettoyage" — alors que vous avez passé 3 jours à frotter.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Solution */}
      <section className="container mx-auto px-6 py-16 bg-slate-800/30">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-8">Comment MieterBot Vous Défend</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">📊</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Analyse Votre Situation</h3>
              <p className="text-slate-400 text-sm">Téléchargez votre bail, avis d'augmentation ou litige. MieterBot identifie vos droits selon le droit suisse.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">✍️</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Génère des Lettres Juridiques</h3>
              <p className="text-slate-400 text-sm">Obtenez des lettres de contestation citant les Art. 269-270 CO, références cantonales et langage juridique approprié.</p>
            </div>
            <div>
              <div className="w-16 h-16 bg-amber-500/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">⚡</span>
              </div>
              <h3 className="text-white font-semibold mb-2">Suit & Escalade</h3>
              <p className="text-slate-400 text-sm">MieterBot suit les délais, envoie des relances et prépare les dossiers pour la Commission de conciliation si nécessaire.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="container mx-auto px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold text-white mb-8 text-center">Ce Que MieterBot Gère</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Contestation Hausse de Loyer</h3>
                <p className="text-slate-400 text-sm">Contestez les augmentations illégales (loyer initial, taux hypothécaire, travaux de rénovation)</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Récupération de Garantie</h3>
                <p className="text-slate-400 text-sm">Exigez votre garantie dans les délais légaux, contestez les retenues abusives</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Demandes de Réparation</h3>
                <p className="text-slate-400 text-sm">Documentez les défauts, envoyez un avis formel de défaut, sachez quand une réduction de loyer s'applique</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Résiliation de Bail</h3>
                <p className="text-slate-400 text-sm">Contestez les résiliations invalides, comprenez les délais de préavis, demandes de prolongation</p>
              </div>
            </div>
            <div className="flex items-start gap-4 bg-slate-800/50 p-4 rounded-lg">
              <span className="text-2xl">✅</span>
              <div>
                <h3 className="text-white font-semibold">Frais Accessoires</h3>
                <p className="text-slate-400 text-sm">Vérifiez les calculs de charges, contestez les frais injustifiés</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="container mx-auto px-6 py-20">
        <div className="max-w-xl mx-auto bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-2xl p-8 border border-amber-500/30 text-center">
          <h2 className="text-2xl font-bold text-white mb-4">Rejoignez la Bêta</h2>
          <p className="text-slate-300 mb-6">Accédez en avant-première à MieterBot. Les 50 premiers locataires ont un support prioritaire.</p>
          <form 
            action="https://formsubmit.co/dev@agentmafia.one" 
            method="POST"
            className="flex flex-col sm:flex-row gap-3"
          >
            <input type="hidden" name="_subject" value="MieterBot Beta Signup (FR)" />
            <input type="hidden" name="_captcha" value="false" />
            <input 
              type="email" 
              name="email"
              placeholder="votre@email.com" 
              required
              className="flex-1 px-4 py-3 bg-slate-800 border border-slate-600 rounded-lg text-white placeholder-slate-500 focus:outline-none focus:border-amber-500"
            />
            <button 
              type="submit"
              className="px-6 py-3 bg-amber-500 hover:bg-amber-600 text-black font-semibold rounded-lg transition-colors"
            >
              Accès Anticipé
            </button>
          </form>
          <p className="text-slate-500 text-sm mt-4">Pas de spam. Que des updates défense locataire.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-6 py-8 border-t border-slate-800">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            Fait partie de <Link href="/" className="text-amber-400 hover:text-amber-300">Agent Mafia</Link> — Agents IA qui font vraiment le travail
          </p>
          <div className="flex gap-6">
            <Link href="/#agents" className="text-slate-400 hover:text-white text-sm">Tous les Agents</Link>
            <Link href="/mieterbot" className="text-slate-400 hover:text-white text-sm">🇬🇧 English version</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
