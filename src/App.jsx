import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import StickyMobileCta from './components/StickyMobileCta';
import Home from './pages/Home';
import Products from './pages/Products';
import WhyBCare from './pages/WhyBCare';
import About from './pages/About';
import WholesaleDealership from './pages/WholesaleDealership';
import Contact from './pages/Contact';
import Legal from './pages/Legal';

export default function App() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname || '/');

  // Synchronize routing with browser history
  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname || '/');
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigate = (path) => {
    if (path === currentPath) return;
    window.history.pushState({}, '', path);
    setCurrentPath(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Render appropriate page view
  const renderView = () => {
    switch (currentPath) {
      case '/products':
        return <Products onNavigate={navigate} />;
      case '/why-b-care':
        return <WhyBCare onNavigate={navigate} />;
      case '/demo':
        return <WhyBCare onNavigate={navigate} />;
      case '/about':
        return <About onNavigate={navigate} />;
      case '/wholesale-dealership':
        return <WholesaleDealership onNavigate={navigate} />;
      case '/contact':
        return <Contact onNavigate={navigate} />;
      case '/privacy-policy':
        return <Legal type="privacy" />;
      case '/terms':
        return <Legal type="terms" />;
      case '/disclaimer':
        return <Legal type="disclaimer" />;
      case '/':
      default:
        return <Home onNavigate={navigate} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white font-sans text-neutral-900 selection:bg-pink-100 selection:text-pink-900">
      <Navbar currentPath={currentPath} onNavigate={navigate} />
      
      <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
        {renderView()}
      </main>

      <Footer onNavigate={navigate} />
      <StickyMobileCta onNavigate={navigate} />
    </div>
  );
}
