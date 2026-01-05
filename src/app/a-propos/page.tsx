import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function APropos() {
  return (
    <>
      <Navigation />
      <section className="section section-dark min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="headline mb-4">Salut, moi c&apos;est Kamel</h1>
        <p className="subheadline text-[#86868b] max-w-2xl px-4">Voyageur, bilingue français-espagnol, et passionné d&apos;Amérique Latine</p>
      </section>
      <section className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="md:flex gap-12 items-start">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <div className="aspect-square rounded-3xl overflow-hidden bg-[#f5f5f7]">
                <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80" alt="Kamel" className="w-full h-full object-cover" />
              </div>
            </div>
            <div className="md:w-2/3">
              <h2 className="text-2xl font-semibold mb-6 text-[#1d1d1f]">Mon histoire</h2>
              <div className="body-text space-y-4 text-[#1d1d1f]">
                <p>Je ne suis pas un travel blogger qui a quitté son job pour faire le tour du monde.</p>
                <p>Je suis un voyageur français bilingue qui a découvert l&apos;Amérique Latine et qui s&apos;est rendu compte qu&apos;on rate 95% des bons plans quand on ne parle pas espagnol.</p>
                <p>Bilingue depuis 15 ans, quand je voyage en pays hispanophone, j&apos;ai accès à un monde parallèle.</p>
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-4 text-[#1d1d1f]">Mes voyages</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-[#f56300] pl-4">
                  <h4 className="font-semibold text-lg text-[#1d1d1f]">Colombie - 3 semaines (2020)</h4>
                  <p className="text-[#424245] mt-2">Carthagène, Bogotá, San Andrés. Randonnée cascade magique.</p>
                </div>
                <div className="border-l-4 border-[#f56300] pl-4">
                  <h4 className="font-semibold text-lg text-[#1d1d1f]">Mexique - 30 jours (2014, 2019, 2023)</h4>
                  <p className="text-[#424245] mt-2">Yucatan complet. Guide m&apos;a demandé de traduire à Chichen Itza.</p>
                </div>
                <div className="border-l-4 border-[#f56300] pl-4">
                  <h4 className="font-semibold text-lg text-[#1d1d1f]">Panama - 5 jours (2020)</h4>
                  <p className="text-[#424245] mt-2">Panama City, îles Pacifique. Pays sous-estimé.</p>
                </div>
              </div>
              <h3 className="text-xl font-semibold mt-8 mb-4 text-[#1d1d1f]">Ma mission</h3>
              <p className="text-[#1d1d1f]">Rendre l&apos;Amérique Latine accessible aux voyageurs francophones grâce à mon bilinguisme et mes expériences terrain.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 px-4 bg-[#f5f5f7] text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-semibold mb-4 text-[#1d1d1f]">Restons en contact</h2>
          <p className="text-[#424245] mb-8">Une question ? Un projet de voyage ?</p>
          <a href="/contact" className="inline-block px-8 py-3 rounded-full bg-[#0071e3] hover:bg-[#0077ed] text-white transition-colors font-medium">Me contacter</a>
        </div>
      </section>
      <Footer />
    </>
  );
}