'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TurquiePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Turquie</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Pont entre Orient et Occident, où traditions ancestrales et modernité se rencontrent.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir la Turquie</h2>
              <p className="text-gray-700 mb-6">
                La Turquie fascine par sa position unique à cheval entre deux continents. Des mosquées
                ottomanes d'Istanbul aux cheminées de fées de Cappadoce, en passant par les plages
                turquoise de la côte méditerranéenne, le pays offre une diversité culturelle et naturelle
                exceptionnelle. Héritière des empires byzantin et ottoman, la Turquie mêle avec harmonie
                ses racines ancestrales à une modernité dynamique.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Istanbul</strong> - Mégapole transcontinentale, ancien Constantinople</li>
                <li><strong>Cappadoce</strong> - Paysages lunaires et montgolfières au lever du soleil</li>
                <li><strong>Pamukkale</strong> - Châ teau de coton aux piscines thermales blanches</li>
                <li><strong>Éphèse</strong> - Site archéologique grec et romain exceptionnel</li>
                <li><strong>Antalya</strong> - Riviera turque et plages méditerranéennes</li>
                <li><strong>Bodrum</strong> - Saint-Tropez turc, jet-set et vie nocturne</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-octobre (côtes), toute l'année (Istanbul)<br />
                <strong>Langue :</strong> Turc<br />
                <strong>Monnaie :</strong> Livre turque (₺)<br />
                <strong>Visa :</strong> E-visa en ligne obligatoire<br />
                <strong>Durée conseillée :</strong> 10-15 jours pour un premier voyage
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Conseils de voyage</h3>
              <p className="text-gray-700">
                🕌 Respectez les codes vestimentaires dans les mosquées<br />
                🧿 Le nazar boncuk (œil bleu) est le porte-bonheur traditionnel<br />
                🍵 Prenez le temps de déguster un çay (thé turc) dans un çay bahçesi<br />
                🛍️ Négociez dans les bazars, c'est une tradition<br />
                🌅 La montgolfière en Cappadoce au lever du soleil est inoubliable<br />
                🍽️ Goûtez au petit-déjeuner turc (kahvaltı), c'est un festin
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Kebabs</strong> - Bien au-delà du döner, une cuisine raffinée</li>
                <li><strong>Meze</strong> - Assortiment d'entrées à partager</li>
                <li><strong>Baklava</strong> - Pâtisserie feuilletée au miel et pistaches</li>
                <li><strong>Lokum</strong> - Loukoums parfumés à la rose ou aux fruits</li>
                <li><strong>Çay & Kahve</strong> - Thé noir et café turc traditionnels</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Villes visitées Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Villes visitées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Istanbul */}
              <Link href="/blog/europe/turquie/istanbul" className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Ville</span>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">2022</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Istanbul</h3>
                    <p className="text-white/90 text-sm">Turquie</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    Pont entre deux continents, mêlant traditions ottomanes, bazars colorés et patrimoine byzantin.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Culture</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300">Histoire</span>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">À découvrir</p>
                    <div className="flex flex-wrap gap-2">
                      <span className="text-sm text-gray-700 flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Sainte-Sophie
                      </span>
                      <span className="text-sm text-gray-700 flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Bosphore
                      </span>
                      <span className="text-sm text-gray-700 flex items-center gap-1">
                        <svg className="w-4 h-4 text-[#f56300]" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        Grand Bazar
                      </span>
                    </div>
                  </div>
                  <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">
                    Explorer cette destination
                  </button>
                </div>
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
              </Link>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-dark py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Retour en Europe
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations européennes et leurs trésors culturels.
            </p>
            <Link
              href="/blog/europe"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer l'Europe
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
