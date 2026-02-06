'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function FlorencePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Florence</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Berceau de la Renaissance et capitale de l'art italien.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Florence</h2>
              <p className="text-gray-700 mb-6">
                Florence, capitale de la Toscane, est un musée à ciel ouvert où naquirent la Renaissance et
                les plus grands artistes italiens. Entre le Duomo, les Offices et le Ponte Vecchio, la ville
                offre une concentration unique de chefs-d'œuvre artistiques.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Duomo</strong> - Cathédrale avec coupole de Brunelleschi</li>
                <li><strong>Galerie des Offices</strong> - Collections de la Renaissance</li>
                <li><strong>Ponte Vecchio</strong> - Pont médiéval aux boutiques d'orfèvres</li>
                <li><strong>Galerie de l'Académie</strong> - David de Michel-Ange</li>
                <li><strong>Piazzale Michelangelo</strong> - Vue panoramique sur Florence</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-octobre<br />
                <strong>Durée recommandée :</strong> 2-3 jours<br />
                <strong>Transport :</strong> Centre-ville à pied<br />
                <strong>Conseil :</strong> Réserver les musées en ligne pour éviter les files d'attente
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
