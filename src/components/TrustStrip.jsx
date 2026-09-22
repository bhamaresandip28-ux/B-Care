import React from 'react';
import { Feather, Maximize2, PackageCheck, Award, Tag } from 'lucide-react';

export default function TrustStrip() {
  const trustItems = [
    {
      icon: Feather,
      title: "100% Pure Cotton*",
      subtitle: "Soft & gentle top layer"
    },
    {
      icon: Maximize2,
      title: "XL & XXL Sizes",
      subtitle: "Standard & extra coverage"
    },
    {
      icon: PackageCheck,
      title: "6 & 40 Packs",
      subtitle: "Daily & Jumbo economy"
    },
    {
      icon: Award,
      title: "Patented Product*",
      subtitle: "Engineered innovation"
    },
    {
      icon: Tag,
      title: "Affordable Choice*",
      subtitle: "Accessible quality care"
    }
  ];

  return (
    <section className="border-y border-pink-100/80 bg-gradient-to-r from-pink-50/40 via-white to-pink-50/40 py-8" aria-label="Trust & Quality Highlights">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 sm:gap-8">
          {trustItems.map((item, index) => {
            const Icon = item.icon;
            const isLastOnMobile = index === 4;
            return (
              <div 
                key={index} 
                className={`flex flex-col items-center text-center p-3 rounded-2xl transition-all duration-200 hover:bg-white/80 ${
                  isLastOnMobile ? 'col-span-2 md:col-span-1' : ''
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-pink-100/70 text-[#E6007E] flex items-center justify-center mb-3 shadow-xs">
                  <Icon className="w-6 h-6 stroke-[1.75]" />
                </div>
                <h3 className="font-bold text-neutral-900 text-sm sm:text-base tracking-tight">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-500 mt-1 font-medium">
                  {item.subtitle}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
