import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutProduct } from './components/AboutProduct';
import { KeyBenefits } from './components/KeyBenefits';
import { HowToUse } from './components/HowToUse';
import { ReactionsCautions } from './components/ReactionsCautions';
import { ContactSection } from './components/ContactSection';
import { WhatsAppFloating } from './components/WhatsAppFloating';
import { Footer } from './components/Footer';
import { QuickInquiryModal } from './components/QuickInquiryModal';

export default function App() {
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-[#f7f9f4] text-[#12301c] selection:bg-[#22c55e] selection:text-white">
      {/* Sticky Top Navigation */}
      <Navbar onOpenOrderModal={() => setIsOrderModalOpen(true)} />

      {/* Main Page Content */}
      <main id="main-content" className="flex-1">
        <Hero onOpenOrderModal={() => setIsOrderModalOpen(true)} />
        <AboutProduct />
        <KeyBenefits />
        <HowToUse />
        <ReactionsCautions />
        <ContactSection />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Persistent WhatsApp Floating Button */}
      <WhatsAppFloating />

      {/* Quick Order / WhatsApp Order Modal */}
      <QuickInquiryModal
        isOpen={isOrderModalOpen}
        onClose={() => setIsOrderModalOpen(false)}
      />
    </div>
  );
}
