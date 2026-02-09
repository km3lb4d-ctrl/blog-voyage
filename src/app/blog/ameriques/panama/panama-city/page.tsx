'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PanamaCityPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Panama City</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Métropole moderne entre deux océans, canal mythique et Casco Viejo colonial inscrit au patrimoine mondial.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Panama City</h2>
              <p className="text-gray-700 mb-6">
                Panama City, capitale dynamique du Panama, est une ville fascinante où contrastes et paradoxes
                se côtoient harmonieusement : gratte-ciels futuristes dominant une skyline digne de Miami face
                au quartier colonial coloré de Casco Viejo inscrit au patrimoine UNESCO, forêt tropicale luxuriante
                s'immisçant jusqu'au cœur de la métropole, et bien sûr le légendaire Canal de Panama, merveille
                d'ingénierie du XXe siècle reliant Pacifique et Atlantique. Positionnée stratégiquement comme
                "Hub des Amériques", cette ville cosmopolite de 1,5 million d'habitants mêle influences latinos,
                caribéennes, nord-américaines et asiatiques dans une énergie urbaine unique. Entre observation
                des géants des mers franchissant les écluses, déambulation dans les ruelles pavées coloniales,
                exploration de la forêt urbaine du Parc Métropolitain et contemplation du coucher de soleil
                depuis la Cinta Costera, Panama City offre une expérience urbaine tropicale inoubliable.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Canal de Panama - Écluses de Miraflores</strong> - Observer passage des navires géants, musée interactif</li>
                <li><strong>Casco Viejo</strong> - Quartier colonial UNESCO avec architecture restaurée et toits-terrasses</li>
                <li><strong>Causeway Amador</strong> - Promenade de 6 km en bord de mer avec vue sur skyline et pont</li>
                <li><strong>Parc Métropolitain</strong> - Forêt tropicale en pleine ville avec paresseux, singes et toucans</li>
                <li><strong>Biomuseo</strong> - Musée biodiversité conçu par Frank Gehry, architecture spectaculaire</li>
                <li><strong>Cinta Costera</strong> - Front de mer moderne avec piste cyclable et vue panoramique</li>
                <li><strong>Mercado de Mariscos</strong> - Marché aux poissons avec ceviche ultra frais</li>
                <li><strong>Panama Viejo</strong> - Ruines de la première ville fondée en 1519 par les Espagnols</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Quartiers de Panama City</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Casco Viejo</strong> - Centre historique colonial, restaurants branchés, ambiance bohème</li>
                <li><strong>Punta Paitilla/Punta Pacífica</strong> - Skyline moderne avec gratte-ciels luxueux</li>
                <li><strong>El Cangrejo</strong> - Quartier bancaire et d'affaires, vie nocturne animée</li>
                <li><strong>Cinta Costera</strong> - Front de mer aménagé idéal pour jogging et vélo</li>
                <li><strong>Balboa</strong> - Ancien quartier américain du Canal, architecture unique</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Observer un porte-conteneurs géant franchir les écluses de Miraflores</li>
                <li>Explorer les ruelles colorées de Casco Viejo au coucher du soleil</li>
                <li>Déguster un ceviche frais au Mercado de Mariscos</li>
                <li>Faire du vélo sur le Causeway Amador avec vue sur la skyline</li>
                <li>Observer paresseux et singes dans le Parc Métropolitain</li>
                <li>Admirer la skyline illuminée depuis un rooftop de Casco Viejo</li>
                <li>Visiter le Biomuseo de Frank Gehry et ses couleurs éclatantes</li>
                <li>Prendre le métro moderne, fierté de la ville</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-avril (saison sèche), mai-novembre = pluies après-midi<br />
                <strong>Langue :</strong> Espagnol (anglais parlé dans secteur touristique et bancaire)<br />
                <strong>Monnaie :</strong> Dollar américain USD (officiellement balboa PAB = 1:1 avec USD)<br />
                <strong>Transport :</strong> Métro moderne (2 lignes), bus Metrobus, Uber, taxis<br />
                <strong>Visa :</strong> Passeport valide suffisant pour tourisme (90 jours)<br />
                <strong>Durée conseillée :</strong> 2-3 jours (ou hub pour explorer le reste du Panama)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🚇 Métro est ultra-moderne, climatisé et efficace pour se déplacer (carte rechargeable)<br />
                🌊 Visitez écluses Miraflores le matin (8h-11h) pour voir plus de passages de navires<br />
                🏛️ Casco Viejo est magnifique en fin d'après-midi pour photos avec lumière dorée<br />
                💰 USD partout acceptés, pas besoin de changer en balboa<br />
                🍤 Mercado de Mariscos offre meilleur ceviche à prix local (2-3$)<br />
                🌆 Rooftops de Casco Viejo (Casa Casco, Tantalo) parfaits pour coucher de soleil<br />
                🚴 Causeway Amador idéal le dimanche matin (vélos disponibles en location)<br />
                🌳 Parc Métropolitain meilleur tôt le matin pour observer faune active
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ceviche de Corvina</strong> - Poisson blanc mariné citron, spécialité nationale absolue</li>
                <li><strong>Sancocho</strong> - Soupe de poulet traditionnelle avec yuca et culantro</li>
                <li><strong>Arroz con Pollo</strong> - Riz au poulet panaméen, comfort food local</li>
                <li><strong>Patacones</strong> - Bananes plantain frites écrasées, accompagnement incontournable</li>
                <li><strong>Ropa Vieja</strong> - Bœuf effiloché mijoté sauce tomate épicée</li>
                <li><strong>Carimañolas</strong> - Beignets de yuca farcis viande hachée, snack populaire</li>
                <li><strong>Raspados</strong> - Glace pilée avec sirops colorés et lait concentré</li>
                <li><strong>Seco Herrerano</strong> - Alcool de canne à sucre local, digestif traditionnel</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Canal de Panama */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=1200&q=80"
                      alt="Canal de Panama"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Merveille</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Canal de Panama</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Merveille d'ingénierie du XXe siècle</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Canal de Panama, inauguré en 1914 après 10 ans de construction titanesque, demeure l'une
                        des prouesses d'ingénierie les plus impressionnantes de l'humanité. Ce passage maritime de
                        77 kilomètres reliant l'océan Pacifique à l'océan Atlantique (mer des Caraïbes) permet aux
                        navires d'éviter le dangereux contournement du Cap Horn, économisant 15 000 km de navigation.
                        Le système d'écluses à trois niveaux élève les navires de 26 mètres au-dessus du niveau de
                        la mer pour traverser le lac Gatún artificiel, avant de les redescendre de l'autre côté.
                        Chaque jour, environ 40 navires géants (porte-conteneurs, pétroliers, paquebots) franchissent
                        ce canal mythique.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Les écluses de Miraflores, situées à seulement 15 minutes du centre-ville, offrent le meilleur
                        point d'observation public. Depuis la terrasse panoramique du musée interactif, on assiste
                        fasciné au ballet millimétré des "mulas" (locomotives électriques) guidant un porte-conteneurs
                        de 300 mètres dans des écluses où il ne reste que 60 cm de chaque côté. Le remplissage de
                        l'écluse par 101 millions de litres d'eau douce en 10 minutes est spectaculaire. Le musée
                        retrace l'histoire épique du canal : la tentative française ratée, les milliers de morts de
                        la malaria et fièvre jaune, puis le succès américain. Observer ces géants des mers s'élever
                        lentement est une expérience hypnotique et inoubliable.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Ingénierie</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Casco Viejo */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80"
                      alt="Casco Viejo Panama"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">UNESCO</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Casco Viejo</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le joyau colonial au patrimoine mondial</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Casco Viejo (Vieille Ville), également appelé Casco Antiguo, est le centre historique de
                        Panama City inscrit au patrimoine mondial de l'UNESCO depuis 1997. Fondé en 1673 après la
                        destruction de la première ville Panama Viejo par le pirate Henry Morgan, ce quartier colonial
                        fortifié déploie ses ruelles pavées étroites, ses places ombragées et ses églises baroques
                        sur une petite péninsule s'avançant dans la baie de Panama. Après des décennies d'abandon
                        et de délabrement, Casco Viejo a connu une renaissance spectaculaire ces 20 dernières années :
                        bâtiments coloniaux restaurés avec soin, boutique-hotels de charme installés dans d'anciennes
                        demeures, restaurants gastronomiques et rooftop bars branchés investissant les toits-terrasses.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Se promener dans Casco Viejo en fin d'après-midi, c'est voyager dans le temps : balcons en
                        fer forgé débordant de bougainvilliers, façades colorées aux influences espagnoles, françaises
                        et caribéennes, églises coloniales dorées à l'or fin, et contraste saisissant avec la skyline
                        futuriste de la ville moderne visible depuis les remparts. La Plaza de la Independencia, cœur
                        historique du quartier, est entourée de la cathédrale métropolitaine et de palais coloniaux.
                        Le soir, les ruelles s'animent de musique latino, les rooftop bars s'emplissent pour le coucher
                        de soleil, et l'éclairage nocturne sublime l'architecture. Casco Viejo est le lieu le plus
                        photogénique et romantique de Panama City.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Colonial</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Restaurants</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Causeway Amador */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Causeway Amador Panama"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Balade</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Causeway Amador</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Promenade maritime avec vue spectaculaire</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Causeway Amador (Calzada de Amador) est une promenade maritime de 6 kilomètres construite
                        en 1913 avec les roches excavées lors de la construction du Canal de Panama. Cette digue
                        artificielle relie le continent à quatre petites îles (Naos, Perico, Culebra et Flamenco)
                        dans la baie de Panama, à l'entrée pacifique du Canal. Aménagée avec pistes cyclables, trottoirs
                        piétons, restaurants de fruits de mer et espaces verts, le Causeway est devenu le lieu de
                        loisirs préféré des Panaméens le week-end et l'une des expériences incontournables pour
                        les visiteurs.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        L'attrait principal du Causeway est la vue spectaculaire qu'il offre : d'un côté la skyline
                        impressionnante de Panama City avec ses gratte-ciels étincelants, de l'autre le majestueux
                        Pont des Amériques enjambant l'entrée du Canal, et au loin les navires attendant leur tour
                        pour franchir les écluses. Le Biomuseo de Frank Gehry, avec ses panneaux colorés iconiques,
                        marque le début du Causeway. Louer un vélo et pédaler jusqu'à l'île de Flamenco au bout
                        du Causeway en fin d'après-midi permet d'assister à un coucher de soleil inoubliable sur
                        le Pacifique, avec la silhouette de la ville se découpant sur l'horizon. Les dimanches,
                        l'ambiance familiale et festive envahit le Causeway : familles pique-niquant, cyclistes,
                        joggeurs, et parfois même concerts en plein air.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vélo</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vue panoramique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Parc Métropolitain */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                      alt="Parc Métropolitain Panama"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Parc Métropolitain</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Forêt tropicale au cœur de la métropole</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Parc Métropolitain (Parque Natural Metropolitano) est l'une des particularités les plus
                        étonnantes de Panama City : une véritable forêt tropicale primaire de 265 hectares préservée
                        en plein cœur de la capitale moderne. Situé à seulement 10 minutes du centre-ville, ce parc
                        national urbain unique en Amérique centrale abrite une biodiversité impressionnante : paresseux
                        à trois doigts accrochés aux arbres, singes hurleurs dont les cris résonnent dans la canopée,
                        toucans colorés, iguanes géants, agoutis, et plus de 250 espèces d'oiseaux tropicaux. Plusieurs
                        sentiers balisés de difficulté variable serpentent dans la jungle luxuriante.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le sentier le plus populaire, Los Momótides (1,5 km), mène au mirador Cerro Cedro qui culmine
                        à 150 mètres d'altitude. Depuis cette plateforme d'observation panoramique, la vue est surréaliste :
                        au premier plan, la canopée dense de la forêt tropicale avec toucans volant entre les arbres,
                        et en arrière-plan la skyline spectaculaire de Panama City avec ses gratte-ciels modernes,
                        le Canal de Panama, et le Pont des Amériques. Ce contraste saisissant entre nature sauvage
                        et urbanisme futuriste symbolise parfaitement Panama City. Visiter le parc tôt le matin
                        (ouverture 6h) garantit de meilleures observations de faune et températures supportables avant
                        la chaleur écrasante du milieu de journée.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Faune</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Randonnée</span>
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
              Retour au Panama
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations panaméennes et leurs merveilles.
            </p>
            <Link
              href="/blog/ameriques/panama"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer le Panama
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
