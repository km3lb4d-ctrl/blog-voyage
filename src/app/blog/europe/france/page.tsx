'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FrancePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">France</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Pays de l'art de vivre, entre patrimoine culturel, gastronomie et paysages variés.
          </p>
        </section>

        {/* Content Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir la France</h2>
              <p className="text-gray-700 !mb-6">
                La France, pays de l'élégance et de la culture, offre une diversité exceptionnelle de destinations.
                De Paris, la ville lumière, aux plages ensoleillées de la Côte d'Azur, en passant par les châteaux
                de la Loire et les vignobles de Bordeaux, chaque région révèle son caractère unique.
              </p>

              <h3 className="text-black font-bold mt-8 !mb-6">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Paris</strong> - La capitale mondiale de la mode et de la culture</li>
                <li><strong>Provence</strong> - Champs de lavande et villages perchés</li>
                <li><strong>Côte d'Azur</strong> - Riviera française et plages méditerranéennes</li>
                <li><strong>Bordeaux</strong> - Capitale mondiale du vin</li>
                <li><strong>Normandie</strong> - Histoire et paysages maritimes</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Toute l'année selon la régionvoic<br />
                <strong>Langue :</strong> Français<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Visa :</strong> Espace Schengen
              </p>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Régions visitées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Corse */}
              <Link href="/blog/europe/france/corse" className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block">
                {/* Image Container avec overlay */}
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)',
                    }}
                  />

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                  {/* Tags flottants */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">
                      Europe
                    </span>
                  </div>

                  {/* Visited date */}
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
                      2023
                    </span>
                  </div>

                  {/* Titre sur l'image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">
                      Corse
                    </h3>
                    <p className="text-white/90 text-sm">France</p>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Île de beauté aux plages paradisiaques et montagnes sauvages.
                  </p>

                  {/* Type tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">
                      Plage
                    </span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">
                      Nature
                    </span>
                  </div>

                  {/* Highlights */}
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">
                      À découvrir
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Bonifacio
                      </span>
                      <span className="text-sm text-gray-700 flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Calanques
                      </span>
                      <span className="text-sm text-gray-700 flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        GR20
                      </span>
                    </div>
                  </div>

                  {/* Button */}
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">
                    Explorer cette destination
                  </button>
                </div>

                {/* Hover effet - bordure animée */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
