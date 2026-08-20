import React from 'react';
import { motion } from 'motion/react';
import {
  Sparkles,
  Activity,
  RefreshCw,
  Heart,
  Zap,
  ShieldCheck,
  Smile,
  Flame,
  TrendingDown,
} from 'lucide-react';
import { NINE_BENEFITS } from '../data/productData';

export const KeyBenefits: React.FC = () => {
  const getBenefitIcon = (iconName: string) => {
    switch (iconName) {
      case 'Sparkles':
        return <Sparkles className="w-4 h-4 text-[#2D6A4F]" />;
      case 'Activity':
        return <Activity className="w-4 h-4 text-[#2D6A4F]" />;
      case 'RefreshCw':
        return <RefreshCw className="w-4 h-4 text-[#2D6A4F]" />;
      case 'Heart':
        return <Heart className="w-4 h-4 text-[#2D6A4F]" />;
      case 'Zap':
        return <Zap className="w-4 h-4 text-[#2D6A4F]" />;
      case 'ShieldCheck':
        return <ShieldCheck className="w-4 h-4 text-[#2D6A4F]" />;
      case 'Smile':
        return <Smile className="w-4 h-4 text-[#2D6A4F]" />;
      case 'Flame':
        return <Flame className="w-4 h-4 text-[#2D6A4F]" />;
      case 'TrendingDown':
      default:
        return <TrendingDown className="w-4 h-4 text-[#2D6A4F]" />;
    }
  };

  return (
    <section
      id="benefits"
      className="py-14 sm:py-20 md:py-24 bg-white text-[#1A3A32] border-b border-[#1A3A32]/10 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="bg-[#DDE5B6] text-[#1A3A32] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Health Advantages
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#4B6F44]">
              Flyer Benefits
            </span>
          </div>

          <h2
            id="benefits-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A3A32] leading-tight mb-4"
          >
            9 Key Health Benefits
          </h2>

          <p className="text-sm sm:text-base md:text-lg text-[#1A3A32]/80 font-serif italic">
            Every bottle of Casmine Active Flush Plus is formulated to deliver comprehensive digestive and body wellness benefits as featured in the product flyer.
          </p>
        </motion.div>

        {/* Responsive Grid: 3 cols desktop, 2 cols tablet, 1 col mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {NINE_BENEFITS.map((benefit, index) => (
            <motion.div
              key={benefit.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-20px' }}
              transition={{ duration: 0.45, delay: (index % 3) * 0.1 }}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              id={`benefit-card-${benefit.id}`}
              className="bg-[#F7F8F2] hover:bg-white rounded-3xl p-5 sm:p-6 md:p-7 border border-[#1A3A32]/10 hover:border-[#2D6A4F] shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-default"
            >
              <div>
                {/* Header Row with Number Badge & Icon */}
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-[#1A3A32]/10">
                  <div className="w-8 h-8 rounded-full bg-white group-hover:bg-[#DDE5B6] flex items-center justify-center border border-[#1A3A32]/10 transition-colors">
                    {getBenefitIcon(benefit.iconName)}
                  </div>
                  <span className="text-xs font-bold font-mono tracking-wider text-[#1A3A32]/60 group-hover:text-[#1A3A32]">
                    [ 0{benefit.id} ]
                  </span>
                </div>

                {/* Benefit Title */}
                <h3 className="text-sm sm:text-base font-bold text-[#1A3A32] leading-snug mb-2 font-sans">
                  {benefit.title}
                </h3>

                {/* Supporting description */}
                <p className="text-xs text-[#1A3A32]/70 leading-relaxed font-sans">
                  {benefit.description}
                </p>
              </div>

              {/* Bottom Subtle Indicator */}
              <div className="mt-4 sm:mt-5 pt-3 border-t border-[#1A3A32]/10 flex items-center text-[10px] font-bold uppercase tracking-wider text-[#4B6F44]">
                <span>Verified Benefit</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Editorial Bottom Banner */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 sm:mt-16 bg-[#1A3A32] rounded-3xl p-5 sm:p-8 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4 sm:gap-6 shadow-sm"
        >
          <div>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDE5B6] block mb-1">
              Holistic Bodily Cleansing
            </span>
            <h3 className="text-xl sm:text-2xl font-serif text-white font-normal">
              Cleanse • Detox • Refresh • Revive
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-white/80 max-w-md italic font-serif">
            "For a cleaner system, better health and a more active you!"
          </p>
        </motion.div>
      </div>
    </section>
  );
};

