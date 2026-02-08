'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function LombokPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Lombok</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Sœur authentique de Bali, volcans majestueux et plages sauvages.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Lombok</h2>
              <p className="text-gray-700 mb-6">
                Lombok, voisine moins touristique de Bali, séduit par son authenticité préservée. Dominée par le
                volcan Rinjani, deuxième plus haut sommet d'Indonésie, l'île offre des plages de sable blanc désertes,
                des cascades cachées dans la jungle, des villages traditionnels sasak et une atmosphère bien plus
                paisible que sa célèbre voisine. C'est la destination idéale pour ceux qui recherchent l'aventure
                et l'authenticité loin des foules.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Mont Rinjani</strong> - Trek mythique de 2-3 jours vers le cratère et le lac Segara Anak</li>
                <li><strong>Kuta Lombok</strong> - Plages paradisiaques pour surfeurs (ne pas confondre avec Kuta Bali)</li>
                <li><strong>Senggigi</strong> - Station balnéaire principale avec restaurants et vie nocturne</li>
                <li><strong>Cascades de Tiu Kelep</strong> - Trek rafraîchissant dans la jungle</li>
                <li><strong>Îles Gili</strong> - Trois petites îles paradisiaques accessibles en bateau</li>
                <li><strong>Villages sasak</strong> - Découverte de la culture traditionnelle authentique</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-septembre (saison sèche)<br />
                <strong>Langue :</strong> Indonésien, langue sasak, anglais basique<br />
                <strong>Monnaie :</strong> Roupie indonésienne (IDR)<br />
                <strong>Accès :</strong> Aéroport de Praya, ou fast boat depuis Bali (2h)<br />
                <strong>Durée recommandée :</strong> 5-7 jours minimum<br />
                <strong>Transport :</strong> Location de scooter indispensable
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🥾 Prévoyez 3-4 jours pour le trek du Rinjani avec guide obligatoire<br />
                🏍️ Le scooter est le meilleur moyen de découvrir l'île en liberté<br />
                🏖️ Les plages du sud (Kuta, Tanjung Aan) sont spectaculaires<br />
                🌊 Les fast boats vers Bali peuvent être agités, prenez un anti-mal de mer<br />
                💰 Lombok est moins cher que Bali, négociez les prix<br />
                🍜 Goûtez l'ayam taliwang (poulet grillé épicé), spécialité locale
              </p>
            </div>
          </div>
        </section>

        {/* Lieux Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Lieux explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Mont Rinjani */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1555400082-f1a32bf9e030?w=1200&q=80"
                      alt="Mont Rinjani"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Aventure</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Mont Rinjani</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le trek mythique d'Indonésie</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le Mont Rinjani, à 3726 mètres d'altitude, est le deuxième plus haut volcan d'Indonésie et l'un
                        des treks les plus spectaculaires d'Asie du Sud-Est. L'ascension de 2-3 jours mène au cratère
                        abritant le magnifique lac Segara Anak aux eaux turquoise, considéré comme sacré par les locaux.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le trek traverse différents écosystèmes : savane, forêt tropicale et paysages lunaires volcaniques.
                        L'effort est intense mais la récompense est immense : lever de soleil au sommet avec vue sur Bali
                        et Sumbawa, baignade dans les sources chaudes naturelles au bord du lac, et nuit à la belle étoile
                        sous un ciel d'une pureté incroyable.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Trekking</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Kuta Lombok */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80"
                      alt="Kuta Lombok"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Plage</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Kuta Lombok</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le paradis des surfeurs</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        À ne pas confondre avec son homonyme balinais, Kuta Lombok est un petit village de pêcheurs
                        devenu spot de surf légendaire. Ses plages de sable blanc immaculé s'étendent à perte de vue,
                        bordées de collines verdoyantes. Tanjung Aan, Selong Belanak, Mawun : chaque plage a son caractère
                        unique, mais toutes partagent cette beauté sauvage préservée du tourisme de masse.
                      </p>
                      <p className="text-gray-700 mb-4">
                        L'atmosphère y est décontractée et bohème : warungs (restaurants locaux) les pieds dans le sable,
                        cours de surf au lever du soleil, et soirées tranquilles à contempler les vagues. C'est le lieu
                        parfait pour se ressourcer après l'effort du Rinjani ou simplement profiter de la dolce vita
                        indonésienne version authentique.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Surf</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Détente</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cascades Tiu Kelep */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?w=1200&q=80"
                      alt="Cascades Tiu Kelep"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Cascades de Tiu Kelep</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Joyau caché dans la jungle</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Les cascades de Tiu Kelep, nichées au pied du Mont Rinjani, sont parmi les plus belles d'Indonésie.
                        Pour y accéder, il faut entreprendre une randonnée d'environ 45 minutes à travers la jungle luxuriante,
                        en traversant plusieurs fois la rivière à gué (maillot de bain sous les vêtements recommandé !).
                      </p>
                      <p className="text-gray-700 mb-4">
                        La récompense est à la hauteur de l'effort : une cascade impressionnante de 42 mètres qui se jette
                        dans un bassin naturel d'eau cristalline. Selon la légende locale, passer derrière le rideau d'eau
                        rajeunit d'un an. Vrai ou pas, l'expérience de se baigner dans ce décor de carte postale au milieu
                        de la jungle est absolument magique et rafraîchissante après la marche.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Randonnée</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Baignade</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Villages Sasak */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1558005530-a7958896e6c6?w=1200&q=80"
                      alt="Village Sasak"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Culture</span>
                    </div>
                  </div>
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Villages Sasak</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Immersion dans la tradition</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Les Sasak sont le peuple autochtone de Lombok, et visiter leurs villages traditionnels comme Sade
                        ou Ende offre un voyage dans le temps. Les maisons aux toits de chaume, les greniers à riz sur
                        pilotis (lumbung) et les techniques artisanales ancestrales témoignent d'un mode de vie préservé
                        depuis des siècles.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Les habitants perpétuent les traditions : tissage de textiles colorés sur métiers à tisser manuels,
                        fabrication de paniers en bambou, et architecture unique avec sols en terre battue mélangée à de
                        la bouse de buffle (étonnamment propre et écologique). Les villageois accueillent chaleureusement
                        les visiteurs et partagent volontiers leur culture, offrant une perspective authentique sur
                        l'Indonésie rurale loin des clichés touristiques.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Tradition</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Artisanat</span>
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
