'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PougliesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Pouilles</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Le talon de la botte italienne, entre trulli et plages sauvages.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir les Pouilles</h2>
              <p className="text-gray-700 mb-6">
                Les Pouilles, région du sud de l'Italie, séduisent par leur authenticité préservée,
                leurs trulli d'Alberobello, leurs villages blancs et leurs plages de rêve. Loin du tourisme
                de masse, elles offrent une Italie traditionnelle et chaleureuse.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Alberobello</strong> - Village aux trulli classé UNESCO</li>
                <li><strong>Polignano a Mare</strong> - Village perché sur falaises</li>
                <li><strong>Lecce</strong> - Florence baroque du sud</li>
                <li><strong>Ostuni</strong> - Ville blanche sur colline</li>
                <li><strong>Plages du Salento</strong> - Eaux cristallines adriatiques</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre-octobre<br />
                <strong>Durée recommandée :</strong> 5-7 jours<br />
                <strong>Transport :</strong> Voiture de location recommandée<br />
                <strong>Spécialités :</strong> Burrata, orecchiette, huile d'olive
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
