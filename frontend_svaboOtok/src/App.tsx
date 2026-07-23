import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

function App() {
  const [lang, setLang] = useState<'hr' | 'en'>(
    () => (localStorage.getItem('lang') as 'hr' | 'en') || 'hr'
  );

  const handleSetLang = (l: 'hr' | 'en') => {
    localStorage.setItem('lang', l);
    setLang(l);
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} setLang={handleSetLang} />} />
        <Route path="/gallery" element={<GalleryPage lang={lang} setLang={handleSetLang} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
