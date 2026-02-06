'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function RomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Rome</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            La Ville Éternelle, berceau de la civilisation occidentale.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Rome</h2>
              <p className="text-gray-700 mb-6">
                Rome, capitale italienne et cœur de l'ancien Empire romain, enchante par ses vestiges antiques,
                ses places baroques et son art de vivre. Chaque rue raconte 3000 ans d'histoire, de l'époque
                des Césars à la Renaissance.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Colisée</strong> - Amphithéâtre emblématique de Rome antique</li>
                <li><strong>Vatican</strong> - Chapelle Sixtine et Basilique Saint-Pierre</li>
                <li><strong>Fontaine de Trevi</strong> - Chef-d'œuvre baroque</li>
                <li><strong>Panthéon</strong> - Temple romain parfaitement conservé</li>
                <li><strong>Trastevere</strong> - Quartier authentique et bohème</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-octobre<br />
                <strong>Durée recommandée :</strong> 3-4 jours minimum<br />
                <strong>Transport :</strong> Métro, bus et marche à pied<br />
                <strong>Conseil :</strong> Réserver les billets pour le Colisée et le Vatican à l'avance
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
