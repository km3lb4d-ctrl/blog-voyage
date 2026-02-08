'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function NewYorkPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">New York</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            La ville qui ne dort jamais, capitale mondiale où culture, diversité et énergie se rencontrent.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir New York</h2>
              <p className="text-gray-700 mb-6">
                New York City, la Big Apple, est bien plus qu'une simple ville : c'est un univers en soi, une métropole
                vibrante de 8,3 millions d'habitants qui incarne l'essence même du rêve américain. Entre les gratte-ciels
                vertigineux de Manhattan qui percent les nuages, les musées de classe mondiale regorgeant de chef-d'œuvres,
                les quartiers multiculturels où se côtoient 800 langues, les spectacles de Broadway aux lumières
                éblouissantes, et Central Park, poumon vert au cœur du béton, NYC offre une énergie et une diversité
                uniques au monde. De Wall Street au Bronx, de Brooklyn bohème à Queens cosmopolite, chaque borough raconte
                une histoire différente de cette ville-monde qui ne dort jamais et attire les rêveurs du monde entier.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Statue de la Liberté</strong> - Symbole iconique des États-Unis et de l'immigration</li>
                <li><strong>Central Park</strong> - Oasis verte de 341 hectares au cœur de Manhattan</li>
                <li><strong>Times Square</strong> - Carrefour lumineux du monde, cœur palpitant de NYC</li>
                <li><strong>Empire State Building</strong> - Vue panoramique depuis le 86e étage (381m)</li>
                <li><strong>Brooklyn Bridge</strong> - Pont suspendu historique avec vue sur skyline</li>
                <li><strong>Metropolitan Museum (Met)</strong> - L'un des plus grands musées d'art au monde</li>
                <li><strong>9/11 Memorial</strong> - Mémorial émouvant des attentats du 11 septembre</li>
                <li><strong>High Line</strong> - Parc suspendu sur ancienne voie ferrée</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Quartiers emblématiques</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Manhattan</strong> - Cœur économique et culturel, gratte-ciels et musées</li>
                <li><strong>Brooklyn</strong> - Quartier artistique et branché, cafés hipsters et galleries</li>
                <li><strong>SoHo</strong> - Architecture cast-iron, boutiques de luxe et galleries d'art</li>
                <li><strong>Greenwich Village</strong> - Quartier bohème avec jazz clubs et rues pavées</li>
                <li><strong>Williamsburg</strong> - Brooklyn hipster, street art et rooftops bars</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Traverser le Brooklyn Bridge au lever du soleil</li>
                <li>Assister à un spectacle de Broadway (Hamilton, Le Roi Lion, Wicked)</li>
                <li>Pique-niquer dans Central Park (Sheep Meadow ou Great Lawn)</li>
                <li>Monter au Top of the Rock au coucher du soleil</li>
                <li>Explorer les musées un jour de pluie (Met, MoMA, Natural History)</li>
                <li>Manger une vraie pizza new-yorkaise (Joe's Pizza, Prince Street Pizza)</li>
                <li>Se balader dans le High Line jusqu'à Chelsea Market</li>
                <li>Voir la Statue de la Liberté depuis le Staten Island Ferry (gratuit)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-novembre (climat agréable, moins de touristes)<br />
                <strong>Langue :</strong> Anglais (mais 800 langues parlées dans la ville)<br />
                <strong>Monnaie :</strong> Dollar américain (USD) - 1€ = ~1.10 USD<br />
                <strong>Transport :</strong> Métro 24/7 (MetroCard), taxis jaunes, marche à pied<br />
                <strong>Budget :</strong> Ville chère (hôtel 150-300€/nuit, repas 15-30$, attractions 30-40$)<br />
                <strong>Durée conseillée :</strong> 5-7 jours minimum (2 semaines idéal)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🎫 Acheter le New York CityPASS pour économiser sur attractions principales<br />
                🚇 Métro 24/7 est le moyen le plus efficace (MetroCard à 34$ pour 7 jours illimités)<br />
                🎭 Billets Broadway moins chers avec TKTS booth (jusqu'à -50%)<br />
                🗽 Staten Island Ferry est gratuit et passe devant Statue de la Liberté<br />
                🍕 Pizza by the slice est le repas rapide et pas cher ($3-4 la part)<br />
                📸 Top of the Rock offre meilleure vue que Empire State (vous voyez l'Empire State)<br />
                🏨 Loger à Brooklyn ou Queens est moins cher qu'à Manhattan<br />
                🎨 Musées ont des horaires "pay what you wish" certains jours
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>New York-style pizza</strong> - Part géante fine et pliée, culte absolu</li>
                <li><strong>Bagel with lox</strong> - Bagel au saumon fumé, cream cheese, typical NYC breakfast</li>
                <li><strong>Pastrami sandwich</strong> - Katz's Delicatessen, iconique depuis 1888</li>
                <li><strong>Hot dog</strong> - Gray's Papaya ou vendeurs de rue à tout coin</li>
                <li><strong>Cheesecake</strong> - Junior's Brooklyn cheesecake, le meilleur</li>
                <li><strong>Black & white cookie</strong> - Biscuit moitié chocolat moitié vanille</li>
                <li><strong>Shake Shack burger</strong> - Chaîne née à NYC, burgers premium</li>
                <li><strong>Cronuts</strong> - Hybride croissant-donut de Dominique Ansel Bakery</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Manhattan & Times Square */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1543716091-a840c05249ec?w=1200&q=80"
                      alt="Times Square, Manhattan"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Iconique</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Manhattan & Times Square</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le cœur battant du monde</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Manhattan est l'île légendaire qui incarne New York dans l'imaginaire collectif, un rectangle de
                        59 km² où se concentrent gratte-ciels vertigineux, sièges sociaux de multinationales, théâtres de
                        Broadway et musées de renommée mondiale. Times Square en est l'épicentre chaotique et fascinant :
                        un carrefour où convergent 300 000 personnes par jour, submergées par les écrans géants lumineux,
                        les artistes de rue costumés, les vendeurs de hot-dogs et l'énergie électrique typiquement
                        new-yorkaise qui pulse 24/7.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Se tenir au milieu de Times Square, entouré de gratte-ciels tapissés d'écrans publicitaires géants
                        diffusant mille couleurs simultanément, c'est ressentir l'essence même du capitalisme américain et
                        de la culture de masse. Bien que ultra-touristique, l'expérience reste incontournable et
                        particulièrement magique la nuit, quand les néons transforment le carrefour en un Las Vegas urbain.
                        De là, on rayonne vers Broadway pour un musical, le MoMA pour l'art moderne, ou Central Park pour
                        une parenthèse nature à deux pas du chaos.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Broadway</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Shopping</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Central Park */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Central Park"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Central Park</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">L'oasis verte au cœur du béton</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Central Park est le poumon vert de Manhattan, un rectangle de 341 hectares minutieusement paysagé
                        qui offre une bulle de nature au milieu des gratte-ciels. Créé artificiellement au XIXe siècle,
                        ce parc iconique est devenu le terrain de jeu préféré des New-Yorkais : joggeurs matinaux,
                        familles pique-niquant sur Sheep Meadow, musiciens de rue près de Bethesda Fountain, et touristes
                        cherchant le banc de la scène culte de "When Harry Met Sally". Le contraste entre les pelouses
                        verdoyantes et les tours de verre qui bordent le parc est saisissant.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Louer un vélo et longer les 10 km du parc permet d'en saisir l'immensité : on traverse lacs
                        artificiels peuplés de canards, ponts romantiques en pierre, aires de jeux animées et même un
                        château médiéval (Belvedere Castle). L'automne, quand les 26 000 arbres se parent de rouge et d'or,
                        Central Park devient un tableau impressionniste vivant. L'été, les concerts gratuits de
                        Summerstage attirent des milliers de New-Yorkais venus danser sur l'herbe. Un havre de paix
                        indispensable pour respirer entre deux visites de musées.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vélo</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Détente</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Brooklyn & Brooklyn Bridge */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1513026705753-bc3fffca8bf4?w=1200&q=80"
                      alt="Brooklyn Bridge"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Panorama</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Brooklyn & Brooklyn Bridge</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le borough créatif et authentique</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Brooklyn, jadis ville indépendante avant son annexion en 1898, est devenu le borough le plus cool
                        et artistique de NYC, incarnant l'esprit créatif et multiculturel de la ville. Le mythique Brooklyn
                        Bridge, pont suspendu inauguré en 1883, relie Manhattan à Brooklyn en offrant l'une des plus belles
                        vues de la skyline new-yorkaise. Traverser ses 1,8 km à pied au lever du soleil, quand la lumière
                        dorée caresse les gratte-ciels et que les câbles du pont dessinent des toiles géométriques, est
                        une expérience incontournable du voyage à NYC.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Une fois à Brooklyn, on découvre un univers totalement différent de Manhattan : Dumbo et ses rues
                        pavées bordées de warehouses reconvertis, Williamsburg et ses cafés hipsters, rooftop bars et
                        friperies vintage, ou encore le gigantesque Prospect Park qui fait de l'ombre à Central Park.
                        Le weekend, le Smorgasburg food market attire les gourmets avec ses stands de street food créative.
                        Brooklyn, c'est le New York authentique où vivent les jeunes créatifs, artistes et familles qui ont
                        fui les prix exorbitants de Manhattan tout en gardant l'énergie unique de la Big Apple.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Hipster</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Art</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Statue de la Liberté */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1485871981521-5b1fd3805eee?w=1200&q=80"
                      alt="Statue de la Liberté"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Monument</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Statue de la Liberté</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Symbole universel de liberté et d'immigration</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        La Statue de la Liberté, colossale sculpture de 93 mètres offerte par la France en 1886, est bien
                        plus qu'un monument touristique : c'est le symbole universel de la liberté et du rêve américain,
                        la première vision des millions d'immigrants arrivant par bateau à Ellis Island au début du XXe
                        siècle. Lady Liberty, torche brandie vers le ciel, incarnait l'espoir d'une vie meilleure pour
                        ces familles fuyant pauvreté et persécutions. Aujourd'hui encore, elle reste l'icône la plus
                        reconnaissable des États-Unis.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Accéder à Liberty Island en ferry permet d'admirer la statue de près et de monter jusqu'au piédestal
                        (ou même dans la couronne avec réservation anticipée). Le musée adjacent retrace l'histoire de la
                        construction et de l'immigration américaine. Astuce budget : le Staten Island Ferry gratuit passe
                        à proximité de la statue et offre une vue correcte pour les photos, sans le coût et les files
                        d'attente. Combiner avec Ellis Island, musée émouvant de l'immigration, complète parfaitement la
                        visite en plongeant dans l'histoire humaine de l'Amérique.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Symbolique</span>
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
              Retour aux États-Unis
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations américaines et leurs merveilles.
            </p>
            <Link
              href="/blog/ameriques/etats-unis"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer les États-Unis
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
