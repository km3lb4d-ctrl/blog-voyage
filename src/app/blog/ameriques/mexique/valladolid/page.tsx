'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ValladolidPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Valladolid</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Ville coloniale colorée du Yucatán, porte d'entrée vers Chichén Itzá et cenotes cachés.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Valladolid</h2>
              <p className="text-gray-700 mb-6">
                Valladolid, charmante ville coloniale nichée au cœur du Yucatán, offre une authenticité mexicaine
                préservée loin de l'agitation touristique de la côte caribéenne. Fondée en 1543 par les conquistadors
                espagnols sur les ruines d'un ancien centre cérémoniel maya nommé Zací, cette ville historique séduit
                par ses façades colorées pastel (jaune, rose, bleu ciel), son zócalo paisible ombragé de lauriers
                centenaires, son architecture coloniale majestueuse et son atmosphère paisible typiquement yucatèque.
                Positionnée stratégiquement à mi-chemin entre Cancún et Mérida, à seulement 45 minutes de Chichén
                Itzá et entourée de cenotes spectaculaires, Valladolid est l'étape culturelle incontournable pour
                quiconque souhaite comprendre l'âme du Mexique colonial et maya au-delà des plages.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Cenote Zací</strong> - Cenote à ciel ouvert en plein centre-ville, accessible et spectaculaire</li>
                <li><strong>Convento de San Bernardino de Siena</strong> - Monastère franciscain du XVIe siècle avec fresques coloniales</li>
                <li><strong>Calzada de los Frailes</strong> - Rue pavée coloniale colorée menant au monastère</li>
                <li><strong>Cenote Suytun</strong> - Cenote souterrain iconique avec rayon de lumière central</li>
                <li><strong>Chichén Itzá</strong> - Merveille du monde maya à 45 minutes, idéal depuis Valladolid</li>
                <li><strong>Cenote Oxman</strong> - Cenote semi-ouvert avec corde pour plonger dans l'eau</li>
                <li><strong>Parque Francisco Cantón Rosado</strong> - Zócalo central avec église San Servacio</li>
                <li><strong>Ek Balam</strong> - Site maya moins touristique avec pyramide à escalader (30 min)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Quartiers et rues emblématiques</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Centro Histórico</strong> - Cœur colonial avec zócalo, église et maisons colorées</li>
                <li><strong>Calzada de los Frailes</strong> - Rue photogénique pavée avec boutiques artisanales</li>
                <li><strong>Barrio de Sisal</strong> - Quartier authentique avec monastère San Bernardino</li>
                <li><strong>Mercado Municipal</strong> - Marché local coloré avec produits yucatèques</li>
                <li><strong>Parque de la Candelaria</strong> - Parc secondaire calme et ombragé</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Flâner sur la Calzada de los Frailes et photographier les façades colorées</li>
                <li>Plonger dans le cenote Zací en plein cœur de la ville</li>
                <li>Visiter Chichén Itzá très tôt depuis Valladolid pour éviter les foules</li>
                <li>Découvrir le cenote Suytun et son célèbre rayon de lumière</li>
                <li>Déguster une longaniza de Valladolid (saucisse locale) sur le zócalo</li>
                <li>Explorer le monastère San Bernardino et ses jardins paisibles</li>
                <li>Assister à un spectacle de danses folkloriques le dimanche soir sur le zócalo</li>
                <li>Escalader la pyramide d'Ek Balam pour une vue sur la jungle</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-mars (moins chaud et humide)<br />
                <strong>Langue :</strong> Espagnol (maya yucatèque parlé par les locaux)<br />
                <strong>Monnaie :</strong> Peso mexicain (MXN)<br />
                <strong>Transport :</strong> Bus ADO depuis Cancún (2h30) ou Mérida (2h), vélos pour la ville<br />
                <strong>Visa :</strong> Passeport valide suffisant (jusqu'à 180 jours)<br />
                <strong>Durée conseillée :</strong> 2-3 jours (base idéale pour Chichén Itzá et cenotes)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🏛️ Base parfaite pour visiter Chichén Itzá tôt (départ 7h) et éviter les foules de Cancún<br />
                🚴 Centre-ville est petit et se visite facilement à pied ou vélo<br />
                💰 Prix beaucoup plus bas qu'à Cancún/Playa, expérience authentique garantie<br />
                🏊 Cenote Zací est pratique mais bondé l'après-midi, allez-y tôt le matin<br />
                📸 Calzada de los Frailes est plus belle en fin d'après-midi avec lumière dorée<br />
                🌮 Mercado Municipal offre repas authentiques yucatèques à prix locaux<br />
                🌡️ Valladolid est très chaud et humide, apportez eau et chapeau<br />
                🎉 Dimanche soir sur zócalo = spectacles gratuits et ambiance festive locale
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Longaniza de Valladolid</strong> - Saucisse grillée locale épicée, spécialité de la ville</li>
                <li><strong>Cochinita Pibil</strong> - Porc mariné achiote cuit dans feuille de bananier</li>
                <li><strong>Papadzules</strong> - Tacos roulés sauce aux graines de courge et œufs durs</li>
                <li><strong>Salbutes</strong> - Tortillas frites garnies de dinde, avocat et oignon mariné</li>
                <li><strong>Panuchos</strong> - Tortillas farcies haricots noirs et garnies de viande</li>
                <li><strong>Marquesitas</strong> - Crêpe roulée croustillante fourrée cajeta ou fromage</li>
                <li><strong>Agua de Chaya</strong> - Boisson à la chaya (plante locale nutritive)</li>
                <li><strong>Xtabentún</strong> - Liqueur de miel d'abeille maya et anis, digestif local</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Calzada de los Frailes */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=1200&q=80"
                      alt="Calzada de los Frailes Valladolid"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Colonial</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Calzada de los Frailes</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">La rue la plus photogénique du Yucatán</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        La Calzada de los Frailes (Chaussée des Frères) est sans conteste la rue la plus charmante
                        et photographiée de Valladolid. Cette artère coloniale pavée de 750 mètres relie le zócalo
                        central au monastère San Bernardino de Siena, traversant le cœur historique de la ville. De
                        chaque côté de la rue s'alignent des maisons coloniales basses aux façades colorées pastel :
                        jaune moutarde, rose bonbon, bleu ciel, vert menthe. Ces couleurs éclatantes contrastent
                        magnifiquement avec les portes en bois massif, les fenêtres à barreaux en fer forgé et les
                        trottoirs étroits typiques de l'architecture coloniale espagnole.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Se promener sur la Calzada en fin d'après-midi, lorsque la lumière dorée caresse les façades,
                        est une expérience hors du temps. Des boutiques artisanales vendent textiles mayas brodés à
                        la main, hamacs colorés et bijoux en argent, tandis que petits cafés et restaurants occupent
                        d'anciennes demeures coloniales rénovées avec goût. Le soir, l'éclairage tamisé des lampadaires
                        anciens crée une ambiance romantique, et les locaux sortent discuter sur le pas de leur porte.
                        Cette rue incarne parfaitement l'élégance coloniale préservée du Yucatán, loin de l'agitation
                        touristique de la côte.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Photogénique</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cenote Suytun */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                      alt="Cenote Suytun"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Mystique</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Cenote Suytun</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le cenote souterrain au rayon de lumière magique</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Cenote Suytun, situé à 8 kilomètres à l'ouest de Valladolid, est devenu l'un des cenotes
                        les plus photographiés et iconiques du Yucatán grâce à son phénomène naturel spectaculaire :
                        un rayon de lumière qui descend verticalement du plafond de la caverne pour illuminer les
                        eaux turquoise cristallines du cenote souterrain. Ce jeu de lumière naturel, visible
                        principalement en milieu de journée lorsque le soleil est au zénith, crée une atmosphère
                        quasi mystique et spirituelle, rappelant pourquoi les Mayas considéraient ces lieux comme
                        des portails sacrés vers le monde souterrain de Xibalbá.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Pour accéder au cenote, on descend un escalier en pierre taillée qui s'enfonce dans les
                        entrailles de la terre, la température chutant agréablement. Une plateforme en pierre ronde
                        au centre du cenote permet de prendre la photo iconique : la silhouette se découpant dans
                        le rayon de lumière divine. L'eau maintenue à 25°C est parfaite pour la baignade, et la
                        profondeur raisonnable (4-5 mètres) permet même aux non-nageurs de profiter avec gilet de
                        sauvetage. Les stalactites millénaires pendent du plafond haut de 15 mètres, tandis que
                        les petits poissons argentés glissent dans l'eau limpide. Arrivez tôt (avant 10h) pour
                        éviter les groupes de touristes venus de Cancún.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Instagram</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Baignade</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* San Bernardino de Siena */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1583037189850-1921ae7c6c22?w=1200&q=80"
                      alt="Convento San Bernardino Valladolid"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">XVIe siècle</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Convento de San Bernardino</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Monastère franciscain fortifié du XVIe siècle</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le Convento de San Bernardino de Siena, construit entre 1552 et 1560 par les moines franciscains,
                        est l'un des plus anciens et majestueux monastères coloniaux du Yucatán. Situé au bout de la
                        Calzada de los Frailes, cet imposant édifice de pierre calcaire aux allures de forteresse
                        médiévale témoigne de l'évangélisation des populations mayas après la conquête espagnole.
                        Ses murs épais, ses contreforts massifs et ses meurtrières rappellent qu'à l'époque, les
                        monastères devaient aussi servir de bastions défensifs. L'église attenante, avec sa façade
                        baroque sobre et son clocher unique, domine le paysage du quartier de Sisal.
                      </p>
                      <p className="text-gray-700 mb-4">
                        À l'intérieur, le cloître colonial à arcades ouvertes sur un patio central offre une fraîcheur
                        bienvenue. Les murs conservent des fresques religieuses du XVIe siècle partiellement restaurées,
                        mélangeant iconographie chrétienne et influences artistiques indigènes. Un cenote souterrain
                        se cache sous le monastère, découvrable lors de visites guidées. Les jardins paisibles du
                        couvent, avec leur fontaine coloniale et leurs arbres centenaires, invitent à la méditation
                        et au repos. Le soir, l'éclairage nocturne sublime l'architecture de pierre, créant un tableau
                        romantique visible depuis la Calzada. Ce monastère est un témoignage vivant de l'histoire
                        coloniale complexe du Yucatán.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Architecture</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Religion</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chichén Itzá depuis Valladolid */}
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
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Merveille du Monde</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Chichén Itzá depuis Valladolid</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Base stratégique pour visiter la merveille maya</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Valladolid est la base absolument idéale pour visiter Chichén Itzá, l'une des Sept Nouvelles
                        Merveilles du Monde. Située à seulement 45 minutes (42 km) à l'ouest de la ville, la cité
                        maya est facilement accessible en taxi collectif, bus ADO ou excursion organisée. Mais le
                        véritable avantage de loger à Valladolid plutôt qu'à Cancún (2h30 de route) est stratégique :
                        vous pouvez partir très tôt le matin (dès 7h) et être parmi les premiers visiteurs à entrer
                        dans le site dès son ouverture à 8h, avant l'arrivée massive des bus touristiques de la
                        Riviera Maya vers 10h-11h.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Visiter Chichén Itzá tôt le matin depuis Valladolid offre une expérience incomparable : la
                        pyramide de Kukulcán dans la lumière douce du matin, moins de foule pour photographier les
                        monuments iconiques, température encore supportable (avant la chaleur écrasante de midi), et
                        possibilité d'explorer tranquillement le terrain de jeu de balle, le Cenote Sagrado, l'observatoire
                        El Caracol et le Temple des Guerriers. Vers 10h, lorsque les hordes de touristes commencent
                        à déferler, vous pouvez tranquillement repartir vers Valladolid ou combiner avec un cenote
                        comme Ik Kil à proximité. Les hôtels et guides locaux de Valladolid proposent des excursions
                        "early bird" optimisées pour cette stratégie gagnante.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Maya</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
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
