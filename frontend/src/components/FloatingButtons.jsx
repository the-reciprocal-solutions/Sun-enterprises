import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { companyInfo } from '../data/mock';

const FloatingButtons = () => {
  const handleWhatsApp = () => {
    const message = encodeURIComponent('Hello! I would like to enquire about your corporate cab services.');
    window.open(`https://wa.me/${companyInfo.whatsapp}?text=${message}`, '_blank');
  };

  const handleCall = () => {
    window.location.href = `tel:${companyInfo.mobile[0]}`;
  };

  return (
    <>
      {/* Call Button - Left Side */}
      <button
        onClick={handleCall}
        className="fixed left-4 bottom-6 z-50 w-14 h-14 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full shadow-lg flex items-center justify-center text-white hover:from-sky-600 hover:to-sky-700 transition-all duration-300 animate-pulse-soft hover:scale-110 group"
        aria-label="Call Now"
      >
        <Phone className="w-6 h-6" />
        <span className="absolute left-16 bg-slate-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Call Now
        </span>
      </button>

      {/* WhatsApp Button - Right Side */}
      <button
        onClick={handleWhatsApp}
        className="fixed right-4 bottom-6 z-50 w-14 h-14 bg-gradient-to-r from-green-500 to-green-600 rounded-full shadow-lg flex items-center justify-center text-white hover:from-green-600 hover:to-green-700 transition-all duration-300 animate-pulse-soft hover:scale-110 group"
        aria-label="WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
        <span className="absolute right-16 bg-slate-800 text-white text-sm px-3 py-1.5 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          WhatsApp
        </span>
      </button>
    </>
  );
};

export default FloatingButtons;
