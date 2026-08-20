import React from 'react';
import { Phone, MessageCircle, ShieldCheck, ArrowUp, Leaf } from 'lucide-react';
import { BRAND_INFO, PHONE_CONTACTS, ASSETS } from '../data/productData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-[#1A3A32] text-[#F7F8F2] border-t border-[#1A3A32]">
      {/* Top Flyer Highlights Bar */}
      <div className="border-b border-white/10 px-4 sm:px-8 py-3 bg-[#132d26] text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-[#DDE5B6]">
          <span>Supports Liver &amp; Kidney Health</span>
          <span className="hidden sm:inline">•</span>
          <span>Aids Digestion &amp; Reduces Bloating</span>
          <span className="hidden sm:inline">•</span>
          <span>Burns Excess Weight</span>
          <span className="hidden sm:inline">•</span>
          <span>100% Plant Based</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          {/* Brand Col */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden border border-white/30 bg-white flex items-center justify-center">
                <img
                  src={ASSETS.casmineLogo}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('logo.png')) {
                      target.src = '/logo.png';
                    }
                  }}
                  alt="Casmine Logo"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div>
                <span className="text-lg font-serif font-bold text-white tracking-tight">
                  CASMINE
                </span>
                <p className="text-[10px] font-bold text-[#DDE5B6] tracking-widest uppercase">
                  Active Flush Plus
                </p>
              </div>
            </div>

            <p className="text-xs text-white/80 leading-relaxed max-w-sm font-serif italic">
              {BRAND_INFO.subheading} — A powerful natural botanical drink designed to cleanse, detoxify, refresh, and revive your body.
            </p>

            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[10px] font-bold uppercase tracking-wider text-[#DDE5B6]">
              <Leaf className="w-3 h-3" />
              <span>{BRAND_INFO.motto}</span>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#DDE5B6]">
              Navigation
            </h4>
            <ul className="space-y-2 text-xs font-medium text-white/80">
              <li>
                <a href="#home" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors">
                  About Product
                </a>
              </li>
              <li>
                <a href="#benefits" className="hover:text-white transition-colors">
                  9 Key Benefits
                </a>
              </li>
              <li>
                <a href="#how-to-use" className="hover:text-white transition-colors">
                  How To Use (Dosage)
                </a>
              </li>
              <li>
                <a href="#precautions" className="hover:text-white transition-colors">
                  Safety &amp; Cautions
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-white transition-colors">
                  Contact / Order
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-[10px] font-bold uppercase tracking-widest text-[#DDE5B6]">
              Customer Care &amp; Inquiries
            </h4>
            <div className="space-y-2 text-xs">
              {PHONE_CONTACTS.map((phone, idx) => (
                <div key={phone.raw} className="flex items-center justify-between py-2 border-b border-white/10">
                  <span className="text-[11px] text-white/70">Line {idx + 1}:</span>
                  <div className="flex items-center gap-2">
                    <a
                      href={`tel:${phone.raw}`}
                      className="font-mono font-bold text-white hover:text-[#DDE5B6] transition-colors py-1"
                    >
                      {phone.display}
                    </a>
                    <a
                      href={phone.whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg bg-white/10 text-[#DDE5B6] hover:text-white hover:bg-white/20 active:scale-95"
                      title="WhatsApp"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="min-h-[44px] inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-white bg-white/10 hover:bg-white/20 px-4 py-2 rounded-full transition-all cursor-pointer active:scale-95"
              >
                <ArrowUp className="w-3.5 h-3.5" />
                <span>Back to Top</span>
              </button>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-10 pt-6 border-t border-white/10 text-[11px] text-white/60 leading-relaxed space-y-2">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-[#DDE5B6] flex-shrink-0 mt-0.5" />
            <p>
              <strong className="text-white">Product Disclaimer:</strong> The information presented on this website is based strictly on the official Casmine Active Flush Plus company product flyer. Customers should follow the stated cautions and usage instructions. Not recommended for pregnant women or individuals with severe ulcers.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-between gap-2 pt-2 text-[10px] uppercase tracking-widest opacity-60">
            <div>
              &copy; {new Date().getFullYear()} Casmine Active Flush Plus. All rights reserved.
            </div>
            <div>
              Pure • Natural • Trusted
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
