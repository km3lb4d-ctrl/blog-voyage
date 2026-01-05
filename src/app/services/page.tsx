import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function ServicesPage() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="section section-dark min-h-[70vh] flex flex-col items-center justify-center text-center px-4">
        <h1 className="headline mb-4">
          Ton voyage en Amérique Latine,<br />
          planifié par un expert bilingue
        </h1>
        <p className="subheadline text-[#86868b] max-w-3xl mb-4">
          Je crée ton itinéraire 100% personnalisé en 48-72h
        </p>
        <p className="text-[#a1a1a6] text-lg">
          Colombie • Mexique • Panama • Pérou • Argentine • Costa Rica
        </p>
      </section>

      {/* Le Problème */}
      <section className="py-20 px-4 bg-white border-b border-[#d2d2d7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8 text-[#1d1d1f]">
            Pourquoi planifier seul est compliqué
          </h2>
          <div className="body-text space-y-4">
            <p className="text-[#1d1d1f]">
              Tu passes <strong className="text-[#1d1d1f]">20-30 heures</strong> à chercher des informations :
            </p>
            <ul className="space-y-3 ml-6">
              <li className="flex items-start gap-3 text-[#1d1d1f]">
                <span className="text-[#f56300] font-bold text-xl">•</span>
                <span>Infos contradictoires sur blogs et forums</span>
              </li>
              <li className="flex items-start gap-3 text-[#1d1d1f]">
                <span className="text-[#f56300] font-bold text-xl">•</span>
                <span>Recommandations TripAdvisor (pièges touristes)</span>
              </li>
              <li className="flex items-start gap-3 text-[#1d1d1f]">
                <span className="text-[#f56300] font-bold text-xl">•</span>
                <span>ChatGPT qui invente des restaurants fermés</span>
              </li>
              <li className="flex items-start gap-3 text-[#1d1d1f]">
                <span className="text-[#f56300] font-bold text-xl">•</span>
                <span>Guides Lonely Planet datés de 3 ans</span>
              </li>
            </ul>
            <p className="pt-4 text-[#1d1d1f]">
              <strong className="text-[#1d1d1f]">Résultat ?</strong> Un itinéraire moyen, et tu rates les vrais bons plans locaux (ceux qui sont en espagnol).
            </p>
          </div>
        </div>
      </section>

      {/* Ma Méthode */}
      <section className="py-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#1d1d1f]">
            Ma méthode de recherche bilingue
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1d1d1f]">Blogs voyage locaux</h3>
              <p className="text-[#424245]">
                Les vrais bons plans que les touristes ne connaissent pas
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1d1d1f]">Forums en espagnol</h3>
              <p className="text-[#424245]">
                Conseils entre locaux, événements, spots secrets
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1d1d1f]">YouTubers du pays</h3>
              <p className="text-[#424245]">
                Découvrir lieux tendance, restaurants authentiques
              </p>
            </div>
            <div className="bg-white rounded-3xl p-8 shadow-sm">
              <h3 className="text-xl font-semibold mb-3 text-[#1d1d1f]">Contact direct prestataires</h3>
              <p className="text-[#424245]">
                Négocier tarifs, vérifier disponibilités en espagnol
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-center text-[#1d1d1f]">Mes packages</h2>
          <p className="text-center text-[#424245] mb-12 max-w-2xl mx-auto text-lg">
            Choisis la formule qui correspond à tes besoins
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Package Essentiel */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2 text-[#1d1d1f]">Essentiel</h3>
              <p className="text-4xl font-bold mb-6 text-[#1d1d1f]">299€</p>
              <ul className="space-y-3 mb-8 flex-grow text-[#1d1d1f]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Itinéraire jour par jour</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Hébergements recommandés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Restaurants sélectionnés</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Transport détaillé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Budget prévisionnel</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Google Maps interactive</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Support WhatsApp 30j</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors font-medium">
                Commander
              </button>
            </div>

            {/* Package Premium */}
            <div className="bg-gradient-to-br from-[#0071e3]/10 to-[#0071e3]/5 rounded-3xl p-8 border-2 border-[#0071e3] flex flex-col relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-[#0071e3] rounded-full text-white text-sm font-medium">
                Populaire
              </div>
              <h3 className="text-2xl font-semibold mb-2 text-[#1d1d1f]">Premium</h3>
              <p className="text-4xl font-bold mb-6 text-[#1d1d1f]">449€</p>
              <ul className="space-y-3 mb-8 flex-grow text-[#1d1d1f]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Tout Essentiel +</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Réservations assistées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Appel Zoom 1h pré-voyage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Support pendant voyage</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>2 révisions incluses</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors font-medium">
                Commander
              </button>
            </div>

            {/* Package VIP */}
            <div className="bg-[#f5f5f7] rounded-3xl p-8 flex flex-col">
              <h3 className="text-2xl font-semibold mb-2 text-[#1d1d1f]">VIP</h3>
              <p className="text-4xl font-bold mb-6 text-[#1d1d1f]">699€</p>
              <ul className="space-y-3 mb-8 flex-grow text-[#1d1d1f]">
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Tout Premium +</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Itinéraire hyper-personnalisé</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>2 appels Zoom</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Révisions illimitées</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#0071e3]">✓</span>
                  <span>Concierge voyage 24/7</span>
                </li>
              </ul>
              <button className="w-full py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors font-medium">
                Commander
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-12 text-center text-[#1d1d1f]">
            Questions fréquentes
          </h2>
          
          <div className="space-y-4">
            <details className="bg-white rounded-2xl p-6 shadow-sm">
              <summary className="text-lg font-semibold cursor-pointer text-[#1d1d1f]">
                Pourquoi te faire confiance si tu es pas allé partout ?
              </summary>
              <p className="mt-4 text-[#424245] leading-relaxed">
                Pour la Colombie, le Mexique et le Panama : je suis allé. 
                Pour les autres destinations : pas encore allé, mais je utilise ma 
                méthodologie de recherche bilingue qui a fait mes voyages exceptionnels.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-sm">
              <summary className="text-lg font-semibold cursor-pointer text-[#1d1d1f]">
                Pourquoi pas juste utiliser ChatGPT ?
              </summary>
              <p className="mt-4 text-[#424245] leading-relaxed">
                ChatGPT donne des recommandations génériques. Moi je cherche en français 
                ET espagnol, je vérifie tout, et je personnalise selon ton profil exact.
              </p>
            </details>

            <details className="bg-white rounded-2xl p-6 shadow-sm">
              <summary className="text-lg font-semibold cursor-pointer text-[#1d1d1f]">
                Quel est le délai de livraison ?
              </summary>
              <p className="mt-4 text-[#424245] leading-relaxed">
                Essentiel et Premium : 72h après questionnaire. VIP : 48h. 
                Si urgence, contacte-moi.
              </p>
            </details>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 px-4 bg-white text-center">
        <h2 className="text-3xl font-semibold mb-4 text-[#1d1d1f]">Prêt à partir ?</h2>
        <p className="text-[#424245] text-lg mb-8 max-w-2xl mx-auto">
          Choisis ton package et reçois ton itinéraire personnalisé en 48-72h
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="px-8 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors font-medium">
            Réserver maintenant
          </button>
          <button className="px-8 py-3 rounded-full border-2 border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3]/5 transition-colors font-medium">
            Appel découverte gratuit
          </button>
        </div>
      </section>

      <Footer />
    </>
  );
}