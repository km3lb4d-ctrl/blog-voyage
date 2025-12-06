import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Itineraires() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="section section-dark min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="headline mb-4">Itinéraires de voyages</h1>
        <p className="subheadline text-[#86868b] max-w-2xl px-4">
          Des programmes détaillés jour par jour pour organiser votre prochain voyage.
        </p>
      </section>

      {/* Itinéraires */}
      <section className="py-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          {/* Japon */}
          <article className="bg-white rounded-3xl overflow-hidden mb-8">
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=1200&q=80"
                alt="Japon"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#f56300] text-white px-3 py-1 rounded-full text-sm font-semibold">14 jours</span>
                <span className="text-[#86868b] text-sm">Japon</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Japon : 2 semaines entre tradition et modernité</h2>
              <p className="text-[#86868b] mb-6">
                Un itinéraire équilibré entre les grandes villes et les sites traditionnels du Japon. De Tokyo à Kyoto, en passant par Osaka et Hiroshima.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Points forts :</p>
                  <ul className="text-[#86868b] space-y-1">
                    <li>• Tokyo : Senso-ji, Shibuya, Harajuku</li>
                    <li>• Kyoto : Fushimi Inari, Arashiyama</li>
                    <li>• Nara : les daims sacrés</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Budget estimé :</p>
                  <p className="text-[#86868b]">2000-3000€ par personne (vol inclus)</p>
                </div>
              </div>
            </div>
          </article>

          {/* Costa Rica */}
          <article className="bg-white rounded-3xl overflow-hidden mb-8">
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1518259102261-b40117eabbc9?w=1200&q=80"
                alt="Costa Rica"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#f56300] text-white px-3 py-1 rounded-full text-sm font-semibold">10 jours</span>
                <span className="text-[#86868b] text-sm">Costa Rica</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Costa Rica : 10 jours de pure nature</h2>
              <p className="text-[#86868b] mb-6">
                Le Costa Rica est un paradis pour les amoureux de la nature. Forêts tropicales, volcans et plages paradisiaques.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Points forts :</p>
                  <ul className="text-[#86868b] space-y-1">
                    <li>• Volcan Arenal et sources chaudes</li>
                    <li>• Monteverde : forêt de nuages</li>
                    <li>• Manuel Antonio : plages et singes</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Budget estimé :</p>
                  <p className="text-[#86868b]">1500-2000€ par personne (vol inclus)</p>
                </div>
              </div>
            </div>
          </article>

          {/* Portugal */}
          <article className="bg-white rounded-3xl overflow-hidden mb-8">
            <div className="aspect-[21/9] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80"
                alt="Portugal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-8">
              <div className="flex items-center gap-4 mb-4">
                <span className="bg-[#f56300] text-white px-3 py-1 rounded-full text-sm font-semibold">7 jours</span>
                <span className="text-[#86868b] text-sm">Portugal</span>
              </div>
              <h2 className="text-2xl font-semibold mb-4">Portugal : road trip de Lisbonne à Porto</h2>
              <p className="text-[#86868b] mb-6">
                Le Portugal se prête parfaitement au road trip. Les distances sont courtes et les paysages variés.
              </p>
              <div className="grid md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="font-semibold mb-2">Points forts :</p>
                  <ul className="text-[#86868b] space-y-1">
                    <li>• Lisbonne et Sintra</li>
                    <li>• Vallée du Douro</li>
                    <li>• Porto et ses caves</li>
                  </ul>
                </div>
                <div>
                  <p className="font-semibold mb-2">Budget estimé :</p>
                  <p className="text-[#86868b]">800-1200€ par personne (vol inclus)</p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
