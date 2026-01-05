'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fermer le menu quand on clique sur un lien
  const handleLinkClick = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-white/30 ${
          scrolled || menuOpen ? 'nav-blur' : 'bg-transparent'
        }`}
      >
        <div className="w-full px-4 sm:px-6">
          <div className="flex items-center justify-between h-12">
            {/* Hamburger Button - Left */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex items-center gap-2 z-60"
              style={{ marginLeft: '38px' }}
              aria-label="Menu"
            >
              <span className="text-xs font-medium">Menu</span>
              <div className="flex flex-col justify-center items-center w-6 h-6 gap-1">
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? 'rotate-45 translate-y-1.5' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? 'opacity-0' : ''
                  }`}
                />
                <span
                  className={`block w-5 h-0.5 bg-current transition-all duration-300 ${
                    menuOpen ? '-rotate-45 -translate-y-1.5' : ''
                  }`}
                />
              </div>
            </button>

            {/* Logo + Title - Right */}
            <Link href="/" className="flex items-center gap-2" style={{ marginRight: '38px' }}>
              <svg
                className="w-5 h-5"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm font-semibold">Cap sur Amérique Latine</span>
            </Link>
          </div>
        </div>
      </nav>

      {/* Menu Overlay */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-500 ${
          menuOpen
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" />

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-8">
          <nav className="flex flex-col items-center gap-8">
            <Link
              href="/"
              onClick={handleLinkClick}
              className="text-3xl sm:text-4xl font-semibold text-white hover:text-[#2997ff] transition-colors"
            >
              Accueil
            </Link>
            <Link
              href="/blog"
              onClick={handleLinkClick}
              className="text-3xl sm:text-4xl font-semibold text-white hover:text-[#2997ff] transition-colors"
            >
              Blog
            </Link>
            <Link
              href="/services"
              onClick={handleLinkClick}
              className="text-3xl sm:text-4xl font-semibold text-white hover:text-[#2997ff] transition-colors relative group"
            >
              Services
              <span className="absolute -top-2 -right-8 text-xs bg-[#2997ff] text-white px-2 py-0.5 rounded-full">
                Nouveau
              </span>
            </Link>
            <Link
              href="/destinations"
              onClick={handleLinkClick}
              className="text-3xl sm:text-4xl font-semibold text-white hover:text-[#2997ff] transition-colors"
            >
              Destinations
            </Link>
            <Link
              href="/a-propos"
              onClick={handleLinkClick}
              className="text-3xl sm:text-4xl font-semibold text-white hover:text-[#2997ff] transition-colors"
            >
              À propos
            </Link>
            <Link
              href="/contact"
              onClick={handleLinkClick}
              className="text-3xl sm:text-4xl font-semibold text-white hover:text-[#2997ff] transition-colors"
            >
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}