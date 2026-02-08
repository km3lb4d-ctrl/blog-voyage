'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BaliPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Bali</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île des Dieux, sanctuaire de spiritualité et de beauté naturelle.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Bali</h2>
              <p className="text-gray-700 mb-6">
                Bali, l'Île des Dieux, est la destination la plus emblématique d'Indonésie et l'une des plus prisées
                d'Asie du Sud-Est. Cette petite île hindouiste au milieu de l'archipel musulman indonésien offre une
                expérience unique : rizières en terrasses d'un vert éclatant, temples millénaires enveloppés d'encens,
                plages paradisiaques pour surfeurs, volcans actifs aux levers de soleil magiques, et une culture
                spirituelle profondément ancrée dans le quotidien. Entre yoga, cérémonies traditionnelles, massage
                balinais et cuisine savoureuse, Bali séduit par sa capacité à mêler authenticité et modernité.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ubud</strong> - Centre culturel de l'île avec rizières de Tegalalang et Forêt des Singes</li>
                <li><strong>Mont Batur</strong> - Trek nocturne pour admirer le lever du soleil au sommet du volcan</li>
                <li><strong>Tanah Lot</strong> - Temple hindou emblématique posé sur un rocher en mer</li>
                <li><strong>Canggu & Seminyak</strong> - Spots de surf et beach clubs branchés de la côte ouest</li>
                <li><strong>Nusa Penida</strong> - Île voisine aux falaises vertigineuses (Kelingking Beach)</li>
                <li><strong>Sidemen</strong> - Vallée paisible pour découvrir le Bali authentique loin des foules</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-octobre (saison sèche), éviter janvier-février (moussons)<br />
                <strong>Langue :</strong> Indonésien et balinais, anglais courant dans zones touristiques<br />
                <strong>Monnaie :</strong> Roupie indonésienne (IDR)<br />
                <strong>Aéroport :</strong> Ngurah Rai (Denpasar) avec vols internationaux directs<br />
                <strong>Durée recommandée :</strong> 7-14 jours minimum<br />
                <strong>Transport :</strong> Location de scooter indispensable, ou apps Grab/Gojek
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🛵 Le scooter est le meilleur moyen de se déplacer, mais prudence sur les routes<br />
                🕉️ Assistez à une cérémonie traditionnelle dans un temple pour l'expérience authentique<br />
                🏖️ Évitez Kuta et Legian, trop touristiques, privilégiez Uluwatu, Canggu, Amed<br />
                🌅 Le trek du Mont Batur au lever du soleil est fatigant mais inoubliable<br />
                💰 Négociez les prix (taxis, massages, marchés), c'est dans la culture locale<br />
                🍜 Testez le nasi goreng, mie goreng et sate (brochettes) dans les warungs locaux<br />
                📸 Ubud est magnifique mais très touristique, explorez aussi Sidemen et Munduk
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Nasi Goreng</strong> - Riz frit indonésien, plat national</li>
                <li><strong>Babi Guling</strong> - Cochon de lait rôti, spécialité balinaise</li>
                <li><strong>Sate Lilit</strong> - Brochettes de poisson épicé haché</li>
                <li><strong>Lawar</strong> - Mélange de viande, légumes, noix de coco et épices</li>
                <li><strong>Smoothie bowls</strong> - Incontournables dans les cafés healthy d'Ubud et Canggu</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Régions Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Régions explorées</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Ubud */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"
                      alt="Ubud"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Culture</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Ubud</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le cœur spirituel et culturel de Bali</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Ubud est le centre culturel et spirituel de Bali, niché au cœur de l'île parmi les rizières en
                        terrasses et les forêts tropicales. Cette ville est devenue célèbre grâce au livre et film "Eat Pray Love",
                        attirant depuis yogis, artistes et voyageurs en quête de sens. Malgré l'afflux touristique, Ubud
                        conserve son authenticité balinaise avec ses galeries d'art, ateliers d'artisans, temples sacrés
                        et cérémonies quotidiennes.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Les rizières de Tegalalang offrent le paysage de carte postale parfait avec leurs courbes verdoyantes
                        sculptées à flanc de colline. La Forêt des Singes (Monkey Forest) abrite des centaines de macaques
                        espiègles dans un cadre de temples moussus et ficus géants. Le soir, assistez à une danse traditionnelle
                        du Kecak au Pura Dalem Taman Kaja, un spectacle hypnotisant mêlant chants, costumes et flammes.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Rizières</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Yoga</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mont Batur */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1555217851-5f92dd9db3a6?w=1200&q=80"
                      alt="Mont Batur"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Aventure</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Mont Batur</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Lever de soleil sur le volcan sacré</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        L'ascension du Mont Batur (1717m) pour admirer le lever du soleil est l'une des expériences les plus
                        marquantes à Bali. Le réveil se fait à 2h du matin, le départ vers 3h30 avec lampe frontale, pour
                        une randonnée de 2h dans la nuit noire. L'effort en vaut largement la chandelle : arrivé au sommet,
                        on assiste au spectacle magique du soleil émergeant derrière le Mont Agung voisin, illuminant
                        progressivement le lac Batur en contrebas et les nuages cotonneux qui flottent entre les volcans.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le cratère actif du Batur fume encore, rappelant que ce volcan a connu des éruptions encore récemment.
                        Les guides préparent un petit-déjeuner sommaire (œufs cuits à la vapeur des fumerolles volcaniques,
                        café chaud) pendant que vous contemplez ce panorama époustouflant à 360 degrés. La descente révèle
                        les champs de lave noire solidifiée des éruptions passées, paysage lunaire saisissant sous la lumière
                        du jour.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Volcan</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Trekking</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Canggu */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Canggu"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Surf</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Canggu</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le repaire branché des nomades digitaux</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Canggu est le nouveau hot spot de Bali, passé en une décennie d'un village de rizières endormi à
                        l'épicentre hipster de l'île. Ce coin de la côte ouest attire une communauté cosmopolite de surfeurs,
                        nomades digitaux, entrepreneurs et créatifs. L'atmosphère y est décontractée et internationale :
                        cafés healthy avec smoothie bowls instagrammables, espaces de coworking avec wifi fiable, beach
                        clubs au coucher du soleil, et boutiques bohèmes chic.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Les plages de Canggu (Echo Beach, Batu Bolong, Berawa) sont idéales pour apprendre le surf avec
                        leurs vagues constantes et leurs nombreuses écoles. Le soir, La Brisa beach club avec son architecture
                        de bois flotté recyclé devient le rendez-vous incontournable pour admirer le coucher de soleil,
                        cocktail à la main. Malgré son développement rapide (parfois trop), Canggu conserve une vibe cool
                        et créative qui séduit immédiatement.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Plage</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Lifestyle</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Temples */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&q=80"
                      alt="Tanah Lot"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Spirituel</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Temples sacrés</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Les sanctuaires millénaires de l'Île des Dieux</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Bali compte plus de 10 000 temples hindous, chacun avec son caractère unique et son importance
                        spirituelle. Le Tanah Lot, posé sur un rocher battu par les vagues, est l'icône photographique de
                        Bali, particulièrement magique au coucher du soleil quand sa silhouette se découpe sur le ciel
                        orangé. Le Pura Uluwatu, perché sur une falaise de 70 mètres dominant l'océan Indien, accueille
                        chaque soir une danse du Kecak hypnotisante avec la mer en toile de fond.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le Tirta Empul près d'Ubud permet de participer à un rituel de purification sous les fontaines
                        sacrées, expérience spirituelle authentique au milieu des locaux. Le Pura Besakih, temple mère de
                        Bali situé sur les flancs du Mont Agung, est le plus grand et le plus sacré de l'île. Respectez
                        toujours le code vestimentaire (sarong obligatoire) et la spiritualité des lieux : ces temples ne
                        sont pas que des attractions touristiques, mais des lieux de culte vivants où les Balinais pratiquent
                        leur foi au quotidien.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Temples</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Tradition</span>
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
