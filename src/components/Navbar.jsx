import React, { useState, useEffect } from 'react';
import { Menu, X, ShoppingBag, Briefcase, PhoneCall } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Navbar({ currentPath = '/', onNavigate }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (href, e) => {
    e.preventDefault();
    setIsOpen(false);
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <header className={`sticky top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-pink-100' : 'bg-white border-b border-gray-100'
    }`}>
      {/* Skip to content link for accessibility */}
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:px-4 focus:py-2 focus:bg-[#E6007E] focus:text-white focus:rounded-md focus:shadow-lg"
      >
        Skip to main content
      </a>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a 
            href="/" 
            onClick={(e) => handleLinkClick('/', e)}
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6007E] rounded-lg p-1"
            aria-label="B-Care Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#E6007E] to-[#FF4081] flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <span className="text-white font-extrabold text-xl tracking-tight">B</span>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-neutral-900 group-hover:text-[#E6007E] transition-colors">
                B-Care
              </span>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 font-semibold -mt-1">
                Comfort & Care
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7" aria-label="Main Navigation">
            {siteConfig.navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`text-sm font-medium transition-colors py-1 relative ${
                    isActive 
                      ? 'text-[#E6007E] font-semibold' 
                      : 'text-neutral-700 hover:text-[#E6007E]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#E6007E] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="/wholesale-dealership"
              onClick={(e) => handleLinkClick('/wholesale-dealership', e)}
              className="btn-secondary px-4 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6007E]"
            >
              <Briefcase className="w-3.5 h-3.5" />
              Become a Dealer
            </a>
            <a
              href="/products"
              onClick={(e) => handleLinkClick('/products', e)}
              className="btn-primary px-5 py-2 rounded-full text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-sm focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#E6007E]"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              Shop Now
            </a>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href="/products"
              onClick={(e) => handleLinkClick('/products', e)}
              className="btn-primary p-2 rounded-full text-white sm:hidden"
              aria-label="Shop Now"
            >
              <ShoppingBag className="w-4 h-4" />
            </a>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2.5 rounded-xl text-neutral-700 hover:text-[#E6007E] hover:bg-pink-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#E6007E] transition-colors"
              aria-expanded={isOpen}
              aria-controls="mobile-navigation"
              aria-label={isOpen ? "Close main menu" : "Open main menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {isOpen && (
        <div 
          id="mobile-navigation"
          className="lg:hidden fixed inset-x-0 top-20 bg-white border-b border-pink-100 shadow-xl px-4 pt-4 pb-8 space-y-4 animate-in slide-in-from-top-4 duration-200"
          aria-label="Mobile Navigation"
        >
          <div className="flex flex-col space-y-1">
            {siteConfig.navLinks.map((link) => {
              const isActive = currentPath === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleLinkClick(link.href, e)}
                  className={`px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                    isActive 
                      ? 'bg-pink-50 text-[#E6007E] font-bold' 
                      : 'text-neutral-800 hover:bg-neutral-50 hover:text-[#E6007E]'
                  }`}
                  aria-current={isActive ? 'page' : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
            <a
              href="/products"
              onClick={(e) => handleLinkClick('/products', e)}
              className="btn-primary w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <ShoppingBag className="w-4 h-4" />
              Shop B-Care
            </a>
            <a
              href="/wholesale-dealership"
              onClick={(e) => handleLinkClick('/wholesale-dealership', e)}
              className="btn-secondary w-full py-3 rounded-xl text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
            >
              <Briefcase className="w-4 h-4" />
              Become a Dealer / Bulk Order
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
