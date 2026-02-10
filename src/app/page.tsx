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

      {/* Présentation du blog */}
      <section className="section section-dark relative overflow-hidden">
        {/* Globe en filigrane */}
        <div
          className="absolute inset-0 opacity-15 bg-center bg-no-repeat bg-contain"
          style={{
            backgroundImage: 'url("/images/hero/carte du monde.png")',
          }}
        />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="headline mb-8 text-white">C'est ici</h2>
          <h2 className="headline mb-8 text-white">que</h2>
          <h2 className="headline mb-8 text-white">l'aventure commence</h2>
          <div className="body-text space-y-6 text-left max-w-3xl mx-auto !mt-16 text-[#f5f5f7]">
            <p>
              Ce blog est né d&apos;une passion simple : <strong>rendre le voyage accessible à tous</strong>.
              Trop souvent, on hésite à partir par peur de l&apos;inconnu, par manque d&apos;organisation
              ou simplement parce qu&apos;on ne sait pas par où commencer.
            </p>
            <p>
              Ici, vous trouverez des <strong>récits authentiques</strong> de mes aventures,
              des <strong>itinéraires détaillés</strong> pour vous inspirer et des <strong>conseils pratiques</strong> pour voyager sereinement, même avec un petit budget.
            </p>
            <p>
              Mon objectif ? Vous donner les clés pour <strong>oser partir</strong> et vivre
              des expériences inoubliables, que ce soit pour un week-end en Europe ou un
              road trip à l&apos;autre bout du monde.
            </p>
          </div>
        </div>
      </section>

      {/* Présentation des sections */}
      <section className="min-h-screen bg-[#1d1d1f] flex flex-col items-center justify-center py-20">
        <div className="w-full max-w-5xl mx-auto px-6">
          <h2 className="headline text-center text-white mb-16 px-4">Découvrez mes voyages</h2>

          {/* Blog */}
          <Link href="/blog" className="group block">
            <div className="bg-[#2d2d2d] rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl flex flex-col md:flex-row items-stretch w-full">
              <div className="md:w-1/2 h-80 md:h-96 overflow-hidden">
                <img
                  src="/images/colombie/carthagene.jpg"
                  alt="Blog de voyage"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-10 md:w-1/2 flex flex-col justify-center h-full">
                <h3 className="text-4xl font-bold mb-6 text-white group-hover:text-[#f56300] transition-colors">Blog de voyage</h3>
                <p className="text-[#a1a1a6] text-lg leading-relaxed mb-6">
                  Découvrez mes guides détaillés, itinéraires complets et conseils pratiques pour organiser vos propres aventures à travers le monde.
                </p>
                <div className="inline-flex items-center text-[#0071e3] font-semibold text-lg group-hover:gap-2 transition-all">
                  Voir tous les articles
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Call to action */}
      <section className="section section-dark text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="headline mb-6">Prêt à partir ?</h2>
          <p className="body-text text-[#86868b] mb-12">
            Inscrivez-vous à la newsletter pour recevoir les derniers articles et conseils directement dans votre boîte mail.
          </p>
          <Link
            href="/contact"
            className="cta-button inline-block rounded-full font-semibold transition-all duration-500 ease-out hover:scale-105 active:scale-95"
            style={{
              background: 'linear-gradient(90deg, #ff6b35 0%, #f7931e 100%)',
              color: '#ffffff',
              textDecoration: 'none',
              fontSize: '1.25rem',
              padding: '1.5rem 3rem',
              marginTop: '1rem',
            }}
          >
            S&apos;inscrire à la newsletter
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
