'use client';

import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function AndalousiePage() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen bg-white">
        {/* Hero Section */}
        <section className="section section-dark min-h-screen flex flex-col items-center justify-center text-center">
          <h1 className="headline text-white mb-12 px-4">Andalousie</h1>
          <p className="subheadline text-[#86868b] mb-6 max-w-3xl px-4">
            Sud espagnol passionné, où l'héritage mauresque danse avec le flamenco, les tapas et l'authenticité.
          </p>
        </section>

        {/* Intro Section */}
        <section className="section py-20">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="prose prose-lg mx-auto">
              <h2 className="text-black font-bold !mb-6">Découvrir l'Andalousie</h2>
              <p className="text-gray-700 mb-6">
                L'Andalousie, région du sud de l'Espagne, enchante par son mélange fascinant de cultures chrétienne, juive et musulmane.
                Entre les palais mauresques aux azulejos étincelants, le flamenco passionné qui vibre dans les caves, les villages blancs
                perchés sur les collines et les oliviers à perte de vue, l'Andalousie incarne l'âme authentique de l'Espagne traditionnelle.
                C'est une terre de contrastes, de passion brute et de beauté intemporelle.
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Les incontournables</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Alhambra de Grenade</strong> - Palais mauresque joyau de l'architecture islamique avec vues sur la Sierra Nevada</li>
                <li><strong>Séville</strong> - Cathédrale gothique massive, Alcázar royal et quartier de Triana bohème</li>
                <li><strong>Cordoue</strong> - Mosquée-cathédrale unique au monde, pont romain et médina médiévale</li>
                <li><strong>Ronda</strong> - Village spectaculaire perché sur des gorges avec arènes de taureau historiques</li>
                <li><strong>Pueblos Blancos</strong> - Villages blancs de montagne : Nerja, Frigiliana, Óstunés</li>
                <li><strong>Nérja et Costa del Sol</strong> - Grottes préhistoriques et plages méditerranéennes</li>
                <li><strong>Carmona</strong> - Ville fortifiée avec vues panoramiques sur la campagne</li>
                <li><strong>Jerez</strong> - Capitale du xérès et du flamenco authentique</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Régions emblématiques</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Grenade</strong> - Cité universitaire avec Alhambra et vie étudiante vibrante</li>
                <li><strong>Séville</strong> - Capitale andalouse vibrante, berceau du flamenco et de la passion</li>
                <li><strong>Cordoue</strong> - Carrefour historique entre trois religions, mosquée-cathédrale emblématique</li>
                <li><strong>Malaga</strong> - Porte d'accès côtière, musées d'art et plages</li>
                <li><strong>Jáen</strong> - Cœur des oliviers, moins touristique et authentique</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Expériences à vivre</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li>Explorer l'Alhambra à la lumière dorée du coucher de soleil</li>
                <li>Danser le flamenco dans une cave d'une vieille taberna à Séville</li>
                <li>Se perdre dans les ruelles blanches des pueblos blancos</li>
                <li>Déguster une sangria en terrasse en regardant passer le temps</li>
                <li>Assister à une corrida à l'arène de Ronda ou Séville</li>
                <li>Visiter les plantations d'oliviers et déguster l'huile d'olive locale</li>
                <li>Prendre un çay marocain dans les petits cafés de Grenade</li>
                <li>Découvrir les bodegas de Jerez et déguster du xérès traditionnel</li>
              </ul>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Informations pratiques</h3>
              <p className="text-gray-700">
                <strong>Meilleure période :</strong> Avril-mai et septembre-octobre (très chaud en juillet-août)<br />
                <strong>Durée recommandée :</strong> 7-10 jours pour explorer pleinement<br />
                <strong>Transport :</strong> Voiture essentiellement pour les pueblos blancs et route entre villes<br />
                <strong>Monnaie :</strong> Euro (EUR)<br />
                <strong>Langue :</strong> Espagnol (moins d'anglais en province)<br />
                <strong>Climat :</strong> Très chaud et sec l'été, hivers doux en montagne
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Mes conseils</h3>
              <p className="text-gray-700">
                Louer une voiture pour une liberté maximale dans les pueblos blancs<br />
                Les tableaux de flamenco authentiques commencent tard (22h-23h)<br />
                Visitez l'Alhambra en fin d'après-midi pour les couchers de soleil magiques<br />
                Le xérès de Jerez est bien meilleur ici, à la source<br />
                Les hivernants britanniques y sont nombreux, atmosphère cosmopolite<br />
                Les gazpachos froids sont essentiels en été, goûtez les variantes locales<br />
                Le flamenco authentique se trouve dans les caves, pas les spectacles touristiques<br />
                Les villages blancs se visitent mieux hors saison<br />
              </p>

              <h3 className="text-black font-semibold !mt-8 !mb-4">Spécialités culinaires à goûter</h3>
              <ul className="list-disc pl-6 text-gray-700 space-y-2">
                <li><strong>Rabo de Toro</strong> - Ragoût de queue de taureau, spécialité de Cordoue</li>
                <li><strong>Salmorejo</strong> - Gazpacho épais avec jambon et œuf, version cordouane</li>
                <li><strong>Espinacas con Garbanzos</strong> - Épinards aux pois chiches, plat traditionnel</li>
                <li><strong>Porra Antequerana</strong> - Pâte de pain et tomate, spécialité d'Antequera</li>
                <li><strong>Jamón Ibérico de Bellota</strong> - Jambon ibérique nourri aux glands, excellence</li>
                <li><strong>Conservas de Atún</strong> - Conserves de thon rouge de Jáen, délice local</li>
                <li><strong>Xérès</strong> - Vin fortifié de Jerez, d'apéritif à digestif</li>
                <li><strong>Torrijas</strong> - Pain perdu traditionnel de la Semana Santa</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Quartiers Section */}
        <section className="section py-20 bg-[#f5f5f7]">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold text-center mb-16">Destinations clés explorées</h2>
            <div className="flex flex-col gap-16 max-w-6xl mx-auto">

              {/* Grenade et Alhambra */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1583422409516-2895a77efded?w=1200&q=80"
                      alt="Grenade et Alhambra"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Magie</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Grenade & Alhambra</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Le palais mauresque des rêves</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Grenade et son Alhambra incarnent le rêve andalou : un palais mauresque aux azulejos étincelants,
                        aux fontaines chantantes et aux vues spectaculaires sur la Sierra Nevada enneigée. L'Alhambra est plus qu'un
                        bâtiment ; c'est une œuvre d'art en trois dimensions, où chaque cour, chaque alcôve, chaque détail raconte
                        l'histoire du dernier émirat islamique d'Espagne.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Grenade elle-même est une ville universitaire vibrante, où les jeunes Granadinos et les étudiants Erasmus
                        animent les tea rooms marocaines du quartier de l'Albaicín. Les tés à la menthe coulent à flots, les terrasses
                        débordent d'une jeunesse cosmopolite, et la passion du flamenco authentique pulse dans les caves historiques.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Architecture</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Séville */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1599755178427-5b4e7b63f76e?w=1200&q=80"
                      alt="Séville"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Passion</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Séville</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Cœur battant de l'Andalousie</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Séville est l'Andalousie dans sa forme la plus pure : passion brute, flamenco authentique, et fierté régionale
                        palpable. La cathédrale gothique massive domine l'horizon urbain, la Giralda se dresse majestueuse, et l'Alcázar
                        royal enchante par ses plazas fleuries et ses azulejos. Chaque détail architectural respire la grandeur d'antan.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Mais Séville, c'est surtout le flamenco : dans les caves du quartier de Triana, les danseurs se donnent corps et âme,
                        la guitare pleure, et le public retient son souffle. C'est une émotion brute et intemporelle. Le soir, les terrasses
                        du Guadalquivir s'animent, les rues se remplissent de jeunesse, et on sent palpiter le cœur passionate de l'Andalousie.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Flamenco</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Monuments</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Pueblos Blancos */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1610395696374-3ca81a8b42be?w=1200&q=80"
                      alt="Pueblos Blancos"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Pittoresque</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Pueblos Blancos</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Les villages blancs de montagne</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Les Pueblos Blancos sont la quintessence de l'Andalousie rurale : des villages aux maisons blanches comme la neige
                        perchés sur les collines, avec des ruelles étroites sinuant entre les habitations. Nerja avec ses grottes préhistoriques
                        et ses plages secrètes, Frigiliana avec ses cascades de blanc pur, Óstunés suspendu entre ciel et terre : chaque village
                        est une carte postale vivante.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        Au-delà du pittoresque, ces villages offrent une fenêtre sur la vie rurale andalouse : petits restaurants familiaux
                        servant des plats régionaux savoureux, vieilles femmes brodant sur les terrasses, enfants jouant dans les ruelles pavées.
                        C'est ici qu'on goûte l'Andalousie authentique, loin de l'agitation des grandes villes.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Nature</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Authentique</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Cordoue */}
              <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
                <div className="flex flex-col md:flex-row-reverse">
                  {/* Image */}
                  <div className="md:w-1/2 relative h-80 md:h-auto overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1611929841659-4a40a1aa8a81?w=1200&q=80"
                      alt="Cordoue"
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-800 rounded-full text-xs font-semibold">Histoire</span>
                    </div>
                  </div>
                  {/* Texte */}
                  <div className="md:w-1/2 p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-3xl font-bold text-gray-900 mb-3">Cordoue</h3>
                    <p className="text-sm text-[#f56300] font-semibold !mb-4">Cité des trois cultures</p>
                    <div className="prose prose-gray">
                      <p className="text-gray-700 !mb-4">
                        Cordoue est un carrefour historique unique où chrétiens, musulmans et juifs ont cohabité pendant des siècles.
                        La Mosquée-Cathédrale est le symbole vivant de cette coexistence : construite d'abord comme mosquée avec ses arcs
                        en fer à cheval striés de rouge et blanc, elle a été transformée en cathédrale sans perdre son essence islamique.
                        C'est une harmonie architecturale extraordinaire.
                      </p>
                      <p className="text-gray-700 !mb-4">
                        La médina médiévale de Cordoue mérite des heures de flânerie : le pont romain historique, les petites plazas fleuries,
                        les patios andalous cachés, les cafés où les anciens jouent aux dames. Cordoue invite à la contemplation et à la réflexion
                        sur le vivre-ensemble et la tolérance, un message étonnamment actuel pour une ville medievale.
                      </p>
                      <p className="text-gray-600 text-sm italic">
                        [Espace réservé pour votre récit personnel]
                      </p>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">UNESCO</span>
                      <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-xs">Tolérance</span>
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
              Retour en Espagne
            </h2>
            <p className="text-[#a1a1a6] text-lg mb-8">
              Découvrez d'autres destinations espagnoles et leurs merveilles.
            </p>
            <Link
              href="/blog/europe/espagne"
              className="inline-block px-8 py-4 bg-[#0071e3] text-white rounded-full font-semibold hover:bg-[#0077ED] transition-colors duration-300"
            >
              Explorer l'Espagne
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
