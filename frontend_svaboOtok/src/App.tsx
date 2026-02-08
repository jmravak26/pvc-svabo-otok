import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import GalleryPage from './pages/GalleryPage';

function App() {
  const [lang, setLang] = useState<'hr' | 'en'>('hr');

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage lang={lang} setLang={setLang} />} />
        <Route path="/gallery" element={<GalleryPage lang={lang} setLang={setLang} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
