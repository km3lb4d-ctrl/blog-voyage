import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navigation />

      {/* Hero Section */}
      <Hero />

      {/* Présentation */}
      <section className="section section-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1200&q=80")',
          }}
        />
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <h2 className="headline mb-8 text-white">Voyager en Amérique Latine,</h2>
          <h2 className="headline mb-8 text-white">mais</h2>
          <h2 className="headline mb-8 text-white">autrement</h2>
          <div className="body-text space-y-6 text-left max-w-3xl mx-auto !mt-16 text-[#f5f5f7]">
            <p>
              Ce blog est né d&apos;une passion : <strong>l&apos;Amérique Latine</strong>.
            </p>
            <p>
              Après avoir voyagé en Colombie, au Mexique et au Panama, j&apos;ai découvert une réalité :
              les meilleurs bons plans, les restaurants authentiques, les hébergements locaux...
              <strong> tout ça se trouve en espagnol</strong>.
            </p>
            <p>
              Pas sur TripAdvisor. Pas dans les guides français. Dans les blogs colombiens,
              les forums mexicains, les groupes Facebook panaméens.
            </p>
            <p>
              <strong>Bilingue français-espagnol depuis 15 ans</strong>, je crée du contenu qui mixe
              mes expériences terrain et les ressources locales inaccessibles aux voyageurs francophones.
            </p>
          </div>
        </div>
      </section>

      {/* Sections du site */}
      <section className="py-20 bg-[#1d1d1f]">
        <div className="w-full">
          <h2 className="headline text-center text-white px-4" style={{ marginBottom: '64px' }}>
            Sur ce blog
          </h2>

          <div className="space-y-0">
            {/* Blog */}
            <Link href="/blog" className="group block">
              <div className="bg-[#2d2d2d] overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col md:flex-row items-stretch w-full h-[400px]">
                <div className="md:w-1/2 overflow-hidden h-full">
                  <img
                    src="https://images.unsplash.com/photo-1589994965851-a8f479c573a9?w=1200&q=80"
                    alt="Blog Amérique Latine"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center h-full">
                  <h3 className="text-3xl font-bold mb-4 text-white">Mes récits de voyage</h3>
                  <p className="text-[#a1a1a6] text-base">
                    Colombie, Mexique, Panama : ce que j&apos;ai vécu, pas ce que j&apos;ai lu.
                    Photos perso, budgets vrais, erreurs à éviter.
                  </p>
                </div>
              </div>
            </Link>

            {/* Services */}
            <Link href="/services" className="group block">
              <div className="bg-[#2d2d2d] overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col md:flex-row items-stretch w-full h-[400px] relative">
                <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-[#0071e3] rounded-full text-white text-sm font-medium">
                  Nouveau
                </div>
                <div className="md:w-1/2 overflow-hidden h-full">
                  <img
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1200&q=80"
                    alt="Services itinéraires"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center h-full">
                  <h3 className="text-3xl font-bold mb-4 text-white">Itinéraires sur-mesure</h3>
                  <p className="text-[#a1a1a6] text-base">
                    Je crée ton planning personnalisé pour toute destination hispanophone.
                    Recherches bilingues + contacts locaux. À partir de 299€.
                  </p>
                </div>
              </div>
            </Link>

            {/* Destinations */}
            <Link href="/blog" className="group block">
              <div className="bg-[#2d2d2d] overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col md:flex-row items-stretch w-full h-[400px]">
                <div className="md:w-1/2 overflow-hidden h-full">
                  <img
                    src="https://images.unsplash.com/photo-1551632811-561732d1e306?w=1200&q=80"
                    alt="Destinations"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center h-full">
                  <h3 className="text-3xl font-bold mb-4 text-white">Mes destinations</h3>
                  <p className="text-[#a1a1a6] text-base">
                    Colombie ⭐ Mexique ⭐ Panama ⭐ | Pérou • Argentine • Costa Rica • Bolivie
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Ma différence */}
      <section className="section section-dark text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="headline mb-8">Pourquoi Cap sur Amérique Latine ?</h2>
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Expérience terrain</h3>
              <p className="text-[#a1a1a6]">
                3 semaines en Colombie, 30 jours au Mexique, 5 jours au Panama.
                Mes guides gratuits = preuve de qualité.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-3 text-white">Bilingue FR-ES</h3>
              <p className="text-[#a1a1a6]">
                15 ans de pratique. J&apos;accède aux infos locales que
                les Francophones ne trouvent jamais.
              </p>
            </div>
            <div>
              <div className="text-4xl mb-4">✓</div>
              <h3 className="text-xl font-semibold mb-3 text-white">100% transparent</h3>
              <p className="text-[#a1a1a6]">
                Pour les destinations où je ne suis pas allé : je te le dis.
                Et j&apos;explique exactement ma méthode.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="section section-dark text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="headline mb-6">Prêt à partir ?</h2>
          <p className="body-text text-[#86868b] mb-12">
            Découvre mes services d&apos;itinéraires sur-mesure ou inscris-toi à la newsletter
            pour recevoir bons plans et nouveaux articles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/services"
              className="inline-block rounded-full font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95 bg-[#0071e3] hover:bg-[#0077ed] text-white px-8 py-4 text-lg"
            >
              Découvrir mes services
            </Link>
            <Link
              href="/contact"
              className="inline-block rounded-full font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95 border-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5 px-8 py-4 text-lg"
            >
              S&apos;inscrire à la newsletter
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}