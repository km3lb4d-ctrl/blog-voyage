'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function SanAndresPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">San Andrés</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Mer aux sept couleurs, îlot caribéen où le bleu se décline à l'infini.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir San Andrés</h2>
              <p className="text-gray-700 mb-6">
                San Andrés est une petite île caribéenne colombienne située à 700 km des côtes, plus proche du Nicaragua
                que du continent sud-américain. Célèbre pour sa "mer aux sept couleurs" qui offre des dégradés de bleu
                spectaculaires allant du turquoise pâle au bleu profond, cette île de 26 km² est un paradis tropical
                méconnu. La culture raizal unique, mélange d'influences afro-caribéennes, anglaises et colombiennes,
                se manifeste dans la musique reggae omniprésente, le créole local et l'architecture colorée aux toits
                de tôle. Entre plages de sable blanc immaculé, cayos (îlots) paradisiaques accessibles en bateau-taxi,
                récifs coralliens exceptionnels pour la plongée, et ambiance décontractée typiquement caribéenne, San
                Andrés offre un dépaysement total dans une Colombie loin des clichés andins.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Johnny Cay</strong> - Îlot paradisiaque de sable blanc, ambiance reggae et plage idyllique</li>
                <li><strong>Acuario & Haynes Cay</strong> - Snorkeling avec raies, poissons tropicaux dans eau cristalline</li>
                <li><strong>Hoyo Soplador</strong> - Geyser naturel jaillissant spectaculairement entre les rochers</li>
                <li><strong>West View</strong> - Saut de falaise, snorkeling et bar flottant</li>
                <li><strong>Rocky Cay</strong> - Formation rocheuse, snorkeling et plage tranquille</li>
                <li><strong>Cueva de Morgan</strong> - Grotte du pirate Henry Morgan (légende locale)</li>
                <li><strong>Providencia</strong> - Île sœur plus sauvage et authentique (vol 20 min)</li>
                <li><strong>Tour de l'île en golf cart</strong> - Faire le tour complet en 2-3h</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Plages et cayos</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Playa Spratt Bight</strong> - Plage principale, animée et accessible</li>
                <li><strong>San Luis</strong> - Côte est plus calme, eau turquoise et moins de touristes</li>
                <li><strong>Johnny Cay</strong> - Îlot avec cocotiers, musique reggae et nourriture locale</li>
                <li><strong>Acuario</strong> - Piscine naturelle peu profonde, raies apprivoisées</li>
                <li><strong>Haynes Cay</strong> - Mangrove et récifs coralliens pour snorkeling</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Louer un golf cart pour explorer l'île à son rythme</li>
                <li>Faire du snorkeling à l'Acuario avec les raies</li>
                <li>Sauter de la falaise de West View (3-7 mètres)</li>
                <li>Pique-niquer sur Johnny Cay avec un coconut rice</li>
                <li>Assister au coucher de soleil sur la mer aux sept couleurs</li>
                <li>Plonger ou faire du snorkeling sur les récifs (visibilité 30m)</li>
                <li>Goûter le rondón, plat traditionnel raizal</li>
                <li>Danser sur de la musique reggae dans les bars de plage</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-avril (saison sèche), éviter septembre-novembre (ouragans)<br />
                <strong>Langue :</strong> Espagnol et créole sanandresano (anglais compris)<br />
                <strong>Monnaie :</strong> Peso colombien (COP) - 1€ = ~4500 COP<br />
                <strong>Climat :</strong> Chaud toute l'année (27-30°C), alizés rafraîchissants<br />
                <strong>Transport :</strong> Golf cart (40-50€/jour), scooter, vélo, bateau-taxi pour cayos<br />
                <strong>Accès :</strong> Vol depuis Bogotá (2h) ou Carthagène (1h15) - Taxe touristique 120 000 COP à l'arrivée<br />
                <strong>Durée conseillée :</strong> 3-4 jours (5-7 jours avec Providencia)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🏝️ Privilégier Providencia si vous cherchez authenticité (San Andrés très touristique)<br />
                🚗 Louer un golf cart dès l'arrivée pour explorer l'île librement<br />
                🤿 Apporter masque et tuba (location chère et qualité moyenne)<br />
                💰 La taxe touristique (30€) est obligatoire à l'aéroport, prévoir cash<br />
                🏖️ Les excursions cayos (Johnny Cay, Acuario) valent vraiment le coup<br />
                🌅 Côte est (San Luis) moins touristique et plus belle que Spratt Bight<br />
                🍹 L'eau de coco fraîche à 2000 COP est la meilleure boisson<br />
                ⚠️ Éviter achats duty-free sur l'île (pas vraiment moins cher qu'ailleurs)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Rondón</strong> - Ragoût traditionnel raizal au lait de coco, poisson et tubercules</li>
                <li><strong>Coconut rice</strong> - Riz cuit au lait de coco, accompagnement de base</li>
                <li><strong>Crab soup</strong> - Soupe de crabe épicée, spécialité locale</li>
                <li><strong>Fried fish</strong> - Poisson frit entier servi avec patacones et salades</li>
                <li><strong>Plantain tart</strong> - Tarte sucrée à la banane plantain</li>
                <li><strong>Coconut balls</strong> - Boules de coco sucrées</li>
                <li><strong>Coco loco</strong> - Noix de coco garnie de rhum, cocktail typique</li>
                <li><strong>Aguapanela con limón</strong> - Boisson au sucre de canne et citron</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Locations Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* La Mer aux 7 couleurs */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Mer aux sept couleurs, San Andrés"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">La Mer aux Sept Couleurs</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Un phénomène naturel spectaculaire</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        La "mer aux sept couleurs" (el mar de los siete colores) est le trésor naturel de San Andrés,
                        un phénomène visuel époustouflant créé par les différentes profondeurs de l'eau, la clarté
                        cristalline, le fond de sable blanc et les récifs coralliens. Selon l'angle du soleil et la
                        profondeur, la mer se pare de nuances infinies : turquoise pâle dans les lagons peu profonds,
                        vert émeraude sur les herbiers, bleu azur au-dessus du sable blanc, et bleu profond indigo
                        là où le récif plonge dans l'abyme.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le meilleur endroit pour admirer ce spectacle naturel est depuis la côte est de l'île, notamment
                        à San Luis où l'eau peu profonde crée des dégradés particulièrement photogéniques. Au lever et
                        au coucher du soleil, la lumière rasante transforme la mer en un tableau impressionniste vivant
                        qui change de minute en minute. Les locaux aiment dire qu'on ne voit jamais deux fois la même
                        mer à San Andrés, tant les variations de couleurs sont infinies selon la météo, l'heure et la saison.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Paysage</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Photos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Johnny Cay */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1506953823976-52e1fdc0149a?w=1200&q=80"
                      alt="Johnny Cay"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Îlot</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Johnny Cay</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">L'îlot paradisiaque emblématique</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Johnny Cay est le petit îlot de carte postale situé à seulement 15 minutes en bateau de San Andrés,
                        une minuscule île de sable blanc bordée de cocotiers penchés et entourée d'une eau turquoise
                        cristalline. Cet îlot d'un hectare à peine est devenu l'emblème touristique de San Andrés, le lieu
                        où tout visiteur doit absolument se rendre pour vivre l'expérience caribéenne authentique. L'ambiance
                        y est festive et décontractée : musique reggae diffusée par les sound systems, vendeurs ambulants
                        proposant noix de coco fraîches et bijoux artisanaux, et familles colombiennes venues pique-niquer.
                      </p>
                      <p className="text-gray-700 mb-4">
                        On y vient pour se prélasser sur la plage de sable fin, nager dans une eau à 28°C, déguster un
                        coconut rice ou un poisson grillé les pieds dans le sable, et profiter de l'atmosphère insouciante
                        typiquement caribéenne. Le week-end, Johnny Cay se transforme en fête improvisée où locaux et
                        touristes dansent au rythme du reggaeton et du calypso. Le retour en bateau-taxi au coucher du
                        soleil, avec la silhouette de San Andrés se découpant sur le ciel orangé, est un moment magique
                        qui résume à lui seul l'esprit de cette île hors du temps.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plage</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Reggae</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Acuario & Haynes Cay */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                      alt="Acuario"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Snorkeling</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Acuario & Haynes Cay</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Piscine naturelle et snorkeling paradisiaque</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        L'Acuario (aquarium naturel) et Haynes Cay forment un duo d'îlots connectés par une passe peu
                        profonde, situés au large de la côte est de San Andrés. L'Acuario porte bien son nom : c'est une
                        piscine naturelle peu profonde (50 cm à 1,5 m) aux eaux cristallines où évoluent librement des
                        centaines de poissons tropicaux multicolores et des raies apprivoisées qui viennent manger dans
                        la main des visiteurs. Marcher dans cette eau turquoise translucide entouré de poissons qui
                        frôlent vos jambes est une expérience magique, presque surréaliste.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Haynes Cay, accessible à pied depuis l'Acuario à marée basse, est une petite mangrove entourée de
                        récifs coralliens parfaits pour le snorkeling. La visibilité exceptionnelle (souvent 20-30 mètres)
                        permet d'observer coraux cerveau, éponges géantes, poissons-perroquets, poissons-anges et parfois
                        même tortues marines. Des restaurants flottants proposent du poisson grillé et de la langouste
                        fraîche. L'excursion combinée Acuario-Haynes Cay est l'activité incontournable de San Andrés, un
                        condensé de paradis tropical accessible en 20 minutes de bateau depuis la plage principale.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Faune marine</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* West View */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1582968823926-a696965a4f87?w=1200&q=80"
                      alt="West View"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Aventure</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">West View</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Cliff jumping et snorkeling sensationnel</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        West View est l'un des spots les plus spectaculaires de San Andrés, une formation rocheuse naturelle
                        aménagée en plateforme de saut où les visiteurs peuvent plonger dans une eau turquoise profonde
                        depuis différentes hauteurs (3, 5 ou 7 mètres). L'adrénaline du saut se combine avec le plaisir
                        du snorkeling : une fois dans l'eau, on nage au-dessus d'un récif corallien somptueux qui s'enfonce
                        progressivement dans le bleu profond, créant un effet vertigineux et fascinant.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le site dispose d'un bar flottant où l'on peut siroter une coco loco (cocktail au rhum servi dans
                        une noix de coco) entre deux plongeons. La visibilité exceptionnelle permet d'observer facilement
                        la vie sous-marine : bancs de sergents-majors rayés, poissons-perroquets grignotant le corail,
                        barracudas argentés patrouillant au large. L'eau y est profonde (10-15 mètres) et d'un bleu intense
                        hypnotique. West View combine parfaitement sensations fortes, beauté naturelle et ambiance festive
                        caribéenne, en faisant l'un des stops incontournables du tour de l'île en golf cart.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plongée</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Fun</span>
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
