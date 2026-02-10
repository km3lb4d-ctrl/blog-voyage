import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PanamaPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navigation />

      {/* Hero Article */}
      <section className="min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/images/panama/panama.jpg"
            alt="Panama Pacifique"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4 w-full">
          <p className="text-[#f56300] font-semibold mb-4 uppercase tracking-widest text-sm">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6 text-white leading-tight">
            Panama<br />côte Pacifique
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Découvrir Panama City et les îles du Pacifique, alternatives parfaites à San Blas
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
              <p className="text-3xl font-bold text-[#f56300]">1600€</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Budget total</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">3 îles</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Déc-Avr</p>
              <p className="text-[#6e6e73] mt-1 text-sm uppercase">Période</p>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENU DE L'ARTICLE */}
      <article className="!py-20 flex flex-col items-center w-full">
        <div className="max-w-4xl w-full px-4 text-center flex flex-col items-center">

          <h2 className="text-4xl font-bold mb-8 text-[#1d1d1f]">Découverte du Panama Pacifique</h2>

          <p className="text-[#1d1d1f] text-lg leading-relaxed !mb-12 max-w-3xl">
            Le Panama est bien plus que son canal ! La côte Pacifique offre des îles paradisiaques
            accessibles et authentiques, parfaites pour une escapade tropicale sans les foules.
            Entre modernité de Panama City et nature préservée des îles, ce voyage promet un contraste saisissant.
          </p>

          {/* Partie 1 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 1-2 : Panama City (2 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1589900826684-e4a2e24f6dbc?w=1200&q=80" alt="Panama City" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Panama City, métropole moderne avec des gratte-ciels impressionnants et un centre historique colonial charmant.</p>
              <p className="font-bold">Les incontournables :</p>
              <ul className="space-y-3 list-none p-0 flex flex-col items-center">
                <li>• Casco Viejo - Vieille ville colorée et UNESCO</li>
                <li>• Canal de Panama - Visite des écluses de Miraflores</li>
                <li>• Causeway d&apos;Amador - Balade avec vue sur le Pacifique</li>
                <li>• Marché aux poissons - Fraîcheur et authenticité</li>
              </ul>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">✨ Moment magique</p>
                <p className="text-gray-700 leading-relaxed">Observer le passage d&apos;un cargo géant dans les écluses du canal. Impressionnant de voir l&apos;ingénierie en action !</p>
              </div>
            </div>
          </div>

          {/* Partie 2 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 3-4 : Île Taboga (2 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1200&q=80" alt="Île Taboga" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Surnommée &quot;L&apos;île aux fleurs&quot;, Taboga est accessible en 30 minutes de ferry depuis Panama City. Une île tranquille avec de belles plages.</p>
              <p>Peu de touristes, ambiance locale authentique. Parfait pour se déconnecter et profiter de la mer.</p>

              <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">💡 Bon plan</p>
                <p className="text-gray-700 leading-relaxed">Pas besoin de réserver à l&apos;avance. Ferry direct depuis le terminal de ferries d&apos;Amador, départs réguliers.</p>
              </div>
            </div>
          </div>

          {/* Partie 3 */}
          <div className="w-full !mb-20 flex flex-col items-center">
            <h3 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Jours 5-7 : Île Saboga (3 jours)</h3>
            <div className="rounded-3xl overflow-hidden shadow-xl mb-8 w-full">
              <img src="https://images.unsplash.com/photo-1573843981267-be1999ff37cd?w=1200&q=80" alt="Île Saboga" className="w-full h-auto" />
            </div>

            <div className="max-w-2xl w-full space-y-6 text-[#1d1d1f] text-lg">
              <p>Saboga est encore plus sauvage et préservée. Eaux cristallines, peu d&apos;infrastructures, nature intacte.</p>
              <p>Idéal pour le snorkeling, la pêche et la déconnexion totale. L&apos;île a gardé son authenticité loin du tourisme de masse.</p>
              <p>Quelques hébergements simples chez l&apos;habitant disponibles. Ambiance très conviviale et locale.</p>

              <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-8 my-8 rounded-r-2xl text-left">
                <p className="text-[#1d1d1f] font-bold mb-2">🐠 Snorkeling</p>
                <p className="text-gray-700 leading-relaxed">Les eaux autour de Saboga regorgent de poissons tropicaux. Emportez votre masque et tuba !</p>
              </div>
            </div>
          </div>

          {/* Budget */}
          <div className="w-full max-w-2xl mx-auto !mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Budget détaillé</h2>
            <div className="bg-[#f5f5f7] rounded-[40px] p-10 space-y-5 shadow-sm">
              {[
                { l: "Vols A/R", p: "650€" },
                { l: "Hébergements (7 nuits)", p: "500€" },
                { l: "Nourriture", p: "250€" },
                { l: "Ferries & activités", p: "150€" },
                { l: "Divers", p: "50€" }
              ].map((item, i) => (
                <div key={i} className="flex justify-between items-center border-b border-gray-200 pb-3">
                  <span className="text-gray-600 font-medium">{item.l}</span>
                  <span className="text-[#f56300] font-bold text-xl">{item.p}</span>
                </div>
              ))}
              <div className="flex justify-between items-center pt-6">
                <span className="text-2xl font-bold">TOTAL</span>
                <span className="text-4xl font-bold text-[#f56300]">1600€</span>
              </div>
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="max-w-2xl w-full text-center space-y-12 mb-20">
            <h2 className="text-4xl font-bold text-[#1d1d1f]">Mes conseils pratiques</h2>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-6 text-[#1d1d1f]">Meilleure période</h3>
              <p className="text-xl text-[#f56300] font-bold mb-2">Décembre à avril = saison sèche</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Mai à novembre est la saison des pluies. Privilégier l&apos;hiver pour un temps parfait.
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Monnaie</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Dollar américain (USD)</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                Le Panama utilise le dollar US. Pratique pour les voyageurs venant des États-Unis !
              </p>
            </div>

            <div className="flex flex-col items-center">
              <h3 className="text-2xl font-bold mb-4 text-[#1d1d1f]">Langue</h3>
              <p className="text-lg text-[#1d1d1f] font-semibold mb-2">Espagnol, anglais courant</p>
              <p className="text-[#424245] leading-relaxed max-w-lg">
                L&apos;anglais est assez répandu à Panama City grâce au canal. Moins dans les îles.
              </p>
            </div>
          </div>

          {/* Erreurs à éviter */}
          <div className="w-full max-w-2xl mx-auto mb-20">
            <h2 className="text-4xl font-bold mb-10 text-[#1d1d1f]">Erreurs à éviter</h2>
            <div className="space-y-6 text-left">
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Sous-estimer la chaleur</p>
                <p className="text-gray-700">Panama City est très humide et chaud toute l&apos;année. Hydratez-vous constamment !</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Ignorer les îles du Pacifique</p>
                <p className="text-gray-700">Tout le monde parle de San Blas, mais Taboga et Saboga sont magnifiques et moins touristiques.</p>
              </div>
              <div className="bg-red-50 border-l-8 border-red-500 p-6 rounded-xl">
                <p className="font-bold text-red-700 mb-2">❌ Négliger Casco Viejo</p>
                <p className="text-gray-700">Le centre historique de Panama est un bijou. Prenez le temps de le visiter en journée et en soirée.</p>
              </div>
            </div>
          </div>

        </div>
      </article>

      {/* CTA Final */}
      <section className="py-24 bg-[#f5f5f7] text-center w-full flex flex-col items-center border-t border-gray-200">
        <div className="max-w-2xl px-4">
          <h2 className="text-4xl font-bold mb-6 text-[#1d1d1f]">Tu prépares ton voyage au Panama ?</h2>
          <p className="text-xl text-gray-600 mb-10">
            Je peux créer ton itinéraire personnalisé avec les meilleures îles et bons plans locaux.
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
