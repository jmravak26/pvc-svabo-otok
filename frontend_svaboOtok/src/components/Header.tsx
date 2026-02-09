import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

interface HeaderProps {
  lang: 'hr' | 'en';
  setLang: (lang: 'hr' | 'en') => void;
}

const translations = {
  hr: {
    home: 'Početna',
    about: 'O nama',
    gallery: 'Galerija',
    cooperations: 'Suradnje',
    contact: 'Kontakt'
  },
  en: {
    home: 'Home',
    about: 'About Us',
    gallery: 'Gallery',
    cooperations: 'Cooperations',
    contact: 'Contact'
  }
};

function Header({ lang, setLang }: HeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const t = translations[lang];
  const isGalleryPage = location.pathname === '/gallery';

  useEffect(() => {
    const handleScroll = () => {
      if (isScrolling) return;
      const scrollY = window.scrollY;
      const maxScroll = 300;
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isScrolling]);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (isGalleryPage) {
      navigate('/');
      setTimeout(() => {
        smoothScrollTo(sectionId);
      }, 100);
    } else {
      setIsScrolling(true);
      smoothScrollTo(sectionId);
      setTimeout(() => {
        setIsScrolling(false);
        // Force update scroll progress after animation
        const scrollY = window.scrollY;
        const maxScroll = 300;
        const progress = Math.min(scrollY / maxScroll, 1);
        setScrollProgress(progress);
      }, 1200);
    }
  };

  return (
    <header 
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: `rgba(${255 - scrollProgress * 255}, ${255 - scrollProgress * 255}, ${255 - scrollProgress * 255}, ${0.95 + scrollProgress * 0.05})`,
        background: scrollProgress > 0 ? `rgba(255, 193, 7, ${scrollProgress})` : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrollProgress > 0.1 ? '0 10px 15px -3px rgba(0, 0, 0, 0.1)' : '0 1px 3px 0 rgba(0, 0, 0, 0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-4">
        <div className="flex justify-between items-center">
          <button onClick={() => scrollToSection('top')} className="flex items-center gap-3 text-2xl font-bold hover:opacity-80 transition-opacity">
            <img src="/pvcSvaboLogo.png" alt="Švabo-Otok Logo" className="h-12" />
            <span>Švabo-Otok</span>
          </button>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex gap-8">
            <button onClick={() => scrollToSection('top')} className={`font-medium transition-colors ${scrollProgress > 0.5 ? 'hover:text-white' : 'hover:text-yellow'}`}>{t.home}</button>
            <button onClick={() => scrollToSection('about')} className={`font-medium transition-colors ${scrollProgress > 0.5 ? 'hover:text-white' : 'hover:text-yellow'}`}>{t.about}</button>
            <button onClick={() => scrollToSection('gallery')} className={`font-medium transition-colors ${scrollProgress > 0.5 ? 'hover:text-white' : 'hover:text-yellow'}`}>{t.gallery}</button>
            <button onClick={() => scrollToSection('cooperations')} className={`font-medium transition-colors ${scrollProgress > 0.5 ? 'hover:text-white' : 'hover:text-yellow'}`}>{t.cooperations}</button>
            <button onClick={() => scrollToSection('contact')} className={`font-medium transition-colors ${scrollProgress > 0.5 ? 'hover:text-white' : 'hover:text-yellow'}`}>{t.contact}</button>
          </nav>

          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <div className="flex border-2 border-black rounded overflow-hidden">
              <button 
                className={`px-4 py-2 font-semibold transition-all ${lang === 'hr' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setLang('hr')}
              >
                HR
              </button>
              <button 
                className={`px-4 py-2 font-semibold transition-all ${lang === 'en' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-black/10 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden flex flex-col gap-2 mt-4 pb-4 border-t border-gray-200 pt-4">
            <button onClick={() => scrollToSection('top')} className="text-left px-4 py-3 rounded-lg hover:bg-black/10 font-medium transition-colors">{t.home}</button>
            <button onClick={() => scrollToSection('about')} className="text-left px-4 py-3 rounded-lg hover:bg-black/10 font-medium transition-colors">{t.about}</button>
            <button onClick={() => scrollToSection('gallery')} className="text-left px-4 py-3 rounded-lg hover:bg-black/10 font-medium transition-colors">{t.gallery}</button>
            <button onClick={() => scrollToSection('cooperations')} className="text-left px-4 py-3 rounded-lg hover:bg-black/10 font-medium transition-colors">{t.cooperations}</button>
            <button onClick={() => scrollToSection('contact')} className="text-left px-4 py-3 rounded-lg hover:bg-black/10 font-medium transition-colors">{t.contact}</button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
