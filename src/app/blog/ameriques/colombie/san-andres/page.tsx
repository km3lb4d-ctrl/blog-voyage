'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function SanAndresPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">San Andrés</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île caribéenne aux sept couleurs de bleu, paradis tropical colombien.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir San Andrés</h2>
              <p className="text-gray-700 mb-6">
                San Andrés, île colombienne située dans la mer des Caraïbes, est célèbre pour sa "mer aux sept couleurs"
                offrant des dégradés de bleu spectaculaires. Entre plages de sable blanc, culture raizal unique mêlant
                influences caribéennes et africaines, spots de plongée exceptionnels et ambiance décontractée, San Andrés
                est un petit paradis hors des sentiers battus.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Johnny Cay</strong> - Îlot paradisiaque accessible en bateau (15 min)</li>
                <li><strong>Aquarium & Haynes Cay</strong> - Snorkeling avec raies et poissons tropicaux</li>
                <li><strong>Hoyo Soplador</strong> - Geyser naturel jaillissant entre les rochers</li>
                <li><strong>West View</strong> - Plongeon depuis falaise et snorkeling</li>
                <li><strong>Providencia</strong> - Île sœur plus sauvage, accessible en vol court</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-avril (saison sèche)<br />
                <strong>Durée recommandée :</strong> 3-5 jours<br />
                <strong>Transport :</strong> Location de golf cart, scooter ou vélo, bateau-taxi pour îlots<br />
                <strong>Conseil :</strong> Vol depuis Bogotá ou Carthagène obligatoire, taxe touristique à l'arrivée
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
