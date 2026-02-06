'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';
import Image from 'next/image';

interface Country {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
}

interface Continent {
  id: string;
  name: string;
  slug: string;
  image: string;
  description: string;
  countries: Country[];
}

export default function BlogPage() {
  const continents: Continent[] = [
    {
      id: 'europe',
      name: 'Europe',
      slug: '/blog/europe',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1200&q=80',
      description: 'Découvrez les trésors européens, de la France à la Grèce',
      countries: [
        { id: 'france', name: 'France', slug: '/blog/europe/france', image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80', description: 'Patrimoine et gastronomie' },
        { id: 'espagne', name: 'Espagne', slug: '/blog/europe/espagne', image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?auto=format&fit=crop&w=800&q=80', description: 'Culture et fiestas' },
        { id: 'italie', name: 'Italie', slug: '/blog/europe/italie', image: 'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?auto=format&fit=crop&w=800&q=80', description: 'Art et dolce vita' },
        { id: 'grece', name: 'Grèce', slug: '/blog/europe/grece', image: 'https://images.unsplash.com/photo-1613395877344-13d4a8e0d49e?auto=format&fit=crop&w=800&q=80', description: 'Îles paradisiaques' },
        { id: 'portugal', name: 'Portugal', slug: '/blog/europe/portugal', image: 'https://images.unsplash.com/photo-1513735492246-483525079686?w=800&q=80', description: 'Charme atlantique' },
        { id: 'turquie', name: 'Turquie', slug: '/blog/europe/turquie', image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?auto=format&fit=crop&w=800&q=80', description: 'Entre Orient et Occident' },
        { id: 'malte', name: 'Malte', slug: '/blog/europe/malte', image: '', description: 'Perle de la Méditerranée' }
      ]
    },
    {
      id: 'asie',
      name: 'Asie',
      slug: '/blog/asie',
      image: 'https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?auto=format&fit=crop&w=1200&q=80',
      description: 'Explorez l\'Asie, du désert jordanien aux plages thaïlandaises',
      countries: [
        { id: 'thailande', name: 'Thaïlande', slug: '/blog/asie/thailande', image: 'https://images.unsplash.com/photo-1506665531195-3566af2b4dfa?auto=format&fit=crop&w=800&q=80', description: 'Temples et plages' },
        { id: 'jordanie', name: 'Jordanie', slug: '/blog/asie/jordanie', image: 'https://images.unsplash.com/photo-1579606032821-4e6161c81bd3?auto=format&fit=crop&w=800&q=80', description: 'Déserts et Pétra' },
        { id: 'emirats', name: 'Émirats', slug: '/blog/asie/emirats', image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=800&q=80', description: 'Luxe et modernité' },
        { id: 'indonesie', name: 'Indonésie', slug: '/blog/asie/indonesie', image: '', description: 'Temples et volcans' }
      ]
    },
    {
      id: 'afrique',
      name: 'Afrique',
      slug: '/blog/afrique',
      image: 'https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?auto=format&fit=crop&w=1200&q=80',
      description: 'Partez à la découverte de l\'Afrique authentique',
      countries: [
        { id: 'ile-maurice', name: 'Île Maurice', slug: '/blog/afrique/ile-maurice', image: '', description: 'Paradis tropical' }
      ]
    },
    {
      id: 'ameriques',
      name: 'Amériques',
      slug: '/blog/ameriques',
      image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80',
      description: 'De l\'Amérique du Nord à l\'Amérique Latine',
      countries: [
        { id: 'etats-unis', name: 'États-Unis', slug: '/blog/ameriques/etats-unis', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&w=800&q=80', description: 'Grandeur américaine' },
        { id: 'mexique', name: 'Mexique', slug: '/blog/ameriques/mexique', image: 'https://images.unsplash.com/photo-1518638150340-f706e86654de?auto=format&fit=crop&w=800&q=80', description: 'Culture maya' },
        { id: 'colombie', name: 'Colombie', slug: '/blog/ameriques/colombie', image: 'https://images.unsplash.com/photo-1568632234157-ce7aecd03d0d?auto=format&fit=crop&w=800&q=80', description: 'Perle des Caraïbes' },
        { id: 'panama', name: 'Panama', slug: '/blog/ameriques/panama', image: '', description: 'Entre deux océans' }
      ]
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
              backgroundImage: 'url("/images/hero/carte du monde.png")',
            }}
          />
          <div className="relative z-10">
            <h1 className="headline text-white mb-12 px-4">Blog De Voyages</h1>
            <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
              Mes récits de voyage à travers 4 continents
            </p>
          </div>
        </section>

        {/* Continents Sections */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-6 max-w-7xl">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
              {continents.map((continent, index) => (
                <div key={continent.id} style={{ display: 'flex', flexDirection: 'column', gap: '11px' }}>
                  {/* Continent Card - Large */}
                  <Link
                    href={continent.slug}
                    className="group block relative bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2"
                  >
                    <div className="relative h-80 overflow-hidden">
                      <Image
                        src={continent.image}
                        alt={continent.name}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>

                      {/* Content */}
                      <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                        <h2 className="text-5xl font-bold mb-3 group-hover:text-[#f56300] transition-colors duration-300" style={{ paddingLeft: '15px' }}>
                          {continent.name}
                        </h2>
                        <p className="text-xl text-white/90" style={{ paddingLeft: '15px' }}>
                          {continent.description}
                        </p>
                      </div>
                    </div>
                  </Link>

                  {/* Country Cards - Small thumbnails */}
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {continent.countries.map((country) => (
                      <Link
                        key={country.id}
                        href={country.slug}
                        className="group block relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                      >
                        <div className="relative h-48 overflow-hidden bg-gradient-to-br from-gray-200 to-gray-300">
                          {country.image && (
                            <Image
                              src={country.image}
                              alt={country.name}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          )}
                          <div className={`absolute inset-0 ${country.image ? 'bg-gradient-to-t from-black/70 via-black/20 to-transparent' : 'bg-gradient-to-br from-gray-600/80 to-gray-800/80'}`}></div>

                          {/* Country Name */}
                          <div className="absolute bottom-0 left-0 right-0 p-4">
                            <h3 className="text-xl font-semibold text-white mb-1 group-hover:text-[#2997ff] transition-colors duration-300" style={{ paddingLeft: '15px' }}>
                              {country.name}
                            </h3>
                            <p className="text-sm text-white/80" style={{ paddingLeft: '15px' }}>{country.description}</p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
<section className="section section-dark !py-1" style={{ marginTop: '90px' }}>
  <div className="max-w-4xl mx-auto px-6 text-center">
    <h2 className="text-4xl font-bold text-white mb-6">
      Prêt pour l&apos;aventure ?
    </h2>
    <p className="text-[#a1a1a6] text-lg mb-8 mx-auto">
      Découvrez tous mes récits détaillés et mes conseils pour organiser votre prochain voyage.
    </p>
    <Link 
      href="/contact" 
      className="inline-block px-8 py-4 bg-[#f56300] text-white rounded-full font-semibold hover:bg-[#ff7a1a] transition-colors duration-300"
    >
      Me contacter
    </Link>
  </div>
</section>
      </main>
      <Footer />
    </>
  );
}
