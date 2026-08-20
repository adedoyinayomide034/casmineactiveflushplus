import React from 'react';
import { Phone, MessageCircle, ArrowRight, ShieldCheck, Check, Sparkles } from 'lucide-react';
import { BRAND_INFO, PHONE_CONTACTS, ASSETS } from '../data/productData';

interface HeroProps {
  onOpenOrderModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenOrderModal }) => {
  const primaryWhatsAppUrl = PHONE_CONTACTS[0].whatsappUrl;

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById('contact');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative bg-[#F7F8F2] text-[#1A3A32] pt-8 pb-16 md:pt-14 md:pb-24 border-b border-[#1A3A32]/10 overflow-hidden"
    >
      {/* Editorial Decorative Watermark/Dot pattern */}
      <div className="absolute top-0 right-0 w-96 h-96 opacity-15 pointer-events-none editorial-pattern" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          {/* Left Editorial Section */}
          <div className="lg:col-span-6 space-y-6">
            {/* Pill Badges */}
            <div className="flex flex-wrap items-center gap-1.5 sm:gap-2">
              <span
                id="hero-badge-natural"
                className="bg-[#DDE5B6] text-[#1A3A32] px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-xs"
              >
                100% Natural
              </span>
              <span
                id="hero-badge-size"
                className="bg-[#FEFAE0] text-[#1A3A32] border border-[#1A3A32]/10 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider"
              >
                200ml Bottle
              </span>
              <span
                id="hero-badge-plant"
                className="bg-white text-[#1A3A32] border border-[#1A3A32]/10 px-3 py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider"
              >
                Plant Based
              </span>
            </div>

            {/* Editorial Title with Large Fitted Product Image Beside */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-5 sm:gap-6 lg:gap-8 my-2">
              <div className="space-y-1.5 flex-1">
                <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-[#4B6F44] block">
                  Natural Detox &amp; Wellness Drink
                </span>
                <h1
                  id="hero-main-title"
                  className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif text-[#1A3A32] leading-[1.05] sm:leading-[0.95] tracking-tight font-normal"
                >
                  Casmine
                  <br />
                  <span className="text-[#4B6F44] italic font-normal">Active Flush</span>
                  <br />
                  Plus.
                </h1>
              </div>

              {/* High-Impact Product Bottle Showcase */}
              <div className="flex-shrink-0 flex items-center justify-center self-center sm:self-center">
                <div className="relative group w-44 h-52 xs:w-48 xs:h-56 sm:w-56 sm:h-64 md:w-64 md:h-76 lg:w-72 lg:h-84 rounded-3xl overflow-hidden border-2 border-[#1A3A32]/20 shadow-lg bg-gradient-to-b from-white via-[#FEFAE0]/40 to-[#F7F8F2] p-2.5 sm:p-3 hover:border-[#2D6A4F] hover:shadow-xl transition-all duration-300">
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-white/70 flex items-center justify-center relative p-2">
                    <img
                      id="hero-title-bottle-img"
                      src={ASSETS.productBottle}
                      onError={(e) => {
                        const target = e.currentTarget;
                        if (!target.src.includes('casmine_bottle.jpg')) {
                          target.src = '/casmine_bottle.jpg';
                        }
                      }}
                      alt="Casmine Active Flush Plus Bottle"
                      className="w-full h-full object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-[#2D6A4F] text-white px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider shadow-sm">
                    200ml
                  </div>
                  <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 bg-[#1A3A32]/95 backdrop-blur-xs rounded-xl py-1 sm:py-1.5 px-2.5 sm:px-3 text-center text-white shadow-md">
                    <span className="text-[9px] sm:text-[10px] md:text-xs font-bold uppercase tracking-wider text-[#DDE5B6] block">
                      Active Flush Plus
                    </span>
                    <span className="text-[8px] sm:text-[9px] text-white/80 block font-serif italic">
                      Natural Herbal Drink
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Supporting Text */}
            <p
              id="hero-overview-description"
              className="text-xs sm:text-sm md:text-base text-[#1A3A32]/85 max-w-lg leading-relaxed italic font-serif"
            >
              {BRAND_INFO.overview}
            </p>

            {/* Editorial Hairline Divider Strip */}
            <div className="flex items-center gap-3 sm:gap-4 py-2 border-y border-[#1A3A32]/10 max-w-lg">
              <div className="text-[9px] sm:text-[10px] font-bold uppercase tracking-widest flex flex-col text-[#1A3A32]">
                <span className="text-[#4B6F44]">Cleanse • Detox</span>
                <span>Refresh • Revive</span>
              </div>
              <div className="h-7 sm:h-8 w-[1px] bg-[#1A3A32]/20"></div>
              <div className="text-[11px] sm:text-xs font-semibold uppercase tracking-wider text-[#1A3A32]/80">
                Pure • Natural • Trusted
              </div>
            </div>

            {/* Action Buttons: Responsive Full-Width/Grid on Mobile, Flex on Desktop */}
            <div className="grid grid-cols-1 xs:grid-cols-3 sm:flex sm:flex-wrap gap-2.5 sm:gap-3 pt-2">
              <a
                id="hero-cta-whatsapp-us"
                href={primaryWhatsAppUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-[44px] bg-[#2D6A4F] hover:bg-[#1f4a37] text-white flex items-center justify-center gap-2 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-sm hover:shadow-md active:scale-95 transition-all cursor-pointer text-center"
              >
                <MessageCircle className="w-4 h-4 text-emerald-200" />
                <span>WhatsApp Us</span>
              </a>

              <button
                id="hero-cta-contact-us"
                onClick={scrollToContact}
                className="min-h-[44px] border border-[#1A3A32] text-[#1A3A32] hover:bg-[#1A3A32] hover:text-white active:scale-95 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Contact Us
              </button>

              <button
                id="hero-cta-order-now"
                onClick={onOpenOrderModal}
                className="min-h-[44px] bg-[#FEFAE0] text-[#1A3A32] border border-[#BC6C25]/20 hover:bg-[#faeed0] active:scale-95 px-5 py-3 rounded-xl text-xs font-bold uppercase tracking-wider transition-all cursor-pointer text-center"
              >
                Quick Order
              </button>
            </div>

            {/* Direct Phone Call Indicator */}
            <div className="flex flex-wrap items-center gap-2 text-xs text-[#1A3A32]/70 pt-1">
              <div className="flex items-center gap-1.5 font-semibold text-[#1A3A32]">
                <Phone className="w-3.5 h-3.5 text-[#4B6F44]" />
                <span>Direct Lines:</span>
              </div>
              <div className="flex flex-wrap gap-2 font-mono text-xs">
                {PHONE_CONTACTS.map((phone, idx) => (
                  <a
                    key={phone.raw}
                    href={`tel:${phone.raw}`}
                    className="hover:text-[#4B6F44] underline font-medium bg-white/60 px-2 py-0.5 rounded-md border border-[#1A3A32]/10"
                  >
                    {phone.display}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section: Editorial Bento Product Showcase */}
          <div className="lg:col-span-6 space-y-4">
            {/* Top Product Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-7 shadow-xs border border-[#1A3A32]/10 grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
              <div className="sm:col-span-6 space-y-3">
                <div className="inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-widest text-[#4B6F44]">
                  <div className="w-2 h-2 bg-[#4B6F44] rounded-full"></div>
                  Product Standard
                </div>
                <h3 className="text-xl font-serif font-semibold text-[#1A3A32]">
                  Authentic Botanical Formulation
                </h3>
                <ul className="space-y-2 text-xs font-medium text-[#1A3A32]/90">
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4B6F44] flex-shrink-0" />
                    Plant Based
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4B6F44] flex-shrink-0" />
                    No Artificial Colours
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4B6F44] flex-shrink-0" />
                    No Added Sugar
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#4B6F44] flex-shrink-0" />
                    Preservative Free
                  </li>
                </ul>
              </div>

              {/* Product Visual */}
              <div className="sm:col-span-6 relative rounded-2xl overflow-hidden bg-gradient-to-b from-[#FEFAE0]/40 to-[#F7F8F2] border border-[#1A3A32]/10 aspect-square flex items-center justify-center p-3 sm:p-4 group">
                <img
                  id="hero-product-image"
                  src={ASSETS.productBottle}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('casmine_bottle.jpg')) {
                      target.src = '/casmine_bottle.jpg';
                    }
                  }}
                  alt="Casmine Active Flush Plus 200ml Bottle"
                  className="w-full h-full object-contain drop-shadow-md rounded-xl group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-3 left-3 bg-[#1A3A32] text-white px-2.5 py-0.5 rounded-full text-[9px] font-bold uppercase tracking-wider">
                  200ml
                </div>
              </div>
            </div>

            {/* Bottom 2-Card Editorial Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Daily Protocol Card */}
              <div className="bg-[#2D6A4F] text-white rounded-3xl p-6 shadow-xs flex flex-col justify-between">
                <div>
                  <h3 className="text-xs font-bold uppercase tracking-widest mb-3 text-emerald-100">
                    Daily Usage Protocol
                  </h3>
                  <div className="space-y-2 text-[11px] leading-relaxed text-white/90">
                    <div className="flex gap-2">
                      <span className="font-bold text-[#DDE5B6]">01</span>
                      <span>Take 100ml in the morning.</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-[#DDE5B6]">02</span>
                      <span>Take 100ml at night before bed.</span>
                    </div>
                    <div className="flex gap-2">
                      <span className="font-bold text-[#DDE5B6]">03</span>
                      <span>Shake slightly. Open gently.</span>
                    </div>
                  </div>
                </div>
                <div className="mt-4 pt-3 border-t border-white/15 text-[10px] font-bold uppercase tracking-wider text-[#DDE5B6]">
                  Refrigerate after opening
                </div>
              </div>

              {/* Cautions Notice Card */}
              <div className="bg-[#FEFAE0] border border-[#BC6C25]/20 rounded-3xl p-6 flex flex-col justify-between text-[#1A3A32]">
                <div>
                  <h3 className="text-xs font-bold uppercase text-[#BC6C25] mb-2 flex items-center gap-1.5 font-sans tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-[#BC6C25]"></span>
                    Cautions &amp; Notice
                  </h3>
                  <div className="text-[11px] leading-tight space-y-2 text-[#604828]">
                    <p>
                      <strong>Reactions:</strong> May cause feeling of nausea or frequent trips to the restroom.
                    </p>
                    <p>
                      <strong>Precautions:</strong> Do not use if you have severe ulcers. Not recommended for pregnant women.
                    </p>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-[#BC6C25]/20">
                  <div className="text-[9px] font-bold uppercase tracking-wider text-[#604828]">
                    Order Verification
                  </div>
                  <div className="text-xs font-bold text-[#1A3A32]">
                    09164892077 | 08138470024
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
