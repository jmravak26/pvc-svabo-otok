import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { HERO_IMAGES } from '../config/images';

interface HeroProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: {
    title: 'PVC Stolarija Švabo Otok',
    slides: [
      { title: 'Kvalitetna PVC Stolarija', subtitle: 'Vaš partner za prozore i vrata' },
      { title: 'Moderna Rješenja', subtitle: 'Energetska učinkovitost i dizajn' },
      { title: 'Profesionalna Ugradnja', subtitle: 'Iskustvo i pouzdanost' },
      { title: 'Dugotrajnost i Sigurnost', subtitle: 'Otpornost na vremenske uvjete' },
      { title: 'Individualna Rješenja', subtitle: 'Prilagodba vašim potrebama' }
    ]
  },
  en: {
    title: 'PVC Joinery Švabo Otok',
    slides: [
      { title: 'Quality PVC Joinery', subtitle: 'Your partner for windows and doors' },
      { title: 'Modern Solutions', subtitle: 'Energy efficiency and design' },
      { title: 'Professional Installation', subtitle: 'Experience and reliability' },
      { title: 'Durability and Security', subtitle: 'Weather resistant solutions' },
      { title: 'Custom Solutions', subtitle: 'Tailored to your needs' }
    ]
  }
};

function Hero({ lang }: HeroProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const t = translations[lang];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % t.slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [t.slides.length]);

  const goToPrevious = () => {
    setCurrentSlide((prev) => (prev - 1 + t.slides.length) % t.slides.length);
  };

  const goToNext = () => {
    setCurrentSlide((prev) => (prev + 1) % t.slides.length);
  };

  return (
    <section className="relative h-150 max-md:h-96 overflow-hidden">
      {t.slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-gray-500 bg-cover bg-center transition-opacity duration-1000 ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ backgroundImage: `url(${HERO_IMAGES[index]})` }}
        >
          <div className="absolute inset-0 bg-linear-to-br from-black/70 to-black/30 flex flex-col justify-center items-center text-white text-center px-5">
            <h1 className="text-5xl max-md:text-3xl font-bold mb-3 text-yellow drop-shadow-lg">{t.title}</h1>
            <h2 className="text-3xl max-md:text-2xl font-bold mb-3 drop-shadow-lg">{slide.title}</h2>
            <p className="text-xl max-md:text-base drop-shadow-md">{slide.subtitle}</p>
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

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {t.slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full transition-all ${
              index === currentSlide ? 'bg-yellow scale-110' : 'bg-white/50 hover:bg-white/80'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}

export default Hero;
