interface CooperationsProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: {
    title: 'Naše Suradnje',
    subtitle: 'Ponosni smo na suradnju s vodećim brendovima u industriji'
  },
  en: {
    title: 'Our Cooperations',
    subtitle: 'We are proud to cooperate with leading brands in the industry'
  }
};

function Cooperations({ lang }: CooperationsProps) {
  const t = translations[lang];
  const partners = Array.from({ length: 4 }, (_, i) => `/images/partnerImages/partner-${i + 1}.png`);

  return (
    <section id="cooperations" className="py-20 px-5 max-w-7xl mx-auto bg-gray-50">
      <h2 className="text-4xl font-bold text-center mb-5">{t.title}</h2>
      <p className="text-center text-gray-600 mb-10">{t.subtitle}</p>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-10 items-center mt-10">
        {partners.map((partner, index) => (
          <div key={index} className="flex justify-center items-center p-5 bg-white rounded-lg h-32 hover:scale-105 transition-transform">
            <img src={partner} alt={`Partner ${index + 1}`} className="max-w-full max-h-20 object-contain grayscale hover:grayscale-0 transition-all" />
          </div>
        ))}
      </div>
    </section>
  );
}

export default Cooperations;
