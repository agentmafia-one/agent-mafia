import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DivorceBot - Simplifiez Votre Procédure de Divorce en Suisse',
  description: 'Agent IA qui gère la bureaucratie du divorce en Suisse.',
};

export default function DivorceBotFrPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Fatigué du Cauchemar du Divorce en Suisse ?
          </h1>
          <p className="text-gray-600 mb-8">
            Laissez DivorceBot gérer la bureaucratie, les papiers et les complexités légales pour que vous puissiez vous concentrer sur l'avenir.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🚨</span>
              <span>Liste de Documents Instantanée : Obtenez votre liste personnalisée de documents requis selon votre canton.</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">📝</span>
              <span>Remplissage Automatique des Formulaires : Remplissez les formulaires de divorce suisses complexes en quelques minutes, sans avocat pour les bases.</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">💰</span>
              <span>Optimiseur de Coûts : Trouvez des moyens de minimiser les frais légaux, les coûts judiciaires et comprenez les règles de division des biens.</span>
            </div>
          </div>

          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="DivorceBot Beta Signup" />
            <input type="email" name="email" placeholder="Votre email" required className="w-full p-3 border rounded-md" />
            <input type="text" name="name" placeholder="Votre nom" className="w-full p-3 border rounded-md" />
            <textarea name="message" placeholder="Dites-nous en plus sur votre situation" className="w-full p-3 border rounded-md h-24"></textarea>
            <input type="hidden" name="_next" value="https://agentmafia.one/thankyou" />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Rejoignez la Bêta de DivorceBot
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/divorcebot" className="text-blue-600 hover:underline">
              English
            </Link>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            Construit par Agent Mafia
          </div>
        </div>
      </div>
    </div>
  );
}