'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BaliPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Bali</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île des Dieux, sanctuaire de spiritualité et de beauté naturelle.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Bali</h2>
              <p className="text-gray-700 mb-6">
                Bali, l'Île des Dieux, est la destination la plus emblématique d'Indonésie. Entre rizières en terrasses,
                temples hindous majestueux, plages paradisiaques, volcans actifs et culture spirituelle profonde,
                Bali offre une expérience unique mêlant nature, tradition et modernité.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ubud</strong> - Centre culturel avec rizières de Tegalalang et Forêt des Singes</li>
                <li><strong>Tanah Lot</strong> - Temple sur rocher au coucher du soleil</li>
                <li><strong>Mont Batur</strong> - Randonnée au lever du soleil sur volcan actif</li>
                <li><strong>Seminyak & Canggu</strong> - Plages branchées avec surf et beach clubs</li>
                <li><strong>Nusa Penida</strong> - Île voisine avec falaises spectaculaires (Kelingking Beach)</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-octobre (saison sèche)<br />
                <strong>Durée recommandée :</strong> 7-14 jours<br />
                <strong>Transport :</strong> Location de scooter obligatoire, applications Grab/Gojek pour taxis<br />
                <strong>Conseil :</strong> Éviter Kuta/Legian, préférer Ubud, Canggu, Sidemen ou Amed
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
