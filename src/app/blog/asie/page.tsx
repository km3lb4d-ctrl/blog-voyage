'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
import type { Destination } from '@/app/blog/page';

const asianDestinations: Destination[] = [
  {
    id: 'indonesie',
    name: 'Indonésie',
    country: 'Indonésie',
    continent: 'Asie',
    type: ['Plage', 'Nature', 'Culture'],
    description: 'Archipel aux mille îles, entre rizières en terrasse, temples hindous et plages paradisiaques.',
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
    coordinates: { lat: -0.7893, lng: 113.9213 },
    visited: '2022',
    highlights: ['Bali', 'Java', 'Lombok']
  },
  {
    id: 'thailande',
    name: 'Thaïlande',
    country: 'Thaïlande',
    continent: 'Asie',
    type: ['Culture', 'Plage', 'Aventure'],
    description: 'Pays du sourire, entre temples dorés, îles paradisiaques et street food savoureuse.',
    image: 'https://images.unsplash.com/photo-1508009603885-50cf7c579365?w=1200&q=80',
    coordinates: { lat: 15.8700, lng: 100.9925 },
    visited: '2022',
    highlights: ['Bangkok', 'Phuket', 'Chiang Mai']
  },
  {
    id: 'emirats',
    name: 'Émirats Arabes Unis',
    country: 'Émirats Arabes Unis',
    continent: 'Asie',
    type: ['Ville', 'Aventure', 'Plage'],
    description: 'Oasis futuriste du désert, symbole de luxe et de démesure architecturale.',
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1200&q=80',
    coordinates: { lat: 23.4241, lng: 53.8478 },
    visited: '2023',
    highlights: ['Dubaï', 'Abu Dhabi', 'Désert']
  },
  {
    id: 'jordanie',
    name: 'Jordanie',
    country: 'Jordanie',
    continent: 'Asie',
    type: ['Histoire', 'Aventure', 'Nature'],
    description: 'Royaume du désert, entre cités nabatéennes et paysages lunaires spectaculaires.',
    image: 'https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1200&q=80',
    coordinates: { lat: 30.5852, lng: 36.2384 },
    visited: '2023',
    highlights: ['Pétra', 'Wadi Rum', 'Mer Morte']
  }
];

export default function AsiePage() {
  const [selectedType, setSelectedType] = useState<string>('Tous');
  const types = ['Tous', 'Culture', 'Plage', 'Aventure', 'Ville', 'Nature', 'Histoire'];

  const filteredDestinations = asianDestinations.filter(dest => {
    return selectedType === 'Tous' || dest.type.includes(selectedType);
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Asie</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Explorez mes aventures asiatiques : temples, plages et mégalopoles fascinantes.
          </p>
        </section>

        {/* Filters Section */}
        <section className="section section-dark relative overflow-hidden py-12">
          <div className="absolute inset-0">
            <img
              src="/images/hero/amlat.jpg"
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
