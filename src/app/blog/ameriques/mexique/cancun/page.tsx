'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CancunPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Cancún</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Perle de la Riviera Maya où le turquoise des Caraïbes rencontre le blanc immaculé du sable.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Cancún</h2>
              <p className="text-gray-700 mb-6">
                Cancún, destination balnéaire phare du Mexique et porte d'entrée de la Riviera Maya, séduit par
                ses plages de carte postale aux eaux turquoise cristallines et son sable blanc poudreux. Ancienne
                île de pêcheurs transformée en paradis touristique planifié dans les années 1970, Cancún offre
                le parfait équilibre entre détente tropicale, vie nocturne animée, resorts all-inclusive luxueux
                et accès privilégié aux merveilles de la civilisation maya. Entre plongée dans les récifs coralliens,
                exploration des cenotes sacrés, excursions vers Chichén Itzá et fiestas endiablées, Cancún propose
                une expérience caribéenne authentiquement mexicaine.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Zona Hotelera</strong> - Langue de sable de 22 km bordée de resorts et plages paradisiaques</li>
                <li><strong>Playa Delfines</strong> - Plage publique moins bondée avec vagues et lettres colorées CANCÚN</li>
                <li><strong>Isla Mujeres</strong> - Île paradisiaque accessible en ferry (30 min), parfaite pour snorkeling</li>
                <li><strong>Chichén Itzá</strong> - Merveille du monde maya avec pyramide de Kukulcán (2h30 de route)</li>
                <li><strong>Cenotes</strong> - Piscines naturelles sacrées (Ik Kil, Dos Ojos, Gran Cenote)</li>
                <li><strong>Xcaret</strong> - Parc éco-archéologique avec rivières souterraines et spectacles culturels</li>
                <li><strong>El Rey Ruinas</strong> - Ruines mayas en Zona Hotelera avec iguanes géants</li>
                <li><strong>Mercado 28</strong> - Marché artisanal pour souvenirs et artisanat mexicain</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Zones et plages</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Zona Hotelera</strong> - Resorts all-inclusive, plages privées, vie nocturne et shopping</li>
                <li><strong>Centro (Downtown)</strong> - Authenticité mexicaine, restaurants locaux et prix abordables</li>
                <li><strong>Playa Caracol</strong> - Eaux calmes idéales pour familles avec enfants</li>
                <li><strong>Playa Tortugas</strong> - Sports nautiques, jet-ski et parasailing</li>
                <li><strong>Puerto Juárez</strong> - Port de départ pour Isla Mujeres</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nager avec les tortues marines à Akumal</li>
                <li>Plonger dans les cenotes de la Riviera Maya</li>
                <li>Admirer le lever de soleil depuis Playa Delfines</li>
                <li>Explorer les ruines de Tulum en bord de mer</li>
                <li>Faire du snorkeling au musée sous-marin MUSA</li>
                <li>Danser jusqu'à l'aube dans les clubs de la Zona Hotelera</li>
                <li>Goûter la gastronomie yucatèque au Mercado 23</li>
                <li>Observer les baleines requins (juin-septembre)</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (éviter saison des ouragans juin-novembre)<br />
                <strong>Langue :</strong> Espagnol (anglais très répandu dans Zona Hotelera)<br />
                <strong>Monnaie :</strong> Peso mexicain (MXN), USD largement acceptés<br />
                <strong>Transport :</strong> Bus ADO confortables, colectivos économiques, taxis, location de voiture<br />
                <strong>Visa :</strong> Passeport valide suffisant pour tourisme (jusqu'à 180 jours)<br />
                <strong>Durée conseillée :</strong> 4-7 jours (base pour explorer Riviera Maya)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                💰 Payez en pesos pour meilleurs taux, évitez de payer en USD<br />
                🏖️ Plages publiques accessibles même en Zona Hotelera (tous les 500m)<br />
                🚌 Bus R1/R2 traversent toute la Zona Hotelera pour 12 pesos (0,60$)<br />
                🌮 Centro offre restaurants authentiques à prix locaux loin des zones touristiques<br />
                🎫 Réservez excursions en ligne à l'avance pour meilleurs prix<br />
                🦈 Snorkeling avec baleines requins est expérience unique (juin-sept)<br />
                🌊 Côté lagon (ouest) = eaux calmes, côté mer (est) = vagues et courants<br />
                🕐 Visitez Chichén Itzá tôt le matin pour éviter foule et chaleur
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Tacos al Pastor</strong> - Tacos au porc mariné avec ananas grillé</li>
                <li><strong>Cochinita Pibil</strong> - Porc mariné achiote cuit lentement, spécialité yucatèque</li>
                <li><strong>Ceviche</strong> - Poisson cru mariné citron vert et piments, frais et acidulé</li>
                <li><strong>Marquesitas</strong> - Crêpe roulée croustillante fourrée Nutella ou cajeta</li>
                <li><strong>Aguachile</strong> - Crevettes crues marinées dans jus de citron vert épicé</li>
                <li><strong>Elote</strong> - Épi de maïs grillé avec mayo, fromage et piment</li>
                <li><strong>Michelada</strong> - Bière avec citron, sauce piquante et épices dans verre givré</li>
                <li><strong>Horchata</strong> - Boisson sucrée au riz et cannelle, désaltérante</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Zona Hotelera */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=80"
                      alt="Zona Hotelera Cancún"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plages</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Zona Hotelera</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le paradis balnéaire de Cancún</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        La Zona Hotelera est une langue de terre en forme de "7" de 22 kilomètres qui sépare la lagune
                        Nichupté de la mer des Caraïbes. C'est ici que se concentrent les resorts all-inclusive luxueux,
                        les plages paradisiaques au sable blanc et aux eaux turquoise, les centres commerciaux climatisés
                        et les clubs de nuit légendaires. L'avenue Kukulcán traverse toute la zone, bordée de palmiers
                        et offrant des vues spectaculaires sur le lagon d'un côté et la mer de l'autre.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Chaque plage a sa personnalité : Playa Delfines avec ses vagues et son sable immaculé, Playa Tortugas
                        pour les sports nautiques et parasailing, Playa Caracol pour les familles avec enfants. Le soir,
                        la zone se transforme en capitale de la fête caribéenne avec Coco Bongo, The City et autres temples
                        de la vie nocturne où touristes du monde entier dansent jusqu'à l'aube. Entre luxe, détente et
                        fiesta, la Zona Hotelera incarne le rêve caribéen à la mexicaine.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Resort</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Fête</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Isla Mujeres */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1606083628096-79670c60c990?w=1200&q=80"
                      alt="Isla Mujeres"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Île</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Isla Mujeres</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">L'île aux Femmes, échappée paradisiaque</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Isla Mujeres, située à seulement 30 minutes en ferry de Cancún, offre une atmosphère complètement
                        différente : plus calme, plus authentique, plus caribéenne. Cette petite île de 8 km de long sur
                        400 mètres de large était autrefois un sanctuaire dédié à la déesse maya Ixchel. Aujourd'hui,
                        c'est un paradis pour les amoureux de snorkeling avec ses eaux cristallines habitées par des tortues
                        marines, raies et poissons tropicaux multicolores.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Playa Norte, régulièrement classée parmi les plus belles plages du Mexique, offre des eaux turquoise
                        peu profondes parfaites pour patauger. Le village coloré du centre-ville pulse au rythme des golf
                        carts électriques (moyen de transport principal), avec ses restaurants de fruits de mer, boutiques
                        de souvenirs artisanaux et bars de plage décontractés. Punta Sur, la pointe sud de l'île, offre
                        des falaises spectaculaires, un temple maya et des sculptures contemporaines face à la mer. Isla
                        Mujeres est l'escapade parfaite pour échapper à l'agitation de Cancún le temps d'une journée.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Snorkeling</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Tranquille</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cenotes */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80"
                      alt="Cenote Mexique"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Cenotes de la Riviera Maya</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Piscines sacrées des Mayas</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Les cenotes sont l'une des merveilles naturelles les plus fascinantes du Yucatán : des puits naturels
                        d'eau douce cristalline formés par l'effondrement du sol calcaire, révélant un réseau souterrain
                        de rivières et grottes. Pour les Mayas, ces cenotes étaient sacrés, considérés comme des portes
                        vers Xibalbá, le monde souterrain. Aujourd'hui, ils offrent une expérience de baignade unique,
                        rafraîchissante alternative aux plages salées de la côte.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Chaque cenote a son caractère unique : Ik Kil près de Chichén Itzá est spectaculaire avec ses lianes
                        tombant des hauteurs, Dos Ojos offre plongée dans un système de cavernes sous-marines, Gran Cenote
                        permet de nager avec les tortues, et Cenote Azul séduit les plongeurs du haut de ses falaises.
                        L'eau est d'une clarté incroyable (jusqu'à 100 mètres de visibilité), maintenue à 24-25°C toute
                        l'année. Descendre dans un cenote, c'est plonger dans un monde mystique où la lumière danse à
                        travers les ouvertures naturelles, créant des jeux d'ombre et de lumière magiques.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Baignade</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Maya</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chichén Itzá */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80"
                      alt="Chichén Itzá"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">UNESCO</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Chichén Itzá</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Merveille du monde maya</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Chichén Itzá, l'une des Sept Nouvelles Merveilles du Monde, est le site archéologique maya le plus
                        emblématique du Mexique. Situé à 2h30 de Cancún, ce complexe spectaculaire dominé par la pyramide
                        de Kukulcán (El Castillo) témoigne du génie architectural et astronomique des Mayas. Avec 30 mètres
                        de hauteur et 91 marches sur chaque face (365 au total avec la plateforme supérieure = jours de
                        l'année), la pyramide est un calendrier en pierre aligné avec précision sur les équinoxes.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le site révèle d'autres merveilles : le terrain de jeu de balle, le plus grand de Méso-Amérique
                        avec une acoustique stupéfiante, le Cenote Sagrado où les Mayas faisaient des sacrifices, l'observatoire
                        astronomique El Caracol avec sa forme d'escargot, et le Temple des Guerriers avec ses colonnes sculptées.
                        Lors des équinoxes de printemps et d'automne, le soleil crée une illusion d'ombre sur la pyramide
                        qui ressemble à un serpent descendant les marches - Kukulcán, le dieu serpent à plumes. Visiter
                        Chichén Itzá tôt le matin permet d'éviter les foules massives et la chaleur écrasante du Yucatán.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Archéologie</span>
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
