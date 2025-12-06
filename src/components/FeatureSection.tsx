'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Link from 'next/link';

gsap.registerPlugin(ScrollTrigger);

interface FeatureSectionProps {
  title: string;
  subtitle: string;
  description?: string;
  image: string;
  dark?: boolean;
  reverse?: boolean;
  link?: string;
}

export default function FeatureSection({
  title,
  subtitle,
  description,
  image,
  dark = false,
  reverse = false,
  link = '#',
}: FeatureSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        contentRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'top 20%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 70%',
            end: 'top 10%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`section ${dark ? 'section-dark' : 'section-light'}`}
    >
      <div
        className={`max-w-6xl mx-auto px-4 flex flex-col ${
          reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'
        } items-center gap-12`}
      >
        {/* Content */}
        <div ref={contentRef} className="flex-1 text-center lg:text-left">
          <p className="text-[#f56300] font-semibold mb-2 uppercase tracking-wide text-sm">
            {subtitle}
          </p>
          <h2 className="headline mb-6">{title}</h2>
          {description && (
            <p className="body-text max-w-md mx-auto lg:mx-0">{description}</p>
          )}
          <div className="mt-8">
            <Link
              href={link}
              className={`btn-primary btn-outline ${
                dark ? 'text-[#2997ff]' : 'text-[#0066cc]'
              }`}
            >
              Lire l&apos;article &gt;
            </Link>
          </div>
        </div>

        {/* Image */}
        <div ref={imageRef} className="flex-1">
          <div className="media-container">
            <img
              src={image}
              alt={title}
              className="w-full h-auto object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
