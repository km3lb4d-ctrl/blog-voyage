'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

// 1. On définit le type localement puisqu'il n'existe plus ailleurs
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

interface WorldMapProps {
  destinations: Destination[];
}

export default function WorldMap({ destinations }: WorldMapProps) {
  const mapRef = useRef<HTMLDivElement>(null);
  const [hoveredDestination, setHoveredDestination] = useState<Destination | null>(null);

  useEffect(() => {
    if (!mapRef.current) return;

    gsap.fromTo(
      mapRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    );

    const pins = mapRef.current.querySelectorAll('.map-pin');
    gsap.fromTo(
      pins,
      { scale: 0, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        delay: 0.5,
        ease: 'back.out(1.7)',
      }
    );
  }, []);

  // Projection pour Amérique Centrale
  const getPosition = (lat: number, lng: number) => {
    // Zone focalisée sur Amérique Centrale/Caraïbes
    // Longitude: -95 à -65 (30 degrés)
    // Latitude: 5 à 25 (20 degrés)
    const minLng = -95;
    const maxLng = -65;
    const minLat = 5;
    const maxLat = 25;

    const x = ((lng - minLng) / (maxLng - minLng)) * 100;
    const y = ((maxLat - lat) / (maxLat - minLat)) * 100;

    return { x, y };
  };

  return (
    <div ref={mapRef} className="relative w-full">
      <h2 className="headline text-center text-white px-4" style={{ marginBottom: '64px' }}>Ma Carte du Monde</h2>
      <p className="text-center text-xl text-[#a1a1a6] mb-12 px-4">
        {destinations.length} pays visités • {new Set(destinations.map(d => d.continent)).size} continents explorés
      </p>

      {/* Map Container */}
      <div className="relative w-full bg-black rounded-3xl overflow-hidden shadow-2xl">
        <div className="relative w-full" style={{ paddingBottom: '45%' }}>
          {/* Carte Amérique Latine */}
          <div className="absolute inset-0 bg-black">
            <img
              src="/images/hero/amlat.jpg"
              alt="Amérique Latine Map"
              className="w-full h-full object-cover opacity-60"
              style={{ filter: 'brightness(1.1)' }}
            />
          </div>

          {/* Pins pour chaque destination */}
          {destinations.map((destination) => {
            const pos = getPosition(destination.coordinates.lat, destination.coordinates.lng);
            return (
              <div
                key={destination.id}
                className="map-pin absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group z-20"
                style={{
                  left: `${pos.x}%`,
                  top: `${pos.y}%`,
                }}
                onMouseEnter={() => setHoveredDestination(destination)}
                onMouseLeave={() => setHoveredDestination(null)}
              >
                <div className="relative">
                  {/* Animation pulse */}
                  <div className="absolute inset-0 w-10 h-10 -left-2 -top-2">
                    <div className="absolute inset-0 bg-[#f56300] rounded-full animate-ping opacity-30"></div>
                  </div>

                  {/* Pin */}
                  <div className="relative w-7 h-7 bg-[#f56300] rounded-full border-3 border-white shadow-2xl group-hover:scale-150 group-hover:bg-[#ff7a1f] transition-all duration-300 z-10">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/60 to-transparent"></div>
                  </div>

                  {/* Tooltip */}
                  <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap z-50">
                    <div className="bg-black/95 backdrop-blur-sm text-white px-4 py-2 rounded-xl text-sm font-semibold shadow-2xl">
                      {destination.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-0.5">
                        <div className="border-[6px] border-transparent border-t-black/95"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Destination Info Card */}
      {hoveredDestination && (
        <div className="mt-8 p-6 bg-white rounded-2xl shadow-xl border border-gray-200 animate-fadeIn mx-auto max-w-3xl">
          <div className="flex flex-col md:flex-row gap-6">
            <img
              src={hoveredDestination.image}
              alt={hoveredDestination.name}
              className="w-full md:w-40 h-48 md:h-40 object-cover rounded-xl"
            />
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-semibold mb-2">{hoveredDestination.name}</h3>
              <p className="text-gray-600 mb-3">{hoveredDestination.description}</p>
              <div className="flex gap-2 flex-wrap justify-center md:justify-start">
                <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm">
                  {hoveredDestination.continent}
                </span>
                {hoveredDestination.type.map(type => (
                  <span key={type} className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full text-sm">
                    {type}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
