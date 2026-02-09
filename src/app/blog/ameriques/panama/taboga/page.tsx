'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function TabogaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Taboga</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            L'Île aux Fleurs, évasion tropicale à 30 minutes de ferry depuis Panama City, entre plages dorées et village coloré.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Taboga</h2>
              <p className="text-gray-700 mb-6">
                Taboga, affectueusement surnommée "l'Île aux Fleurs" pour ses jardins luxuriants couverts
                d'hibiscus, bougainvilliers et orchidées sauvages, est une petite île paradisiaque située à
                seulement 20 kilomètres au large de Panama City dans le golfe de Panama. Accessible en ferry
                rapide en 30 minutes depuis l'embarcadère d'Amador, cette île volcanique de 2,5 km² offre
                une échappée tropicale parfaite loin de l'agitation urbaine de la capitale : plages de sable
                doré baignées par des eaux calmes du Pacifique, charmant village de pêcheurs aux maisons
                coloniales colorées, sentiers de randonnée grimpant jusqu'aux miradors panoramiques, et
                atmosphère paisible où les voitures sont interdites. Refuge historique des conquistadors,
                pirates, et plus tard retraite favorite de l'artiste français Paul Gauguin, Taboga incarne
                l'authenticité insulaire panaméenne préservée du développement touristique de masse.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Playa Restinga</strong> - Plage principale avec sable doré et eaux calmes, parfaite pour familles</li>
                <li><strong>Village de Taboga</strong> - Maisons colorées et église San Pedro (1550), seconde plus ancienne du continent</li>
                <li><strong>Cerro Vigía</strong> - Randonnée au point culminant (307m) pour vue panoramique 360° époustouflante</li>
                <li><strong>Playa Honda</strong> - Plage plus isolée et tranquille, accessible uniquement à marée basse</li>
                <li><strong>Observation des baleines</strong> - Juillet-octobre, baleines à bosse passent au large de l'île</li>
                <li><strong>Sanctuaire de pélicans bruns</strong> - Colonie protégée visible depuis le village</li>
                <li><strong>Chemin des Fleurs</strong> - Sentier côtier bordé de fleurs tropicales et vues sur Panama City</li>
                <li><strong>Plongée et snorkeling</strong> - Eaux claires avec poissons tropicaux et coraux</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Zones de l'île</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Village central</strong> - Cœur historique avec église coloniale, restaurants et boutiques</li>
                <li><strong>Playa Restinga</strong> - Zone de plage principale avec restaurants de fruits de mer</li>
                <li><strong>Cerro de la Cruz</strong> - Colline avec croix blanche dominant le village</li>
                <li><strong>Côte nord</strong> - Falaises rocheuses avec sentiers sauvages et vues spectaculaires</li>
                <li><strong>Morro Taboga</strong> - Îlot rocheux visible depuis la plage, spot photo iconique</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Se baigner dans les eaux calmes de Playa Restinga au lever du soleil</li>
                <li>Escalader Cerro Vigía pour admirer Panama City au loin et l'océan à 360°</li>
                <li>Déguster un ceviche ultra frais dans un restaurant de plage les pieds dans le sable</li>
                <li>Explorer le village coloré et photographier l'église historique San Pedro</li>
                <li>Observer les pélicans bruns plonger pour capturer des poissons</li>
                <li>Faire du snorkeling dans les eaux cristallines autour des rochers</li>
                <li>Profiter du coucher de soleil spectaculaire sur le Pacifique</li>
                <li>Chercher les baleines à bosse de juillet à octobre depuis les hauteurs</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-avril (saison sèche), juillet-octobre pour baleines<br />
                <strong>Langue :</strong> Espagnol<br />
                <strong>Monnaie :</strong> Dollar américain USD (balboa)<br />
                <strong>Transport :</strong> Ferry depuis embarcadère Amador/Balboa (30 min, 3-4 départs/jour)<br />
                <strong>Visa :</strong> Passeport valide suffisant<br />
                <strong>Durée conseillée :</strong> Excursion journée (ou nuit sur place pour lever de soleil tranquille)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                ⛴️ Ferry part tôt le matin (8h-9h), arrivez 30 min avant pour acheter billets<br />
                🎒 Apportez eau, snacks, crème solaire - restaurants limités et chers sur l'île<br />
                👟 Chaussures de randonnée recommandées pour Cerro Vigía (sentier raide et rocheux)<br />
                🏖️ Playa Restinga bondée le week-end, privilégiez en semaine pour tranquillité<br />
                💰 Pas de distributeurs sur l'île, prévoyez cash suffisant<br />
                📱 Signal téléphonique faible, profitez de la déconnexion digitale<br />
                🕐 Dernier ferry retour vers 16h-17h, vérifiez horaires à l'avance<br />
                🐋 Juillet-octobre pour baleines, louez jumelles ou tour d'observation
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ceviche de Corvina</strong> - Poisson blanc ultra frais pêché le matin même</li>
                <li><strong>Pescado Frito</strong> - Poisson entier frit avec patacones et salade</li>
                <li><strong>Langosta</strong> - Langouste grillée, luxe accessible sur l'île</li>
                <li><strong>Pulpo al Ajillo</strong> - Poulpe à l'ail, tendre et savoureux</li>
                <li><strong>Patacones</strong> - Bananes plantain frites écrasées, accompagnement typique</li>
                <li><strong>Arroz con Coco</strong> - Riz au lait de coco, influence caribéenne</li>
                <li><strong>Piña Colada</strong> - Cocktail à la noix de coco fraîche face à la mer</li>
                <li><strong>Raspado</strong> - Glace pilée aux sirops tropicaux, rafraîchissant après la plage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Playa Restinga */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Playa Restinga Taboga"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plage</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Playa Restinga</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La plage principale de sable doré</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Playa Restinga est la plage principale et la plus accessible de l'île de Taboga, s'étirant
                        sur environ 500 mètres de sable doré fin face à l'océan Pacifique. Contrairement aux plages
                        de sable blanc caribéen, le sable volcanique de Taboga prend des teintes dorées et parfois
                        légèrement grises, témoignage de l'origine volcanique de l'île. Les eaux calmes protégées
                        par la baie sont parfaites pour la baignade familiale, maintenues à une température agréable
                        de 26-28°C toute l'année. Le long de la plage, des palapas en palme offrent ombre bienvenue,
                        et plusieurs restaurants de fruits de mer proposent tables et chaises directement sur le sable.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        L'arrière-plan spectaculaire de Playa Restinga ajoute à son charme : d'un côté les collines
                        verdoyantes couvertes de végétation tropicale, de l'autre la vue lointaine sur la skyline
                        futuriste de Panama City émergeant de la brume à l'horizon. Le célèbre rocher Morro Taboga,
                        îlot rocheux pointu visible depuis la plage, est devenu l'image iconique de l'île, photographié
                        à toute heure du jour. Tôt le matin avant l'arrivée du ferry principal (10h), la plage est
                        presque déserte et offre une tranquillité paradisiaque. Le week-end, l'ambiance devient plus
                        festive avec familles panaméennes pique-niquant, musique latino s'échappant des restaurants,
                        et enfants jouant dans les vagues douces.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Baignade</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Familiale</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Village de Taboga */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80"
                      alt="Village Taboga"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Historique</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Village de Taboga</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Charme colonial et authenticité insulaire</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le village de Taboga, seule agglomération de l'île abritant environ 1 500 habitants, déploie
                        son charme colonial authentique le long de ruelles étroites grimpant depuis l'embarcadère du
                        ferry jusqu'aux collines verdoyantes. Les maisons traditionnelles aux façades colorées (jaune,
                        rose, bleu turquoise, vert) rappellent l'architecture coloniale espagnole avec leurs toits de
                        tuiles rouges, balcons en bois et fenêtres à barreaux. Aucune voiture ne circule dans le village
                        (interdites sur l'île), créant une atmosphère paisible où résonnent seulement chants d'oiseaux,
                        conversations des habitants sur le pas de leur porte, et cloches de l'église historique.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        L'église San Pedro, fondée en 1550, est l'un des plus anciens édifices religieux du continent
                        américain et le cœur spirituel de l'île. Sa façade blanche simple contraste avec son intérieur
                        orné de statues coloniales et autels dorés. La place centrale ombragée par des frangipaniers
                        centenaires sert de lieu de rassemblement pour les habitants. En déambulant dans les ruelles,
                        on découvre boutiques artisanales vendant hamacs tissés main, bijoux en coquillages et peintures
                        locales. L'atmosphère du village est authentiquement panaméenne : pêcheurs réparant leurs filets,
                        femmes vendant empanadas maison, enfants jouant au football sur la petite place. Taboga a su
                        préserver son âme d'île de pêcheurs loin du tourisme de masse.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Colonial</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cerro Vigía */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1200&q=80"
                      alt="Cerro Vigía Taboga"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Randonnée</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Cerro Vigía</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le point culminant avec vue panoramique 360°</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Cerro Vigía, culminant à 307 mètres d'altitude, est le point le plus élevé de l'île de Taboga
                        et offre sans conteste la vue panoramique la plus spectaculaire. La randonnée jusqu'au sommet
                        démarre depuis le village et grimpe à travers une forêt tropicale dense pendant environ 45 minutes
                        à 1 heure. Le sentier, parfois raide et rocheux, serpente entre flamboyants, hibiscus géants et
                        manguiers sauvages, offrant ombre bienvenue dans la chaleur tropicale. En chemin, on croise
                        fréquemment iguanes se prélassant sur les branches, papillons multicolores, et agoutis (petits
                        rongeurs terrestres) détalant dans les sous-bois.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Arrivé au sommet, la récompense est époustouflante : vue panoramique à 360 degrés embrassant
                        l'ensemble de l'île de Taboga, le village coloré miniaturisé en contrebas, l'océan Pacifique
                        s'étendant à l'infini parsemé de navires attendant pour franchir le Canal de Panama, et au
                        loin la silhouette impressionnante de la skyline de Panama City émergeant de la brume. Par
                        temps clair, on distingue même le Pont des Amériques enjambant l'entrée du Canal. Le sommet
                        est équipé d'une plateforme d'observation et de bancs pour contempler tranquillement cette
                        vue majestueuse. Durant la saison des baleines (juillet-octobre), c'est également un excellent
                        point d'observation pour apercevoir les baleines à bosse sautant au large. Prévoyez eau,
                        chapeau et chaussures fermées pour cette randonnée récompensante.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vue panoramique</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Observation des baleines */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                      alt="Baleines Taboga"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Faune marine</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Observation des baleines</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Spectacle majestueux de juillet à octobre</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        De juillet à octobre, l'île de Taboga devient l'un des meilleurs spots d'observation des
                        baleines à bosse (Megaptera novaeangliae) au Panama. Ces géants des océans, mesurant jusqu'à
                        15 mètres de long et pesant 30 tonnes, migrent chaque année depuis les eaux froides de
                        l'Antarctique vers les eaux tropicales chaudes du Pacifique panaméen pour se reproduire et
                        mettre bas. Le golfe de Panama et les eaux autour de Taboga offrent conditions idéales pour
                        l'observation : eaux relativement calmes, profondeur adéquate, et proximité du littoral
                        permettant de voir ces cétacés majestueux depuis la côte ou lors d'excursions en bateau.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Observer une baleine à bosse jaillir hors de l'eau dans un saut spectaculaire (breaching),
                        retombant dans une explosion d'écume blanche, reste un moment inoubliable et émouvant. Les
                        mâles chantent des mélodies complexes pour attirer les femelles, audibles même sous l'eau
                        pour les snorkeleurs chanceux. Les mères avec leurs baleineaux nouveaux-nés nagent paisiblement
                        le long de la côte, enseignant à leurs petits les techniques de survie. Plusieurs opérateurs
                        locaux proposent tours d'observation responsables en bateau depuis Taboga (respectant distances
                        de sécurité), mais on peut aussi apercevoir les baleines depuis Cerro Vigía ou simplement
                        depuis Playa Restinga avec des jumelles. Le pic d'activité se situe en août-septembre.
                        Assister à ce spectacle naturel magistral ajoute une dimension exceptionnelle à une visite
                        de Taboga durant ces mois.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Baleines</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Saisonnier</span>
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
