'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function VenisePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Venise</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            La Sérénissime, cité des Doges posée sur l'eau.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Venise</h2>
              <p className="text-gray-700 mb-6">
                Venise, ville unique au monde construite sur 118 îles reliées par plus de 400 ponts, enchante par
                son atmosphère hors du temps et sa beauté irréelle. Ancienne république maritime puissante qui
                domina la Méditerranée pendant des siècles, La Sérénissime conserve tout son charme et sa magie.
                Ici, les rues sont des canaux, les voitures sont des gondoles et des vaporettos, et chaque palazzo
                semble flotter sur l'eau dans un équilibre fragile. Entre les mosaïques dorées de Saint-Marc, les
                fresques du Tintoret, et le mystère des masques du Carnaval, Venise offre une expérience de voyage
                absolument unique qui ne ressemble à nulle part ailleurs.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Place Saint-Marc</strong> - Cœur de Venise avec basilique byzantine et Campanile</li>
                <li><strong>Grand Canal</strong> - Artère principale à parcourir en gondole ou vaporetto</li>
                <li><strong>Pont du Rialto</strong> - Plus ancien pont sur le Grand Canal</li>
                <li><strong>Palais des Doges</strong> - Siège du pouvoir vénitien avec pont des Soupirs</li>
                <li><strong>Basilique Saint-Marc</strong> - Joyau byzantin aux mosaïques d'or</li>
                <li><strong>Murano et Burano</strong> - Îles aux verreries et maisons arc-en-ciel</li>
                <li><strong>Gallerie dell'Accademia</strong> - Art vénitien du Tintoret et Titien</li>
                <li><strong>Théâtre La Fenice</strong> - Opéra historique somptueux</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Quartiers emblématiques</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>San Marco</strong> - Cœur touristique avec les monuments principaux</li>
                <li><strong>Dorsoduro</strong> - Quartier artistique avec musées et universités</li>
                <li><strong>Cannaregio</strong> - Authentique, ancien Ghetto juif, moins touristique</li>
                <li><strong>Castello</strong> - Résidentiel, jardins de la Biennale, Arsenal</li>
                <li><strong>San Polo</strong> - Marché du Rialto et trattorias locales</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Se perdre volontairement dans le labyrinthe de ruelles</li>
                <li>Prendre un spritz sur la terrasse d'un bacaro</li>
                <li>Assister au coucher de soleil depuis le pont de l'Accademia</li>
                <li>Découvrir Venise à l'aube avant l'arrivée des touristes</li>
                <li>Faire un tour en gondole au crépuscule</li>
                <li>Explorer les îles de Murano, Burano et Torcello</li>
                <li>Visiter le marché du Rialto tôt le matin</li>
                <li>Assister à un concert de musique baroque dans une église</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-octobre (hors acqua alta)<br />
                <strong>Langue :</strong> Italien (vénitien encore parlé par les locaux)<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Transport :</strong> Vaporetto (bateau-bus), gondole, ou marche à pied<br />
                <strong>Durée conseillée :</strong> 2-4 jours minimum<br />
                <strong>Conseil :</strong> Éviter juillet-août (surchargé) et novembre (acqua alta)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🎫 Achetez un pass vaporetto 24h ou 72h, vite rentabilisé<br />
                🌅 Levez-vous tôt pour voir Venise sans la foule (6h-8h magique)<br />
                🚶 Perdez-vous sans carte, c'est le meilleur moyen de découvrir Venise<br />
                💰 Évitez les restaurants sur la Piazza San Marco (prix triplés)<br />
                🎭 Visitez pendant le Carnaval si vous aimez la foule costumée<br />
                🏨 Logez dans Cannaregio ou Dorsoduro pour l'authenticité<br />
                🚤 Le vaporetto ligne 1 sur le Grand Canal est une croisière gratuite<br />
                👢 Apportez des bottes en cas d'acqua alta (novembre-mars)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Cicchetti</strong> - Tapas vénitiennes dans les bacari, avec spritz</li>
                <li><strong>Sarde in Saor</strong> - Sardines marinées aigre-douces aux oignons</li>
                <li><strong>Risotto al Nero di Seppia</strong> - Risotto noir à l'encre de seiche</li>
                <li><strong>Fegato alla Veneziana</strong> - Foie de veau aux oignons</li>
                <li><strong>Baccalà Mantecato</strong> - Morue crémeuse sur polenta</li>
                <li><strong>Fritto Misto</strong> - Friture de poissons et fruits de mer</li>
                <li><strong>Tiramisù</strong> - Inventé à Venise, version originale au Caffè Florian</li>
                <li><strong>Spritz</strong> - Apéritif vénitien à l'Aperol ou Campari</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sites Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Sites explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Place Saint-Marc */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1514890547357-a9ee288728e0?w=1200&q=80"
                      alt="Place Saint-Marc"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Historique</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Place Saint-Marc</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le salon de Venise et son patrimoine byzantin</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        La Piazza San Marco, seule place de Venise à porter le titre de "piazza" (les autres sont des
                        "campi"), est le cœur battant de la Sérénissime. Napoléon l'appelait "le plus beau salon d'Europe",
                        et on comprend pourquoi en admirant ses arcades élégantes, ses cafés historiques et l'harmonie
                        architecturale de l'ensemble. La Basilique Saint-Marc, joyau byzantin aux façades ornées de mosaïques
                        dorées et de chevaux de bronze, témoigne de la puissance et de la richesse de la république vénitienne.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le Campanile, haut de 98 mètres, offre une vue panoramique époustouflante sur la lagune et les toits
                        de Venise. La place s'anime au rythme des orchestres des cafés historiques comme le Florian (1720)
                        ou le Quadri, où l'on peut prendre un café hors de prix mais chargé d'histoire. Tôt le matin ou au
                        coucher du soleil, la place révèle toute sa magie quand la lumière dorée caresse les façades et que
                        les pigeons cèdent la place aux premiers visiteurs émerveillés.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Incontournable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grand Canal */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?w=1200&q=80"
                      alt="Grand Canal"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Iconique</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Grand Canal</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">L'artère principale de la ville flottante</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Grand Canal (Canal Grande) serpente à travers Venise en formant un S inversé, véritable boulevard
                        aquatique bordé des plus beaux palais de la ville. Long de près de 4 kilomètres, il est traversé par
                        seulement quatre ponts, dont le célèbre Rialto. Emprunter le vaporetto ligne 1 qui remonte lentement
                        le canal est l'une des expériences les plus magiques de Venise : on découvre la succession de palais
                        gothiques, Renaissance et baroques qui témoignent de la richesse des familles nobles vénitiennes.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Palazzo Vendramin-Calergi, Ca' d'Oro avec sa façade dorée, Ca' Rezzonico musée du XVIIIe siècle...
                        chaque palais raconte une histoire. Le canal s'anime au rythme des gondoles qui glissent silencieusement,
                        des taxis aquatiques qui fendent les flots, et des péniches de livraison qui approvisionnent la ville.
                        Au coucher du soleil, la lumière rasante embrase les façades de teintes roses et dorées, créant un
                        spectacle féérique que Canaletto et Turner ont immortalisé dans leurs peintures.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Architecture</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Photos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Burano */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1530878955558-a6c31b9c97b8?w=1200&q=80"
                      alt="Burano"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Coloré</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Burano</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">L'île aux maisons arc-en-ciel</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Burano, petite île de pêcheurs située à 40 minutes de vaporetto de Venise, est célèbre dans le monde
                        entier pour ses maisons peintes de couleurs vives qui se reflètent dans les canaux paisibles. Violet,
                        rose fuchsia, jaune canari, vert pomme, bleu azur : chaque façade est une explosion de couleur qui
                        crée un paysage urbain unique et photogénique. La légende raconte que les pêcheurs peignaient leurs
                        maisons de couleurs vives pour les reconnaître dans le brouillard dense de la lagune.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Au-delà de ses couleurs Instagram-parfaites, Burano est aussi réputée pour sa dentelle artisanale,
                        tradition séculaire transmise de mère en fille. Le Museo del Merletto expose des pièces extraordinaires
                        de dentelle au fuseau. L'atmosphère de l'île est paisible et authentique, loin de l'agitation de Venise.
                        On y déjeune d'un excellent risotto de go (poisson de lagune) dans une trattoria familiale, on flâne
                        le long des canaux, et on découvre le campanile penché de San Martino qui rivalise avec Pise.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Artisanat</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Palais des Doges */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1588702547923-7d173ecf4b03?w=1200&q=80"
                      alt="Palais des Doges"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Pouvoir</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Palais des Doges</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le siège du pouvoir de la Sérénissime</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Palazzo Ducale, chef-d'œuvre de l'architecture gothique vénitienne, fut pendant près de mille ans
                        le siège du pouvoir de la République de Venise. Sa façade ajourée de dentelle de pierre rose et blanche
                        contraste avec la masse imposante du bâtiment. À l'intérieur, les appartements du Doge et les salles
                        du Conseil regorgent de fresques monumentales du Tintoret, Véronèse et Titien qui glorifient la puissance
                        vénitienne. L'escalier d'Or, la Salle du Grand Conseil avec son immense Paradis du Tintoret, fascinent.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        La visite permet de découvrir les prisons du palais, reliées aux salles de jugement par le célèbre
                        Pont des Soupirs. Ce pont couvert, que traversaient les condamnés pour leur dernière vision de Venise
                        avant l'emprisonnement, tire son nom romantique des soupirs qu'ils poussaient. Les itinéraires secrets
                        du palais dévoilent les coulisses du pouvoir : salles de torture, cellules de Casanova d'où il s'évada,
                        et passages cachés qui révèlent le fonctionnement opaque de cette république oligarchique fascinante.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Art</span>
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
