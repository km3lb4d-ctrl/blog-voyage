'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function KohSamuiPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Koh Samui</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île tropicale du golfe de Thaïlande, cocotiers et plages de rêve.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Koh Samui</h2>
              <p className="text-gray-700 mb-6">
                Koh Samui, deuxième plus grande île de Thaïlande, est un paradis tropical réputé pour ses plages
                bordées de palmiers, ses resorts luxueux et son atmosphère décontractée. Entre cascades, temples,
                marchés nocturnes et spots de plongée, l'île offre un équilibre parfait entre détente et aventure.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Chaweng Beach</strong> - Plage principale avec ambiance festive</li>
                <li><strong>Lamai Beach</strong> - Alternative plus calme à Chaweng</li>
                <li><strong>Big Buddha</strong> - Temple doré de 12 mètres</li>
                <li><strong>Cascades de Na Muang</strong> - Chutes d'eau en pleine jungle</li>
                <li><strong>Ang Thong Marine Park</strong> - Archipel de 42 îles protégées</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Décembre-août (éviter octobre-novembre)<br />
                <strong>Durée recommandée :</strong> 4-6 jours<br />
                <strong>Transport :</strong> Location de scooter recommandée, taxis-songthaews<br />
                <strong>Conseil :</strong> Réserver ferry + bus combiné depuis Bangkok ou vol direct
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
