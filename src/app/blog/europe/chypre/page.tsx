'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ChyprePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Chypre</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île méditerranéenne mythologique, entre plages dorées et sites archéologiques antiques.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Chypre</h2>
              <p className="text-gray-700 mb-6">
                Chypre, île de la déesse Aphrodite, séduit par son mélange unique d'histoire millénaire,
                de plages paradisiaques et de traditions méditerranéennes. De Paphos à Nicosie, en passant
                par les monastères byzantins des montagnes du Troodos, l'île offre une diversité surprenante
                entre mer turquoise et villages authentiques.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Paphos</strong> - Ville archéologique et lieu de naissance d'Aphrodite</li>
                <li><strong>Rocher d'Aphrodite (Petra tou Romiou)</strong> - Site mythologique légendaire</li>
                <li><strong>Nicosie</strong> - Dernière capitale divisée d'Europe</li>
                <li><strong>Monastères du Troodos</strong> - Patrimoine byzantin UNESCO</li>
                <li><strong>Ayia Napa</strong> - Plages de sable fin et eaux cristallines</li>
                <li><strong>Limassol</strong> - Port dynamique et vieille ville charmante</li>
                <li><strong>Larnaca</strong> - Promenade des Palmiers et lac salé</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Se baigner au coucher du soleil au Rocher d'Aphrodite</li>
                <li>Visiter les mosaïques romaines du Parc archéologique de Paphos</li>
                <li>Découvrir les villages viticoles du Troodos</li>
                <li>Explorer les tombeaux des Rois à Paphos</li>
                <li>Déguster un meze chypriote traditionnel</li>
                <li>Randonner dans les gorges d'Avakas</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-octobre (climat idéal, moins de touristes)<br />
                <strong>Langues :</strong> Grec et turc (anglais très répandu)<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Transport :</strong> Location de voiture recommandée<br />
                <strong>Durée conseillée :</strong> 5-7 jours minimum
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🚗 Louez une voiture pour explorer l'île en toute liberté<br />
                🏖️ Les plages d'Ayia Napa et Protaras sont parmi les plus belles de Méditerranée<br />
                🍷 Ne manquez pas les vins de Commandaria, l'un des plus anciens vins au monde<br />
                🏛️ Le site archéologique de Paphos est un musée à ciel ouvert (UNESCO)<br />
                ⛪ Les monastères peints du Troodos sont des joyaux byzantins<br />
                🌅 Le coucher de soleil au Rocher d'Aphrodite est magique<br />
                🍴 Commandez un meze complet pour découvrir toute la gastronomie chypriote
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Halloumi</strong> - Fromage grillé emblématique de l'île</li>
                <li><strong>Meze</strong> - Assortiment de 20-30 petits plats à partager</li>
                <li><strong>Souvlaki</strong> - Brochettes de viande marinée</li>
                <li><strong>Kleftiko</strong> - Agneau cuit lentement au four</li>
                <li><strong>Loukoumades</strong> - Beignets au miel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Regions Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Régions explorées</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

              {/* Paphos */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1562023409-6a2f19a62e1f?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">UNESCO</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Paphos</h3>
                    <p className="text-white/90 text-sm">Cité archéologique mythique</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Ville antique riche en vestiges romains, mosaïques somptueuses et site de naissance
                    légendaire d'Aphrodite. Port charmant et plages magnifiques.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plage</span>
                  </div>
                </div>
              </div>

              {/* Rocher d'Aphrodite */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1580837119756-563d608dd119?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Mythologie</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Petra tou Romiou</h3>
                    <p className="text-white/90 text-sm">Rocher d'Aphrodite</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Site mythologique où la déesse Aphrodite serait née de l'écume de mer.
                    Plage magnifique et couchers de soleil spectaculaires.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Légende</span>
                  </div>
                </div>
              </div>

              {/* Monastères du Troodos */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1605708896118-957f660c1555?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">UNESCO</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Troodos</h3>
                    <p className="text-white/90 text-sm">Montagnes et monastères</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Massif montagneux abritant 10 monastères byzantins peints, classés UNESCO.
                    Villages authentiques et fraîcheur en été.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Culture</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Montagne</span>
                  </div>
                </div>
              </div>

              {/* Ayia Napa */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plages</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Ayia Napa</h3>
                    <p className="text-white/90 text-sm">Plages paradisiaques</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Station balnéaire réputée pour ses plages de sable fin (Nissi Beach),
                    eaux turquoise et grottes marines spectaculaires.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plage</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                  </div>
                </div>
              </div>

              {/* Nicosie */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1580837119756-563d608dd119?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Capitale</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Nicosie</h3>
                    <p className="text-white/90 text-sm">Capitale divisée</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Dernière capitale divisée d'Europe, entre partie grecque et turque.
                    Vieille ville fortifiée, musées et atmosphère unique.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Culture</span>
                  </div>
                </div>
              </div>

              {/* Limassol */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?w=1200&q=80)',
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
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Limassol</h3>
                    <p className="text-white/90 text-sm">Port cosmopolite</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Deuxième ville de l'île, dynamique et cosmopolite. Vieille ville pittoresque,
                    château médiéval et promenade en bord de mer.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Ville</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Culture</span>
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
