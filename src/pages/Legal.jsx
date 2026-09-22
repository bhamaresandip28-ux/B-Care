import React from 'react';
import siteConfig from '../data/siteConfig';

export default function Legal({ type = 'privacy' }) {
  if (type === 'terms') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-neutral-800">
        <h1 className="text-3xl font-black text-neutral-900">Terms & Conditions</h1>
        <p className="text-xs text-neutral-500">Last updated: September 2026</p>
        
        <div className="space-y-4 text-sm leading-relaxed text-neutral-600">
          <p>
            Welcome to <strong>B-Care</strong>, owned by <strong>{siteConfig.ownerName}</strong>. By accessing this website, you agree to these Terms & Conditions.
          </p>
          <h2 className="text-base font-bold text-neutral-900">1. Product Information & Availability</h2>
          <p>
            B-Care currently manufactures and distributes sanitary pads in XL and XXL sizes across 6-piece packs and 40-piece Jumbo packs. Pricing, packaging photography, and marketplace availability on Amazon and Meesho are subject to formal listings.
          </p>
          <h2 className="text-base font-bold text-neutral-900">2. Wholesale & Dealership Inquiries</h2>
          <p>
            Submitting a wholesale or dealership application does not constitute a binding distribution contract or guarantee territorial exclusivity. All applications are subject to evaluation and business discussion.
          </p>
          <h2 className="text-base font-bold text-neutral-900">3. Intellectual Property</h2>
          <p>
            The B-Care brand name, logos, and patented product technology are proprietary assets of the business owner.
          </p>
        </div>
      </div>
    );
  }

  if (type === 'disclaimer') {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-neutral-800">
        <h1 className="text-3xl font-black text-neutral-900">Product Disclaimer</h1>
        <p className="text-xs text-neutral-500">Last updated: September 2026</p>
        
        <div className="space-y-4 text-sm leading-relaxed text-neutral-600">
          <p>
            This website provides product information for <strong>B-Care</strong> sanitary pads, owned by <strong>{siteConfig.ownerName}</strong>.
          </p>
          <h2 className="text-base font-bold text-neutral-900">1. Verification of Claims</h2>
          <p>
            Statements regarding 100% Pure Cotton and Patented Product are based strictly on manufacturer specifications. B-Care does not make exaggerated medical claims, doctor certifications, or leak-proof guarantees.
          </p>
          <h2 className="text-base font-bold text-neutral-900">2. Demonstration Purpose</h2>
          <p>
            Any absorption demonstration video provided on this website is for illustrative demonstration purposes only and should not be construed as clinical or laboratory test certification.
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-6 text-neutral-800">
      <h1 className="text-3xl font-black text-neutral-900">Privacy Policy</h1>
      <p className="text-xs text-neutral-500">Last updated: September 2026</p>
      
      <div className="space-y-4 text-sm leading-relaxed text-neutral-600">
        <p>
          <strong>B-Care</strong>, owned by <strong>{siteConfig.ownerName}</strong>, respects your privacy. This policy outlines how inquiry and communication details are handled.
        </p>
        <h2 className="text-base font-bold text-neutral-900">1. Information We Collect</h2>
        <p>
          When you submit an inquiry through our Wholesale, Dealership, or Contact forms, we collect your name, phone number, email address, and business details solely for communicating with you regarding your inquiry.
        </p>
        <h2 className="text-base font-bold text-neutral-900">2. Use of Information</h2>
        <p>
          Information collected is used strictly to respond to customer inquiries, coordinate bulk supply, and evaluate dealership applications. We do not sell or trade your personal data to third parties.
        </p>
      </div>
    </div>
  );
}
