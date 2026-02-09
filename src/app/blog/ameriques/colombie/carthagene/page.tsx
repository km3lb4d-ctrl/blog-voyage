'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CarthagenePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Carthagène</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Perle coloniale des Caraïbes, où histoire romantique et charme tropical se rencontrent.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Carthagène</h2>
              <p className="text-gray-700 mb-6">
                Carthagène des Indes (Cartagena de Indias) est la ville coloniale la plus romantique et photogénique
                de Colombie, véritable joyau architectural de la côte caraïbe. Fondée en 1533, cette cité fortifiée
                classée au patrimoine mondial de l'UNESCO enchante par ses ruelles pavées bordées de maisons coloniales
                aux façades pastel, ses balcons en bois débordant de bougainvilliers, ses églises baroques dorées et
                ses places ombragées où résonne la musique tropicale. Entre les imposants remparts qui protégeaient
                autrefois les trésors des conquistadors, le quartier bohème de Getsemaní vibrant de street art et
                de salsa, et les plages paradisiaques des îles voisines, Carthagène offre un mélange enivrant d'histoire,
                de culture afro-caribéenne et de douceur tropicale.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Vieille Ville Fortifiée (Ciudad Amurallada)</strong> - Labyrinthe colonial de ruelles colorées</li>
                <li><strong>Castillo de San Felipe de Barajas</strong> - Plus grande forteresse espagnole d'Amérique</li>
                <li><strong>Getsemaní</strong> - Quartier bohème avec street art vibrant et vie nocturne</li>
                <li><strong>Plaza de la Trinidad</strong> - Cœur festif de Getsemaní, ambiance locale</li>
                <li><strong>Las Murallas (Remparts)</strong> - Promenade au coucher du soleil, vues sur la mer</li>
                <li><strong>Café del Mar</strong> - Bar sur les remparts, couchers de soleil légendaires</li>
                <li><strong>Îles Rosario (Islas del Rosario)</strong> - Archipel paradisiaque, snorkeling</li>
                <li><strong>Playa Blanca</strong> - Plage de sable blanc (excursion d'une journée)</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Quartiers à explorer</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Centro Histórico</strong> - Vieille ville fortifiée, hôtels de charme et restaurants</li>
                <li><strong>Getsemaní</strong> - Quartier populaire transformé, hostels et vie nocturne</li>
                <li><strong>Bocagrande</strong> - Zone hôtelière moderne avec plages et gratte-ciels</li>
                <li><strong>Manga</strong> - Quartier résidentiel tranquille avec architecture républicaine</li>
                <li><strong>La Boquilla</strong> - Village de pêcheurs authentique au nord</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Regarder le coucher de soleil depuis le Café del Mar sur les remparts</li>
                <li>Se perdre dans les ruelles colorées de la vieille ville au petit matin</li>
                <li>Prendre un cours de salsa dans une école locale de Getsemaní</li>
                <li>Visiter le Castillo de San Felipe au lever du soleil (éviter la chaleur)</li>
                <li>Faire une excursion aux îles Rosario pour le snorkeling</li>
                <li>Déguster des arepas de huevo au marché de Bazurto</li>
                <li>Danser jusqu'au bout de la nuit à la Plaza de la Trinidad</li>
                <li>Faire un tour en chiva (bus coloré) à travers la ville</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-mars (saison sèche, mais très touristique et cher) - Avril-novembre plus calme<br />
                <strong>Langue :</strong> Espagnol (anglais dans zones touristiques)<br />
                <strong>Monnaie :</strong> Peso colombien (COP) - 1€ = ~4500 COP<br />
                <strong>Climat :</strong> Chaud et humide toute l'année (28-32°C), brèves averses en saison humide<br />
                <strong>Transport :</strong> Marche à pied (vieille ville), taxis, Uber (peu disponible)<br />
                <strong>Durée conseillée :</strong> 3-4 jours minimum
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🏨 Loger à Getsemaní pour l'authenticité et les prix, ou vieille ville pour le charme<br />
                🌅 Réserver une place au Café del Mar 2h avant le coucher de soleil (très prisé)<br />
                🏰 Visiter le Castillo tôt le matin pour éviter la chaleur écrasante<br />
                💃 Les cours de salsa sont abordables (10-15€) et très fun à Getsemaní<br />
                🏝️ Éviter les tours îles Rosario à 20€ (bondés), préférer tours privés<br />
                🍹 Goûter la limonada de coco (limonade à l'eau de coco) vendue dans la rue<br />
                🎨 Le street art de Getsemaní est meilleur tôt le matin pour les photos<br />
                ⚠️ Attention aux arnaques touristiques (faux guides, prix gonflés pour photos)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Arepa de huevo</strong> - Arepa frite fourrée d'un œuf, spécialité locale</li>
                <li><strong>Ceviche</strong> - Poisson mariné au citron vert, version colombienne</li>
                <li><strong>Posta Negra cartagenera</strong> - Bœuf mijoté dans une sauce sucrée-salée</li>
                <li><strong>Arroz con coco</strong> - Riz cuit à l'eau de coco, accompagnement typique</li>
                <li><strong>Patacones</strong> - Bananes plantains frites et écrasées</li>
                <li><strong>Carimañola</strong> - Beignet de yuca fourré à la viande</li>
                <li><strong>Cocada</strong> - Bonbon à la noix de coco vendu par les palenqueras</li>
                <li><strong>Limonada de coco</strong> - Citron pressé avec eau de coco, désaltérant</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Ciudad Amurallada */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1568632234200-494819456c1e?w=1200&q=80"
                      alt="Ciudad Amurallada, Carthagène"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">UNESCO</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Ciudad Amurallada</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le cœur colonial fortifié</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        La Ciudad Amurallada (Ville Fortifiée) est le cœur historique et romantique de Carthagène, un
                        labyrinthe enchanteur de ruelles pavées où chaque coin de rue révèle une scène digne d'une carte
                        postale. Les façades coloniales aux couleurs pastel (jaune moutarde, rose corail, bleu azur)
                        sont ornées de balcons en bois sculpté débordant de bougainvilliers fuchsia, tandis que les
                        portes monumentales des palais coloniaux laissent entrevoir des patios secrets aux fontaines
                        murmurant.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Protégée par 11 kilomètres de murailles épaisses qui repoussèrent pirates et envahisseurs pendant
                        trois siècles, la vieille ville abrite églises baroques aux retables dorés, places ombragées où
                        se produisent musiciens de vallenato, boutiques d'artisanat et restaurants gastronomiques installés
                        dans d'anciennes demeures aristocratiques. Le soir, l'éclairage doux transforme les rues en un
                        décor féerique où résonnent rires et musique tropicale, créant une ambiance magique inoubliable.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Colonial</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Romantique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Getsemaní */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1589900661815-3fef2598a6c3?w=1200&q=80"
                      alt="Getsemaní, Carthagène"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Street Art</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Getsemaní</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le quartier bohème et authentique</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Getsemaní, autrefois quartier populaire délaissé, est devenu en quelques années l'épicentre de
                        la culture alternative et de la vie nocturne de Carthagène. Séparé de la vieille ville par une
                        simple rue, ce barrio vibrant a conservé son âme authentique tout en accueillant hostels branchés,
                        bars à cocktails créatifs, restaurants fusion et galeries d'art. Les façades délavées des maisons
                        basses se parent désormais de fresques murales géantes et colorées qui font de Getsemaní un musée
                        de street art à ciel ouvert.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le cœur du quartier bat à la Plaza de la Trinidad, où chaque soir, locaux et voyageurs se
                        retrouvent assis sur les marches, bière ou rhum à la main, dans une ambiance festive et
                        cosmopolite. Des vendeurs ambulants proposent cigarettes, snacks et fruits coupés, tandis que
                        des groupes de salsa improvisent des concerts. C'est ici que se vit la vraie Carthagène, loin
                        du luxe policé de la vieille ville, dans une atmosphère chaleureuse et décontractée où l'on se
                        fait des amis en une soirée.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vie nocturne</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Castillo de San Felipe */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1587036850811-3b8e8c0b9e3d?w=1200&q=80"
                      alt="Castillo de San Felipe"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Histoire</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Castillo de San Felipe</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La forteresse imprenable</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Castillo de San Felipe de Barajas est la plus grande et la plus imposante forteresse jamais
                        construite par les Espagnols en Amérique, un chef-d'œuvre d'ingénierie militaire qui domine
                        Carthagène du haut de la colline San Lázaro. Construit entre 1536 et 1657, puis agrandi au XVIIIe
                        siècle, ce mastodonte de pierre ocre n'a jamais été pris malgré les nombreux sièges de pirates
                        anglais et français attirés par les richesses qui transitaient par le port.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        La visite du château révèle un dédale de tunnels souterrains acoustiquement conçus pour permettre
                        aux défenseurs de communiquer, des batteries de canons pointés vers la mer, et des rampes
                        stratégiques offrant des vues panoramiques sur la ville moderne et la mer des Caraïbes. L'architecture
                        massive et les murs épais témoignent de l'importance stratégique de Carthagène comme principal
                        port d'exportation de l'or vers l'Espagne. Par temps clair, la brise marine rafraîchit la visite,
                        mais il est conseillé de venir tôt le matin pour éviter la chaleur écrasante de midi.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Forteresse</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Panorama</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Îles Rosario */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Îles Rosario"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plage</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Îles Rosario</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Archipel paradisiaque des Caraïbes</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Les Îles Rosario (Islas del Rosario) forment un archipel paradisiaque de 27 îlots coralliens
                        situés à une heure de bateau de Carthagène, dans un parc national protégé aux eaux cristallines.
                        Ces petites îles tropicales incarnent le fantasme caribéen absolu : plages de sable blanc poudreux,
                        cocotiers penchés au-dessus de l'eau turquoise, et récifs coralliens abritant poissons multicolores,
                        raies et parfois même tortues marines. Le contraste avec l'effervescence urbaine de Carthagène
                        est saisissant.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        La plupart des visiteurs optent pour une excursion d'une journée qui combine navigation en lancha
                        rapide, snorkeling dans les eaux limpides, déjeuner de fruits de mer les pieds dans le sable, et
                        farniente sur une plage privée. Certaines îles abritent des éco-resorts de luxe pour ceux qui
                        souhaitent prolonger l'expérience. L'eau y est d'un bleu irréel, passant du turquoise pâle au
                        bleu profond, et la vie marine est particulièrement riche grâce au statut de parc national. Un
                        incontournable pour compléter un séjour à Carthagène par une touche de pur paradis tropical.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Snorkeling</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
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
              Retour en Colombie
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations colombiennes et leurs merveilles.
            </p>
            <Link
              href="/blog/ameriques/colombie"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer la Colombie
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
