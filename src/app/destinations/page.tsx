'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import WorldMap from '@/components/WorldMap';
import DestinationCard from '@/components/DestinationCard';

export interface Destination {
  id: string;
  name: string;
  country: string;
  continent: 'Europe' | 'Asie' | 'Afrique' | 'Amérique' | 'Océanie';
  type: string[];
  description: string;
  image: string;
  coordinates: { lat: number; lng: number };
  visited: string;
  highlights: string[];
}

const destinations: Destination[] = [
  // Mexique
  {
    id: 'cancun',
    name: 'Cancún',
    country: 'Mexique',
    continent: 'Amérique',
    type: ['Plage'],
    description: 'Station balnéaire paradisiaque avec ses plages de sable blanc et eaux turquoise.',
    image: 'https://images.unsplash.com/photo-1568402102990-bc541580b59f?w=1200&q=80',
    coordinates: { lat: 21.1619, lng: -86.8515 },
    visited: '2024',
    highlights: ['Zone hôtelière', 'Plages', 'Vie nocturne']
  },
  {
    id: 'isla-mujeres',
    name: 'Isla Mujeres',
    country: 'Mexique',
    continent: 'Amérique',
    type: ['Plage', 'Nature'],
    description: 'Petite île paisible aux eaux cristallines, parfaite pour le snorkeling.',
    image: '/images/mexique/islamujeres.jpg',
    coordinates: { lat: 21.2311, lng: -86.7311 },
    visited: '2024',
    highlights: ['Playa Norte', 'Snorkeling', 'Golf cart']
  },
  {
    id: 'playa-del-carmen',
    name: 'Playa del Carmen',
    country: 'Mexique',
    continent: 'Amérique',
    type: ['Plage', 'Ville'],
    description: 'Ville dynamique de la Riviera Maya, point de départ vers Cozumel.',
    image: '/images/mexique/playadelcarmen.jpg',
    coordinates: { lat: 20.6296, lng: -87.0739 },
    visited: '2024',
    highlights: ['5e Avenue', 'Plages', 'Cozumel']
  },
  {
    id: 'valladolid',
    name: 'Valladolid',
    country: 'Mexique',
    continent: 'Amérique',
    type: ['Culture', 'Histoire'],
    description: 'Ville coloniale authentique, porte d\'entrée vers Chichen Itza.',
    image: '/images/mexique/valladolid.jpg',
    coordinates: { lat: 20.6897, lng: -88.2026 },
    visited: '2024',
    highlights: ['Centre colonial', 'Cenotes', 'Chichen Itza']
  },
  {
    id: 'tulum',
    name: 'Tulum',
    country: 'Mexique',
    continent: 'Amérique',
    type: ['Plage', 'Histoire', 'Nature'],
    description: 'Ruines mayas face à la mer des Caraïbes, plages paradisiaques et cenotes.',
    image: '/images/mexique/chichenitza.jpg',
    coordinates: { lat: 20.2114, lng: -87.4654 },
    visited: '2024',
    highlights: ['Ruines', 'Cenotes', 'Plages bohèmes']
  },

  // Colombie
  {
    id: 'bogota',
    name: 'Bogotá',
    country: 'Colombie',
    continent: 'Amérique',
    type: ['Ville', 'Culture'],
    description: 'Capitale andine perchée à 2600m, mêlant modernité et quartiers coloniaux.',
    image: '/images/colombie/randonnee-bogota.jpg',
    coordinates: { lat: 4.7110, lng: -74.0721 },
    visited: '2024',
    highlights: ['La Candelaria', 'Monserrate', 'Musées']
  },
  {
    id: 'cartagena',
    name: 'Carthagène',
    country: 'Colombie',
    continent: 'Amérique',
    type: ['Culture', 'Plage', 'Histoire'],
    description: 'Joyau colonial fortifié des Caraïbes, aux ruelles colorées et romantiques.',
    image: '/images/colombie/carthagene.jpg',
    coordinates: { lat: 10.3910, lng: -75.4794 },
    visited: '2024',
    highlights: ['Vieille ville', 'Murailles', 'Îles Rosario']
  },
  {
    id: 'san-andres',
    name: 'San Andrés',
    country: 'Colombie',
    continent: 'Amérique',
    type: ['Plage', 'Nature'],
    description: 'Île paradisiaque aux 7 couleurs de mer, dans la mer des Caraïbes.',
    image: '/images/colombie/san-andres.jpg',
    coordinates: { lat: 12.5847, lng: -81.7006 },
    visited: '2024',
    highlights: ['Johnny Cay', 'Mer 7 couleurs', 'Plongée']
  },

  // Panama
  {
    id: 'panama-city',
    name: 'Panama City',
    country: 'Panama',
    continent: 'Amérique',
    type: ['Ville'],
    description: 'Métropole moderne entre deux océans, skyline futuriste et Casco Viejo colonial.',
    image: '/images/panama/panama-buildings.jpg',
    coordinates: { lat: 8.9824, lng: -79.5199 },
    visited: '2024',
    highlights: ['Casco Viejo', 'Canal', 'Skyline']
  },
  {
    id: 'taboga',
    name: 'Taboga',
    country: 'Panama',
    continent: 'Amérique',
    type: ['Plage', 'Nature'],
    description: 'L\'île aux fleurs, à 20 minutes de Panama City en bateau.',
    image: '/images/panama/taboga-1.jpg',
    coordinates: { lat: 8.7975, lng: -79.5575 },
    visited: '2024',
    highlights: ['Plages tranquilles', 'Village', 'Nature']
  }
];

export default function DestinationsPage() {
  const [selectedContinent, setSelectedContinent] = useState<string>('Tous');
  const [selectedType, setSelectedType] = useState<string>('Tous');

  const continents = ['Tous', 'Amérique'];
  const types = ['Tous', 'Culture', 'Plage', 'Aventure', 'Ville', 'Nature', 'Histoire'];

  const filteredDestinations = destinations.filter(dest => {
    const continentMatch = selectedContinent === 'Tous' || dest.continent === selectedContinent;
    const typeMatch = selectedType === 'Tous' || dest.type.includes(selectedType);
    return continentMatch && typeMatch;
  });

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Mes Destinations</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            10 villes visitées à travers 3 pays d'Amérique Latine. Mexique, Colombie et Panama :
            mes récits, conseils et bons plans pour chaque destination.
          </p>
        </section>


      {/* Filters Section */}
      <section className="section section-dark relative overflow-hidden py-12">
        {/* Background Image - Carte Amérique Latine */}
        <div className="absolute inset-0">
          <img
            src="/images/hero/amlat.jpg"
            alt="Carte Amérique Latine"
            className="w-full h-full object-cover opacity-30"
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row gap-8 items-center justify-center">
            {/* Continent Filter */}
            <div className="flex flex-wrap gap-3 items-center justify-center">
              <span className="text-white font-medium">Continent :</span>
              {continents.map(continent => (
                <button
                  key={continent}
                  onClick={() => setSelectedContinent(continent)}
                  className={`px-4 py-2 rounded-full transition-all ${
                    selectedContinent === continent
                      ? 'bg-[#f56300] text-white'
                      : 'bg-white/10 text-white hover:bg-white/20'
                  }`}
                >
                  {continent}
                </button>
              ))}
            </div>

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
