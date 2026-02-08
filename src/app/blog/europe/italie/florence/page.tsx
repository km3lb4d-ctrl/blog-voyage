'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function FlorencePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Florence</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Berceau de la Renaissance et capitale de l'art italien.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-3xl font-bold mb-6">Découvrir Florence</h2>
              <p className="text-gray-700 mb-6">
                Florence, capitale de la Toscane, est un véritable musée à ciel ouvert où naquirent la Renaissance
                et les plus grands génies de l'histoire de l'art. Dans cette ville compacte posée sur les rives de
                l'Arno, chaque rue, chaque place, chaque église recèle des trésors artistiques inestimables. Des
                Médicis aux maîtres de la Renaissance comme Michel-Ange, Botticelli et Léonard de Vinci, Florence
                a façonné l'art occidental. Aujourd'hui encore, la ville vibre au rythme de cette richesse culturelle
                exceptionnelle, entre palais Renaissance, galeries d'art prestigieuses et artisans perpétuant des
                savoir-faire séculaires.
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Duomo</strong> - Cathédrale Santa Maria del Fiore avec coupole de Brunelleschi</li>
                <li><strong>Galerie des Offices</strong> - Plus grande collection d'art Renaissance au monde</li>
                <li><strong>Ponte Vecchio</strong> - Pont médiéval aux boutiques d'orfèvres séculaires</li>
                <li><strong>Galerie de l'Académie</strong> - David de Michel-Ange, sculpture iconique</li>
                <li><strong>Piazzale Michelangelo</strong> - Vue panoramique à 360° sur Florence</li>
                <li><strong>Palazzo Pitti</strong> - Palais Renaissance et jardins de Boboli</li>
                <li><strong>Basilique Santa Croce</strong> - Panthéon des gloires italiennes</li>
                <li><strong>Mercato Centrale</strong> - Marché couvert gastronomique</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Quartiers emblématiques</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Centro Storico</strong> - Cœur historique avec Duomo et Piazza della Signoria</li>
                <li><strong>Oltrarno</strong> - Rive gauche authentique, ateliers d'artisans</li>
                <li><strong>San Lorenzo</strong> - Marché, basilique et chapelles des Médicis</li>
                <li><strong>Santa Croce</strong> - Quartier vivant avec bars et restaurants</li>
                <li><strong>San Niccolò</strong> - Village dans la ville, terrasses panoramiques</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Grimper au sommet du Duomo pour une vue vertigineuse</li>
                <li>Admirer le coucher de soleil depuis Piazzale Michelangelo</li>
                <li>Déguster un gelato sur la Piazza della Signoria</li>
                <li>Flâner dans les jardins de Boboli au printemps</li>
                <li>Découvrir les ateliers d'artisans dans l'Oltrarno</li>
                <li>Traverser le Ponte Vecchio au lever du jour</li>
                <li>Prendre un aperitivo dans le quartier de Santa Croce</li>
                <li>Se perdre dans les salles des Offices un matin de semaine</li>
              </ul>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-juin et septembre-octobre (moins de foule, climat idéal)<br />
                <strong>Langue :</strong> Italien (anglais dans les zones touristiques)<br />
                <strong>Monnaie :</strong> Euro (€)<br />
                <strong>Transport :</strong> Centre-ville entièrement à pied, bus pour périphérie<br />
                <strong>Durée conseillée :</strong> 2-4 jours minimum<br />
                <strong>Conseil :</strong> Réserver musées en ligne plusieurs semaines à l'avance
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                🎫 Réservez TOUS vos musées en ligne, files d'attente de plusieurs heures sinon<br />
                🏛️ Visitez les Offices dès l'ouverture à 8h15 pour éviter la foule<br />
                👟 Portez des chaussures confortables, Florence se visite à pied<br />
                🍦 Goûtez le gelato artisanal, évitez les glaces colorées artificiellement<br />
                🎨 Prenez votre temps aux Offices, c'est dense et épuisant<br />
                💰 Déjeunez dans l'Oltrarno pour des prix plus doux<br />
                🌅 Montez à Piazzale Michelangelo au coucher du soleil<br />
                📚 La Firenze Card (85€) peut valoir le coup si vous visitez beaucoup de musées
              </p>

              <h3 className="text-2xl font-semibold mt-8 mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Bistecca alla Fiorentina</strong> - Énorme côte de bœuf grillée, minimum 1kg</li>
                <li><strong>Lampredotto</strong> - Sandwich tripes florentines, street food local</li>
                <li><strong>Ribollita</strong> - Soupe toscane aux haricots, chou et pain</li>
                <li><strong>Pappa al Pomodoro</strong> - Soupe pain et tomates, réconfortante</li>
                <li><strong>Schiacciata</strong> - Focaccia toscane à l'huile d'olive</li>
                <li><strong>Panzanella</strong> - Salade pain, tomates et légumes d'été</li>
                <li><strong>Cantucci</strong> - Biscuits aux amandes à tremper dans le vin santo</li>
                <li><strong>Gelato</strong> - Vivoli ou Gelateria dei Neri pour les meilleurs</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Sites Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Sites explorés</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Duomo */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1543429257-ee5b6d6ef317?w=1200&q=80"
                      alt="Duomo Florence"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Architecture</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Duomo</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">La cathédrale iconique de Florence</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le Duomo de Florence, officiellement cathédrale Santa Maria del Fiore, domine le paysage urbain avec
                        sa coupole rouge brique imaginée par Brunelleschi, véritable prouesse technique de la Renaissance.
                        Sa façade de marbre polychrome blanc, vert et rose crée un effet visuel saisissant qui capture
                        instantanément le regard. Le campanile de Giotto, tour-clocher élancée de 85 mètres, complète
                        harmonieusement cet ensemble architectural exceptionnel.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Grimper les 463 marches jusqu'au sommet de la coupole est une expérience inoubliable : on traverse
                        les couloirs étroits entre les deux coques de la coupole, découvre de près les fresques du Jugement
                        Dernier de Vasari, et débouche sur une terrasse panoramique offrant une vue à 360° sur Florence et
                        les collines toscanes. Cette ascension vertigineuse permet de saisir le génie architectural de
                        Brunelleschi et d'embrasser toute la beauté de la ville Renaissance.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Renaissance</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Galerie des Offices */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1566404791232-af9fe0ae8f8b?w=1200&q=80"
                      alt="Galerie des Offices"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Art</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Galerie des Offices</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le temple de la Renaissance italienne</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        La Galerie des Offices (Uffizi) est l'un des musées les plus prestigieux au monde, abritant la plus
                        importante collection d'art de la Renaissance italienne. Fondée par les Médicis, elle rassemble des
                        chefs-d'œuvre absolus : La Naissance de Vénus et Le Printemps de Botticelli, L'Annonciation de
                        Léonard de Vinci, la Vénus d'Urbino du Titien, et des œuvres de Michel-Ange, Raphaël, Caravage...
                        Chaque salle est un concentré de beauté et d'histoire de l'art.
                      </p>
                      <p className="text-gray-700 mb-4">
                        La visite des Offices est une expérience intense qui demande du temps et de l'énergie. Les salles
                        se succèdent dans un parcours chronologique permettant de suivre l'évolution de l'art italien du
                        Moyen Âge à l'époque baroque. Les fenêtres du corridor offrent des vues magnifiques sur l'Arno et
                        le Ponte Vecchio. Réserver son billet plusieurs semaines à l'avance est indispensable, et venir dès
                        l'ouverture permet d'apprécier les œuvres dans une relative tranquillité.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Musée</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Chefs-d'œuvre</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ponte Vecchio */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1550329824-def548fdd7c1?w=1200&q=80"
                      alt="Ponte Vecchio"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Historique</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Ponte Vecchio</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Le pont médiéval emblématique de Florence</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le Ponte Vecchio, "Vieux Pont" en italien, est le plus ancien pont de Florence et l'un des symboles
                        les plus romantiques de la ville. Construit en 1345, il a la particularité unique d'être bordé de
                        boutiques construites en encorbellement au-dessus de l'Arno. Autrefois occupées par des bouchers et
                        tanneurs, ces échoppes abritent aujourd'hui des joailliers et orfèvres perpétuant une tradition
                        artisanale séculaire qui fait la renommée du pont.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Au-dessus des boutiques court le corridor de Vasari, passage secret construit en 1565 pour permettre
                        aux Médicis de circuler entre le Palazzo Vecchio et le Palazzo Pitti sans se mêler au peuple. Le pont
                        offre des vues magnifiques sur l'Arno, particulièrement au coucher du soleil quand la lumière dorée
                        se reflète dans l'eau. C'est aussi un lieu privilégié pour accrocher un cadenas d'amour, tradition
                        romantique qui perdure malgré les efforts de la ville pour les retirer.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Monument</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Romantique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* David de Michel-Ange */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1558103843-3fcff8e912fb?w=1200&q=80"
                      alt="David de Michel-Ange"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Sculpture</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">David de Michel-Ange</h3>
                    <p className="text-sm text-[#f56300] font-semibold mb-4">Chef-d'œuvre absolu de la sculpture Renaissance</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 mb-4">
                        Le David de Michel-Ange, conservé à la Galerie de l'Académie, est sans doute la sculpture la plus
                        célèbre au monde. Cette statue colossale de 5,17 mètres représente le héros biblique avant son combat
                        contre Goliath, dans une posture de contrapposto parfaite qui exprime à la fois la tension et
                        l'harmonie. Sculptée dans un seul bloc de marbre de Carrare entre 1501 et 1504, elle témoigne du
                        génie de Michel-Ange qui n'avait que 26 ans lorsqu'il l'a réalisée.
                      </p>
                      <p className="text-gray-700 mb-4">
                        Face au David, on est saisi par la perfection anatomique, la finesse des détails (veines, muscles,
                        mèches de cheveux) et l'intensité du regard tourné vers son ennemi. La sculpture symbolise la force,
                        le courage et l'idéal humaniste de la Renaissance florentine. La galerie présente également d'autres
                        œuvres de Michel-Ange comme ses Esclaves inachevés, permettant de comprendre sa technique de
                        sculpture "par soustraction" où la figure émerge progressivement du bloc de marbre.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Iconique</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Incontournable</span>
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
