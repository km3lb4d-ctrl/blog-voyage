'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MiamiPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Miami</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Métropole ensoleillée où l'Art Déco rencontre la culture latine dans une explosion de couleurs tropicales.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Miami</h2>
              <p className="text-gray-700 mb-6">
                Miami, perle de la Floride baignée de soleil toute l'année, est une ville unique où l'influence latine
                se mêle à la culture américaine pour créer une atmosphère électrique et cosmopolite. Entre plages
                de sable blanc bordées de palmiers, architecture Art Déco aux façades pastel, quartier cubain vibrant
                de Little Havana, street art monumental de Wynwood et vie nocturne légendaire, Miami incarne le rêve
                américain version tropicale. C'est une ville qui ne dort jamais, où la fête bat son plein de South Beach
                à Brickell, et où chaque quartier raconte une histoire différente de ce melting-pot culturel fascinant.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>South Beach</strong> - Plage mythique avec bâtiments Art Déco colorés et Ocean Drive</li>
                <li><strong>Wynwood Walls</strong> - Quartier de street art mondialement reconnu avec murals géantes</li>
                <li><strong>Little Havana</strong> - Cœur de la communauté cubaine sur Calle Ocho</li>
                <li><strong>Vizcaya Museum & Gardens</strong> - Villa Renaissance italienne avec jardins somptueux</li>
                <li><strong>Art Déco Historic District</strong> - Plus grande concentration de bâtiments Art Déco au monde</li>
                <li><strong>Brickell</strong> - Quartier financier moderne avec gratte-ciels et restaurants branchés</li>
                <li><strong>Everglades National Park</strong> - Parc national avec airboats et alligators (40 min)</li>
                <li><strong>Key Biscayne</strong> - Île paradisiaque avec plages tranquilles et phare historique</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Quartiers emblématiques</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>South Beach</strong> - Plages, Art Déco, vie nocturne et ambiance glamour</li>
                <li><strong>Wynwood</strong> - Galeries d'art, street art, cafés hipster et brasseries artisanales</li>
                <li><strong>Little Havana</strong> - Culture cubaine authentique, cigares et dominos</li>
                <li><strong>Design District</strong> - Boutiques de luxe, galeries d'art contemporain et architecture audacieuse</li>
                <li><strong>Coconut Grove</strong> - Quartier bohème avec végétation luxuriante et marina</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Regarder le coucher de soleil depuis South Pointe Park</li>
                <li>Prendre un café cubain (cafecito) à Little Havana</li>
                <li>Se balader le long d'Ocean Drive au coucher du soleil</li>
                <li>Explorer Wynwood Walls et ses murals géantes</li>
                <li>Faire un tour en airboat dans les Everglades</li>
                <li>Bruncher à Lincoln Road le dimanche</li>
                <li>Danser la salsa dans les clubs de Little Havana</li>
                <li>Nager avec les dauphins à Key Biscayne</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (éviter chaleur écrasante et risque d'ouragans en été)<br />
                <strong>Langue :</strong> Anglais et espagnol (ville bilingue)<br />
                <strong>Monnaie :</strong> Dollar américain ($)<br />
                <strong>Transport :</strong> Location de voiture recommandée, Metromover gratuit downtown, Metrorail, bus<br />
                <strong>Visa :</strong> ESTA obligatoire pour ressortissants français<br />
                <strong>Durée conseillée :</strong> 4-5 jours minimum
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🚗 Louez une voiture décapotable pour vivre l'expérience Miami à fond<br />
                🏖️ South Beach est bondée le week-end, préférez les matins en semaine<br />
                🎨 Visitez Wynwood le samedi soir pour le Second Saturday Art Walk<br />
                🌮 Ne manquez pas un authentique sandwich cubain chez Versailles<br />
                🛍️ Lincoln Road pour le shopping, Aventura Mall pour le luxe<br />
                📸 Les bâtiments Art Déco sont magnifiques au golden hour<br />
                🌴 Key Biscayne est parfaite pour échapper à l'agitation urbaine<br />
                🎉 La vie nocturne démarre tard (minuit), prévoyez des nuits blanches
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Cuban Sandwich</strong> - Sandwich cubain au porc rôti, jambon et cornichons pressé</li>
                <li><strong>Stone Crabs</strong> - Pinces de crabe de pierre, spécialité locale (oct-mai)</li>
                <li><strong>Cafecito</strong> - Café cubain très sucré et fort servi en petites doses</li>
                <li><strong>Ceviche</strong> - Poisson mariné dans le citron vert, influence péruvienne</li>
                <li><strong>Key Lime Pie</strong> - Tarte au citron vert, dessert emblématique de Floride</li>
                <li><strong>Ropa Vieja</strong> - Bœuf effiloché mijoté, plat cubain traditionnel</li>
                <li><strong>Tostones</strong> - Bananes plantain frites et écrasées</li>
                <li><strong>Empanadas</strong> - Chaussons fourrés viande ou fromage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Quartiers explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* South Beach */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1533106497176-45ae19e68ba2?w=1200&q=80"
                      alt="South Beach Miami"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Art Déco</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">South Beach</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le cœur glamour de Miami</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        South Beach incarne tout ce qu'on imagine de Miami : plages de sable blanc bordées de palmiers,
                        bâtiments Art Déco aux façades pastel (rose, turquoise, jaune citron), et une énergie vibrante
                        qui pulse jour et nuit. Ocean Drive, l'artère mythique, est bordée de terrasses où mannequins,
                        célébrités et touristes sirotent des cocktails en regardant défiler décapotables et rollers.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le quartier historique Art Déco concentre la plus grande collection d'architecture Art Déco au monde,
                        avec plus de 800 bâtiments préservés datant des années 1930-1940. Le soir, les néons illuminent
                        les façades et les clubs ouvrent leurs portes pour une vie nocturne légendaire. La plage elle-même
                        est un spectacle permanent : bodybuilders à Muscle Beach, joueurs de volley, stands de location
                        de jet-ski et sauveteurs dans leurs cabanes colorées iconiques.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plage</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vie nocturne</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Wynwood */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1583039646592-253cb6629cbc?w=1200&q=80"
                      alt="Wynwood Walls Miami"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Street Art</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Wynwood</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La galerie d'art à ciel ouvert</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Wynwood est un ancien quartier industriel transformé en véritable musée d'art urbain à ciel ouvert.
                        Les Wynwood Walls, créées en 2009, ont attiré les plus grands street artists du monde entier :
                        Shepard Fairey, Os Gemeos, Banksy... Chaque mur, chaque entrepôt, chaque ruelle est une explosion
                        de couleurs et de créativité, avec des murals géantes qui racontent des histoires politiques,
                        sociales ou simplement visuellement époustouflantes.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Au-delà du street art, Wynwood s'est transformé en quartier hipster bourdonnant de vie : galeries d'art
                        contemporain dans d'anciens entrepôts, brasseries artisanales dans des espaces industriels reconvertis,
                        restaurants fusion créatifs et boutiques de designers locaux. Le soir, le quartier s'anime avec ses
                        bars à cocktails tendance et ses food halls où l'on grignote des tacos gourmet en admirant les œuvres
                        illuminées. Le Second Saturday Art Walk transforme le quartier en fête géante une fois par mois.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Art</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Hipster</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Little Havana */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1605106702842-01a887a31122?w=1200&q=80"
                      alt="Little Havana Miami"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Culture</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Little Havana</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le cœur cubain de Miami</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Little Havana est le quartier où bat le cœur de la communauté cubaine de Miami. Sur Calle Ocho
                        (8ème rue), l'artère principale, on entre dans un autre monde : musique salsa qui s'échappe des
                        boutiques, fumée de cigares roulés à la main, vieillards jouant aux dominos au Domino Park sous
                        les arbres, et murals colorées célébrant l'héritage cubain. Ici, l'espagnol domine l'anglais,
                        et l'ambiance est résolument tropicale et festive.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Les institutions locales racontent l'histoire de l'exil cubain : le restaurant Versailles, véritable
                        institution où se retrouve la communauté pour débattre politique autour d'un cafecito, les fabriques
                        de cigares où les torcedores roulent à la main comme à La Havane, et les galeries d'art célébrant
                        la culture afro-caribéenne. Le Viernes Culturales (Cultural Fridays), dernier vendredi de chaque mois,
                        transforme Calle Ocho en festival de rue avec concerts live, danse et gastronomie. Little Havana,
                        c'est Cuba à 90 miles de La Havane, une enclave culturelle vibrante et authentique.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Cubain</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Design District */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1556740758-90de374c12ad?w=1200&q=80"
                      alt="Miami Design District"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Luxe</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Design District</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le temple du luxe et du design</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Miami Design District est le quartier où le luxe, l'art et l'architecture se rencontrent pour
                        créer une expérience shopping haut de gamme unique. Ancienne zone industrielle transformée en
                        destination de luxe, le quartier aligne les boutiques des plus grandes maisons : Hermès, Louis Vuitton,
                        Dior, Prada... Mais contrairement aux malls traditionnels, ici l'architecture elle-même est une œuvre
                        d'art avec des bâtiments avant-gardistes signés par des architectes de renom.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Entre deux sessions shopping, on découvre des installations d'art public monumentales : sculptures
                        contemporaines, murals géantes, et le Museum Garage, parking de sept étages où chaque niveau a été
                        conçu par un collectif d'architectes différent. Les restaurants gastronomiques du quartier attirent
                        les foodies avec des cuisines fusion créatives et des terrasses design. Le soir, l'éclairage
                        architectural transforme le quartier en galerie d'art illuminée, parfaite pour une balade nocturne
                        entre art, mode et architecture.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Shopping</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Architecture</span>
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
