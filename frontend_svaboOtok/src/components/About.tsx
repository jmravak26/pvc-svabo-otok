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
    <section id="about" className="py-20 px-5 max-w-7xl mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-5">{t.title}</h2>
      <p className="text-center max-w-3xl mx-auto mb-12 text-lg text-gray-600">{t.text}</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        {t.features.map((feature, index) => (
          <div key={index} className="bg-white p-8 rounded-lg text-center shadow-md hover:-translate-y-1 hover:shadow-xl transition-all">
            <h3 className="text-yellow text-2xl font-bold mb-3">{feature.title}</h3>
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default About;
