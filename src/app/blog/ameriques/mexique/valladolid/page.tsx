'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ValladolidPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Valladolid</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Ville coloniale colorée, porte d'entrée vers Chichén Itzá.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Valladolid</h2>
              <p className="text-gray-700 mb-6">
                Valladolid, charmante ville coloniale du Yucatán, offre une authenticité mexicaine loin de l'agitation
                touristique de la côte. Avec ses façades colorées, son zócalo paisible, ses cenotes à proximité et
                sa position stratégique entre Chichén Itzá et la Riviera Maya, Valladolid est une étape culturelle
                incontournable.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Cenote Zaci</strong> - Cenote à ciel ouvert en plein centre-ville</li>
                <li><strong>Convento de San Bernardino de Siena</strong> - Monastère du XVIe siècle</li>
                <li><strong>Calzada de los Frailes</strong> - Rue coloniale pavée colorée</li>
                <li><strong>Cenote Suytun</strong> - Cenote souterrain avec rayon de lumière iconique</li>
                <li><strong>Chichén Itzá</strong> - Pyramide maya à 45 minutes</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-mars (moins chaud)<br />
                <strong>Durée recommandée :</strong> 2-3 jours<br />
                <strong>Transport :</strong> Bus ADO depuis Cancún (2h30), vélos pour explorer la ville<br />
                <strong>Conseil :</strong> Base parfaite pour visiter Chichén Itzá tôt le matin et éviter foule
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
