import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  Phone,
  MessageCircle,
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  ShoppingBag,
} from 'lucide-react';
import { BRAND_INFO, PHONE_CONTACTS, FORMSPREE_ENDPOINT } from '../data/productData';
import { ContactFormData } from '../types';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phoneNumber: '',
    emailAddress: '',
    subject: 'Order & Product Enquiry',
    quantity: '1 Bottle (200ml)',
    contactMethod: 'whatsapp',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);

  const validate = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full Name is required';
    } else if (formData.fullName.trim().length < 2) {
      newErrors.fullName = 'Please enter a valid full name';
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = 'Phone number is required';
    } else if (formData.phoneNumber.trim().length < 8) {
      newErrors.phoneNumber = 'Please enter a valid phone number';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Please provide your message or order details';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof ContactFormData]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
    if (serverError) {
      setServerError(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    setServerError(null);

    try {
      // Send submission payload to Formspree endpoint
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          'Customer Name': formData.fullName,
          'Phone Number': formData.phoneNumber,
          'Email Address': formData.emailAddress.trim() || 'Not Provided',
          'Inquiry Subject': formData.subject,
          'Product Quantity': formData.quantity,
          'Preferred Contact Method': formData.contactMethod,
          'Message / Details': formData.message,
          _subject: `New Casmine Active Flush Plus Inquiry from ${formData.fullName}`,
          _replyto: formData.emailAddress.trim() || undefined,
        }),
      });

      if (response.ok) {
        setSubmitSuccess(true);
      } else {
        const errorData = await response.json().catch(() => null);
        if (errorData && errorData.errors && errorData.errors.length > 0) {
          setServerError(errorData.errors.map((err: { message: string }) => err.message).join(', '));
        } else {
          setServerError('Failed to submit form to email. Please try again or reach us on WhatsApp.');
        }
      }
    } catch (err) {
      console.error('Formspree submission error:', err);
      setServerError('A network error occurred. Please check your connection or contact us via WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSendViaWhatsApp = () => {
    if (!formData.fullName.trim() && !formData.phoneNumber.trim()) {
      const genericUrl = `https://wa.me/2349164892077?text=${encodeURIComponent(
        'Hello Casmine Active Flush Plus, I would like to make an enquiry about your product.'
      )}`;
      window.open(genericUrl, '_blank');
      return;
    }

    const textPayload = `*New Casmine Active Flush Plus Enquiry*\n\n*Name:* ${formData.fullName}\n*Phone:* ${formData.phoneNumber}\n*Email:* ${formData.emailAddress || 'N/A'}\n*Quantity:* ${formData.quantity}\n*Preferred Contact:* ${formData.contactMethod}\n*Subject:* ${formData.subject}\n*Message:* ${formData.message || 'Please provide more details on purchasing.'}`;
    const url = `https://wa.me/2349164892077?text=${encodeURIComponent(textPayload)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="contact" className="py-14 sm:py-20 md:py-24 bg-[#F7F8F2] text-[#1A3A32] overflow-hidden">
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
            <span className="bg-[#DDE5B6] text-[#1A3A32] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider">
              Inquiries &amp; Orders
            </span>
            <span className="text-xs font-semibold tracking-widest uppercase text-[#4B6F44]">
              {BRAND_INFO.motto}
            </span>
          </div>

          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-normal text-[#1A3A32] leading-tight mb-4"
          >
            Ready for a Cleaner System, Better Health and a More Active You?
          </h2>

          <p className="text-base sm:text-lg text-[#1A3A32]/80 font-serif italic">
            "{BRAND_INFO.ctaMotto}"
          </p>
        </motion.div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Call & WhatsApp Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="bg-[#1A3A32] text-white rounded-3xl p-6 sm:p-8 shadow-xs space-y-6">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDE5B6] block mb-1">
                  Official Distribution
                </span>
                <h3 className="text-2xl font-serif font-bold text-white mb-2">
                  Direct Inquiries
                </h3>
                <p className="text-white/80 text-xs sm:text-sm leading-relaxed">
                  Call or chat directly with our official distribution representatives for rapid order fulfillment, dosage questions, and retail inquiries.
                </p>
              </div>

              {/* Phone Numbers */}
              <div className="space-y-3 pt-2">
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#DDE5B6] block">
                  Official Phone &amp; WhatsApp Lines
                </span>

                {PHONE_CONTACTS.map((phone, idx) => (
                  <div
                    key={phone.raw}
                    id={`contact-phone-block-${idx}`}
                    className="p-3.5 sm:p-4 rounded-2xl bg-white/10 border border-white/10 flex flex-col xs:flex-row xs:items-center justify-between gap-3 hover:bg-white/15 transition-colors"
                  >
                    <div>
                      <div className="text-[10px] text-[#DDE5B6] font-bold uppercase tracking-wider">
                        Line {idx + 1}
                      </div>
                      <a
                        href={`tel:${phone.raw}`}
                        className="text-base sm:text-lg font-mono font-bold text-white hover:text-[#DDE5B6]"
                      >
                        {phone.display}
                      </a>
                    </div>

                    <div className="flex items-center gap-2">
                      <a
                        id={`call-now-btn-${idx}`}
                        href={`tel:${phone.raw}`}
                        className="min-h-[40px] px-3.5 py-2 rounded-xl bg-white text-[#1A3A32] text-xs font-bold uppercase tracking-wider hover:bg-[#DDE5B6] active:scale-95 transition-all flex items-center justify-center"
                        title="Call Line"
                      >
                        Call
                      </a>
                      <a
                        id={`whatsapp-now-btn-${idx}`}
                        href={phone.whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="min-h-[40px] px-3.5 py-2 rounded-xl bg-[#2D6A4F] text-white text-xs font-bold uppercase tracking-wider hover:bg-[#1f4a37] active:scale-95 transition-all flex items-center gap-1.5 justify-center"
                        title="Chat on WhatsApp"
                      >
                        <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
                        Chat
                      </a>
                    </div>
                  </div>
                ))}
              </div>

              {/* Two Primary Action Buttons */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <a
                  id="contact-call-now-main"
                  href={`tel:${PHONE_CONTACTS[0].raw}`}
                  className="min-h-[46px] w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs uppercase tracking-wider border border-white/20 transition-all text-center active:scale-95"
                >
                  <Phone className="w-3.5 h-3.5 text-[#DDE5B6]" />
                  <span>Call Now</span>
                </a>

                <a
                  id="contact-whatsapp-main"
                  href={PHONE_CONTACTS[0].whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[46px] w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-[#2D6A4F] hover:bg-[#1f4a37] text-white font-bold text-xs uppercase tracking-wider shadow-xs transition-all text-center active:scale-95"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
                  <span>Chat on WhatsApp</span>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Contact & Order Message Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7"
          >
            <div className="bg-white rounded-3xl p-5 sm:p-8 lg:p-10 shadow-xs border border-[#1A3A32]/10 text-[#1A3A32]">
              <div className="mb-6 pb-4 border-b border-[#1A3A32]/10">
                <h3 className="text-xl font-serif font-bold text-[#1A3A32]">
                  Send an Order Inquiry / Message
                </h3>
                <p className="text-xs text-[#1A3A32]/70 mt-1">
                  Fill out the form below to reach the Casmine management team directly.
                </p>
              </div>

              {serverError && (
                <div
                  id="contact-form-error-banner"
                  className="mb-4 p-4 rounded-2xl bg-rose-50 border border-rose-200 text-rose-800 text-xs flex items-center gap-2 animate-in fade-in"
                >
                  <AlertCircle className="w-4 h-4 text-rose-600 flex-shrink-0" />
                  <span>{serverError}</span>
                </div>
              )}

              {submitSuccess ? (
                <div
                  id="contact-form-success-banner"
                  className="bg-[#F7F8F2] border border-[#1A3A32]/10 rounded-2xl p-6 sm:p-8 text-center space-y-4 animate-in fade-in"
                >
                  <div className="w-12 h-12 rounded-full bg-[#1A3A32] text-white flex items-center justify-center mx-auto shadow-xs">
                    <CheckCircle2 className="w-6 h-6 text-[#DDE5B6]" />
                  </div>
                  <h4 className="text-lg font-serif font-bold text-[#1A3A32]">
                    Thank you! Your message has been received.
                  </h4>
                  <p className="text-xs sm:text-sm text-[#1A3A32]/80 font-serif italic">
                    We will get back to you shortly.
                  </p>
                  <div className="pt-2 flex flex-col sm:flex-row justify-center gap-3">
                    <a
                      id="success-whatsapp-btn"
                      href={PHONE_CONTACTS[0].whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[44px] inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-[#2D6A4F] text-white text-xs font-bold uppercase tracking-wider shadow-xs hover:bg-[#1f4a37] active:scale-95"
                    >
                      <MessageCircle className="w-3.5 h-3.5" />
                      Chat on WhatsApp
                    </a>
                    <button
                      onClick={() => {
                        setSubmitSuccess(false);
                        setFormData({
                          fullName: '',
                          phoneNumber: '',
                          emailAddress: '',
                          subject: 'Order & Product Enquiry',
                          quantity: '1 Bottle (200ml)',
                          contactMethod: 'whatsapp',
                          message: '',
                        });
                      }}
                      className="min-h-[44px] inline-flex items-center justify-center px-5 py-2.5 rounded-full bg-white text-[#1A3A32] border border-[#1A3A32]/20 text-xs font-bold uppercase tracking-wider hover:bg-[#F7F8F2] active:scale-95"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form id="contact-order-form" onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label
                        htmlFor="fullName"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1.5"
                      >
                        Full Name <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="text"
                        id="fullName"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ayomide Adedoyin"
                        className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border ${
                          errors.fullName ? 'border-rose-500 bg-rose-50/40' : 'border-[#1A3A32]/15'
                        } focus:outline-none focus:border-[#1A3A32] text-sm text-[#1A3A32]`}
                      />
                      {errors.fullName && (
                        <p className="text-rose-600 text-[10px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.fullName}
                        </p>
                      )}
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label
                        htmlFor="phoneNumber"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1.5"
                      >
                        Phone Number <span className="text-rose-600">*</span>
                      </label>
                      <input
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleChange}
                        placeholder="e.g. 08138470024"
                        className={`w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border ${
                          errors.phoneNumber ? 'border-rose-500 bg-rose-50/40' : 'border-[#1A3A32]/15'
                        } focus:outline-none focus:border-[#1A3A32] text-sm text-[#1A3A32]`}
                      />
                      {errors.phoneNumber && (
                        <p className="text-rose-600 text-[10px] mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.phoneNumber}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label
                        htmlFor="emailAddress"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1.5"
                      >
                        Email Address (Optional)
                      </label>
                      <input
                        type="email"
                        id="emailAddress"
                        name="emailAddress"
                        value={formData.emailAddress}
                        onChange={handleChange}
                        placeholder="e.g. yourname@gmail.com"
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#1A3A32]/15 focus:outline-none focus:border-[#1A3A32] text-sm text-[#1A3A32]"
                      />
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1.5"
                      >
                        Subject
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#1A3A32]/15 focus:outline-none focus:border-[#1A3A32] text-sm text-[#1A3A32] bg-white"
                      >
                        <option value="Order & Product Enquiry">Order &amp; Product Enquiry</option>
                        <option value="Direct Purchase Inquiry">Direct Purchase Inquiry</option>
                        <option value="Dosage & Usage Consultation">Dosage &amp; Usage Consultation</option>
                        <option value="Bulk / Retail Distribution">Bulk / Retail Distribution</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Quantity */}
                    <div>
                      <label
                        htmlFor="quantity"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1.5 flex items-center gap-1"
                      >
                        <ShoppingBag className="w-3 h-3 text-[#4B6F44]" />
                        Product Quantity (Optional)
                      </label>
                      <select
                        id="quantity"
                        name="quantity"
                        value={formData.quantity}
                        onChange={handleChange}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#1A3A32]/15 focus:outline-none focus:border-[#1A3A32] text-sm text-[#1A3A32] bg-white"
                      >
                        <option value="1 Bottle (200ml)">1 Bottle (200ml)</option>
                        <option value="2 Bottles (400ml)">2 Bottles (400ml)</option>
                        <option value="3 Bottles (600ml)">3 Bottles (600ml)</option>
                        <option value="5+ Bottles (Pack)">5+ Bottles (Pack)</option>
                        <option value="1 Carton (Wholesale)">1 Carton (Wholesale)</option>
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label
                        htmlFor="contactMethod"
                        className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1.5"
                      >
                        Preferred Contact Method
                      </label>
                      <select
                        id="contactMethod"
                        name="contactMethod"
                        value={formData.contactMethod}
                        onChange={handleChange}
                        className="w-full min-h-[44px] px-3.5 py-2.5 rounded-xl border border-[#1A3A32]/15 focus:outline-none focus:border-[#1A3A32] text-sm text-[#1A3A32] bg-white"
                      >
                        <option value="whatsapp">WhatsApp Message</option>
                        <option value="phone">Phone Call</option>
                        <option value="email">Email</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[10px] font-bold uppercase tracking-wider text-[#1A3A32] mb-1.5"
                    >
                      Message / Delivery Details <span className="text-rose-600">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please write your inquiry or delivery location for Casmine Active Flush Plus..."
                      className={`w-full min-h-[88px] px-3.5 py-2.5 rounded-xl border ${
                        errors.message ? 'border-rose-500 bg-rose-50/40' : 'border-[#1A3A32]/15'
                      } focus:outline-none focus:border-[#1A3A32] text-sm text-[#1A3A32]`}
                    />
                    {errors.message && (
                      <p className="text-rose-600 text-[10px] mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2 flex flex-col sm:flex-row gap-3">
                    <button
                      type="submit"
                      id="submit-contact-form-btn"
                      disabled={isSubmitting}
                      className="min-h-[46px] flex-1 py-3 px-6 rounded-xl bg-[#1A3A32] hover:bg-[#2A4A42] text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 active:scale-[0.98]"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                    </button>

                    <button
                      type="button"
                      id="send-via-whatsapp-form-btn"
                      onClick={handleSendViaWhatsApp}
                      className="min-h-[46px] py-3 px-6 rounded-xl bg-[#2D6A4F] hover:bg-[#1f4a37] text-white text-xs font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                    >
                      <MessageCircle className="w-3.5 h-3.5 text-emerald-200" />
                      <span>Send via WhatsApp</span>
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

