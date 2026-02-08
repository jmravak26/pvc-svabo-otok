import { Mail, Phone, MapPin } from 'lucide-react';
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

  const quickLinks = [
    { label: t.home, id: 'top' },
    { label: t.about, id: 'about' },
    { label: t.gallery, id: 'gallery' },
    { label: t.cooperations, id: 'cooperations' }
  ];

  return (
    <footer id="contact" className="bg-black text-white pt-16 pb-5 px-5">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        <div>
          <h3 className="text-yellow text-xl font-bold mb-4">PVC Stolarija Švabo Otok</h3>
          <p className="leading-relaxed text-gray-300">{lang === 'hr' ? 'Vaš partner za kvalitetnu PVC stolariju' : 'Your partner for quality PVC joinery'}</p>
        </div>
        
        <div>
          <h3 className="text-yellow text-xl font-bold mb-4">{t.quickLinks}</h3>
          <div className="space-y-3">
            {quickLinks.map((link, index) => (
              <button
                key={index}
                onClick={() => smoothScrollTo(link.id)}
                className="block text-gray-300 hover:text-yellow transition-all duration-200 hover:translate-x-2 font-medium"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-yellow text-xl font-bold mb-4">{t.contact}</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Mail className="w-4 h-4 text-yellow" />
              <div>
                <p className="font-semibold text-white mb-1">{t.email}</p>
                <a 
                  href="mailto:info@svabo-otok.hr" 
                  className="text-gray-300 hover:text-yellow transition-colors"
                >
                  info@svabo-otok.hr
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Phone className="w-4 h-4 text-yellow" />
              <div>
                <p className="font-semibold text-white mb-1">{t.phone}</p>
                <a 
                  href="tel:+385XXXXXXXXX" 
                  className="text-gray-300 hover:text-yellow transition-colors"
                >
                  +385 XX XXX XXXX
                </a>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <MapPin className="w-4 h-4 text-yellow" />
              <div>
                <p className="font-semibold text-white mb-1">{t.address}</p>
                <a 
                  href="https://maps.google.com/?q=Otok,Croatia" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow transition-colors"
                >
                  Otok, Hrvatska
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto pt-5 border-t border-gray-600 text-center text-gray-400">
        <p>&copy; 2024 Švabo-Otok. {t.rights}.</p>
      </div>
    </footer>
  );
}

export default Footer;
