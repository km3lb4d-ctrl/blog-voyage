'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function EspagnePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Espagne</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Pays aux mille visages, entre traditions flamenco, plages dorées et villes vibrantes.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir l'Espagne</h2>
              <p className="text-gray-700 mb-6">
                L'Espagne séduit par sa diversité culturelle, ses traditions passionnées et son art de vivre ensoleillé.
                Des œuvres de Gaudí à Barcelone aux palais mauresques d'Andalousie, chaque région raconte une histoire unique.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Barcelone</strong> - Architecture de Gaudí et vie méditerranéenne</li>
                <li><strong>Madrid</strong> - Capitale culturelle et musées de renommée mondiale</li>
                <li><strong>Andalousie</strong> - Flamenco, tapas et patrimoine mauresque</li>
                <li><strong>Îles Baléares</strong> - Plages paradisiaques de Majorque et Ibiza</li>
                <li><strong>Pays Basque</strong> - Gastronomie d'exception et paysages côtiers</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Printemps et automne (avril-juin, septembre-octobre)<br />
                <strong>Langue :</strong> Espagnol (castillan)<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Visa :</strong> Espace Schengen
              </p>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Villes visitées</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Barcelone */}
              <Link href="/blog/europe/espagne/barcelone" className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 block">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80"
                      alt="Barcelone"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Architecture</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Barcelone</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Capitale catalane du modernisme</p>
                    <p className="text-gray-700 !mb-4">
                      Barcelone fascine par son architecture moderniste unique signée Gaudí, ses plages urbaines méditerranéennes
                      et son quartier gothique médiéval. Entre la Sagrada Família, le Park Güell aux mosaïques féériques et
                      les tapas dans le marché de La Boqueria, la capitale catalane offre un mélange parfait d'art, de culture
                      et de vie balnéaire animée.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Gaudí</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plage</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Culture</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Madrid */}
              <Link href="/blog/europe/espagne/madrid" className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 block">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80"
                      alt="Madrid"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Capitale</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Madrid</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Cœur culturel de l'Espagne</p>
                    <p className="text-gray-700 !mb-4">
                      Madrid séduit par ses musées d'art de renommée mondiale (Prado, Reina Sofía), son Palais Royal majestueux
                      et son ambiance vibrante. Entre les tapas dans les ruelles historiques, les soirées animées et le parc
                      du Retiro, la capitale espagnole combine élégance royale et énergie moderne pour une expérience urbaine
                      incomparable.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Musées</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Tapas</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Art</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Ibiza */}
              <Link href="/blog/europe/espagne/ibiza" className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 block">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1513415032842-1d7d97cb8e5e?w=1200&q=80"
                      alt="Ibiza"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Île</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Ibiza</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Paradis baléare légendaire</p>
                    <p className="text-gray-700 !mb-4">
                      Ibiza conjugue plages paradisiaques aux eaux turquoise, criques cachées et vie nocturne électrisante.
                      Au-delà des clubs mondialement connus, l'île révèle un patrimoine authentique avec Dalt Vila, sa vieille
                      ville fortifiée, des marchés hippies colorés et des couchers de soleil spectaculaires qui attirent les
                      voyageurs du monde entier.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plages</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Fête</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Criques</span>
                    </div>
                  </div>
                </div>
              </Link>

              {/* Andalousie */}
              <Link href="/blog/europe/espagne/andalousie" className="bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 block">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1512613573869-7b0a33d90fad?w=1200&q=80"
                      alt="Andalousie"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Région</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Andalousie</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Terre du flamenco et des palais mauresques</p>
                    <p className="text-gray-700 !mb-4">
                      L'Andalousie enchante avec ses palais mauresques spectaculaires comme l'Alhambra de Grenade, la Mosquée-Cathédrale
                      de Cordoue et les patios fleuris de Séville. Cette région passionnée vibre au rythme du flamenco, des tapas
                      généreuses et d'un patrimoine culturel unique mêlant influences arabes et espagnoles sous un soleil éclatant.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Alhambra</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Flamenco</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                    </div>
                  </div>
                </div>
              </Link>

            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
