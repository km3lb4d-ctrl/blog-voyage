'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function IslaMujeresPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Isla Mujeres</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            L'Île des Femmes, petit paradis caribéen où le temps s'arrête au rythme des golf carts.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Isla Mujeres</h2>
              <p className="text-gray-700 mb-6">
                Isla Mujeres, petite île paradisiaque située à seulement 20 minutes en ferry de Cancún, offre une
                atmosphère radicalement différente de sa voisine touristique : plus calme, plus authentique, plus
                caribéenne. Avec seulement 8 km de long sur 400 mètres de large, cette langue de terre entourée d'eaux
                cristallines doit son nom aux statues de la déesse maya Ixchel découvertes par les conquistadors espagnols.
                Entre Playa Norte régulièrement classée parmi les plus belles plages du monde, eaux turquoise habitées
                par tortues marines et raies, village coloré au charme décontracté et golf carts comme principal moyen
                de transport, Isla Mujeres est l'escapade parfaite pour échapper à l'agitation urbaine.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Playa Norte</strong> - Une des plus belles plages du Mexique, eaux turquoise peu profondes</li>
                <li><strong>Punta Sur</strong> - Falaises spectaculaires, temple maya d'Ixchel et sculptures contemporaines</li>
                <li><strong>Snorkeling avec tortues</strong> - Observer tortues marines en liberté dans leur habitat naturel</li>
                <li><strong>Downtown coloré</strong> - Rues piétonnes avec restaurants, boutiques artisanales et ambiance décontractée</li>
                <li><strong>Golf cart tour</strong> - Tour de l'île en voiturette électrique (2-3h)</li>
                <li><strong>Musée sous-marin MUSA</strong> - 500+ sculptures immergées créant récif artificiel</li>
                <li><strong>Playa Lancheros</strong> - Plage tranquille côté ouest avec restaurants de fruits de mer</li>
                <li><strong>Coucher de soleil</strong> - Spectaculaire depuis n'importe quelle plage ouest</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Plages et spots</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Playa Norte</strong> - Eaux calmes et peu profondes, parfaite pour familles</li>
                <li><strong>Playa Centro</strong> - Proche du centre-ville, ambiance locale</li>
                <li><strong>Playa Lancheros</strong> - Côté ouest calme, excellent pour snorkeling</li>
                <li><strong>Punta Sur</strong> - Falaises rocheuses, vues panoramiques spectaculaires</li>
                <li><strong>El Garrafón</strong> - Parc naturel avec récifs coralliens et tyrolienne</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Nager dans les eaux cristallines de Playa Norte au lever du soleil</li>
                <li>Observer les tortues marines lors d'une session snorkeling</li>
                <li>Faire le tour de l'île en golf cart électrique</li>
                <li>Déguster un ceviche frais dans un restaurant de plage</li>
                <li>Plonger au musée sous-marin MUSA avec ses sculptures immergées</li>
                <li>Admirer le coucher de soleil depuis Punta Sur</li>
                <li>Explorer les boutiques artisanales du centre-ville</li>
                <li>Se détendre dans un hamac au bord de l'eau avec une michelada</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (éviter saison des pluies mai-octobre)<br />
                <strong>Langue :</strong> Espagnol (anglais parlé dans zones touristiques)<br />
                <strong>Monnaie :</strong> Peso mexicain (MXN)<br />
                <strong>Transport :</strong> Ferry depuis Cancún (30 min), golf cart sur l'île (250-500 pesos/jour)<br />
                <strong>Visa :</strong> Passeport valide suffisant<br />
                <strong>Durée conseillée :</strong> 2-3 jours (ou excursion d'une journée depuis Cancún)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                ⛴️ Prenez ferry tôt le matin pour éviter foule et profiter de l'île calme<br />
                🏍️ Louez golf cart ou scooter pour explorer île facilement et rapidement<br />
                🐢 Meilleur spot tortues : El Garrafón ou excursion snorkeling organisée<br />
                🏖️ Playa Norte est bondée après 11h, arrivez tôt pour tranquillité<br />
                🌅 Côté ouest de l'île offre meilleurs couchers de soleil<br />
                🍽️ Restaurants locaux sur Av. Hidalgo sont authentiques et abordables<br />
                💤 Dormir sur l'île permet de profiter du lever/coucher de soleil sans foule<br />
                🎒 Apportez crème solaire biodégradable pour protéger écosystème marin
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ceviche de Pescado</strong> - Poisson frais mariné citron vert, spécialité incontournable</li>
                <li><strong>Tikin Xic</strong> - Poisson entier grillé mariné achiote, recette maya traditionnelle</li>
                <li><strong>Fish Tacos</strong> - Tacos au poisson grillé ou frit avec sauce crémeuse</li>
                <li><strong>Langosta</strong> - Langouste grillée, luxe abordable sur l'île</li>
                <li><strong>Pulpo al Ajillo</strong> - Poulpe à l'ail, tendre et savoureux</li>
                <li><strong>Agua de Jamaica</strong> - Boisson à l'hibiscus rafraîchissante</li>
                <li><strong>Coco Loco</strong> - Cocktail servi dans une noix de coco fraîche</li>
                <li><strong>Marquesitas</strong> - Crêpe roulée croustillante, dessert yucatèque</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Playa Norte */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Playa Norte Isla Mujeres"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Paradis</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Playa Norte</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La plus belle plage du Mexique</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Playa Norte est régulièrement classée parmi les plus belles plages du monde, et pour cause : son sable
                        blanc poudreux, ses eaux turquoise cristallines peu profondes et ses palmiers qui se balancent créent
                        un décor de carte postale parfait. La plage s'étend sur le côté nord de l'île, protégée des vagues
                        par sa position géographique, offrant une mer calme idéale pour patauger, nager et jouer avec les enfants.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        L'eau est si claire qu'on peut voir ses pieds même à 50 mètres du rivage. Des beach clubs jalonnent
                        la plage, proposant transats, palapas en feuilles de palmier, musique chill et cocktails tropicaux.
                        Le matin tôt, avant l'arrivée des touristes en excursion depuis Cancún, Playa Norte est un paradis
                        tranquille où les locaux font leur jogging matinal. Le coucher de soleil transforme l'eau en or liquide,
                        moment magique pour un dernier bain de la journée.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plage</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Baignade</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Downtown */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1601066284742-e9ded7d28897?w=1200&q=80"
                      alt="Downtown Isla Mujeres"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Village</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Downtown</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le cœur coloré de l'île</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le centre-ville d'Isla Mujeres est un charmant village caribéen aux maisons colorées et ruelles pavées
                        où le golf cart est roi. L'avenue Hidalgo, artère principale piétonne, est bordée de restaurants locaux
                        servant fruits de mer fraîchement pêchés, boutiques d'artisanat mexicain, galeries d'art local et bars
                        de plage décontractés. L'ambiance est résolument laid-back, avec musique reggae en fond sonore et
                        habitants souriants qui saluent les passants.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le Mercado Municipal offre une immersion dans la vie locale avec ses étals de fruits tropicaux, légumes
                        frais et épices colorées. Le soir, les restaurants installent leurs tables sur la rue, créant une atmosphère
                        festive où touristes et locaux se mêlent autour de ceviches et micheladas. Le malecón (promenade en bord
                        de mer) est parfait pour admirer le coucher de soleil avec vue sur Cancún au loin, tandis que les pêcheurs
                        ramènent leurs prises du jour. Downtown Isla Mujeres incarne le Mexique caribéen authentique et décontracté.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Shopping</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Restaurants</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Punta Sur */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=1200&q=80"
                      alt="Punta Sur Isla Mujeres"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Paysage</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Punta Sur</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La pointe spectaculaire de l'île</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Punta Sur, la pointe sud de l'île, offre un contraste saisissant avec les plages de sable : des falaises
                        rocheuses battues par les vagues de la mer des Caraïbes, un paysage dramatique où la nature sauvage règne.
                        C'est ici que se trouvent les ruines du temple maya dédié à Ixchel, déesse de la lune et de la fertilité,
                        qui donnait autrefois son caractère sacré à l'île. Le parc écologique Garrafón entoure cette zone avec
                        sentiers naturels, miradors panoramiques et accès privilégié aux falaises.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Des sculptures contemporaines monumentales ponctuent le paysage : un couple enlacé face à l'océan, symbole
                        d'amour éternel, et d'autres œuvres d'art qui dialoguent avec la mer et le ciel. Le point de vue depuis
                        la falaise offre une perspective à 360° : d'un côté les eaux calmes turquoise de la côte ouest, de l'autre
                        les vagues déferlantes du large. C'est le spot parfait pour contempler l'immensité de la mer des Caraïbes,
                        sentir la force des éléments et comprendre pourquoi les Mayas considéraient cet endroit comme sacré.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vue panoramique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Snorkeling */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                      alt="Snorkeling Isla Mujeres"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Aquatique</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Snorkeling avec tortues</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Rencontre magique avec la vie marine</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Isla Mujeres est l'un des meilleurs spots au Mexique pour observer les tortues marines en liberté dans
                        leur habitat naturel. Les eaux cristallines autour de l'île abritent principalement des tortues vertes
                        et imbriquées qui viennent se nourrir d'algues marines sur les récifs peu profonds. Équipé d'un simple
                        masque et tuba, on peut nager aux côtés de ces créatures majestueuses qui glissent gracieusement entre
                        les coraux, indifférentes à la présence humaine tant qu'on respecte leur espace.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Les excursions snorkeling partent généralement du centre-ville et emmènent les visiteurs vers plusieurs
                        spots : El Garrafón pour les tortues, le récif Manchones pour les poissons tropicaux colorés, et le
                        musée sous-marin MUSA avec ses 500+ sculptures immergées qui ont créé un récif artificiel colonisé par
                        coraux et poissons. L'eau maintenue entre 26-28°C toute l'année et la visibilité souvent supérieure à
                        30 mètres offrent des conditions idéales. Nager avec une tortue marine centenaire dans les eaux turquoise
                        d'Isla Mujeres reste un moment magique et inoubliable.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Tortues</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plongée</span>
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
