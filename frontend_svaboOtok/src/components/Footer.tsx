import { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Heart, Shield, Award } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

interface FooterProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: {
    contact: 'Kontakt Informacije',
    tagline: 'Vaš pouzdani partner za PVC i ALU stolariju',
    slogan: 'Od savjetovanja do montaže — sve na jednom mjestu.',
    hours: 'Radno vrijeme',
    weekdays: 'Pon – Pet',
    rights: 'Sva prava pridržana',
    quickLinks: 'Brze Poveznice',
    home: 'Početna',
    about: 'O nama',
    gallery: 'Galerija',
    cooperations: 'Suradnje',
    madeWith: 'Napravljeno s',
    inCroatia: 'u Hrvatskoj',
  },
  en: {
    contact: 'Contact Info',
    tagline: 'Your reliable partner for PVC and ALU joinery',
    slogan: 'From consultation to installation — all in one place.',
    hours: 'Working Hours',
    weekdays: 'Mon – Fri',
    rights: 'All rights reserved',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About Us',
    gallery: 'Gallery',
    cooperations: 'Cooperations',
    madeWith: 'Made with',
    inCroatia: 'in Croatia',
  }
};

function Footer({ lang }: FooterProps) {
  const t = translations[lang];
  const [hearts, setHearts] = useState<{ id: number; x: number; y: number }[]>([]);

  const createHearts = () => {
    const newHearts = Array.from({ length: 6 }, (_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100 - 50,
      y: Math.random() * 50 - 25,
    }));
    setHearts(newHearts);
    setTimeout(() => setHearts([]), 4000);
  };

  const quickLinks = [
    { label: t.home, id: 'top' },
    { label: t.about, id: 'about' },
    { label: t.gallery, id: 'gallery' },
    { label: t.cooperations, id: 'cooperations' }
  ];

  const contactItems = [
    { icon: Mail, label: 'Email', value: 'svabootok1@gmail.com', href: 'mailto:svabootok1@gmail.com', external: false },
    { icon: Phone, label: lang === 'hr' ? 'Telefon' : 'Phone', value: '+385 98 336 884', href: 'tel:+38598336884', external: false },
    { icon: MapPin, label: lang === 'hr' ? 'Adresa' : 'Address', value: 'Turjaci 39b, 21230 Sinj', href: 'https://maps.google.com/?q=Turjaci+39b,+21230+Sinj,+Croatia', external: true },
    { icon: Clock, label: t.hours, value: `${t.weekdays}: 08:00 – 16:00`, href: null, external: false },
  ];

  return (
    <footer id="contact" className="bg-amber-50 text-black relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-linear-to-tr from-yellow/20 to-transparent rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-linear-to-tr from-yellow/20 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-5 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Logo & description */}
          <div className="md:col-span-2 flex flex-col items-center md:items-start">
            <div className="flex items-center gap-4 mb-5 group">
              <img src="/images/logoImages/mainLogo.png" alt="Švabo-Otok Logo" className="h-12 rounded-full group-hover:scale-105 transition-all duration-300" />
              <span className="text-2xl font-bold text-black">Švabo-Otok d.o.o.</span>
            </div>
            <p className="text-xl font-bold text-black mb-1 text-center md:text-left">{t.tagline}</p>
            <p className="text-gray-500 text-sm mb-6 text-center md:text-left">{t.slogan}</p>
            {/* Badge icons */}
            <div className="flex gap-3">
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                <Shield className="w-4 h-4 text-yellow" />
                <span className="text-xs font-semibold text-gray-700">{lang === 'hr' ? 'Garancija' : 'Warranty'}</span>
              </div>
              <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-xl px-3 py-2 shadow-sm">
                <Award className="w-4 h-4 text-yellow" />
                <span className="text-xs font-semibold text-gray-700">{lang === 'hr' ? '20+ godina iskustva' : '20+ years experience'}</span>
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-6 text-yellow">{t.quickLinks}</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => smoothScrollTo(link.id)}
                  className="block text-gray-600 hover:text-black transition-all duration-200 hover:translate-x-2 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="font-bold text-lg mb-6 text-yellow">{t.contact}</h3>
            <div className="space-y-4">
              {contactItems.map(({ icon: Icon, label, value, href, external }) => (
                <div key={label} className="flex items-start gap-3 w-fit">
                  <div className="w-8 h-8 bg-white border border-gray-200 rounded-lg flex items-center justify-center shadow-sm shrink-0 mt-0.5">
                    <Icon className="w-4 h-4 text-yellow" />
                  </div>
                  <div>
                    <p className="text-black text-sm font-medium mb-0.5">{label}</p>
                    {href ? (
                      <a
                        href={href}
                        target={external ? '_blank' : undefined}
                        rel={external ? 'noopener noreferrer' : undefined}
                        className="text-gray-600 hover:text-yellow transition-colors text-sm"
                      >
                        {value}
                      </a>
                    ) : (
                      <p className="text-gray-600 text-sm">{value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-300 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-sm">
            <span>&copy; 2024–{new Date().getFullYear()} Švabo-Otok. {t.rights}.</span>
            <div className="flex items-center gap-2 relative">
              <span>{t.madeWith}</span>
              <button onClick={createHearts} className="relative focus:outline-none">
                <Heart className="w-4 h-4 text-red-500 animate-pulse hover:scale-110 transition-transform cursor-pointer" />
                {hearts.map(heart => (
                  <Heart
                    key={heart.id}
                    className="absolute w-3 h-3 text-red-400 pointer-events-none"
                    style={{
                      left: `${heart.x}px`,
                      top: `${heart.y}px`,
                      animation: 'float-up 4s ease-out forwards',
                    }}
                  />
                ))}
              </button>
              <span>{t.inCroatia}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
