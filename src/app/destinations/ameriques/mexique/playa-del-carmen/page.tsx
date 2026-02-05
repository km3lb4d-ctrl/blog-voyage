'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function PlayaDelCarmenPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Playa del Carmen</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Station balnéaire branchée au cœur de la Riviera Maya.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Playa del Carmen</h2>
              <p className="text-gray-700 mb-6">
                Playa del Carmen, ancien village de pêcheurs devenu station balnéaire cosmopolite, est le point
                central de la Riviera Maya. Avec sa célèbre Quinta Avenida piétonne, ses beach clubs tendance,
                sa proximité avec les cenotes et Cozumel, Playa offre un parfait équilibre entre détente et animation.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Quinta Avenida (5e Avenue)</strong> - Rue piétonne avec boutiques et restaurants</li>
                <li><strong>Cozumel</strong> - Île accessible en ferry pour plongée et snorkeling</li>
                <li><strong>Cenotes Dos Ojos</strong> - Système de grottes sous-marines spectaculaire</li>
                <li><strong>Playa Mamitas</strong> - Beach club populaire avec ambiance festive</li>
                <li><strong>Tulum Ruines</strong> - Site maya en bord de mer (45 min au sud)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril<br />
                <strong>Durée recommandée :</strong> 3-5 jours<br />
                <strong>Transport :</strong> Colectivos le long de la côte, bus ADO, vélos<br />
                <strong>Conseil :</strong> Base idéale pour explorer Riviera Maya (Tulum, Cobá, cenotes, Cozumel)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
