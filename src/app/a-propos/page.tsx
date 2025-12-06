import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function APropos() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="section section-dark min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="headline mb-4">À propos</h1>
        <p className="subheadline text-[#86868b] max-w-2xl px-4">
          Découvrez l&apos;histoire derrière Voyages & Facile.
        </p>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex gap-12 items-start">
            {/* Photo */}
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#f5f5f7]">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
                  alt="Photo de profil"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Bio */}
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-6">Qui suis-je ?</h2>
              <div className="body-text space-y-4">
                <p>
                  Passionné(e) de voyage depuis toujours, j&apos;ai eu la chance de parcourir de nombreux pays,
                  des ruelles de Lisbonne aux temples de Bali, en passant par les aurores boréales d&apos;Islande.
                </p>
                <p>
                  J&apos;ai créé <strong>Voyages & Facile</strong> avec une conviction simple :
                  <strong> tout le monde peut voyager</strong>, peu importe son budget ou son expérience.
                  Il suffit souvent d&apos;un peu d&apos;organisation et des bons conseils pour se lancer.
                </p>
                <p>
                  À travers ce blog, je partage mes récits, mes itinéraires testés et approuvés,
                  et tous mes conseils pratiques pour vous aider à préparer vos propres aventures.
                </p>
              </div>

              <h3 className="text-xl font-semibold mt-8 mb-4">Ma philosophie du voyage</h3>
              <ul className="space-y-3 text-[#86868b]">
                <li className="flex items-start gap-3">
                  <span className="text-[#f56300] font-bold">•</span>
                  <span><strong>Authenticité</strong> : privilégier les rencontres locales et les expériences vraies</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f56300] font-bold">•</span>
                  <span><strong>Accessibilité</strong> : prouver qu&apos;on peut voyager avec un petit budget</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#f56300] font-bold">•</span>
                  <span><strong>Respect</strong> : voyager de manière responsable et respectueuse</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
