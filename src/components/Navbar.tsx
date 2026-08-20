import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MessageSquare, ArrowUpRight } from 'lucide-react';
import { BRAND_INFO, PHONE_CONTACTS, ASSETS } from '../data/productData';

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenOrderModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Benefits', href: '#benefits' },
    { name: 'How to Use', href: '#how-to-use' },
    { name: 'Safety', href: '#precautions' },
    { name: 'Contact', href: '#contact' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        isScrolled
          ? 'bg-[#F7F8F2]/95 backdrop-blur-md shadow-sm border-b border-[#1A3A32]/10 py-3'
          : 'bg-[#F7F8F2] border-b border-[#1A3A32]/10 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand Name */}
          <a
            href="#home"
            id="nav-brand-logo"
            className="flex items-center gap-3 group focus:outline-none rounded-lg p-1"
          >
            <div className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full overflow-hidden border border-[#1A3A32]/20 bg-white flex items-center justify-center shadow-sm">
              <img
                src={ASSETS.casmineLogo}
                onError={(e) => {
                  const target = e.currentTarget;
                  if (!target.src.includes('logo.png')) {
                    target.src = '/logo.png';
                  }
                }}
                alt="Casmine Logo"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-lg sm:text-xl font-bold tracking-tight text-[#1A3A32] uppercase font-sans flex items-center gap-1.5">
                CASMINE
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#4B6F44]"></span>
              </span>
              <span className="text-[9px] sm:text-[10px] font-bold tracking-widest uppercase text-[#4B6F44]">
                Active Flush Plus
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links - Editorial Tracked Typography */}
          <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-xs font-semibold uppercase tracking-widest text-[#1A3A32]/70 hover:text-[#1A3A32] transition-colors py-1 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-[#1A3A32] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop CTA actions */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="nav-quick-call-btn"
              href={`tel:${PHONE_CONTACTS[0].raw}`}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 text-[11px] font-bold uppercase tracking-wider text-[#1A3A32] hover:text-white bg-white hover:bg-[#1A3A32] rounded-full border border-[#1A3A32]/20 transition-all shadow-xs min-h-[40px]"
              title="Direct Call"
            >
              <Phone className="w-3 h-3 text-[#4B6F44]" />
              <span>{PHONE_CONTACTS[0].display}</span>
            </a>

            <button
              id="nav-order-now-btn"
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-xs font-bold uppercase tracking-widest text-white bg-[#1A3A32] hover:bg-[#2D6A4F] rounded-full shadow-xs hover:shadow-md transition-all transform active:scale-95 cursor-pointer min-h-[40px]"
            >
              <span>Order Now</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

          {/* Mobile Menu Toggle & Quick Order Buttons */}
          <div className="flex sm:hidden items-center gap-1.5">
            <button
              id="mobile-nav-cta-btn"
              onClick={onOpenOrderModal}
              className="px-3.5 py-2 text-xs font-bold uppercase tracking-wider text-white bg-[#1A3A32] hover:bg-[#2D6A4F] active:scale-95 rounded-full min-h-[44px] flex items-center justify-center shadow-xs cursor-pointer"
            >
              Order Now
            </button>
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-11 h-11 flex items-center justify-center text-[#1A3A32] hover:bg-[#1A3A32]/10 active:bg-[#1A3A32]/15 rounded-xl focus:outline-none transition-colors cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="sm:hidden bg-[#F7F8F2] border-t border-[#1A3A32]/10 px-4 sm:px-6 pt-3 pb-6 space-y-4 shadow-xl animate-in slide-in-from-top duration-200 max-h-[85vh] overflow-y-auto"
        >
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                id={`mobile-nav-link-${link.name.toLowerCase().replace(/\s+/g, '-')}`}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center min-h-[44px] px-3.5 py-2.5 text-xs font-bold uppercase tracking-widest text-[#1A3A32] hover:bg-[#1A3A32]/5 rounded-xl transition-colors active:bg-[#1A3A32]/10"
              >
                {link.name}
              </a>
            ))}
          </div>

          <div className="pt-3 border-t border-[#1A3A32]/10 space-y-2.5">
            <div className="text-[10px] font-bold uppercase tracking-widest text-[#4B6F44] px-1">
              Direct Phone Inquiries
            </div>
            <div className="grid grid-cols-1 xs:grid-cols-2 gap-2">
              <a
                id="mobile-call-1"
                href={`tel:${PHONE_CONTACTS[0].raw}`}
                className="flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-3 bg-white text-[#1A3A32] text-xs font-bold rounded-xl border border-[#1A3A32]/15 shadow-xs active:bg-[#F7F8F2]"
              >
                <Phone className="w-3.5 h-3.5 text-[#4B6F44]" />
                <span>{PHONE_CONTACTS[0].display}</span>
              </a>
              <a
                id="mobile-call-2"
                href={`tel:${PHONE_CONTACTS[1].raw}`}
                className="flex items-center justify-center gap-2 min-h-[44px] py-2.5 px-3 bg-white text-[#1A3A32] text-xs font-bold rounded-xl border border-[#1A3A32]/15 shadow-xs active:bg-[#F7F8F2]"
              >
                <Phone className="w-3.5 h-3.5 text-[#4B6F44]" />
                <span>{PHONE_CONTACTS[1].display}</span>
              </a>
            </div>

            <button
              id="mobile-order-modal-trigger"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full min-h-[46px] flex items-center justify-center gap-2 py-3 px-4 text-xs font-bold uppercase tracking-widest text-white bg-[#1A3A32] hover:bg-[#2D6A4F] active:scale-[0.98] rounded-xl shadow-sm cursor-pointer transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#DDE5B6]" />
              <span>Contact / Quick Order</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
