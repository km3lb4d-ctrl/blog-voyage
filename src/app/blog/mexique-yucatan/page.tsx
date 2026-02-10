import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MexiquePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Article */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/images/mexique/chichen-itza.jpg"
            alt="Mexique Yucatan"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 w-full">
          <p className="text-[#f56300] font-semibold mb-4 uppercase tracking-widest text-sm">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white leading-tight">
            Mexique<br />Yucatan et cenotes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            2-3 semaines pour explorer la péninsule du Yucatan entre ruines mayas et cenotes magiques
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-12 bg-[#f5f5f7] border-b border-[#d2d2d7] w-full flex justify-center">
        <div className="max-w-4xl w-full px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#f56300]">2-3 sem.</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Durée</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">2400€</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Budget total</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">5 zones</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Nov-Avr</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Période</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU DE L'ARTICLE */}
      <article className="!py-20 flex flex-col items-center w-full">
        <div className="max-w-4xl w-full px-4 text-center flex flex-col items-center">

          <h2 className="text-4xl font-bold mb-8 text-[#1d1d1f]">Itinéraire complet</h2>

          <p className="text-[#1d1d1f] text-lg leading-relaxed !mb-12 max-w-3xl">
            La péninsule du Yucatan au Mexique offre un mélange parfait d&apos;histoire précolombienne,
            de nature tropicale et de plages paradisiaques. Entre les ruines mayas majestueuses,
            les cenotes cristallins et les villes coloniales colorées, ce voyage promet des découvertes inoubliables.
          </p>

          {/* Partie 1 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 1-4 : Cancún et Playa del Carmen</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1518105779142-d975f22f1b0a?w=1200&q=80" alt="Playa del Carmen" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Arrivée à Cancún, porte d&apos;entrée du Yucatan. Transfert rapide vers Playa del Carmen, plus authentique et moins touristique que Cancún.</p>
              <p className="font-bold">Playa del Carmen - Base idéale</p>
              <p>Ville côtière animée avec plages magnifiques, Quinta Avenida (rue piétonne pleine de restaurants et boutiques), et excellent point de départ pour les excursions.</p>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">✨ Excursion Isla Mujeres</p>
                <p className="text-gray-700 leading-relaxed">Journée sur cette petite île aux eaux turquoise. Location de golfette pour faire le tour, snorkeling et coucher de soleil depuis Punta Sur.</p>
              </div>
            </div>
          </div>

          {/* Partie 2 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 5-7 : Tulum et les cenotes</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1518638150340-f706e86654de?w=1200&q=80" alt="Tulum" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Ruines de Tulum</p>
              <p>Seul site maya construit en bord de mer. Vue spectaculaire sur la mer des Caraïbes depuis les falaises. Arrivez tôt le matin pour éviter la chaleur et les foules.</p>

              <p className="font-bold pt-4">Les cenotes - Puits naturels sacrés</p>
              <p>Le Yucatan compte des milliers de cenotes, gouffres d&apos;eau douce souterrains. Gran Cenote, Dos Ojos et Cenote Azul sont incontournables pour la baignade et le snorkeling.</p>

              <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">💡 Conseil pratique</p>
                <p className="text-gray-700 leading-relaxed">Louez une voiture pour explorer les cenotes en toute liberté. Beaucoup sont cachés et difficiles d&apos;accès en transport en commun.</p>
              </div>
            </div>
          </div>

          {/* Partie 3 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 8-10 : Valladolid et Chichén Itzá</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="/images/mexique/chichen-itza.jpg" alt="Chichén Itzá" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Valladolid - Ville coloniale</p>
              <p>Charmante ville aux façades colorées, beaucoup plus authentique que les zones touristiques. Cenote Zaci en plein centre-ville et cuisine yucatèque traditionnelle.</p>

              <p className="font-bold pt-4">Chichén Itzá - Nouvelle merveille du monde</p>
              <p>La pyramide de Kukulcán est l&apos;une des 7 nouvelles merveilles du monde. Site archéologique impressionnant témoignant de la grandeur de la civilisation maya.</p>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">⏰ Astuce timing</p>
                <p className="text-gray-700 leading-relaxed">Arrivez à l&apos;ouverture (8h) pour visiter avant l&apos;arrivée massive des cars touristiques vers 10h-11h. La chaleur est également moins intense le matin.</p>
              </div>
            </div>
          </div>

          {/* Partie 4 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 11-14 : Bacalar et Mahahual</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1616391182219-e080b4d1043a?w=1200&q=80" alt="Lagune de Bacalar" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Lagune de Bacalar - Lagune aux 7 couleurs</p>
              <p>Eau douce aux nuances de bleu incroyables. Kayak, paddle, baignade dans une atmosphère paisible. Un paradis encore préservé du tourisme de masse.</p>

              <p className="font-bold">Mahahual - Côte caribéenne authentique</p>
              <p>Petit village de pêcheurs transformé en station balnéaire décontractée. Plages tranquilles, snorkeling sur le récif, ambiance chill.</p>
            </div>
          </div>

          {/* Budget */}
          <div className="w-full max-w-2xl mx-auto !mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Budget détaillé</h2>
            <div className="bg-[#f5f5f7] rounded-[40px] p-10 space-y-5 shadow-sm">
              {[
                { l: "Vols A/R", p: "700€" },
                { l: "Location voiture (14 jours)", p: "400€" },
                { l: "Hébergements (14 nuits)", p: "700€" },
                { l: "Nourriture", p: "350€" },
                { l: "Activités & visites", p: "200€" },
                { l: "Divers", p: "50€" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-600 font-medium">{item.l}</span>
                  <span className="text-[#f56300] font-bold text-xl">{item.p}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-6">
                <span className="text-2xl font-bold">TOTAL</span>
                <span className="text-4xl font-bold text-[#f56300]">2400€</span>
              </div>
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="max-w-2xl w-full text-center space-y-12 mb-20">
            <h2 className="text-4xl font-bold text-[#1d1d1f]">Mes conseils pratiques</h2>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-[#1d1d1f]">Meilleure période</h3>
              <p className="text-xl text-[#f56300] font-bold mb-2">Novembre à avril = saison sèche</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Mai à octobre : saison des pluies et ouragans possibles. L&apos;hiver offre un climat parfait (25-30°C).
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Transport</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Location de voiture recommandée</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Indispensable pour explorer les cenotes et avoir de la flexibilité. Les routes sont bonnes et la conduite facile.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Sécurité</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Yucatan = zone très sûre</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Le Yucatan est l&apos;une des régions les plus sûres du Mexique. Vigilance classique suffisante.
              </p>
            </div>
          </div>

          {/* Erreurs à éviter */}
          <div className="w-full max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Erreurs à éviter</h2>
            <div className="space-y-6 text-left">
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Rester seulement à Cancún</p>
                <p className="text-gray-700">Cancún est très touristique et artificiel. Le vrai Yucatan se trouve ailleurs : Tulum, Valladolid, Bacalar...</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Visiter Chichén Itzá en milieu de journée</p>
                <p className="text-gray-700">Foule massive et chaleur écrasante entre 10h et 15h. Venez à l&apos;ouverture (8h) !</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Sous-estimer les distances</p>
                <p className="text-gray-700">Le Yucatan est grand. Prévoyez du temps pour les trajets entre les villes (2-4h souvent).</p>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-[#f5f5f7] text-center w-full flex flex-col items-center border-t border-gray-200">
        <div className="max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#1d1d1f]">Tu prépares ton voyage au Mexique ?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Je peux créer ton itinéraire 100% personnalisé avec les meilleurs cenotes et sites mayas à explorer.
          </p>
          <Link
            href="/services"
            className="inline-block px-12 py-4 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white transition-all transform hover:scale-105 font-bold text-lg"
          >
            Découvrir mes services
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
