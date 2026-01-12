import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function PanamaPage() {
  return (
    <>
      <Navigation />

      {/* Hero Article */}
      <section className="section section-dark min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/panama/panama.jpg"
            alt="Panama"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <p className="text-[#f56300] font-semibold mb-4">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            Panama : Îles du Pacifique<br />La destination sous-estimée
          </h1>
          <p className="text-xl text-[#a1a1a6]">
            5 jours pour découvrir Panama City et les îles magnifiques de Taboga et Saboga
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-12 bg-[#f5f5f7] border-b border-[#d2d2d7]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#f56300]">5j</p>
              <p className="text-[#6e6e73] mt-1">Durée</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">3 îles</p>
              <p className="text-[#6e6e73] mt-1">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Pacifique</p>
              <p className="text-[#6e6e73] mt-1">Côté</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Déc-Avr</p>
              <p className="text-[#6e6e73] mt-1">Saison sèche</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Pourquoi le Panama ?</h2>
            
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Honnêtement ? Je n&apos;avais pas prévu d&apos;aller au Panama.
            </p>

            <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-6 my-6 rounded-r-lg">
              <p className="text-[#1d1d1f] font-semibold mb-2">✈️ L&apos;histoire du vol Air France</p>
              <p className="text-[#424245]">
                En 2020, j&apos;étais en Colombie et je cherchais un vol retour Paris pas cher. 
                Air France proposait un vol direct Panama-Paris à un prix imbattable. 
                J&apos;ai ajouté 5 jours à Panama City avant le retour. Meilleure décision ever.
              </p>
            </div>

            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Résultat ? J&apos;ai découvert un pays sous-estimé, des îles magnifiques, 
              et des gens incroyablement accueillants.
            </p>

            {/* Panama City */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">Panama City : Moderne et surprenante</h3>

            <div className="my-8 rounded-2xl overflow-hidden">
              <img 
                src="/images/panama/panama-buildings.jpg" 
                alt="Panama City"
                className="w-full"
              />
            </div>

            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Panama City m&apos;a surpris. Je m&apos;attendais à une ville moyenne, 
              j&apos;ai découvert une métropole moderne avec des gratte-ciels impressionnants.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Ce que j&apos;ai fait :</h4>
            <ul className="list-disc ml-6 mb-6 text-[#1d1d1f] space-y-2">
              <li><strong>Casco Viejo</strong> : Le quartier colonial. Ruelles pavées, architecture colorée, parfait pour se balader.</li>
              <li><strong>Canal de Panama</strong> : Voir les écluses de Miraflores. Impressionnant de voir ces énormes bateaux passer.</li>
              <li><strong>Causeway</strong> : Promenade en bord de mer avec vue sur les gratte-ciels. Idéal en fin de journée.</li>
              <li><strong>Cinta Costera</strong> : Boulevard moderne en front de mer pour courir ou marcher.</li>
            </ul>

            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              2 jours suffisent pour Panama City. Après, direction les îles !
            </p>

            {/* Îles du Pacifique */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">Les îles du Pacifique : La vraie surprise</h3>

            <div className="my-8 rounded-2xl overflow-hidden">
              <img 
                src="/images/panama/taboga-1.jpg" 
                alt="Taboga"
                className="w-full"
              />
            </div>

            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Tout le monde connaît les îles des San Blas (côté Caraïbes). 
              Presque personne ne parle des îles du Pacifique. Erreur monumentale.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Taboga : L&apos;île aux fleurs</h4>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              À 30 minutes de ferry depuis Panama City. Petit village de pêcheurs, 
              plages tranquilles, eau claire. Parfait pour une journée ou un week-end.
            </p>

            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Ce que j&apos;ai aimé :</strong>
            </p>
            <ul className="list-disc ml-6 mb-6 text-[#1d1d1f] space-y-2">
              <li>Ambiance paisible, pas de tourisme de masse</li>
              <li>Plages propres et peu fréquentées</li>
              <li>Restaurants locaux excellents (fruits de mer frais)</li>
              <li>Vue sur Panama City au loin</li>
            </ul>

            <h4 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Saboga : Encore plus sauvage</h4>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Île voisine de Taboga, encore moins touristique. 
              J&apos;y suis allé en excursion d&apos;une journée depuis Taboga.
            </p>

            <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-6 my-6 rounded-r-lg">
              <p className="text-[#1d1d1f] font-semibold mb-2">🌴 Pourquoi Saboga est spéciale</p>
              <p className="text-[#424245]">
                Presque personne n&apos;y va. Plages désertes, eau turquoise, 
                impression d&apos;être seul au monde. Si tu cherches la tranquillité absolue, c&apos;est ici.
              </p>
            </div>

            {/* Comparaison San Blas vs Pacifique */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">San Blas ou Pacifique ?</h3>

            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              Tout le monde te dira d&apos;aller aux San Blas (côté Caraïbes). 
              C&apos;est magnifique, mais...
            </p>

            <div className="bg-[#f5f5f7] rounded-2xl p-6 mb-8">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-[#1d1d1f] mb-3">🌊 San Blas (Caraïbes)</h4>
                  <ul className="text-[#424245] space-y-2 text-sm">
                    <li>✓ Eau turquoise incroyable</li>
                    <li>✓ Culture Guna authentique</li>
                    <li>✗ Loin (4-5h de route depuis Panama City)</li>
                    <li>✗ Plus cher</li>
                    <li>✗ Très touristique</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold text-[#1d1d1f] mb-3">🏝️ Pacifique (Taboga/Saboga)</h4>
                  <ul className="text-[#424245] space-y-2 text-sm">
                    <li>✓ Proche (30 min de ferry)</li>
                    <li>✓ Moins cher</li>
                    <li>✓ Beaucoup moins touristique</li>
                    <li>✓ Eau claire et belle</li>
                    <li>✗ Moins "carte postale" que San Blas</li>
                  </ul>
                </div>
              </div>
            </div>

            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Mon avis :</strong> Si tu as peu de temps (comme moi avec 5 jours), 
              le Pacifique est parfait. Si tu as 10+ jours, fais les deux !
            </p>

            {/* Conseils pratiques */}
            <h2 className="text-3xl font-bold mt-16 mb-6 text-[#1d1d1f]">Mes conseils pratiques</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Quand partir ?</h3>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Décembre à avril</strong> = saison sèche. J&apos;y étais en novembre (fin de saison pluies), 
              pas de problème mais quelques averses.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Langue</h3>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Espagnol indispensable. À Panama City, quelques personnes parlent anglais. 
              Sur les îles ? Espagnol uniquement. Mon bilinguisme a été crucial.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Budget</h3>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Panama City :</strong> 60-80€/jour (hôtel correct, restos, transports)<br />
              <strong>Taboga/Saboga :</strong> 40-50€/jour (moins cher que la capitale)
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Transport</h3>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Ferry Taboga :</strong> Départ du terminal Amador (Panama City), 10$ A/R, 30 min<br />
              <strong>Saboga :</strong> Excursion depuis Taboga ou bateau local
            </p>

            {/* Pourquoi Panama est sous-estimé */}
            <h2 className="text-3xl font-bold mt-16 mb-6 text-[#1d1d1f]">Pourquoi le Panama est sous-estimé</h2>

            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              Les gens pensent Panama = juste le Canal. Grosse erreur.
            </p>

            <ul className="list-disc ml-6 mb-6 text-[#1d1d1f] space-y-2">
              <li><strong>Diversité :</strong> Ville moderne + îles paradisiaques + jungle + montagnes</li>
              <li><strong>Accueil :</strong> Les Panaméens sont incroyablement gentils et accueillants</li>
              <li><strong>Sécurité :</strong> Je me suis senti en sécurité partout</li>
              <li><strong>Logistique :</strong> Facile à organiser, bien connecté</li>
            </ul>

            <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-6 my-6 rounded-r-lg">
              <p className="text-[#1d1d1f] font-semibold mb-2">💡 Mon conseil final</p>
              <p className="text-[#424245]">
                Le Panama mérite plus que 5 jours. Si je devais y retourner, 
                je ferais 10 jours : Panama City (2j), Taboga/Saboga (3j), San Blas (3j), 
                Boquete montagnes (2j).
              </p>
            </div>

          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-[#f5f5f7] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-[#1d1d1f]">Tu prépares ton voyage au Panama ?</h2>
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