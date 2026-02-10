import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AndalousPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Article */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80"
            alt="Andalousie Espagne"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 w-full">
          <p className="text-[#f56300] font-semibold mb-4 uppercase tracking-widest text-sm">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white leading-tight">
            Road trip<br />en Andalousie
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Parcourir le sud de l&apos;Espagne entre culture mauresque, flamenco et tapas
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-12 bg-[#f5f5f7] border-b border-[#d2d2d7] w-full flex justify-center">
        <div className="max-w-4xl w-full px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#f56300]">1-2 sem.</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Durée</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">1400€</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Budget total</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">5 villes</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Avr-Oct</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Période</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU DE L'ARTICLE */}
      <article className="!py-20 flex flex-col items-center w-full">
        <div className="max-w-4xl w-full px-4 text-center flex flex-col items-center">

          <h2 className="text-4xl font-bold mb-8 text-[#1d1d1f]">Itinéraire du road trip</h2>

          <p className="text-[#1d1d1f] text-lg leading-relaxed !mb-12 max-w-3xl">
            L&apos;Andalousie est une région d&apos;Espagne fascinante où se mêlent influences mauresques,
            traditions espagnoles et paysages contrastés. De Séville à Grenade, en passant par les villages
            blancs et la Costa del Sol, ce road trip offre une immersion totale dans la culture du sud espagnol.
          </p>

          {/* Étape 1 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Étape 1 : Séville (3-4 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1560969184-10fe8719e047?w=1200&q=80" alt="Séville" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Séville, capitale de l&apos;Andalousie, est le point de départ idéal. Ville pleine de vie, de couleurs et de traditions flamenco.</p>
              <p className="font-bold">Les incontournables :</p>
              <ul className="space-y-3 list-none p-0 flex flex-col items-center">
                <li>• Cathédrale et Giralda - Plus grande cathédrale gothique au monde</li>
                <li>• Alcázar - Palais royal aux influences mauresques</li>
                <li>• Plaza de España - Architecture spectaculaire</li>
                <li>• Quartier de Triana - Berceau du flamenco</li>
              </ul>

              <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">🎭 Spectacle flamenco</p>
                <p className="text-gray-700 leading-relaxed">Assistez à un spectacle de flamenco authentique dans une tablao de Triana. L&apos;émotion et la passion sont incroyables !</p>
              </div>
            </div>
          </div>

          {/* Étape 2 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Étape 2 : Cordoue (1-2 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1585849834908-3481231155e8?w=1200&q=80" alt="Cordoue" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Cordoue abrite la célèbre Mezquita, mosquée-cathédrale unique au monde avec ses 856 colonnes.</p>
              <p>Promenez-vous dans le quartier juif (Judería), ses ruelles blanches et ses patios fleuris.</p>
              <p>Le pont romain sur le Guadalquivir offre une belle vue au coucher du soleil.</p>
            </div>
          </div>

          {/* Étape 3 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Étape 3 : Grenade (2-3 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1555881543-e4c1d17b1c28?w=1200&q=80" alt="Grenade" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">L&apos;Alhambra : joyau de l&apos;architecture mauresque</p>
              <p>Réservez vos billets plusieurs semaines à l&apos;avance ! Ce palais-forteresse est absolument magnifique avec ses jardins, fontaines et décorations en stuc.</p>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">✨ Moment magique</p>
                <p className="text-gray-700 leading-relaxed">Coucher de soleil depuis le Mirador de San Nicolás avec vue panoramique sur l&apos;Alhambra et la Sierra Nevada en arrière-plan.</p>
              </div>

              <p>Explorez aussi le quartier de l&apos;Albaicín, ancien quartier mauresque aux ruelles escarpées et aux maisons blanches.</p>
            </div>
          </div>

          {/* Étape 4 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Étape 4 : Villages blancs (2 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1609137144813-7d9921338f24?w=1200&q=80" alt="Villages blancs" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Route des villages blancs (Pueblos Blancos) : Ronda, Zahara de la Sierra, Grazalema, Setenil de las Bodegas.</p>
              <p>Ces petits villages perchés sur les collines offrent des paysages à couper le souffle. Ronda avec son pont vertigineux est particulièrement spectaculaire.</p>
            </div>
          </div>

          {/* Étape 5 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Étape 5 : Costa del Sol (2-3 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1562259929-8c9aa5f1fe58?w=1200&q=80" alt="Costa del Sol" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Terminez en beauté sur les plages de la Costa del Sol. Málaga pour la culture (musée Picasso), Marbella pour le luxe, Nerja pour l&apos;authenticité.</p>
              <p>Profitez du soleil, des tapas en bord de mer et de l&apos;ambiance décontractée méditerranéenne.</p>
            </div>
          </div>

          {/* Budget */}
          <div className="w-full max-w-2xl mx-auto !mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Budget détaillé</h2>
            <div className="bg-[#f5f5f7] rounded-[40px] p-10 space-y-5 shadow-sm">
              {[
                { l: "Location voiture (14 jours)", p: "350€" },
                { l: "Hébergements (14 nuits)", p: "600€" },
                { l: "Nourriture", p: "300€" },
                { l: "Activités & visites", p: "100€" },
                { l: "Essence", p: "50€" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-600 font-medium">{item.l}</span>
                  <span className="text-[#f56300] font-bold text-xl">{item.p}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-6">
                <span className="text-2xl font-bold">TOTAL</span>
                <span className="text-4xl font-bold text-[#f56300]">1400€</span>
              </div>
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="max-w-2xl w-full text-center space-y-12 mb-20">
            <h2 className="text-4xl font-bold text-[#1d1d1f]">Mes conseils pratiques</h2>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-[#1d1d1f]">Meilleure période</h3>
              <p className="text-xl text-[#f56300] font-bold mb-2">Avril-mai et septembre-octobre</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Éviter juillet-août : chaleur extrême (40°C+) et foules touristiques. Le printemps est idéal avec les fleurs.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Transport</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Location de voiture indispensable</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Pour faire le road trip complet et visiter les villages blancs, la voiture est essentielle. Routes en excellent état.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Gastronomie</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Culture des tapas</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                À Grenade, les tapas sont gratuites avec la boisson ! Testez le jambon ibérique, le salmorejo et le pescaíto frito.
              </p>
            </div>
          </div>

          {/* Erreurs à éviter */}
          <div className="w-full max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Erreurs à éviter</h2>
            <div className="space-y-6 text-left">
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Ne pas réserver l&apos;Alhambra à l&apos;avance</p>
                <p className="text-gray-700">Les billets se vendent 2-3 mois à l&apos;avance. Sans réservation, vous ne pourrez pas visiter !</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Conduire dans les centres historiques</p>
                <p className="text-gray-700">Les vieux quartiers ont des ruelles étroites et compliquées. Garez-vous en périphérie et marchez.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Manger trop tôt</p>
                <p className="text-gray-700">Les Espagnols dînent vers 21h-22h. Les restaurants n&apos;ouvrent pas avant 20h30 !</p>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-[#f5f5f7] text-center w-full flex flex-col items-center border-t border-gray-200">
        <div className="max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#1d1d1f]">Tu prépares ton road trip en Andalousie ?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Je peux créer ton itinéraire personnalisé avec les meilleures étapes et adresses testées sur place.
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
