'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface Card {
  title: string;
  subtitle: string;
  image: string;
  dark?: boolean;
}

interface CardGridProps {
  title: string;
  cards: Card[];
}

export default function CardGrid({ title, cards }: CardGridProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      // Cards stagger animation
      gsap.fromTo(
        cardsRef.current?.children || [],
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-[#f5f5f7]">
      <div className="max-w-6xl mx-auto">
        <h2 ref={titleRef} className="headline text-center mb-12">
          {title}
        </h2>

        <div ref={cardsRef} className="card-grid">
          {cards.map((card, index) => (
            <div
              key={index}
              className={`rounded-3xl overflow-hidden ${
                card.dark ? 'bg-black text-white' : 'bg-white text-black'
              }`}
            >
              <div className="p-8">
                <p
                  className={`text-sm font-semibold mb-1 ${
                    card.dark ? 'text-[#f56300]' : 'text-[#bf4800]'
                  }`}
                >
                  {card.subtitle}
                </p>
                <h3 className="text-2xl font-semibold">{card.title}</h3>
              </div>
              <div className="aspect-square">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
