'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MaltePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Malte</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Archipel méditerranéen au patrimoine exceptionnel et eaux turquoise.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Malte</h2>
              <p className="text-gray-700 mb-6">
                Malte, petit archipel au cœur de la Méditerranée, fascine par son histoire millénaire
                et ses paysages spectaculaires. Entre cités fortifiées inscrites à l'UNESCO, lagons turquoise
                et villages de pêcheurs, l'île offre une diversité remarquable dans un espace concentré.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>La Valette</strong> - Capitale fortifiée et baroque</li>
                <li><strong>Mdina</strong> - Cité silencieuse médiévale</li>
                <li><strong>Blue Lagoon</strong> - Eaux cristallines de Comino</li>
                <li><strong>Gozo</strong> - Île sœur authentique et rurale</li>
                <li><strong>Temples mégalithiques</strong> - Plus anciens que Stonehenge</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-octobre<br />
                <strong>Langue :</strong> Maltais et Anglais<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Visa :</strong> Espace Schengen
              </p>
            </div>
          </div>
        </section>

        {/* Destinations Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Lieux visités</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* La Valette */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1562023409-6a2f19a62e1f?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Europe</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2022</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">La Valette</h3><p className="text-white/90 text-sm">Malte</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Capitale fortifiée baroque, joyau architectural de la Méditerranée.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Culture</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Histoire</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Co-cathédrale</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Upper Barrakka</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Grand Harbour</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Blue Lagoon */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1600688886188-9e88c66b1e6d?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Europe</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2022</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Blue Lagoon</h3><p className="text-white/90 text-sm">Malte</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Eaux cristallines et turquoise de l'île de Comino.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Plage</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Snorkeling</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Baignade</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Îlot Comino</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Gozo */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1583485088034-697b5bc54ccd?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Europe</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2022</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Gozo</h3><p className="text-white/90 text-sm">Malte</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Île sœur authentique aux paysages ruraux et villages pittoresques.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Culture</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Victoria Citadel</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Dwejra Bay</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Ramla Bay</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Mdina */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1599661046289-e31897846e41?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Europe</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2022</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Mdina</h3><p className="text-white/90 text-sm">Malte</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Cité silencieuse médiévale, ancienne capitale de Malte.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Histoire</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Culture</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Cathédrale</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Remparts</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Ruelles médiévales</span>
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
