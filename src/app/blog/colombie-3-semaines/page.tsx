import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ColombiePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Article - Aligné centre */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img 
            src="/images/colombie/carthagene.jpg" 
            alt="Carthagène Colombie"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 w-full">
          <p className="text-[#f56300] font-semibold mb-4 uppercase tracking-widest text-sm">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white leading-tight">
            Colombie : 3 semaines<br />entre Caraïbes et montagnes
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Itinéraire complet, budget réel, et tous mes conseils après 3 semaines sur place
          </p>
        </div>
      </section>

      {/* Infos pratiques - Aligné sur le même axe 4xl */}
      <section className="py-12 bg-[#f5f5f7] border-b border-[#d2d2d7] w-full flex justify-center">
        <div className="max-w-4xl w-full px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#f56300]">3 sem.</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Durée</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">2800€</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Budget total</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">3 villes</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Fev</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Période</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU DE L'ARTICLE - CENTRAGE TOTAL SANS PROSE */}
      <article className="!py-20 flex flex-col items-center w-full">
        <div className="max-w-4xl w-full px-4 text-center flex flex-col items-center">
          
          <h2 className="text-4xl font-bold mb-8 text-[#1d1d1f]">Mon itinéraire jour par jour</h2>
          
          <p className="text-[#1d1d1f] text-lg leading-relaxed !mb-12 max-w-3xl">
            La Colombie a été pour moi une révélation. Entre les ruelles colorées de Carthagène, 
            les montagnes de Bogotá et les plages paradisiaques de San Andrés, j&apos;ai vécu 
            3 semaines intenses très loin des clichés d'insécurité qui peuvent encore en repousser quelques uns.
          </p>

          {/* Semaine 1 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Semaine 1 : Carthagène et îles Rosario (7 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="/images/colombie/carthagene.jpg" alt="Carthagène" className="w-full h-auto" />
            </div>
            
            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Jours 1-3 : Carthagène des Indes</p>
              <p>La ville coloniale est magnifique. Murailles historiques, balcons fleuris, ambiance caribéenne. Je te recommande de te perdre dans Getsemaní, le quartier bohème rempli de street art.</p>
              
              <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">⚠️ Arnaque du premier jour</p>
                <p className="text-gray-700 leading-relaxed">Dès mon arrivée à la plage, deux masseuses m&apos;ont proposé un massage. J&apos;ai accepté... 5€ mais c&apos;était clairement une arnaque pour touristes. Après ça, zéro problème, mais ça refroidit le premier jour !</p>
              </div>

              <p className="font-bold">Jours 4-5 : Îles Rosario</p>
              <p>Excursion d&apos;une journée en bateau. Eau turquoise, snorkeling, plages de carte postale. Parfait pour se reposer entre deux visites urbaines.</p>
            </div>
          </div>

          {/* Semaine 2 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Semaine 2 : Bogotá (7 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="/images/colombie/randonnee-bogota.jpg" alt="Randonnée Bogotá" className="w-full h-auto" />
            </div>
            
            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Bogotá à 2600m d&apos;altitude. L&apos;air est frais, l&apos;ambiance urbaine intense. J&apos;ai adoré le contraste avec Carthagène.</p>
              <p className="font-bold text-xl pt-4">À faire absolument :</p>
              <ul className="space-y-3 list-none p-0 flex flex-col items-center">
                <li>• La Candelaria (quartier historique)</li>
                <li>• Monserrate (funiculaire, vue panoramique)</li>
                <li>• Musée de l&apos;Or (incroyable collection)</li>
                <li>• Randonnée cascade dans l&apos;arrière-pays</li>
              </ul>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">✨ Moment magique</p>
                <p className="text-gray-700 leading-relaxed">Randonnée organisée en petit groupe vers une cascade cachée. 2h de marche, paysages de montagne incroyables, et une cascade où on a pu se baigner. Un des meilleurs souvenirs du voyage.</p>
              </div>
            </div>
          </div>

          {/* Semaine 3 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Semaine 3 : San Andrés (7 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="/images/colombie/san-andres.jpg" alt="San Andrés" className="w-full h-auto" />
            </div>
            
            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Île caribéenne à 700km des côtes. Eaux cristallines, ambiance relax, parfait pour terminer en beauté.</p>
              <p>J&apos;ai loué un scooter pour faire le tour de l&apos;île. Johnny Cay, la plage de Spratt Bight, et le fameux Sea of Seven Colors sont incontournables.</p>
            </div>
          </div>

          {/* Budget - Aligné centre */}
          <div className="w-full max-w-2xl mx-auto !mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Budget détaillé</h2>
            <div className="bg-[#f5f5f7] rounded-[40px] p-10 space-y-5 shadow-sm">
              {[
                { l: "Vols A/R Paris-Bogota", p: "600€" },
                { l: "Hébergements (21 nuits)", p: "1000€" },
                { l: "Nourriture", p: "600€" },
                { l: "Activités", p: "250€" },
                { l: "Transport local", p: "150€" },
                { l: "Divers", p: "250€" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-600 font-medium">{item.l}</span>
                  <span className="text-[#f56300] font-bold text-xl">{item.p}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-6">
                <span className="text-2xl font-bold">TOTAL</span>
                <span className="text-4xl font-bold text-[#f56300]">2800€</span>
              </div>
            </div>
          </div>

          {/* Conseils & Sécurité - CORRIGÉ POUR LISIBILITÉ */}
          <div className="max-w-2xl w-full text-center space-y-12 mb-20">
            <h2 className="text-4xl font-bold text-[#1d1d1f]">Mes consrreils pratiques</h2>
            
            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-[#1d1d1f]">Sécurité</h3>
              <ul className="space-y-4 list-none p-0 text-lg text-[#1d1d1f]">
                <li className="flex flex-col items-center">
                  <span className="font-bold text-[#f56300]">San Andrés</span>
                  <span className="text-[#424245]">Très sûr, aucun problème</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-bold text-[#f56300]">Carthagène</span>
                  <span className="text-[#424245]">Sûr avec vigilance classique</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="font-bold text-[#f56300]">Bogotá</span>
                  <span className="text-[#424245]">Variable selon quartiers. Candelaria OK en journée.</span>
                </li>
              </ul>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Meilleure période</h3>
              <p className="text-xl text-[#f56300] font-bold mb-2">Novembre à mars = saison sèche</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                J&apos;y étais en février, temps parfait partout. Éviter avril-mai (saison pluies).
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Langue</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Espagnol obligatoire</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Très peu parlent anglais hors zones ultra-touristiques. Mon bilinguisme m&apos;a sauvé !
              </p>
            </div>
          </div>

          {/* Erreurs à éviter */}
          <div className="w-full max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Erreurs à éviter</h2>
            <div className="space-y-6 text-left">
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Trop de jours à San Andrés</p>
                <p className="text-gray-700">5 jours auraient suffi. 7 jours c&apos;est trop pour une petite île.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Pas assez de temps à Bogotá</p>
                <p className="text-gray-700">J&apos;aurais dû rester 10 jours. La ville mérite plus.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Sauter Medellín</p>
                <p className="text-gray-700">Pas eu le temps, mais tout le monde dit que c&apos;est incontournable.</p>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-[#f5f5f7] text-center w-full flex flex-col items-center border-t border-gray-200">
        <div className="max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#1d1d1f]">Tu prépares ton voyage en Colombie ?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Je peux créer ton itinéraire 100% personnalisé avec recherches bilingues et contacts locaux.
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