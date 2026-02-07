'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function IstanbulPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Istanbul</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Pont entre deux continents, où l'Orient rencontre l'Occident dans une symphonie de cultures.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Istanbul</h2>
              <p className="text-gray-700 mb-6">
                Istanbul, ancienne Constantinople et Byzance, est une ville fascinante qui s'étend sur deux continents,
                séparée par le majestueux détroit du Bosphore. Entre mosquées ottomanes aux dômes étincelants,
                palais somptueux aux trésors inestimables et bazars animés aux mille couleurs, la ville offre une
                expérience unique mêlant traditions ancestrales et modernité dynamique. Chaque quartier raconte
                une histoire millénaire, des empires byzantin et ottoman à la République turque moderne.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Sainte-Sophie (Ayasofya)</strong> - Chef-d'œuvre byzantin devenu mosquée, symbole de la ville</li>
                <li><strong>Mosquée Bleue (Sultan Ahmed)</strong> - Splendeur de l'architecture ottomane avec 6 minarets</li>
                <li><strong>Grand Bazar (Kapalı Çarşı)</strong> - Plus ancien marché couvert du monde, 4000 boutiques</li>
                <li><strong>Palais de Topkapi</strong> - Résidence des sultans ottomans pendant 400 ans</li>
                <li><strong>Bosphore</strong> - Croisière sur le détroit séparant l'Europe et l'Asie</li>
                <li><strong>Basilique Citerne</strong> - Cathédrale souterraine aux colonnes mystérieuses</li>
                <li><strong>Galata & Taksim</strong> - Quartiers modernes, vie nocturne et street art</li>
                <li><strong>Îles aux Princes</strong> - Escapade paisible en mer de Marmara</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Quartiers emblématiques</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Sultanahmet</strong> - Cœur historique avec les monuments principaux</li>
                <li><strong>Beyoğlu</strong> - Quartier bohème, galeries d'art et cafés branchés</li>
                <li><strong>Kadiköy</strong> - Côté asiatique authentique et marchés locaux</li>
                <li><strong>Ortaköy</strong> - Village au pied du pont du Bosphore, cafés et kumpir</li>
                <li><strong>Balat</strong> - Ancien quartier juif aux maisons colorées Instagram</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Regarder le coucher de soleil depuis la tour de Galata</li>
                <li>Prendre un çay au bord du Bosphore à Ortaköy</li>
                <li>Se perdre dans les ruelles du Grand Bazar</li>
                <li>Assister à un spectacle de derviches tourneurs</li>
                <li>Faire un hammam traditionnel</li>
                <li>Déguster un balık ekmek (sandwich au poisson) à Eminönü</li>
                <li>Traverser le Bosphore en ferry public</li>
                <li>Explorer les cafés cachés de Balat</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-mai et septembre-octobre (climat doux, moins de touristes)<br />
                <strong>Langue :</strong> Turc (anglais parlé dans les zones touristiques)<br />
                <strong>Monnaie :</strong> Livre turque (₺)<br />
                <strong>Transport :</strong> Métro, tramway, ferry (Istanbulkart obligatoire)<br />
                <strong>Visa :</strong> E-visa en ligne obligatoire<br />
                <strong>Durée conseillée :</strong> 4-5 jours minimum
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🎫 Achetez une Istanbulkart dès l'aéroport (transports illimités)<br />
                🕌 Visitez les mosquées tôt le matin pour éviter la foule<br />
                🍵 Ne manquez pas un petit-déjeuner turc (kahvaltı) complet<br />
                🛍️ Négociez dans les bazars, les prix affichés sont souvent 2-3x plus élevés<br />
                🚢 Le ferry public est le meilleur moyen de découvrir le Bosphore<br />
                📸 Balat et ses maisons colorées sont parfaites pour les photos<br />
                🌙 Le Ramadan change l'atmosphère de la ville (vérifiez les dates)<br />
                🏨 Logez à Sultanahmet pour les sites ou Beyoğlu pour l'ambiance
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Döner & Kebab</strong> - Authentiques, loin des versions européennes</li>
                <li><strong>Balık ekmek</strong> - Sandwich au maquereau grillé, spécialité d'Eminönü</li>
                <li><strong>Kumpir</strong> - Pomme de terre géante garnie, à Ortaköy</li>
                <li><strong>Simit</strong> - Couronne de pain aux graines de sésame</li>
                <li><strong>Baklava</strong> - Pâtisserie au miel et pistaches de Karaköy Güllüoğlu</li>
                <li><strong>Lokum</strong> - Loukoums turcs traditionnels</li>
                <li><strong>Çay</strong> - Thé turc servi dans des verres tulipes</li>
                <li><strong>Türk Kahvesi</strong> - Café turc moulu très fin</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Quartiers explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Sultanahmet */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80"
                      alt="Sultanahmet"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Histoire</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Sultanahmet</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Cœur historique d'Istanbul</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le quartier de Sultanahmet est le cœur historique d'Istanbul, où chaque pierre raconte mille ans d'histoire.
                        C'est ici que se concentrent les monuments les plus emblématiques de la ville : la majestueuse Sainte-Sophie
                        avec ses dômes imposants, la Mosquée Bleue aux six minarets élancés, et le somptueux Palais de Topkapi.
                      </p>
                      <p className="text-gray-700 mb-4">
                        En déambulant dans ses ruelles pavées, on découvre la Basilique Citerne, cathédrale souterraine aux colonnes
                        mystérieuses, et l'Hippodrome byzantin où se déroulaient autrefois courses de chars et cérémonies impériales.
                        L'atmosphère unique de Sultanahmet mêle touristes émerveillés et vendeurs de simit dans une ambiance à la fois
                        grandiose et authentique.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Monuments</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Beyoğlu */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=80"
                      alt="Beyoğlu"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Moderne</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Beyoğlu</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le quartier bohème et branché</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Beyoğlu incarne l'Istanbul moderne et créative. Son artère principale, l'avenue Istiklal, est une rue piétonne
                        effervescente où se mêlent boutiques de mode, librairies indépendantes, pâtisseries traditionnelles et cafés
                        branchés. Le tramway nostalgique rouge serpente au milieu de la foule cosmopolite.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Dominant le quartier, la tour de Galata offre une vue panoramique époustouflante sur la ville et le Bosphore.
                        Les ruelles adjacentes regorgent de galeries d'art contemporain, de bars à vin cachés et de restaurants
                        fusion. Le soir, Beyoğlu s'anime avec sa vie nocturne légendaire, des concerts de jazz aux clubs underground.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Art</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Shopping</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Balat */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1576844940033-17f7bad7f063?w=1200&q=80"
                      alt="Balat"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Photogénique</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Balat</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le quartier aux maisons arc-en-ciel</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Balat est l'ancien quartier juif d'Istanbul, devenu célèbre pour ses maisons colorées qui dévalent les ruelles
                        pentues jusqu'à la Corne d'Or. Rouge vif, jaune canari, bleu azur : chaque façade est une explosion de couleurs
                        qui fait le bonheur des photographes et influenceurs du monde entier.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Mais Balat, c'est bien plus qu'un décor Instagram. C'est un quartier vivant où l'histoire se lit à chaque coin
                        de rue : églises orthodoxes grecques, synagogues séfarades, mosquées ottomanes cohabitent harmonieusement.
                        Les cafés bohèmes se sont installés dans les anciennes maisons, proposant lattes artistiques et brunchs créatifs
                        dans une ambiance hipster authentique.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Photos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bosphore */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80"
                      alt="Bosphore"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Bosphore</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le détroit entre deux continents</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le Bosphore est bien plus qu'un simple détroit : c'est l'âme d'Istanbul, la ligne magique qui sépare l'Europe
                        de l'Asie. Sur ses rives se succèdent palais ottomans aux yali en bois précieux, mosquées aux minarets élancés,
                        forteresses médiévales et villages de pêcheurs préservés du temps.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Une croisière sur le Bosphore au coucher du soleil est un incontournable absolu. À bord d'un ferry public
                        bondé de locaux ou d'un bateau privé plus intimiste, on contemple Istanbul sous son plus beau jour : la lumière
                        dorée caressant les dômes, les mouettes qui dansent dans le sillage du bateau, et cette sensation unique
                        de naviguer entre deux continents en quelques minutes.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Ferry</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Paysages</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Grand Bazar */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1578408990219-33d6ee39fe8c?w=1200&q=80"
                      alt="Grand Bazar"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Shopping</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Grand Bazar</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le labyrinthe aux 4000 boutiques</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Entrer dans le Grand Bazar (Kapalı Çarşı), c'est plonger dans un monde à part, une caverne d'Ali Baba
                        géante où scintillent tapis persans, lampes en mosaïque, bijoux en or et épices multicolores. Avec ses
                        61 rues couvertes et plus de 4000 boutiques, c'est le plus ancien et le plus grand marché couvert du monde,
                        un labyrinthe envoûtant où il est presque obligatoire de se perdre.
                      </p>
                      <p className="text-gray-700 mb-4">
                        L'art de la négociation est roi ici : les commerçants vous accueillent avec un çay brûlant et le prix affiché
                        n'est qu'une suggestion. Entre deux négociations acharnées pour un kilim anatolien, on admire les plafonds
                        voûtés ottomans et l'effervescence d'un commerce vieux de 500 ans qui n'a jamais cessé de vibrer.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Artisanat</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Tradition</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kadiköy */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1200&q=80"
                      alt="Kadiköy"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Kadiköy</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">L'Istanbul authentique de la rive asiatique</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Traverser le Bosphore pour rejoindre Kadiköy, c'est découvrir l'Istanbul des Stambouliotes, loin de l'agitation
                        touristique de Sultanahmet. Ce quartier de la rive asiatique pulse au rythme d'une vie locale authentique :
                        marchés de quartier débordant de produits frais, vendeurs de balık ekmek (sandwichs au poisson) sur le port,
                        et cafés où les habitués jouent au backgammon en sirotant leur çay.
                      </p>
                      <p className="text-gray-700 mb-4">
                        La rue commerçante de Bahariye regorge de boutiques vintage, librairies alternatives et pâtisseries artisanales.
                        L'ambiance y est résolument bohème et décontractée, avec des murals de street art à chaque coin de rue. Le soir,
                        les meyhane (tavernes) se remplissent pour des soirées rakı-meze arrosées, dans une atmosphère conviviale
                        typiquement locale. Kadiköy, c'est l'Istanbul sans filtre, tel que le vivent ses habitants.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Local</span>
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
              Retour en Turquie
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations turques et leurs merveilles.
            </p>
            <Link
              href="/blog/europe/turquie"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer la Turquie
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
