import React, { useState } from 'react';
import { Play, Sparkles, CheckCircle2, ShieldCheck, Heart, Layers, Video, ArrowRight, ShieldAlert, Award } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function WhyBCare({ onNavigate }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 lg:space-y-24">
      
      {/* 1. Page Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
          Product Quality & Testing
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          Why Choose B-Care?
        </h1>
        <p className="text-base sm:text-lg text-neutral-600 leading-relaxed">
          Crafted with 100% pure cotton, patented product engineering, and dependable absorption designed for real comfort every single day.
        </p>
      </div>

      {/* 2. 6 Verified Core Feature Cards */}
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
                Verified Product Feature
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* 3. ABSORPTION DEMONSTRATION SECTION */}
      <section id="demo" className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 scroll-mt-24 shadow-xl">
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-10">
          <span className="text-xs font-bold uppercase tracking-widest text-[#FF4081]">
            Visual Performance Proof
          </span>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight">
            See the Absorption for Yourself
          </h2>
          <p className="text-sm sm:text-base text-neutral-300">
            Watch our product demonstration and see the absorption test for yourself.
          </p>
        </div>

        {/* Video Player Box / Interactive Placeholder */}
        <div className="max-w-4xl mx-auto aspect-video rounded-3xl bg-neutral-800 border border-neutral-700/80 overflow-hidden relative flex flex-col items-center justify-center p-6 text-center shadow-2xl">
          {siteConfig.demoVideoUrl && isPlaying ? (
            <video 
              controls 
              autoPlay
              className="w-full h-full object-cover"
              poster="/assets/demo/poster.jpg"
            >
              <source src={siteConfig.demoVideoUrl} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          ) : (
            <div className="space-y-5 max-w-md">
              <button
                type="button"
                onClick={() => {
                  if (siteConfig.demoVideoUrl) {
                    setIsPlaying(true);
                  } else {
                    alert('Official product demonstration video will be embedded here upon delivery by business owner.');
                  }
                }}
                className="w-20 h-20 rounded-full bg-[#E6007E] text-white flex items-center justify-center mx-auto shadow-xl hover:scale-105 transition-transform cursor-pointer focus:outline-none focus:ring-4 focus:ring-pink-500/40"
                aria-label="Play Absorption Demo"
              >
                <Play className="w-8 h-8 ml-1 fill-white" />
              </button>

              <div>
                <h3 className="text-xl font-bold text-white">
                  B-Care Fluid Absorption Demonstration
                </h3>
                <p className="text-xs text-neutral-400 mt-1 max-w-xs mx-auto">
                  Demonstrating rapid fluid intake, surface dryness, and core fluid locking.
                </p>
              </div>

              <div className="inline-block px-4 py-1.5 rounded-full bg-neutral-700/90 text-neutral-300 text-xs font-mono">
                [ABSORPTION DEMO VIDEO READY]
              </div>
            </div>
          )}
        </div>

        {/* What Are You Seeing Explanation */}
        <div className="max-w-3xl mx-auto mt-10 p-6 sm:p-8 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 text-xs sm:text-sm text-neutral-300 space-y-3">
          <h4 className="font-bold text-white uppercase tracking-wider text-xs flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#FF4081]" />
            What Are You Seeing?
          </h4>
          <p className="leading-relaxed text-neutral-300">
            This demonstration shows the practical fluid intake and dispersion behavior of B-Care pads. Fluid is applied directly to the pure cotton top sheet to demonstrate immediate absorption into the core while maintaining surface comfort.
          </p>
          <p className="text-[11px] text-neutral-400 border-t border-neutral-700/60 pt-2">
            * Compliance Note: This video is a product demonstration of practical absorption performance and is not presented as a clinical or laboratory certification test.
          </p>
        </div>
      </section>

      {/* 4. PRODUCT MATERIAL SECTION ("Made With Care") */}
      <section className="bg-gradient-to-tr from-pink-50 via-white to-pink-50/50 rounded-3xl p-8 sm:p-12 border border-pink-200/80">
        <div className="max-w-3xl mx-auto text-center space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
            Material Transparency
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900">
            Made With Care
          </h2>
          
          <div className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white border border-pink-300 text-[#E6007E] font-black text-lg sm:text-xl shadow-xs">
            <CheckCircle2 className="w-5 h-5" />
            100% Pure Cotton* Top Layer
          </div>

          <p className="text-sm sm:text-base text-neutral-600 max-w-xl mx-auto leading-relaxed">
            The top sheet contacting delicate skin is made of 100% pure cotton, preventing the chafing, plastic friction, and irritation commonly associated with synthetic mesh covers.
          </p>

          {/* Layer-by-Layer Visual Breakdown */}
          <div className="mt-10 max-w-xl mx-auto space-y-3 text-left">
            <span className="text-xs font-bold uppercase tracking-wider text-neutral-500 block text-center mb-4">
              Verified Construction Overview
            </span>

            <div className="p-4 rounded-2xl bg-white border border-pink-200 shadow-xs flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-pink-100 text-[#E6007E] font-bold text-xs flex items-center justify-center shrink-0">
                01
              </span>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">100% Pure Cotton Top Sheet*</h4>
                <p className="text-xs text-neutral-500">Soft, breathable, and hypoallergenic natural cotton layer for gentle comfort.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-pink-200 shadow-xs flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-pink-100 text-[#E6007E] font-bold text-xs flex items-center justify-center shrink-0">
                02
              </span>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">Absorbent Core & Fluid Channels</h4>
                <p className="text-xs text-neutral-500">Engineered to quickly pull fluid away from the surface into the absorbent matrix.</p>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-white border border-pink-200 shadow-xs flex items-center gap-4">
              <span className="w-8 h-8 rounded-full bg-pink-100 text-[#E6007E] font-bold text-xs flex items-center justify-center shrink-0">
                03
              </span>
              <div>
                <h4 className="font-bold text-neutral-900 text-sm">Breathable Protective Barrier</h4>
                <p className="text-xs text-neutral-500">Bottom backing designed for secure placement and everyday leakage containment.</p>
              </div>
            </div>
          </div>

          <div className="mt-6 text-[11px] text-neutral-400">
            * Note: Only product construction details confirmed by the manufacturer are documented. No unverified chemical or antimicrobial coatings are claimed.
          </div>
        </div>
      </section>

      {/* 5. Innovation & Patent Section */}
      <section className="bg-white rounded-3xl border border-neutral-200 p-8 sm:p-12 shadow-sm space-y-6">
        <div className="max-w-2xl">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
            Patented Technology
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-1">
            Innovation & Quality
          </h2>
          <p className="text-xs sm:text-sm text-neutral-600 mt-2 leading-relaxed">
            B-Care is developed as a patented sanitary pad, focused on delivering premium cotton comfort at an affordable consumer price point.
          </p>
        </div>

        <div className="p-6 rounded-2xl bg-pink-50/50 border border-pink-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-[#9C1053] bg-pink-100 px-3 py-1 rounded-full mb-2">
              <Award className="w-4 h-4" />
              Patented Product*
            </div>
            <p className="text-xs text-neutral-600">
              Patent Status: <strong className="text-neutral-800">Patented Sanitary Pad Design*</strong>
            </p>
            <p className="text-xs text-neutral-400 font-mono mt-0.5">
              Patent Number: [PATENT NUMBER TO BE PROVIDED BY OWNER]
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('/contact')}
            className="btn-secondary py-2.5 px-5 rounded-xl text-xs font-bold uppercase tracking-wider"
          >
            Inquire About Patent Details
          </button>
        </div>
      </section>

    </div>
  );
}
