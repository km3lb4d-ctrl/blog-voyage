import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PouillPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Article */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1566993221640-1d9c4e34d4b2?w=1200&q=80"
            alt="Pouilles Italie"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 w-full">
          <p className="text-[#f56300] font-semibold mb-4 uppercase tracking-widest text-sm">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white leading-tight">
            Les Pouilles<br />en 5 jours
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Italie authentique : villages blancs, trulli et plages cristallines
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-12 bg-[#f5f5f7] border-b border-[#d2d2d7] w-full flex justify-center">
        <div className="max-w-4xl w-full px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#f56300]">5 jours</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Durée</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">850€</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Budget total</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">4 villes</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Mai-Sep</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Période</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU DE L'ARTICLE */}
      <article className="!py-20 flex flex-col items-center w-full">
        <div className="max-w-4xl w-full px-4 text-center flex flex-col items-center">

          <h2 className="text-4xl font-bold mb-8 text-[#1d1d1f]">Itinéraire express</h2>

          <p className="text-[#1d1d1f] text-lg leading-relaxed !mb-12 max-w-3xl">
            Les Pouilles, région du talon de la botte italienne, offrent un visage authentique de l&apos;Italie
            du Sud. Villages blancs perchés, maisons trulli uniques au monde, plages de sable fin et cuisine
            méditerranéenne exceptionnelle. Une destination encore préservée du tourisme de masse.
          </p>

          {/* Jour 1 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jour 1 : Bari et Polignano a Mare</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1609142307943-904c58b66ca6?w=1200&q=80" alt="Polignano a Mare" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Arrivée à Bari, capitale des Pouilles. Balade dans la vieille ville (Bari Vecchia) avec ses ruelles étroites et la Basilica di San Nicola.</p>
              <p className="font-bold">Après-midi à Polignano a Mare</p>
              <p>Village spectaculaire perché sur des falaises. Ses maisons blanches surplombant la mer Adriatique offrent des vues à couper le souffle. Parfait pour le coucher de soleil.</p>
            </div>
          </div>

          {/* Jour 2 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jour 2 : Alberobello et ses trulli</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1568849676085-51415703900f?w=1200&q=80" alt="Alberobello trulli" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Les trulli d&apos;Alberobello - UNESCO</p>
              <p>Ces maisons coniques en pierre blanche datent du XIVe siècle. Un paysage unique au monde ! Le quartier Rione Monti compte plus de 1000 trulli.</p>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">✨ Conseil photo</p>
                <p className="text-gray-700 leading-relaxed">Lever de soleil depuis le belvédère du Rione Monti. Lumière magique et peu de touristes à cette heure !</p>
              </div>

              <p>Possibilité de dormir dans un trullo transformé en hébergement. Expérience authentique garantie !</p>
            </div>
          </div>

          {/* Jour 3 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jour 3 : Ostuni, la ville blanche</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1590767048855-1bacc2e65a56?w=1200&q=80" alt="Ostuni" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Ostuni, perchée sur trois collines, est entièrement peinte à la chaux blanche. Un labyrinthe de ruelles fleuries absolument magnifique.</p>
              <p>Vue panoramique sur la mer Adriatique et les oliviers centenaires des environs. Ambiance paisible et romantique.</p>

              <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">🍝 Gastronomie</p>
                <p className="text-gray-700 leading-relaxed">Goûtez les orecchiette (pâtes en forme d&apos;oreille), la burrata locale et l&apos;huile d&apos;olive des Pouilles - exceptionnelle !</p>
              </div>
            </div>
          </div>

          {/* Jour 4-5 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 4-5 : Lecce et les plages du Salento</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1585848683927-c01be4d0ee72?w=1200&q=80" alt="Lecce" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Lecce, la Florence du Sud</p>
              <p>Ville baroque aux façades sculptées dans la pierre dorée. Basilica di Santa Croce, Piazza del Duomo, amphithéâtre romain... un patrimoine architectural exceptionnel.</p>

              <p className="font-bold pt-4">Plages du Salento</p>
              <p>Terminez par les plages paradisiaques : Porto Cesareo, Torre Lapillo, Punta Prosciutto. Eaux turquoise dignes des Caraïbes !</p>
            </div>
          </div>

          {/* Budget */}
          <div className="w-full max-w-2xl mx-auto !mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Budget détaillé</h2>
            <div className="bg-[#f5f5f7] rounded-[40px] p-10 space-y-5 shadow-sm">
              {[
                { l: "Vols A/R", p: "150€" },
                { l: "Location voiture (5 jours)", p: "200€" },
                { l: "Hébergements (5 nuits)", p: "300€" },
                { l: "Nourriture", p: "150€" },
                { l: "Essence & divers", p: "50€" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-600 font-medium">{item.l}</span>
                  <span className="text-[#f56300] font-bold text-xl">{item.p}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-6">
                <span className="text-2xl font-bold">TOTAL</span>
                <span className="text-4xl font-bold text-[#f56300]">850€</span>
              </div>
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="max-w-2xl w-full text-center space-y-12 mb-20">
            <h2 className="text-4xl font-bold text-[#1d1d1f]">Mes conseils pratiques</h2>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-[#1d1d1f]">Meilleure période</h3>
              <p className="text-xl text-[#f56300] font-bold mb-2">Mai-juin et septembre</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Juillet-août très chaud et bondé. Le printemps et début automne offrent un climat parfait.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Transport</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Voiture indispensable</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Les villages sont éloignés les uns des autres. La location de voiture est essentielle pour cette région.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Langue</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Italien, peu d&apos;anglais</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                L&apos;anglais est peu parlé. Quelques mots d&apos;italien et Google Translate vous aideront !
              </p>
            </div>
          </div>

          {/* Erreurs à éviter */}
          <div className="w-full max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Erreurs à éviter</h2>
            <div className="space-y-6 text-left">
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Visiter en plein été</p>
                <p className="text-gray-700">Juillet-août : 40°C à l&apos;ombre et foules énormes. Préférer mai-juin ou septembre.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Conduire dans les centres historiques</p>
                <p className="text-gray-700">Les vieux centres sont souvent interdits aux voitures (ZTL). Garez-vous à l&apos;extérieur.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Négliger les villages</p>
                <p className="text-gray-700">Ne vous limitez pas aux villes principales. Les petits villages blancs sont le vrai charme des Pouilles.</p>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-[#f5f5f7] text-center w-full flex flex-col items-center border-t border-gray-200">
        <div className="max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#1d1d1f]">Tu prépares ton voyage dans les Pouilles ?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Je peux créer ton itinéraire personnalisé avec les plus beaux villages et plages authentiques.
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
