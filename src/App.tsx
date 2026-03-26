import { useState, useEffect } from 'react';
import { LanguageProvider } from './application/context/LanguageContext';
import { Navbar } from './presentation/components/Navbar';
import { Hero } from './presentation/components/Hero';
import { Services } from './presentation/components/Services';
import { Itinerary } from './presentation/components/Itinerary';
import { Gallery } from './presentation/components/Gallery';
import { Footer } from './presentation/components/Footer';
import { CTA } from './presentation/components/common';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  return (
    <LanguageProvider>
      <div className="min-h-screen bg-white">
        <Navbar 
          isScrolled={isScrolled} 
          isMobileMenuOpen={isMobileMenuOpen}
          setIsMobileMenuOpen={setIsMobileMenuOpen}
        />
        <main>
          <Hero />
          <Services />
          <Itinerary />
          <Gallery />
          <CTA />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
