'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function MarocPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Maroc</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Royaume millénaire, entre médinas impériales, désert du Sahara et montagnes de l'Atlas.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir le Maroc</h2>
              <p className="text-gray-700 mb-6">
                Le Maroc enchante par ses contrastes saisissants et son hospitalité légendaire. Des souks parfumés
                de Marrakech aux dunes dorées du Sahara, en passant par les médinas bleues et blanches,
                ce royaume offre un voyage sensoriel inoubliable.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Destinations principales</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Marrakech</strong> - Place Jemaa el-Fna et souks colorés</li>
                <li><strong>Fès</strong> - Médina médiévale et tanneries</li>
                <li><strong>Chefchaouen</strong> - Ville bleue perchée dans le Rif</li>
                <li><strong>Sahara</strong> - Dunes d'Erg Chebbi et nuits sous les étoiles</li>
                <li><strong>Essaouira</strong> - Port atlantique et plages ventées</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Mars-mai et septembre-novembre<br />
                <strong>Langue :</strong> Arabe et français<br />
                <strong>Monnaie :</strong> Dirham marocain (MAD)<br />
                <strong>Visa :</strong> Exemption pour de nombreuses nationalités
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
