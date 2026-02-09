'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function KohTaoPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Koh Tao</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Île Tortue, Mecque mondiale de la plongée sous-marine.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Koh Tao</h2>
              <p className="text-gray-700 mb-6">
                Koh Tao, "l'Île Tortue", est la destination de plongée la plus populaire de Thaïlande. Cette petite
                île du golfe de Thaïlande offre des conditions idéales pour apprendre à plonger, avec une eau claire,
                une vie marine abondante et des écoles de plongée parmi les moins chères au monde.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Sairee Beach</strong> - Plage principale avec nombreux bars et restaurants</li>
                <li><strong>Sites de plongée</strong> - Chumphon Pinnacle, Sail Rock, Shark Island</li>
                <li><strong>John-Suwan Viewpoint</strong> - Vue panoramique sur l'île</li>
                <li><strong>Tanote Bay</strong> - Baie tranquille pour snorkeling</li>
                <li><strong>Mae Haad</strong> - Village principal avec embarcadère</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mars-septembre pour la plongée<br />
                <strong>Durée recommandée :</strong> 4-7 jours (inclus cours de plongée)<br />
                <strong>Transport :</strong> Ferry depuis Koh Samui ou Chumphon, scooter sur l'île<br />
                <strong>Conseil :</strong> Prévoir budget pour certification PADI Open Water (environ 300€)
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
