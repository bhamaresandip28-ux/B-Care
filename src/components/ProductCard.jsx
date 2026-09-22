import React from 'react';
import { ShoppingBag, Box, Check, Sparkles, ArrowRight, ExternalLink } from 'lucide-react';

export default function ProductCard({ product, onViewDetails, onWholesaleClick }) {
  const { name, size, packType, quantity, badge, isJumbo, pricePlaceholder, amazonUrl, meeshoUrl, features, description } = product;

  return (
    <article className="bg-white rounded-3xl border border-pink-100/90 hover:border-pink-300 p-6 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-300 group">
      <div>
        {/* Badges Header */}
        <div className="flex items-center justify-between gap-2">
          <span className={`px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wide ${
            isJumbo 
              ? 'bg-gradient-to-r from-[#E6007E] to-[#FF4081] text-white shadow-xs' 
              : 'bg-pink-100 text-[#9C1053]'
          }`}>
            {badge}
          </span>
          <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider bg-neutral-100 px-2.5 py-0.5 rounded-full">
            {size} • {quantity} Pads
          </span>
        </div>

        {/* Product Visual Area */}
        <div 
          onClick={() => onViewDetails(product)}
          className="cursor-pointer relative mt-4 mb-5 rounded-2xl bg-gradient-to-b from-pink-50/70 via-white to-pink-50/40 border-2 border-dashed border-pink-200/90 h-52 flex flex-col items-center justify-center p-4 text-center group-hover:border-[#E6007E] group-hover:bg-pink-50/40 transition-all"
        >
          {/* Packaging Silhouette */}
          <div className="relative w-28 h-28 rounded-2xl bg-gradient-to-tr from-[#E6007E] to-[#FF4081] flex flex-col items-center justify-center text-white shadow-md group-hover:scale-105 transition-transform duration-200">
            <span className="text-[10px] font-black uppercase tracking-widest text-pink-100">B-Care</span>
            <span className="text-xl font-black">{size}</span>
            <span className="text-[9px] font-extrabold bg-white/20 px-2 py-0.5 rounded-full mt-1">
              {packType}
            </span>
          </div>

          <div className="mt-3">
            <span className="text-xs font-bold text-neutral-800 block">{name}</span>
            <span className="text-[10px] text-[#E6007E] font-semibold block mt-0.5">
              Click to view details & specifications →
            </span>
          </div>
        </div>

        {/* Title & Description */}
        <h3 className="text-lg font-bold text-neutral-900 tracking-tight">{name}</h3>
        <p className="text-xs text-neutral-600 mt-1 line-clamp-2 leading-relaxed">
          {description}
        </p>

        {/* Feature Highlights */}
        <ul className="mt-4 space-y-1.5 text-xs text-neutral-600">
          {features.slice(0, 3).map((feat, idx) => (
            <li key={idx} className="flex items-start gap-1.5">
              <Check className="w-3.5 h-3.5 text-[#E6007E] shrink-0 mt-0.5" />
              <span>{feat}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Pricing and Action Buttons */}
      <div className="mt-6 pt-5 border-t border-gray-100 space-y-3">
        {/* Price Row */}
        <div className="flex items-center justify-between text-xs">
          <span className="text-neutral-500 font-medium">Price:</span>
          <span className="font-bold text-neutral-800 bg-neutral-100 px-2.5 py-1 rounded-lg">
            {pricePlaceholder}
          </span>
        </div>

        {/* Primary Purchase Triggers: Amazon & Meesho */}
        <div className="grid grid-cols-2 gap-2">
          <button
            type="button"
            disabled={!amazonUrl}
            onClick={() => amazonUrl && window.open(amazonUrl, '_blank')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              amazonUrl
                ? 'bg-[#FF9900] hover:bg-[#E88B00] text-neutral-900 shadow-xs active:scale-98'
                : 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200'
            }`}
            title={amazonUrl ? "Buy on Amazon" : "Direct Amazon listing link will be active once published"}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Amazon
          </button>

          <button
            type="button"
            disabled={!meeshoUrl}
            onClick={() => meeshoUrl && window.open(meeshoUrl, '_blank')}
            className={`py-2.5 px-3 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 transition-all ${
              meeshoUrl
                ? 'bg-[#8E24AA] hover:bg-[#7B1FA2] text-white shadow-xs active:scale-98'
                : 'bg-neutral-100 text-neutral-400 cursor-not-allowed border border-neutral-200'
            }`}
            title={meeshoUrl ? "Buy on Meesho" : "Direct Meesho listing link will be active once published"}
          >
            <ShoppingBag className="w-3.5 h-3.5" />
            Meesho
          </button>
        </div>

        {/* View Details / Wholesale Link */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={() => onViewDetails(product)}
            className="text-[11px] font-bold text-[#E6007E] hover:text-[#9C1053] flex items-center gap-1"
          >
            Full Specs
            <ArrowRight className="w-3 h-3" />
          </button>

          <button
            type="button"
            onClick={() => onWholesaleClick ? onWholesaleClick(product) : null}
            className="text-[11px] font-bold text-neutral-600 hover:text-neutral-900 underline"
          >
            Bulk Inquiry
          </button>
        </div>
      </div>
    </article>
  );
}
