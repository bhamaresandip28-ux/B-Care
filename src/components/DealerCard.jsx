import React from 'react';
import { MapPin, Phone, MessageSquare, Mail, Building, CheckCircle2 } from 'lucide-react';
import siteConfig from '../data/siteConfig';

export default function DealerCard({ dealer }) {
  if (!dealer || !dealer.verified) {
    return (
      <div className="bg-neutral-50 rounded-3xl border border-dashed border-neutral-300 p-8 text-center space-y-3">
        <Building className="w-10 h-10 text-neutral-400 mx-auto" />
        <h4 className="text-base font-bold text-neutral-800">Authorized Dealer Network</h4>
        <p className="text-xs text-neutral-500 max-w-sm mx-auto">
          Dealer contact details will be available soon. For immediate bulk inquiries, please use our Wholesale Enquiry Form.
        </p>
      </div>
    );
  }

  const handleWhatsApp = () => {
    if (dealer.whatsapp) {
      const msg = encodeURIComponent(siteConfig.whatsAppMessages.wholesale);
      window.open(`https://wa.me/${dealer.whatsapp}?text=${msg}`, '_blank');
    }
  };

  return (
    <div className="bg-white rounded-3xl border border-pink-100 hover:border-pink-300 p-6 shadow-xs hover:shadow-md transition-all space-y-4">
      <div className="flex items-start justify-between">
        <div>
          <div className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2.5 py-0.5 rounded-full mb-2">
            <CheckCircle2 className="w-3 h-3" />
            Verified Dealer
          </div>
          <h4 className="text-lg font-bold text-neutral-900">{dealer.name}</h4>
          <p className="text-xs text-neutral-500 flex items-center gap-1 mt-1">
            <MapPin className="w-3.5 h-3.5 text-[#E6007E]" />
            {dealer.city}, {dealer.state}
          </p>
        </div>
      </div>

      <div className="space-y-2 text-xs text-neutral-600 border-t border-gray-100 pt-3">
        {dealer.address && (
          <p className="text-neutral-500">
            <strong>Address:</strong> {dealer.address}
          </p>
        )}
        {dealer.phone && (
          <p className="flex items-center gap-1.5 font-mono">
            <Phone className="w-3.5 h-3.5 text-[#E6007E]" />
            {dealer.phone}
          </p>
        )}
      </div>

      <div className="pt-2 flex gap-2">
        {dealer.whatsapp && (
          <button
            type="button"
            onClick={handleWhatsApp}
            className="flex-1 btn-secondary py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5"
          >
            <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
            WhatsApp
          </button>
        )}
        {dealer.phone && (
          <a
            href={`tel:${dealer.phone}`}
            className="flex-1 btn-primary py-2 rounded-xl text-xs font-bold flex items-center justify-center gap-1.5 text-center"
          >
            <Phone className="w-3.5 h-3.5" />
            Call Dealer
          </a>
        )}
      </div>
    </div>
  );
}
