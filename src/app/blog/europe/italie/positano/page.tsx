'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PositanoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Positano</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Perle de la côte Amalfitaine, village vertical aux maisons colorées.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Positano</h2>
              <p className="text-gray-700 mb-6">
                Positano, joyau de la côte Amalfitaine, enchante par ses maisons pastel accrochées à la falaise,
                ses ruelles étroites et ses plages de galets. Village de pêcheurs devenu destination chic,
                il incarne la dolce vita méditerranéenne.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Spiaggia Grande</strong> - Plage principale du village</li>
                <li><strong>Sentier des Dieux</strong> - Randonnée panoramique spectaculaire</li>
                <li><strong>Chiesa di Santa Maria Assunta</strong> - Église au dôme de majoliques</li>
                <li><strong>Tour de guet sarrasine</strong> - Vue imprenable sur la côte</li>
                <li><strong>Boutiques artisanales</strong> - Mode et céramiques locales</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre<br />
                <strong>Durée recommandée :</strong> 2-3 jours<br />
                <strong>Accès :</strong> Bus depuis Sorrento ou bateau depuis Naples<br />
                <strong>Conseil :</strong> Réserver l'hébergement à l'avance, prix élevés en haute saison
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
