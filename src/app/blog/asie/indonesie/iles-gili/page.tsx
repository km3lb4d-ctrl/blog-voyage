'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function IlesGiliPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Îles Gili</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Trois îles paradisiaques sans voitures, sanctuaire des tortues marines.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir les Îles Gili</h2>
              <p className="text-gray-700 mb-6">
                Les trois îles Gili (Trawangan, Meno et Air) au large de Lombok incarnent le paradis tropical par excellence.
                Ces petites îles sans voitures ni scooters offrent une escapade hors du temps où l'on se déplace uniquement
                à vélo ou en cidomo (calèche à cheval). Eaux cristallines peuplées de tortues marines, plages de sable blanc
                immaculé, récifs coralliens colorés et ambiance décontractée font des Gili une escale incontournable de l'Indonésie.
                Chaque île a sa personnalité : Gili T pour la fête, Gili Meno pour la romance, Gili Air pour l'équilibre parfait.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Gili Trawangan</strong> - L'île festive avec bars, restaurants et fêtes en bord de plage</li>
                <li><strong>Gili Meno</strong> - L'île romantique, la plus petite et la plus calme</li>
                <li><strong>Gili Air</strong> - L'équilibre parfait entre animation et tranquillité</li>
                <li><strong>Snorkeling avec les tortues</strong> - Nager aux côtés des tortues marines</li>
                <li><strong>Plongée sous-marine</strong> - Découvrir les épaves et récifs coralliens</li>
                <li><strong>Tour des trois îles</strong> - Excursion en bateau pour explorer chaque île</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-septembre (saison sèche), éviter janvier-mars (pluies)<br />
                <strong>Langue :</strong> Indonésien, anglais courant<br />
                <strong>Monnaie :</strong> Roupie indonésienne (IDR), distributeurs limités<br />
                <strong>Accès :</strong> Fast boat depuis Bali (2h) ou Lombok (30 min)<br />
                <strong>Durée recommandée :</strong> 3-5 jours pour visiter les 3 îles<br />
                <strong>Transport :</strong> Vélo ou cidomo uniquement (zéro véhicule motorisé)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🐢 Tôt le matin ou en fin d'après-midi pour voir les tortues en snorkeling<br />
                🚲 Louez un vélo pour faire le tour de l'île (30-45 min selon l'île)<br />
                🏖️ Côté est des îles au lever du soleil, côté ouest au coucher de soleil<br />
                💰 Retirez du cash avant, les ATM sont rares et peu fiables<br />
                🎉 Gili T pour faire la fête, Gili Meno pour le calme total<br />
                🤿 Réservez vos plongées à l'avance en haute saison<br />
                🌊 Fast boats peuvent être agités, prenez un anti-mal de mer
              </p>
            </div>
          </div>
        </section>

        {/* Îles Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Les trois îles</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Gili Trawangan */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Gili Trawangan"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Fête</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Gili Trawangan</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">L'île party des Gili</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Gili Trawangan, surnommée "Gili T", est la plus grande et la plus animée des trois îles. C'est LE spot
                        des backpackers et fêtards en Asie du Sud-Est, avec une ambiance cosmopolite et festive inégalée.
                        Le jour, on bronze sur les plages paradisiaques, on fait du snorkeling avec les tortues, ou on plonge
                        sur les épaves sous-marines. Le soir, l'île s'anime : beach bars avec DJ sets, fêtes en bord de mer,
                        et le fameux "sunset swing" qui fait tourner toutes les têtes d'Instagram.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Malgré son développement touristique rapide, Gili T conserve son charme insulaire : pas de voitures,
                        juste le bruit des vagues et les clochettes des cidomos. L'île se fait le tour à vélo en 45 minutes,
                        révélant plages désertes sur la côte est et restaurants branchés sur la côte ouest. Pour ceux qui veulent
                        combiner paradis tropical et vie sociale active, Gili T est la destination parfaite.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Animation</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vie nocturne</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gili Meno */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80"
                      alt="Gili Meno"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Romance</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Gili Meno</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">L'île romantique et préservée</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Gili Meno est la plus petite et la plus paisible des trois sœurs, véritable havre de paix pour couples
                        en lune de miel et voyageurs en quête de tranquillité absolue. Ici, le temps semble suspendu : quelques
                        petits resorts discrets, des plages désertes à perte de vue, et un calme presque irréel comparé à
                        l'effervescence de Gili T. C'est l'île où l'on vient se ressourcer, loin de tout et de tous.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le lac salé au centre de l'île attire quelques oiseaux tropicaux, mais c'est surtout sous l'eau que
                        Gili Meno révèle ses trésors. Les jardins de corail autour de l'île regorgent de vie marine, et le
                        site de plongée "Turtle Heaven" porte admirablement bien son nom : il est presque garanti d'y croiser
                        plusieurs tortues majestueuses. Au coucher du soleil, installez-vous sur un bean bag face à la mer
                        avec un cocktail, et profitez du spectacle offert par mère nature dans un silence apaisant.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Calme</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Gili Air */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                      alt="Gili Air"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Équilibre</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Gili Air</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le juste milieu parfait</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Gili Air offre le meilleur des deux mondes : l'animation de Gili T sans le côté trop festif, et la
                        tranquillité de Gili Meno sans l'isolement total. C'est l'île du juste équilibre, parfaite pour ceux
                        qui veulent à la fois se détendre sur des plages paradisiaques et profiter d'une petite vie sociale
                        avec bars et restaurants sympathiques. La communauté locale sasak y est plus présente que sur les
                        autres îles, ajoutant une touche d'authenticité bienvenue.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le côté sud-est de Gili Air, près du village principal, concentre la vie avec ses warungs locaux,
                        ses écoles de plongée réputées et ses cafés healthy. Le reste de l'île (tour à vélo en 30 minutes)
                        révèle des plages quasi désertes bordées de cocotiers, idéales pour une journée de farniente total.
                        Le snorkeling y est excellent, notamment sur le récif au nord de l'île où tortues et poissons tropicaux
                        abondent. Gili Air, c'est vraiment l'option "Goldilocks" : ni trop, ni trop peu, tout est parfait.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plongée</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
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
              Retour en Indonésie
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations indonésiennes et leurs merveilles.
            </p>
            <Link
              href="/blog/asie/indonesie"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer l'Indonésie
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
