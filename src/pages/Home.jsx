import React, { useState } from 'react';
import { ShoppingBag, Play, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, Box, Award, Users, Feather, Layers, HelpCircle } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import products from '../data/products';
import TrustStrip from '../components/TrustStrip';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';
import CustomerJourneys from '../components/CustomerJourneys';

export default function Home({ onNavigate }) {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleWholesaleClick = (product) => {
    onNavigate('/wholesale-dealership');
  };

  return (
    <div className="space-y-16 lg:space-y-24 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-pink-50/70 via-white to-white pt-10 pb-16 lg:pt-20 lg:pb-24">
        {/* Subtle decorative background shapes */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-pink-100/50 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-pink-100/40 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Column: Brand Headline & Value Proposition */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100/90 text-[#9C1053] text-xs font-extrabold uppercase tracking-wider shadow-xs">
                <Sparkles className="w-3.5 h-3.5 text-[#E6007E]" />
                100% Pure Cotton* • Patented Technology*
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-neutral-900 tracking-tight leading-[1.1]">
                Comfort. Care. Confidence. <span className="text-[#E6007E]">Every Day.</span>
              </h1>

              <p className="text-base sm:text-lg lg:text-xl text-neutral-600 max-w-2xl leading-relaxed mx-auto lg:mx-0 font-normal">
                Discover B-Care sanitary pads designed with comfort, coverage and affordability in mind. Made with 100% pure cotton for gentle, everyday protection.
              </p>

              {/* Action CTAs */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
                <button
                  type="button"
                  onClick={() => onNavigate('/products')}
                  className="w-full sm:w-auto btn-primary px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                  <ShoppingBag className="w-4 h-4" />
                  Shop B-Care
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/demo')}
                  className="w-full sm:w-auto btn-secondary px-8 py-4 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  <Play className="w-4 h-4 text-[#E6007E]" />
                  Watch Absorption Demo
                </button>
              </div>

              {/* Verified Trust Badges Strip */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs font-semibold text-neutral-600">
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E6007E]" />
                  100% Pure Cotton* Top Layer
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E6007E]" />
                  Patented Design*
                </span>
                <span className="flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-[#E6007E]" />
                  XL & XXL Sizing
                </span>
              </div>
            </div>

            {/* Right Column: Authentic Hot-Pink Packaging Showcase */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-full max-w-md bg-gradient-to-tr from-pink-100/90 via-white to-pink-50 rounded-3xl p-8 border border-pink-200/90 text-center shadow-lg">
                <div className="absolute -top-3.5 right-6 bg-[#E6007E] text-white text-[11px] font-black uppercase px-3.5 py-1 rounded-full shadow-sm tracking-wider">
                  Signature Packaging
                </div>

                <div className="h-64 sm:h-72 rounded-2xl bg-gradient-to-b from-white to-pink-50/60 border-2 border-dashed border-pink-300 flex flex-col items-center justify-center p-6 text-neutral-600">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-tr from-[#E6007E] to-[#FF4081] flex flex-col items-center justify-center text-white shadow-md mb-3">
                    <span className="text-[10px] font-black tracking-widest text-pink-100">B-CARE</span>
                    <span className="text-2xl font-black">XL / XXL</span>
                    <span className="text-[9px] font-bold bg-white/20 px-2 py-0.5 rounded-full mt-1">HOT PINK</span>
                  </div>
                  <p className="font-bold text-neutral-900 text-sm">B-Care Hot-Pink Packaging</p>
                  <p className="text-xs text-neutral-400 mt-1 max-w-[220px]">
                    Official product packaging photo slot. Only genuine verified photographs are displayed.
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-pink-100 flex items-center justify-between text-xs text-neutral-600 font-semibold px-2">
                  <span>Variants: <strong>XL & XXL</strong></span>
                  <span>Packs: <strong>6 & 40 Pieces</strong></span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. TRUST STRIP */}
      <TrustStrip />

      {/* 3. PRODUCT CATALOG SHOWCASE ("Choose Your B-Care") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
            Our Products
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mt-2">
            Choose Your B-Care
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Choose your size and pack option. B-Care offers exactly two sizes (<strong>XL</strong> and <strong>XXL</strong>) in standard <strong>6-piece</strong> packs and value <strong>40-piece Jumbo</strong> packs.
          </p>
        </div>

        {/* 4 Variant Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              product={product}
              onViewDetails={(p) => setSelectedProduct(p)}
              onWholesaleClick={handleWholesaleClick}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <button
            type="button"
            onClick={() => onNavigate('/products')}
            className="btn-secondary px-8 py-3 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
          >
            Explore Complete Catalog & Sizing Guide
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. WHY CHOOSE B-CARE (6 Core Feature Cards) */}
      <section className="bg-pink-50/40 py-16 border-y border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
              The B-Care Difference
            </span>
            <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mt-2">
              Why Choose B-Care?
            </h2>
            <p className="text-sm sm:text-base text-neutral-600 mt-2">
              Engineered with proven features you can rely on every single day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {siteConfig.verifiedClaims.map((claim) => (
              <div 
                key={claim.id}
                className="bg-white rounded-3xl border border-pink-100 p-8 shadow-xs hover:shadow-md hover:border-pink-300 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-pink-100/80 text-[#E6007E] flex items-center justify-center mb-5 shadow-xs">
                    <CheckCircle2 className="w-6 h-6 stroke-[2]" />
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 tracking-tight">{claim.title}</h3>
                  <p className="text-xs sm:text-sm text-neutral-600 mt-2.5 leading-relaxed">
                    {claim.description}
                  </p>
                </div>
                <div className="pt-6 mt-6 border-t border-gray-100">
                  <span className="text-[10px] font-bold text-[#9C1053] uppercase tracking-wider bg-pink-50 px-2.5 py-1 rounded-full">
                    Verified Specification
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. ABSORPTION DEMO TEASER */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-4">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4081]">
                Demonstration
              </span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
                See the Absorption for Yourself
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-xl">
                Watch our product demonstration and see the absorption test for yourself. Observe the pure cotton top sheet and core fluid retention in action.
              </p>
              
              <div className="pt-4 flex flex-wrap gap-4">
                <button
                  type="button"
                  onClick={() => onNavigate('/demo')}
                  className="btn-primary px-8 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2"
                >
                  <Play className="w-4 h-4" />
                  Watch Absorption Demo
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('/about')}
                  className="px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider inline-flex items-center gap-2 bg-neutral-800 text-neutral-300 hover:bg-neutral-700 transition-colors"
                >
                  Learn About Patented Technology*
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center">
              <div 
                onClick={() => onNavigate('/demo')}
                className="w-full max-w-md aspect-video rounded-2xl bg-neutral-800 border border-neutral-700/80 flex flex-col items-center justify-center p-6 text-center cursor-pointer hover:border-[#E6007E] transition-all group"
              >
                <div className="w-16 h-16 rounded-full bg-[#E6007E] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform mb-3">
                  <Play className="w-6 h-6 ml-0.5 fill-white" />
                </div>
                <span className="text-sm font-bold text-white">Watch Absorption Video</span>
                <span className="text-xs text-neutral-400 mt-1">[ABSORPTION DEMO VIDEO READY]</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 6. CUSTOMER JOURNEYS (Personal, Wholesale, Dealer) */}
      <CustomerJourneys onNavigate={onNavigate} />

      {/* 7. HOMEPAGE BUSINESS CTA ("Partner With B-Care") */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-tr from-pink-100/70 via-white to-pink-50 rounded-3xl p-8 sm:p-12 border border-pink-200/90 shadow-sm">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#9C1053]">
              B2B & Expansion
            </span>
            <h2 className="text-3xl font-black text-neutral-900 mt-1">
              Partner With B-Care
            </h2>
            <p className="text-sm text-neutral-600 mt-2 leading-relaxed">
              We provide tailored avenues for bulk wholesale purchasing as well as new city dealership expansion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Buy in Bulk */}
            <div className="bg-white rounded-3xl p-8 border border-pink-100 shadow-xs flex flex-col justify-between hover:border-pink-300 transition-all">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-pink-100 text-[#E6007E] flex items-center justify-center mb-4">
                  <ShoppingBag className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-neutral-900">Buy in Bulk</h3>
                <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
                  For wholesale and bulk orders. Medical stores, retail shops, pharmacies, institutions, and supermarkets can contact our dealer directly.
                </p>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onNavigate('/wholesale-dealership')}
                  className="w-full btn-primary py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
                >
                  Contact Dealer for Wholesale
                </button>
              </div>
            </div>

            {/* Card 2: Become a Dealer */}
            <div className="bg-neutral-900 text-white rounded-3xl p-8 shadow-xs flex flex-col justify-between">
              <div>
                <div className="w-12 h-12 rounded-2xl bg-neutral-800 text-[#FF4081] flex items-center justify-center mb-4">
                  <Users className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Become a Dealer</h3>
                <p className="text-xs sm:text-sm text-neutral-400 mt-2 leading-relaxed">
                  Interested in selling B-Care in your city? Submit your dealership application for business review and territorial discussion.
                </p>
              </div>

              <div className="pt-8">
                <button
                  type="button"
                  onClick={() => onNavigate('/wholesale-dealership')}
                  className="w-full btn-secondary py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 bg-neutral-900 border-pink-400 text-pink-400 hover:bg-neutral-800"
                >
                  Become a Dealer
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Product Detail Modal */}
      {selectedProduct && (
        <ProductDetailModal 
          product={selectedProduct} 
          onClose={() => setSelectedProduct(null)} 
          onWholesaleClick={handleWholesaleClick}
        />
      )}

    </div>
  );
}
