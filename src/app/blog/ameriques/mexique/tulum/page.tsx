'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TulumPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Tulum</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Ruines mayas face à la mer turquoise, plages bohèmes et temples spirituels au cœur de la jungle.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Tulum</h2>
              <p className="text-gray-700 mb-6">
                Tulum, joyau bohème-chic de la Riviera Maya, a su préserver son âme spirituelle tout en devenant
                l'une des destinations les plus prisées du Mexique. Célèbre pour ses ruines mayas spectaculaires
                perchées sur une falaise dominant la mer des Caraïbes, Tulum séduit également par ses plages
                paradisiaques bordées de cabañas écologiques en palme tressée, ses cenotes mystiques cachés dans
                la jungle environnante, et son ambiance unique mêlant yoga sunrise, cuisine healthy, DJ sets
                électroniques et cérémonies ancestrales mayas. Refuge des digital nomads, yogis internationaux et
                voyageurs en quête d'authenticité spirituelle, Tulum offre un équilibre magique entre connexion
                à la nature, patrimoine culturel millénaire et fête sous les étoiles.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ruines de Tulum</strong> - Cité maya fortifiée surplombant la mer Caraïbes, site iconique</li>
                <li><strong>Gran Cenote</strong> - Cenote cristallin idéal pour snorkeling avec tortues et stalactites</li>
                <li><strong>Plage de Tulum</strong> - 10 km de sable blanc avec cabañas bohèmes et beach clubs tendance</li>
                <li><strong>Cenote Dos Ojos</strong> - Système de cavernes sous-marines spectaculaire pour plongée</li>
                <li><strong>Cobá</strong> - Site maya avec pyramide Nohoch Mul (42 m) à escalader, vue à 360°</li>
                <li><strong>Laguna Kaan Luum</strong> - Lagon aux eaux turquoise entouré de jungle, spot Instagram</li>
                <li><strong>Réserve de Sian Ka'an</strong> - Biosphère UNESCO avec mangroves, dauphins et lamantins</li>
                <li><strong>Cenote Calavera</strong> - Cenote "tête de mort" parfait pour cliff jumping</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Zones de Tulum</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Tulum Pueblo (centre-ville)</strong> - Authentique, prix abordables, restaurants locaux</li>
                <li><strong>Zona Hotelera (plage)</strong> - Cabañas luxueuses, beach clubs, vie bohème</li>
                <li><strong>Aldea Zamá</strong> - Zone résidentielle moderne entre pueblo et plage</li>
                <li><strong>La Veleta</strong> - Quartier en développement avec cafés branchés et condos</li>
                <li><strong>Boca Paila Road</strong> - Route longeant la plage du sud jusqu'à Sian Ka'an</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Admirer le lever de soleil depuis les ruines face à la mer Caraïbes</li>
                <li>Participer à une session de yoga sur la plage au lever du jour</li>
                <li>Plonger dans les cenotes Gran Cenote ou Dos Ojos</li>
                <li>Escalader la pyramide de Cobá pour une vue panoramique sur la jungle</li>
                <li>Danser pieds dans le sable lors d'une soirée au Papaya Playa Project</li>
                <li>Explorer la réserve de Sian Ka'an en bateau à la recherche de dauphins</li>
                <li>Vivre une cérémonie de cacao maya ou un temazcal de purification</li>
                <li>Déguster un bowl d'açai dans un café healthy du centro</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (saison sèche, moins de moustiques)<br />
                <strong>Langue :</strong> Espagnol (anglais très répandu, communauté internationale importante)<br />
                <strong>Monnaie :</strong> Peso mexicain (MXN)<br />
                <strong>Transport :</strong> Vélos entre pueblo et plage (3 km), colectivos, scooters, voiture<br />
                <strong>Visa :</strong> Passeport valide suffisant (jusqu'à 180 jours)<br />
                <strong>Durée conseillée :</strong> 4-7 jours (ou plus pour les digital nomads)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🏨 Logez dans pueblo pour économiser, en zona hotelera pour l'expérience plage<br />
                🚴 Vélo électrique est idéal pour trajet pueblo-plage (3 km, route avec côtes)<br />
                💰 Prix zona hotelera sont 2-3x plus élevés qu'au pueblo<br />
                🌊 Visitez ruines tôt (8h ouverture) pour éviter foule et chaleur écrasante<br />
                🏊 Gran Cenote meilleur moment : 8h-10h avant arrivée des tours groupés<br />
                🌙 Beach clubs ont souvent minimum de consommation (300-500 pesos/personne)<br />
                🦟 Anti-moustique biodégradable essentiel, surtout saison des pluies<br />
                ⚡ Zona hotelera a souvent coupures d'électricité, prévoyez power bank
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Cochinita Pibil</strong> - Porc mariné achiote cuit dans feuille de bananier, spécialité yucatèque</li>
                <li><strong>Tikin Xic</strong> - Poisson entier grillé mariné achiote, recette maya traditionnelle</li>
                <li><strong>Ceviche de Pescado</strong> - Poisson frais mariné citron vert, ultra frais</li>
                <li><strong>Marquesitas</strong> - Crêpe roulée croustillante fourrée cajeta ou Nutella</li>
                <li><strong>Tacos al Pastor</strong> - Porc grillé vertical avec ananas caramélisé</li>
                <li><strong>Açaí Bowl</strong> - Tendance healthy de Tulum, base açaí avec fruits et granola</li>
                <li><strong>Agua de Jamaica</strong> - Boisson à l'hibiscus rafraîchissante</li>
                <li><strong>Michelada</strong> - Bière avec citron, épices et piments, parfaite après la plage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Ruines de Tulum */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80"
                      alt="Ruines de Tulum"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">UNESCO</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Ruines de Tulum</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Cité maya face aux Caraïbes</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Les ruines de Tulum comptent parmi les sites mayas les plus spectaculaires et photographiés
                        au monde, et pour cause : cette ancienne cité fortifiée se dresse majestueusement sur une
                        falaise de 12 mètres dominant les eaux turquoise cristallines de la mer des Caraïbes. Construite
                        entre le 13e et 15e siècle, Tulum (qui signifie "muraille" en maya) était un important port
                        commercial et centre cérémoniel. El Castillo, le temple principal, domine le site avec ses
                        colonnes massives, tandis que le Temple des Fresques conserve des peintures murales représentant
                        des divinités mayas.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Visiter Tulum au lever du soleil est une expérience magique : les premiers rayons illuminent
                        les pierres grises des temples tandis que la mer s'éveille dans des teintes dorées et turquoise.
                        L'enceinte fortifiée, bien préservée, entoure le site et témoigne de l'importance stratégique
                        de cette cité. Après avoir exploré les ruines, un sentier descend vers une petite plage de
                        sable blanc au pied de la falaise, parfaite pour une baignade rafraîchissante face aux temples
                        millénaires. Ce mélange unique de patrimoine archéologique et de beauté naturelle caribéenne
                        fait de Tulum un site absolument incontournable de la Riviera Maya.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Maya</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zona Hotelera */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80"
                      alt="Plage de Tulum"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Bohème</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Zona Hotelera</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le paradis bohème de la plage</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        La Zona Hotelera de Tulum, qui s'étend sur 10 kilomètres le long de la plage au sud des ruines,
                        incarne l'essence bohème-chic qui a fait la réputation mondiale de Tulum. Loin des resorts
                        all-inclusive standardisés, cette bande de sable blanc est ponctuée de cabañas écologiques
                        en bois et palme tressée, boutique-hotels design, restaurants végétariens et beach clubs où
                        DJ internationaux mixent sur fond de coucher de soleil caribéen. L'électricité provient souvent
                        de panneaux solaires, l'éclairage est à la bougie, et l'architecture privilégie matériaux
                        naturels et ouverture sur l'océan.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        La journée type en zona hotelera commence par une session de yoga face à la mer au lever du
                        soleil, se poursuit par un açaí bowl healthy, une baignade dans les eaux turquoise, puis une
                        sieste dans un hamac suspendu entre deux palmiers. Le soir, les beach clubs s'animent :
                        Papaya Playa Project pour ses soirées électro légendaires, Gitano pour ses cocktails jungle
                        et DJ sets, Nomade pour son ambiance spirituelle chic. Cette zone exclusive (et coûteuse)
                        attire une clientèle internationale de digital nomads, influenceurs, yogis et voyageurs en
                        quête d'une expérience authentique mais confortable au bord de l'une des plus belles plages
                        du monde.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plage</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Beach Clubs</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gran Cenote */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                      alt="Gran Cenote"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Gran Cenote</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Piscine naturelle cristalline</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Gran Cenote, situé à seulement 4 kilomètres au nord de Tulum sur la route de Cobá, est l'un
                        des cenotes les plus accessibles et spectaculaires de la région. Ce cenote semi-ouvert offre
                        une eau d'une clarté absolument incroyable, maintenue à une température constante de 25°C
                        toute l'année. Équipé d'un simple masque et tuba, on découvre un monde sous-marin féerique :
                        stalactites millénaires descendant du plafond rocheux, formations calcaires fantastiques,
                        poissons argentés glissant entre les colonnes, et parfois même des tortues d'eau douce nageant
                        paisiblement dans ce sanctuaire aquatique.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Gran Cenote se compose de plusieurs bassins connectés : une zone ouverte large et peu profonde
                        parfaite pour les familles, et des passages plus intimes menant à des cavernes semi-submergées
                        où les rayons du soleil créent des jeux de lumière magiques à travers les ouvertures naturelles.
                        Les plongeurs certifiés peuvent explorer plus profondément le système de grottes avec un guide
                        local. Des plateformes en bois permettent de se reposer au soleil entre deux plongées, entouré
                        par la jungle luxuriante. Arrivez tôt le matin (dès l'ouverture à 8h) pour profiter du cenote
                        avant l'arrivée massive des tours organisés depuis Playa del Carmen et Cancún.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Snorkeling</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Tortues</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cobá */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=80"
                      alt="Cobá"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Maya</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Cobá</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Pyramide à escalader au cœur de la jungle</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Cobá, situé à 47 kilomètres au nord-ouest de Tulum au cœur de la jungle yucatèque, est l'un
                        des sites archéologiques mayas les plus fascinants du Mexique. Contrairement à Chichén Itzá
                        ou Tulum, Cobá offre une expérience plus authentique et moins touristique : la majorité des
                        structures sont encore ensevelies sous la végétation tropicale, créant une atmosphère d'exploration
                        et de découverte. Mais la véritable star de Cobá est la pyramide Nohoch Mul, haute de 42 mètres
                        (120 marches), qui reste l'une des rares pyramides mayas qu'on peut encore escalader au Mexique.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        L'ascension de Nohoch Mul est raide et impressionnante (les marches sont étroites et hautes),
                        mais la récompense au sommet est exceptionnelle : une vue panoramique à 360 degrés sur la canopée
                        de la jungle yucatèque s'étendant à perte de vue, ponctuée çà et là par les sommets d'autres
                        pyramides encore cachées sous la végétation. Le site s'étend sur 80 km² et on peut le parcourir
                        à vélo ou en vélo-taxi traditionnel le long de chemins ombragés. Plusieurs lacs sacrés, terrains
                        de jeu de balle et stèles sculptées ponctuent le parcours. Visitez Cobá tôt le matin pour
                        éviter la chaleur écrasante et entendre les singes hurleurs résonner dans la jungle.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Archéologie</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Aventure</span>
                    </div>
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
              Retour au Mexique
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations mexicaines et leurs merveilles.
            </p>
            <Link
              href="/blog/ameriques/mexique"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer le Mexique
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
