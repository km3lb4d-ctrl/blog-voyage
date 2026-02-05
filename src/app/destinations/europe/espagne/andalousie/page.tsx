'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function AndalousiePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Andalousie</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Sud espagnol passionné, entre flamenco, tapas et héritage mauresque.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir l'Andalousie</h2>
              <p className="text-gray-700 mb-6">
                L'Andalousie, région du sud de l'Espagne, enchante par son mélange unique de cultures chrétienne,
                juive et musulmane. Entre les palais mauresques, le flamenco passionné et les villages blancs
                perchés, elle incarne l'âme de l'Espagne traditionnelle.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Alhambra de Grenade</strong> - Palais mauresque joyau de l'architecture islamique</li>
                <li><strong>Séville</strong> - Cathédrale, Alcázar et quartier de Triana</li>
                <li><strong>Cordoue</strong> - Mosquée-cathédrale unique au monde</li>
                <li><strong>Ronda</strong> - Village spectaculaire sur gorges</li>
                <li><strong>Villages blancs</strong> - Pueblos blancos de la sierra</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-mai et octobre (très chaud en été)<br />
                <strong>Durée recommandée :</strong> 7-10 jours<br />
                <strong>Transport :</strong> Voiture pour explorer les villages<br />
                <strong>Spécialités :</strong> Gazpacho, salmorejo, jambon ibérique
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
