'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ThailandePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Thaïlande</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Pays du sourire, entre temples dorés, îles paradisiaques et street food savoureuse.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir la Thaïlande</h2>
              <p className="text-gray-700 mb-6">
                La Thaïlande fascine par son mélange unique de spiritualité bouddhiste, de plages tropicales
                et de culture vibrante. Du chaos organisé de Bangkok aux îles paisibles du sud, le royaume
                du Siam promet une expérience inoubliable.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Bangkok</strong> - Métropole moderne et temples dorés</li>
                <li><strong>Chiang Mai</strong> - Capitale culturelle du nord et temples anciens</li>
                <li><strong>Phuket</strong> - Plages paradisiaques et vie nocturne</li>
                <li><strong>Îles Phi Phi</strong> - Eaux turquoise et falaises karstiques</li>
                <li><strong>Ayutthaya</strong> - Ancienne capitale et ruines majestueuses</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-mars (saison sèche)<br />
                <strong>Langue :</strong> Thaï<br />
                <strong>Monnaie :</strong> Baht (฿)<br />
                <strong>Visa :</strong> Exemption 30-45 jours pour tourisme
              </p>
            </div>
          </div>
        </section>

        {/* Cities Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Destinations visitées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Bangkok */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2018</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Bangkok</h3><p className="text-white/90 text-sm">Thaïlande</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Métropole vibrante entre temples dorés et street food savoureuse.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Ville</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Culture</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Grand Palais</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Wat Pho</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Khao San Road</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Phuket */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1589394815804-964ed0be2eb5?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2018</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Phuket</h3><p className="text-white/90 text-sm">Thaïlande</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Plages paradisiaques, vie nocturne et îles environnantes.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Plage</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Patong Beach</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Îles Phi Phi</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Big Buddha</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Koh Samui */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1551244072-5d12893278ab?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2018</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Koh Samui</h3><p className="text-white/90 text-sm">Thaïlande</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Île tropicale aux plages de sable blanc et cocotiers.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Plage</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Chaweng Beach</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Cascades Namuang</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Fisherman's Village</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Koh Tao */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2018</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Koh Tao</h3><p className="text-white/90 text-sm">Thaïlande</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Paradis de la plongée sous-marine et snorkeling.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Plongée</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Chumphon Pinnacle</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Shark Bay</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Sairee Beach</span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">Explorer cette destination</button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </div>

              {/* Krabi */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
                <div className="relative h-64 overflow-hidden">
                  <div className="absolute inset-0 w-full h-full" style={{backgroundImage: 'url(https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?w=1200&q=80)', backgroundSize: 'cover', backgroundPosition: 'center', transform: 'scale(1.1)'}} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4"><span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span></div>
                  <div className="absolute top-4 right-4"><span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2018</span></div>
                  <div className="absolute bottom-4 left-4 right-4"><h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Krabi</h3><p className="text-white/90 text-sm">Thaïlande</p></div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">Falaises karstiques, plages secrètes et îles Phi Phi.</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Plage</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Nature</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Railay Beach</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>4 Islands Tour</span>
                      <span className="text-sm text-gray-700 flex items-center gap-1"><svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>Emerald Pool</span>
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
