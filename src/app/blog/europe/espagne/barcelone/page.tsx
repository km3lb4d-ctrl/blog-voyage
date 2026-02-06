'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BarcelonePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Barcelone</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Capitale catalane alliant modernisme de Gaudí et vie méditerranéenne.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Barcelone</h2>
              <p className="text-gray-700 mb-6">
                Barcelone, métropole cosmopolite entre mer et montagne, fascine par son architecture moderniste unique,
                ses plages urbaines et son ambiance vibrante. Gaudí y a laissé son empreinte avec des chefs-d'œuvre
                comme la Sagrada Família et le Park Güell.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Sagrada Família</strong> - Basilique emblématique de Gaudí</li>
                <li><strong>Park Güell</strong> - Parc moderniste aux mosaïques colorées</li>
                <li><strong>Las Ramblas</strong> - Avenue animée du centre historique</li>
                <li><strong>Quartier Gothique</strong> - Ruelles médiévales et cathédrale</li>
                <li><strong>La Barceloneta</strong> - Plage urbaine et restaurants de fruits de mer</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre-octobre<br />
                <strong>Durée recommandée :</strong> 3-4 jours<br />
                <strong>Transport :</strong> Métro très efficace<br />
                <strong>Spécialité :</strong> Tapas et paella
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
