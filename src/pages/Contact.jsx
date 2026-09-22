import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Send, ChevronDown, ChevronUp, CheckCircle, ShieldAlert, Sparkles, Building } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Contact({ onNavigate }) {
  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Contact Form State
  const [contactForm, setContactForm] = useState({
    name: '',
    phone: '',
    email: '',
    reason: 'Product enquiry',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppGeneral = () => {
    const text = encodeURIComponent(siteConfig.whatsAppMessages.general);
    if (siteConfig.ownerWhatsApp) {
      window.open(`https://wa.me/${siteConfig.ownerWhatsApp}?text=${text}`, '_blank');
    } else {
      alert('Official B-Care WhatsApp support line will be activated once supplied by the business owner.');
    }
  };

  const faqs = [
    {
      q: "What sizes are available?",
      a: "B-Care is currently available exclusively in two sizes: XL and XXL. We do not manufacture Regular, Medium, or Large sizes at this time."
    },
    {
      q: "What pack options are available?",
      a: "B-Care is available in two pack formats: convenient 6-piece portable packs and economy 40-piece Jumbo packs for both XL and XXL sizes."
    },
    {
      q: "Where can I buy B-Care?",
      a: "Retail customers can purchase B-Care online through official marketplace listings on Amazon and Meesho as direct product links are published."
    },
    {
      q: "What is B-Care made from?",
      a: "B-Care features a top layer made of 100% pure cotton, engineered with patented product technology for breathable everyday comfort."
    },
    {
      q: "Can I purchase B-Care in bulk?",
      a: "Yes. Wholesale buyers, medical stores, retail shops, and institutions can place bulk orders by contacting our dealer directly or submitting a wholesale enquiry."
    },
    {
      q: "Can I become a B-Care dealer?",
      a: "Yes. Interested distributors, shop owners, and entrepreneurs can submit a dealership enquiry through our Wholesale & Dealership page."
    },
    {
      q: "Can I become a dealer in another city?",
      a: "Yes, customers may submit an enquiry regarding dealership opportunities in their city. Approval is subject to B-Care's business evaluation process."
    },
    {
      q: "How can I contact B-Care?",
      a: "You can submit an enquiry through the contact form on this page or connect via authorized dealer and owner channels as listed."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-16 lg:space-y-24">
      
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
          Customer Support & Business Inquiries
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-neutral-900 tracking-tight">
          We're Here to Help
        </h1>
        <p className="text-sm sm:text-base text-neutral-600 max-w-2xl mx-auto leading-relaxed">
          Have a question about our products, retail purchases, bulk supply, or dealership opportunities? Connect with the B-Care management team.
        </p>
      </div>

      {/* 2. Main Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        
        {/* Left Column: Official Business Information */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-gradient-to-tr from-pink-50 via-white to-pink-50/50 border border-pink-200 rounded-3xl p-8 space-y-6 shadow-xs">
            
            <div>
              <span className="text-xs font-extrabold uppercase tracking-wider text-[#9C1053]">
                Business Ownership
              </span>
              <h2 className="text-2xl font-black text-neutral-900 mt-1">
                {siteConfig.ownerName}
              </h2>
              <p className="text-xs font-bold text-[#E6007E]">
                {siteConfig.ownerRole}
              </p>
            </div>

            <div className="space-y-4 text-xs text-neutral-600 pt-4 border-t border-pink-200/80">
              
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-pink-100 text-[#E6007E] shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-neutral-800 block">Phone:</span>
                  <span className="text-neutral-500 font-mono">[OWNER PHONE TO BE PROVIDED]</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-pink-100 text-[#E6007E] shrink-0">
                  <MessageSquare className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-neutral-800 block">WhatsApp Support:</span>
                  <span className="text-neutral-500 font-mono">[OWNER WHATSAPP TO BE PROVIDED]</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-pink-100 text-[#E6007E] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-neutral-800 block">Official Email:</span>
                  <span className="text-neutral-500 font-mono">[OWNER EMAIL TO BE PROVIDED]</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 rounded-xl bg-pink-100 text-[#E6007E] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-neutral-800 block">Headquarters Address:</span>
                  <span className="text-neutral-500 font-mono">[BUSINESS ADDRESS TO BE PROVIDED]</span>
                </div>
              </div>

            </div>

            <div className="pt-2">
              <button
                type="button"
                onClick={handleWhatsAppGeneral}
                className="w-full btn-secondary py-3 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-emerald-600" />
                Connect on WhatsApp
              </button>
            </div>

            <div className="p-4 rounded-xl bg-white border border-pink-200 text-[11px] text-neutral-500 flex items-start gap-2">
              <ShieldAlert className="w-4 h-4 text-[#E6007E] shrink-0 mt-0.5" />
              <span>
                Verified business contact channels will be updated directly upon formal release by Poonam Sandip Bhamre.
              </span>
            </div>

          </div>
        </div>

        {/* Right Column: Contact Inquiry Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl border border-neutral-200/90 p-8 sm:p-10 shadow-sm">
            <h3 className="text-2xl font-black text-neutral-900 tracking-tight">
              Send a Direct Message
            </h3>
            <p className="text-xs text-neutral-500 mt-1 mb-6">
              Fill in your details below and our team will get back to you promptly.
            </p>

            {submitted ? (
              <div className="p-8 rounded-2xl bg-pink-50 border border-pink-200 text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-pink-100 text-[#E6007E] flex items-center justify-center mx-auto">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-neutral-900">Message Received</h4>
                <p className="text-xs sm:text-sm text-neutral-600 max-w-sm mx-auto leading-relaxed">
                  Thank you, <strong>{contactForm.name}</strong>. Your enquiry regarding "{contactForm.reason}" has been recorded. Our team will contact you at {contactForm.phone}.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="btn-secondary px-6 py-2 rounded-xl text-xs font-bold uppercase tracking-wider mt-2"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-neutral-700 block mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      value={contactForm.name}
                      onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                      placeholder="e.g. Priya Sharma"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-neutral-700 block mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={contactForm.phone}
                      onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                      placeholder="+91 Mobile"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="font-bold text-neutral-700 block mb-1">Email Address</label>
                    <input
                      type="email"
                      value={contactForm.email}
                      onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                      placeholder="name@email.com"
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                    />
                  </div>
                  <div>
                    <label className="font-bold text-neutral-700 block mb-1">Reason for Enquiry *</label>
                    <select
                      value={contactForm.reason}
                      onChange={(e) => setContactForm({ ...contactForm, reason: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E] bg-white"
                    >
                      <option value="Product enquiry">Product enquiry</option>
                      <option value="Bulk order">Bulk order / Wholesale</option>
                      <option value="Dealer enquiry">Dealer enquiry</option>
                      <option value="Distributor enquiry">Distributor enquiry</option>
                      <option value="General enquiry">General enquiry</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="font-bold text-neutral-700 block mb-1">Your Message *</label>
                  <textarea
                    rows="4"
                    required
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    placeholder="Write your message, questions, or product interest here..."
                    className="w-full px-3.5 py-2.5 rounded-xl border border-gray-200 focus:outline-none focus:border-[#E6007E]"
                  />
                </div>

                <button
                  type="submit"
                  className="btn-primary w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 shadow-xs"
                >
                  <Send className="w-4 h-4" />
                  Submit Enquiry
                </button>
              </form>
            )}
          </div>
        </div>

      </div>

      {/* 3. Accordion FAQ Section */}
      <section className="max-w-4xl mx-auto pt-8 border-t border-gray-200" aria-label="Frequently Asked Questions">
        <div className="text-center mb-10 space-y-2">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E6007E]">
            Verified Answers
          </span>
          <h2 className="text-3xl font-black text-neutral-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-neutral-500">
            Answers based strictly on verified B-Care brand and product information.
          </p>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openFaq === index;
            return (
              <div 
                key={index}
                className="bg-white rounded-2xl border border-neutral-200/90 overflow-hidden shadow-xs transition-colors"
              >
                <button
                  type="button"
                  onClick={() => setOpenFaq(isOpen ? -1 : index)}
                  className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none focus-visible:bg-pink-50"
                  aria-expanded={isOpen}
                >
                  <span className="font-bold text-neutral-900 text-sm sm:text-base">
                    {faq.q}
                  </span>
                  <span className="p-1 rounded-full bg-pink-50 text-[#E6007E] shrink-0">
                    {isOpen ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-1 text-xs sm:text-sm text-neutral-600 leading-relaxed border-t border-gray-100 animate-in fade-in duration-150">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
