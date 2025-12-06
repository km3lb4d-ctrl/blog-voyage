import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

export default function Contact() {
  return (
    <>
      <Navigation />

      {/* Header */}
      <section className="section section-dark min-h-[60vh] flex flex-col items-center justify-center text-center">
        <h1 className="headline mb-4">Contacts & Newsletter</h1>
        <p className="subheadline text-[#86868b] max-w-2xl px-4">
          Restez informé des derniers articles et recevez des conseils exclusifs.
        </p>
      </section>

      {/* Content */}
      <section className="py-20 px-4 bg-[#f5f5f7]">
        <div className="max-w-4xl mx-auto">
          {/* Newsletter */}
          <div className="bg-white rounded-3xl p-8 md:p-12 mb-8">
            <h2 className="text-2xl font-semibold mb-4">S&apos;inscrire à la newsletter</h2>
            <p className="text-[#86868b] mb-6">
              Recevez chaque mois mes nouveaux articles, itinéraires et conseils directement dans votre boîte mail. Pas de spam, promis !
            </p>
            <form className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Votre adresse email"
                className="flex-1 px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:border-[#0066cc] transition-colors"
              />
              <button
                type="submit"
                className="btn-primary btn-blue whitespace-nowrap"
              >
                S&apos;inscrire
              </button>
            </form>
          </div>

          {/* Contact */}
          <div className="bg-white rounded-3xl p-8 md:p-12">
            <h2 className="text-2xl font-semibold mb-4">Me contacter</h2>
            <p className="text-[#86868b] mb-6">
              Une question, une suggestion ou simplement envie d&apos;échanger sur le voyage ? N&apos;hésitez pas à m&apos;écrire !
            </p>
            <form className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Votre nom"
                  className="px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:border-[#0066cc] transition-colors"
                />
                <input
                  type="email"
                  placeholder="Votre email"
                  className="px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:border-[#0066cc] transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Sujet"
                className="w-full px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:border-[#0066cc] transition-colors"
              />
              <textarea
                placeholder="Votre message"
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-[#d2d2d7] focus:outline-none focus:border-[#0066cc] transition-colors resize-none"
              />
              <button
                type="submit"
                className="btn-primary btn-blue"
              >
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
