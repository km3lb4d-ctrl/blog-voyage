import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BaliPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Article */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80"
            alt="Bali Indonésie"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 w-full">
          <p className="text-[#f56300] font-semibold mb-4 uppercase tracking-widest text-sm">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white leading-tight">
            Bali & les îles Gili<br />entre temples et plages
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            2-3 semaines de découverte entre culture balinaise, rizières verdoyantes et îles paradisiaques
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
              <p className="text-3xl font-bold text-[#f56300]">2200€</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Budget total</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">4 zones</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Mai-Oct</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Période</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU DE L'ARTICLE */}
      <article className="!py-20 flex flex-col items-center w-full">
        <div className="max-w-4xl w-full px-4 text-center flex flex-col items-center">

          <h2 className="text-4xl font-bold mb-8 text-[#1d1d1f]">Mon itinéraire complet</h2>

          <p className="text-[#1d1d1f] text-lg leading-relaxed !mb-12 max-w-3xl">
            Bali et les îles Gili offrent un équilibre parfait entre culture, nature et détente.
            Entre temples sacrés, rizières en terrasses et eaux turquoise, ce voyage promet
            des expériences inoubliables dans l&apos;un des joyaux de l&apos;Asie du Sud-Est.
          </p>

          {/* Semaine 1 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Semaine 1 : Ubud et le centre de Bali (7 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1555400082-95fc9a633877?w=1200&q=80" alt="Ubud Bali" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Jours 1-4 : Ubud, cœur culturel</p>
              <p>Ubud est le centre spirituel et artistique de Bali. Forêt des singes, palais royal, marchés traditionnels et rizières de Tegallalang à couper le souffle.</p>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">✨ Moment magique</p>
                <p className="text-gray-700 leading-relaxed">Lever de soleil sur le Mont Batur à 1717m. Randonnée de nuit de 2h, puis contemplation du lever de soleil avec vue sur le volcan Agung. Inoubliable !</p>
              </div>

              <p className="font-bold">Jours 5-7 : Temples et cascades</p>
              <p>Visite des temples Tirta Empul (bassins sacrés), Gunung Kawi et exploration des cascades cachées de Tegenungan et Tibumana.</p>
            </div>
          </div>

          {/* Semaine 2 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Semaine 2 : Îles Gili (7 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80" alt="Îles Gili" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Les trois îles Gili (Trawangan, Meno, Air) sont de véritables paradis. Pas de voitures, que des vélos et cidomo (calèches à chevaux).</p>
              <p className="font-bold text-xl pt-4">Les incontournables :</p>
              <ul className="space-y-3 list-none p-0 flex flex-col items-center">
                <li>• Snorkeling avec tortues marines</li>
                <li>• Plongée sous-marine (spots incroyables)</li>
                <li>• Couchers de soleil à Gili T</li>
                <li>• Vélo tour de Gili Meno (la plus calme)</li>
              </ul>

              <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">💡 Conseil pratique</p>
                <p className="text-gray-700 leading-relaxed">Gili Trawangan pour la fête, Gili Meno pour le romantisme, Gili Air pour l&apos;équilibre parfait. Je recommande de faire les 3 !</p>
              </div>
            </div>
          </div>

          {/* Semaine 3 optionnelle */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Semaine 3 (optionnelle) : Sud de Bali</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1537953773345-d172ccf13cf1?w=1200&q=80" alt="Sud Bali" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Le sud de Bali offre de superbes plages et des spots de surf réputés. Seminyak pour le luxe, Canggu pour les surfeurs, Uluwatu pour les temples en bord de falaise.</p>
              <p>Le temple d&apos;Uluwatu au coucher du soleil avec le spectacle de danse Kecak est un moment fort du voyage.</p>
            </div>
          </div>

          {/* Budget */}
          <div className="w-full max-w-2xl mx-auto !mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Budget détaillé</h2>
            <div className="bg-[#f5f5f7] rounded-[40px] p-10 space-y-5 shadow-sm">
              {[
                { l: "Vols A/R", p: "650€" },
                { l: "Hébergements (21 nuits)", p: "800€" },
                { l: "Nourriture", p: "400€" },
                { l: "Activités & excursions", p: "200€" },
                { l: "Transport local & scooter", p: "100€" },
                { l: "Divers", p: "50€" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-600 font-medium">{item.l}</span>
                  <span className="text-[#f56300] font-bold text-xl">{item.p}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-6">
                <span className="text-2xl font-bold">TOTAL</span>
                <span className="text-4xl font-bold text-[#f56300]">2200€</span>
              </div>
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="max-w-2xl w-full text-center space-y-12 mb-20">
            <h2 className="text-4xl font-bold text-[#1d1d1f]">Mes conseils pratiques</h2>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-[#1d1d1f]">Meilleure période</h3>
              <p className="text-xl text-[#f56300] font-bold mb-2">Mai à octobre = saison sèche</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Éviter janvier-mars (saison des pluies). Juillet-août très touristique mais météo parfaite.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Transport</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Scooter recommandé</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Louer un scooter est le meilleur moyen de découvrir Bali en toute liberté. Attention à la conduite à gauche !
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Langue</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Anglais largement parlé</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                L&apos;anglais est bien répandu dans les zones touristiques. Quelques mots de bahasa indonésien font toujours plaisir !
              </p>
            </div>
          </div>

          {/* Erreurs à éviter */}
          <div className="w-full max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Erreurs à éviter</h2>
            <div className="space-y-6 text-left">
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Sous-estimer les distances</p>
                <p className="text-gray-700">Bali est plus grand qu&apos;on ne pense. Prévoir du temps pour les trajets entre régions.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Négliger les temples</p>
                <p className="text-gray-700">Respecter les codes vestimentaires (sarong obligatoire). Les temples ferment souvent à 17h.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Rester seulement dans le sud</p>
                <p className="text-gray-700">Le vrai Bali se trouve à Ubud et dans les montagnes. Le sud est très urbanisé et touristique.</p>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-[#f5f5f7] text-center w-full flex flex-col items-center border-t border-gray-200">
        <div className="max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#1d1d1f]">Tu prépares ton voyage à Bali ?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Je peux créer ton itinéraire 100% personnalisé avec tous mes bons plans et adresses testées.
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
