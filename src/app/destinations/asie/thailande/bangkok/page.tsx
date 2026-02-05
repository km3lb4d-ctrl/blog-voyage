'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function BangkokPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Bangkok</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Capitale vibrante de la Thaïlande, entre temples dorés et vie nocturne.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Bangkok</h2>
              <p className="text-gray-700 mb-6">
                Bangkok, capitale énergique de la Thaïlande, est une métropole fascinante où gratte-ciels modernes
                côtoient temples bouddhistes dorés. Entre marchés flottants, street food délicieuse, palais royaux
                et vie nocturne animée, Bangkok offre une expérience urbaine unique en Asie du Sud-Est.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Grand Palais</strong> - Complexe royal avec le Bouddha d'Émeraude</li>
                <li><strong>Wat Pho</strong> - Temple du Bouddha couché de 46 mètres</li>
                <li><strong>Wat Arun</strong> - Temple de l'Aube au bord du fleuve Chao Phraya</li>
                <li><strong>Khao San Road</strong> - Rue mythique des backpackers</li>
                <li><strong>Marchés flottants</strong> - Damnoen Saduak ou Amphawa</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-février (saison fraîche)<br />
                <strong>Durée recommandée :</strong> 3-4 jours<br />
                <strong>Transport :</strong> BTS Skytrain, MRT métro, tuk-tuk, taxis et bateaux<br />
                <strong>Conseil :</strong> Porter des vêtements couvrant épaules et genoux pour les temples
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
