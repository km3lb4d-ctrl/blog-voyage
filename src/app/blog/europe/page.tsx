'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';

interface Destination {
  id: string;
  name: string;
  country: string;
  continent: string;
  type: string[];
  description: string;
  image: string;
  coordinates: { lat: number; lng: number };
  visited: string;
  highlights: string[];
}

const europeanDestinations: Destination[] = [
  {
    id: 'portugal',
    name: 'Portugal',
    country: 'Portugal',
    continent: 'Europe',
    type: ['Culture', 'Plage', 'Histoire'],
    description: 'Pays aux traditions maritimes, entre tramways colorés, fado mélancolique et plages atlantiques.',
    image: 'https://images.unsplash.com/photo-1555881400-74d7acaacd8b?w=1200&q=80',
    coordinates: { lat: 39.3999, lng: -8.2245 },
    visited: '2023',
    highlights: ['Lisbonne', 'Porto', 'Algarve']
  },
  {
    id: 'espagne',
    name: 'Espagne',
    country: 'Espagne',
    continent: 'Europe',
    type: ['Culture', 'Plage', 'Histoire'],
    description: 'Pays aux mille visages, entre traditions flamenco, plages dorées et villes vibrantes.',
    image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80',
    coordinates: { lat: 40.4637, lng: -3.7492 },
    visited: '2023',
    highlights: ['Barcelone', 'Madrid', 'Andalousie']
  },
  {
    id: 'turquie',
    name: 'Turquie',
    country: 'Turquie',
    continent: 'Europe',
    type: ['Culture', 'Histoire', 'Ville'],
    description: 'Pont entre Orient et Occident, où traditions ancestrales et modernité se rencontrent.',
    image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80',
    coordinates: { lat: 41.0082, lng: 28.9784 },
    visited: '2022',
    highlights: ['Istanbul', 'Cappadoce', 'Pamukkale']
  },
  {
    id: 'malte',
    name: 'Malte',
    country: 'Malte',
    continent: 'Europe',
    type: ['Histoire', 'Culture', 'Plage'],
    description: 'Archipel méditerranéen au patrimoine exceptionnel, entre cités fortifiées et lagons turquoise.',
    image: 'https://images.unsplash.com/photo-1562023409-6a2f19a62e1f?w=1200&q=80',
    coordinates: { lat: 35.9375, lng: 14.3754 },
    visited: '2022',
    highlights: ['La Valette', 'Gozo', 'Blue Lagoon']
  },
  {
    id: 'italie',
    name: 'Italie',
    country: 'Italie',
    continent: 'Europe',
    type: ['Histoire', 'Culture', 'Nature'],
    description: 'Berceau de la Renaissance, entre vestiges antiques, art baroque et dolce vita.',
    image: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80',
    coordinates: { lat: 41.8719, lng: 12.5674 },
    visited: '2021',
    highlights: ['Rome', 'Florence', 'Venise']
  },
  {
    id: 'grece',
    name: 'Grèce',
    country: 'Grèce',
    continent: 'Europe',
    type: ['Histoire', 'Culture', 'Plage'],
    description: 'Berceau de la civilisation occidentale, entre sites antiques et îles paradisiaques.',
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=1200&q=80',
    coordinates: { lat: 39.0742, lng: 21.8243 },
    visited: '2022',
    highlights: ['Athènes', 'Santorin', 'Delphes']
  },
  {
    id: 'france',
    name: 'France',
    country: 'France',
    continent: 'Europe',
    type: ['Culture', 'Histoire', 'Nature'],
    description: 'Pays de l\'art de vivre, entre patrimoine culturel, gastronomie et paysages variés.',
    image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=1200&q=80',
    coordinates: { lat: 46.2276, lng: 2.2137 },
    visited: '2023',
    highlights: ['Paris', 'Provence', 'Côte d\'Azur']
  },
  {
    id: 'chypre',
    name: 'Chypre',
    country: 'Chypre',
    continent: 'Europe',
    type: ['Plage', 'Histoire', 'Nature'],
    description: 'Île méditerranéenne mythologique, entre plages dorées et sites archéologiques antiques.',
    image: 'https://images.unsplash.com/photo-1580837119756-563d608dd119?w=1200&q=80',
    coordinates: { lat: 35.1264, lng: 33.4299 },
    visited: '2022',
    highlights: ['Paphos', 'Rocher d\'Aphrodite', 'Monastères']
  }
];

export default function EuropePage() {
  const [selectedType, setSelectedType] = useState<string>('Tous');
  const types = ['Tous', 'Culture', 'Plage', 'Aventure', 'Ville', 'Nature', 'Histoire'];

  const filteredDestinations = europeanDestinations.filter(dest => {
    return selectedType === 'Tous' || dest.type.includes(selectedType);
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Europe</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Découvrez mes destinations européennes : culture, histoire et gastronomie.
          </p>
        </section>

        {/* Filters Section */}
        <section className="section section-dark relative overflow-hidden py-12">
          <div className="absolute inset-0">
            <img
              src="/images/hero/carte du monde.png"
              alt="Background"
              className="w-full h-full object-cover opacity-30"
            />
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
              {/* Type Filter */}
              <div className="flex flex-wrap gap-3 items-center justify-center">
                <span className="text-white font-medium">Type :</span>
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full transition-all ${
                      selectedType === type
                        ? 'bg-[#0071e3] text-white'
                        : 'bg-white/10 text-white hover:bg-white/20'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Results count */}
            <p className="text-center mt-6 text-[#86868b]">
              {filteredDestinations.length} destination{filteredDestinations.length > 1 ? 's' : ''} trouvée{filteredDestinations.length > 1 ? 's' : ''}
            </p>
          </div>
        </section>

        {/* Destinations Grid */}
        <section className="section py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredDestinations.map(destination => (
                <DestinationCard key={destination.id} destination={destination} />
              ))}
            </div>

            {filteredDestinations.length === 0 && (
              <div className="text-center py-20">
                <p className="text-xl text-gray-500">Aucune destination ne correspond à vos critères.</p>
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
