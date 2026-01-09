import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function ColombiePage() {
  return (
    <>
      <Navigation />

      {/* Hero Article */}
      <section className="section section-dark min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/colombie/carthagene.jpg" 
            alt="Carthagène Colombie"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <p className="text-[#f56300] font-semibold mb-4">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            Colombie : 3 semaines<br />entre Caraïbes et montagnes
          </h1>
          <p className="text-xl text-[#a1a1a6]">
            Itinéraire complet, budget réel, et tous mes conseils après 3 semaines sur place
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-12 bg-[#f5f5f7] border-b border-[#d2d2d7]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#f56300]">3 sem.</p>
              <p className="text-[#6e6e73] mt-1">Durée</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">2000€</p>
              <p className="text-[#6e6e73] mt-1">Budget total</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">3 villes</p>
              <p className="text-[#6e6e73] mt-1">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Nov</p>
              <p className="text-[#6e6e73] mt-1">Meilleure période</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Mon itinéraire jour par jour</h2>
            
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              La Colombie a été pour moi une révélation. Entre les ruelles colorées de Carthagène, 
              les montagnes de Bogotá et les plages paradisiaques de San Andrés, j&apos;ai vécu 
              3 semaines intenses en novembre 2020.
            </p>

            {/* Semaine 1 */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">Semaine 1 : Carthagène et îles Rosario (7 jours)</h3>
            
            <div className="my-8 rounded-2xl overflow-hidden">
              <img 
                src="/images/colombie/carthagene.jpg" 
                alt="Carthagène"
                className="w-full"
              />
            </div>

            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              <strong>Jours 1-3 : Carthagène des Indes</strong>
            </p>
            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              La ville coloniale est magnifique. Murailles historiques, balcons fleuris, 
              ambiance caribéenne. Je te recommande de te perdre dans Getsemaní, 
              le quartier bohème rempli de street art.
            </p>

            <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-6 my-6 rounded-r-lg">
              <p className="text-[#1d1d1f] font-semibold mb-2">⚠️ Arnaque du premier jour</p>
              <p className="text-[#424245]">
                Dès mon arrivée à la plage, deux masseuses m&apos;ont proposé un massage. 
                J&apos;ai accepté... 5€ mais c&apos;était clairement une arnaque pour touristes. 
                Après ça, zéro problème, mais ça refroidit le premier jour !
              </p>
            </div>

            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              <strong>Jours 4-5 : Îles Rosario</strong>
            </p>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Excursion d&apos;une journée en bateau. Eau turquoise, snorkeling, plages de carte postale. 
              Parfait pour se reposer entre deux visites urbaines.
            </p>

            {/* Semaine 2 */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">Semaine 2 : Bogotá (7 jours)</h3>

            <div className="my-8 rounded-2xl overflow-hidden">
              <img 
                src="/images/colombie/randonnee-bogota.jpg" 
                alt="Randonnée Bogotá"
                className="w-full"
              />
            </div>

            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              Bogotá à 2600m d&apos;altitude. L&apos;air est frais, l&apos;ambiance urbaine intense. 
              J&apos;ai adoré le contraste avec Carthagène.
            </p>

            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              <strong>À faire absolument :</strong>
            </p>
            <ul className="list-disc ml-6 mb-6 text-[#1d1d1f] space-y-2">
              <li>La Candelaria (quartier historique)</li>
              <li>Monserrate (funiculaire, vue panoramique)</li>
              <li>Musée de l&apos;Or (incroyable collection)</li>
              <li>Randonnée cascade dans l&apos;arrière-pays</li>
            </ul>

            <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-6 my-6 rounded-r-lg">
              <p className="text-[#1d1d1f] font-semibold mb-2">✨ Moment magique</p>
              <p className="text-[#424245]">
                Randonnée organisée en petit groupe vers une cascade cachée. 
                2h de marche, paysages de montagne incroyables, et une cascade 
                où on a pu se baigner. Un des meilleurs souvenirs du voyage.
              </p>
            </div>

            {/* Semaine 3 */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">Semaine 3 : San Andrés (7 jours)</h3>

            <div className="my-8 rounded-2xl overflow-hidden">
              <img 
                src="/images/colombie/san-andres.jpg" 
                alt="San Andrés"
                className="w-full"
              />
            </div>

            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              Île caribéenne à 700km des côtes. Eaux cristallines, ambiance relax, parfait pour terminer en beauté.
            </p>

            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              J&apos;ai loué un scooter pour faire le tour de l&apos;île. Johnny Cay, 
              la plage de Spratt Bight, et le fameux Sea of Seven Colors sont incontournables.
            </p>

            {/* Budget */}
            <h2 className="text-3xl font-bold mt-16 mb-6 text-[#1d1d1f]">Budget détaillé (3 semaines)</h2>

            <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-[#d2d2d7] pb-3">
                  <span className="font-semibold text-[#1d1d1f]">Vols A/R Paris-Carthagène</span>
                  <span className="text-[#f56300] font-bold">280€</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#d2d2d7] pb-3">
                  <span className="font-semibold text-[#1d1d1f]">Hébergements (21 nuits)</span>
                  <span className="text-[#f56300] font-bold">650€</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#d2d2d7] pb-3">
                  <span className="font-semibold text-[#1d1d1f]">Nourriture</span>
                  <span className="text-[#f56300] font-bold">420€</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#d2d2d7] pb-3">
                  <span className="font-semibold text-[#1d1d1f]">Activités</span>
                  <span className="text-[#f56300] font-bold">250€</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#d2d2d7] pb-3">
                  <span className="font-semibold text-[#1d1d1f]">Transport local</span>
                  <span className="text-[#f56300] font-bold">150€</span>
                </div>
                <div className="flex justify-between items-center border-b border-[#d2d2d7] pb-3">
                  <span className="font-semibold text-[#1d1d1f]">Divers</span>
                  <span className="text-[#f56300] font-bold">250€</span>
                </div>
                <div className="flex justify-between items-center pt-3">
                  <span className="font-bold text-xl text-[#1d1d1f]">TOTAL</span>
                  <span className="text-[#f56300] font-bold text-2xl">2000€</span>
                </div>
              </div>
            </div>

            {/* Conseils pratiques */}
            <h2 className="text-3xl font-bold mt-16 mb-6 text-[#1d1d1f]">Mes conseils pratiques</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Sécurité</h3>
            <ul className="list-disc ml-6 mb-6 text-[#1d1d1f] space-y-2">
              <li><strong>San Andrés :</strong> Très sûr, aucun problème</li>
              <li><strong>Carthagène :</strong> Sûr avec vigilance classique (ne pas sortir de grosses liasses)</li>
              <li><strong>Bogotá :</strong> Variable selon quartiers. Candelaria OK en journée, éviter certaines zones la nuit</li>
            </ul>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Meilleure période</h3>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Novembre à mars</strong> = saison sèche. J&apos;y étais en novembre, 
              temps parfait partout. Éviter avril-mai (saison pluies).
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Langue</h3>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Espagnol obligatoire. Très peu parlent anglais hors zones ultra-touristiques. 
              Mon bilinguisme m&apos;a sauvé !
            </p>

            {/* Erreurs à éviter */}
            <h2 className="text-3xl font-bold mt-16 mb-6 text-[#1d1d1f]">Erreurs à éviter</h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-[#1d1d1f] mb-1">❌ Trop de jours à San Andrés</p>
                <p className="text-[#424245]">5 jours auraient suffi. 7 jours c&apos;est trop pour une petite île.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-[#1d1d1f] mb-1">❌ Pas assez de temps à Bogotá</p>
                <p className="text-[#424245]">J&apos;aurais dû rester 10 jours. La ville mérite plus.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-[#1d1d1f] mb-1">❌ Sauter Medellín</p>
                <p className="text-[#424245]">Pas eu le temps, mais tout le monde dit que c&apos;est incontournable.</p>
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-[#f5f5f7] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-[#1d1d1f]">Tu prépares ton voyage en Colombie ?</h2>
          <p className="text-[#424245] mb-8">
            Je peux créer ton itinéraire 100% personnalisé avec recherches bilingues et contacts locaux.
          </p>
          <Link
            href="/services"
            className="inline-block px-8 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors font-medium"
          >
            Découvrir mes services
          </Link>
        </div>
      </section>

      <Footer />
    </>
  );
}