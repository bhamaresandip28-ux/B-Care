import React from 'react';
import { ShoppingBag, Briefcase } from 'lucide-react';

export default function StickyMobileCta({ onNavigate }) {
  return (
    <div className="lg:hidden fixed bottom-0 inset-x-0 z-40 bg-white/95 backdrop-blur-md border-t border-pink-100 px-4 py-2.5 shadow-lg flex items-center gap-2">
      <button
        type="button"
        onClick={() => onNavigate('/products')}
        className="flex-1 btn-primary py-2.5 px-4 rounded-xl text-xs font-extrabold uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-sm active:scale-98 transition-transform"
      >
        <ShoppingBag className="w-3.5 h-3.5" />
        Shop B-Care
      </button>

      <button
        type="button"
        onClick={() => onNavigate('/wholesale-dealership')}
        className="btn-secondary py-2.5 px-3 rounded-xl text-[11px] font-bold uppercase tracking-wider flex items-center justify-center gap-1 active:scale-98 transition-transform"
        aria-label="Dealer & Wholesale"
      >
        <Briefcase className="w-3.5 h-3.5" />
        Dealership
      </button>
    </div>
  );
}
