import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import CardGrid from '@/components/CardGrid';

export default function CarnetDeBord() {
  const articles = [
    {
      title: 'Lisbonne',
      subtitle: 'Portugal',
      image: 'https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80',
      dark: false,
    },
    {
      title: 'Marrakech',
      subtitle: 'Maroc',
      image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80',
      dark: true,
    },
    {
      title: 'Islande',
      subtitle: 'Aurores boréales',
      image: 'https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80',
      dark: false,
    },
    {
      title: 'Bali',
      subtitle: 'Indonésie',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80',
      dark: true,
    },
  ];

  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="section section-dark min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="headline mb-4">Carnet de bord</h1>
        <p className="subheadline text-[#86868b] max-w-2xl px-4">
          Tous mes récits de voyage, des rencontres inoubliables aux paysages à couper le souffle.
        </p>
      </section>

      {/* Articles List */}
      <section className="py-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-6xl mx-auto">
          {/* Lisbonne */}
          <article className="bg-white rounded-3xl overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?w=800&q=80"
                  alt="Lisbonne"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <p className="text-[#f56300] font-semibold text-sm mb-2">PORTUGAL</p>
                <h2 className="text-2xl font-semibold mb-4">Découverte de Lisbonne : entre tradition et modernité</h2>
                <p className="text-[#86868b] mb-4">
                  Lisbonne m&apos;a immédiatement séduit par son atmosphère unique. Entre les ruelles pavées de l&apos;Alfama et les fresques street art de LX Factory, la capitale portugaise offre un contraste saisissant.
                </p>
                <p className="text-sm text-[#86868b]">15 janvier 2024</p>
              </div>
            </div>
          </article>

          {/* Marrakech */}
          <article className="bg-black text-white rounded-3xl overflow-hidden mb-8">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=800&q=80"
                  alt="Marrakech"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <p className="text-[#f56300] font-semibold text-sm mb-2">MAROC</p>
                <h2 className="text-2xl font-semibold mb-4">Marrakech : se perdre dans la médina</h2>
                <p className="text-[#86868b] mb-4">
                  Ses ruelles labyrinthiques, ses odeurs d&apos;épices et ses couleurs ocre créent une expérience sensorielle unique. Perdez-vous volontairement dans les souks.
                </p>
                <p className="text-sm text-[#86868b]">10 février 2024</p>
              </div>
            </div>
          </article>

          {/* Islande */}
          <article className="bg-white rounded-3xl overflow-hidden mb-8">
            <div className="md:flex">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1531366936337-7c912a4589a7?w=800&q=80"
                  alt="Islande"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <p className="text-[#f56300] font-semibold text-sm mb-2">ISLANDE</p>
                <h2 className="text-2xl font-semibold mb-4">Islande : à la chasse aux aurores boréales</h2>
                <p className="text-[#86868b] mb-4">
                  L&apos;Islande en hiver, c&apos;est l&apos;assurance de paysages à couper le souffle et, avec un peu de chance, le spectacle magique des aurores boréales.
                </p>
                <p className="text-sm text-[#86868b]">1 mars 2024</p>
              </div>
            </div>
          </article>

          {/* Bali */}
          <article className="bg-black text-white rounded-3xl overflow-hidden mb-8">
            <div className="md:flex md:flex-row-reverse">
              <div className="md:w-1/2">
                <img
                  src="https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800&q=80"
                  alt="Bali"
                  className="w-full h-64 md:h-full object-cover"
                />
              </div>
              <div className="p-8 md:w-1/2 flex flex-col justify-center">
                <p className="text-[#f56300] font-semibold text-sm mb-2">INDONÉSIE</p>
                <h2 className="text-2xl font-semibold mb-4">Bali : temples et rizières</h2>
                <p className="text-[#86868b] mb-4">
                  Bali ne se résume pas à ses plages. L'intérieur des terres recèle des trésors de spiritualité et de beauté naturelle.
                </p>
                <p className="text-sm text-[#86868b]">15 mars 2024</p>
              </div>
            </div>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
