'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function RomePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Rome</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            La Ville Éternelle, berceau de la civilisation occidentale.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir Rome</h2>
              <p className="text-gray-700 mb-6">
                Rome, capitale italienne et cœur de l'ancien Empire romain, enchante par ses vestiges antiques,
                ses places baroques et son art de vivre incomparable. Marchant dans ses rues pavées, on traverse
                3000 ans d'histoire : de la Rome antique des Césars à la splendeur de la Renaissance, en passant
                par les fastes baroques de la Contre-Réforme. Chaque coin de rue révèle une fontaine sculptée,
                une église ornée de fresques ou les ruines d'un temple millénaire. La Ville Éternelle porte bien
                son nom, offrant aux visiteurs un voyage dans le temps absolument unique.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Colisée</strong> - Amphithéâtre emblématique où combattaient les gladiateurs</li>
                <li><strong>Forum Romain</strong> - Cœur politique et religieux de la Rome antique</li>
                <li><strong>Vatican</strong> - Chapelle Sixtine de Michel-Ange et Basilique Saint-Pierre</li>
                <li><strong>Fontaine de Trevi</strong> - Chef-d'œuvre baroque, jetez une pièce pour revenir</li>
                <li><strong>Panthéon</strong> - Temple romain parfaitement conservé avec son oculus célèbre</li>
                <li><strong>Trastevere</strong> - Quartier authentique aux ruelles pavées et trattorias</li>
                <li><strong>Villa Borghèse</strong> - Parc et galerie d'art avec œuvres du Bernin et Caravage</li>
                <li><strong>Piazza Navona</strong> - Place baroque aux trois fontaines monumentales</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Quartiers emblématiques</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Centro Storico</strong> - Cœur historique avec Panthéon et Piazza Navona</li>
                <li><strong>Trastevere</strong> - Bohème et authentique, vie nocturne animée</li>
                <li><strong>Monti</strong> - Quartier hipster, boutiques vintage et cafés branchés</li>
                <li><strong>Testaccio</strong> - Rome authentique, marché et cuisine romaine traditionnelle</li>
                <li><strong>Prati</strong> - Quartier résidentiel élégant près du Vatican</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Jeter une pièce dans la Fontaine de Trevi au lever du soleil</li>
                <li>Déguster un gelato artisanal chez Giolitti ou Fatamorgana</li>
                <li>Admirer le coucher de soleil depuis la terrasse du Pincio</li>
                <li>Faire une pause cappuccino sur la Piazza del Popolo</li>
                <li>Se perdre dans les ruelles de Trastevere le soir</li>
                <li>Pique-niquer à la Villa Borghèse un dimanche</li>
                <li>Visiter le Colisée au lever du jour pour éviter la foule</li>
                <li>Dîner dans une trattoria familiale à Testaccio</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-octobre (climat agréable, moins de touristes)<br />
                <strong>Langue :</strong> Italien (anglais dans les zones touristiques)<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Transport :</strong> Métro, bus, tramway (Roma Pass recommandé)<br />
                <strong>Durée conseillée :</strong> 3-5 jours minimum<br />
                <strong>Conseil :</strong> Réserver Colisée et Vatican en ligne à l'avance
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🎫 Achetez la Roma Pass (transports + entrées musées)<br />
                🕐 Visitez le Colisée et le Vatican tôt le matin ou en fin d'après-midi<br />
                👗 Portez des vêtements couvrant épaules et genoux pour les églises<br />
                🍝 Les vrais Romains ne boivent jamais de cappuccino après 11h<br />
                🚰 Remplissez votre bouteille aux fontaines d'eau potable gratuites<br />
                💰 Évitez les restaurants avec rabatteurs près des sites touristiques<br />
                🚶 Le centre historique se visite à pied, oubliez les taxis<br />
                🌙 Rome la nuit est magique, promenez-vous après le dîner
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Cacio e Pepe</strong> - Pâtes au pecorino et poivre noir, simplicité romaine</li>
                <li><strong>Carbonara</strong> - Authentique avec guanciale, œufs et pecorino (pas de crème !)</li>
                <li><strong>Amatriciana</strong> - Sauce tomate, guanciale et pecorino</li>
                <li><strong>Saltimbocca alla Romana</strong> - Escalope de veau, jambon et sauge</li>
                <li><strong>Carciofi alla Giudia</strong> - Artichauts frits à la juive, spécialité du Ghetto</li>
                <li><strong>Supplì</strong> - Boulettes de riz frites fourrées à la mozzarella</li>
                <li><strong>Maritozzo</strong> - Brioche romaine fourrée à la crème chantilly</li>
                <li><strong>Gelato</strong> - Glace artisanale, goûtez pistache et stracciatella</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sites Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Sites explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Colisée */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?w=1200&q=80"
                      alt="Colisée"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Antiquité</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Colisée</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">L'amphithéâtre le plus célèbre du monde</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Colisée, symbole absolu de Rome et de la puissance de l'Empire romain, impressionne par ses dimensions
                        colossales et son histoire fascinante. Cet amphithéâtre pouvait accueillir jusqu'à 50 000 spectateurs
                        venus assister aux combats de gladiateurs, aux chasses d'animaux exotiques et aux reconstitutions de
                        batailles navales. Construit en 80 après J.-C., il témoigne du génie architectural romain.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        En parcourant ses galeries souterraines récemment ouvertes au public, on découvre les coulisses des jeux :
                        cages des fauves, systèmes de trappes et de monte-charges qui permettaient des apparitions spectaculaires
                        dans l'arène. Malgré les tremblements de terre et les pillages au fil des siècles, le Colisée reste
                        debout, majestueux témoignage de l'Antiquité romaine qui continue de fasciner le monde entier.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Incontournable</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Vatican */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1531572753322-ad063cecc140?w=1200&q=80"
                      alt="Vatican"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Art</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Vatican</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le plus petit État du monde, trésor d'art sacré</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Le Vatican, enclave indépendante au cœur de Rome, abrite certaines des plus grandes œuvres d'art de
                        l'humanité. La Chapelle Sixtine, avec ses fresques extraordinaires de Michel-Ange représentant la Création
                        et le Jugement Dernier, laisse sans voix. Les Musées du Vatican constituent un labyrinthe de galeries
                        remplies de sculptures antiques, tapisseries flamandes et peintures de maîtres de la Renaissance.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        La Basilique Saint-Pierre, plus grande église du monde chrétien, impressionne par sa coupole vertigineuse
                        dessinée par Michel-Ange et sa Pietà sculptée avec une délicatesse incroyable. Grimper au sommet du dôme
                        offre une vue panoramique époustouflante sur Rome. L'audience papale du mercredi matin, gratuite et
                        accessible à tous, permet de vivre l'atmosphère unique de ce lieu de pouvoir spirituel millénaire.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Renaissance</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Spirituel</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Fontaine de Trevi */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1525874684015-58379d421a52?w=1200&q=80"
                      alt="Fontaine de Trevi"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Baroque</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Fontaine de Trevi</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">La plus célèbre fontaine du monde</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        La Fontaine de Trevi est un chef-d'œuvre baroque spectaculaire qui jaillit au détour d'une petite place,
                        surprenant par sa grandeur théâtrale. Haute de 26 mètres et large de 49 mètres, elle représente Neptune
                        sur son char tiré par des chevaux marins, entouré de tritons et d'allégories. L'eau cristalline cascade
                        en créant un bruit apaisant qui contraste avec l'agitation touristique permanente.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        La tradition veut qu'on y jette une pièce par-dessus l'épaule : une pour revenir à Rome, deux pour
                        trouver l'amour, trois pour se marier. Ces pièces, collectées chaque nuit, financent des œuvres
                        caritatives. Pour vraiment apprécier la fontaine, venez au lever du soleil quand la place est encore
                        déserte et que la lumière dorée caresse les sculptures de marbre blanc, moment magique et photogénique.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Monument</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Photos</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trastevere */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1529260830199-42c24126f198?w=1200&q=80"
                      alt="Trastevere"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Authentique</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Trastevere</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le quartier bohème du vrai Rome</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Trastevere, littéralement "au-delà du Tibre", est le quartier le plus authentique et charmant de Rome.
                        Ses ruelles pavées étroites, ses façades ocre ornées de glycines, ses petites places animées et ses
                        trattorias familiales incarnent la dolce vita romaine. Le jour, les artisans travaillent dans leurs
                        ateliers, les nonnas discutent sur le pas des portes, et le linge sèche aux fenêtres.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Le soir, Trastevere se transforme en épicentre de la vie nocturne romaine. Les places comme Piazza
                        Santa Maria se remplissent de Romains venus boire un spritz, les restaurants sortent leurs tables sur
                        les pavés, et les musiciens de rue créent une ambiance festive. C'est ici qu'il faut venir pour déguster
                        une vraie carbonara ou cacio e pepe dans une osteria authentique, loin des pièges à touristes du centre.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Gastronomie</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Vie nocturne</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section section-dark py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-white mb-6">
              Retour en Italie
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations italiennes et leurs merveilles.
            </p>
            <Link
              href="/blog/europe/italie"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer l'Italie
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
