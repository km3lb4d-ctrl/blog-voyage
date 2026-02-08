'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BogotaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Bogotá</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Capitale vibrante perchée à 2640m, où culture, art urbain et gastronomie se rencontrent.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Bogotá</h2>
              <p className="text-gray-700 mb-6">
                Bogotá, capitale colombienne perchée à 2640 mètres d'altitude dans la cordillère des Andes,
                est une métropole dynamique de 8 millions d'habitants qui incarne la transformation de la Colombie
                moderne. Entre les maisons coloniales colorées de La Candelaria, les fresques murales géantes qui
                habillent les façades, les musées de classe mondiale, la scène gastronomique innovante et la vie
                nocturne effervescente de la Zona Rosa, Bogotá révèle une ville créative et cosmopolite qui défie
                tous les clichés. L'air frais de l'altitude, les montagnes qui encadrent la ville et l'énergie
                palpable de ses habitants font de Bogotá une destination fascinante où l'histoire précolombienne
                côtoie l'art contemporain.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>La Candelaria</strong> - Centre historique colonial aux façades colorées et rues pavées</li>
                <li><strong>Cerro de Monserrate</strong> - Sanctuaire à 3152m avec vue panoramique époustouflante</li>
                <li><strong>Musée de l'Or (Museo del Oro)</strong> - Plus grande collection d'or précolombien au monde, 34 000 pièces</li>
                <li><strong>Musée Botero</strong> - Œuvres du célèbre artiste colombien, entrée gratuite</li>
                <li><strong>Street art</strong> - Fresques murales géantes dans La Candelaria et Chapinero</li>
                <li><strong>Plaza de Bolívar</strong> - Cœur politique et historique de la ville</li>
                <li><strong>Zona Rosa</strong> - Quartier branché avec restaurants gastronomiques et vie nocturne</li>
                <li><strong>Usaquén</strong> - Village colonial au nord, marché dominical artisanal</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Quartiers à explorer</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>La Candelaria</strong> - Cœur historique et culturel, hostels et musées</li>
                <li><strong>Chapinero</strong> - Quartier LGBT-friendly, bars alternatifs et street food</li>
                <li><strong>Zona T (Zona Rosa)</strong> - Restaurants haut de gamme et clubs branchés</li>
                <li><strong>Usaquén</strong> - Ambiance village, terrasses et marché du dimanche</li>
                <li><strong>Parque 93</strong> - Quartier résidentiel chic avec parcs et restaurants</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Monter au Cerro de Monserrate en funiculaire ou téléphérique au lever du soleil</li>
                <li>Faire un tour de street art guidé dans La Candelaria</li>
                <li>Déguster un ajiaco (soupe traditionnelle) au marché de Paloquemao</li>
                <li>Visiter le Musée de l'Or en fin d'après-midi (moins de monde)</li>
                <li>Flâner au marché artisanal d'Usaquén le dimanche</li>
                <li>Prendre un café de spécialité dans un café de la 3ª via</li>
                <li>Assister à un match de football au stade El Campín</li>
                <li>Découvrir la vie nocturne de la Zona Rosa et Parque 93</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-mars et juillet-août (saison sèche, mais Bogotá peut être visitée toute l'année)<br />
                <strong>Langue :</strong> Espagnol (peu d'anglais parlé)<br />
                <strong>Monnaie :</strong> Peso colombien (COP) - 1€ = ~4500 COP<br />
                <strong>Transport :</strong> TransMilenio (BRT), taxis, Uber, vélos en libre-service<br />
                <strong>Sécurité :</strong> Éviter de sortir objets de valeur, quartiers touristiques sûrs en journée<br />
                <strong>Durée conseillée :</strong> 3-4 jours minimum
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🧥 L'altitude rend les nuits fraîches (10-15°C), prévoir un pull même en été<br />
                🎨 Réserver un tour de street art avec guide local (15-20€, incontournable)<br />
                ☕ Goûter le café colombien dans les cafés de spécialité, pas Starbucks<br />
                🚇 Utiliser le TransMilenio avec prudence (pickpockets), Uber plus sûr<br />
                🏛️ Musée de l'Or fermé le lundi, arriver tôt pour éviter la foule<br />
                🌄 Monter à Monserrate tôt le matin pour voir le lever de soleil sur la ville<br />
                💰 Les prix sont très abordables (repas 5-10€, hébergement hostel 10-15€)<br />
                📱 Acheter une SIM locale (Claro, Movistar) pour GPS et Uber
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ajiaco</strong> - Soupe traditionnelle bogotanaise au poulet et trois types de pommes de terre</li>
                <li><strong>Bandeja Paisa</strong> - Plat généreux avec haricots, riz, viande, chorizo, œuf et arepa</li>
                <li><strong>Empanadas</strong> - Chaussons frits fourrés viande ou pomme de terre</li>
                <li><strong>Arepa</strong> - Galette de maïs, base de l'alimentation colombienne</li>
                <li><strong>Changua</strong> - Soupe au lait et œuf, petit-déjeuner traditionnel</li>
                <li><strong>Obleas</strong> - Gaufrettes fines avec arequipe (confiture de lait)</li>
                <li><strong>Aguapanela</strong> - Boisson chaude au sucre de canne</li>
                <li><strong>Café colombien</strong> - Parmi les meilleurs au monde, à déguster pur</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* La Candelaria */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?w=1200&q=80"
                      alt="La Candelaria, Bogotá"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Histoire</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">La Candelaria</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Cœur colonial et culturel</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        La Candelaria est le centre historique de Bogotá, un labyrinthe de ruelles pavées bordées de
                        maisons coloniales aux façades colorées qui racontent quatre siècles d'histoire. Chaque coin de
                        rue révèle un trésor : églises baroques aux retables dorés, palais coloniaux reconvertis en musées,
                        cafés bohèmes cachés dans des patios secrets, et surtout, des fresques murales géantes qui font
                        de Bogotá l'une des capitales mondiales du street art.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le quartier abrite les musées incontournables de la ville : le Musée de l'Or avec ses 34 000 pièces
                        d'or précolombien étincelantes, le Musée Botero qui expose gratuitement les œuvres généreuses de
                        l'artiste colombien, et la Plaza de Bolívar où trône la cathédrale face au palais présidentiel.
                        L'ambiance y est unique : étudiants en terrasse, vendeurs ambulants, musiciens de rue et touristes
                        émerveillés cohabitent dans une énergie vibrante typiquement bogotanaise.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Colonial</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Musées</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cerro de Monserrate */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1611696150488-ab155b0f2a5e?w=1200&q=80"
                      alt="Cerro de Monserrate"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Panorama</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Cerro de Monserrate</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Vue à 360° sur toute la capitale</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Culminant à 3152 mètres d'altitude, le Cerro de Monserrate domine majestueusement Bogotá et offre
                        l'un des panoramas urbains les plus spectaculaires d'Amérique du Sud. On accède au sommet en
                        funiculaire historique, en téléphérique moderne, ou à pied pour les plus courageux (1h30 de montée
                        raide mais gratuite). Au sommet, un sanctuaire blanc du XVIIe siècle attire pèlerins et touristes,
                        tandis que les terrasses des restaurants dévoilent Bogotá étendue à perte de vue.
                      </p>
                      <p className="text-gray-700 mb-4">
                        La vue est particulièrement magique au lever ou au coucher du soleil, quand la lumière rasante
                        embrase les façades de la ville et que les montagnes environnantes se parent de nuances dorées.
                        Par temps clair (rare !), on distingue l'immense tapis urbain qui s'étend sur 40 km du nord au sud.
                        Le weekend, les Bogotanais viennent en famille pique-niquer sur les pelouses, créant une ambiance
                        festive et conviviale où se mêlent dévotion religieuse et plaisir simple de la montagne.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vue</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Zona Rosa */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80"
                      alt="Zona Rosa, Bogotá"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Gastronomie</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Zona Rosa & Zona T</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le quartier branché et gastronomique</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        La Zona Rosa (et sa célèbre Zona T, formée par l'intersection des avenues) est le quartier chic et
                        moderne de Bogotá, où se concentrent les meilleurs restaurants, bars à cocktails sophistiqués et
                        clubs branchés de la capitale. C'est ici que bat le cœur de la nouvelle Bogotá cosmopolite : terrasses
                        animées où la jeunesse dorée siroते des mojitos, restaurants fusion qui réinventent la cuisine
                        colombienne, et boutiques de créateurs colombiens qui rivalisent avec les marques internationales.
                      </p>
                      <p className="text-gray-700 mb-4">
                        L'ambiance change radicalement entre jour et nuit : calme et business en semaine, le quartier
                        s'embrase le weekend quand les Bogotanais sortent faire la fête jusqu'au petit matin. Les restaurants
                        étoilés côtoient les bars à craft beer artisanale et les clubs de salsa où touristes et locaux
                        dansent jusqu'à l'aube. C'est aussi le point de départ idéal pour explorer le Parque 93 voisin,
                        poumon vert entouré de cafés et restaurants parfaits pour un brunch dominical relaxant.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Restaurants</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vie nocturne</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Usaquén */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1588783948922-9b5869c01d6e?w=1200&q=80"
                      alt="Usaquén, Bogotá"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Village</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Usaquén</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Village colonial au cœur de la ville moderne</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Usaquén était autrefois un village indépendant avant d'être absorbé par l'expansion de Bogotá,
                        et il a miraculeusement conservé son âme de pueblo paisible. Son centre historique, organisé autour
                        d'une charmante place bordée d'une église coloniale blanche, ressemble à un décor de carte postale :
                        maisons basses aux murs de chaux, ruelles pavées fleuries, et une atmosphère décontractée qui
                        contraste avec l'effervescence du centre-ville situé à quelques kilomètres au sud.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le dimanche, Usaquén se transforme en destination prisée des Bogotanais qui affluent pour son célèbre
                        marché aux puces artisanal. Les rues piétonnes se remplissent de stands colorés proposant artisanat,
                        bijoux, vêtements et produits gourmands locaux, tandis que les terrasses des restaurants et cafés
                        débordent de familles venues bruncher. L'ambiance y est festive et bohème, avec musiciens de rue et
                        food trucks proposant des spécialités colombiennes. Un havre de paix dominical parfait pour finir
                        un séjour à Bogotá en douceur.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Marché</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Artisanat</span>
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
