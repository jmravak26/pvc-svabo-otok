import { useEffect, useCallback } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxProps {
  images: string[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

function Lightbox({ images, index, onClose, onPrev, onNext }: LightboxProps) {
  const handleKey = useCallback((e: KeyboardEvent) => {
    if (e.key === 'Escape') onClose();
    if (e.key === 'ArrowLeft') onPrev();
    if (e.key === 'ArrowRight') onNext();
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [handleKey]);

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-5 right-5 text-white hover:text-yellow transition-colors z-10"
      >
        <X className="w-8 h-8" />
      </button>

      <button
        onClick={e => { e.stopPropagation(); onPrev(); }}
        className="absolute left-4 text-white hover:text-yellow transition-colors z-10 p-2"
      >
        <ChevronLeft className="w-10 h-10" />
      </button>

      <img
        key={index}
        src={images[index]}
        alt={`Gallery ${index + 1}`}
        className="max-h-[90vh] max-w-[90vw] object-contain rounded-lg animate-fade-in"
        onClick={e => e.stopPropagation()}
      />

      <button
        onClick={e => { e.stopPropagation(); onNext(); }}
        className="absolute right-4 text-white hover:text-yellow transition-colors z-10 p-2"
      >
        <ChevronRight className="w-10 h-10" />
      </button>

      <p className="absolute bottom-5 left-1/2 -translate-x-1/2 text-gray-400 text-sm">
        {index + 1} / {images.length}
      </p>
    </div>
  );
}

export default Lightbox;
