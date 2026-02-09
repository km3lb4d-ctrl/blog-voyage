'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BarcelonePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Barcelone</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Capitale catalane alliant modernisme de Gaudí et vie méditerranéenne.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Barcelone</h2>
              <p className="text-gray-700 mb-6">
                Barcelone, métropole cosmopolite entre mer et montagne, fascine par son architecture moderniste unique,
                ses plages urbaines et son ambiance vibrante. Capitale de la Catalogne, cette ville méditerranéenne
                a su préserver son identité culturelle forte tout en devenant l'une des destinations les plus visitées
                d'Europe. L'empreinte de Gaudí y est omniprésente, avec des chefs-d'œuvre comme la Sagrada Família
                et le Park Güell qui défient les lois de l'architecture traditionnelle. Au-delà du modernisme catalan,
                Barcelone séduit par son quartier gothique médiéval, ses marchés colorés, sa gastronomie inventive,
                ses plages urbaines animées et sa vie nocturne légendaire. C'est une ville où l'art, la culture et
                la fête cohabitent harmonieusement dans un cadre méditerranéen enchanteur.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Sagrada Família</strong> - Chef-d'œuvre inachevé de Gaudí, symbole de Barcelone</li>
                <li><strong>Park Güell</strong> - Parc moderniste aux mosaïques colorées avec vue panoramique</li>
                <li><strong>Barri Gòtic</strong> - Quartier médiéval aux ruelles labyrinthiques et cathédrale</li>
                <li><strong>La Barceloneta</strong> - Plage urbaine, restaurants de fruits de mer et ambiance festive</li>
                <li><strong>Casa Batlló & Casa Milà</strong> - Façades modernistes iconiques sur Passeig de Gràcia</li>
                <li><strong>Las Ramblas</strong> - Avenue emblématique du centre au port</li>
                <li><strong>Marché de La Boqueria</strong> - Temple gastronomique aux étals colorés</li>
                <li><strong>Montjuïc</strong> - Colline avec musées, jardins et spectacles de fontaines</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre-octobre (climat idéal, moins de touristes)<br />
                <strong>Langue :</strong> Catalan et espagnol, anglais dans les zones touristiques<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Transports :</strong> Métro très efficace, T-10 pour 10 trajets économiques<br />
                <strong>Durée recommandée :</strong> 3-5 jours pour voir l'essentiel<br />
                <strong>Particularité :</strong> Réservation obligatoire pour Sagrada Família et Park Güell
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🎟️ Réservez vos billets pour la Sagrada Família et le Park Güell 2-3 semaines à l'avance<br />
                🌅 Visitez le Park Güell tôt le matin pour éviter la foule et profiter de la lumière dorée<br />
                🏖️ Explorez les plages au nord de La Barceloneta (Bogatell, Mar Bella) plus calmes<br />
                🍽️ Déjeunez au marché de La Boqueria mais dînez dans les quartiers locaux (Gràcia, Poblenou)<br />
                🚶 Perdez-vous dans le Barri Gòtic le soir quand les ruelles s'illuminent<br />
                🎨 Réservez un créneau horaire au musée Picasso pour éviter les files d'attente<br />
                ⚽ Assistez à un match du FC Barcelone au Camp Nou si possible<br />
                🌙 Profitez du spectacle des fontaines magiques de Montjuïc le soir (gratuit)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Tapas catalanes</strong> - Pan con tomate, patatas bravas, bombas</li>
                <li><strong>Paella</strong> - Riz aux fruits de mer (spécialité valencienne populaire à Barcelone)</li>
                <li><strong>Calcots</strong> - Oignons grillés avec sauce romesco (saison hiver-printemps)</li>
                <li><strong>Crema catalana</strong> - Dessert crémeux à la vanille caramélisée</li>
                <li><strong>Vermouth</strong> - Apéritif traditionnel catalan servi avec des olives</li>
                <li><strong>Xuixo</strong> - Pâtisserie gironnaise à la crème, populaire à Barcelone</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Lieux Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Sagrada Família */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80"
                      alt="Sagrada Família"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Architecture</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Sagrada Família</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Chef-d'œuvre inachevé de Gaudí</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        La Sagrada Família est bien plus qu'une simple basilique : c'est le chef-d'œuvre absolu d'Antoni Gaudí,
                        un projet titanesque commencé en 1882 et dont l'achèvement est prévu pour 2026. Chaque façade raconte
                        une histoire biblique avec un langage architectural révolutionnaire qui mêle courbes organiques, symbolisme
                        religieux et prouesses techniques. La façade de la Nativité, créée du vivant de Gaudí, déborde de détails
                        sculpturaux représentant la vie du Christ, tandis que la façade de la Passion, plus austère et angulaire,
                        évoque la souffrance de la crucifixion.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        L'intérieur de la basilique est une véritable forêt de pierre où les colonnes s'élèvent comme des arbres
                        vers un plafond voûté organique. Les vitraux, d'une richesse chromatique époustouflante, projettent des
                        jeux de lumière qui transforment l'espace tout au long de la journée. Pour la visiter dans les meilleures
                        conditions, réservez absolument votre billet en ligne plusieurs semaines à l'avance (créneau 9h conseillé)
                        et optez pour l'accès aux tours qui offre une perspective vertigineuse sur l'architecture et la ville.
                        Prévoyez au moins 2 heures pour savourer pleinement ce monument hors du commun.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Modernisme</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Park Güell */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80"
                      alt="Park Güell"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Parc</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Park Güell</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Jardin moderniste aux mosaïques féériques</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Perché sur les hauteurs de Barcelone, le Park Güell est un jardin public extraordinaire où l'imagination
                        débridée de Gaudí s'est exprimée dans chaque recoin. Commandé par l'industriel Eusebi Güell comme projet
                        de lotissement résidentiel de luxe, le parc n'a jamais vu le jour dans sa forme initiale, mais est devenu
                        un espace public en 1926. L'entrée monumentale vous accueille avec ses deux pavillons de conte de fées
                        aux toits couverts de trencadís (mosaïques de céramique cassée), technique signature de Gaudí qui donne
                        vie à des structures organiques colorées.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le clou du spectacle est la terrasse panoramique avec son banc ondulé de 110 mètres de long, entièrement
                        recouvert de mosaïques multicolores créées par Josep Maria Jujol. Depuis cette esplanade, la vue sur
                        Barcelone et la Méditerranée est sublime, surtout au lever du soleil quand la lumière dorée caresse
                        les façades modernistes et que le parc est encore calme. La salle hypostyle aux 86 colonnes doriques
                        inclinées, le viaduc des jardins d'Autriche, et la maison-musée de Gaudí complètent cette visite
                        féerique. Réservation en ligne obligatoire, arrivez à l'ouverture (8h) pour éviter la foule.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vue panoramique</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Mosaïques</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Barri Gòtic */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=1200&q=80"
                      alt="Barri Gòtic"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Histoire</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Barri Gòtic</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Cœur médiéval de Barcelone</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Barri Gòtic (quartier gothique) est le centre historique de Barcelone, un dédale fascinant de ruelles
                        étroites et tortueuses qui remontent à l'époque romaine. Se perdre dans ce labyrinthe médiéval est une
                        expérience magique : chaque coin de rue révèle une place cachée, une église gothique, un vestige romain
                        ou un palais médiéval. La Catedral de Barcelona, avec sa façade néogothique imposante et son cloître
                        paisible habité par treize oies blanches, domine majestueusement le quartier. Ne manquez pas la montée
                        sur le toit-terrasse pour une vue imprenable sur les toits de tuiles et les flèches gothiques.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        La Plaça Reial, avec ses arcades, palmiers et fontaines dessinées par le jeune Gaudí, offre un havre
                        de tranquillité le jour et s'anime la nuit avec ses bars et restaurants. Le pont néogothique du Carrer
                        del Bisbe (souvent photographié) relie les bâtiments gouvernementaux et crée une ambiance de conte
                        médiéval. Pour une plongée dans l'histoire, visitez le musée souterrain MUHBA qui expose des vestiges
                        de la cité romaine Barcino. Le soir, le quartier prend une atmosphère romantique avec ses ruelles
                        éclairées à la lumière jaune et ses terrasses animées. Parfait pour se perdre sans plan, simplement
                        en suivant son instinct et sa curiosité.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Médiéval</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* La Barceloneta */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="/images/barceloneta.jpg"
                      alt="La Barceloneta"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plage</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">La Barceloneta</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Quartier balnéaire et authentique</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        La Barceloneta est l'ancien quartier de pêcheurs de Barcelone, transformé en destination balnéaire
                        branchée tout en conservant son âme populaire et authentique. Ses ruelles étroites quadrillées,
                        tracées au XVIIIe siècle, contrastent avec l'ouverture de son front de mer moderne. La plage urbaine
                        de La Barceloneta, réaménagée pour les Jeux Olympiques de 1992, est devenue un lieu de vie incontournable
                        pour les Barcelonais et les touristes : beach-volley, paddleboard, baignade dans la Méditerranée,
                        ou simplement bronzage sur le sable doré avec vue sur la sculpture « L'Estel Ferit » (L'Étoile blessée).
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le soir, le Passeig Marítim s'anime avec ses chiringuitos (bars de plage) servant des mojitos face
                        au coucher de soleil, tandis que les restaurants du quartier proposent les meilleurs fruits de mer
                        de la ville. Testez les fideuàs (version catalane de la paella aux pâtes) dans les restaurants traditionnels
                        comme Can Maño ou Els Pescadors. Ne manquez pas le marché de La Barceloneta pour une immersion dans
                        la vie locale, et poussez jusqu'au Port Olímpic avec sa marina moderne et ses clubs en bord de mer.
                        Pour une expérience plus locale, explorez les plages au nord (Bogatell, Mar Bella) moins touristiques
                        et tout aussi agréables, avec une ambiance plus décontractée et des bars plus authentiques.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Mer</span>
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
              Retour en Espagne
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations espagnoles et leurs richesses culturelles.
            </p>
            <Link
              href="/blog/europe/espagne"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer l'Espagne
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
