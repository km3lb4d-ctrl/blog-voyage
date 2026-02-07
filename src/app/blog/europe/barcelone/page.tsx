'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BarcelonePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Barcelone</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Ville cosmopolite où l'architecture moderniste de Gaudí rencontre la Méditerranée.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Barcelone</h2>
              <p className="text-gray-700 mb-6">
                Barcelone séduit par son mélange unique d'architecture avant-gardiste, de culture catalane
                authentique et de vie méditerranéenne. De la Sagrada Família au Park Güell, en passant par
                les Ramblas animées, la capitale catalane fascine par sa créativité débordante et son énergie contagieuse.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Sagrada Família</strong> - Chef-d'œuvre inachevé de Gaudí, symbole de la ville</li>
                <li><strong>Park Güell</strong> - Jardin féérique avec mosaïques colorées et vues panoramiques</li>
                <li><strong>La Rambla</strong> - Artère emblématique entre Plaça Catalunya et le port</li>
                <li><strong>Barri Gòtic</strong> - Quartier gothique aux ruelles médiévales</li>
                <li><strong>Casa Batlló & La Pedrera</strong> - Joyaux du modernisme catalan</li>
                <li><strong>Montjuïc</strong> - Colline offrant musées, jardins et points de vue</li>
                <li><strong>La Barceloneta</strong> - Plage urbaine et quartier de pêcheurs</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Assister à un match du FC Barcelona au Camp Nou</li>
                <li>Déguster des tapas au marché de la Boqueria</li>
                <li>Se promener dans le quartier bohème de Gràcia</li>
                <li>Profiter du coucher de soleil depuis les bunkers del Carmel</li>
                <li>Explorer l'art contemporain au MACBA</li>
                <li>Flâner dans les jardins du Parc de la Ciutadella</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre-octobre (climat agréable, moins de touristes)<br />
                <strong>Langue :</strong> Catalan et espagnol<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Transport :</strong> Métro très efficace, carte T-10 pour 10 trajets<br />
                <strong>Durée conseillée :</strong> 4-5 jours minimum
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                ✨ Réservez vos billets pour la Sagrada Família et le Park Güell en avance (plusieurs semaines)<br />
                🍽️ Évitez les restaurants sur La Rambla, préférez les ruelles adjacentes<br />
                🚇 La carte T-10 est très avantageuse pour les transports<br />
                🌅 Les bunkers del Carmel offrent la plus belle vue sur Barcelone (gratuit)<br />
                🏖️ La Barceloneta est sympa mais bondée en été, essayez les plages de Bogatell ou Mar Bella<br />
                🎨 Le premier dimanche du mois, plusieurs musées sont gratuits
              </p>
            </div>
          </div>
        </section>

        {/* Quartiers & Lieux Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Quartiers & Lieux explorés</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Sagrada Família */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Architecture</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Sagrada Família</h3>
                    <p className="text-white/90 text-sm">Œuvre majeure de Gaudí</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Basilique emblématique en construction depuis 1882, mêlant influences gothiques et Art nouveau.
                    Les vitraux intérieurs créent une lumière magique.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Gaudí</span>
                  </div>
                </div>
              </div>

              {/* Park Güell */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1558642084-fd07fae5282e?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Park Güell</h3>
                    <p className="text-white/90 text-sm">Jardin enchanté de Gaudí</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Parc public coloré avec mosaïques de trencadís, vues panoramiques sur la ville
                    et atmosphère féerique unique.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Mosaïques</span>
                  </div>
                </div>
              </div>

              {/* Barri Gòtic */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Histoire</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Barri Gòtic</h3>
                    <p className="text-white/90 text-sm">Cœur médiéval de la ville</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Dédale de ruelles médiévales avec cathédrale gothique, places charmantes
                    et vestiges romains. Âme historique de Barcelone.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Médiéval</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Culture</span>
                  </div>
                </div>
              </div>

              {/* Casa Batlló */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Architecture</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Casa Batlló</h3>
                    <p className="text-white/90 text-sm">Maison du dragon</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Chef-d'œuvre moderniste de Gaudí sur le Passeig de Gràcia. Façade ondulante
                    inspirée par la nature et la mythologie.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Modernisme</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Art Nouveau</span>
                  </div>
                </div>
              </div>

              {/* La Rambla */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1562979314-bee7453e911c?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Ville</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">La Rambla</h3>
                    <p className="text-white/90 text-sm">Artère emblématique</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Boulevard piétonnier légendaire bordé de terrasses, artistes de rue
                    et le célèbre marché de la Boqueria.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Animation</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Marché</span>
                  </div>
                </div>
              </div>

              {/* La Barceloneta */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plage</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">La Barceloneta</h3>
                    <p className="text-white/90 text-sm">Quartier balnéaire</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Ancien quartier de pêcheurs devenu plage urbaine populaire.
                    Chiringuitos et paella au bord de la Méditerranée.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Mer</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Gastronomie</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-dark py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Retour en Espagne
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations espagnoles et leurs trésors culturels.
            </p>
            <Link
              href="/blog/europe/espagne"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer l'Espagne
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
