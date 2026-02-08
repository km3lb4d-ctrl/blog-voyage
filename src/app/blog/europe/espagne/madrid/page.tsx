'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MadridPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Madrid</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Capitale espagnole vibrante, cœur battant de l'Espagne où l'art, la culture et la vie nocturne règnent en maître.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Madrid</h2>
              <p className="text-gray-700 mb-6">
                Madrid, cœur de l'Espagne, séduit par son énergie électrique, ses musées exceptionnels et son art de vivre urbain.
                Entre les chefs-d'œuvre du Prado, les tapas dans les ruelles animées et l'animation du Retiro, la capitale espagnole
                ne dort jamais. C'est une ville de contrastes où la tradition côtoie la modernité, où les terrasses de cafés
                accueillent les Madrilènes jusqu'au petit matin.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Museo del Prado</strong> - L'un des plus grands musées d'art au monde avec Goya, Velázquez et El Greco</li>
                <li><strong>Palais Royal</strong> - Résidence officielle royale, l'un des plus grands palais d'Europe</li>
                <li><strong>Parc du Retiro</strong> - Poumon vert de 125 hectares avec lac, musées et espaces verts</li>
                <li><strong>Plaza Mayor</strong> - Place emblématique du centre historique entourée de portiques</li>
                <li><strong>Puerta del Sol</strong> - Cœur géographique de l'Espagne et point kilométrique zéro</li>
                <li><strong>Museo Reina Sofía</strong> - Art moderne espagnol, le Guernica de Picasso</li>
                <li><strong>Gran Vía</strong> - Avenue mythique du shopping et de l'architecture Belle Époque</li>
                <li><strong>Temple de Debod</strong> - Temple égyptien offert par l'Égypte, couchers de soleil magiques</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Quartiers emblématiques</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Barrio de las Letras</strong> - Quartier littéraire historique avec cafés et musées</li>
                <li><strong>La Latina</strong> - Vieille ville aux ruelles étroites et atmosphère authentique</li>
                <li><strong>Malasaña</strong> - Quartier bohème avec street art, vintage et vie nocturne</li>
                <li><strong>Chueca</strong> - Quartier branché avec bars, restaurants et galeries d'art</li>
                <li><strong>Salamanca</strong> - Quartier huppé du shopping et des restaurants gastronomiques</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Prendre un café au bar du Retiro en fin d'après-midi</li>
                <li>Flâner dans les ruelles médiévales de La Latina</li>
                <li>Déguster les meilleures tapas et croquetas dans les bars traditionnels</li>
                <li>Assister à un spectacle de flamenco dans les tablao authentiques</li>
                <li>Regarder le coucher de soleil depuis le Temple de Debod</li>
                <li>Découvrir le street art dans les quartiers de Malasaña et Chueca</li>
                <li>Explorer les galeries d'art contemporain du triangle de l'art</li>
                <li>Dîner tard à la madrileña (21h-23h) dans un restaurant typique</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mars-mai et septembre-novembre (températures douces)<br />
                <strong>Durée recommandée :</strong> 3-4 jours minimum<br />
                <strong>Transport :</strong> Métro efficace, buses et à pied pour la plupart des sites<br />
                <strong>Monnaie :</strong> Euro (EUR)<br />
                <strong>Langue :</strong> Espagnol (anglais parlé dans le centre touristique)<br />
                <strong>Cuisine :</strong> Dîner très tard (21h-23h), petits-déjeuners légers
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                Achetez le Madrid City Tour Pass pour les musées<br />
                Les Madrilènes sont très accueillants et adorent parler de leur ville<br />
                Ne manquez pas les terrasses même en hiver, elles chauffent<br />
                Les musées majeurs ferment tôt (19h), planifiez bien<br />
                Le métro est le moyen le plus rapide pour se déplacer<br />
                Réservez les restaurants branchés à l'avance<br />
                Flânez sans but dans La Latina pour les meilleures découvertes<br />
                L'énergie montante à 23h-24h est proprement madrilène<br />
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Croquetas</strong> - Beignets espagnols aux multiples saveurs (jambon, fromage, morue)</li>
                <li><strong>Pulpo a la Gallega</strong> - Poulpe à la galicienne avec paprika et huile d'olive</li>
                <li><strong>Cocido Madrileño</strong> - Ragoût traditionnel madrilène aux pois chiches et viande</li>
                <li><strong>Jamón Ibérico</strong> - Jambon ibérique de bellota, or noir de l'Espagne</li>
                <li><strong>Bocadillo de calamares</strong> - Sandwich aux calmars frits, spécialité de Plaza Mayor</li>
                <li><strong>Gazpacho</strong> - Soupe froide parfaite pour l'été</li>
                <li><strong>Churros con chocolate</strong> - Bâtonnets frits avec chocolat chaud épais</li>
                <li><strong>Vermut</strong> - Apéritif traditionnel servi avec glaçons et olive</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Quartiers explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* La Latina */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1570114716159-e389f8712fda?w=1200&q=80"
                      alt="La Latina"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Historique</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">La Latina</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">La vieille ville aux ruelles médiévales</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        La Latina est le cœur historique de Madrid, un dédale de ruelles pavées étroites et tortueuses
                        qui montent vers la cathédrale. C'est le Madrid authentique, celui des Madrilènes, où les balcons
                        fleuris surplombent les rues, où les tabernas traditionelles servent des verres de vermut depuis
                        des générations. Chaque coin de rue offre une nouvelle découverte : une petite plaza, une église historique,
                        une boutique d'antiquités cachée.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Le dimanche, La Latina s'anime du Marché des Puces où vendeurs de livres anciens, artisans et marchands d'art
                        investissent les petites places. L'atmosphère y est bohème et vivante, les bars à tapas débordent sur les trottoirs,
                        et on se sent vraiment dans la Madrid d'autrefois, loin des guidebooks touristiques.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Medieval</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentic</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Retiro Park */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1518136247453-74e7b5265980?w=1200&q=80"
                      alt="Parc du Retiro"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Parc du Retiro</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le poumon vert de Madrid</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le Parc du Retiro est l'oasis de verdure de Madrid, 125 hectares de jardins magnifiquement entretenus
                        où Madrilènes et touristes viennent s'échapper de l'agitation urbaine. Son lac cristallin reflète les arbres
                        centenaires, ses allées ombragées invitent à la flânerie, et ses petites places cachées offrent des moments
                        de quiétude inattendus au cœur de la ville.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Au-delà de la détente, le Retiro concentre aussi culture et beauté architecturale : le Palais de Cristal
                        étincelant, le monument à Alphonse XII majestueux, et des musées comme le Museo de América. C'est l'endroit
                        parfait pour une pause l'après-midi, prendre un café en terrasse, ou simplement observer la vie madrilène
                        se dérouler autour du lac.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Détente</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Promenade</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Malasaña */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1537377191536-e71b99a28e29?w=1200&q=80"
                      alt="Malasaña"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Bohème</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Malasaña</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le quartier bohème et créatif</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Malasaña est le cœur battant de la Madrid créative et bohème. Autrefois quartier ouvrier populaire,
                        il s'est transformé en lieu de prédilection des artistes, designers et jeunes créatifs. Les murs sont
                        tapissés de street art coloré et expressif, les boutiques vintage côtoient les galeries d'art émergentes,
                        et chaque petite ruelle cache un café alternatif ou une brasserie tendance.
                      </p>
                      <p className="text-gray-700 mb-4">
                        C'est aussi le quartier de la vie nocturne authentiquement madrilène : petits bars de copains, concerts
                        underground, ambiance bohème et accueillante. Les terrasses débordent tard le soir, les gens sont jeunes
                        et dynamiques, et on sent une énergie créative palpable. Malasaña incarne la nouvelle Madrid, celle des
                        jeunes générations qui réinventent la ville.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Street Art</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vie Nocturne</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Prado & Musées */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1564399579883-451a5d44ec04?w=1200&q=80"
                      alt="Museo del Prado"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Art</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Triangle de l'Art</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le cœur culturel de l'Espagne</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le Triangle de l'Art regroupe trois des plus grands musées du monde : le Prado avec ses chefs-d'œuvre
                        de Goya, Velázquez et El Greco ; le Reina Sofía avec le Guernica de Picasso ; et le Thyssen-Bornemisza
                        avec ses collections impressionnistes et modernes. C'est un peuple qui vient se cultiver à Madrid, attirés
                        par ces trésors inestimables.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Au-delà des musées, ce quartier concentre aussi des galeries d'art contemporain, des libraires prestigieuses,
                        et des restaurants gastronomiques. C'est l'endroit où se rencontrent histoire de l'art et créativité contemporaine,
                        où chaque visite aux musées peut être suivie d'une pause café philosophique dans une petite plaza adjacente.
                        Madrid y montre son âme cultivée et cosmopolite.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Musées</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Culture</span>
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
