import React from 'react';
import { motion } from 'motion/react';
import { Leaf, Sparkles, ShieldCheck, Shield, HeartPulse, Check, Droplet, Sun, Moon } from 'lucide-react';
import { BRAND_INFO, PRODUCT_QUALITIES, ASSETS } from '../data/productData';

export const AboutProduct: React.FC = () => {
  const getQualityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Leaf':
        return <Leaf className="w-5 h-5 text-[#2D6A4F]" />;
      case 'Sparkles':
        return <Sparkles className="w-5 h-5 text-[#4B6F44]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-5 h-5 text-[#2D6A4F]" />;
      case 'Shield':
        return <Shield className="w-5 h-5 text-[#4B6F44]" />;
      case 'HeartPulse':
      default:
        return <HeartPulse className="w-5 h-5 text-[#2D6A4F]" />;
    }
  };

  return (
    <section id="about" className="py-14 sm:py-20 md:py-24 bg-[#F7F8F2] text-[#1A3A32] border-b border-[#1A3A32]/10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-5xl mb-10 sm:mb-16"
        >
          <div className="max-w-3xl flex-1">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="bg-[#DDE5B6] text-[#1A3A32] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Product Overview
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#4B6F44]">
                Casmine Formulation
              </span>
            </div>

            <h2
              id="about-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A3A32] leading-tight mb-4"
            >
              About Active Flush Plus
            </h2>

            <p
              id="about-main-text"
              className="text-sm sm:text-base md:text-lg text-[#1A3A32]/80 leading-relaxed font-serif italic"
            >
              {BRAND_INFO.aboutText}
            </p>
          </div>

          <motion.div
            whileHover={{ scale: 1.04 }}
            className="w-28 h-32 xs:w-36 xs:h-40 sm:w-40 sm:h-44 md:w-48 md:h-52 rounded-3xl overflow-hidden border-2 border-[#1A3A32]/15 shadow-md bg-white p-2 flex-shrink-0 self-center sm:self-center"
          >
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#FEFAE0]/40 to-white flex items-center justify-center p-2">
              <img
                src={ASSETS.productBottle}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('casmine_bottle.jpg')) {
                    target.src = '/casmine_bottle.jpg';
                  }
                }}
                alt="Casmine Active Flush Plus Product"
                className="w-full h-full object-contain drop-shadow-sm mobile-crisp-img"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* 2-Column Editorial Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="bg-white rounded-3xl p-5 sm:p-7 md:p-8 shadow-xs border border-[#1A3A32]/10 space-y-5">
              <div className="flex items-center justify-between pb-3 border-b border-[#1A3A32]/10">
                <h3 className="text-xl font-serif font-bold text-[#1A3A32]">
                  Pure Botanical Standards
                </h3>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#4B6F44]">
                  100% Natural
                </span>
              </div>

              <p className="text-xs sm:text-sm text-[#1A3A32]/80 leading-relaxed">
                Active Flush Plus is crafted with meticulous attention to wholesome wellness. Every 200ml bottle is formulated to naturally cleanse, detoxify, refresh, and revive your digestive and metabolic systems.
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DDE5B6] flex items-center justify-center text-[#1A3A32] mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#1A3A32]" />
                  </div>
                  <div>
                    <span className="font-bold text-xs uppercase tracking-wider text-[#1A3A32]">
                      Natural Detoxification:
                    </span>
                    <span className="text-xs text-[#1A3A32]/80 ml-1">
                      Designed to help release accumulated bodily waste and toxins.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DDE5B6] flex items-center justify-center text-[#1A3A32] mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#1A3A32]" />
                  </div>
                  <div>
                    <span className="font-bold text-xs uppercase tracking-wider text-[#1A3A32]">
                      Healthy Digestion:
                    </span>
                    <span className="text-xs text-[#1A3A32]/80 ml-1">
                      Supports gut comfort, reduced bloating, and smoother bowel movements.
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#DDE5B6] flex items-center justify-center text-[#1A3A32] mt-0.5 flex-shrink-0">
                    <Check className="w-3 h-3 text-[#1A3A32]" />
                  </div>
                  <div>
                    <span className="font-bold text-xs uppercase tracking-wider text-[#1A3A32]">
                      Overall Vitality:
                    </span>
                    <span className="text-xs text-[#1A3A32]/80 ml-1">
                      Promotes daily lightness, energy, and a cleaner internal environment.
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Serving Breakdown Card */}
            <div className="bg-[#1A3A32] text-white rounded-3xl p-5 sm:p-6 shadow-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-[#DDE5B6] flex-shrink-0">
                  <Droplet className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] uppercase font-bold text-[#DDE5B6] tracking-widest">
                    Bottle Volume
                  </div>
                  <div className="text-sm sm:text-base font-serif font-bold text-white">
                    200ml Total Liquid
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-[11px] font-bold uppercase tracking-wider">
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <Sun className="w-3.5 h-3.5 text-[#DDE5B6]" />
                  <span>100ml Morning</span>
                </div>
                <div className="flex items-center gap-1.5 bg-white/10 px-3 py-1.5 rounded-full">
                  <Moon className="w-3.5 h-3.5 text-[#DDE5B6]" />
                  <span>100ml Night</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-sm border border-[#1A3A32]/10 bg-white">
              <img
                src={ASSETS.naturalBotanicals}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('casmine_bottle.jpg')) {
                    target.src = '/casmine_bottle.jpg';
                  }
                }}
                alt="Natural botanical ingredients for Casmine Active Flush Plus"
                className="w-full h-64 xs:h-72 sm:h-80 md:h-96 object-cover mobile-crisp-img"
                referrerPolicy="no-referrer"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1A3A32]/90 via-[#1A3A32]/30 to-transparent flex flex-col justify-end p-5 sm:p-6 md:p-8 text-white">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDE5B6] mb-1">
                  100% Herbal &amp; Botanical Purity
                </span>
                <p className="text-lg sm:text-xl md:text-2xl font-serif font-normal">
                  "Pure • Natural • Trusted"
                </p>
                <p className="text-xs text-white/80 mt-1 italic">
                  Gentle yet powerful cleansing synergy straight from nature.
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* 5 Core Product Qualities Cards */}
        <div>
          <div className="flex items-center justify-between mb-6 pb-2 border-b border-[#1A3A32]/10">
            <h3 className="text-xl font-serif font-bold text-[#1A3A32]">
              Core Product Qualities
            </h3>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#4B6F44]">
              Flyer Standards
            </span>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {PRODUCT_QUALITIES.map((quality, index) => (
              <motion.div
                key={quality.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                id={`quality-card-${quality.id}`}
                className="bg-white rounded-2xl p-5 border border-[#1A3A32]/10 shadow-xs hover:border-[#2D6A4F] hover:shadow-sm transition-all flex flex-col justify-between group cursor-default"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-[#F7F8F2] group-hover:bg-[#DDE5B6] flex items-center justify-center mb-3 transition-colors">
                    {getQualityIcon(quality.iconName)}
                  </div>
                  <h4 className="text-sm font-bold uppercase tracking-wider text-[#1A3A32] mb-1">
                    {quality.title}
                  </h4>
                  <p className="text-xs text-[#1A3A32]/70 leading-relaxed">
                    {quality.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

