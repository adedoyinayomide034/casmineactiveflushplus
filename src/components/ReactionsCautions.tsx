import React from 'react';
import { motion } from 'motion/react';
import { AlertTriangle, AlertCircle, ShieldAlert, CheckCircle } from 'lucide-react';
import { REACTIONS_LIST, CAUTIONS_LIST } from '../data/productData';

export const ReactionsCautions: React.FC = () => {
  return (
    <section
      id="precautions"
      className="py-14 sm:py-20 md:py-24 bg-white text-[#1A3A32] border-b border-[#1A3A32]/10 relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-3.5 sm:px-6 lg:px-8">
        {/* Editorial Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mb-10 sm:mb-16"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <span className="bg-[#FEFAE0] text-[#BC6C25] border border-[#BC6C25]/20 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Safety &amp; Advisory
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#BC6C25]">
              Important Notices
            </span>
          </div>

          <h2
            id="precautions-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A3A32] leading-tight mb-4"
          >
            Reactions &amp; Cautions
          </h2>

          <p className="text-base sm:text-lg text-[#1A3A32]/80 font-serif italic">
            Please review the expected body reactions and medical cautions stated explicitly on the official Casmine product flyer before consumption.
          </p>
        </motion.div>

        {/* 2 Editorial High-Visibility Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-8">
          {/* 1. Reactions (May Occur) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            id="reactions-card"
            className="bg-[#F7F8F2] rounded-3xl p-5 sm:p-7 md:p-8 border border-[#1A3A32]/10 shadow-xs flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-4 border-b border-[#1A3A32]/10">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A3A32] text-white flex items-center justify-center flex-shrink-0">
                  <AlertCircle className="w-4 h-4 sm:w-5 sm:h-5 text-[#DDE5B6]" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A3A32]">
                    Reactions (May Occur)
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#4B6F44] font-medium uppercase tracking-wider">
                    Body response to active cleansing
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {REACTIONS_LIST.map((reaction, index) => (
                  <div
                    key={index}
                    id={`reaction-item-${index}`}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white border border-[#1A3A32]/10 shadow-xs flex items-start gap-3"
                  >
                    <span className="font-mono text-xs font-bold text-[#4B6F44] mt-0.5">
                      0{index + 1}
                    </span>
                    <div className="text-xs sm:text-sm font-medium text-[#1A3A32] leading-relaxed">
                      {reaction}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 border-t border-[#1A3A32]/10 flex items-center gap-2 text-xs text-[#4B6F44]">
              <CheckCircle className="w-4 h-4 flex-shrink-0" />
              <span>
                These sensations indicate active bodily detoxification and digestive flushing.
              </span>
            </div>
          </motion.div>

          {/* 2. Cautions (Strict Warnings) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55, delay: 0.15 }}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            id="cautions-card"
            className="bg-[#FEFAE0] rounded-3xl p-5 sm:p-7 md:p-8 border border-[#BC6C25]/20 shadow-xs flex flex-col justify-between text-[#1A3A32]"
          >
            <div>
              <div className="flex items-center gap-3 mb-5 sm:mb-6 pb-4 border-b border-[#BC6C25]/20">
                <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#BC6C25] text-white flex items-center justify-center flex-shrink-0">
                  <ShieldAlert className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#1A3A32]">
                    Cautions &amp; Safety Restrictions
                  </h3>
                  <p className="text-[10px] sm:text-xs text-[#BC6C25] font-medium uppercase tracking-wider">
                    Mandatory Flyer Guidelines
                  </p>
                </div>
              </div>

              <div className="space-y-2.5 sm:space-y-3">
                {CAUTIONS_LIST.map((caution, index) => (
                  <div
                    key={index}
                    id={`caution-item-${index}`}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/80 border border-[#BC6C25]/20 shadow-xs flex items-start gap-3"
                  >
                    <span className="w-5 h-5 rounded-full bg-[#BC6C25] text-white flex items-center justify-center font-bold text-[10px] flex-shrink-0 mt-0.5">
                      !
                    </span>
                    <div className="text-xs sm:text-sm font-bold text-[#604828] leading-relaxed">
                      {caution}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-5 sm:mt-6 pt-4 border-t border-[#BC6C25]/20 flex items-center gap-2 text-xs text-[#604828]">
              <AlertTriangle className="w-4 h-4 text-[#BC6C25] flex-shrink-0" />
              <span>
                Please strictly observe all product cautions before purchase and consumption.
              </span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

