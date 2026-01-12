import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function BlogPage() {
  return (
    <>
      <Navigation />

      {/* Header */}
<section className="section section-dark min-h-[60vh] flex flex-col items-center justify-center text-center relative overflow-hidden">
  {/* Background Image - Carte Amérique Latine */}
  <div className="absolute inset-0">
    <img 
      src="/images/hero/amlat.jpg" 
      alt="Carte Amérique Latine"
      className="w-full h-full object-cover opacity-30"
    />
  </div>
  
  {/* Content */}
  <div className="relative z-10">
    <h1 className="headline mb-4">Blog de voyage</h1>
    <p className="subheadline text-[#86868b] max-w-2xl px-4">
      Mes récits de voyage en Amérique Latine : itinéraires détaillés, budgets réels, et conseils pratiques
    </p>
  </div>
</section>
      {/* Articles List - Vertical */}
      <section className="py-20 bg-[#f5f5f7]">
        <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          
          {/* Article Colombie - Cliquable */}
          <Link href="/blog/colombie-3-semaines" className="group block">
            <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row">
              <div className="md:w-2/5 aspect-[16/9] md:aspect-auto overflow-hidden">
                <img 
                  src="/images/colombie/carthagene.jpg" 
                  alt="Colombie"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="md:w-3/5 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-sm font-semibold text-[#f56300] bg-[#fff3e0] px-4 py-1.5 rounded-full">
                    ⭐ J&apos;y suis allé
                  </span>
                  <span className="text-sm text-[#6e6e73]">21 jours • 2000€</span>
                </div>
                <h3 className="text-3xl font-bold mb-3 text-[#1d1d1f] group-hover:text-[#f56300] transition-colors">
                  Colombie : Guide complet 3 semaines
                </h3>
                <p className="text-[#424245] mb-6 leading-relaxed">
                  Carthagène des Indes, Bogotá, et San Andrés. Mon itinéraire jour par jour avec budget détaillé, 
                  toutes mes anecdotes (dont l&apos;arnaque du premier jour !), et mes conseils pratiques après 
                  3 semaines sur place.
                </p>
                <div className="flex items-center gap-4 text-sm">
                  <span className="text-[#6e6e73]">📍 Carthagène • Bogotá • San Andrés</span>
                  <span className="text-[#0071e3] font-semibold group-hover:underline ml-auto">
                    Lire l&apos;article →
                  </span>
                </div>
              </div>
            </article>
          </Link>

         {/* Article Mexique - Cliquable */}
<Link href="/blog/mexique-yucatan" className="group block">
  <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row">
    <div className="md:w-2/5 aspect-[16/9] md:aspect-auto overflow-hidden bg-[#e0e0e0] flex items-center justify-center">
      <span className="text-[#6e6e73] text-sm">Photo à venir</span>
    </div>
    <div className="md:w-3/5 p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm font-semibold text-[#f56300] bg-[#fff3e0] px-4 py-1.5 rounded-full">
          ⭐ J&apos;y suis allé
        </span>
        <span className="text-sm text-[#6e6e73]">30 jours cumulés</span>
      </div>
      <h3 className="text-3xl font-bold mb-3 text-[#1d1d1f] group-hover:text-[#f56300] transition-colors">
        Mexique : Guide Yucatan
      </h3>
      <p className="text-[#424245] mb-6 leading-relaxed">
        Cancún, Playa del Carmen, Tulum, Isla Mujeres. Mes 3 voyages au Yucatan, mes spots préférés, 
        le problème des sargasses en 2023, et pourquoi j&apos;ai dû traduire pour le guide à Chichen Itza.
      </p>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-[#6e6e73]">📍 Cancún • Tulum • Isla Mujeres</span>
        <span className="text-[#0071e3] font-semibold group-hover:underline ml-auto">
          Lire l&apos;article →
        </span>
      </div>
    </div>
  </article>
</Link>

          {/* Article Panama - Cliquable */}
<Link href="/blog/panama-pacifique" className="group block">
  <article className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col md:flex-row">
    <div className="md:w-2/5 aspect-[16/9] md:aspect-auto overflow-hidden">
      <img 
        src="/images/panama/panama.jpg" 
        alt="Panama"
        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      />
    </div>
    <div className="md:w-3/5 p-8">
      <div className="flex items-center gap-3 mb-4">
        <span className="text-sm font-semibold text-[#f56300] bg-[#fff3e0] px-4 py-1.5 rounded-full">
          ⭐ J&apos;y suis allé
        </span>
        <span className="text-sm text-[#6e6e73]">5 jours</span>
      </div>
      <h3 className="text-3xl font-bold mb-3 text-[#1d1d1f] group-hover:text-[#f56300] transition-colors">
        Panama : Îles du Pacifique
      </h3>
      <p className="text-[#424245] mb-6 leading-relaxed">
        Panama City, Taboga et Saboga. Un court séjour motivé par un vol Air France à prix attractif, 
        mais qui m&apos;a fait découvrir des îles magnifiques et un pays sous-estimé.
      </p>
      <div className="flex items-center gap-4 text-sm">
        <span className="text-[#6e6e73]">📍 Panama City • Taboga • Saboga</span>
        <span className="text-[#0071e3] font-semibold group-hover:underline ml-auto">
          Lire l&apos;article →
        </span>
      </div>
    </div>
  </article>
</Link>

        </div>
      </section>

      {/* CTA - CENTRÉ */}
      <section className="py-20 bg-white">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-[#1d1d1f]">Tu prépares ton voyage ?</h2>
          <p className="text-[#424245] mb-8">
            Je crée des itinéraires sur-mesure pour toute l&apos;Amérique Latine avec mes recherches bilingues.
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