import React, { useState } from 'react';
import { ShoppingBag, Box, Check, Sparkles, Filter, ExternalLink, HelpCircle, Layers, ArrowRight } from 'lucide-react';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import ProductDetailModal from '../components/ProductDetailModal';

export default function Products({ onNavigate }) {
  const [selectedSize, setSelectedSize] = useState('ALL'); // 'ALL', 'XL', 'XXL'
  const [selectedPack, setSelectedPack] = useState('ALL'); // 'ALL', '6', '40'
  const [activeModalProduct, setActiveModalProduct] = useState(null);

  const filteredProducts = products.filter(p => {
    const matchesSize = selectedSize === 'ALL' || p.size === selectedSize;
    const matchesPack = selectedPack === 'ALL' || String(p.quantity) === selectedPack;
    return matchesSize && matchesPack;
  });

  const handleWholesale = (product) => {
    onNavigate('/wholesale-dealership');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
          Official Catalog
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          Choose Your B-Care
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 leading-relaxed max-w-2xl mx-auto">
          Choose your size and pack option. B-Care is available exclusively in two purposeful sizes: <strong>XL</strong> and <strong>XXL</strong>, designed for dependable coverage with 100% pure cotton.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="bg-pink-50/50 rounded-3xl p-6 border border-pink-100 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Size Filters */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Size:
          </span>
          <div className="inline-flex p-1 rounded-2xl bg-white border border-neutral-200">
            <button
              type="button"
              onClick={() => setSelectedSize('ALL')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedSize === 'ALL'
                  ? 'bg-[#E6007E] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Sizes
            </button>
            <button
              type="button"
              onClick={() => setSelectedSize('XL')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedSize === 'XL'
                  ? 'bg-[#E6007E] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              XL
            </button>
            <button
              type="button"
              onClick={() => setSelectedSize('XXL')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedSize === 'XXL'
                  ? 'bg-[#E6007E] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              XXL
            </button>
          </div>
        </div>

        {/* Pack Type Filters */}
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Pack Format:
          </span>
          <div className="inline-flex p-1 rounded-2xl bg-white border border-neutral-200">
            <button
              type="button"
              onClick={() => setSelectedPack('ALL')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedPack === 'ALL'
                  ? 'bg-[#9C1053] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              All Packs
            </button>
            <button
              type="button"
              onClick={() => setSelectedPack('6')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedPack === '6'
                  ? 'bg-[#9C1053] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              6 Pieces
            </button>
            <button
              type="button"
              onClick={() => setSelectedPack('40')}
              className={`px-4 py-1.5 rounded-xl text-xs font-bold uppercase tracking-wider transition-all ${
                selectedPack === '40'
                  ? 'bg-[#9C1053] text-white shadow-xs'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              Jumbo (40 Pieces)
            </button>
          </div>
        </div>

      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {filteredProducts.map((product) => (
          <ProductCard 
            key={product.id}
            product={product}
            onViewDetails={(p) => setActiveModalProduct(p)}
            onWholesaleClick={handleWholesale}
          />
        ))}
      </div>

      {/* Sizing & Pack Selection Guide */}
      <section className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-12 shadow-sm space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
            Fit & Coverage Guide
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-1">
            Understanding Your Size Options
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2">
            B-Care focuses on two high-coverage dimensions suited for all-day peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          
          {/* XL Card */}
          <div className="p-6 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#E6007E] text-white text-xs font-extrabold uppercase">
              Size XL
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-2">Standard Extra-Long Coverage</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Ideal for daily routines, active workdays, and standard flow requirements. Provides reliable side coverage and comfortable pure-cotton cushioning.
            </p>
            <ul className="text-xs text-neutral-700 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#E6007E]" />
                Available in 6-Piece compact pack
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#E6007E]" />
                Available in 40-Piece Jumbo value pack
              </li>
            </ul>
          </div>

          {/* XXL Card */}
          <div className="p-6 rounded-2xl bg-pink-50/50 border border-pink-100 space-y-3">
            <span className="px-3 py-1 rounded-full bg-[#9C1053] text-white text-xs font-extrabold uppercase">
              Size XXL
            </span>
            <h3 className="text-lg font-bold text-neutral-900 mt-2">Maximum Extended Coverage</h3>
            <p className="text-xs text-neutral-600 leading-relaxed">
              Engineered with extended length for heavy flow days and uninterrupted overnight protection. Offers broader back coverage.
            </p>
            <ul className="text-xs text-neutral-700 space-y-1.5 pt-2">
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#9C1053]" />
                Available in 6-Piece compact pack
              </li>
              <li className="flex items-center gap-2">
                <Check className="w-3.5 h-3.5 text-[#9C1053]" />
                Available in 40-Piece Jumbo value pack
              </li>
            </ul>
          </div>

        </div>

        <div className="pt-4 border-t border-gray-100 text-xs text-neutral-500 text-center">
          * Note: B-Care manufactures only XL and XXL sizes. We do not produce Regular, Medium, or XXXL variants.
        </div>
      </section>

      {/* Product Detail Modal */}
      {activeModalProduct && (
        <ProductDetailModal 
          product={activeModalProduct}
          onClose={() => setActiveModalProduct(null)}
          onWholesaleClick={handleWholesale}
        />
      )}

    </div>
  );
}
