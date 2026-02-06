'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CorsePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Corse</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île de beauté aux plages paradisiaques et montagnes sauvages.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir la Corse</h2>
              <p className="text-gray-700 mb-6">
                La Corse, île de beauté méditerranéenne, offre un contraste saisissant entre ses plages de sable fin
                et ses montagnes escarpées. Terre de caractère, elle enchante par ses villages perchés, ses criques
                sauvages et son patrimoine culturel unique.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Bonifacio</strong> - Citadelle perchée sur falaises blanches</li>
                <li><strong>Calanques de Piana</strong> - Formations rocheuses spectaculaires</li>
                <li><strong>GR20</strong> - Sentier de randonnée mythique</li>
                <li><strong>Plages de Palombaggia</strong> - Eaux turquoise et sable blanc</li>
                <li><strong>Cap Corse</strong> - Péninsule sauvage et authentique</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre-octobre<br />
                <strong>Langue :</strong> Français et Corse<br />
                <strong>Accès :</strong> Ferry ou avion depuis la France continentale<br />
                <strong>Durée recommandée :</strong> 7-10 jours minimum
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
