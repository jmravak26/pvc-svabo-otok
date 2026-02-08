import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';

interface GalleryPageProps {
  lang: 'hr' | 'en';
  setLang: (lang: 'hr' | 'en') => void;
}

const translations = {
  hr: {
    title: 'Galerija',
    subtitle: 'Pogledajte naše radove',
    page: 'Stranica',
    backHome: 'Natrag na početnu',
    loadMore: 'Učitaj više',
    previous: 'Prethodna',
    next: 'Sljedeća'
  },
  en: {
    title: 'Gallery',
    subtitle: 'View our work',
    page: 'Page',
    backHome: 'Back to Home',
    loadMore: 'Load More',
    previous: 'Previous',
    next: 'Next'
  }
};

const ALL_IMAGES = Array.from({ length: 150 }, (_, i) => `/images/galleryImages/gallery-${i + 1}.jpg`);
const IMAGES_PER_PAGE = 50;
const LOAD_INCREMENT = 6;

function GalleryPage({ lang, setLang }: GalleryPageProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const t = translations[lang];
  
  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(ALL_IMAGES.length / IMAGES_PER_PAGE);
  const [displayCount, setDisplayCount] = useState(LOAD_INCREMENT);

  const randomizedImages = useMemo(() => {
    return [...ALL_IMAGES].sort(() => Math.random() - 0.5);
  }, []);

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const endIndex = startIndex + IMAGES_PER_PAGE;
  const pageImages = randomizedImages.slice(startIndex, endIndex);
  const visibleImages = pageImages.slice(0, displayCount);
  
  const canLoadMore = displayCount < pageImages.length;
  const isPageFull = displayCount >= IMAGES_PER_PAGE;

  useEffect(() => {
    setDisplayCount(LOAD_INCREMENT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  const handleLoadMore = () => {
    setDisplayCount(prev => Math.min(prev + LOAD_INCREMENT, IMAGES_PER_PAGE));
  };

  const goToPage = (page: number) => {
    navigate(`/gallery?page=${page}`);
  };

  return (
    <div className="min-h-screen" id="top">
      <Header lang={lang} setLang={setLang} />
      
      <section className="py-20 px-5 max-w-7xl mx-auto">
        <div className="mb-8">
          <button 
            onClick={() => navigate('/')}
            className="text-gray-600 hover:text-yellow transition-colors mb-4 flex items-center gap-2"
          >
            ← {t.backHome}
          </button>
          <h1 className="text-5xl font-bold text-center mb-3">{t.title}</h1>
          <p className="text-center text-gray-600 text-lg">{t.subtitle}</p>
          <p className="text-center text-gray-500 mt-2">{t.page} {currentPage} / {totalPages}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {visibleImages.map((img, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg aspect-4/3 bg-gray-100 cursor-pointer group"
            >
              <img 
                src={img} 
                alt={`Gallery ${startIndex + index + 1}`} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" 
              />
            </div>
          ))}
        </div>

        {canLoadMore && (
          <div className="flex justify-center mt-10">
            <button 
              onClick={handleLoadMore}
              className="px-8 py-3 bg-yellow text-black font-semibold rounded-lg hover:bg-yellow/80 transition-colors"
            >
              ↓ {t.loadMore} ↓
            </button>
          </div>
        )}

        {isPageFull && (
          <div className="flex justify-center items-center gap-4 mt-10">
            <button 
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className="px-6 py-3 bg-yellow text-black font-semibold rounded-lg hover:bg-yellow/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              ← {t.previous}
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => goToPage(page)}
                  className={`w-10 h-10 rounded-lg font-semibold transition-colors ${
                    page === currentPage 
                      ? 'bg-yellow text-black' 
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button 
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className="px-6 py-3 bg-yellow text-black font-semibold rounded-lg hover:bg-yellow/80 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {t.next} →
            </button>
          </div>
        )}
      </section>

      <Footer lang={lang} />
    </div>
  );
}

export default GalleryPage;
