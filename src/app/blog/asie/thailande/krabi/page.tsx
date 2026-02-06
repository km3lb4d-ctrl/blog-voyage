'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function KrabiPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Krabi</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Falaises calcaires spectaculaires et plages paradisiaques.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Krabi</h2>
              <p className="text-gray-700 mb-6">
                Krabi, province du sud de la Thaïlande, est célèbre pour ses formations karstiques spectaculaires
                émergeant de la mer d'Andaman. Entre plages de carte postale, îles paradisiaques, grottes mystérieuses
                et spots d'escalade de renommée mondiale, Krabi offre une nature à couper le souffle.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Railay Beach</strong> - Péninsule accessible uniquement par bateau, paradis des grimpeurs</li>
                <li><strong>Îles Phi Phi</strong> - Maya Bay et spots de plongée exceptionnels</li>
                <li><strong>4 Islands Tour</strong> - Koh Poda, Chicken Island, Tup Island</li>
                <li><strong>Tiger Cave Temple</strong> - 1237 marches pour une vue panoramique</li>
                <li><strong>Ao Nang</strong> - Station balnéaire principale avec restaurants et vie nocturne</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (saison sèche)<br />
                <strong>Durée recommandée :</strong> 4-6 jours<br />
                <strong>Transport :</strong> Longtail boats, location de scooter, songthaews<br />
                <strong>Conseil :</strong> Combiner Ao Nang (animé) et Railay (tranquille) pour équilibre parfait
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
