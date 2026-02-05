'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MadridPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Madrid</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Capitale espagnole vibrante, entre musées de renommée mondiale et tapas.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Madrid</h2>
              <p className="text-gray-700 mb-6">
                Madrid, cœur de l'Espagne, séduit par son énergie, ses musées exceptionnels et son art de vivre.
                Entre les chefs-d'œuvre du Prado, les tapas dans les ruelles et l'animation du Retiro,
                la capitale espagnole ne dort jamais.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Museo del Prado</strong> - Collection de maîtres espagnols</li>
                <li><strong>Palais Royal</strong> - Résidence officielle royale</li>
                <li><strong>Parc du Retiro</strong> - Poumon vert de Madrid</li>
                <li><strong>Plaza Mayor</strong> - Place emblématique du centre historique</li>
                <li><strong>Puerta del Sol</strong> - Cœur géographique de l'Espagne</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mars-mai et septembre-novembre<br />
                <strong>Durée recommandée :</strong> 3-4 jours<br />
                <strong>Transport :</strong> Métro dense et efficace<br />
                <strong>Horaires :</strong> Dîner tardif (21h-23h typique)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
