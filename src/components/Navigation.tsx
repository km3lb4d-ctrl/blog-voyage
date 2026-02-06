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
              <span className="text-sm font-semibold">Voyage & Facile</span>
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
            <div className="flex flex-col items-center gap-4 group">
              <Link
                href="/blog"
                onClick={handleLinkClick}
                className="text-3xl sm:text-4xl font-semibold text-white hover:text-[#2997ff] transition-colors"
              >
                Blog
              </Link>
              <div className="flex flex-col items-center gap-3 max-h-0 overflow-hidden group-hover:max-h-[1000px] transition-all duration-500 ease-in-out">
                {/* Europe */}
                <div className="flex flex-col items-center gap-1">
                  <Link
                    href="/blog/europe"
                    onClick={handleLinkClick}
                    className="text-lg sm:text-xl text-[#a1a1a6] hover:text-[#2997ff] transition-colors font-medium"
                  >
                    Europe
                  </Link>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Link href="/blog/europe/france" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">France</Link>
                    <Link href="/blog/europe/espagne" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Espagne</Link>
                    <Link href="/blog/europe/italie" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Italie</Link>
                    <Link href="/blog/europe/grece" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Grèce</Link>
                    <Link href="/blog/europe/portugal" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Portugal</Link>
                    <Link href="/blog/europe/turquie" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Turquie</Link>
                    <Link href="/blog/europe/malte" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Malte</Link>
                  </div>
                </div>

                {/* Asie */}
                <div className="flex flex-col items-center gap-1">
                  <Link
                    href="/blog/asie"
                    onClick={handleLinkClick}
                    className="text-lg sm:text-xl text-[#a1a1a6] hover:text-[#2997ff] transition-colors font-medium"
                  >
                    Asie
                  </Link>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Link href="/blog/asie/thailande" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Thaïlande</Link>
                    <Link href="/blog/asie/jordanie" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Jordanie</Link>
                    <Link href="/blog/asie/emirats" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Émirats</Link>
                    <Link href="/blog/asie/indonesie" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Indonésie</Link>
                  </div>
                </div>

                {/* Afrique */}
                <div className="flex flex-col items-center gap-1">
                  <Link
                    href="/blog/afrique"
                    onClick={handleLinkClick}
                    className="text-lg sm:text-xl text-[#a1a1a6] hover:text-[#2997ff] transition-colors font-medium"
                  >
                    Afrique
                  </Link>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Link href="/blog/afrique/ile-maurice" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Île Maurice</Link>
                  </div>
                </div>

                {/* Amériques */}
                <div className="flex flex-col items-center gap-1">
                  <Link
                    href="/blog/ameriques"
                    onClick={handleLinkClick}
                    className="text-lg sm:text-xl text-[#a1a1a6] hover:text-[#2997ff] transition-colors font-medium"
                  >
                    Amériques
                  </Link>
                  <div className="flex flex-wrap gap-2 justify-center">
                    <Link href="/blog/ameriques/etats-unis" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">États-Unis</Link>
                    <Link href="/blog/ameriques/mexique" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Mexique</Link>
                    <Link href="/blog/ameriques/colombie" onClick={handleLinkClick} className="text-sm text-[#6e6e73] hover:text-[#2997ff] transition-colors">Colombie</Link>
                  </div>
                </div>
              </div>
            </div>
            <Link
              href="/services"
              onClick={handleLinkClick}
              className="text-3xl sm:text-4xl font-semibold text-white hover:text-[#2997ff] transition-colors"
            >
              Services
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
