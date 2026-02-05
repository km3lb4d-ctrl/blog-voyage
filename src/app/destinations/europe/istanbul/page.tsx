'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function IstanbulPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Istanbul</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Pont entre deux continents, où l'Orient rencontre l'Occident.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Istanbul</h2>
              <p className="text-gray-700 mb-6">
                Istanbul, ancienne Constantinople, est une ville fascinante qui s'étend sur deux continents.
                Entre mosquées ottomanes, palais somptueux et bazars animés, la ville offre une expérience
                unique mêlant traditions ancestrales et modernité dynamique.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Sainte-Sophie</strong> - Chef-d'œuvre byzantin devenu mosquée</li>
                <li><strong>Mosquée Bleue</strong> - Splendeur de l'architecture ottomane</li>
                <li><strong>Grand Bazar</strong> - Plus ancien marché couvert du monde</li>
                <li><strong>Palais de Topkapi</strong> - Résidence des sultans ottomans</li>
                <li><strong>Bosphore</strong> - Détroit séparant l'Europe et l'Asie</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-mai et septembre-octobre<br />
                <strong>Langue :</strong> Turc<br />
                <strong>Monnaie :</strong> Livre turque (₺)<br />
                <strong>Visa :</strong> E-visa en ligne
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
