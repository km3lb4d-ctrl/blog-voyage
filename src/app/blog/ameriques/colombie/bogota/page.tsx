'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BogotaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Bogotá</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Capitale vibrante de Colombie, culture, gastronomie et street art.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Bogotá</h2>
              <p className="text-gray-700 mb-6">
                Bogotá, capitale colombienne perchée à 2640 mètres d'altitude, est une métropole dynamique et
                cosmopolite. Entre quartier colonial coloré de La Candelaria, musées de classe mondiale, scène
                gastronomique innovante, street art vibrant et vie nocturne animée, Bogotá révèle la nouvelle
                Colombie moderne et créative.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>La Candelaria</strong> - Centre historique avec maisons coloniales colorées</li>
                <li><strong>Monserrate</strong> - Sanctuaire à 3152m avec vue panoramique sur la ville</li>
                <li><strong>Musée de l'Or</strong> - Plus grande collection d'or précolombien au monde</li>
                <li><strong>Musée Botero</strong> - Œuvres du célèbre artiste colombien, entrée gratuite</li>
                <li><strong>Zona Rosa</strong> - Quartier branché avec restaurants et vie nocturne</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-mars et juillet-août (saison sèche)<br />
                <strong>Durée recommandée :</strong> 2-3 jours<br />
                <strong>Transport :</strong> TransMilenio (bus rapide), taxis, Uber, vélos<br />
                <strong>Conseil :</strong> Prévoir vêtements chauds pour soirées fraîches en altitude
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
