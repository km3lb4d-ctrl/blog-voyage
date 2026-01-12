import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function MexiquePage() {
  return (
    <>
      <Navigation />

      {/* Hero Article */}
      <section className="section section-dark min-h-[70vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/colombie/cafe-del-mar.jpg"
            alt="Mexique Yucatan"
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="relative z-10 max-w-4xl px-4">
          <p className="text-[#f56300] font-semibold mb-4">Guide de voyage</p>
          <h1 className="text-5xl sm:text-7xl font-bold mb-6">
            Mexique : Guide Yucatan<br />entre Caraïbes et cénotes
          </h1>
          <p className="text-xl text-[#a1a1a6]">
            30 jours cumulés sur 3 voyages : mes spots préférés, le problème des sargasses, et l&apos;anecdote du guide
          </p>
        </div>
      </section>

      {/* Infos pratiques */}
      <section className="py-12 bg-[#f5f5f7] border-b border-[#d2d2d7]">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid sm:grid-cols-4 gap-6 text-center">
            <div>
              <p className="text-3xl font-bold text-[#f56300]">30j</p>
              <p className="text-[#6e6e73] mt-1">3 voyages</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Yucatan</p>
              <p className="text-[#6e6e73] mt-1">Région</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">5 villes</p>
              <p className="text-[#6e6e73] mt-1">Destinations</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#f56300]">Nov-Avr</p>
              <p className="text-[#6e6e73] mt-1">Meilleure période</p>
            </div>
          </div>
        </div>
      </section>

      {/* Article content */}
      <article className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold mb-6 text-[#1d1d1f]">Mes 3 voyages au Yucatan</h2>
            
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Le Mexique, et plus précisément la péninsule du Yucatan, c&apos;est ma zone de confort. 
              J&apos;y suis allé 3 fois (2014, 2019, 2023) pour un total de 30 jours. 
              Plages des Caraïbes, cénotes mystérieux, sites mayas, et une culture riche.
            </p>

            {/* Destinations principales */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">Mes destinations préférées</h3>

            <h4 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Playa del Carmen</h4>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Ma base préférée. Plus authentique que Cancún, bien située pour rayonner. 
              5e Avenue animée, plages magnifiques, et excellent point de départ pour les excursions.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Tulum</h4>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Les ruines mayas face à la mer = carte postale. Ambiance bohème-chic, 
              mais attention : beaucoup plus cher que le reste du Yucatan.
            </p>

            <h4 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Isla Mujeres ⭐</h4>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Mon coup de cœur absolu.</strong> Petite île au large de Cancún. 
              Tranquille, pas trop touristique, plages superbes. Et en 2023, la SEULE destination 
              du Yucatan sans sargasses (algues).
            </p>

            <div className="bg-[#e8f5e9] border-l-4 border-[#2a9d8f] p-6 my-6 rounded-r-lg">
              <p className="text-[#1d1d1f] font-semibold mb-2">✨ Pourquoi Isla Mujeres est parfaite</p>
              <p className="text-[#424245]">
                En 2023, les sargasses (algues brunes) ont envahi TOUTES les plages du Yucatan. 
                Tulum ? Playa del Carmen ? Cancún ? Impraticable. Isla Mujeres ? Nickel. 
                Grâce aux courants, l&apos;île est protégée. C&apos;est devenu mon plan B systématique.
              </p>
            </div>

            <h4 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Cozumel</h4>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Île plus grande, excellente pour la plongée et snorkeling. 
              Récifs coralliens incroyables. Parfait pour 2-3 jours.
            </p>

            {/* Chichen Itza anecdote */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">Chichen Itza : L&apos;anecdote du guide</h3>

            <div className="bg-[#fff3e0] border-l-4 border-[#f56300] p-6 my-6 rounded-r-lg">
              <p className="text-[#1d1d1f] font-semibold mb-2">😅 Moment gênant...</p>
              <p className="text-[#424245] mb-3">
                Excursion organisée à Chichen Itza avec un groupe de Français. 
                Le guide était présenté comme &quot;francophone&quot;.
              </p>
              <p className="text-[#424245]">
                Sauf que... son français était catastrophique. Il parlait en espagnol 
                et essayait de traduire. Au bout de 10 minutes, il s&apos;est tourné vers moi : 
                <em>&quot;Toi tu parles espagnol non ? Tu peux traduire pour le groupe ?&quot;</em>
              </p>
              <p className="text-[#424245] mt-3">
                J&apos;ai passé 2h à traduire pour 20 personnes. Le guide était content, 
                le groupe aussi. Moi un peu moins 😅
              </p>
            </div>

            {/* Cénotes */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">Les cénotes : Incontournables</h3>

            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              Les cénotes sont des puits naturels d&apos;eau douce, sacrés pour les Mayas. 
              Il y en a des centaines dans le Yucatan.
            </p>

            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Mes préférés :</strong>
            </p>
            <ul className="list-disc ml-6 mb-6 text-[#1d1d1f] space-y-2">
              <li><strong>Gran Cenote</strong> (près de Tulum) : Eau cristalline, snorkeling avec tortues</li>
              <li><strong>Cenote Azul</strong> : Moins touristique, parfait pour nager</li>
              <li><strong>Cenote Ik Kil</strong> (près de Chichen Itza) : Spectaculaire, un peu crowdé</li>
            </ul>

            {/* Sargasses 2023 */}
            <h3 className="text-2xl font-bold mt-12 mb-4 text-[#1d1d1f]">Le problème des sargasses (2023)</h3>

            <p className="text-[#1d1d1f] leading-relaxed mb-4">
              En 2023, j&apos;ai vécu le pire : des tonnes d&apos;algues brunes (sargasses) 
              sur TOUTES les plages des Caraïbes mexicaines.
            </p>

            <div className="bg-[#ffebee] border-l-4 border-red-500 p-6 my-6 rounded-r-lg">
              <p className="text-[#1d1d1f] font-semibold mb-2">⚠️ Destinations impactées</p>
              <ul className="text-[#424245] space-y-1">
                <li>❌ Playa del Carmen : Plages impraticables</li>
                <li>❌ Tulum : Idem</li>
                <li>❌ Cancún : Très impacté</li>
                <li>✅ Isla Mujeres : Aucun problème !</li>
              </ul>
            </div>

            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Ma solution :</strong> Passer plus de temps à Isla Mujeres et dans les cénotes. 
              Les cénotes sont en pleine jungle, donc zéro sargasses.
            </p>

            {/* Conseils pratiques */}
            <h2 className="text-3xl font-bold mt-16 mb-6 text-[#1d1d1f]">Mes conseils pratiques</h2>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Quand partir ?</h3>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>Novembre à avril</strong> = saison sèche. Évite mai-octobre (pluies + ouragans + sargasses).
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Langue</h3>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              Espagnol indispensable dès que tu sors des zones ultra-touristiques. 
              Mon bilinguisme m&apos;a sauvé plusieurs fois.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-3 text-[#1d1d1f]">Budget</h3>
            <p className="text-[#1d1d1f] leading-relaxed mb-6">
              <strong>50-70€/jour</strong> pour un voyageur solo (hôtel correct, restos locaux, quelques excursions). 
              Tulum est 2x plus cher que le reste.
            </p>

            {/* Erreurs à éviter */}
            <h2 className="text-3xl font-bold mt-16 mb-6 text-[#1d1d1f]">Erreurs à éviter</h2>

            <div className="space-y-4 mb-8">
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-[#1d1d1f] mb-1">❌ Rester seulement à Cancún</p>
                <p className="text-[#424245]">Cancún = zone hôtelière sans âme. Utilise-le comme base mais explore.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-[#1d1d1f] mb-1">❌ Ignorer les sargasses</p>
                <p className="text-[#424245]">Vérifie AVANT de partir. Le site sargazomonitoring.com est ton ami.</p>
              </div>
              <div className="border-l-4 border-red-500 pl-4">
                <p className="font-semibold text-[#1d1d1f] mb-1">❌ Zapper les cénotes</p>
                <p className="text-[#424245]">C&apos;est unique au monde. N&apos;en rate pas au moins 2-3.</p>
              </div>
            </div>

          </div>
        </div>
      </article>

      {/* CTA */}
      <section className="py-20 bg-[#f5f5f7] text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-[#1d1d1f]">Tu prépares ton voyage au Mexique ?</h2>
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