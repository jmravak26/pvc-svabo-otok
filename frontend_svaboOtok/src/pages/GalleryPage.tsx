import { useState, useEffect, useMemo } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import Header from '../components/Header';
import Lightbox from '../components/Lightbox';
import { GALLERY_IMAGES } from '../config/images';

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

const IMAGES_PER_PAGE = 50;
const LOAD_INCREMENT = 6;

function GalleryPage({ lang, setLang }: GalleryPageProps) {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const t = translations[lang];

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(GALLERY_IMAGES.length / IMAGES_PER_PAGE);
  const [displayCount, setDisplayCount] = useState(LOAD_INCREMENT);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const randomizedImages = useMemo(() => {
    return [...GALLERY_IMAGES].sort(() => Math.random() - 0.5);
  }, []);

  const startIndex = (currentPage - 1) * IMAGES_PER_PAGE;
  const pageImages = randomizedImages.slice(startIndex, startIndex + IMAGES_PER_PAGE);
  const visibleImages = pageImages.slice(0, displayCount);

  const canLoadMore = displayCount < pageImages.length;
  const isPageFull = displayCount >= IMAGES_PER_PAGE;

  useEffect(() => {
    setDisplayCount(LOAD_INCREMENT);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  return (
    <div className="min-h-screen bg-amber-50" id="top">
      <Header lang={lang} setLang={setLang} />

      {/* Hero bar */}
      <div className="bg-black text-white py-16 px-5">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 px-5 py-2 mb-8 bg-white/10 hover:bg-yellow hover:text-black text-white text-sm font-semibold rounded-full border border-white/20 hover:border-yellow transition-all duration-300"
          >
            ← {t.backHome}
          </button>
          <div className="flex items-center gap-4 mb-3">
            <span className="w-12 h-1 bg-yellow rounded-full" />
            <h1 className="text-5xl font-bold">{t.title}</h1>
            <span className="ml-2 px-3 py-1 bg-yellow text-black text-xs font-bold rounded-full">
              {GALLERY_IMAGES.length}
            </span>
          </div>
          <p className="text-gray-400 text-lg ml-16">{t.subtitle}</p>
          {totalPages > 1 && (
            <p className="text-gray-600 text-sm ml-16 mt-1">{t.page} {currentPage} / {totalPages}</p>
          )}
        </div>
      </div>

      {/* Grid */}
      <section className="py-16 px-5 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {visibleImages.map((img, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="relative overflow-hidden rounded-2xl aspect-4/3 bg-gray-100 cursor-zoom-in group"
            >
              <img
                src={img}
                alt={`Gallery ${startIndex + index + 1}`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>

        {canLoadMore && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setDisplayCount(prev => Math.min(prev + LOAD_INCREMENT, IMAGES_PER_PAGE))}
              className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-yellow hover:text-black transition-all duration-300"
            >
              {t.loadMore} ↓
            </button>
          </div>
        )}

        {isPageFull && totalPages > 1 && (
          <div className="flex justify-center items-center gap-3 mt-12">
            <button
              onClick={() => navigate(`/gallery?page=${currentPage - 1}`)}
              disabled={currentPage === 1}
              className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-yellow hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              ← {t.previous}
            </button>
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => navigate(`/gallery?page=${page}`)}
                  className={`w-10 h-10 rounded-full font-semibold transition-all duration-300 ${
                    page === currentPage
                      ? 'bg-yellow text-black'
                      : 'bg-black text-white hover:bg-yellow hover:text-black'
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>
            <button
              onClick={() => navigate(`/gallery?page=${currentPage + 1}`)}
              disabled={currentPage === totalPages}
              className="px-6 py-3 bg-black text-white font-semibold rounded-full hover:bg-yellow hover:text-black transition-all duration-300 disabled:opacity-30 disabled:cursor-not-allowed"
            >
              {t.next} →
            </button>
          </div>
        )}
      </section>

{lightboxIndex !== null && (
        <Lightbox
          images={pageImages}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => i !== null ? (i - 1 + pageImages.length) % pageImages.length : 0)}
          onNext={() => setLightboxIndex(i => i !== null ? (i + 1) % pageImages.length : 0)}
        />
      )}
    </div>
  );
}

export default GalleryPage;
