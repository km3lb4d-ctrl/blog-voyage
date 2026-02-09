'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function JordaniePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Jordanie</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Royaume du désert, entre cités nabatéennes et paysages lunaires spectaculaires.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir la Jordanie</h2>
              <p className="text-gray-700 mb-6">
                La Jordanie fascine par son patrimoine millénaire et ses paysages désertiques à couper le souffle.
                De Pétra, merveille du monde antique, au désert du Wadi Rum où Mars semble proche, ce royaume
                offre une aventure hors du temps.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Pétra</strong> - Cité nabatéenne taillée dans la roche rose</li>
                <li><strong>Wadi Rum</strong> - Désert majestueux et formations rocheuses</li>
                <li><strong>Mer Morte</strong> - Point le plus bas du globe et boue thérapeutique</li>
                <li><strong>Amman</strong> - Capitale moderne et citadelle antique</li>
                <li><strong>Jerash</strong> - Ruines romaines parmi les mieux préservées</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mars-mai et septembre-novembre<br />
                <strong>Langue :</strong> Arabe<br />
                <strong>Monnaie :</strong> Dinar jordanien (JOD)<br />
                <strong>Visa :</strong> Visa on arrival ou Jordan Pass
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
