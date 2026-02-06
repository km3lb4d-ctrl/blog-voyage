'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PortugalPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Portugal</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Pays aux traditions maritimes, entre tramways colorés, fado mélancolique et plages atlantiques.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir le Portugal</h2>
              <p className="text-gray-700 mb-6">
                Le Portugal charme par son authenticité et son atmosphère nostalgique. Des azulejos de Lisbonne
                aux caves de Porto, en passant par l'Algarve ensoleillée, le pays offre une expérience unique
                entre traditions et modernité.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Lisbonne</strong> - Capitale vallonnée et tramways jaunes</li>
                <li><strong>Porto</strong> - Ville du vin et architecture baroque</li>
                <li><strong>Algarve</strong> - Plages dorées et falaises spectaculaires</li>
                <li><strong>Sintra</strong> - Palais romantiques et jardins enchantés</li>
                <li><strong>Açores</strong> - Îles volcaniques et nature préservée</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mars-octobre pour le sud, toute l'année<br />
                <strong>Langue :</strong> Portugais<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Visa :</strong> Espace Schengen
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
