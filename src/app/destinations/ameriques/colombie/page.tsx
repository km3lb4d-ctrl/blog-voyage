'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ColombiePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Colombie</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Pays aux mille couleurs, entre cités coloniales, îles caribéennes et montagnes andines.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir la Colombie</h2>
              <p className="text-gray-700 mb-6">
                La Colombie séduit par sa diversité géographique exceptionnelle et sa joie de vivre contagieuse.
                Des ruelles colorées de Carthagène aux plages paradisiaques de San Andrés, en passant par Bogotá
                perchée dans les Andes, ce pays révèle ses trésors cachés.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Carthagène</strong> - Joyau colonial fortifié des Caraïbes</li>
                <li><strong>Bogotá</strong> - Capitale andine moderne et culturelle</li>
                <li><strong>San Andrés</strong> - Île aux 7 couleurs de mer</li>
                <li><strong>Medellín</strong> - Ville de l'éternel printemps</li>
                <li><strong>Îles Rosario</strong> - Archipel paradisiaque près de Carthagène</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-mars et juillet-août<br />
                <strong>Langue :</strong> Espagnol<br />
                <strong>Monnaie :</strong> Peso colombien (COP)<br />
                <strong>Visa :</strong> Exemption pour tourisme (90 jours)
              </p>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Villes visitées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Bogotá */}
              <Link href="/destinations/ameriques/colombie/bogota" className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(/images/colombie/randonnee-bogota.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Amérique Latine</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2024</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Bogotá</h3><p className="text-white/90 text-sm">Colombie</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Capitale andine perchée à 2600m, mêlant modernité et quartiers coloniaux.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Ville</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Culture</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Monserrate</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Candelaria</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Museo del Oro</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </Link>

              {/* Carthagène */}
              <Link href="/destinations/ameriques/colombie/carthagene" className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(/images/colombie/carthagene.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Amérique Latine</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2024</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Carthagène</h3><p className="text-white/90 text-sm">Colombie</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Joyau colonial fortifié des Caraïbes, aux ruelles colorées et romantiques.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Culture</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Plage</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Histoire</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Vieille ville</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Castillo San Felipe</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Îles Rosario</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </Link>

              {/* San Andrés */}
              <Link href="/destinations/ameriques/colombie/san-andres" className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(/images/colombie/san-andres.jpg)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Amérique Latine</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2024</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">San Andrés</h3><p className="text-white/90 text-sm">Colombie</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Île paradisiaque aux 7 couleurs de mer, dans la mer des Caraïbes.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Plage</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Mer aux 7 couleurs</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Johnny Cay</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Snorkeling</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
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
