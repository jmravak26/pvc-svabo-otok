import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_IMAGES } from '../config/images';

interface HeroProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: {
    title: 'PVC & ALU Stolarija Švabo-Otok',
    slides: [
      { title: 'PVC Prozori i Vrata', subtitle: 'Izvrsna toplinska i zvučna izolacija po mjeri' },
      { title: 'ALU Stolarija', subtitle: 'Moderan dizajn i vrhunska čvrstina' },
      { title: 'Rolete i Komarnici', subtitle: 'Dodatna zaštita i funkcionalnost' },
      { title: 'Profesionalna Montaža', subtitle: 'Od savjetovanja do ugradnje' },
      { title: 'Rješenja po Mjeri', subtitle: 'Novogradnja i renovacija' }
    ]
  },
  en: {
    title: 'PVC & ALU Joinery Švabo-Otok',
    slides: [
      { title: 'PVC Windows & Doors', subtitle: 'Excellent thermal and acoustic insulation' },
      { title: 'ALU Joinery', subtitle: 'Modern design and superior strength' },
      { title: 'Shutters & Screens', subtitle: 'Extra protection and functionality' },
      { title: 'Professional Installation', subtitle: 'From consultation to installation' },
      { title: 'Custom Solutions', subtitle: 'New builds and renovations' }
    ]
  }
};

function Hero({ lang }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [resetKey, setResetKey] = useState(0);
  const t = translations[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t.slides.length);
    }, 9000);
    return () => clearInterval(timer);
  }, [t.slides.length, resetKey]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + t.slides.length) % t.slides.length);
    setResetKey((k) => k + 1);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % t.slides.length);
    setResetKey((k) => k + 1);
  };

  return (
    <section className="relative w-full aspect-video max-md:aspect-4/3 overflow-hidden">
      {t.slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={HERO_IMAGES[index]}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 md:via-black/10 to-transparent flex flex-col justify-end items-center md:items-start px-8 md:px-14 pb-16 md:pb-12 text-white text-center md:text-left">
            <p className="text-yellow font-semibold text-sm md:text-base uppercase tracking-widest mb-2 drop-shadow">{t.title}</p>
            <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg leading-tight">{slide.title}</h2>
            <p className="text-base md:text-lg text-white/80 mt-2 drop-shadow">{slide.subtitle}</p>
          </div>
        </div>
      ))}
      
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-black/30 hover:bg-black/50 text-white transition-all"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      <div className="absolute bottom-5 right-6 flex gap-3 z-10">
        {t.slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-yellow scale-110' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => { setCurrentSlide(index); setResetKey((k) => k + 1); }}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
