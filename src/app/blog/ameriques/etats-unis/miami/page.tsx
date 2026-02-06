'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MiamiPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Miami</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Métropole ensoleillée de Floride, plages Art Déco et ambiance latine.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Miami</h2>
              <p className="text-gray-700 mb-6">
                Miami, perle de la Floride, séduit par son mélange unique de culture américaine et latine.
                Entre plages de sable blanc, architecture Art Déco pastel, vie nocturne électrique, quartier cubain
                de Little Havana et street art de Wynwood, Miami offre soleil, glamour et diversité culturelle.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>South Beach</strong> - Plage mythique avec bâtiments Art Déco colorés</li>
                <li><strong>Wynwood Walls</strong> - Quartier de street art mondialement reconnu</li>
                <li><strong>Little Havana</strong> - Cœur de la communauté cubaine (Calle Ocho)</li>
                <li><strong>Vizcaya Museum</strong> - Villa italienne Renaissance avec jardins</li>
                <li><strong>Everglades</strong> - Parc national avec airboats et alligators</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (éviter chaleur et ouragans été)<br />
                <strong>Durée recommandée :</strong> 4-5 jours<br />
                <strong>Transport :</strong> Location de voiture recommandée, Metromover gratuit downtown<br />
                <strong>Conseil :</strong> Combiner Miami Beach (plages) et Downtown/Wynwood (culture)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
