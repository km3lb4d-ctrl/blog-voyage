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
            <h2 className="text-4xl font-bold text-center mb-12">Quartiers explorés</h2>
            <div className="flex flex-col gap-8 max-w-4xl mx-auto">

              {/* Sultanahmet */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Histoire</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Sultanahmet</h3>
                    <p className="text-white/90 text-sm">Cœur historique</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Quartier historique concentrant Sainte-Sophie, Mosquée Bleue, Palais de Topkapi
                    et Basilique Citerne. Âme byzantine et ottomane d'Istanbul.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Monuments</span>
                  </div>
                </div>
              </div>

              {/* Beyoğlu */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Moderne</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Beyoğlu</h3>
                    <p className="text-white/90 text-sm">Quartier bohème</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Quartier animé avec l'avenue Istiklal, tour de Galata, galeries d'art,
                    boutiques vintage et vie nocturne trépidante.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Art</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Shopping</span>
                  </div>
                </div>
              </div>

              {/* Balat */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1576844940033-17f7bad7f063?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Photogénique</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Balat</h3>
                    <p className="text-white/90 text-sm">Maisons colorées</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Ancien quartier juif aux ruelles pentues et maisons colorées devenu
                    Instagram hotspot. Cafés hipsters et églises orthodoxes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Photos</span>
                  </div>
                </div>
              </div>

              {/* Bosphore */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Nature</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Bosphore</h3>
                    <p className="text-white/90 text-sm">Détroit légendaire</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Détroit séparant l'Europe de l'Asie, parsemé de palais, mosquées
                    et villages de pêcheurs. Croisière incontournable au coucher du soleil.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Ferry</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Paysages</span>
                  </div>
                </div>
              </div>

              {/* Grand Bazar */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1578408990219-33d6ee39fe8c?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Shopping</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Grand Bazar</h3>
                    <p className="text-white/90 text-sm">4000 boutiques</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Plus grand marché couvert du monde, labyrinthe de 61 rues abritant
                    tapis, bijoux, épices et antiquités. Expérience sensorielle unique.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Artisanat</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Tradition</span>
                  </div>
                </div>
              </div>

              {/* Kadiköy */}
              <div className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500">
                <div className="relative h-64 overflow-hidden">
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{
                      backgroundImage: 'url(https://images.unsplash.com/photo-1570939274717-7eda259b50ed?w=1200&q=80)',
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      transform: 'scale(1.1)'
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Asie</span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">Kadiköy</h3>
                    <p className="text-white/90 text-sm">Côté asiatique</p>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600 mb-4">
                    Quartier authentique de la rive asiatique, loin des touristes.
                    Marchés locaux, street food et ambiance bohème relaxée.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Local</span>
                    <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Gastronomie</span>
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
