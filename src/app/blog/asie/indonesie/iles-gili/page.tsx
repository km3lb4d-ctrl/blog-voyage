'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function IlesGiliPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Îles Gili</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Trois îles paradisiaques sans voitures, sanctuaire des tortues marines.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir les Îles Gili</h2>
              <p className="text-gray-700 mb-6">
                Les trois îles Gili (Trawangan, Meno et Air) au large de Lombok sont un paradis tropical sans voitures
                ni scooters. On s'y déplace à vélo ou en cidomo (calèche à cheval). Eaux cristallines, plages de sable
                blanc, tortues marines, récifs coralliens et ambiance décontractée font des Gili une escale incontournable.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Gili Trawangan</strong> - La plus festive avec bars, restaurants et fêtes nocturnes</li>
                <li><strong>Gili Meno</strong> - La plus calme et romantique, parfaite pour lune de miel</li>
                <li><strong>Gili Air</strong> - Équilibre entre animation et tranquillité</li>
                <li><strong>Snorkeling & Plongée</strong> - Observer tortues, raies et poissons tropicaux</li>
                <li><strong>Tour des trois îles</strong> - Excursion en bateau d'une journée</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mai-septembre (éviter janvier-mars)<br />
                <strong>Durée recommandée :</strong> 3-5 jours<br />
                <strong>Transport :</strong> Fast boat depuis Bali (1h30) ou Lombok (30 min), vélos sur place<br />
                <strong>Conseil :</strong> Combiner Gili T (animation) et Gili Meno (détente) pour expérience complète
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
