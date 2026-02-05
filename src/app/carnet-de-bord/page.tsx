'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function CarnetDeBordPage() {
  const articles = [
    {
      id: 'colombie-2024',
      title: 'Colombie',
      subtitle: 'De Bogotá aux plages caribéennes',
      date: 'Janvier 2024',
      image: '/images/colombie/carthagene.jpg',
      description: 'Découverte de la Colombie moderne : entre capitale andine, villes coloniales et îles paradisiaques.',
      tags: ['Amérique Latine', 'Culture', 'Plage'],
      slug: '/blog/colombie-2024'
    },
    {
      id: 'mexique-2024',
      title: 'Mexique',
      subtitle: 'Riviera Maya et culture maya',
      date: 'Janvier 2024',
      image: '/images/mexique/chichenitza.jpg',
      description: 'Road trip dans la péninsule du Yucatán : pyramides mayas, cenotes mystérieux et plages paradisiaques.',
      tags: ['Amérique Latine', 'Histoire', 'Nature'],
      slug: '/blog/mexique-2024'
    },
    {
      id: 'panama-2024',
      title: 'Panama',
      subtitle: 'City moderne et îles tranquilles',
      date: 'Janvier 2024',
      image: '/images/panama/panamacity.jpg',
      description: 'Entre gratte-ciels de Panama City, canal historique et escapade sur l\'île de Taboga.',
      tags: ['Amérique Latine', 'Ville', 'Plage'],
      slug: '/blog/panama-2024'
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
          {/* Background Image */}
          <div
            className="absolute inset-0 opacity-20 bg-center bg-cover"
            style={{
              backgroundImage: 'url("/images/colombie/carthagene.jpg")',
            }}
          />
          <div className="relative z-10">
            <h1 className="headline text-white mb-12 px-4">Carnet de bord</h1>
            <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
              Tous mes récits de voyage à travers le monde
            </p>
          </div>
        </section>

        {/* Articles Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-12">Derniers récits</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              {articles.map((article) => (
                <Link
                  key={article.id}
                  href={article.slug}
                  className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer block"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <div
                      className="absolute inset-0 w-full h-full"
                      style={{
                        backgroundImage: `url(${article.image})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        transform: 'scale(1.1)'
                      }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

                    {/* Tags on image */}
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">
                        {article.date}
                      </span>
                    </div>

                    {/* Title on image */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">
                        {article.title}
                      </h3>
                      <p className="text-white/90 text-sm">{article.subtitle}</p>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <p className="text-gray-600 mb-4 line-clamp-2">
                      {article.description}
                    </p>

                    {/* Type tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">
                      Lire l&apos;article
                    </button>
                  </div>

                  {/* Border on hover */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-dark py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">Envie d&apos;explorer le monde ?</h2>
            <p className="text-[#a1a1a6] text-lg mb-8 max-w-2xl mx-auto">
              Découvrez mes itinéraires détaillés et mes conseils pratiques pour organiser votre prochain voyage.
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Link href="/itineraires" className="btn-primary">
                Voir les itinéraires
              </Link>
              <Link href="/conseils" className="btn-outline">
                Lire les conseils
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
