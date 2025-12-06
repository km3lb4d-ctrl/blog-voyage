import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Conseils() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="section section-dark min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="headline mb-4">Conseils de Voyage</h1>
        <p className="subheadline text-[#86868b] max-w-2xl px-4">
          Astuces pratiques pour voyager sereinement et profiter au maximum de vos aventures.
        </p>
      </section>

      {/* Conseils */}
      <section className="py-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Préparer son sac */}
          <article className="bg-white rounded-3xl overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80"
                alt="Préparer son sac"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">Comment bien préparer son sac de voyage</h2>
              <p className="text-[#86868b] text-sm mb-4">
                La règle d&apos;or : moins c&apos;est mieux. Un sac de 7-10 kg est idéal pour la plupart des voyages.
              </p>
              <ul className="text-sm text-[#86868b] space-y-1">
                <li>• Roulez vos vêtements</li>
                <li>• Formats voyage pour les liquides</li>
                <li>• Copies des documents importants</li>
              </ul>
            </div>
          </article>

          {/* Photographie */}
          <article className="bg-white rounded-3xl overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=800&q=80"
                alt="Photographie"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">10 conseils pour réussir ses photos de voyage</h2>
              <p className="text-[#86868b] text-sm mb-4">
                Pas besoin d&apos;être professionnel pour ramener de belles photos.
              </p>
              <ul className="text-sm text-[#86868b] space-y-1">
                <li>• Lumière dorée matin/soir</li>
                <li>• Règle des tiers</li>
                <li>• Incluez des personnes</li>
              </ul>
            </div>
          </article>

          {/* Budget */}
          <article className="bg-white rounded-3xl overflow-hidden">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80"
                alt="Budget"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6">
              <h2 className="text-xl font-semibold mb-3">Voyager avec un petit budget</h2>
              <p className="text-[#86868b] text-sm mb-4">
                Voyager ne doit pas coûter une fortune. Voici comment réduire vos dépenses intelligemment.
              </p>
              <ul className="text-sm text-[#86868b] space-y-1">
                <li>• Réservez vols en milieu de semaine</li>
                <li>• Cuisinez dans les auberges</li>
                <li>• Free walking tours</li>
              </ul>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
