import React, { useState } from 'react';
import { MessageCircle, X, ArrowUpRight, Sparkles } from 'lucide-react';
import { PHONE_CONTACTS } from '../data/productData';

export const WhatsAppFloating: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const defaultMessage = 'Hello Casmine Active Flush Plus, I would like to make an enquiry about your product.';

  const handleOpenChat = (rawNumber: string) => {
    const international = rawNumber.startsWith('0') ? '234' + rawNumber.slice(1) : rawNumber;
    const url = `https://wa.me/${international}?text=${encodeURIComponent(defaultMessage)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      {/* Popover Card */}
      {isOpen && (
        <div
          id="whatsapp-popover-card"
          className="mb-3 w-[calc(100vw-2rem)] sm:w-80 max-w-sm bg-white rounded-3xl shadow-xl border border-[#1A3A32]/10 overflow-hidden text-[#1A3A32] animate-in fade-in slide-in-from-bottom-5 duration-200"
        >
          {/* Header */}
          <div className="bg-[#1A3A32] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-[#DDE5B6] text-[#1A3A32] flex items-center justify-center font-bold">
                <MessageCircle className="w-4 h-4 text-[#1A3A32]" />
              </div>
              <div>
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Casmine Support
                </h4>
                <p className="text-[10px] text-[#DDE5B6] flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#DDE5B6] animate-pulse"></span>
                  Official WhatsApp Assistance
                </p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white/60 hover:text-white p-1.5 rounded-lg active:scale-95"
              aria-label="Close WhatsApp chat drawer"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 bg-[#F7F8F2] space-y-3">
            <div className="p-3 bg-white rounded-2xl border border-[#1A3A32]/10 text-xs text-[#1A3A32]/80 leading-relaxed shadow-xs">
              <p className="font-bold text-[11px] uppercase tracking-wider text-[#1A3A32] mb-1">
                Direct Contact Lines
              </p>
              Select an official line below to chat directly with our team regarding orders, dosage, and delivery.
            </div>

            <div className="space-y-2">
              {PHONE_CONTACTS.map((contact, idx) => (
                <button
                  key={contact.raw}
                  id={`floating-whatsapp-contact-${idx}`}
                  onClick={() => handleOpenChat(contact.raw)}
                  className="w-full min-h-[44px] p-3 rounded-2xl bg-white hover:bg-[#DDE5B6]/30 border border-[#1A3A32]/10 hover:border-[#1A3A32] flex items-center justify-between text-left transition-all group shadow-xs cursor-pointer active:scale-98"
                >
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-xl bg-[#F7F8F2] text-[#1A3A32] flex items-center justify-center group-hover:bg-[#1A3A32] group-hover:text-white transition-colors">
                      <MessageCircle className="w-3.5 h-3.5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono font-bold text-[#1A3A32]">
                        Line {idx + 1}: {contact.display}
                      </div>
                      <div className="text-[10px] text-[#1A3A32]/60 uppercase tracking-wider">
                        WhatsApp Representative
                      </div>
                    </div>
                  </div>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-[#1A3A32]" />
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        id="floating-whatsapp-trigger-btn"
        onClick={() => setIsOpen(!isOpen)}
        className="group min-h-[48px] relative flex items-center gap-2 px-3.5 sm:px-4 py-3 rounded-full bg-[#1A3A32] hover:bg-[#2D6A4F] text-white shadow-lg border border-white/20 transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
        aria-label="Open WhatsApp Chat"
      >
        <MessageCircle className="w-5 h-5 text-[#DDE5B6]" />
        <span className="hidden sm:inline-block text-xs font-bold uppercase tracking-widest text-white">
          WhatsApp Us
        </span>
      </button>
    </div>
  );
};
