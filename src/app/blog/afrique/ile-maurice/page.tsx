'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function IleMauricePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Île Maurice</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Paradis tropical de l'océan Indien, aux lagons turquoise et montagnes verdoyantes.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir l'Île Maurice</h2>
              <p className="text-gray-700 mb-6">
                L'Île Maurice incarne le paradis tropical par excellence, une perle de l'océan Indien où Mark Twain disait
                que "le paradis a été copié d'après Maurice". Cette île volcanique offre un mélange enchanteur de plages
                de sable blanc immaculé bordées de lagons turquoise cristallins, de montagnes verdoyantes sculptées par
                l'érosion, et d'une culture créole vibrante née de la fusion des influences africaines, indiennes, chinoises
                et européennes. Entre sports nautiques de classe mondiale, randonnées dans des gorges spectaculaires,
                rhum arrangé et cuisine métissée savoureuse, Maurice séduit par sa diversité et son authenticité préservée.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Le Morne Brabant</strong> - Montagne iconique classée UNESCO et plages sauvages</li>
                <li><strong>Île aux Cerfs</strong> - Lagon paradisiaque et sports nautiques (accessible en bateau)</li>
                <li><strong>Chamarel</strong> - Terres de 7 couleurs géologiques et cascade de 100m</li>
                <li><strong>Grand Baie</strong> - Station balnéaire animée, shopping et vie nocturne</li>
                <li><strong>Port-Louis</strong> - Capitale créole, marché central coloré et Caudan Waterfront</li>
                <li><strong>Black River Gorges</strong> - Parc national avec forêts primaires et cascades</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-décembre (hiver austral, sec et doux), éviter janvier-mars (cyclones)<br />
                <strong>Langue :</strong> Anglais et français officiels, créole mauricien parlé couramment<br />
                <strong>Monnaie :</strong> Roupie mauricienne (MUR), euros acceptés partout<br />
                <strong>Aéroport :</strong> Sir Seewoosagur Ramgoolam International Airport (MRU)<br />
                <strong>Visa :</strong> Exemption pour tourisme (jusqu'à 90 jours pour la plupart des pays)<br />
                <strong>Durée recommandée :</strong> 7-10 jours minimum<br />
                <strong>Transport :</strong> Location de voiture indispensable (conduite à gauche)
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🚗 Louez une voiture, les transports publics sont limités<br />
                🏖️ Côte ouest (Flic-en-Flac) pour couchers de soleil, côte est pour lever de soleil<br />
                🤿 Le snorkeling dans le lagon est accessible à tous<br />
                🌊 Essayez le kitesurf au Morne, spot de renommée mondiale<br />
                🍛 Goûtez le dholl puri, street food nationale mauricienne<br />
                🥃 Visitez une distillerie de rhum (Chamarel ou Rhumerie de Chamarel)<br />
                🏔️ L'ascension du Morne Brabant offre des vues époustouflantes<br />
                💰 Maurice est plus cher que l'Asie du Sud-Est mais raisonnable
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Dholl puri</strong> - Galette farcie de pois cassés, street food iconique</li>
                <li><strong>Vindaye</strong> - Poisson mariné aux épices, influence indienne</li>
                <li><strong>Rougaille</strong> - Sauce tomate créole épicée avec viande ou poisson</li>
                <li><strong>Gâteau piment</strong> - Beignets de lentilles épicés à grignoter</li>
                <li><strong>Rhum arrangé</strong> - Rhum local infusé aux fruits tropicaux</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Régions Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Régions explorées</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Le Morne */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=1200&q=80"
                      alt="Le Morne Brabant"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">UNESCO</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Le Morne Brabant</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Montagne sacrée et plages de rêve</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le Morne Brabant est l'icône de l'Île Maurice, une montagne basaltique de 556 mètres qui se dresse
                        majestueusement au sud-ouest de l'île, classée au patrimoine mondial de l'UNESCO. Son histoire est
                        poignante : au 18ème siècle, elle servait de refuge aux esclaves en fuite (les "marrons"), et la
                        légende raconte que certains se seraient jetés du sommet en 1835 en voyant des soldats approcher,
                        ignorant qu'ils venaient annoncer l'abolition de l'esclavage.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Aujourd'hui, la randonnée jusqu'au sommet (3-4h aller-retour) offre des vues panoramiques à couper
                        le souffle sur le lagon aux nuances infinies de bleu. En contrebas, les plages sauvages du Morne
                        sont parmi les plus belles de Maurice, et le spot de kitesurf attire les riders du monde entier avec
                        ses conditions parfaites : lagon peu profond, vent constant, et décor de carte postale avec la montagne
                        en toile de fond.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Randonnée</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Kitesurf</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Île aux Cerfs */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Île aux Cerfs"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plage</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Île aux Cerfs</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le joyau du lagon mauricien</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        L'Île aux Cerfs est une petite île paradisiaque au large de la côte est de Maurice, accessible
                        uniquement par bateau. Imaginez des plages de sable blanc poudreux, un lagon aux eaux cristallines
                        qui déclinent toutes les nuances de turquoise et d'émeraude, des filaos (sorte de pins tropicaux)
                        offrant de l'ombre naturelle, et une atmosphère de Robinson Crusoé version luxe. C'est l'excursion
                        d'une journée la plus populaire de l'île pour de bonnes raisons.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Sur place, vous pouvez pratiquer toutes sortes de sports nautiques : parasailing avec vue plongeante
                        sur le lagon, jet-ski, kayak, paddle, ou simplement snorkeling dans les eaux peu profondes grouillantes
                        de poissons tropicaux. Plusieurs restaurants proposent des BBQ de fruits de mer les pieds dans le sable.
                        Le conseil : arrivez tôt (vers 9h) ou en fin de journée pour éviter l'afflux massif des tours organisés
                        et profiter de ce petit paradis dans une relative tranquillité.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Lagon</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Sports nautiques</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Chamarel */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1200&q=80"
                      alt="Terres de Chamarel"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Chamarel & Terres des 7 Couleurs</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Phénomène géologique unique au monde</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Chamarel, dans le sud-ouest montagneux de Maurice, abrite l'un des phénomènes naturels les plus
                        étranges et fascinants de l'île : les Terres des 7 Couleurs. Ces dunes de sable ondulées arborent
                        naturellement sept teintes différentes (rouge, brun, violet, vert, bleu, pourpre et jaune) dues à
                        la décomposition de roches volcaniques riches en minéraux. Par temps ensoleillé, les couleurs
                        s'illuminent dans un dégradé surréaliste qui semble tout droit sorti d'un tableau psychédélique.
                      </p>
                      <p className="text-gray-700 mb-4">
                        À quelques minutes se trouve la cascade de Chamarel, qui plonge de 100 mètres dans une gorge
                        verdoyante luxuriante. Ne manquez pas de visiter la Rhumerie de Chamarel, une distillerie artisanale
                        produisant certains des meilleurs rhums agricoles de l'île. La dégustation avec vue panoramique sur
                        la côte sud-ouest est un moment délicieux. Chamarel, c'est la Maurice rurale et authentique, loin des
                        plages touristiques, où la nature volcanique révèle toute sa splendeur.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Géologie</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Rhum</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Port-Louis */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80"
                      alt="Port-Louis"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Culture</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Port-Louis</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Capitale créole vibrante</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Port-Louis, capitale de Maurice, offre un contraste saisissant avec les plages idylliques de l'île.
                        Cette ville portuaire bouillonnante mélange architecture coloniale française, gratte-ciels modernes,
                        et une diversité culturelle fascinante. Le marché central est l'âme de la ville : étals débordant
                        de fruits tropicaux exotiques, épices embaumant l'air, vendeurs de street food préparant dholl puris
                        fumants, et tissus colorés s'entassant jusqu'au plafond. C'est Maurice sans filtre, bruyant, chaotique
                        et authentique.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le Caudan Waterfront, zone rénovée du front de mer, offre shopping, restaurants et le Blue Penny Museum
                        qui abrite les timbres les plus rares au monde. Ne manquez pas l'Aapravasi Ghat, site UNESCO où
                        débarquaient les travailleurs engagés indiens au 19ème siècle, témoignage émouvant de l'histoire
                        migratoire mauricienne. La forteresse Adelaïde sur les hauteurs offre une vue panoramique sur la ville
                        et le port. Port-Louis se visite en une demi-journée, idéalement le matin avant la chaleur écrasante.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Marché</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Histoire</span>
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
              Retour en Afrique
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations africaines et leurs merveilles.
            </p>
            <Link
              href="/blog/afrique"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer l'Afrique
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
