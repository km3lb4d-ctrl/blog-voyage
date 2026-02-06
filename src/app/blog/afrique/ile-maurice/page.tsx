'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function IleMauricePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Île Maurice</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Paradis tropical de l'océan Indien, aux lagons turquoise et montagnes verdoyantes.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir l'Île Maurice</h2>
              <p className="text-gray-700 mb-6">
                L'Île Maurice incarne le paradis tropical par excellence. Entre lagons cristallins, plages de sable blanc,
                montagnes verdoyantes et culture créole chaleureuse, cette île de l'océan Indien offre un cadre idyllique
                pour un séjour de rêve.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Le Morne</strong> - Montagne iconique et plages sauvages</li>
                <li><strong>Grand Baie</strong> - Station balnéaire animée</li>
                <li><strong>Île aux Cerfs</strong> - Lagon paradisiaque et sports nautiques</li>
                <li><strong>Chamarel</strong> - Terres de 7 couleurs et cascades</li>
                <li><strong>Port-Louis</strong> - Capitale et marché central coloré</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-décembre (hiver austral)<br />
                <strong>Langue :</strong> Anglais, français et créole mauricien<br />
                <strong>Monnaie :</strong> Roupie mauricienne (MUR)<br />
                <strong>Visa :</strong> Exemption pour tourisme (jusqu'à 90 jours)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
