'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PougliesPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Pouilles</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Le talon de la botte italienne, entre trulli et plages sauvages.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir les Pouilles</h2>
              <p className="text-gray-700 mb-6">
                Les Pouilles (Puglia en italien), région du sud de l'Italie formant le talon de la botte, séduisent par
                leur authenticité préservée loin du tourisme de masse du nord du pays. Entre les trulli coniques
                d'Alberobello classés UNESCO, les villages blancs perchés comme Ostuni la Città Bianca, les plages de
                rêve du Salento aux eaux cristallines, et Lecce la Florence baroque du sud, les Pouilles offrent une
                Italie traditionnelle, chaleureuse et ensoleillée. Cette région agricole réputée pour son huile d'olive,
                ses burrata crémeuses et ses orecchiette faites main incarne la dolce vita méditerranéenne authentique.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Alberobello</strong> - Village aux 1500 trulli coniques classé UNESCO</li>
                <li><strong>Polignano a Mare</strong> - Village perché sur falaises au-dessus de la mer</li>
                <li><strong>Lecce</strong> - Florence baroque du sud, architecture extraordinaire</li>
                <li><strong>Ostuni</strong> - Ville blanche éclatante sur colline dominant oliviers</li>
                <li><strong>Plages du Salento</strong> - Eaux turquoise adriatiques et ioniques</li>
                <li><strong>Castel del Monte</strong> - Château octogonal mystérieux de Frédéric II</li>
                <li><strong>Grottesde Castellana</strong> - Complexe souterrain spectaculaire</li>
                <li><strong>Matera</strong> - Sassi troglodytiques (en Basilicate voisine)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Zones et territoires</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Valle d'Itria</strong> - Vallée des trulli, Alberobello, Locorotondo, Cisternino</li>
                <li><strong>Salento</strong> - Péninsule sud, Lecce, Otranto, Gallipoli, plages paradisiaques</li>
                <li><strong>Gargano</strong> - Promontoire nord, falaises, forêts, îles Tremiti</li>
                <li><strong>Murge</strong> - Plateaumcalcaire, Castel del Monte, paysages lunaires</li>
                <li><strong>Côte Adriatique</strong> - De Bari à Otranto, falaises et criques</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Dormir dans un trullo traditionnel restauré à Alberobello</li>
                <li>Admirer le coucher de soleil depuis Polignano a Mare</li>
                <li>Déguster des orecchiette fraîches dans une masseria</li>
                <li>Se baigner dans les plages de Torre dell'Orso ou Punta Prosciutto</li>
                <li>Flâner dans le centre baroque de Lecce au coucher du soleil</li>
                <li>Visiter une huilerie traditionnelle et goûter l'huile d'olive locale</li>
                <li>Danser la pizzica, danse traditionnelle salentine</li>
                <li>Explorer les villages blancs de la Valle d'Itria en vélo</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre-octobre (juillet-août très chaud et fréquenté)<br />
                <strong>Langue :</strong> Italien (peu d'anglais hors zones touristiques)<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Transport :</strong> Voiture de location indispensable pour explorer<br />
                <strong>Durée conseillée :</strong> 5-10 jours minimum<br />
                <strong>Aéroports :</strong> Bari (nord) ou Brindisi (sud)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🚗 Louez une voiture, transports publics très limités<br />
                🏖️ Réservez plages et restaurants en août, très fréquenté<br />
                🌡️ Juillet-août extrêmement chaud (35-40°C), préférez mai-juin<br />
                🏠 Dormez dans un trullo ou une masseria pour l'expérience authentique<br />
                🍝 Goûtez les orecchiette, focaccia barese, burrata, bombette<br />
                💰 Prix très abordables comparé au nord de l'Italie<br />
                📚 Lecce mérite 2 jours minimum, c'est un joyau baroque<br />
                🌊 Les plages du Salento sont parmi les plus belles d'Italie
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Orecchiette alle Cime di Rapa</strong> - Pâtes oreilles aux feuilles de navet</li>
                <li><strong>Burrata</strong> - Mozzarella crémeuse originaire d'Andria</li>
                <li><strong>Focaccia Barese</strong> - Focaccia aux tomates cerises et olives</li>
                <li><strong>Bombette</strong> - Roulades de viande farcies, spécialité de la Valle d'Itria</li>
                <li><strong>Panzerotti</strong> - Chaussons frits farcis mozzarella-tomate</li>
                <li><strong>Polpo alla Pignata</strong> - Poulpe cuit en pot de terre</li>
                <li><strong>Pasticciotto</strong> - Pâtisserie feuilletée à la crème, spécialité de Lecce</li>
                <li><strong>Primitivo di Manduria</strong> - Vin rouge puissant du Salento</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sites Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Sites explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Alberobello */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1567880905822-56f8e06fe630?w=1200&q=80"
                      alt="Alberobello Trulli"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">UNESCO</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Alberobello</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le village aux 1500 trulli coniques</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Alberobello est un village extraordinaire unique au monde, classé au patrimoine UNESCO pour ses 1500 trulli,
                        ces maisons traditionnelles en pierre sèche coiffées d'un toit conique. Construits sans mortier selon une
                        technique ancestrale, les trulli créent un paysage urbain de conte de fées, avec leurs toits gris en forme
                        de cônes ornés de symboles blancs mystiques peints à la chaux. Le quartier Rione Monti concentre la plus
                        forte densité de trulli, formant un labyrinthe de ruelles pavées où chaque maison semble sortir d'un livre
                        d'histoires.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Aujourd'hui, certains trulli sont transformés en boutiques artisanales vendant produits locaux et souvenirs,
                        d'autres en restaurants servant cuisine traditionnelle pugliese, et d'autres encore en hébergements
                        touristiques permettant l'expérience unique de dormir sous un toit conique. Le Trullo Sovrano, seul trullo
                        à deux étages, se visite comme musée. Malgré l'afflux touristique en journée, Alberobello conserve son
                        charme magique au lever et au coucher du soleil, quand les ruelles se vident et que la lumière dorée
                        caresse les pierres blanches.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Architecture</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Unique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Lecce */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1555992336-fb0d29498b13?w=1200&q=80"
                      alt="Lecce"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Baroque</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Lecce</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">La Florence baroque du sud</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Lecce, capitale du Salento, est un joyau baroque extraordinaire surnommé la "Florence du sud" pour sa
                        concentration exceptionnelle de palais et d'églises richement ornés. Construite en pietra leccese, pierre
                        calcaire blonde locale facile à sculpter, la ville est un musée à ciel ouvert d'architecture baroque
                        flamboyante des XVIIe et XVIIIe siècles. Chaque façade d'église déborde de putti, guirlandes, saints et
                        animaux fantastiques sculptés avec une exubérance typiquement méridionale. La Basilique Santa Croce, chef-
                        d'œuvre absolu du baroque lecchese, fascine par son incroyable profusion décorative.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le centre historique piétonnier invite à la flânerie dans ses ruelles pavées bordées de palais ocre, de
                        boutiques artisanales perpétuant la tradition locale de la papier-mâché, et de cafés où déguster un
                        pasticciotto, pâtisserie emblématique de Lecce. La Piazza Sant'Oronzo, avec son amphithéâtre romain et
                        sa colonne baroque, illustre les 2000 ans d'histoire de la ville. Au coucher du soleil, la pietra leccese
                        prend des teintes miel dorées magiques, et les églises illuminées créent un spectacle féérique. Lecce est
                        une révélation qui mérite plusieurs jours d'exploration.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Art</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Polignano a Mare */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1601645037516-c8f0e0e8c7f6?w=1200&q=80"
                      alt="Polignano a Mare"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Mer</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Polignano a Mare</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Village spectaculaire perché sur les falaises</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Polignano a Mare est l'un des villages les plus photogéniques d'Italie, spectaculairement perché sur des
                        falaises calcaires blanches plongeant dans une mer Adriatique d'un bleu profond éblouissant. Le centre
                        historique, construit sur un promontoire rocheux, enchante par ses maisons blanches aux balcons fleuris
                        surplombant le vide, ses ruelles étroites pavées, et ses arches naturelles creusées par l'érosion dans
                        la roche. La Lama Monachile, petite plage de galets nichée entre deux falaises accessibles par un escalier
                        raide, offre un cadre de baignade unique sous le regard des maisons perchées.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le village est particulièrement magique au coucher du soleil, quand les derniers rayons embrasent les
                        falaises blanches et que les restaurants s'illuminent. Les terrasses panoramiques surplombant la mer
                        sont parfaites pour un aperitivo romantique. Polignano est aussi la ville natale de Domenico Modugno,
                        chanteur de "Volare", dont une statue orne le front de mer. Chaque été, les Red Bull Cliff Diving World
                        Series utilisent les falaises pour leurs compétitions spectaculaires de plongeon. Ville de Carnaval vénitien,
                        ice-cream et romantisme, Polignano incarne la beauté méditerranéenne dans toute sa splendeur.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Panoramas</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Romantique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ostuni */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80"
                      alt="Ostuni"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Village</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Ostuni</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">La Città Bianca éclatante sur sa colline</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Ostuni, surnommée la Città Bianca (Ville Blanche), est un village spectaculaire couronné d'un écrin de
                        maisons blanchies à la chaux qui scintillent au soleil, perché sur trois collines dominant un océan
                        d'oliviers centenaires s'étendant jusqu'à la mer Adriatique visible au loin. Cette tradition de peindre
                        les maisons à la chaux remonte au Moyen Âge pour lutter contre la peste, et donne aujourd'hui à Ostuni
                        son caractère unique et photogénique. Le centre historique labyrinthique invite à se perdre dans ses
                        ruelles étroites montant en escaliers, ses passages voûtés, ses places cachées et ses patios fleuris.
                      </p>
                      <p className="text-gray-700 mb-4">
                        La Cathédrale gothique couronne le sommet de la vieille ville, sa façade baroque contrastant avec
                        l'austérité gothique de l'intérieur. Des terrasses panoramiques offrent des vues imprenables sur la
                        campagne environnante jusqu'à la mer, particulièrement au coucher du soleil quand tout prend des teintes
                        dorées et roses. Ostuni a su préserver son authenticité tout en développant une scène gastronomique
                        excellente : restaurants raffinés proposent cuisine pugliese créative à base de produits locaux, et les
                        masserie environnantes produisent parmi les meilleures huiles d'olive d'Italie. C'est une base parfaite
                        pour explorer la Valle d'Itria et les plages proches.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Gastronomie</span>
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
              Retour en Italie
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations italiennes et leurs merveilles.
            </p>
            <Link
              href="/blog/europe/italie"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer l'Italie
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
