'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1 }
      )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.8 },
          '-=0.5'
        )
        .fromTo(
          imageRef.current,
          { opacity: 0, scale: 0.95 },
          { opacity: 1, scale: 1, duration: 1 },
          '-=0.4'
        );
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="section section-dark min-h-screen flex flex-col items-center justify-center text-center"
    >
      <h1 ref={titleRef} className="headline mb-4">
        Cap sur Amérique Latine
      </h1>
      <div className="body-text space-y-6 text-left max-w-3xl mx-auto !mt-12"></div>
      <p ref={subtitleRef} className="subheadline text-[#86868b] mb-6 max-w-2xl px-4">
        Guides authentiques & itinéraires sur-mesure pour l&apos;Amérique hispanophone
      </p>
      <div className="body-text space-y-6 text-left max-w-3xl mx-auto !mt-12"></div>

      {/* Hero Image */}
      <div ref={imageRef} className="mt-12 w-full max-w-5xl px-4">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
          <img
            src="/images/panama/taboga-1.jpg"
            alt="Cap sur Amérique Latine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}