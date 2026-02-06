'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function IslaMujeresPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Isla Mujeres</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île des Femmes, joyau tranquille face à Cancún.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Isla Mujeres</h2>
              <p className="text-gray-700 mb-6">
                Isla Mujeres, petite île paradisiaque située à 20 minutes en ferry de Cancún, offre une atmosphère
                beaucoup plus paisible et authentique que sa voisine. Avec ses eaux cristallines, son village coloré,
                ses tortues marines et ses couchers de soleil spectaculaires, l'île est parfaite pour se détendre.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Playa Norte</strong> - Une des plus belles plages du Mexique, eaux peu profondes</li>
                <li><strong>Punta Sur</strong> - Falaises avec sculptures et temple maya d'Ixchel</li>
                <li><strong>Snorkeling avec tortues</strong> - Observer tortues marines en liberté</li>
                <li><strong>Golf cart tour</strong> - Tour de l'île en voiturette électrique</li>
                <li><strong>Downtown coloré</strong> - Rues piétonnes avec restaurants et boutiques</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril<br />
                <strong>Durée recommandée :</strong> 2-3 jours (ou excursion d'une journée)<br />
                <strong>Transport :</strong> Ferry depuis Cancún (30 min), golf cart sur l'île<br />
                <strong>Conseil :</strong> Dormir sur place pour profiter du coucher de soleil et de l'ambiance nocturne
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
