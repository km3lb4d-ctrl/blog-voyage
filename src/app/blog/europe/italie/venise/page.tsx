'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function VenisePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Venise</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            La Sérénissime, cité des Doges posée sur l'eau.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Venise</h2>
              <p className="text-gray-700 mb-6">
                Venise, ville unique au monde construite sur 118 îles, enchante par ses canaux, ses palais
                et son atmosphère romantique. Ancienne république maritime puissante, elle conserve tout
                son charme et sa magie intemporelle.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Place Saint-Marc</strong> - Cœur de Venise et basilique byzantine</li>
                <li><strong>Grand Canal</strong> - Artère principale en gondole ou vaporetto</li>
                <li><strong>Pont du Rialto</strong> - Pont emblématique sur le Grand Canal</li>
                <li><strong>Palais des Doges</strong> - Siège du pouvoir vénitien</li>
                <li><strong>Murano et Burano</strong> - Îles aux verreries et maisons colorées</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-octobre<br />
                <strong>Durée recommandée :</strong> 2-3 jours<br />
                <strong>Transport :</strong> Vaporetto (bateau-bus) et marche<br />
                <strong>Conseil :</strong> Éviter juillet-août (très touristique) et l'acqua alta en novembre
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
