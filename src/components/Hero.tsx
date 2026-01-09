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
      <div className="relative mb-4 flex flex-col items-center">
<h1 ref={titleRef} className="headline text-[#ff8c52] text-center" style={{ fontFamily: 'var(--font-pacifico)', fontWeight: 400, letterSpacing: '0.02em', fontSize: 'calc(clamp(2.5rem, 8vw, 5rem) * 1.3)' }}>
  Cap<br />
  Sur<br />
  l'Amérique Latine
</h1>
<svg
  className="w-24 h-24 text-[#ff8c52] mt-4"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
>
  <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
</div>
      <div className="body-text space-y-6 text-left max-w-3xl mx-auto !mt-12"></div>
      <p ref={subtitleRef} className="subheadline text-[#86868b] mb-6 max-w-2xl px-4">
        Guides authentiques & itinéraires sur-mesure pour l&apos;Amérique hispanophone
      </p>
      <div className="body-text space-y-6 text-left max-w-3xl mx-auto !mt-12"></div>

      {/* Hero Image */}
      <div ref={imageRef} className="mt-12 w-full px-8 sm:px-12 lg:px-20">
        <div className="relative aspect-[16/9] rounded-3xl overflow-hidden">
          <img
            src="/images/panama/taboga-1.jpg"
            alt="Cap sur L'Amérique Latine"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
        </div>
      </div>
    </section>
  );
}