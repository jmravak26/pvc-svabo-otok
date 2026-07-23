import { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';
import { smoothScrollTo } from '../utils/smoothScroll';

function ScrollToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      onClick={() => smoothScrollTo('top')}
      className="fixed bottom-6 right-6 z-50 p-3 bg-yellow text-black rounded-full shadow-lg hover:scale-110 transition-transform duration-200"
      aria-label="Scroll to top"
    >
      <ChevronUp className="w-5 h-5" />
    </button>
  );
}

export default ScrollToTop;
