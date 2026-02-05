'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import type { Destination } from '@/app/destinations/page';

const americanDestinations: Destination[] = [
  {
    id: 'mexique',
    name: 'Mexique',
    country: 'Mexique',
    continent: 'Amérique',
    type: ['Plage', 'Histoire', 'Culture'],
    description: 'Terre maya entre plages des Caraïbes, pyramides ancestrales et cenotes mystérieux.',
    image: '/images/mexique/chichenitza.jpg',
    coordinates: { lat: 23.6345, lng: -102.5528 },
    visited: '2024',
    highlights: ['Riviera Maya', 'Chichen Itza', 'Cenotes']
  },
  {
    id: 'colombie',
    name: 'Colombie',
    country: 'Colombie',
    continent: 'Amérique',
    type: ['Culture', 'Plage', 'Nature'],
    description: 'Pays aux mille couleurs, entre cités coloniales, îles caribéennes et montagnes andines.',
    image: '/images/colombie/carthagene.jpg',
    coordinates: { lat: 4.5709, lng: -74.2973 },
    visited: '2024',
    highlights: ['Carthagène', 'Bogotá', 'San Andrés']
  },
  {
    id: 'panama',
    name: 'Panama',
    country: 'Panama',
    continent: 'Amérique',
    type: ['Ville', 'Plage', 'Nature'],
    description: 'Pont entre deux océans, mêlant skyline moderne et îles tropicales préservées.',
    image: '/images/panama/panama-buildings.jpg',
    coordinates: { lat: 8.5380, lng: -80.7821 },
    visited: '2024',
    highlights: ['Panama City', 'Canal', 'Îles']
  },
  {
    id: 'etats-unis',
    name: 'États-Unis',
    country: 'États-Unis',
    continent: 'Amérique',
    type: ['Ville', 'Culture', 'Nature'],
    description: 'Terre du rêve américain, entre mégalopoles emblématiques et paysages grandioses.',
    image: 'https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=1200&q=80',
    coordinates: { lat: 37.0902, lng: -95.7129 },
    visited: '2023',
    highlights: ['New York', 'Miami', 'Parcs nationaux']
  }
];

export default function AmeriquesPage() {
  const [selectedType, setSelectedType] = useState<string>('Tous');
  const types = ['Tous', 'Culture', 'Plage', 'Aventure', 'Ville', 'Nature', 'Histoire'];

  const filteredDestinations = americanDestinations.filter(dest => {
    return selectedType === 'Tous' || dest.type.includes(selectedType);
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Amériques</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            4 pays visités à travers les Amériques. États-Unis, Mexique, Colombie et Panama :
            mes récits, conseils et bons plans pour chaque destination.
          </p>
        </section>

        {/* Filters Section */}
        <section className="section section-dark relative overflow-hidden py-12">
          <div className="absolute inset-0">
            <img
              src="/images/hero/amlat.jpg"
              alt="Carte Amérique Latine"
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
