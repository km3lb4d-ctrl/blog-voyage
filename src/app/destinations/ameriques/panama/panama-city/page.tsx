'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PanamaCityPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Panama City</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Métropole moderne entre deux océans, canal mythique et Casco Viejo colonial.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Panama City</h2>
              <p className="text-gray-700 mb-6">
                Panama City, capitale dynamique du Panama, est une ville fascinante où gratte-ciels futuristes
                côtoient le quartier colonial coloré de Casco Viejo. Avec le légendaire Canal de Panama, sa skyline
                impressionnante, sa biodiversité urbaine et sa position stratégique entre Amérique du Nord et du Sud,
                Panama City offre un mélange unique de modernité et d'histoire.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Canal de Panama</strong> - Écluses de Miraflores pour observer passage des bateaux</li>
                <li><strong>Casco Viejo</strong> - Quartier colonial UNESCO avec architecture restaurée</li>
                <li><strong>Causeway Amador</strong> - Promenade en bord de mer avec vue sur skyline</li>
                <li><strong>Parc Métropolitain</strong> - Forêt tropicale en pleine ville avec paresseux</li>
                <li><strong>Biomuseo</strong> - Musée Frank Gehry sur biodiversité panaméenne</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-avril (saison sèche)<br />
                <strong>Durée recommandée :</strong> 2-3 jours<br />
                <strong>Transport :</strong> Métro moderne, Uber, bus, taxis<br />
                <strong>Conseil :</strong> Combiner visite du Canal le matin et Casco Viejo en fin d'après-midi
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
