'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function NewYorkPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">New York</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            La ville qui ne dort jamais, capitale mondiale de la culture et du business.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir New York</h2>
              <p className="text-gray-700 mb-6">
                New York City, la Big Apple, est une métropole vibrante et cosmopolite qui ne laisse personne indifférent.
                Entre gratte-ciels emblématiques, musées de classe mondiale, quartiers multiculturels, Broadway shows
                et parcs urbains, NYC offre une énergie et une diversité uniques au monde.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Statue de la Liberté</strong> - Symbole iconique des États-Unis</li>
                <li><strong>Central Park</strong> - Oasis verte au cœur de Manhattan</li>
                <li><strong>Times Square</strong> - Carrefour lumineux du monde</li>
                <li><strong>Empire State Building</strong> - Vue panoramique depuis le 86e étage</li>
                <li><strong>Brooklyn Bridge</strong> - Pont suspendu historique avec vue sur Manhattan</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-novembre<br />
                <strong>Durée recommandée :</strong> 5-7 jours minimum<br />
                <strong>Transport :</strong> Métro 24/7, taxis jaunes, CitiBike, marche à pied<br />
                <strong>Conseil :</strong> Acheter New York CityPASS pour économiser sur attractions principales
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
