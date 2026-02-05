'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function IbizaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Ibiza</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île baléare légendaire entre plages paradisiaques et clubbing mondial.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Ibiza</h2>
              <p className="text-gray-700 mb-6">
                Ibiza, perle des Baléares, offre deux visages : île festive de renommée mondiale la nuit,
                et paradis méditerranéen aux criques sauvages le jour. Au-delà des clubs, découvrez
                son patrimoine UNESCO et ses couchers de soleil mythiques.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Dalt Vila</strong> - Vieille ville fortifiée classée UNESCO</li>
                <li><strong>Playa d'en Bossa</strong> - Plage animée et clubs de plage</li>
                <li><strong>Cala Comte</strong> - Criques aux eaux turquoise</li>
                <li><strong>Café del Mar</strong> - Couchers de soleil légendaires</li>
                <li><strong>Formentera</strong> - Île voisine accessible en ferry</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre (juillet-août très festif)<br />
                <strong>Durée recommandée :</strong> 4-7 jours<br />
                <strong>Transport :</strong> Voiture ou scooter recommandé<br />
                <strong>Conseil :</strong> Réserver clubs et restaurants à l'avance en été
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
