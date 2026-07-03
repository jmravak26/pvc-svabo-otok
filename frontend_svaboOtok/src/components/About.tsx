import { useState, useEffect } from 'react';
import { Frame, Layers, Wind, Wrench } from 'lucide-react';

interface AboutProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: {
    title: 'O nama',
    text: 'Švabo-Otok d.o.o. iz Turjaka specijalizirana je tvrtka za prodaju, ugradnju i servis PVC i aluminijske stolarije. Nudimo kompletna rješenja za dom i poslovne objekte — od prozora i vrata do roleta i komarnika — uz besplatno savjetovanje, izradu po mjeri i profesionalnu montažu.',
    learnMore: 'Saznaj više',
    close: 'Zatvori',
    icons: [Frame, Layers, Wind, Wrench],
  features: [
      {
        title: 'PVC Stolarija',
        desc: 'Prozori i vrata po mjeri, klizne stijene, panoramski sustavi i višekomorni profili za izvrsnu toplinsku i zvučnu izolaciju.',
        details: {
          heading: 'PVC prozori i vrata – energetska učinkovitost i dugotrajnost',
          intro: 'PVC stolarija danas je jedan od najtraženijih izbora zbog izvrsne toplinske i zvučne izolacije.',
          bullets: [
            'PVC prozori po mjeri',
            'Balkonska i ulazna PVC vrata',
            'Klizne stijene i panoramski sustavi',
            'Višekomorni profili za bolju izolaciju',
            'Različite vrste stakla (dvoslojno, troslojno, LOW-E)',
          ],
          outro: 'Prednosti PVC prozora uključuju jednostavno održavanje, otpornost na vremenske uvjete i dug vijek trajanja, što ih čini idealnim izborom za obiteljske kuće i poslovne objekte.',
        },
      },
      {
        title: 'ALU Stolarija',
        desc: 'Aluminijski prozori i vrata, staklene fasade, podizno-klizni sustavi i konstrukcije velikih dimenzija s minimalističkim dizajnom.',
        details: {
          heading: 'ALU stolarija – moderan dizajn i vrhunska izdržljivost',
          intro: 'Za one koji traže sofisticiran izgled i maksimalnu čvrstoću, aluminijska stolarija je pravi izbor.',
          bullets: [
            'ALU prozore i vrata',
            'Staklene fasade',
            'Klizne i podizno-klizne sustave',
            'Konstrukcije velikih dimenzija',
            'Minimalistički dizajn s tankim profilima',
          ],
          outro: 'Aluminij je posebno pogodan za moderne objekte zbog svoje otpornosti na koroziju i mogućnosti izrade velikih staklenih površina.',
        },
      },
      {
        title: 'Rolete & Komarnici',
        desc: 'Vanjske i unutarnje rolete, ALU i PVC žaluzine, komarnici svih vrsta te električni i pametni sustavi upravljanja.',
        details: {
          heading: 'Rolete, žaluzine i komarnici – dodatna zaštita i funkcionalnost',
          intro: 'Osim prozora i vrata, standardna ponuda uključuje i dodatnu opremu koja povećava udobnost i energetsku učinkovitost.',
          bullets: [
            'Vanjske i unutarnje rolete',
            'ALU i PVC žaluzine',
            'Komarnici (fiksni, rolo, klizni, plisirani)',
            'Električne i pametne sustave upravljanja',
          ],
          outro: 'Ovi elementi štite od sunca i insekata te doprinose energetskoj učinkovitosti prostora.',
        },
      },
      {
        title: 'Kompletna Usluga',
        desc: 'Besplatno savjetovanje i izmjera, izrada po mjeri, profesionalna montaža, demontaža stare stolarije te garancija na proizvode i radove.',
        details: {
          heading: 'Usluge koje nudimo',
          intro: 'Švabo – Otok d.o.o. nudi kompletnu uslugu prilagođenu individualnim potrebama kupaca, bilo da se radi o novogradnji ili renovaciji.',
          bullets: [
            'Besplatno savjetovanje i izmjera',
            'Izrada po mjeri',
            'Profesionalna montaža',
            'Demontaža stare stolarije',
            'Servis i održavanje',
            'Garancija na proizvode i radove',
          ],
          outro: 'Odabirom lokalnog stručnjaka dobivate bržu realizaciju projekta, lakšu komunikaciju, poznavanje lokalnih klimatskih uvjeta i pouzdanu postprodajnu uslugu.',
        },
      },
    ],
  },
  en: {
    title: 'About Us',
    text: 'Švabo-Otok d.o.o. from Turjaci is a specialised company for the sale, installation and servicing of PVC and aluminium joinery. We offer complete solutions for homes and commercial buildings — from windows and doors to shutters and mosquito nets — with free consultation, custom manufacturing and professional installation.',
    learnMore: 'Learn more',
    close: 'Close',
    icons: [Frame, Layers, Wind, Wrench],
  features: [
      {
        title: 'PVC Joinery',
        desc: 'Custom windows and doors, sliding walls, panoramic systems and multi-chamber profiles for excellent thermal and acoustic insulation.',
        details: {
          heading: 'PVC windows & doors – energy efficiency and durability',
          intro: 'PVC joinery is one of the most popular choices today due to its excellent thermal and acoustic insulation.',
          bullets: [
            'Custom PVC windows',
            'Balcony and entrance PVC doors',
            'Sliding walls and panoramic systems',
            'Multi-chamber profiles for better insulation',
            'Various glass types (double, triple, LOW-E)',
          ],
          outro: 'PVC windows are easy to maintain, weather-resistant and long-lasting — ideal for homes and commercial buildings.',
        },
      },
      {
        title: 'ALU Joinery',
        desc: 'Aluminium windows and doors, glass facades, lift-and-slide systems and large-format constructions with minimalist design.',
        details: {
          heading: 'ALU joinery – modern design and superior durability',
          intro: 'For those seeking a sophisticated look and maximum strength, aluminium joinery is the right choice.',
          bullets: [
            'ALU windows and doors',
            'Glass facades',
            'Sliding and lift-and-slide systems',
            'Large-format constructions',
            'Minimalist design with slim profiles',
          ],
          outro: 'Aluminium is especially suited for modern buildings due to its corrosion resistance and ability to create large glass surfaces.',
        },
      },
      {
        title: 'Shutters & Screens',
        desc: 'External and internal shutters, ALU and PVC blinds, all types of mosquito nets and electric smart control systems.',
        details: {
          heading: 'Shutters, blinds & mosquito nets – protection and functionality',
          intro: 'In addition to windows and doors, our standard offer includes accessories that increase comfort and energy efficiency.',
          bullets: [
            'External and internal shutters',
            'ALU and PVC blinds',
            'Mosquito nets (fixed, roller, sliding, pleated)',
            'Electric and smart control systems',
          ],
          outro: 'These elements protect against sun and insects and contribute to the energy efficiency of your space.',
        },
      },
      {
        title: 'Complete Service',
        desc: 'Free consultation and measurement, custom manufacturing, professional installation, removal of old joinery and warranty on all products and works.',
        details: {
          heading: 'Our services',
          intro: 'Švabo – Otok d.o.o. offers a complete service tailored to individual customer needs, whether for new construction or renovation.',
          bullets: [
            'Free consultation and measurement',
            'Custom manufacturing',
            'Professional installation',
            'Removal of old joinery',
            'Service and maintenance',
            'Warranty on products and works',
          ],
          outro: 'By choosing a local expert you get faster project delivery, easier communication, knowledge of local climate conditions and reliable after-sales service.',
        },
      },
    ],
  },
};

