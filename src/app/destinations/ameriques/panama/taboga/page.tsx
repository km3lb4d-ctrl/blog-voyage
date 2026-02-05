'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TabogaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Taboga</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île aux Fleurs, évasion tropicale à 20 minutes de Panama City.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Taboga</h2>
              <p className="text-gray-700 mb-6">
                Taboga, surnommée "l'Île aux Fleurs", est une petite île paradisiaque située à seulement 20 km
                de Panama City. Accessible en ferry en 30 minutes, elle offre une escapade tropicale parfaite avec
                ses plages tranquilles, son charmant village coloré, ses sentiers de randonnée et sa vue spectaculaire
                sur la skyline de Panama City au loin.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Playa Restinga</strong> - Plage principale avec sable doré et eaux calmes</li>
                <li><strong>Village de Taboga</strong> - Maisons colorées et église coloniale de 1550</li>
                <li><strong>Cerro Vigía</strong> - Randonnée au point culminant pour vue panoramique 360°</li>
                <li><strong>Playa Honda</strong> - Plage plus isolée et tranquille (accessible à marée basse)</li>
                <li><strong>Observation des baleines</strong> - Juillet-octobre, baleines à bosse passent au large</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-avril (saison sèche), juillet-octobre (baleines)<br />
                <strong>Durée recommandée :</strong> 1 journée (ou 2 jours pour dormir sur place)<br />
                <strong>Transport :</strong> Ferry depuis Amador/Balboa (30 min, 3 départs/jour)<br />
                <strong>Conseil :</strong> Partir tôt le matin, apporter snacks car restaurants limités sur l'île
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
