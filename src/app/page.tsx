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
      <section className="section section-light">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="headline mb-8">C'est ici</h2>
          <h2 className="headline mb-8">que</h2>
          <h2 className="headline mb-8">l'aventure commence</h2>
          <div className="body-text space-y-6 text-left max-w-3xl mx-auto !mt-16">
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
      <section className="py-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="headline text-center mb-12">Explorez le blog</h2>

          <div className="space-y-8">
            {/* Carnet de bord */}
            <Link href="/carnet-de-bord" className="group">
              <div className="bg-white rounded-3xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=800&q=80"
                    alt="Carnet de bord"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Carnet de bord</h3>
                  <p className="text-[#86868b] text-sm">
                    Tous mes récits de voyage : Lisbonne, Marrakech, Islande, Bali et bien d&apos;autres destinations.
                  </p>
                </div>
              </div>
            </Link>

            {/* Itinéraires */}
            <Link href="/itineraires" className="group">
              <div className="bg-white rounded-3xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80"
                    alt="Itinéraires"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Itinéraires de voyages</h3>
                  <p className="text-[#86868b] text-sm">
                    Des programmes détaillés jour par jour pour organiser votre prochain voyage.
                  </p>
                </div>
              </div>
            </Link>

            {/* Conseils */}
            <Link href="/conseils" className="group">
              <div className="bg-white rounded-3xl overflow-hidden transition-transform duration-300 group-hover:-translate-y-2 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 aspect-[4/3] overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
                    alt="Conseils"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 md:w-1/2">
                  <h3 className="text-xl font-semibold mb-2">Conseils de Voyage</h3>
                  <p className="text-[#86868b] text-sm">
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
          <p className="body-text text-[#86868b] mb-8">
            Inscrivez-vous à la newsletter pour recevoir les derniers articles et conseils directement dans votre boîte mail.
          </p>
          <Link href="/contact" className="btn-primary btn-blue">
            S&apos;inscrire à la newsletter
          </Link>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </>
  );
}