function About({ lang }: AboutProps) {
  const t = translations[lang];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    if (activeIndex !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [activeIndex]);

  const active = activeIndex !== null ? t.features[activeIndex] : null;

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-1 bg-yellow rounded-full" />
          <h2 className="text-4xl font-bold">{t.title}</h2>
        </div>
        <p className="max-w-2xl mb-16 text-lg text-gray-400">{t.text}</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t.features.map((feature, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className="text-center flex flex-col items-center border border-gray-800 rounded-2xl p-8 hover:border-yellow transition-all duration-300 group cursor-pointer hover:bg-white/5 focus:outline-none"
            >
              <span className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-yellow/10 text-yellow mb-4">
                {(() => { const Icon = t.icons[index]; return <Icon size={24} strokeWidth={1.5} />; })()}
              </span>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">{feature.desc}</p>
              <span className="inline-flex items-center gap-1 text-xs font-semibold text-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {t.learnMore} →
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setActiveIndex(null)}
        >
          <div
            className="relative bg-zinc-900 border border-yellow/30 rounded-3xl max-w-lg w-full p-8 shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            {/* Yellow accent bar */}
            <span className="block w-10 h-1 bg-yellow rounded-full mb-5" />

            <h3 className="text-2xl font-bold text-white mb-2">{active.details.heading}</h3>
            <p className="text-gray-400 text-sm mb-5 leading-relaxed">{active.details.intro}</p>

            <ul className="space-y-2 mb-5">
              {active.details.bullets.map((b, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                  <span className="mt-1 w-2 h-2 rounded-full bg-yellow shrink-0" />
                  {b}
                </li>
              ))}
            </ul>

            <p className="text-gray-400 text-sm leading-relaxed border-t border-gray-800 pt-5">
              {active.details.outro}
            </p>

            <button
              onClick={() => setActiveIndex(null)}
              className="mt-6 w-full py-3 bg-yellow text-black font-bold rounded-full hover:bg-white transition-colors duration-300"
            >
              {t.close}
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default About;
