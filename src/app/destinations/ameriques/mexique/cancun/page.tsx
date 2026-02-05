'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function CancunPage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Cancún</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Perle de la Riviera Maya, eaux turquoise et plages de carte postale.
          </p>
        </section>

        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Cancún</h2>
              <p className="text-gray-700 mb-6">
                Cancún, destination balnéaire phare du Mexique, séduit par ses plages de sable blanc immaculé
                bordant la mer des Caraïbes aux eaux turquoise cristallines. Entre resorts all-inclusive,
                vie nocturne animée, sites mayas à proximité et activités nautiques, Cancún est la porte d'entrée
                idéale vers la Riviera Maya.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Sites incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Playa Delfines</strong> - Plage publique moins bondée avec vagues</li>
                <li><strong>Isla Mujeres</strong> - Île paradisiaque accessible en ferry (30 min)</li>
                <li><strong>Chichén Itzá</strong> - Cité maya et merveille du monde (2h30 de route)</li>
                <li><strong>Cenotes</strong> - Piscines naturelles sacrées (Ik Kil, Dos Ojos)</li>
                <li><strong>Xcaret</strong> - Parc éco-archéologique avec spectacles culturels</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Novembre-avril (éviter saison des ouragans juin-novembre)<br />
                <strong>Durée recommandée :</strong> 4-7 jours<br />
                <strong>Transport :</strong> Bus ADO, colectivos, location de voiture pour explorer région<br />
                <strong>Conseil :</strong> Loger dans Zona Hotelera pour plages, Centro pour authenticité
              </p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
