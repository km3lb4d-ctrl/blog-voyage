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
      <section className="min-h-screen bg-[#1d1d1f] flex flex-col items-center py-20">
        <div className="w-full mt-56">
          <h2 className="headline text-center text-white px-4" style={{ marginBottom: '64px' }}>Explorez le blog</h2>

          <div className="space-y-0">
            {/* Itinéraires */}
            <Link href="/itineraires" className="group block">
              <div className="bg-[#2d2d2d] overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col md:flex-row items-stretch w-full h-[400px]">
                <div className="md:w-1/2 overflow-hidden h-full">
                  <img
                    src="/images/colombie/randonnee-bogota.jpg"
                    alt="Itinéraires"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center h-full">
                  <h3 className="text-3xl font-bold mb-4 text-white">Itinéraires de voyages</h3>
                  <p className="text-[#a1a1a6] text-base">
                    Des programmes détaillés jour par jour pour organiser votre prochain voyage.
                  </p>
                </div>
              </div>
            </Link>

            {/* Conseils */}
            <Link href="/conseils" className="group block">
              <div className="bg-[#2d2d2d] overflow-hidden transition-all duration-500 ease-out group-hover:-translate-y-2 group-hover:shadow-2xl flex flex-col md:flex-row items-stretch w-full h-[400px]">
                <div className="md:w-1/2 overflow-hidden h-full">
                  <img
                    src="/images/colombie/san-andres.jpg"
                    alt="Conseils"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-8 md:w-1/2 flex flex-col justify-center h-full">
                  <h3 className="text-3xl font-bold mb-4 text-white">Conseils de Voyage</h3>
                  <p className="text-[#a1a1a6] text-base">
                    Astuces pratiques : préparer son sac, gérer son budget, photographier ses souvenirs.
                  </p>
                </div>
              </div>
            </Link>
          </div>
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
