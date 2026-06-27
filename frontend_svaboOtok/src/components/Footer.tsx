import { useState } from 'react';
import { Mail, Phone, MapPin, Heart } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

interface FooterProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: {
    contact: 'Kontakt',
    address: 'Adresa',
    phone: 'Telefon',
    email: 'Email',
    rights: 'Sva prava pridržana',
    quickLinks: 'Brze poveznice',
    home: 'Početna',
    about: 'O nama',
    gallery: 'Galerija',
    cooperations: 'Suradnje'
  },
  en: {
    contact: 'Contact',
    address: 'Address',
    phone: 'Phone',
    email: 'Email',
    rights: 'All rights reserved',
    quickLinks: 'Quick Links',
    home: 'Home',
    about: 'About Us',
    gallery: 'Gallery',
    cooperations: 'Cooperations'
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

  return (
    <footer id="contact" className="bg-white text-black pt-16 pb-8 px-5">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-1 bg-yellow rounded-full" />
          <h2 className="text-4xl font-bold">{t.contact}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          <div>
            <h3 className="text-yellow text-xl font-bold mb-4">PVC Stolarija Švabo Otok</h3>
            <p className="leading-relaxed text-gray-600">
              {lang === 'hr' ? 'Vaš partner za kvalitetnu PVC stolariju' : 'Your partner for quality PVC joinery'}
            </p>
          </div>

          <div>
            <h3 className="text-black text-xl font-bold mb-4">{t.quickLinks}</h3>
            <div className="space-y-3">
              {quickLinks.map((link, index) => (
                <button
                  key={index}
                  onClick={() => smoothScrollTo(link.id)}
                  className="block text-gray-600 hover:text-yellow transition-all duration-200 hover:translate-x-2 font-medium"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-black text-xl font-bold mb-4">{t.contact}</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow shrink-0" />
                <a href="mailto:info@svabo-otok.hr" className="text-gray-600 hover:text-yellow transition-colors">
                  info@svabo-otok.hr
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow shrink-0" />
                <a href="tel:+385XXXXXXXXX" className="text-gray-600 hover:text-yellow transition-colors">
                  +385 XX XXX XXXX
                </a>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-yellow shrink-0" />
                <a
                  href="https://maps.google.com/?q=Otok,Croatia"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-yellow transition-colors"
                >
                  Otok, Hrvatska
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gray-200 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p>&copy; 2024–{new Date().getFullYear()} Švabo-Otok. {t.rights}.</p>
            <div className="flex items-center gap-2">
              <span>{lang === 'hr' ? 'Napravljeno s' : 'Made with'}</span>
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
              <span>{lang === 'hr' ? 'u Hrvatskoj' : 'in Croatia'}</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
