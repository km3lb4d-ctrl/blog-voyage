'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BangkokPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Bangkok</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Capitale vibrante de la Thaïlande, entre temples dorés et vie nocturne.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Bangkok</h2>
              <p className="text-gray-700 mb-6">
                Bangkok, surnommée la "Venise de l'Asie" pour ses nombreux canaux (khlongs), est une métropole fascinante
                où l'ancien et le moderne se côtoient dans un chaos organisé captivant. Capitale énergique de la Thaïlande,
                elle offre un mélange unique de temples bouddhistes dorés étincelant sous le soleil tropical, de gratte-ciels
                ultramodernes, de marchés flottants authentiques, et d'une street food légendaire considérée comme la meilleure
                au monde. Entre tuk-tuks pétaradants, centres commerciaux climatisés gigantesques, palais royaux somptueux
                et vie nocturne électrisante, Bangkok est une ville d'extrêmes qui ne laisse personne indifférent.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Grand Palais & Wat Phra Kaew</strong> - Complexe royal éblouissant avec le Bouddha d'Émeraude sacré</li>
                <li><strong>Wat Pho</strong> - Temple du Bouddha couché doré de 46 mètres, plus ancien temple de Bangkok</li>
                <li><strong>Wat Arun</strong> - Temple de l'Aube majestueux au bord du fleuve Chao Phraya</li>
                <li><strong>Khao San Road</strong> - Rue mythique des backpackers, ambiance électrique jour et nuit</li>
                <li><strong>Marchés flottants</strong> - Damnoen Saduak ou Amphawa pour l'authenticité</li>
                <li><strong>Chinatown (Yaowarat)</strong> - Street food légendaire et ambiance nocturne trépidante</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-février (saison fraîche et sèche), éviter mars-mai (canicule)<br />
                <strong>Langue :</strong> Thaï, anglais basique dans zones touristiques<br />
                <strong>Monnaie :</strong> Baht thaïlandais (THB)<br />
                <strong>Aéroport :</strong> Suvarnabhumi (BKK) principal, Don Mueang (DMK) low-cost<br />
                <strong>Durée recommandée :</strong> 3-4 jours minimum<br />
                <strong>Transport :</strong> BTS Skytrain, MRT métro, bateaux sur Chao Phraya, taxis Grab, tuk-tuks
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🕌 Vêtements couvrant épaules et genoux obligatoires dans les temples<br />
                🚇 Le BTS Skytrain est le moyen le plus rapide d'éviter les embouteillages<br />
                🍜 Testez absolument la street food, Bangkok est la capitale mondiale<br />
                🛺 Négociez TOUJOURS le prix des tuk-tuks avant de monter<br />
                💆 Massage thaï traditionnel au Wat Pho (école officielle)<br />
                🌃 Rooftop bars comme Vertigo, Sky Bar ou Octave pour vues panoramiques<br />
                🙏 Le "wai" (mains jointes) est le salut respectueux thaïlandais<br />
                🔥 Attention à la nourriture ultra-épicée, demandez "mai phet" (pas piquant)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Street food incontournable</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Pad Thai</strong> - Nouilles sautées emblématiques de Thaïlande</li>
                <li><strong>Tom Yum Goong</strong> - Soupe épicée aux crevettes, explosion de saveurs</li>
                <li><strong>Som Tam</strong> - Salade de papaye verte piquante et rafraîchissante</li>
                <li><strong>Mango Sticky Rice</strong> - Dessert culte au riz gluant et mangue</li>
                <li><strong>Satay</strong> - Brochettes grillées sauce cacahuète</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Quartiers explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Grand Palais & temples */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1563492065599-3520f775eeed?w=1200&q=80"
                      alt="Grand Palais Bangkok"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Culture</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Grand Palais & Temples</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le cœur spirituel et royal de Bangkok</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Grand Palais est LE monument incontournable de Bangkok, un complexe éblouissant de bâtiments dorés
                        qui fut la résidence officielle des rois de Thaïlande pendant 150 ans. À l'intérieur, le Wat Phra Kaew
                        (Temple du Bouddha d'Émeraude) abrite la statue la plus sacrée du bouddhisme thaï, une petite figurine
                        de jade vénérée par des millions de fidèles. L'architecture est somptueuse : toits aux tuiles orangées
                        et vertes étincelantes, flèches dorées pointant vers le ciel, mosaïques multicolores scintillantes.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        À quelques minutes à pied, le Wat Pho impressionne avec son gigantesque Bouddha couché recouvert de
                        feuilles d'or (46 mètres de long !), ainsi que ses 1000 statues de Bouddha disséminées dans le complexe.
                        C'est aussi le berceau du massage thaï traditionnel. Le Wat Arun de l'autre côté du fleuve, avec sa tour
                        centrale incrustée de porcelaine colorée, offre une vue panoramique sur Bangkok au coucher du soleil.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Temples</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chinatown */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1610375461246-83df859d849d?w=1200&q=80"
                      alt="Chinatown Bangkok"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Gastronomie</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Chinatown (Yaowarat)</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le paradis de la street food</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Chinatown de Bangkok est l'un des quartiers les plus authentiques et fascinants de la ville. La rue
                        Yaowarat Road, artère principale, se transforme chaque soir en un festival gastronomique géant où
                        les néons rouges et dorés illuminent des centaines de stands de street food fumants. L'atmosphère y
                        est électrique : vendeurs criant leurs spécialités, woks crachant des flammes, files d'attente devant
                        les meilleures adresses connues des locaux.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        C'est ici que vous trouverez la meilleure cuisine de rue de Bangkok : nouilles au porc braisé,
                        dim sum fumants, fruits de mer grillés au feu de bois, desserts traditionnels chinois. Pendant la
                        journée, explorez le marché de Sampeng Lane et ses 1,5 km de boutiques vendant absolument tout.
                        Chinatown, c'est Bangkok sans filtre : chaotique, bruyant, délicieux et absolument inoubliable.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Street food</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Khao San Road */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1596422846543-75c6fc197f07?w=1200&q=80"
                      alt="Khao San Road"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Vie nocturne</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Khao San Road</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La mecque des backpackers</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Khao San Road est une légende vivante du circuit des backpackers mondiaux. Cette rue de 300 mètres
                        concentre l'essence du voyage routard : auberges de jeunesse bon marché, bars ouverts jusqu'à l'aube,
                        stands de pad thaï à 2 dollars, vendeurs de vêtements hippies, salons de massage, tatoueurs, et cette
                        ambiance électrique unique où se croisent voyageurs de tous les continents. C'est le point de départ
                        ou d'arrivée de pratiquement tous les backpackers explorant l'Asie du Sud-Est.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le soir, la rue piétonne devient une fête géante : musique tonitruante, seaux de cocktails colorés,
                        jongleurs de feu, et cette énergie chaotique addictive. Amour ou déteste, Khao San ne laisse personne
                        indifférent. Si vous cherchez l'authenticité thaïe, ce n'est clairement pas ici. Mais pour l'expérience
                        backpacker quintessentielle, une soirée à Khao San est un rite de passage obligatoire du voyageur en Asie.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Backpackers</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Fête</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Rooftop bars */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=1200&q=80"
                      alt="Bangkok skyline"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Panorama</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Rooftop Bars</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Bangkok vue d'en haut</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Bangkok possède certains des rooftop bars les plus spectaculaires au monde, perchés au sommet de
                        gratte-ciels vertigineux. Le Sky Bar au 63ème étage du Lebua State Tower (rendu célèbre par le film
                        "Very Bad Trip 2") offre une vue à 360 degrés sur la mégalopole scintillante. Vertigo au Banyan Tree,
                        Octave au Marriott Sukhumvit, CRU Champagne Bar : chaque rooftop a son atmosphère unique mais tous
                        partagent ces vues époustouflantes sur la skyline illuminée de Bangkok.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Sirotez un cocktail sophistiqué (certes hors de prix) au coucher du soleil, quand le ciel orangé se
                        reflète sur le fleuve Chao Phraya serpentant entre les tours, et que les millions de lumières de la
                        ville s'allument progressivement. L'air chaud tropical caresse votre visage tandis que les bruits
                        de la ville montent d'en bas. C'est l'expérience glamour de Bangkok, contrastant totalement avec
                        le chaos des ruelles mais tout aussi mémorable.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Luxe</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Cocktails</span>
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
              Retour en Thaïlande
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations thaïlandaises et leurs merveilles.
            </p>
            <Link
              href="/blog/asie/thailande"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer la Thaïlande
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
