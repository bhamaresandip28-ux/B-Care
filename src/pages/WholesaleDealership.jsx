import React, { useState } from 'react';
import { ShoppingBag, Users, CheckCircle, MessageSquare, ArrowRight, Building, Phone, Mail, MapPin, Send, HelpCircle, Search, ShieldCheck } from 'lucide-react';
import siteConfig from '../data/siteConfig';
import dealers from '../data/dealers';
import DealerCard from '../components/DealerCard';

export default function WholesaleDealership({ onNavigate }) {
  const [activeTab, setActiveTab] = useState('wholesale'); // 'wholesale' or 'dealership'
  
  // Dealer Search State
  const [searchQuery, setSearchQuery] = useState('');
  
  // Wholesale Form State
  const [wholesaleForm, setWholesaleForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    businessType: 'Retailer',
    city: '',
    state: '',
    pincode: '',
    size: 'Both',
    pack: 'Both',
    quantity: '',
    message: ''
  });
  const [wholesaleSubmitted, setWholesaleSubmitted] = useState(false);

  // Dealer Form State
  const [dealerForm, setDealerForm] = useState({
    name: '',
    phone: '',
    email: '',
    businessName: '',
    hasExistingBusiness: 'Yes',
    businessType: 'Distributor',
    city: '',
    district: '',
    state: '',
    pincode: '',
    yearsInBusiness: '',
    fmcgExperience: '',
    interestType: 'Dealership',
    expectedVolume: '',
    message: ''
  });
  const [dealerSubmitted, setDealerSubmitted] = useState(false);

  const handleWholesaleSubmit = (e) => {
    e.preventDefault();
    setWholesaleSubmitted(true);
  };

  const handleDealerSubmit = (e) => {
    e.preventDefault();
    setDealerSubmitted(true);
  };

  const handleWhatsAppWholesale = () => {
    const text = encodeURIComponent(siteConfig.whatsAppMessages.wholesale);
    if (siteConfig.ownerWhatsApp) {
      window.open(`https://wa.me/${siteConfig.ownerWhatsApp}?text=${text}`, '_blank');
    } else {
      alert('Wholesale WhatsApp channel will activate once authorized contact number is supplied by the business owner.');
    }
  };

  const filteredDealers = dealers.filter(d => 
    d.verified && (
      d.city?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      d.state?.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16">
      
      {/* 1. Header & Dedicated Tab Selector */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
          Commercial & Distribution Network
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          Wholesale & Dealership
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Please select your intended business journey below. Wholesale bulk orders and Dealership inquiries are handled through dedicated processes.
        </p>

        {/* Tab Switcher */}
        <div className="pt-4 flex justify-center">
          <div className="inline-flex p-1.5 rounded-2xl bg-neutral-100 border border-neutral-200 shadow-inner">
            <button
              type="button"
              onClick={() => setActiveTab('wholesale')}
              className={`px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                activeTab === 'wholesale'
                  ? 'bg-white text-[#E6007E] shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <ShoppingBag className="w-4 h-4" />
              A. Buy in Bulk / Wholesale
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('dealership')}
              className={`px-6 sm:px-8 py-3 rounded-xl text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center gap-2 transition-all ${
                activeTab === 'dealership'
                  ? 'bg-white text-[#E6007E] shadow-sm'
                  : 'text-neutral-600 hover:text-neutral-900'
              }`}
            >
              <Users className="w-4 h-4" />
              B. Become a Dealer
            </button>
          </div>
        </div>
      </div>

      {/* ========================================================
          SECTION A: WHOLESALE & BULK BUYERS
         ======================================================== */}
      {activeTab === 'wholesale' && (
        <div className="space-y-16 animate-in fade-in duration-200">
          
          {/* Wholesale Introduction Banner */}
          <div className="bg-gradient-to-r from-pink-100/80 via-white to-pink-50 rounded-3xl border border-pink-200 p-8 sm:p-12 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              <div className="lg:col-span-7 space-y-4">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#9C1053]">
                  Direct Bulk Supply
                </span>
                <h2 className="text-3xl sm:text-4xl font-black text-neutral-900 tracking-tight">
                  Looking to Buy B-Care in Bulk?
                </h2>
                <p className="text-sm sm:text-base text-neutral-600 leading-relaxed">
                  Need B-Care in larger quantities? Contact our dealer directly to discuss wholesale and bulk-order requirements.
                </p>

                <div className="pt-2 flex flex-wrap gap-4">
                  <button
                    type="button"
                    onClick={handleWhatsAppWholesale}
                    className="btn-primary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" />
                    Contact Dealer via WhatsApp
                  </button>
                  <a
                    href="#wholesale-form"
                    className="btn-secondary px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center gap-2"
                  >
                    Submit Bulk Enquiry Form
                  </a>
                </div>
              </div>

              {/* Verified Dealer Info Box */}
              <div className="lg:col-span-5 bg-white rounded-2xl p-6 border border-pink-200/80 shadow-xs space-y-3 text-xs">
                <h3 className="font-bold text-neutral-900 text-sm flex items-center gap-2">
                  <Building className="w-4 h-4 text-[#E6007E]" />
                  Authorized Dealer Information
                </h3>
                <div className="space-y-2 text-neutral-600 pt-2 border-t border-gray-100">
                  <p>Dealer Name: <span className="font-mono text-neutral-400">[DEALER NAME TO BE PROVIDED]</span></p>
                  <p>Territory / City: <span className="font-mono text-neutral-400">[LOCATION TO BE PROVIDED]</span></p>
                  <p>Phone: <span className="font-mono text-neutral-400">[PHONE TO BE PROVIDED]</span></p>
                  <p>WhatsApp: <span className="font-mono text-neutral-400">[WHATSAPP TO BE PROVIDED]</span></p>
                </div>
                <div className="text-[11px] text-neutral-400 italic pt-2">
                  * Official dealer contact credentials will be activated upon publication.
                </div>
              </div>

            </div>
          </div>

          {/* Wholesale Enquiry Form */}
          <div id="wholesale-form" className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-12 shadow-sm max-w-4xl mx-auto scroll-mt-24">
            <div className="max-w-xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
                Enquiry Submission
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-1">
                Wholesale Order Form
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Submit your order estimate to receive official wholesale rates, minimum order criteria, and dispatch schedules.
              </p>
            </div>

            {wholesaleSubmitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900">Wholesale Enquiry Submitted</h4>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{wholesaleForm.name}</strong>. Your bulk requirements for <strong>{wholesaleForm.businessName}</strong> ({wholesaleForm.city}) have been logged. Our authorized distributor will contact you promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setWholesaleSubmitted(false)}
                  className="btn-secondary px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider mt-4"
                >
                  Submit Another Wholesale Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleWholesaleSubmit} className="space-y-6 text-xs">
                
                {/* 1. Contact Person */}
                <div className="space-y-3">
                  <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-xs">1. Contact Person</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={wholesaleForm.name}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={wholesaleForm.phone}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, phone: e.target.value })}
                        placeholder="+91 Mobile"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Email Address</label>
                      <input
                        type="email"
                        value={wholesaleForm.email}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, email: e.target.value })}
                        placeholder="email@domain.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Business Details */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-xs">2. Business Details</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Business / Shop Name *</label>
                      <input
                        type="text"
                        required
                        value={wholesaleForm.businessName}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, businessName: e.target.value })}
                        placeholder="e.g. LifeCare Pharmacy"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Business Type *</label>
                      <select
                        value={wholesaleForm.businessType}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, businessType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E] bg-white"
                      >
                        <option value="Retailer">Retailer</option>
                        <option value="Medical Store">Medical Store / Pharmacy</option>
                        <option value="General Store">General Store</option>
                        <option value="Wholesale Business">Wholesale Business</option>
                        <option value="Distributor">Distributor</option>
                        <option value="Institution">Institution / Hospital / NGO</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Location */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-xs">3. Location</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">City *</label>
                      <input
                        type="text"
                        required
                        value={wholesaleForm.city}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, city: e.target.value })}
                        placeholder="City"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">State *</label>
                      <input
                        type="text"
                        required
                        value={wholesaleForm.state}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, state: e.target.value })}
                        placeholder="State"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">PIN Code *</label>
                      <input
                        type="text"
                        required
                        value={wholesaleForm.pincode}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, pincode: e.target.value })}
                        placeholder="6 Digits"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Product Requirements */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-xs">4. Product Requirements</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Size Needed *</label>
                      <select
                        value={wholesaleForm.size}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, size: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E] bg-white"
                      >
                        <option value="Both">Both XL & XXL</option>
                        <option value="XL">XL Only</option>
                        <option value="XXL">XXL Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Pack Type *</label>
                      <select
                        value={wholesaleForm.pack}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, pack: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E] bg-white"
                      >
                        <option value="Both">Both 6-Piece & 40-Piece Jumbo</option>
                        <option value="6-Piece">6-Piece Packs Only</option>
                        <option value="40-Piece Jumbo">40-Piece Jumbo Packs Only</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Estimated Quantity (Packs) *</label>
                      <input
                        type="number"
                        required
                        min="1"
                        value={wholesaleForm.quantity}
                        onChange={(e) => setWholesaleForm({ ...wholesaleForm, quantity: e.target.value })}
                        placeholder="e.g. 300"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Additional Requirements / Notes</label>
                  <textarea
                    rows="3"
                    value={wholesaleForm.message}
                    onChange={(e) => setWholesaleForm({ ...wholesaleForm, message: e.target.value })}
                    placeholder="Mention delivery timelines, frequency, or packaging instructions..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Wholesale Enquiry
                </button>
              </form>
            )}
          </div>

        </div>
      )}

      {/* ========================================================
          SECTION B: POTENTIAL DEALERS
         ======================================================== */}
      {activeTab === 'dealership' && (
        <div className="space-y-16 animate-in fade-in duration-200">
          
          {/* Dealership Banner */}
          <div className="bg-neutral-900 text-white rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl">
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#FF4081]">
                Expansion Opportunities
              </span>
              <h2 className="text-3xl sm:text-5xl font-black tracking-tight">
                Bring B-Care to Your City.
              </h2>
              <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pt-1">
                Interested in selling B-Care sanitary pads in your city? Get in touch with us to discuss dealership opportunities.
              </p>
            </div>

            {/* 3-Step Visual Process */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 pt-8 border-t border-neutral-800">
              <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
                <span className="text-3xl font-black text-[#FF4081]">01</span>
                <h3 className="text-base font-bold text-white">Enquire</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Submit your dealership information, business experience, and proposed region.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
                <span className="text-3xl font-black text-[#FF4081]">02</span>
                <h3 className="text-base font-bold text-white">Connect</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  The B-Care team reviews your application and reaches out for an initial conversation.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-neutral-800/80 border border-neutral-700/60 space-y-2">
                <span className="text-3xl font-black text-[#FF4081]">03</span>
                <h3 className="text-base font-bold text-white">Discuss</h3>
                <p className="text-xs text-neutral-400 leading-relaxed">
                  Discuss territory viability, order volume, and supply onboarding.
                </p>
              </div>
            </div>

            <div className="mt-8 p-4 rounded-xl bg-neutral-800/60 border border-neutral-700/50 text-[11px] text-neutral-400 text-center">
              * Important: Submitting a dealership application does not grant automatic approval or exclusive city territory. All decisions are made following review by B-Care management.
            </div>
          </div>

          {/* Dealership Application Form */}
          <div className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-12 shadow-sm max-w-4xl mx-auto">
            <div className="max-w-xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
                Official Application
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-1">
                Dealership Application Form
              </h3>
              <p className="text-xs sm:text-sm text-neutral-500 mt-1">
                Please provide accurate information about your distribution background and commercial experience.
              </p>
            </div>

            {dealerSubmitted ? (
              <div className="p-8 sm:p-12 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900">Application Received</h4>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-md mx-auto leading-relaxed">
                  Thank you, <strong>{dealerForm.name}</strong>. Your dealership inquiry for <strong>{dealerForm.city}, {dealerForm.state}</strong> has been received by B-Care. Our team will review your profile and connect with you.
                </p>
                <button
                  type="button"
                  onClick={() => setDealerSubmitted(false)}
                  className="btn-secondary px-6 py-2.5 rounded-xl text-xs font-bold uppercase tracking-wider mt-4"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleDealerSubmit} className="space-y-6 text-xs">
                
                {/* 1. Personal Details */}
                <div className="space-y-3">
                  <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-xs">1. Personal Information</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Full Name *</label>
                      <input
                        type="text"
                        required
                        value={dealerForm.name}
                        onChange={(e) => setDealerForm({ ...dealerForm, name: e.target.value })}
                        placeholder="Your Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={dealerForm.phone}
                        onChange={(e) => setDealerForm({ ...dealerForm, phone: e.target.value })}
                        placeholder="+91 Mobile"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={dealerForm.email}
                        onChange={(e) => setDealerForm({ ...dealerForm, email: e.target.value })}
                        placeholder="name@business.com"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                  </div>
                </div>

                {/* 2. Business Entity */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-xs">2. Business Profile</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Business Name *</label>
                      <input
                        type="text"
                        required
                        value={dealerForm.businessName}
                        onChange={(e) => setDealerForm({ ...dealerForm, businessName: e.target.value })}
                        placeholder="Company or Firm Name"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Existing Business? *</label>
                      <select
                        value={dealerForm.hasExistingBusiness}
                        onChange={(e) => setDealerForm({ ...dealerForm, hasExistingBusiness: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E] bg-white"
                      >
                        <option value="Yes">Yes, Active Business</option>
                        <option value="No">No, New Venture</option>
                      </select>
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Business Type *</label>
                      <select
                        value={dealerForm.businessType}
                        onChange={(e) => setDealerForm({ ...dealerForm, businessType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E] bg-white"
                      >
                        <option value="Distributor">Distributor / Super Stockist</option>
                        <option value="Wholesale Business">Wholesale Business</option>
                        <option value="Retailer">Retail Store Chain</option>
                        <option value="Medical Store">Medical Store Group</option>
                        <option value="General Store">General Store</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 3. Location */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-xs">3. Proposed Location</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">City *</label>
                      <input
                        type="text"
                        required
                        value={dealerForm.city}
                        onChange={(e) => setDealerForm({ ...dealerForm, city: e.target.value })}
                        placeholder="City"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">District *</label>
                      <input
                        type="text"
                        required
                        value={dealerForm.district}
                        onChange={(e) => setDealerForm({ ...dealerForm, district: e.target.value })}
                        placeholder="District"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">State *</label>
                      <input
                        type="text"
                        required
                        value={dealerForm.state}
                        onChange={(e) => setDealerForm({ ...dealerForm, state: e.target.value })}
                        placeholder="State"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">PIN Code *</label>
                      <input
                        type="text"
                        required
                        value={dealerForm.pincode}
                        onChange={(e) => setDealerForm({ ...dealerForm, pincode: e.target.value })}
                        placeholder="6 Digits"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                  </div>
                </div>

                {/* 4. Experience & Interest */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-xs">4. Experience & Scope</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Years in Business *</label>
                      <input
                        type="text"
                        required
                        value={dealerForm.yearsInBusiness}
                        onChange={(e) => setDealerForm({ ...dealerForm, yearsInBusiness: e.target.value })}
                        placeholder="e.g. 6 Years"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">FMCG / Distribution Experience? *</label>
                      <input
                        type="text"
                        required
                        value={dealerForm.fmcgExperience}
                        onChange={(e) => setDealerForm({ ...dealerForm, fmcgExperience: e.target.value })}
                        placeholder="e.g. Personal hygiene distribution"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Primary Dealership Interest *</label>
                      <select
                        value={dealerForm.interestType}
                        onChange={(e) => setDealerForm({ ...dealerForm, interestType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E] bg-white"
                      >
                        <option value="Dealership">City Dealership</option>
                        <option value="Distribution">Regional Distribution</option>
                        <option value="Wholesale">Wholesale Supply</option>
                        <option value="Retail">Retail Chain Supply</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* 5. Expected Volume & Strategy */}
                <div className="space-y-3 pt-2 border-t border-gray-100">
                  <h4 className="font-bold text-neutral-800 uppercase tracking-wider text-xs">5. Expected Order Volume & Strategy</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Expected Monthly Volume (Packs)</label>
                      <input
                        type="text"
                        value={dealerForm.expectedVolume}
                        onChange={(e) => setDealerForm({ ...dealerForm, expectedVolume: e.target.value })}
                        placeholder="e.g. 1000 - 3000 packs/month"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                    <div>
                      <label className="font-bold text-neutral-700 block mb-1">Proposed Network Reach</label>
                      <input
                        type="text"
                        value={dealerForm.message}
                        onChange={(e) => setDealerForm({ ...dealerForm, message: e.target.value })}
                        placeholder="Number of retail counters or towns covered"
                        className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                      />
                    </div>
                  </div>
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-4 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm"
                >
                  <Send className="w-4 h-4" />
                  Submit Dealer Application
                </button>
              </form>
            )}
          </div>

          {/* Dealer Directory Section (Centralized Extensible Architecture) */}
          <section className="bg-pink-50/50 rounded-3xl border border-pink-200 p-8 sm:p-12">
            <div className="max-w-2xl mb-8">
              <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
                Network Directory
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-neutral-900 mt-1">
                Find a B-Care Dealer
              </h3>
              <p className="text-xs sm:text-sm text-neutral-600 mt-1">
                Search verified B-Care authorized stockists and dealers across India.
              </p>
            </div>

            <div className="max-w-md mb-8">
              <div className="relative">
                <Search className="w-4 h-4 text-neutral-400 absolute left-3.5 top-3" />
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by city or state..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs focus:outline-none focus:border-[#E6007E]"
                />
              </div>
            </div>

            {filteredDealers.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredDealers.map(dealer => (
                  <DealerCard key={dealer.id} dealer={dealer} />
                ))}
              </div>
            ) : (
              <div className="bg-white rounded-2xl border border-dashed border-pink-300 p-8 text-center space-y-3">
                <Building className="w-10 h-10 text-[#E6007E] mx-auto opacity-70" />
                <h4 className="font-bold text-neutral-900 text-sm">Dealer Directory Under Expansion</h4>
                <p className="text-xs text-neutral-500 max-w-sm mx-auto">
                  Verified dealer locations will appear here as regional dealerships are established. Use our Wholesale form to connect directly with headquarters.
                </p>
              </div>
            )}
          </section>

        </div>
      )}

    </div>
  );
}
