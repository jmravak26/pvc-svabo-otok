interface AboutProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: {
    title: 'O nama',
    text: 'Švabo-Otok je vodeća tvrtka u proizvodnji i ugradnji PVC stolarije. S godinama iskustva, nudimo vrhunsku kvalitetu prozora, vrata i drugih PVC proizvoda. Naša misija je pružiti našim klijentima najbolja rješenja za energetsku učinkovitost, sigurnost i estetiku.',
    features: [
      { title: 'Kvaliteta', desc: 'Koristimo samo najbolje materijale' },
      { title: 'Iskustvo', desc: 'Više od 20 godina u industriji' },
      { title: 'Garancija', desc: 'Dugogodišnja garancija na sve proizvode' }
    ]
  },
  en: {
    title: 'About Us',
    text: 'Švabo-Otok is a leading company in the production and installation of PVC joinery. With years of experience, we offer top quality windows, doors and other PVC products. Our mission is to provide our clients with the best solutions for energy efficiency, security and aesthetics.',
    features: [
      { title: 'Quality', desc: 'We use only the best materials' },
      { title: 'Experience', desc: 'More than 20 years in the industry' },
      { title: 'Warranty', desc: 'Long-term warranty on all products' }
    ]
  }
};

function About({ lang }: AboutProps) {
  const t = translations[lang];

  return (
    <section id="about" className="py-24 bg-black text-white">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-1 bg-yellow rounded-full" />
          <h2 className="text-4xl font-bold">{t.title}</h2>
        </div>
        <p className="max-w-2xl mb-16 text-lg text-gray-400">{t.text}</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {t.features.map((feature, index) => (
            <div key={index} className="border border-gray-800 rounded-2xl p-8 hover:border-yellow transition-colors duration-300">
              <span className="text-yellow text-4xl font-black mb-4 block">0{index + 1}</span>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
