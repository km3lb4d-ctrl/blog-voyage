'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface VideoSectionProps {
  title: string;
  subtitle: string;
  videoUrl?: string;
  posterUrl: string;
  link?: string;
}

export default function VideoSection({
  title,
  subtitle,
  posterUrl,
  link = '#',
}: VideoSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 80 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        videoRef.current,
        { y: 100 },
        {
          y: -100,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden bg-black"
    >
      {/* Background Video/Image */}
      <div
        ref={videoRef}
        className="absolute inset-0 w-full h-[120%] -top-[10%]"
      >
        <img
          src={posterUrl}
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div
        ref={textRef}
        className="relative z-10 min-h-screen flex flex-col items-center justify-center text-center px-4"
      >
        <h2 className="headline text-white mb-4">{title}</h2>
        <p className="subheadline text-white/80 mb-8 max-w-2xl">{subtitle}</p>
        <Link href={link} className="btn-primary btn-outline text-white">
          Voir l&apos;itinéraire &gt;
        </Link>
      </div>
    </section>
  );
}
