'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function IndonesiePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Indonésie</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Archipel aux mille îles, entre rizières en terrasse, temples hindous et plages paradisiaques.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir l'Indonésie</h2>
              <p className="text-gray-700 mb-6">
                L'Indonésie, plus grand archipel du monde, offre une diversité culturelle et naturelle exceptionnelle.
                De Bali spirituelle à Java volcanique, en passant par les dragons de Komodo, chaque île révèle
                ses trésors uniques.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Bali</strong> - Île des dieux, rizières et temples</li>
                <li><strong>Java</strong> - Borobudur et volcans actifs</li>
                <li><strong>Lombok</strong> - Plages sauvages et Mont Rinjani</li>
                <li><strong>Komodo</strong> - Dragons et fonds marins exceptionnels</li>
                <li><strong>Gili</strong> - Trois îles paradisiaques sans véhicules motorisés</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-octobre (saison sèche)<br />
                <strong>Langue :</strong> Bahasa Indonesia<br />
                <strong>Monnaie :</strong> Roupie indonésienne (Rp)<br />
                <strong>Visa :</strong> Visa on arrival ou e-visa
              </p>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Îles visitées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Bali */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2017</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Bali</h3><p className="text-white/90 text-sm">Indonésie</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Île des dieux, entre rizières en terrasse et temples hindous.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Culture</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Ubud</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Tanah Lot</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Tegallalang</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Lombok */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2017</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Lombok</h3><p className="text-white/90 text-sm">Indonésie</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Plages sauvages, Mont Rinjani et authenticité préservée.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Plage</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Mont Rinjani</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Kuta Beach</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Cascades Senaru</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Îles Gili */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2017</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Îles Gili</h3><p className="text-white/90 text-sm">Indonésie</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Trois îles paradisiaques sans véhicules motorisés.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Plage</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Gili Trawangan</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Snorkeling</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Gili Meno</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
