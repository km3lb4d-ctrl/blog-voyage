'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PhuketPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Phuket</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Plus grande île de Thaïlande, paradis balnéaire de la mer d'Andaman.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Phuket</h2>
              <p className="text-gray-700 mb-6">
                Phuket, la perle de la mer d'Andaman, est la plus grande île de Thaïlande. Célèbre pour ses plages
                de sable blanc, ses eaux turquoise, sa vie nocturne animée à Patong et sa vieille ville colorée,
                Phuket offre aussi des temples, des points de vue spectaculaires et une gastronomie sino-thaïe unique.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Patong Beach</strong> - Plage animée avec vie nocturne</li>
                <li><strong>Kata & Karon Beach</strong> - Plages plus calmes pour familles</li>
                <li><strong>Vieille Ville de Phuket</strong> - Architecture sino-portugaise colorée</li>
                <li><strong>Big Buddha</strong> - Statue de 45 mètres avec vue panoramique</li>
                <li><strong>Phang Nga Bay</strong> - Excursion vers les îles calcaires (James Bond Island)</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (saison sèche)<br />
                <strong>Durée recommandée :</strong> 4-7 jours<br />
                <strong>Transport :</strong> Location de scooter, taxis, songthaews (taxis collectifs)<br />
                <strong>Conseil :</strong> Explorer les plages du sud (Rawai, Nai Harn) pour plus de calme
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
