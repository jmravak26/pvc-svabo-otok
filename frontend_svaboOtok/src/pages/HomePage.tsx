import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Gallery from '../components/Gallery';
import Cooperations from '../components/Cooperations';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import ScrollToTop from '../components/ScrollToTop';

interface HomePageProps {
  lang: 'hr' | 'en';
  setLang: (lang: 'hr' | 'en') => void;
}

function HomePage({ lang, setLang }: HomePageProps) {
  return (
    <div className="min-h-screen" id="top">
      <Header lang={lang} setLang={setLang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Gallery lang={lang} />
      <Cooperations lang={lang} />
      <ContactForm lang={lang} />
      <Footer lang={lang} />
      <ScrollToTop />
    </div>
  );
}

export default HomePage;
