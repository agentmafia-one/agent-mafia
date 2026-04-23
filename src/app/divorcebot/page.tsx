import { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'DivorceBot - Simplify Your Swiss Divorce Process',
  description: 'AI agent that handles the bureaucracy of divorce in Switzerland.',
};

export default function DivorceBotPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Tired of the Swiss Divorce Nightmare?
          </h1>
          <p className="text-gray-600 mb-8">
            Let DivorceBot handle the bureaucracy, paperwork, and legal complexities so you can focus on moving forward.
          </p>
          
          <div className="space-y-4 mb-8">
            <div className="flex items-center">
              <span className="text-2xl mr-3">🚨</span>
              <span>Instant Document Checklist: Get your personalized list of required papers based on your canton.</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">📝</span>
              <span>Automated Form Filling: Fill out complex Swiss divorce forms in minutes, no lawyer needed for basics.</span>
            </div>
            <div className="flex items-center">
              <span className="text-2xl mr-3">💰</span>
              <span>Cost Optimizer: Find ways to minimize legal fees, court costs, and understand asset division rules.</span>
            </div>
          </div>

          <form action="https://formsubmit.co/dev@agentmafia.one" method="POST" className="space-y-4">
            <input type="hidden" name="_subject" value="DivorceBot Beta Signup" />
            <input type="email" name="email" placeholder="Your email" required className="w-full p-3 border rounded-md" />
            <input type="text" name="name" placeholder="Your name" className="w-full p-3 border rounded-md" />
            <textarea name="message" placeholder="Tell us about your situation" className="w-full p-3 border rounded-md h-24"></textarea>
            <input type="hidden" name="_next" value="https://agentmafia.one/thankyou" />
            <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
              Join DivorceBot Beta
            </button>
          </form>

          <div className="mt-8 text-center">
            <Link href="/divorcebot/fr" className="text-blue-600 hover:underline">
              Français
            </Link>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500">
            Built by Agent Mafia
          </div>
        </div>
      </div>
    </div>
  );
}