import { useNavigate } from 'react-router-dom';
import { GALLERY_IMAGES } from '../config/images';

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

  return (
    <section id="gallery" className="py-20 px-5 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-5">{t.title}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
        {images.map((img, index) => (
          <div key={index} className="relative overflow-hidden rounded-lg aspect-4/3 bg-gray-100 cursor-pointer group">
            <img src={img} alt={`Gallery ${index + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10">
        <button 
          onClick={() => navigate('/gallery')}
          className="px-8 py-3 bg-yellow text-black font-semibold rounded-lg hover:bg-yellow/80 transition-colors"
        >
          {t.viewAll}
        </button>
      </div>
    </section>
  );
}

export default Gallery;
