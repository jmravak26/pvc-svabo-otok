import { ShieldCheck, Award, BadgeCheck, FileText } from 'lucide-react';

interface CredentialsProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: {
    title: 'Certifikati & Bonitet',
    subtitle: 'Poslujemo transparentno i u skladu s najvišim standardima kvalitete.',
  },
  en: {
    title: 'Certificates & Creditworthiness',
    subtitle: 'We operate transparently and in accordance with the highest quality standards.',
  },
};

// TODO: Replace skeleton items with real certificate/creditworthiness data
const CREDENTIALS = [
  {
    icon: ShieldCheck,
    titleHr: 'Naziv certifikata 1',
    titleEn: 'Certificate Name 1',
    descHr: 'Kratki opis certifikata ili boniteta.',
    descEn: 'Short description of the certificate or rating.',
  },
  {
    icon: Award,
    titleHr: 'Naziv certifikata 2',
    titleEn: 'Certificate Name 2',
    descHr: 'Kratki opis certifikata ili boniteta.',
    descEn: 'Short description of the certificate or rating.',
  },
  {
    icon: BadgeCheck,
    titleHr: 'Naziv certifikata 3',
    titleEn: 'Certificate Name 3',
    descHr: 'Kratki opis certifikata ili boniteta.',
    descEn: 'Short description of the certificate or rating.',
  },
  {
    icon: FileText,
    titleHr: 'Naziv certifikata 4',
    titleEn: 'Certificate Name 4',
    descHr: 'Kratki opis certifikata ili boniteta.',
    descEn: 'Short description of the certificate or rating.',
  },
];

function Credentials({ lang }: CredentialsProps) {
  const t = translations[lang];

  return (
    <section id="credentials" className="py-24 bg-amber-50">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-6">
          <span className="w-12 h-1 bg-yellow rounded-full" />
          <h2 className="text-4xl font-bold">{t.title}</h2>
        </div>
        <p className="text-gray-500 mb-12">{t.subtitle}</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {CREDENTIALS.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className="flex flex-col items-center text-center bg-white border border-gray-100 rounded-2xl p-8 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-yellow/10 text-yellow mb-5">
                  <Icon size={28} strokeWidth={1.5} />
                </span>
                <h3 className="text-lg font-bold mb-2 text-gray-900">
                  {lang === 'hr' ? item.titleHr : item.titleEn}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {lang === 'hr' ? item.descHr : item.descEn}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Credentials;
