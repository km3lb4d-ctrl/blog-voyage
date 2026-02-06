'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function TulumPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Tulum</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Ruines mayas face à la mer, plages bohèmes et cenotes sacrés.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Tulum</h2>
              <p className="text-gray-700 mb-6">
                Tulum, destination bohème-chic de la Riviera Maya, séduit par son mélange unique de ruines mayas
                spectaculaires surplombant la mer des Caraïbes, plages paradisiaques bordées de cabañas écologiques,
                cenotes mystiques et ambiance spirituelle. Tulum est devenue la destination préférée des digital nomads
                et yogis du monde entier.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Ruines de Tulum</strong> - Cité maya fortifiée avec vue sur la mer Caraïbes</li>
                <li><strong>Gran Cenote</strong> - Cenote cristallin idéal pour snorkeling avec tortues</li>
                <li><strong>Plage de Tulum</strong> - Sable blanc avec cabañas et beach clubs bohèmes</li>
                <li><strong>Cobá</strong> - Site maya avec pyramide Nohoch Mul (42 m) à escalader</li>
                <li><strong>Cenote Dos Ojos</strong> - Système de cavernes sous-marines pour plongée</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril<br />
                <strong>Durée recommandée :</strong> 3-5 jours<br />
                <strong>Transport :</strong> Vélos entre pueblo et plage (3 km), colectivos, location voiture/scooter<br />
                <strong>Conseil :</strong> Loger dans pueblo (moins cher) ou zone hôtelière (accès plage direct)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
