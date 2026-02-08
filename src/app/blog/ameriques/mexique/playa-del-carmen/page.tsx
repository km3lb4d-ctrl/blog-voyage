'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PlayaDelCarmenPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Playa del Carmen</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Station balnéaire branchée au cœur de la Riviera Maya, où plages caribéennes et vie cosmopolite fusionnent.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Playa del Carmen</h2>
              <p className="text-gray-700 mb-6">
                Playa del Carmen, affectueusement appelée "Playa" par les locaux, est l'ancien village de pêcheurs
                devenu l'épicentre cosmopolite de la Riviera Maya. Située idéalement entre Cancún au nord et Tulum
                au sud, cette station balnéaire branchée pulse au rythme d'une vie internationale où Européens,
                Nord-Américains et Mexicains se mêlent dans les beach clubs tendance, restaurants fusion et bars
                animés de la Quinta Avenida. Avec ses plages de sable blanc bordant des eaux turquoise cristallines,
                son accès privilégié à Cozumel par ferry, sa proximité immédiate avec les plus beaux cenotes du
                Yucatán et son ambiance résolument festive mais plus décontractée que Cancún, Playa del Carmen
                offre le parfait équilibre entre détente caribéenne et animation urbaine.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Quinta Avenida (5e Avenue)</strong> - Artère piétonne de 4 km bordée de boutiques, restaurants et bars</li>
                <li><strong>Playa Mamitas</strong> - Beach club populaire avec DJ sets, transats et ambiance festive</li>
                <li><strong>Cozumel</strong> - Île paradisiaque accessible en ferry (45 min), plongée de classe mondiale</li>
                <li><strong>Cenote Dos Ojos</strong> - Système de cavernes sous-marines spectaculaire (20 min en voiture)</li>
                <li><strong>Gran Cenote</strong> - Cenote cristallin parfait pour snorkeling avec stalactites et tortues</li>
                <li><strong>Xcaret</strong> - Parc éco-archéologique avec rivières souterraines et spectacles culturels</li>
                <li><strong>Playa 38</strong> - Plage plus tranquille au nord, loin de l'agitation du centre</li>
                <li><strong>Tulum Ruinas</strong> - Site maya en bord de mer à 45 minutes au sud</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Zones et quartiers</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Quinta Avenida</strong> - Cœur touristique avec shopping, restaurants et vie nocturne</li>
                <li><strong>Playa Mamitas/Fusión</strong> - Zone de beach clubs branchés et bars de plage</li>
                <li><strong>Playacar</strong> - Quartier résidentiel calme au sud avec resorts et golf</li>
                <li><strong>Calle 12</strong> - Rue tendance avec bars à cocktails et restaurants fusion</li>
                <li><strong>Colosio (zona local)</strong> - Quartier authentique en retrait avec prix locaux</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Flâner sur la Quinta Avenida au coucher du soleil avec ses artistes de rue</li>
                <li>Plonger dans les cenotes Dos Ojos ou Gran Cenote</li>
                <li>Prendre le ferry pour une journée de snorkeling à Cozumel</li>
                <li>Danser pieds dans le sable dans un beach club de Mamitas</li>
                <li>Explorer les ruines mayas de Tulum en bord de mer</li>
                <li>Déguster un taco al pastor dans un stand de rue local</li>
                <li>Observer tortues marines et raies lors d'une excursion snorkeling</li>
                <li>Vivre un temazcal (rituel de purification maya dans une cabane de sudation)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (saison sèche, éviter ouragans juin-novembre)<br />
                <strong>Langue :</strong> Espagnol (anglais très répandu, beaucoup d'expats internationaux)<br />
                <strong>Monnaie :</strong> Peso mexicain (MXN), USD acceptés mais taux défavorable<br />
                <strong>Transport :</strong> Colectivos (vans partagés) économiques, bus ADO, vélos, location voiture<br />
                <strong>Visa :</strong> Passeport valide suffisant (jusqu'à 180 jours)<br />
                <strong>Durée conseillée :</strong> 4-7 jours (base idéale pour explorer Riviera Maya)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                💰 Payez toujours en pesos pour meilleurs taux, évitez USD<br />
                🚐 Colectivos sur Av. Juárez sont moyen le moins cher (30-50 pesos vers Tulum/Cancún)<br />
                🏖️ Plages publiques accessibles tous les 100m le long de la côte<br />
                🍴 Restaurants sur Calle 30/40 et zone Colosio offrent authenticité et prix locaux<br />
                🎫 Réservez excursions (cenotes, Cozumel) en ligne pour meilleurs prix qu'en agence<br />
                🌊 Ferry Cozumel part toutes les heures depuis embarcadère sur Quinta Avenida<br />
                🌙 Vie nocturne concentrée sur Calle 12 et beach clubs de Mamitas/Fusión<br />
                🚴 Vélo est parfait pour explorer, Playa est plate et se prête bien au cyclisme
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Tacos al Pastor</strong> - Porc mariné grillé vertical avec ananas, incontournable mexicain</li>
                <li><strong>Cochinita Pibil</strong> - Porc mariné achiote cuit lentement dans feuille de bananier</li>
                <li><strong>Ceviche fresco</strong> - Poisson cru mariné citron vert, piments et coriandre</li>
                <li><strong>Tikin Xic</strong> - Poisson grillé mariné achiote, recette maya authentique</li>
                <li><strong>Elote</strong> - Épi de maïs grillé avec mayo, fromage cotija et piment</li>
                <li><strong>Marquesitas</strong> - Crêpe roulée croustillante fourrée Nutella ou cajeta (caramel)</li>
                <li><strong>Michelada</strong> - Bière avec citron, sel, piment et épices, ultra rafraîchissante</li>
                <li><strong>Agua de Jamaica</strong> - Boisson à l'hibiscus sucrée et désaltérante</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Quinta Avenida */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1602002418082-a4443e081dd1?w=1200&q=80"
                      alt="Quinta Avenida Playa del Carmen"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Shopping</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Quinta Avenida</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">L'artère vibrante de Playa</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        La Quinta Avenida (5e Avenue) est le cœur battant de Playa del Carmen, une artère piétonne
                        de 4 kilomètres qui s'étend parallèlement à la plage depuis l'embarcadère de Cozumel jusqu'au
                        nord de la ville. Jour et nuit, cette avenue cosmopolite vibre au son des musiciens de rue,
                        des vendeurs d'artisanat et du flux constant de touristes du monde entier. Boutiques de luxe
                        côtoient magasins de souvenirs colorés, restaurants fusion rivalisent avec taquerías authentiques,
                        et bars à cocktails branchés se succèdent sur plusieurs pâtés de maisons.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le soir, la Quinta Avenida se transforme en véritable festival de lumières et de sons : terrasses
                        bondées où s'échappent rythmes de salsa et reggaeton, artistes de rue jonglant avec le feu,
                        couples déambulant main dans la main entre les palmiers illuminés. C'est sur cette avenue que
                        bat le pouls international de Playa, où expatriés européens croisent vacanciers américains et
                        familles mexicaines venues passer le week-end. Impossible de séjourner à Playa sans flâner au
                        moins une fois sur cette artère emblématique, véritable spectacle à ciel ouvert.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Animation</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Restaurants</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Playa Mamitas */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Playa Mamitas"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Beach Club</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Playa Mamitas</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le temple des beach clubs branchés</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Playa Mamitas est l'épicentre de la vie de plage branchée à Playa del Carmen. Cette section
                        de sable blanc d'environ 500 mètres concentre les beach clubs les plus populaires et festifs
                        de la Riviera Maya. Mamitas Beach Club, le plus célèbre, offre une expérience complète :
                        rangées de transats blancs avec service à la chaise longue, DJ mixant des beats chill house
                        en journée, piscine à débordement face à la mer, et transformation progressive en soirée
                        dansante où les pieds s'enfoncent dans le sable au rythme des basses.
                      </p>
                      <p className="text-gray-700 mb-4">
                        L'ambiance à Mamitas est résolument internationale et festive : groupes d'amis sirotant des
                        micheladas glacées, couples profitant du soleil caribéen, et jeunes voyageurs socialisant
                        entre deux baignades dans les eaux turquoise. Les clubs voisins comme Fusión et Coralina
                        offrent des atmosphères similaires, créant une zone de fête continue où la frontière entre
                        plage, bar et discothèque s'estompe. Le dimanche après-midi, Mamitas accueille des pool
                        parties légendaires avec DJ internationaux, attirant la jeunesse branchée de toute la
                        Riviera Maya dans une explosion de musique, cocktails et ambiance caribéenne.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Fête</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">DJ</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cenote Dos Ojos */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                      alt="Cenote Dos Ojos"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Cenote Dos Ojos</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Cathédrale sous-marine du Yucatán</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Cenote Dos Ojos (Deux Yeux), situé à seulement 20 minutes au nord de Playa del Carmen, est
                        l'un des systèmes de grottes sous-marines les plus spectaculaires et accessibles du Yucatán.
                        Son nom provient des deux cavernes circulaires ("yeux") visibles depuis la surface, connectées
                        par un réseau de tunnels submergés s'étendant sur plus de 82 kilomètres. Pour les snorkeleurs,
                        les deux cenotes ouverts offrent une expérience magique : eau d'une clarté incroyable (visibilité
                        jusqu'à 100 mètres), température constante à 25°C, et jeux de lumière extraordinaires créés
                        par les rayons du soleil perçant les ouvertures naturelles.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Plonger dans Dos Ojos, c'est pénétrer dans un monde souterrain mystique où le temps s'est
                        arrêté il y a des millions d'années. Les stalactites et stalagmites millénaires créent des
                        formations rocheuses spectaculaires, tandis que les "haloclines" (zones où eau douce et salée
                        se mêlent) produisent des effets visuels hypnotiques. Pour les plongeurs certifiés, Dos Ojos
                        est un temple de la plongée caverne, considéré comme l'un des meilleurs sites au monde pour
                        explorer le monde souterrain. La jungle environnante ajoute à l'aventure, avec ses singes
                        hurleurs et oiseaux tropicaux accompagnant le trajet jusqu'à ce sanctuaire aquatique.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Snorkeling</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plongée</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cozumel */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1580541832626-2a7131ee809f?w=1200&q=80"
                      alt="Cozumel"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Île</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Cozumel</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Paradis de la plongée à 45 minutes de ferry</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Cozumel, la plus grande île habitée du Mexique, est accessible en ferry rapide depuis Playa
                        del Carmen en seulement 45 minutes de traversée. Cette île paradisiaque de 48 km de long
                        est mondialement célèbre pour ses sites de plongée exceptionnels : le récif Palancar, classé
                        parmi les plus beaux au monde, abrite une biodiversité marine époustouflante avec tortues
                        géantes, raies aigles, requins nourrices et bancs de poissons tropicaux multicolores évoluant
                        dans des jardins de coraux. L'eau d'une clarté cristalline et les courants favorables font
                        de Cozumel un sanctuaire pour plongeurs de tous niveaux.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Mais Cozumel, c'est bien plus que la plongée. San Miguel, le charmant centre-ville principal,
                        propose restaurants de fruits de mer fraîchement pêchés, boutiques artisanales et malecón
                        (promenade) parfait pour observer le coucher de soleil. Les plages de la côte ouest offrent
                        des beach clubs décontractés et eaux turquoise calmes, tandis que la côte est sauvage révèle
                        des paysages dramatiques de falaises battues par les vagues. Pour explorer l'île, rien de tel
                        qu'un scooter ou voiturette de golf qui permet de faire le tour complet, découvrant plages
                        désertes, sites mayas comme San Gervasio, et points de vue spectaculaires. Une excursion
                        d'une journée à Cozumel est incontournable depuis Playa del Carmen.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plongée</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Excursion</span>
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
