import React, { useEffect } from 'react';
import { X, Check, ShoppingBag, Briefcase, ShieldCheck, Box, ExternalLink } from 'lucide-react';

export default function ProductDetailModal({ product, onClose, onWholesaleClick }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!product) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 overflow-y-auto"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-product-title"
    >
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 space-y-6 shadow-2xl animate-in zoom-in-95 duration-150 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between border-b border-gray-100 pb-4">
          <div>
            <span className="px-3 py-1 rounded-full bg-pink-100 text-[#9C1053] text-[11px] font-extrabold uppercase tracking-wide">
              {product.badge}
            </span>
            <h2 id="modal-product-title" className="text-2xl font-black text-neutral-900 mt-2">
              {product.name}
            </h2>
            <p className="text-xs text-neutral-500 mt-0.5">
              Size: <strong className="text-neutral-800">{product.size}</strong> • Pack: <strong className="text-neutral-800">{product.packType} ({product.quantity} Pads)</strong>
            </p>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-2 text-neutral-400 hover:text-neutral-700 rounded-full hover:bg-neutral-100 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Product Visual Presentation */}
        <div className="rounded-2xl bg-gradient-to-b from-pink-50/80 via-white to-pink-50/40 border-2 border-dashed border-pink-200 p-6 flex flex-col items-center justify-center text-center">
          <div className="w-32 h-32 rounded-3xl bg-gradient-to-tr from-[#E6007E] to-[#FF4081] flex flex-col items-center justify-center text-white shadow-lg mb-3">
            <span className="text-xs font-black uppercase tracking-widest text-pink-100">B-Care</span>
            <span className="text-3xl font-black">{product.size}</span>
            <span className="text-[10px] font-extrabold bg-white/20 px-2.5 py-0.5 rounded-full mt-1">
              {product.packType}
            </span>
          </div>
          <span className="text-xs font-bold text-neutral-800">Official Hot-Pink Packaging</span>
          <span className="text-[11px] text-neutral-400 mt-1 max-w-xs">
            Product photograph slot. High-resolution pack photos will be displayed here once supplied.
          </span>
        </div>

        {/* Product Specifications */}
        <div className="grid grid-cols-2 gap-3 p-4 rounded-2xl bg-pink-50/60 border border-pink-100 text-xs">
          <div>
            <span className="text-neutral-500 block font-medium">Top Sheet Material:</span>
            <span className="font-bold text-[#9C1053]">{product.material}</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-medium">Technology:</span>
            <span className="font-bold text-neutral-900">Patented Product*</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-medium">Pack Count:</span>
            <span className="font-bold text-neutral-900">{product.quantity} Pieces</span>
          </div>
          <div>
            <span className="text-neutral-500 block font-medium">Price:</span>
            <span className="font-bold text-neutral-900">{product.pricePlaceholder}</span>
          </div>
        </div>

        {/* Verified Features Checklist */}
        <div className="space-y-3">
          <h3 className="text-xs font-bold uppercase tracking-wider text-neutral-500">
            Verified Product Features
          </h3>
          <ul className="space-y-2 text-xs text-neutral-700">
            {product.features.map((feat, i) => (
              <li key={i} className="flex items-center gap-2">
                <Check className="w-4 h-4 text-[#E6007E] shrink-0" />
                <span>{feat}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Purchase Options */}
        <div className="space-y-3 pt-2">
          <div className="grid grid-cols-2 gap-3">
            <button
              type="button"
              disabled={!product.amazonUrl}
              onClick={() => product.amazonUrl && window.open(product.amazonUrl, '_blank')}
              className={`py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                product.amazonUrl
                  ? 'bg-[#FF9900] hover:bg-[#E88B00] text-neutral-900 shadow-sm'
                  : 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Buy on Amazon
            </button>

            <button
              type="button"
              disabled={!product.meeshoUrl}
              onClick={() => product.meeshoUrl && window.open(product.meeshoUrl, '_blank')}
              className={`py-3 px-4 rounded-xl text-xs font-bold flex items-center justify-center gap-2 transition-all ${
                product.meeshoUrl
                  ? 'bg-[#8E24AA] hover:bg-[#7B1FA2] text-white shadow-sm'
                  : 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              Buy on Meesho
            </button>
          </div>

          <button
            type="button"
            onClick={() => {
              onClose();
              if (onWholesaleClick) onWholesaleClick(product);
            }}
            className="w-full btn-secondary py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
          >
            <Briefcase className="w-4 h-4" />
            Looking for Wholesale / Bulk Quantity? Click Here
          </button>
        </div>

        <div className="text-[10px] text-center text-neutral-400 pt-1">
          * Direct online marketplace links activate upon official Amazon and Meesho product listings.
        </div>
      </div>
    </div>
  );
}
