'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function LombokPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Lombok</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Sœur authentique de Bali, volcans majestueux et plages sauvages.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Lombok</h2>
              <p className="text-gray-700 mb-6">
                Lombok, voisine moins touristique de Bali, séduit par son authenticité préservée. Dominée par le
                volcan Rinjani, l'île offre des plages de sable blanc désertes, des cascades cachées, des villages
                traditionnels sasak et une atmosphère plus paisible que sa célèbre voisine.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Mont Rinjani</strong> - Trek 2-3 jours vers cratère et lac Segara Anak (3726m)</li>
                <li><strong>Kuta Lombok</strong> - Plages paradisiaques (différent de Kuta Bali)</li>
                <li><strong>Senggigi</strong> - Station balnéaire principale avec restaurants</li>
                <li><strong>Cascades de Tiu Kelep</strong> - Randonnée rafraîchissante</li>
                <li><strong>Village sasak de Sade</strong> - Découverte culture traditionnelle</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-septembre (saison sèche)<br />
                <strong>Durée recommandée :</strong> 5-7 jours<br />
                <strong>Transport :</strong> Location de scooter, fast boat depuis Bali (2h), aéroport à Praya<br />
                <strong>Conseil :</strong> Prévoir 3-4 jours pour trek Rinjani, guide obligatoire
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
