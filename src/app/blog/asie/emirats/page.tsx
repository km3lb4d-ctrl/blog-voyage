'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function EmiratsPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Émirats Arabes Unis</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Oasis futuriste du désert, symbole de luxe et de démesure architecturale.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir les Émirats Arabes Unis</h2>
              <p className="text-gray-700 mb-6">
                Les Émirats Arabes Unis incarnent l'alliance entre traditions bédouines et modernité ultra-sophistiquée.
                De Dubaï et ses gratte-ciels aux dunes dorées du désert, ce pays offre une expérience unique
                de luxe et d'aventure.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Dubaï</strong> - Burj Khalifa, malls géants et îles artificielles</li>
                <li><strong>Abu Dhabi</strong> - Grande Mosquée et île de Yas</li>
                <li><strong>Désert</strong> - Safari en 4x4 et camps bédouins</li>
                <li><strong>Al Ain</strong> - Oasis verdoyante et sites UNESCO</li>
                <li><strong>Sharjah</strong> - Capitale culturelle et musées</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (hiver doux)<br />
                <strong>Langue :</strong> Arabe (anglais largement parlé)<br />
                <strong>Monnaie :</strong> Dirham (AED)<br />
                <strong>Visa :</strong> Visa on arrival ou e-visa selon nationalité
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
