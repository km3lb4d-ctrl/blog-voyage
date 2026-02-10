import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function IstanbulPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Article */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80"
            alt="Istanbul Turquie"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 w-full">
          <p className="text-[#f56300] font-semibold mb-4 uppercase tracking-widest text-sm">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white leading-tight">
            Istanbul<br />entre Orient et Occident
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Une semaine pour découvrir la ville où l&apos;Europe rencontre l&apos;Asie
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-12 bg-[#f5f5f7] border-b border-[#d2d2d7] w-full flex justify-center">
        <div className="max-w-4xl w-full px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#f56300]">5-7 jours</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Durée</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">1200€</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Budget total</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">2 rives</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Côtés du Bosphore</p>
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

          <h2 className="text-4xl font-bold mb-8 text-[#1d1d1f]">Découverte d&apos;Istanbul</h2>

          <p className="text-[#1d1d1f] text-lg leading-relaxed !mb-12 max-w-3xl">
            Istanbul est une ville fascinante où cohabitent mosquées ottomanes, palais somptueux,
            bazars millénaires et quartiers modernes. Une destination unique qui réunit l&apos;histoire
            de deux continents et où se mêlent les cultures d&apos;Orient et d&apos;Occident.
          </p>

          {/* Partie 1 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 1-3 : Sultanahmet, cœur historique</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1541432901042-2d8bd64b4a9b?w=1200&q=80" alt="Sultanahmet" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Les incontournables de Sultanahmet :</p>
              <ul className="space-y-3 list-none p-0 flex flex-col items-center">
                <li>• Sainte-Sophie (Hagia Sophia) - Chef-d&apos;œuvre byzantin</li>
                <li>• Mosquée Bleue - 6 minarets et céramiques magnifiques</li>
                <li>• Palais de Topkapi - Ancien palais des sultans ottomans</li>
                <li>• Citerne Basilique - Impressionnant réservoir souterrain</li>
              </ul>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">✨ Moment magique</p>
                <p className="text-gray-700 leading-relaxed">Assister au coucher du soleil depuis la terrasse d&apos;un café avec vue sur le Bosphore et les mosquées illuminées. Un spectacle inoubliable !</p>
              </div>
            </div>
          </div>

          {/* Partie 2 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 4-5 : Grand Bazar et quartier de Galata</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1527838832700-5059252407fa?w=1200&q=80" alt="Grand Bazar" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Grand Bazar et marchés</p>
              <p>Le Grand Bazar compte plus de 4000 boutiques ! Un labyrinthe coloré où l&apos;on trouve tapis, épices, bijoux et céramiques. N&apos;oubliez pas de négocier !</p>
              <p>Le Bazar Égyptien (marché aux épices) est tout aussi impressionnant avec ses parfums enivrants.</p>

              <p className="font-bold pt-4">Tour de Galata et Istiklal</p>
              <p>Montez au sommet de la Tour de Galata pour une vue panoramique à 360° sur Istanbul. Ensuite, baladez-vous sur l&apos;avenue Istiklal, artère animée pleine de boutiques, cafés et galeries d&apos;art.</p>

              <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">🍽️ Gastronomie turque</p>
                <p className="text-gray-700 leading-relaxed">Ne manquez pas les kebabs, les mezze, le baklava et surtout un vrai petit-déjeuner turc (kahvaltı). Le thé et le café turc sont partout !</p>
              </div>
            </div>
          </div>

          {/* Partie 3 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 6-7 : Croisière sur le Bosphore et côté asiatique</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1583421994522-6464451cf506?w=1200&q=80" alt="Bosphore" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Une croisière sur le Bosphore est essentielle pour comprendre la géographie unique d&apos;Istanbul. Vous naviguez entre deux continents en admirant palais, forteresses et villas ottomanes.</p>
              <p>Traversez ensuite vers la rive asiatique (Kadıköy ou Üsküdar) pour une ambiance plus locale et authentique. Excellent pour le shopping et les restaurants traditionnels.</p>
            </div>
          </div>

          {/* Budget */}
          <div className="w-full max-w-2xl mx-auto !mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Budget détaillé</h2>
            <div className="bg-[#f5f5f7] rounded-[40px] p-10 space-y-5 shadow-sm">
              {[
                { l: "Vols A/R", p: "300€" },
                { l: "Hébergements (7 nuits)", p: "450€" },
                { l: "Nourriture", p: "250€" },
                { l: "Activités & visites", p: "120€" },
                { l: "Transport local", p: "50€" },
                { l: "Divers", p: "30€" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-600 font-medium">{item.l}</span>
                  <span className="text-[#f56300] font-bold text-xl">{item.p}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-6">
                <span className="text-2xl font-bold">TOTAL</span>
                <span className="text-4xl font-bold text-[#f56300]">1200€</span>
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
                Éviter juillet-août (très chaud et très touristique) et l&apos;hiver qui peut être froid et pluvieux.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Transport</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Carte Istanbulkart</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Indispensable ! Elle fonctionne pour le métro, tram, bus, ferry. Rechargeable partout et très économique.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Langue</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Turc, anglais dans les zones touristiques</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                L&apos;anglais est compris dans les hôtels et restaurants touristiques. Quelques mots de turc sont appréciés !
              </p>
            </div>
          </div>

          {/* Erreurs à éviter */}
          <div className="w-full max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Erreurs à éviter</h2>
            <div className="space-y-6 text-left">
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Accepter le premier prix au bazar</p>
                <p className="text-gray-700">La négociation fait partie de la culture. Les prix affichés sont souvent 3x plus élevés que le juste prix.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Ignorer la rive asiatique</p>
                <p className="text-gray-700">Le côté asiatique est moins touristique mais tout aussi intéressant. Ne restez pas seulement en Europe !</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Oublier de retirer ses chaussures</p>
                <p className="text-gray-700">Dans les mosquées, retirez vos chaussures et respectez les codes vestimentaires (épaules et genoux couverts).</p>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-[#f5f5f7] text-center w-full flex flex-col items-center border-t border-gray-200">
        <div className="max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#1d1d1f]">Tu prépares ton voyage à Istanbul ?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Je peux créer ton itinéraire personnalisé avec tous les bons plans pour profiter au maximum de cette ville unique.
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
