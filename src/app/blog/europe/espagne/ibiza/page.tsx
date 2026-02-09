'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function IbizaPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Ibiza</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île baléare légendaire où plages paradisiaques et nuits électriques se rencontrent sous les étoiles.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Ibiza</h2>
              <p className="text-gray-700 mb-6">
                Ibiza, perle des Baléares, offre deux visages enchanteurs : une île festive de renommée mondiale la nuit,
                avec ses clubs légendaires pulsant jusqu'à l'aube, et un paradis méditerranéen aux criques sauvages le jour.
                Au-delà du clubbing mondialisé, découvrez son patrimoine UNESCO multiséculaire, ses villages blancs paisibles,
                ses couchers de soleil mythiques et ses communautés hippies authentiques. Ibiza n'est pas qu'une destination de fête,
                c'est une philosophie de vie où la liberté et la créativité règnent.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Dalt Vila</strong> - Vieille ville fortifiée classée UNESCO avec remparts du XVIe siècle</li>
                <li><strong>Café del Mar</strong> - Club de plage légendaire pour les couchers de soleil filmés par le cinéma</li>
                <li><strong>Playa d'en Bossa</strong> - Plage animée avec clubs de plage et bars</li>
                <li><strong>Cala Comte</strong> - Criques aux eaux turquoise et sable blanc immaculé</li>
                <li><strong>Pacha & Privilege</strong> - Super-clubs mondialement réputés</li>
                <li><strong>Formentera</strong> - Île voisine accessible en ferry avec plages secrètes</li>
                <li><strong>Benirràs</strong> - Plage bohème avec drumming circles au coucher de soleil</li>
                <li><strong>Mercat Vell</strong> - Marché ancien et bohème du centre historique</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Zones à explorer</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ibiza City</strong> - Capitale avec Dalt Vila historique et vie nocturne intérieure</li>
                <li><strong>West Coast</strong> - Cala Conta, Cala Bassa, couchers de soleil spectaculaires</li>
                <li><strong>North Coast</strong> - Benirràs, Port de San Miguel, villages bohèmes</li>
                <li><strong>South Coast</strong> - Playa d'en Bossa, clubs géants, plages animées</li>
                <li><strong>Arrière-pays</strong> - Villages pittoresques, marchés hippies authentiques</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Regarder le coucher de soleil depuis Café del Mar avec cocktail en main</li>
                <li>Danser jusqu'à l'aube dans les super-clubs Pacha, Privilege ou Hi Ibiza</li>
                <li>Explorer les criques secrètes accessibles seulement à pied ou en bateau</li>
                <li>Assister au drumming circle bohème de Benirràs au coucher du soleil</li>
                <li>Flâner dans le Mercat Vell et acheter artisanat bohème authentique</li>
                <li>Visiter les marchés hippies de Punta Arabí et Las Dalias</li>
                <li>Prendre un ferry pour Formentera et découvrir ses plages secrètes</li>
                <li>Participer à la vie nocturne underground dans les bars de la vieille ville</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-juin et septembre-octobre (climat idéal, moins de foule)<br />
                <strong>Durée recommandée :</strong> 4-7 jours<br />
                <strong>Transport :</strong> Voiture ou scooter pour explorer l'île en liberté<br />
                <strong>Monnaie :</strong> Euro (EUR)<br />
                <strong>Langue :</strong> Espagnol et catalan (anglais parlé dans les zones touristiques)<br />
                <strong>Vie nocturne :</strong> Clubs ouvrent tard (24h-2h), fermeture à 6h-7h du matin<br />
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                Réservez clubs et restaurants huppés à l'avance en haute saison<br />
                Le marché bohème du mercredi soir (Mercat Vell) est l'âme d'Ibiza<br />
                Les couchers de soleil sont une religion locale, planifiez vos soirées autour<br />
                Louez une voiture pour découvrir les criques inaccessibles en transports en commun<br />
                Les clubs ne deviennent vraiment animés qu'après 2h du matin<br />
                Formentera vaut le détour pour les plages les plus paradisiaques<br />
                L'atmosphère bohème authentique se trouve dans l'arrière-pays, pas sur les plages<br />
                Juillet-août sont très touristiques et chers ; mai-juin est parfait<br />
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Flaó</strong> - Gâteau baléare traditionnel à la ricotta et menthe</li>
                <li><strong>Buñuelos de Ibiza</strong> - Beignets sucrés aux fruits</li>
                <li><strong>Esparelló</strong> - Poulpe en salade, spécialité côtière</li>
                <li><strong>Arrós Secà</strong> - Riz sec style Baléares, proche de la paella</li>
                <li><strong>Pescaito Frito</strong> - Poisson frit simple et savoureux</li>
                <li><strong>Ensalada Ibicenca</strong> - Salade locale aux tomates et fromage</li>
                <li><strong>Gin Tònic</strong> - Boisson nationale baléare, préparé rituellement</li>
                <li><strong>Hierbas Ibicencas</strong> - Liqueur locale aux herbes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Zones Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Zones à explorer</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Dalt Vila */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1599598488035-25a2344cf81d?w=1200&q=80"
                      alt="Dalt Vila"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">UNESCO</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Dalt Vila</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La vieille ville fortifiée</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Dalt Vila est le cœur historique d'Ibiza, une vieille ville fortifiée classée au patrimoine UNESCO, perchée
                        sur une colline dominant la baie d'Ibiza. Les remparts du XVIe siècle entourent des ruelles étroites pavées,
                        où se mêlent histoire médiévale et bohème urbain. La cathédrale gothique-méditerranéenne domine avec ses murs
                        blancs brillants, tandis que les ruelles cachent bars branchés, galeries d'art et petits restaurants.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le soir, Dalt Vila s'illumine magiquement, les restaurants en terrasse débordent de touristes et locals, et on
                        peut regarder les couchers de soleil depuis les remparts. C'est le lieu parfait pour une promenade contemplative le jour
                        et une sortie nocturne authentique le soir, loin de l'électro-pop des super-clubs.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Historique</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Couchers de soleil</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Clubbing */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=1200&q=80"
                      alt="Clubbing Ibiza"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Électro</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Monde du Clubbing</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Les temples de la musique électro</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Ibiza est le cœur battant de la musique électro mondiale. Les super-clubs Pacha, Privilege et Hi Ibiza
                        sont des institutions légendaires, chacun avec sa propre personnalité : Pacha dans le centre pour l'ambiance glamour,
                        Privilege pour les spectacles pyrotechniques géants, Hi Ibiza pour la piste de danse la plus grande d'Europe.
                        Des DJs internationaux de renom y mixent devant des foules de 10 000 personnes.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Mais Ibiza, ce n'est pas seulement les méga-clubs : les petits bars de plage, les after-parties cachées, et l'underground
                        punk de la scène locale offrent des expériences tout aussi authentiques. Le clubbing ici n'est pas un divertissement,
                        c'est une culture, une philosophie, une façon de vivre jusqu'à l'aube avec des étrangers qui deviennent des amis.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Musique</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Fête</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Benirràs & Bohème */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1470229722913-7f419344ca51?w=1200&q=80"
                      alt="Benirràs bohème"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Bohème</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Benirràs & Vie Bohème</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">L'Ibiza hippie authentique</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Benirràs et les villages de la côte nord incarnent l'âme bohème originelle d'Ibiza. La plage de Benirràs est célèbre
                        pour son drumming circle du dimanche soir : des musiciens traditionnels et talentueux jouent des percussions tandis que
                        le soleil plonge dans la mer. C'est mystique, authentique, loin du clubbing commercial. Les hippies argentins, les
                        musiciens de rue, les voyageurs du monde entier se retrouvent ici.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Les marchés hippies de Punta Arabí et Las Dalias sont des institutions, où vendeurs d'artisanat, de vêtements bohèmes,
                        de bijoux fait main et de sculptures côtoient les flaneur contemplatives. L'arrière-pays d'Ibiza offre des villages
                        pittoresques, des restaurants bio, et une philosophie de vie alternative que beaucoup recherchent.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Communauté</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Artisanat</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Plages & Criques */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80"
                      alt="Plages d'Ibiza"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Paradis</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Plages & Criques</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Eaux turquoise et sable blanc</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Les plages d'Ibiza sont tout simplement spectaculaires : Cala Comte avec ses eaux turquoise, Cala Bassa dorée, les
                        criques cachées de la côte nord accessibles seulement à pied ou en bateau. Le sable blanc immaculé, l'eau limpide
                        et chaude, les falaises de calcaire blanc qui dégringolent jusqu'à la mer créent des décors de carte postale.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Côté touristique, Playa d'en Bossa offre clubs de plage, sports nautiques et atmosphère festive. Mais les vraies
                        perles sont les petites criques secrètes où les locaux se baignent : Cala Xaracà, Cala Mastella, Cala San Vicente.
                        Louer un bateau ou un scooter permet de les découvrir. Chaque plage a son propre caractère, des clubs animés aux
                        criques sauvages où règne le silence de la nature.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Baignade</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Méditerranée</span>
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
              Découvrez d'autres destinations espagnoles et leurs merveilles.
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
