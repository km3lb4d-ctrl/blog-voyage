'use client';

import { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

interface Guide {
  id: string;
  title: string;
  slug: string;
  image: string;
  description: string;
  duration: string;
  category: string;
}

interface TipCard {
  id: string;
  title: string;
  description: string;
  icon: string;
  image: string;
  comingSoon: boolean;
}

function BlogContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [currentPage, setCurrentPage] = useState(0);
  const guidesPerPage = 4;

  // Lire la page depuis l'URL au chargement
  useEffect(() => {
    const pageParam = searchParams.get('page');
    if (pageParam) {
      const pageNumber = parseInt(pageParam, 10) - 1; // L'URL utilise page=1, page=2, etc.
      if (!isNaN(pageNumber) && pageNumber >= 0) {
        setCurrentPage(pageNumber);
      }
    }
  }, [searchParams]);

  const allGuides: Guide[] = [
    // Page 1
    {
      id: 'colombie-3-semaines',
      title: 'Colombie en 3 semaines',
      slug: '/blog/colombie-3-semaines',
      image: '/images/colombie/carthagene.jpg',
      description: 'Itinéraire complet de 3 semaines en Colombie : de Bogotá à Carthagène en passant par la côte caraïbe et les villages coloniaux.',
      duration: '3 semaines',
      category: 'Amérique du Sud'
    },
    {
      id: 'indonesie',
      title: 'Bali & les îles Gili',
      slug: '/blog/bali-iles-gili',
      image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=1200&q=80',
      description: 'Guide complet pour explorer Bali, Ubud, les temples sacrés et les magnifiques îles Gili. Culture, plages paradisiaques et snorkeling.',
      duration: '2-3 semaines',
      category: 'Asie du Sud-Est'
    },
    {
      id: 'istanbul',
      title: 'Istanbul, entre Orient et Occident',
      slug: '/blog/istanbul',
      image: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?w=1200&q=80',
      description: 'Découvrez Istanbul en une semaine : mosquées historiques, palais ottomans, bazars colorés et gastronomie turque exceptionnelle.',
      duration: '5-7 jours',
      category: 'Europe & Asie'
    },
    {
      id: 'andalousie',
      title: 'Road trip en Andalousie',
      slug: '/blog/andalousie',
      image: 'https://images.unsplash.com/photo-1543783207-ec64e4d95325?w=1200&q=80',
      description: 'Parcourez le sud de l\'Espagne : Séville, Grenade, Cordoue, villages blancs et plages de la Costa del Sol. Culture, flamenco et tapas.',
      duration: '1-2 semaines',
      category: 'Europe'
    },
    // Page 2
    {
      id: 'mexique',
      title: 'Mexique : Yucatan et cenotes',
      slug: '/blog/mexique-yucatan',
      image: '/images/mexique/chichen-itza.jpg',
      description: 'Explorer la péninsule du Yucatan : Tulum, Playa del Carmen, cenotes magiques et ruines mayas de Chichen Itza.',
      duration: '2-3 semaines',
      category: 'Amérique Centrale'
    },
    {
      id: 'panama',
      title: 'Panama : Côte Pacifique',
      slug: '/blog/panama-pacifique',
      image: '/images/panama/panama.jpg',
      description: 'Découvrir Panama City et les îles du Pacifique : Taboga et Saboga, alternatives parfaites à San Blas.',
      duration: '5-7 jours',
      category: 'Amérique Centrale'
    },
    {
      id: 'pouilles',
      title: 'Les Pouilles en 5 jours',
      slug: '/blog/pouilles',
      image: 'https://images.unsplash.com/photo-1566993221640-1d9c4e34d4b2?w=1200&q=80',
      description: 'Italie du Sud authentique : villages blancs, trulli d\'Alberobello, plages cristallines et cuisine locale.',
      duration: '5 jours',
      category: 'Europe'
    },
    {
      id: 'barcelone',
      title: 'Barcelone : City trip parfait',
      slug: '/blog/barcelone',
      image: 'https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80',
      description: 'Week-end à Barcelone : Sagrada Familia, Park Güell, quartier gothique, plages et tapas catalanes.',
      duration: '3-5 jours',
      category: 'Europe'
    }
  ];

  const totalPages = Math.ceil(allGuides.length / guidesPerPage);
  const currentGuides = allGuides.slice(
    currentPage * guidesPerPage,
    (currentPage + 1) * guidesPerPage
  );

  const nextPage = () => {
    if (currentPage < totalPages - 1) {
      const newPage = currentPage + 1;
      setCurrentPage(newPage);
      router.push(`/blog?page=${newPage + 1}`, { scroll: false });
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      const newPage = currentPage - 1;
      setCurrentPage(newPage);
      if (newPage === 0) {
        router.push('/blog', { scroll: false });
      } else {
        router.push(`/blog?page=${newPage + 1}`, { scroll: false });
      }
      window.scrollTo({ top: 400, behavior: 'smooth' });
    }
  };

  const tips: TipCard[] = [
    {
      id: 'budget',
      title: 'Voyager avec un petit budget',
      description: 'Astuces pour réduire vos dépenses sans sacrifier la qualité de votre voyage',
      icon: '💰',
      image: 'https://images.unsplash.com/photo-1607863680198-23d4b2565df0?w=800&q=80',
      comingSoon: true
    },
    {
      id: 'packing',
      title: 'Préparer son sac à dos',
      description: 'Liste complète et conseils pour ne rien oublier tout en voyageant léger',
      icon: '🎒',
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=800&q=80',
      comingSoon: true
    },
    {
      id: 'photography',
      title: 'Photographier ses voyages',
      description: 'Techniques simples pour immortaliser vos plus beaux souvenirs',
      icon: '📸',
      image: 'https://images.unsplash.com/photo-1452587925148-ce544e77e70d?w=800&q=80',
      comingSoon: true
    },
    {
      id: 'safety',
      title: 'Voyager en sécurité',
      description: 'Précautions essentielles et conseils pour un voyage serein',
      icon: '🛡️',
      image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=800&q=80',
      comingSoon: true
    }
  ];

  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center relative overflow-hidden">
          <div
            className="absolute inset-0 opacity-20 bg-center bg-cover"
            style={{
              backgroundImage: 'url("/images/hero/carte du monde.png")',
            }}
          />
          <div className="relative z-10">
            <h1 className="headline text-white mb-12 px-4">Blog De Voyages</h1>
            <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
              Guides détaillés et conseils pratiques pour voyager sereinement
            </p>
          </div>
        </section>

        {/* Section Guides de voyage */}
        <section className="py-20 bg-white flex justify-center">
          <div className="w-full px-8 max-w-[1400px]">
            <div className="text-center !mb-16">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Guides de voyage</h2>
              <p className="text-xl text-gray-600">Itinéraires détaillés et récits de mes aventures</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-items-center mb-12">
              {currentGuides.map((guide) => (
                <Link
                  key={guide.id}
                  href={guide.slug}
                  className="group block w-full"
                >
                  <div className="bg-[#f5f5f7] rounded-3xl overflow-hidden transition-all duration-500 ease-out hover:-translate-y-2 hover:shadow-2xl flex flex-col h-full">
                    <div className="h-72 overflow-hidden">
                      <img
                        src={guide.image}
                        alt={guide.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-8 pl-12 flex flex-col flex-grow">
                      <div className="flex gap-3 mb-3">
                        <span className="px-3 py-1 bg-[#f56300] text-white rounded-full text-xs font-semibold">
                          {guide.category}
                        </span>
                        <span className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-xs font-semibold">
                          {guide.duration}
                        </span>
                      </div>
                      <h3 className="text-3xl font-bold mb-4 text-gray-900 group-hover:text-[#f56300] transition-colors">
                        {guide.title}
                      </h3>
                      <p className="text-gray-600 text-lg leading-relaxed flex-grow">
                        {guide.description}
                      </p>
                      {guide.slug !== '#' && (
                        <div className="mt-6 flex justify-end">
                          <span className="inline-flex items-center text-[#0071e3] font-semibold group-hover:gap-2 transition-all">
                            Lire le guide
                            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </div>
                      )}
                      {guide.slug === '#' && (
                        <div className="mt-6 flex justify-end">
                          <span className="inline-flex items-center text-gray-400 font-semibold">
                            Article en préparation...
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Navigation avec flèches */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-6 mb-8">
                <button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  className={`p-4 rounded-full border-2 transition-all duration-300 ${
                    currentPage === 0
                      ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                      : 'border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white hover:scale-110'
                  }`}
                  aria-label="Page précédente"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>

                <div className="flex flex-col items-center">
                  <span className="text-gray-600 font-semibold text-lg">
                    Page {currentPage + 1} sur {totalPages}
                  </span>
                  <span className="text-gray-400 text-sm">
                    {allGuides.length} guides au total
                  </span>
                </div>

                <button
                  onClick={nextPage}
                  disabled={currentPage === totalPages - 1}
                  className={`p-4 rounded-full border-2 transition-all duration-300 ${
                    currentPage === totalPages - 1
                      ? 'border-gray-300 text-gray-300 cursor-not-allowed'
                      : 'border-[#0071e3] text-[#0071e3] hover:bg-[#0071e3] hover:text-white hover:scale-110'
                  }`}
                  aria-label="Page suivante"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            )}

            {/* Message "Plus de guides bientôt" */}
            <div className="!mt-8 text-center">
              <div className="inline-block px-6 py-3 bg-gradient-to-r from-[#f56300]/10 to-[#0071e3]/10 rounded-full">
                <p className="text-gray-600 font-medium">
                  ✨ Plus de guides détaillés en préparation (Île Maurice, Thaïlande, Europe...)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section Conseils pratiques */}
        <section className="py-20 bg-[#f5f5f7] flex justify-center">
          <div className="w-full max-w-[1400px] px-8">
            <div className="text-center !mb-12">
              <h2 className="text-5xl font-bold text-gray-900 mb-4">Conseils pratiques</h2>
              <p className="text-xl text-gray-600 mb-8">Astuces et recommandations pour voyager sereinement</p>
              <div className="inline-block px-6 py-3 bg-white rounded-full shadow-lg">
                <p className="text-gray-600 font-medium">
                  📝 Premiers articles de conseils en préparation
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tips.map((tip) => (
                <div
                  key={tip.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 relative group"
                >
                  {/* Image */}
                  <div className="h-48 overflow-hidden relative">
                    <img
                      src={tip.image}
                      alt={tip.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Overlay avec icône */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end justify-start p-6">
                      <div className="text-5xl">{tip.icon}</div>
                    </div>
                  </div>

                  {/* Contenu */}
                  <div className="p-8 relative">
                    {tip.comingSoon && (
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-semibold">
                          Bientôt
                        </span>
                      </div>
                    )}
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">
                      {tip.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {tip.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-12 text-center">
              <p className="text-gray-500 italic">
                Ces articles seront publiés progressivement dans les prochaines semaines
              </p>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-dark py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Une question sur un voyage ?
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8 mx-auto max-w-2xl">
              N'hésitez pas à me contacter pour des conseils personnalisés sur votre prochain voyage.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-[#f56300] text-white rounded-full font-semibold hover:bg-[#ff7a1a] transition-colors duration-300"
            >
              Me contacter
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

export default function BlogPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-[#f56300]"></div>
          <p className="mt-4 text-gray-600">Chargement...</p>
        </div>
      </div>
    }>
      <BlogContent />
    </Suspense>
  );
}