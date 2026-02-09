'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PositanoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Positano</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Perle de la côte Amalfitaine, village vertical aux maisons colorées.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Positano</h2>
              <p className="text-gray-700 mb-6">
                Positano, joyau de la côte Amalfitaine, est un tableau vivant où des maisons pastel rose, jaune et
                ocre dévalent en cascade la falaise jusqu'à la mer Tyrrhénienne d'un bleu profond. Ancien village de
                pêcheurs devenu destination glamour dans les années 1960 après le film de John Steinbeck, Positano
                incarne parfaitement la dolce vita méditerranéenne. Ses ruelles escarpées transformées en escaliers
                sinueux, ses boutiques de mode locale, ses restaurants romantiques et ses plages de galets créent une
                atmosphère unique où luxe discret et authenticité italienne se rencontrent dans un cadre naturel
                époustouflant.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Spiaggia Grande</strong> - Plage principale bordée de bars et restaurants</li>
                <li><strong>Sentier des Dieux</strong> - Randonnée panoramique spectaculaire sur les falaises</li>
                <li><strong>Chiesa Santa Maria Assunta</strong> - Église au dôme de majoliques colorées</li>
                <li><strong>Fornillo Beach</strong> - Plage plus tranquille accessible par sentier</li>
                <li><strong>Boutiques de mode</strong> - Robes en lin, sandales artisanales, céramiques</li>
                <li><strong>Torre Trasita</strong> - Tour sarrasine médiévale avec vue panoramique</li>
                <li><strong>Grotta di Fornillo</strong> - Grotte marine accessible en kayak</li>
                <li><strong>Franco's Bar</strong> - Terrasse panoramique légendaire pour l'aperitivo</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Quartiers et zones</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Centro</strong> - Cœur du village avec boutiques et restaurants</li>
                <li><strong>Fornillo</strong> - Quartier résidentiel plus calme à l'ouest</li>
                <li><strong>Montepertuso</strong> - Village perché en hauteur, vues magnifiques</li>
                <li><strong>Arienzo</strong> - Plage isolée accessible par 300 marches</li>
                <li><strong>La Scogliera</strong> - Zone côtière avec clubs de plage exclusifs</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Regarder le coucher de soleil depuis Franco's Bar</li>
                <li>Parcourir le Sentier des Dieux de Positano à Praiano</li>
                <li>Louer un bateau privé pour explorer les criques cachées</li>
                <li>Déguster un limoncello artisanal sur une terrasse</li>
                <li>Se perdre dans les escaliers fleuris de bougainvilliers</li>
                <li>Acheter des sandales sur mesure chez un artisan local</li>
                <li>Prendre le ferry pour Capri depuis la Spiaggia Grande</li>
                <li>Dîner au restaurant Da Adolfo accessible uniquement en bateau</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre (juillet-août très fréquenté)<br />
                <strong>Langue :</strong> Italien (anglais largement parlé dans le tourisme)<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Transport :</strong> Bus SITA depuis Sorrente, ferry depuis Naples ou Amalfi<br />
                <strong>Durée conseillée :</strong> 2-4 jours<br />
                <strong>Conseil :</strong> Réserver hébergement longtemps à l'avance, prix élevés
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🚌 Arrivez tôt le matin ou en fin d'après-midi pour éviter les embouteillages<br />
                👟 Portez des chaussures confortables, tout est en pente et en escaliers<br />
                💰 Budget conséquent nécessaire, Positano est cher (restaurants, hôtels)<br />
                🌅 Le coucher de soleil est spectaculaire, trouvez un spot en terrasse<br />
                🏨 Logez en hauteur pour les vues, mais soyez prêt à monter des escaliers<br />
                🚤 Louez un bateau pour une journée, meilleur moyen de voir la côte<br />
                📸 Meilleure photo depuis le bateau en arrivant ou depuis la route en hauteur<br />
                🍋 Les citrons d'Amalfi sont énormes, goûtez tout ce qui est au limoncello
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Scialatielli ai Frutti di Mare</strong> - Pâtes fraîches aux fruits de mer</li>
                <li><strong>Limoncello</strong> - Liqueur de citron artisanale, spécialité locale</li>
                <li><strong>Delizia al Limone</strong> - Gâteau moelleux à la crème de citron</li>
                <li><strong>Alici di Cetara</strong> - Anchois marinés de Cetara</li>
                <li><strong>Mozzarella di Bufala</strong> - Mozzarella de buflonne crémeuse</li>
                <li><strong>Totani e Patate</strong> - Calamars et pommes de terre</li>
                <li><strong>Torta Caprese</strong> - Gâteau chocolat-amandes sans farine</li>
                <li><strong>Insalata di Polpo</strong> - Salade de poulpe citronnée</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sites Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Sites explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Spiaggia Grande */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1534445538923-2b768aad6e7f?w=1200&q=80"
                      alt="Spiaggia Grande Positano"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plage</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Spiaggia Grande</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le cœur animé de Positano au bord de l'eau</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        La Spiaggia Grande est la plage principale de Positano, point névralgique où convergent toutes les
                        ruelles escarpées du village. Cette longue étendue de galets gris est bordée de clubs de plage privés
                        aux transats colorés, de restaurants les pieds dans l'eau et de bars à cocktails. Le dôme en
                        majoliques vertes et jaunes de l'église Santa Maria Assunta domine la scène, créant une carte postale
                        parfaite. L'atmosphère est chic et décontractée à la fois : familles italiennes, jet-setters discrets
                        et touristes émerveillés se côtoient dans une ambiance de vacances élégantes.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        C'est aussi le point de départ des ferries pour Capri, Amalfi et la côte, ainsi que des bateaux-taxis
                        qui permettent d'accéder aux plages isolées. Le matin, les pêcheurs locaux vendent encore leur prise
                        du jour, perpétuant une tradition séculaire. Le soir, la plage se transforme en promenade romantique
                        éclairée par les lumières des restaurants et les derniers rayons du soleil qui embrasent les falaises.
                        Louer un transat ici coûte cher, mais l'expérience de voir Positano depuis l'eau vaut chaque euro.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Mer</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Central</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sentier des Dieux */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1590074075333-ed8b5fdb634a?w=1200&q=80"
                      alt="Sentier des Dieux"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Randonnée</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Sentier des Dieux</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Randonnée spectaculaire au-dessus de la côte</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Sentiero degli Dei (Sentier des Dieux) est l'une des plus belles randonnées d'Italie, serpentant
                        à flanc de montagne à 600 mètres au-dessus de la mer Tyrrhénienne. Le parcours de 8 kilomètres relie
                        Bomerano (au-dessus de Positano) à Nocelle (près de Praiano), offrant des panoramas à couper le souffle
                        sur la côte Amalfitaine, Capri et les îles Li Galli. Le nom vient de la beauté divine des paysages :
                        falaises vertigineuses, végétation méditerranéenne parfumée, criques turquoise en contrebas et villages
                        accrochés aux montagnes.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le sentier, ancien chemin muletier pavé, traverse des terrasses de vignes et de citronniers abandonnées,
                        passe devant des bergeries de pierre et des chapelles votives. La difficulté est modérée mais le dénivelé
                        important requiert une bonne condition physique. Partez tôt le matin en été pour éviter la chaleur,
                        apportez beaucoup d'eau et un chapeau. L'arrivée à Nocelle permet de descendre à Positano par 1500
                        marches raides mais magnifiques, ou de prendre le bus local. Cette randonnée justifie à elle seule un
                        voyage sur la côte Amalfitaine.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Panoramas</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Village vertical */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1563796399-8d23b60bacf5?w=1200&q=80"
                      alt="Ruelles de Positano"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Architecture</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Village vertical et ruelles</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">L'architecture unique en cascade</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Positano n'a pas vraiment de rues au sens traditionnel : son tissu urbain est un labyrinthe vertical
                        d'escaliers pentus, de passages voûtés et de ruelles étroites qui zigzaguent entre les maisons colorées
                        accrochées à la falaise. Chaque niveau offre une perspective différente sur le village et la mer, créant
                        une expérience architecturale unique où marcher signifie constamment monter ou descendre. Les maisons,
                        construites en terrasses successives, ont leurs jardins sur le toit de la maison d'en dessous, formant
                        un empilement harmonieux de cubes colorés ornés de bougainvilliers et de citronniers.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Se promener dans ces ruelles est une aventure en soi : on découvre des boutiques artisanales cachées
                        vendant robes en lin, sandales sur mesure et céramiques peintes, des galeries d'art contemporain, des
                        restaurants familiaux où trois générations cuisinent ensemble. Les terrasses fleuries offrent des coins
                        secrets pour un café ou un spritz avec vue vertigineuse. Cette configuration verticale explique pourquoi
                        Positano n'a jamais succombé au tourisme de masse : impossible d'y construire de grands hôtels, et
                        chaque déplacement demande un effort physique qui filtre naturellement les visiteurs pressés.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Pittoresque</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Shopping</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Côte en bateau */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1566836393207-e135f5a4e30a?w=1200&q=80"
                      alt="Côte Amalfitaine en bateau"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Navigation</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Explorer la côte en bateau</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La meilleure perspective sur Positano</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Voir Positano et la côte Amalfitaine depuis la mer est une expérience inoubliable qui révèle toute la
                        beauté spectaculaire de la région. Louer un bateau privé avec skipper pour la journée permet d'explorer
                        les criques secrètes, grottes marines et plages isolées inaccessibles par la terre. On navigue au pied
                        des falaises vertigineuses couvertes de maquis méditerranéen, on mouille dans des baies turquoise pour
                        se baigner, et on découvre des restaurants de plage comme Da Adolfo accessibles uniquement par bateau,
                        où l'on déjeune de poisson grillé les pieds dans le sable.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        L'archipel Li Galli, trois îlots rocheux au large de Positano où Noureev possédait une villa, se visite
                        en faisant le tour en bateau. On peut pousser jusqu'à la Grotte d'Émeraude près d'Amalfi, où la lumière
                        sous-marine crée des reflets verts magiques. Mais le moment le plus photogénique reste le retour vers
                        Positano au coucher du soleil : le village s'illumine progressivement, les maisons colorées prennent
                        des teintes dorées et roses, et on comprend pourquoi tant d'artistes et d'écrivains sont tombés amoureux
                        de ce lieu unique.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Excursion</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Luxe</span>
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
