'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function GrecePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Grèce</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Berceau de la civilisation occidentale, entre sites antiques et îles paradisiaques.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir la Grèce</h2>
              <p className="text-gray-700 mb-6">
                La Grèce conjugue histoire millénaire et beauté naturelle. Des ruines athéniennes aux plages de sable blanc
                des Cyclades, découvrez le pays qui a vu naître la démocratie, la philosophie et les Jeux olympiques.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Athènes</strong> - Acropole et musées archéologiques</li>
                <li><strong>Santorin</strong> - Villages blancs et couchers de soleil légendaires</li>
                <li><strong>Mykonos</strong> - Vie nocturne et plages dorées</li>
                <li><strong>Crète</strong> - Civilisation minoenne et gorges sauvages</li>
                <li><strong>Delphes</strong> - Sanctuaire antique et oracle d'Apollon</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre-octobre<br />
                <strong>Langue :</strong> Grec<br />
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
