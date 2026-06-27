import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GALLERY_IMAGES } from '../config/images';
import Lightbox from './Lightbox';

interface GalleryProps {
  lang: 'hr' | 'en';
}

const translations = {
  hr: { title: 'Galerija', viewAll: 'Pogledaj sve' },
  en: { title: 'Gallery', viewAll: 'View All' }
};

function Gallery({ lang }: GalleryProps) {
  const navigate = useNavigate();
  const t = translations[lang];
  const images = GALLERY_IMAGES.slice(0, 6);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="px-5 max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-12">
          <span className="w-12 h-1 bg-yellow rounded-full" />
          <h2 className="text-4xl font-bold">{t.title}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, index) => (
            <div
              key={index}
              onClick={() => setLightboxIndex(index)}
              className="relative overflow-hidden rounded-2xl aspect-4/3 bg-gray-100 cursor-zoom-in group"
            >
              <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
            </div>
          ))}
        </div>
        <div className="flex justify-start mt-10">
          <button
            onClick={() => navigate('/gallery')}
            className="px-8 py-3 bg-black text-white font-semibold rounded-full hover:bg-yellow hover:text-black transition-all duration-300"
          >
            {t.viewAll} →
          </button>
        </div>
      </div>

      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          index={lightboxIndex}
          onClose={() => setLightboxIndex(null)}
          onPrev={() => setLightboxIndex(i => i !== null ? (i - 1 + images.length) % images.length : 0)}
          onNext={() => setLightboxIndex(i => i !== null ? (i + 1) % images.length : 0)}
        />
      )}
    </section>
  );
}

export default Gallery;
