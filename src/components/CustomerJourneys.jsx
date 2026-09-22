import React from 'react';
import { ShoppingBag, Briefcase, Users, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CustomerJourneys({ onNavigate }) {
  const journeys = [
    {
      id: "personal",
      badge: "Journey A • Personal Customer",
      title: "Buy for Personal Use",
      subtitle: "Order B-Care sanitary pads online directly to your doorstep.",
      steps: [
        "Select Your Size (XL or XXL)",
        "Choose Pack (6-Piece or 40-Piece Jumbo)",
        "Order via Amazon or Meesho"
      ],
      ctaText: "Shop B-Care Products",
      ctaPath: "/products",
      icon: ShoppingBag,
      theme: "border-pink-200 bg-gradient-to-b from-pink-50/60 to-white text-[#9C1053]"
    },
    {
      id: "wholesale",
      badge: "Journey B • Wholesale & Retailers",
      title: "Buy in Bulk / Wholesale",
      subtitle: "For medical stores, general stores, supermarkets & institutions.",
      steps: [
        "Review Product Requirements",
        "Contact Authorized Dealer",
        "Submit Bulk Order Enquiry"
      ],
      ctaText: "Wholesale & Bulk Orders",
      ctaPath: "/wholesale-dealership",
      icon: Briefcase,
      theme: "border-neutral-200 bg-white text-neutral-900"
    },
    {
      id: "dealer",
      badge: "Journey C • Business Partner",
      title: "Become a Dealer",
      subtitle: "Bring B-Care sanitary pads to your city, district or region.",
      steps: [
        "Submit Dealer Application",
        "B-Care Management Review",
        "Territory & Business Discussion"
      ],
      ctaText: "Apply for Dealership",
      ctaPath: "/wholesale-dealership",
      icon: Users,
      theme: "border-neutral-900 bg-neutral-900 text-white"
    }
  ];

  return (
    <section className="py-12" aria-label="Customer Journeys">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
            Tailored Experiences
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 mt-2">
            How Would You Like to Connect?
          </h2>
          <p className="text-sm sm:text-base text-neutral-600 mt-2">
            Whether you are ordering for yourself, stocking your store, or applying to represent B-Care in your city.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {journeys.map((journey) => {
            const Icon = journey.icon;
            const isDark = journey.id === 'dealer';
            return (
              <div 
                key={journey.id}
                className={`rounded-3xl border p-8 flex flex-col justify-between shadow-xs hover:shadow-md transition-all duration-200 ${journey.theme}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[11px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full ${
                      isDark 
                        ? 'bg-neutral-800 text-[#FF4081]' 
                        : 'bg-pink-100/80 text-[#9C1053]'
                    }`}>
                      {journey.badge}
                    </span>
                    <div className={`p-2.5 rounded-2xl ${isDark ? 'bg-neutral-800 text-[#FF4081]' : 'bg-pink-100 text-[#E6007E]'}`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className={`text-xl font-bold tracking-tight ${isDark ? 'text-white' : 'text-neutral-900'}`}>
                    {journey.title}
                  </h3>
                  <p className={`text-xs mt-2 leading-relaxed ${isDark ? 'text-neutral-400' : 'text-neutral-600'}`}>
                    {journey.subtitle}
                  </p>

                  <div className="mt-6 pt-6 border-t border-gray-200/60 space-y-3">
                    <span className={`text-[11px] font-bold uppercase tracking-wider block ${isDark ? 'text-neutral-400' : 'text-neutral-500'}`}>
                      Customer Flow
                    </span>
                    {journey.steps.map((step, idx) => (
                      <div key={idx} className="flex items-start gap-2.5 text-xs">
                        <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] shrink-0 mt-0.5 ${
                          isDark ? 'bg-[#E6007E] text-white' : 'bg-pink-100 text-[#E6007E]'
                        }`}>
                          {idx + 1}
                        </span>
                        <span className={isDark ? 'text-neutral-300' : 'text-neutral-700 font-medium'}>
                          {step}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-8">
                  <button
                    type="button"
                    onClick={() => onNavigate(journey.ctaPath)}
                    className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all ${
                      isDark 
                        ? 'btn-primary' 
                        : journey.id === 'personal'
                          ? 'btn-primary'
                          : 'btn-secondary'
                    }`}
                  >
                    {journey.ctaText}
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
