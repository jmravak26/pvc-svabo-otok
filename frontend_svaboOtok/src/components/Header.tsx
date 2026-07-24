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
    cooperations: 'Suradnje & Certifikati',
    contact: 'Kontakt'
  },
  en: {
    home: 'Home',
    about: 'About Us',
    gallery: 'Gallery',
    cooperations: 'Cooperations & Certificates',
    contact: 'Contact'
  }
};

function Header({ lang, setLang }: HeaderProps) {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('top');
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

  useEffect(() => {
    const sections = ['contact', 'credentials', 'cooperations', 'gallery', 'about', 'top'];
    const handleActiveSpy = () => {
      const scrolledToBottom = window.innerHeight + window.scrollY >= document.body.scrollHeight - 50;
      if (scrolledToBottom) {
        setActiveSection('contact');
        return;
      }
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 100) {
          setActiveSection(id);
          return;
        }
      }
      setActiveSection('top');
    };
    window.addEventListener('scroll', handleActiveSpy, { passive: true });
    return () => window.removeEventListener('scroll', handleActiveSpy);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setIsMenuOpen(false);
    if (isGalleryPage) {
      navigate('/');
      setTimeout(() => smoothScrollTo(sectionId), 100);
    } else {
      // Wait for mobile menu to close and header to collapse before measuring
      setTimeout(() => {
        setIsScrolling(true);
        smoothScrollTo(sectionId);
        setTimeout(() => {
          setIsScrolling(false);
          const scrollY = window.scrollY;
          setScrollProgress(Math.min(scrollY / 300, 1));
        }, 1200);
      }, 50);
    }
  };

  const navBtnClass = (id: string) => {
    const isActive = id === 'cooperations' ? activeSection === 'cooperations' || activeSection === 'credentials' : activeSection === id;
    return `font-medium transition-colors ${
      isActive
        ? scrollProgress > 0.5 ? 'text-white underline underline-offset-4' : 'text-yellow underline underline-offset-4'
        : scrollProgress > 0.5 ? 'hover:text-white' : 'hover:text-yellow'
    }`;
  };

  return (
    <header
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        background: scrollProgress > 0 ? `rgba(255, 193, 7, ${scrollProgress})` : 'rgba(255, 255, 255, 0.95)',
        boxShadow: scrollProgress > 0.1 ? '0 10px 15px -3px rgba(0,0,0,0.1)' : '0 1px 3px 0 rgba(0,0,0,0.1)'
      }}
    >
      <div className="max-w-7xl mx-auto px-5 py-4">
        {/* Main row */}
        <div className="flex items-center justify-between gap-4">

          {/* Logo */}
          <button onClick={() => scrollToSection('top')} className="flex items-center gap-3 text-2xl font-bold hover:opacity-80 transition-opacity shrink-0">
            <img src="/images/logoImages/mainLogo.png" alt="Švabo-Otok Logo" className="h-10 md:h-12 rounded-full" />
            <span className="hidden sm:inline">Švabo-Otok</span>
          </button>

          {/* Desktop Navigation — centered */}
          <nav className="hidden md:flex items-center gap-6 lg:gap-8 mx-auto">
            <button onClick={() => scrollToSection('top')} className={navBtnClass('top')}>{t.home}</button>
            <button onClick={() => scrollToSection('about')} className={navBtnClass('about')}>{t.about}</button>
            <button onClick={() => scrollToSection('gallery')} className={navBtnClass('gallery')}>{t.gallery}</button>
            <button onClick={() => scrollToSection('cooperations')} className={navBtnClass('cooperations')}>{t.cooperations}</button>
            <button onClick={() => scrollToSection('contact')} className={navBtnClass('contact')}>{t.contact}</button>
          </nav>

          {/* Right side: language toggle + mobile hamburger */}
          <div className="flex items-center gap-3 shrink-0">
            <div className="flex border-2 border-black rounded overflow-hidden">
              <button
                className={`px-3 py-1.5 text-sm font-semibold transition-all ${lang === 'hr' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setLang('hr')}
              >
                HR
              </button>
              <button
                className={`px-3 py-1.5 text-sm font-semibold transition-all ${lang === 'en' ? 'bg-black text-white' : 'hover:bg-gray-100'}`}
                onClick={() => setLang('en')}
              >
                EN
              </button>
            </div>
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
          <nav className="md:hidden flex flex-col gap-1 mt-3 pt-3 border-t border-gray-200">
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
