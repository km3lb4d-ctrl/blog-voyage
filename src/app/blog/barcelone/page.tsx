import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BarcelonePage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Article */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80"
            alt="Barcelone Espagne"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 w-full">
          <p className="text-[#f56300] font-semibold mb-4 uppercase tracking-widest text-sm">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white leading-tight">
            Barcelone<br />city trip parfait
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            3 à 5 jours pour découvrir Gaudí, les Ramblas et la culture catalane
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-12 bg-[#f5f5f7] border-b border-[#d2d2d7] w-full flex justify-center">
        <div className="max-w-4xl w-full px-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#f56300]">3-5 jours</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Durée</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">950€</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Budget total</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">5 quartiers</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Zones clés</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Toute l&apos;année</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Période</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU DE L'ARTICLE */}
      <article className="!py-20 flex flex-col items-center w-full">
        <div className="max-w-4xl w-full px-4 text-center flex flex-col items-center">

          <h2 className="text-4xl font-bold mb-8 text-[#1d1d1f]">Découverte de Barcelone</h2>

          <p className="text-[#1d1d1f] text-lg leading-relaxed !mb-12 max-w-3xl">
            Barcelone combine à merveille architecture moderniste de Gaudí, quartiers historiques,
            plages urbaines et gastronomie catalane. Une ville vibrante où culture, art et vie nocturne
            se mêlent dans une ambiance méditerranéenne unique.
          </p>

          {/* Jour 1 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jour 1 : La Sagrada Família et l&apos;Eixample</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1523531294919-4bcd7c65e216?w=1200&q=80" alt="Sagrada Família" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Sagrada Família - Chef-d&apos;œuvre de Gaudí</p>
              <p>La basilique emblématique de Barcelone, en construction depuis 1882. Architecture époustouflante et symbolisme religieux fascinant. Réservez vos billets à l&apos;avance (plusieurs semaines) !</p>

              <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">⚠️ Réservation obligatoire</p>
                <p className="text-gray-700 leading-relaxed">Billets souvent complets 1-2 mois à l&apos;avance en haute saison. Réservez dès que possible sur le site officiel.</p>
              </div>

              <p className="font-bold">Après-midi dans l&apos;Eixample</p>
              <p>Découvrez Casa Batlló et Casa Milà (La Pedrera), deux autres chefs-d&apos;œuvre de Gaudí. Promenez-vous sur Passeig de Gràcia, l&apos;avenue des boutiques de luxe.</p>
            </div>
          </div>

          {/* Jour 2 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jour 2 : Park Güell et Gràcia</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1539037116277-4db20889f2d4?w=1200&q=80" alt="Park Güell" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Park Güell, jardin public avec vue panoramique sur Barcelone. Mosaïques colorées, structures organiques, banc ondulant - l&apos;univers imaginatif de Gaudí dans un parc.</p>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">✨ Meilleur moment</p>
                <p className="text-gray-700 leading-relaxed">Tôt le matin (8h-9h) pour éviter la foule et profiter de la lumière douce pour les photos.</p>
              </div>

              <p className="font-bold">Quartier de Gràcia</p>
              <p>Quartier bohème aux ruelles charmantes, places animées et ambiance authentique loin des touristes. Parfait pour déjeuner dans un restaurant local.</p>
            </div>
          </div>

          {/* Jour 3 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jour 3 : Quartier Gothique et Barceloneta</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1562883676-8c7feb83f09b?w=1200&q=80" alt="Quartier Gothique" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Barri Gòtic (Quartier Gothique)</p>
              <p>Centre historique médiéval avec ses ruelles étroites. Cathédrale de Barcelone, Plaça del Rei, Pont del Bisbe... l&apos;histoire de la ville à chaque coin de rue.</p>
              <p>Promenez-vous sur Les Ramblas (attention aux pickpockets !) et visitez le marché de La Boqueria pour ses étals colorés.</p>

              <p className="font-bold pt-4">Plages de Barceloneta</p>
              <p>Terminez la journée sur les plages urbaines. Barceloneta est la plus accessible, idéale pour se détendre avec un cocktail en regardant le coucher de soleil.</p>

              <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">🍤 Tapas catalanes</p>
                <p className="text-gray-700 leading-relaxed">Dégustez pan con tomate, patatas bravas, jamón ibérico et fruits de mer frais dans les bars à tapas du quartier Gothique !</p>
              </div>
            </div>
          </div>

          {/* Jours bonus */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 4-5 (optionnels) : Montjuïc et El Born</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1562883468-2af8b13d8e56?w=1200&q=80" alt="Montjuïc" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p className="font-bold">Montjuïc</p>
              <p>Colline avec vue panoramique, château, Musée National d&apos;Art de Catalogne et fontaine magique (spectacle le soir).</p>

              <p className="font-bold">El Born</p>
              <p>Quartier branché avec boutiques de créateurs, bars à vin et Palau de la Música Catalana (salle de concert moderniste spectaculaire).</p>
            </div>
          </div>

          {/* Budget */}
          <div className="w-full max-w-2xl mx-auto !mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Budget détaillé (4 jours)</h2>
            <div className="bg-[#f5f5f7] rounded-[40px] p-10 space-y-5 shadow-sm">
              {[
                { l: "Vols A/R", p: "150€" },
                { l: "Hébergements (4 nuits)", p: "400€" },
                { l: "Nourriture", p: "250€" },
                { l: "Visites & activités", p: "100€" },
                { l: "Transport local", p: "50€" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-600 font-medium">{item.l}</span>
                  <span className="text-[#f56300] font-bold text-xl">{item.p}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-6">
                <span className="text-2xl font-bold">TOTAL</span>
                <span className="text-4xl font-bold text-[#f56300]">950€</span>
              </div>
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="max-w-2xl w-full text-center space-y-12 mb-20">
            <h2 className="text-4xl font-bold text-[#1d1d1f]">Mes conseils pratiques</h2>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-[#1d1d1f]">Meilleure période</h3>
              <p className="text-xl text-[#f56300] font-bold mb-2">Avril-juin et septembre-octobre</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Éviter juillet-août : chaleur intense et foules. Le printemps et l&apos;automne offrent un temps agréable.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Transport</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Métro très efficace</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Carte T-10 (10 trajets) économique et pratique. La ville se visite facilement à pied et en métro.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Sécurité</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Attention aux pickpockets</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Surtout sur les Ramblas et dans le métro. Gardez vos affaires près de vous et restez vigilant.
              </p>
            </div>
          </div>

          {/* Erreurs à éviter */}
          <div className="w-full max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Erreurs à éviter</h2>
            <div className="space-y-6 text-left">
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Ne pas réserver les visites Gaudí</p>
                <p className="text-gray-700">Sagrada Família, Casa Batlló et Park Güell requièrent une réservation à l&apos;avance. Sans ça, longues files d&apos;attente ou impossibilité d&apos;entrer.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Manger sur les Ramblas</p>
                <p className="text-gray-700">Restaurants touristiques et chers sur les Ramblas. Éloignez-vous de 2-3 rues pour trouver l&apos;authentique et le bon rapport qualité-prix.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Ignorer les horaires espagnols</p>
                <p className="text-gray-700">Déjeuner 14h-15h, dîner 21h-22h. Les restaurants n&apos;ouvrent pas avant 20h30 pour le dîner !</p>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-[#f5f5f7] text-center w-full flex flex-col items-center border-t border-gray-200">
        <div className="max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#1d1d1f]">Tu prépares ton city trip à Barcelone ?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Je peux créer ton itinéraire personnalisé avec tous les bons plans pour profiter au maximum de cette ville magique.
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
