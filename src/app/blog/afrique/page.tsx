'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import DestinationCard from '@/components/DestinationCard';
interface Destination {
  id: string;
  title: string;
  description: string;
  image: string;
  link: string;
}

const africanDestinations: Destination[] = [
  {
    id: 'ile-maurice',
    name: 'Île Maurice',
    country: 'Maurice',
    continent: 'Afrique',
    type: ['Plage', 'Nature'],
    description: 'Paradis tropical de l\'océan Indien, aux lagons turquoise et montagnes verdoyantes.',
    image: 'https://images.unsplash.com/photo-1606146127147-ae834fc45ec4?w=1200&q=80',
    coordinates: { lat: -20.1609, lng: 57.5012 },
    visited: '2023',
    highlights: ['Lagons', 'Plongée', 'Le Morne']
  },
];
export default function AfriquePage() {
  const [selectedType, setSelectedType] = useState<string>('Tous');
  const types = ['Tous', 'Culture', 'Plage', 'Aventure', 'Ville', 'Nature', 'Histoire'];

  const filteredDestinations = africanDestinations.filter(dest => {
    return selectedType === 'Tous' || dest.type.includes(selectedType);
  });
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Afrique</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Parcourez mes destinations africaines : plages paradisiaques et villes envoûtantes.
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
