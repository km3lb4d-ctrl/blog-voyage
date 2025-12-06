import Link from 'next/link';

export default function Footer() {
  const footerLinks = [
    {
      title: 'Explorer',
      links: [
        { name: 'Accueil', href: '/' },
        { name: 'Carnet de bord', href: '/carnet-de-bord' },
        { name: 'Itinéraires', href: '/itineraires' },
        { name: 'Conseils', href: '/conseils' },
      ],
    },
    {
      title: 'Destinations',
      links: [
        { name: 'Europe', href: '/carnet-de-bord' },
        { name: 'Asie', href: '/carnet-de-bord' },
        { name: 'Afrique', href: '/carnet-de-bord' },
        { name: 'Amériques', href: '/carnet-de-bord' },
      ],
    },
    {
      title: 'Ressources',
      links: [
        { name: 'Préparer son sac', href: '/conseils' },
        { name: 'Budget voyage', href: '/conseils' },
        { name: 'Photographie', href: '/conseils' },
      ],
    },
    {
      title: 'Informations',
      links: [
        { name: 'À propos', href: '/a-propos' },
        { name: 'Contact', href: '/contact' },
        { name: 'Newsletter', href: '/contact' },
      ],
    },
  ];

  return (
    <footer className="bg-[#f5f5f7] text-[#1d1d1f] text-xs">
      <div className="max-w-[980px] mx-auto px-4 py-8">
        {/* Disclaimer */}
        <p className="text-[#6e6e73] mb-4 pb-4 border-b border-[#d2d2d7]">
          Tous les récits et conseils partagés sur ce blog sont basés sur des expériences personnelles.
          Les informations peuvent évoluer, pensez à vérifier avant votre départ.
        </p>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-b border-[#d2d2d7]">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="font-semibold mb-3">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="text-[#424245] hover:text-[#1d1d1f] transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-4 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <p className="text-[#6e6e73]">
            © {new Date().getFullYear()} Voyages & Facile. Tous droits réservés.
          </p>
          <div className="flex flex-wrap gap-4 text-[#424245]">
            <Link href="/a-propos" className="hover:text-[#1d1d1f]">
              À propos
            </Link>
            <Link href="/contact" className="hover:text-[#1d1d1f]">
              Contact
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
