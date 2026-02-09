'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CorsePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Corse</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île de beauté aux plages paradisiaques et montagnes sauvages.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir la Corse</h2>
              <p className="text-gray-700 mb-6">
                La Corse, surnommée l'"Île de Beauté", porte magnifiquement bien son nom. Cette perle de la Méditerranée
                offre un contraste saisissant entre ses plages de sable fin aux eaux turquoise et ses montagnes escarpées
                qui culminent à plus de 2700 mètres. Terre de caractère au patrimoine riche, elle enchante par ses villages
                perchés aux maisons de pierre, ses criques sauvages accessibles uniquement à pied, et sa culture unique
                farouchement préservée. La Corse est une destination où nature sauvage et authenticité se conjuguent à la perfection.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Bonifacio</strong> - Citadelle spectaculaire perchée sur des falaises de calcaire blanc</li>
                <li><strong>Calanques de Piana</strong> - Formations rocheuses rouges sculptées par l'érosion (UNESCO)</li>
                <li><strong>GR20</strong> - Sentier de grande randonnée mythique, l'un des plus beaux d'Europe</li>
                <li><strong>Plages de Palombaggia & Santa Giulia</strong> - Eaux cristallines dignes des Caraïbes</li>
                <li><strong>Cap Corse</strong> - Péninsule sauvage aux villages de pêcheurs authentiques</li>
                <li><strong>Les Aiguilles de Bavella</strong> - Pics rocheux spectaculaires pour randonneurs</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre-octobre (moins de foule, températures idéales)<br />
                <strong>Langue :</strong> Français et corse (langue régionale)<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Accès :</strong> Ferry depuis Nice, Toulon ou Marseille, ou vols vers Ajaccio/Bastia/Figari<br />
                <strong>Durée recommandée :</strong> 7-10 jours minimum pour un tour complet<br />
                <strong>Transport :</strong> Voiture de location indispensable (routes sinueuses)
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🚗 Louez une voiture, les routes sont magnifiques mais sinueuses<br />
                🏖️ Privilégiez les plages accessibles à pied pour éviter la foule<br />
                🥾 Même sans faire le GR20, de nombreuses randonnées d'une journée sont superbes<br />
                🍴 Goûtez la charcuterie corse (coppa, lonzu, figatellu) et le fromage brocciu<br />
                💰 La Corse est plus chère que le continent, surtout en haute saison<br />
                🏨 Réservez votre hébergement longtemps à l'avance en été
              </p>
            </div>
          </div>
        </section>

        {/* Lieux Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Bonifacio */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1527004013197-933c4bb611b3?w=1200&q=80"
                      alt="Bonifacio"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Histoire</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Bonifacio</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La citadelle sur les falaises</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Bonifacio est sans conteste l'un des sites les plus spectaculaires de Méditerranée. La haute ville
                        médiévale est perchée de manière vertigineuse sur des falaises de calcaire blanc qui plongent à pic
                        dans la mer, à plus de 60 mètres de hauteur. Les maisons semblent défier les lois de la gravité,
                        suspendues au bord du vide, offrant un spectacle architectural unique.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Flâner dans les ruelles pavées de la citadelle, c'est voyager dans le temps : fortifications génoises,
                        escalier du Roi d'Aragon taillé dans la falaise, port de plaisance animé en contrebas. La vue depuis
                        le cimetière marin ou le Grain de Sable (rocher naturellement érodé) est à couper le souffle. Par temps
                        clair, on aperçoit même la Sardaigne italienne, distante d'à peine 12 kilomètres.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Citadelle</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Panorama</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Calanques de Piana */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1606212024906-ba2c8d0b12d6?w=1200&q=80"
                      alt="Calanques de Piana"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Calanques de Piana</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Sculptures naturelles classées UNESCO</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Les Calanques de Piana, classées au patrimoine mondial de l'UNESCO, sont une merveille géologique
                        unique au monde. Ces formations rocheuses de granite rouge vif, sculptées par l'érosion depuis
                        des millénaires, prennent des formes fantasmagoriques : cœur, tête de chien, évêque... La palette
                        de couleurs est extraordinaire, variant du rose pâle au rouge flamboyant selon l'heure du jour.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        La route côtière D81 qui serpente au milieu de ces titans de pierre est l'une des plus belles
                        (et vertigineuses) de France. Pour les apprécier pleinement, empruntez les sentiers de randonnée
                        qui s'enfoncent dans ce labyrinthe minéral, ou admirez-les depuis la mer lors d'une excursion en
                        bateau au coucher du soleil, quand les roches s'embrasent de mille feux dorés.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Géologie</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Palombaggia */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Palombaggia"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plage</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Plage de Palombaggia</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le joyau des plages corses</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Palombaggia est régulièrement élue parmi les plus belles plages d'Europe, et pour cause : son sable
                        blanc immaculé, ses eaux turquoise translucides qui rivalisent avec les Maldives, et ses pins
                        parasols qui offrent une ombre naturelle créent un tableau digne d'une carte postale. Située au
                        sud-est de Porto-Vecchio, c'est la plage emblématique de la Corse.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Les îlots rocheux parsemés dans le lagon ajoutent une touche pittoresque au panorama. L'eau peu
                        profonde et cristalline est idéale pour la baignade et le snorkeling. Attention en haute saison :
                        le secret est éventé et la plage peut être bondée. Pour profiter de ce paradis en toute tranquillité,
                        arrivez tôt le matin ou visitez en mai-juin ou septembre.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Baignade</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Paradisiaque</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* GR20 / Bavella */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1464207687429-7505649dae38?w=1200&q=80"
                      alt="Aiguilles de Bavella"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Randonnée</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Aiguilles de Bavella & GR20</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le terrain de jeu des randonneurs</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Les Aiguilles de Bavella sont l'un des sites montagneux les plus spectaculaires de Corse. Ces pics
                        rocheux déchiquetés, qui culminent à environ 1800 mètres, dominent un paysage alpin époustouflant
                        de forêts de pins laricio centenaires. C'est ici que passe le mythique GR20, considéré comme l'un
                        des sentiers de grande randonnée les plus difficiles et les plus beaux d'Europe.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Pas besoin de se lancer dans les 16 jours du GR20 complet pour profiter de ces montagnes : de
                        nombreuses randonnées d'une journée permettent d'explorer les environs, comme le trou de la Bombe
                        (arche naturelle) ou les piscines naturelles de Purcaraccia. Le contraste entre la Méditerranée
                        visible au loin et ces sommets alpins est saisissant, résumant à lui seul toute la diversité de l'Île de Beauté.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Montagne</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Trekking</span>
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
              Retour en France
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations françaises et leurs trésors.
            </p>
            <Link
              href="/blog/europe/france"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer la France
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
