'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CarthagenePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Carthagène</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Perle coloniale des Caraïbes, ville fortifiée romantique.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Carthagène</h2>
              <p className="text-gray-700 mb-6">
                Carthagène des Indes, joyau colonial de la côte caraïbe colombienne, enchante par son architecture
                baroque colorée, ses balcons fleuris, ses remparts historiques et son ambiance romantique.
                Classée au patrimoine mondial de l'UNESCO, la vieille ville est un véritable musée à ciel ouvert
                où se mêlent histoire, culture afro-caribéenne et charme tropical.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Vieille Ville Fortifiée</strong> - Rues pavées colorées et architecture coloniale</li>
                <li><strong>Castillo San Felipe</strong> - Forteresse espagnole la plus imposante d'Amérique</li>
                <li><strong>Getsemaní</strong> - Quartier bohème avec street art et vie nocturne</li>
                <li><strong>Îles Rosario</strong> - Archipel paradisiaque en excursion d'une journée</li>
                <li><strong>Café del Mar</strong> - Coucher de soleil sur les remparts</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-avril (saison sèche, mais plus touristique)<br />
                <strong>Durée recommandée :</strong> 3-4 jours<br />
                <strong>Transport :</strong> Marche à pied dans vieille ville, taxis pour plages et Getsemaní<br />
                <strong>Conseil :</strong> Loger dans Getsemaní (authentique et moins cher) ou vieille ville (charme)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
