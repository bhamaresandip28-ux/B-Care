import React from 'react';
import { Award, UserCheck, ShieldCheck, FileText } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function About({ onNavigate }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 lg:space-y-20">
      
      {/* Page Header */}
      <div className="text-center max-w-2xl mx-auto">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
          Brand & Leadership
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-neutral-900 mt-2">
          About B-Care
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 mt-2">
          Built on a dedication to provide comfortable, pure cotton feminine hygiene at affordable prices.
        </p>
      </div>

      {/* Owner Spotlight */}
      <div className="bg-gradient-to-tr from-pink-50/70 via-white to-white rounded-3xl border border-pink-100 p-8 sm:p-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          
          <div className="md:col-span-4 flex justify-center">
            <div className="w-56 h-64 rounded-2xl bg-pink-100/60 border-2 border-dashed border-pink-200 flex flex-col items-center justify-center p-4 text-center">
              <UserCheck className="w-12 h-12 text-[#E6007E] mb-2" />
              <span className="text-xs font-bold text-neutral-800">{siteConfig.ownerName}</span>
              <span className="text-[11px] text-neutral-500 mt-1">{siteConfig.ownerRole}</span>
              <span className="text-[10px] text-neutral-400 mt-2">[Official Photo Slot]</span>
            </div>
          </div>

          <div className="md:col-span-8 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-100 text-[#9C1053] text-xs font-bold uppercase tracking-wide">
              Founder & Leadership
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-neutral-900">
              {siteConfig.ownerName}
            </h2>
            <p className="text-sm font-semibold text-[#E6007E]">
              {siteConfig.ownerRole}
            </p>
            
            <div className="p-6 rounded-2xl bg-white border border-gray-100 text-sm text-neutral-600 space-y-3 leading-relaxed">
              <p>
                B-Care was founded by Poonam Sandip Bhamre with a focused mission: to make pure cotton, patented sanitary pads accessible to women without exaggerated markups or compromises in daily comfort.
              </p>
              <div className="text-xs text-neutral-400 italic border-t border-gray-100 pt-3">
                [B-CARE BRAND STORY TO BE EXPANDED ONCE PROVIDED BY OWNER]
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Innovation & Patent Section */}
      <div className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm space-y-8">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
            Verified Innovation
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-1">
            Innovation & Quality
          </h2>
          <p className="text-sm text-neutral-600 mt-2">
            B-Care is engineered using patented technology focused on pure cotton comfort, fluid absorption, and day-long peace of mind.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-pink-100 text-[#E6007E]">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-neutral-900 text-base">Patented Technology*</h3>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              B-Care incorporates a patented design architecture tailored to enhance cotton softness and reliable absorption.
            </p>
            <div className="pt-2 text-xs font-mono text-neutral-500">
              Status: <span className="font-bold text-neutral-800">Patented Product*</span>
            </div>
            <div className="text-xs font-mono text-neutral-400">
              Patent Number: <span>[PATENT NUMBER TO BE PROVIDED]</span>
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-neutral-50 border border-neutral-200/80 space-y-3">
            <div className="flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-pink-100 text-[#E6007E]">
                <Award className="w-5 h-5" />
              </div>
              <h3 className="font-bold text-neutral-900 text-base">Verified Specifications</h3>
            </div>
            <p className="text-xs text-neutral-600 leading-relaxed">
              We stand strictly behind verified facts. No unsubstantiated medical claims, laboratory exaggerations, or artificial ratings are featured.
            </p>
            <div className="pt-2 text-xs text-neutral-500">
              Pure Cotton: <span className="font-bold text-neutral-800">100% Cotton Top Sheet*</span>
            </div>
            <div className="text-xs text-neutral-500">
              Sizes: <span className="font-bold text-neutral-800">XL & XXL Only</span>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}
