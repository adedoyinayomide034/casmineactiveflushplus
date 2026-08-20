import React, { useState } from 'react';
import { X, MessageCircle, ShoppingBag, Check, ArrowRight, Mail, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { PHONE_CONTACTS, BRAND_INFO, FORMSPREE_ENDPOINT } from '../data/productData';

interface QuickInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const QuickInquiryModal: React.FC<QuickInquiryModalProps> = ({ isOpen, onClose }) => {
  const [selectedQuantity, setSelectedQuantity] = useState('1 Bottle (200ml)');
  const [customerName, setCustomerName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [location, setLocation] = useState('');
  const [isSubmittingEmail, setIsSubmittingEmail] = useState(false);
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  if (!isOpen) return null;

  const quantities = [
    { label: '1 Bottle (200ml)', desc: '1 Day Full Cleansing Protocol' },
    { label: '2 Bottles (400ml)', desc: '2 Days Cleanse' },
    { label: '3 Bottles (600ml)', desc: '3 Days Comprehensive Flush' },
    { label: 'Carton / Wholesale', desc: 'Distributor / Family Pack' },
  ];

  // Helper to send to Formspree
  const submitToFormspree = async (channel: string) => {
    try {
      await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Order Type': 'Quick Inquiry Modal',
          'Product Name': 'Casmine Active Flush Plus (200ml)',
          'Quantity Ordered': selectedQuantity,
          'Customer Name': customerName.trim() || 'Not Provided',
          'Phone Number': phoneNumber.trim() || 'Not Provided',
          'Delivery Location': location.trim() || 'Not Provided',
          'Submission Channel': channel,
          _subject: `New Quick Order: ${selectedQuantity} by ${customerName.trim() || 'Customer'} (${phoneNumber.trim() || location.trim() || 'Website Lead'})`,
        }),
      });
      return true;
    } catch (e) {
      console.error('Error logging to Formspree:', e);
      return false;
    }
  };

  const handleSendOrderWhatsApp = async (phoneRaw: string, lineDisplay: string) => {
    // Send in background to Formspree so owner gets email notification immediately
    submitToFormspree(`WhatsApp Order via Line (${lineDisplay})`);

    const international = phoneRaw.startsWith('0') ? '234' + phoneRaw.slice(1) : phoneRaw;
    const msg = `*Order Request for Casmine Active Flush Plus*\n\n*Product:* Casmine Active Flush Plus (200ml)\n*Quantity:* ${selectedQuantity}\n*Customer Name:* ${customerName.trim() || 'Valued Customer'}\n*Phone:* ${phoneNumber.trim() || 'N/A'}\n*Delivery City/Location:* ${location.trim() || 'To be confirmed'}\n\nPlease confirm availability and delivery timeframe. Thank you!`;
    const url = `https://wa.me/${international}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    onClose();
  };

  const handleDirectEmailOrder = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!phoneNumber.trim() && !customerName.trim()) {
      setErrorMessage('Please enter at least your Name or Phone number to submit.');
      return;
    }

    setIsSubmittingEmail(true);
    setErrorMessage(null);

    const success = await submitToFormspree('Direct Website Form Submission');
    setIsSubmittingEmail(false);

    if (success) {
      setEmailSubmitted(true);
    } else {
      setErrorMessage('Could not send message. Please try ordering via WhatsApp lines below.');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        id="quick-order-modal-container"
        className="relative w-full max-w-lg max-h-[92vh] flex flex-col bg-white rounded-3xl shadow-2xl overflow-hidden text-[#1A3A32] border border-[#1A3A32]/10 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Header */}
        <div className="bg-[#1A3A32] p-4 sm:p-5 text-white flex items-center justify-between flex-shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-full bg-[#DDE5B6] text-[#1A3A32] flex items-center justify-center font-bold flex-shrink-0">
              <ShoppingBag className="w-4 h-4 text-[#1A3A32]" />
            </div>
            <div>
              <h3 className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white">Order Casmine Active Flush Plus</h3>
              <p className="text-[10px] text-[#DDE5B6] uppercase tracking-widest">Official Direct Ordering Assistant</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-2 rounded-lg cursor-pointer active:scale-95"
            aria-label="Close modal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 sm:p-6 space-y-4 sm:space-y-5 overflow-y-auto">
          {emailSubmitted ? (
            <div className="bg-[#F7F8F2] border border-[#1A3A32]/10 rounded-2xl p-5 sm:p-6 text-center space-y-3 animate-in fade-in">
              <div className="w-10 h-10 rounded-full bg-[#1A3A32] text-[#DDE5B6] flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <h4 className="text-base font-serif font-bold text-[#1A3A32]">
                Order Details Sent to Sales Team!
              </h4>
              <p className="text-xs text-[#1A3A32]/80">
                Your order request for <strong className="text-[#1A3A32]">{selectedQuantity}</strong> has been emailed directly to our customer support desk.
              </p>
              <div className="pt-2 flex justify-center gap-2">
                <button
                  onClick={onClose}
                  className="min-h-[44px] px-6 py-2.5 rounded-xl bg-[#1A3A32] text-white text-xs font-bold uppercase tracking-wider active:scale-95"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <>
              {errorMessage && (
                <div className="p-3 rounded-xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>{errorMessage}</span>
                </div>
              )}

              {/* Quantity Selector */}
              <div>
                <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-2">
                  Select Desired Quantity:
                </label>
                <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
                  {quantities.map((item) => (
                    <button
                      key={item.label}
                      type="button"
                      onClick={() => setSelectedQuantity(item.label)}
                      className={`p-3 rounded-2xl border text-left transition-all flex flex-col justify-between cursor-pointer active:scale-98 ${
                        selectedQuantity === item.label
                          ? 'border-[#1A3A32] bg-[#F7F8F2] ring-1 ring-[#1A3A32]'
                          : 'border-[#1A3A32]/15 bg-white hover:border-[#1A3A32]/50'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-bold text-[#1A3A32]">{item.label}</span>
                        {selectedQuantity === item.label && (
                          <Check className="w-3.5 h-3.5 text-[#1A3A32]" />
                        )}
                      </div>
                      <span className="text-[10px] text-[#1A3A32]/70 mt-1">{item.desc}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Quick Info Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    placeholder="e.g. Ayomide"
                    className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-[#1A3A32]/15 text-sm focus:outline-none focus:border-[#1A3A32]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="e.g. 08138470024"
                    className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-[#1A3A32]/15 text-sm focus:outline-none focus:border-[#1A3A32]"
                  />
                </div>
                <div>
                  <label className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1">
                    Delivery City
                  </label>
                  <input
                    type="text"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    placeholder="e.g. Lagos / Ibadan"
                    className="w-full min-h-[44px] px-3 py-2 rounded-xl border border-[#1A3A32]/15 text-sm focus:outline-none focus:border-[#1A3A32]"
                  />
                </div>
              </div>

              {/* Dual Submit Options: WhatsApp or Direct Form Submission */}
              <div className="space-y-2 pt-1">
                <span className="block text-[10px] font-bold uppercase tracking-widest text-[#1A3A32]">
                  Order via WhatsApp (Instant Dispatch):
                </span>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {PHONE_CONTACTS.map((contact, idx) => (
                    <button
                      key={contact.raw}
                      onClick={() => handleSendOrderWhatsApp(contact.raw, contact.display)}
                      className="w-full min-h-[44px] py-2.5 px-3.5 rounded-xl bg-[#2D6A4F] hover:bg-[#1f4a37] text-white text-xs font-bold uppercase tracking-wider shadow-xs flex items-center justify-between transition-all cursor-pointer active:scale-98"
                    >
                      <div className="flex items-center gap-1.5">
                        <MessageCircle className="w-3.5 h-3.5 text-[#DDE5B6]" />
                        <span>Line {idx + 1} ({contact.display})</span>
                      </div>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  ))}
                </div>

                <button
                  type="button"
                  onClick={handleDirectEmailOrder}
                  disabled={isSubmittingEmail}
                  className="w-full min-h-[44px] mt-2 py-2.5 px-4 rounded-xl bg-[#1A3A32] hover:bg-[#2A4A42] text-white text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all cursor-pointer disabled:opacity-75 active:scale-98"
                >
                  <Send className="w-3.5 h-3.5 text-[#DDE5B6]" />
                  <span>{isSubmittingEmail ? 'Submitting Order to Email...' : 'Submit Order Directly to Customer Support'}</span>
                </button>
              </div>

              {/* Direct phone call alternative */}
              <div className="pt-2 border-t border-[#1A3A32]/10 flex flex-wrap items-center justify-between gap-2 text-xs text-[#1A3A32]/80">
                <span className="text-[11px]">Direct phone call?</span>
                <div className="flex flex-wrap gap-2">
                  {PHONE_CONTACTS.map((contact) => (
                    <a
                      key={contact.raw}
                      href={`tel:${contact.raw}`}
                      className="font-mono font-bold underline hover:text-[#4B6F44] py-1"
                    >
                      {contact.display}
                    </a>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};
