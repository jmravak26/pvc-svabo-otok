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

const PARTNERS = [
  { name: 'Würth',         logo: '/images/partnerImages/wurthLogo.png',          url: 'https://eshop.wuerth.com.hr/' },
  { name: 'Alukönigstahl', logo: '/images/partnerImages/AlukönigstahlLogo.png',  url: 'https://www.alukoenigstahl.hr/en' },
  { name: 'Rehau',         logo: '/images/partnerImages/RehauLogo.png',          url: 'https://www.rehau.com/hr-hr' },
  { name: 'Feal',          logo: '/images/partnerImages/FealLogo.png',           url: 'https://feal.hr/en/' },
  { name: 'Aluk Tim',      logo: '/images/partnerImages/AlukTimLogo.png',        url: 'https://aluk.hr/' },
  { name: 'Roltek',        logo: '/images/partnerImages/RoltekLogo.jpg',         url: 'https://www.roltek.eu/' },
  { name: 'Ideco',         logo: '/images/partnerImages/IdecoLogo.jpg',          url: 'https://www.ideco.hr/hr' },
  { name: 'Formator',      logo: '/images/partnerImages/FormatorLogo.png',       url: 'https://www.formator.hr/' },
];

function Cooperations({ lang }: CooperationsProps) {
  const t = translations[lang];

  return (
    <section id="cooperations" className="py-24 bg-black text-white">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-1 bg-yellow rounded-full" />
          <h2 className="text-4xl font-bold">{t.title}</h2>
        </div>
        <p className="text-gray-400 mb-12">{t.subtitle}</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {PARTNERS.map((partner) => (
            <a
              key={partner.name}
              href={partner.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex justify-center items-center p-5 bg-white rounded-2xl h-32 md:hover:-translate-y-2 md:hover:shadow-[0_8px_30px_rgba(255,193,7,0.3)] transition-all duration-300"
            >
              {partner.logo ? (
                <img src={partner.logo} alt={partner.name} className="max-w-full max-h-20 object-contain" />
              ) : (
                <span className="text-lg font-bold text-gray-700 text-center">{partner.name}</span>
              )}
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Cooperations;
