'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';
import type { Destination } from '@/app/blog/page';

gsap.registerPlugin(ScrollTrigger);

interface DestinationCardProps {
  destination: Destination;
}

// Helper function to generate URL from country name
const getCountryUrl = (destination: Destination) => {
  const continent = destination.continent.toLowerCase();
  const continentMap: { [key: string]: string } = {
    'amérique': 'ameriques',
    'asie': 'asie',
    'afrique': 'afrique',
    'europe': 'europe'
  };

  const countrySlug = destination.id;
  return `/blog/${continentMap[continent]}/${countrySlug}`;
};

export default function DestinationCard({ destination }: DestinationCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Animation d'entrée au scroll
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 80 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 85%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Parallaxe sur l'image au scroll
    if (imageRef.current) {
      gsap.to(imageRef.current, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: true,
        },
      });
    }
  }, []);

  return (
    <Link href={getCountryUrl(destination)}>
      <div
        ref={cardRef}
        className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer"
      >
      {/* Image Container avec overlay */}
      <div className="relative h-64 overflow-hidden">
        <div
          ref={imageRef}
          className="absolute inset-0 w-full h-full"
          style={{
            backgroundImage: `url(${destination.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            transform: 'scale(1.1)',
          }}
        />

        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500"></div>

        {/* Tags flottants */}
        <div className="absolute top-4 left-4 flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">
            {destination.continent}
          </span>
        </div>

        {/* Visited date */}
        <div className="absolute top-4 right-4">
          <span className="px-3 py-1 bg-[#f56300]/90 backdrop-blur-sm text-white rounded-full text-xs font-semibold">
            {destination.visited}
          </span>
        </div>

        {/* Titre sur l'image */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-2xl font-semibold text-white mb-1 group-hover:translate-y-[-4px] transition-transform duration-300">
            {destination.name}
          </h3>
          <p className="text-white/90 text-sm">{destination.country}</p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Description */}
        <p className="text-gray-600 mb-4 line-clamp-2">
          {destination.description}
        </p>

        {/* Type tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {destination.type.map((type) => (
            <span
              key={type}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-colors duration-300"
            >
              {type}
            </span>
          ))}
        </div>

        {/* Highlights */}
        <div className="border-t border-gray-200 pt-4">
          <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">
            À découvrir
          </p>
          <div className="flex flex-wrap gap-2">
            {destination.highlights.map((highlight, index) => (
              <span
                key={index}
                className="text-sm text-gray-700 flex items-center gap-1"
              >
                <svg
                  className="w-4 h-4 text-[#f56300]"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                {highlight}
              </span>
            ))}
          </div>
        </div>

        {/* Button */}
        <button className="mt-6 w-full py-3 bg-[#f5f5f7] text-gray-800 rounded-full font-medium group-hover:bg-[#0071e3] group-hover:text-white transition-all duration-300 transform group-hover:scale-[1.02]">
          Explorer cette destination
        </button>
      </div>

      {/* Hover effet - bordure animée */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#0071e3] transition-colors duration-300 pointer-events-none"></div>
      </div>
    </Link>
  );
}
