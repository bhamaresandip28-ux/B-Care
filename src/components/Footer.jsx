import React from 'react';
import { ShoppingBag, Briefcase, Phone, Mail, MapPin, ExternalLink, ShieldCheck, Heart } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function Footer({ onNavigate }) {
  const handleLink = (href, e) => {
    e.preventDefault();
    if (onNavigate) {
      onNavigate(href);
    }
  };

  return (
    <footer className="bg-neutral-900 text-neutral-300 pt-16 pb-24 lg:pb-12 border-t border-neutral-800" aria-label="Site Footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-neutral-800">
          
          {/* Col 1: Brand & Identity */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-[#E6007E] to-[#FF4081] flex items-center justify-center">
                <span className="text-white font-extrabold text-lg">B</span>
              </div>
              <span className="text-2xl font-black tracking-tight text-white">
                B-Care
              </span>
            </div>
            <p className="text-sm text-neutral-400 max-w-sm leading-relaxed">
              Designed with comfort, coverage, and affordability in mind. Made with 100% pure cotton for everyday peace of mind and confident care.
            </p>
            <div className="pt-2">
              <p className="text-xs text-neutral-500">
                Owned and founded by <strong className="text-neutral-300">{siteConfig.ownerName}</strong>.
              </p>
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" onClick={(e) => handleLink('/', e)} className="hover:text-[#FF4081] transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/products" onClick={(e) => handleLink('/products', e)} className="hover:text-[#FF4081] transition-colors">
                  Products (XL & XXL)
                </a>
              </li>
              <li>
                <a href="/why-b-care" onClick={(e) => handleLink('/why-b-care', e)} className="hover:text-[#FF4081] transition-colors">
                  Why B-Care
                </a>
              </li>
              <li>
                <a href="/demo" onClick={(e) => handleLink('/demo', e)} className="hover:text-[#FF4081] transition-colors">
                  Absorption Demo
                </a>
              </li>
              <li>
                <a href="/about" onClick={(e) => handleLink('/about', e)} className="hover:text-[#FF4081] transition-colors">
                  About B-Care
                </a>
              </li>
              <li>
                <a href="/contact" onClick={(e) => handleLink('/contact', e)} className="hover:text-[#FF4081] transition-colors">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Shopping & Business */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Purchase & Business</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/products" onClick={(e) => handleLink('/products', e)} className="hover:text-[#FF4081] transition-colors flex items-center gap-1.5">
                  <ShoppingBag className="w-3.5 h-3.5 text-[#E6007E]" />
                  Personal Order (Amazon/Meesho)
                </a>
              </li>
              <li>
                <a href="/wholesale-dealership" onClick={(e) => handleLink('/wholesale-dealership', e)} className="hover:text-[#FF4081] transition-colors flex items-center gap-1.5">
                  <Briefcase className="w-3.5 h-3.5 text-[#E6007E]" />
                  Wholesale & Bulk Orders
                </a>
              </li>
              <li>
                <a href="/wholesale-dealership" onClick={(e) => handleLink('/wholesale-dealership', e)} className="hover:text-[#FF4081] transition-colors flex items-center gap-1.5">
                  <ShieldCheck className="w-3.5 h-3.5 text-[#E6007E]" />
                  Become a Dealer
                </a>
              </li>
              <li>
                <span className="text-xs text-neutral-500 block pt-1">
                  Amazon & Meesho links updated upon official listing.
                </span>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Support */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-white">Direct Inquiries</h4>
            <div className="space-y-2.5 text-xs text-neutral-400">
              <p>
                <span className="text-neutral-500 block">Owner:</span>
                <span className="text-neutral-200 font-medium">{siteConfig.ownerName}</span>
              </p>
              <p>
                <span className="text-neutral-500 block">Inquiries:</span>
                <a href="/contact" onClick={(e) => handleLink('/contact', e)} className="text-[#FF4081] hover:underline">
                  Submit Enquiry Form
                </a>
              </p>
              <p>
                <span className="text-neutral-500 block">Dealership:</span>
                <a href="/wholesale-dealership" onClick={(e) => handleLink('/wholesale-dealership', e)} className="text-[#FF4081] hover:underline">
                  Dealer Application
                </a>
              </p>
            </div>
          </div>

        </div>

        {/* Legal & Compliance Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
          <p>
            © {new Date().getFullYear()} B-Care. All rights reserved. Owned by {siteConfig.ownerName}.
          </p>
          
          <div className="flex items-center gap-6">
            <a href="/privacy-policy" onClick={(e) => handleLink('/privacy-policy', e)} className="hover:text-neutral-300 transition-colors">
              Privacy Policy
            </a>
            <a href="/terms" onClick={(e) => handleLink('/terms', e)} className="hover:text-neutral-300 transition-colors">
              Terms & Conditions
            </a>
            <a href="/disclaimer" onClick={(e) => handleLink('/disclaimer', e)} className="hover:text-neutral-300 transition-colors">
              Disclaimer
            </a>
          </div>
        </div>

        {/* Verified Claims Transparency Note */}
        <div className="mt-6 pt-4 border-t border-neutral-800/60 text-[11px] text-neutral-600 text-center">
          * Claims statement: 100% Pure Cotton and Patented Product are verified product specifications. B-Care does not make exaggerated medical or clinical claims.
        </div>

      </div>
    </footer>
  );
}
