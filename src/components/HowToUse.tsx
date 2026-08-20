import React from 'react';
import { Sun, Moon, RotateCcw, Unlock, ThermometerSnowflake, Droplet, Clock, CheckCircle2 } from 'lucide-react';
import { USAGE_STEPS, USAGE_CARE_INSTRUCTIONS, BRAND_INFO, ASSETS } from '../data/productData';

export const HowToUse: React.FC = () => {
  return (
    <section id="how-to-use" className="py-16 sm:py-24 bg-[#F7F8F2] text-[#1A3A32] border-b border-[#1A3A32]/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 max-w-5xl mb-12 sm:mb-16">
          <div className="max-w-3xl flex-1">
            <div className="inline-flex items-center gap-2 mb-3">
              <span className="bg-[#DDE5B6] text-[#1A3A32] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                Dosage &amp; Protocol
              </span>
              <span className="text-xs font-semibold tracking-widest uppercase text-[#4B6F44]">
                Flyer Guidelines
              </span>
            </div>

            <h2
              id="how-to-use-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A3A32] leading-tight mb-4"
            >
              How To Use Active Flush Plus
            </h2>

            <p className="text-sm sm:text-base md:text-lg text-[#1A3A32]/80 font-serif italic">
              Follow the simple daily protocol directly from the Casmine flyer to achieve optimal cleansing and wellness results.
            </p>
          </div>

          <div className="w-28 h-32 xs:w-36 xs:h-40 sm:w-40 sm:h-44 md:w-48 md:h-52 rounded-3xl overflow-hidden border-2 border-[#1A3A32]/15 shadow-md bg-white p-2 flex-shrink-0 self-center sm:self-center">
            <div className="w-full h-full rounded-2xl overflow-hidden bg-gradient-to-b from-[#FEFAE0]/40 to-white flex items-center justify-center p-2">
              <img
                src={ASSETS.productBottle}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('casmine_bottle.jpg')) {
                    target.src = '/casmine_bottle.jpg';
                  }
                }}
                alt="Casmine Active Flush Plus Bottle"
                className="w-full h-full object-contain drop-shadow-sm"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Product Bottle Visual & Size Card */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full max-w-sm bg-white rounded-3xl p-5 sm:p-6 shadow-xs border border-[#1A3A32]/10 text-center">
              {/* Size Badge */}
              <div className="absolute top-4 right-4 bg-[#1A3A32] text-white px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
                {BRAND_INFO.volume}
              </div>

              <div className="relative aspect-square w-full rounded-2xl overflow-hidden mb-5 bg-gradient-to-b from-[#FEFAE0]/40 to-[#F7F8F2] border border-[#1A3A32]/10 p-3 flex items-center justify-center">
                <img
                  src={ASSETS.productBottle}
                  onError={(e) => {
                    const target = e.currentTarget;
                    if (!target.src.includes('casmine_bottle.jpg')) {
                      target.src = '/casmine_bottle.jpg';
                    }
                  }}
                  alt="Casmine Active Flush Plus 200ml Bottle"
                  className="w-full h-full object-contain drop-shadow-md rounded-xl"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-3 inset-x-3 sm:bottom-4 sm:inset-x-4 bg-[#1A3A32]/90 backdrop-blur-xs rounded-xl py-1.5 sm:py-2 text-white">
                  <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-[#DDE5B6]">
                    2 Servings per 200ml Bottle
                  </span>
                </div>
              </div>

              <h3 className="text-base sm:text-lg font-serif font-bold text-[#1A3A32]">
                Casmine Active Flush Plus
              </h3>
              <p className="text-xs text-[#1A3A32]/70 mt-1 font-medium">
                1 Bottle (200ml) = 1 Full Day Protocol (Morning &amp; Night)
              </p>

              {/* Volume Split Graphic */}
              <div className="mt-5 p-3.5 sm:p-4 bg-[#F7F8F2] rounded-2xl border border-[#1A3A32]/10 space-y-2">
                <div className="flex justify-between text-[11px] sm:text-xs font-bold uppercase tracking-wider text-[#1A3A32]">
                  <span className="flex items-center gap-1">
                    <Sun className="w-3.5 h-3.5 text-[#2D6A4F]" /> Morning 100ml
                  </span>
                  <span className="flex items-center gap-1">
                    <Moon className="w-3.5 h-3.5 text-[#2D6A4F]" /> Night 100ml
                  </span>
                </div>
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden flex">
                  <div className="w-1/2 bg-[#2D6A4F] border-r border-white"></div>
                  <div className="w-1/2 bg-[#1A3A32]"></div>
                </div>
                <p className="text-[10px] text-[#1A3A32]/70 italic text-center">
                  Equal 100ml split for daytime and nighttime bio-rhythm cleansing.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Step-by-Step Instructions and Important Care */}
          <div className="lg:col-span-7 space-y-5 sm:space-y-6">
            {/* Step 1 & Step 2 Primary Cards */}
            <div className="space-y-3.5 sm:space-y-4">
              {USAGE_STEPS.map((step) => (
                <div
                  key={step.stepNumber}
                  id={`usage-step-${step.stepNumber}`}
                  className="bg-white rounded-3xl p-5 sm:p-6 border border-[#1A3A32]/10 hover:border-[#2D6A4F] shadow-xs transition-all flex flex-col sm:flex-row items-start gap-3.5 sm:gap-4"
                >
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#1A3A32] text-white flex items-center justify-center font-mono font-bold text-xs flex-shrink-0">
                    {step.stepNumber}
                  </div>

                  <div className="flex-1">
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-1">
                      <h4 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-[#1A3A32]">
                        {step.time}
                      </h4>
                      <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-[#DDE5B6] text-[#1A3A32]">
                        {step.dose}
                      </span>
                    </div>

                    <p className="text-sm sm:text-base font-serif italic text-[#1A3A32] mb-1">
                      "{step.action}"
                    </p>

                    <p className="text-xs text-[#1A3A32]/75">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottle Handling Instructions */}
            <div className="bg-[#2D6A4F] text-white rounded-3xl p-5 sm:p-6 shadow-xs">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#DDE5B6] mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Important Bottle Handling Instructions
              </h4>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div className="p-3.5 bg-white/10 rounded-2xl text-left">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#DDE5B6] mb-2">
                    <RotateCcw className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Shake Slightly</h5>
                  <p className="text-[10px] text-white/80 leading-relaxed">
                    Shake slightly before use to evenly distribute the botanicals.
                  </p>
                </div>

                <div className="p-3.5 bg-white/10 rounded-2xl text-left">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#DDE5B6] mb-2">
                    <Unlock className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Open Gently</h5>
                  <p className="text-[10px] text-white/80 leading-relaxed">
                    Open gently to preserve natural freshness and bottle seal.
                  </p>
                </div>

                <div className="p-3.5 bg-white/10 rounded-2xl text-left">
                  <div className="w-7 h-7 rounded-lg bg-white/10 flex items-center justify-center text-[#DDE5B6] mb-2">
                    <ThermometerSnowflake className="w-3.5 h-3.5" />
                  </div>
                  <h5 className="text-xs font-bold text-white mb-1 uppercase tracking-wider">Refrigerate</h5>
                  <p className="text-[10px] text-white/80 leading-relaxed">
                    Refrigerate after opening to preserve bottle potency.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
