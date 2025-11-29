import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, MapPin } from 'lucide-react';
import { CONTACT_INFO, PRACTICE_AREAS } from '../constants';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const mainLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'Attorneys', href: '#about' },
    { name: 'Practice Areas', href: '#practice' },
    { name: 'Case Results', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg py-3' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex items-center relative z-[60]">
              <a href="#" className="flex flex-col items-center gap-1">
                <div className={`text-2xl lg:text-3xl font-bold tracking-wider transition-colors duration-300 ${
                  !isScrolled ? 'text-white' : 'text-slate-900'
                }`}>
                  <span className="font-serif">KING & ROWE</span>
                </div>
                <div className={`text-[10px] lg:text-xs font-semibold tracking-[0.3em] uppercase transition-colors duration-300 ${
                  !isScrolled ? 'text-white' : 'text-slate-600'
                }`}>
                  ATTORNEYS AT LAW
                </div>
              </a>
            </div>

            {/* Hamburger Button */}
            <button
              className={`relative flex items-center gap-2 font-medium tracking-widest text-xs uppercase z-[60] transition-colors ${
                isMenuOpen ? 'text-white' : (isScrolled ? 'text-slate-900' : 'text-white')
              }`}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="hidden sm:inline">{isMenuOpen ? 'Close' : 'Menu'}</span>
              {isMenuOpen ? (
                <X size={32} />
              ) : (
                <Menu size={32} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Menu Overlay */}
      <div
        className={`fixed inset-0 bg-[#8B1F29] z-40 transition-transform duration-500 ease-in-out ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-full w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12 overflow-y-auto">
          <div className="flex flex-col lg:flex-row h-full">
            
            {/* Left Column - Main Nav */}
            <div className="lg:w-1/2 flex flex-col justify-center space-y-4 mb-12 lg:mb-0 border-b lg:border-b-0 lg:border-r border-white/20 pb-12 lg:pb-0 lg:pr-12">
              <span className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-4">Menu</span>
              {mainLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-white hover:text-red-200 transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>

            {/* Right Column - Details */}
            <div className="lg:w-1/2 flex flex-col lg:justify-between lg:pl-12 pt-8 lg:pt-0">
              
              {/* Practice Areas List */}
              <div className="mb-12">
                <span className="text-white/50 text-xs font-bold tracking-[0.2em] uppercase mb-6 block">Practice Areas</span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {PRACTICE_AREAS.map((area, index) => (
                    <a 
                      key={index} 
                      href="#practice" 
                      onClick={() => setIsMenuOpen(false)}
                      className="text-white text-lg font-medium hover:text-red-200 transition-colors border-b border-white/10 pb-2"
                    >
                      {area.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Contact Info Footer */}
              <div className="mt-auto grid sm:grid-cols-2 gap-8 text-white">
                <div>
                   <div className="flex items-start gap-3 mb-2">
                     <MapPin className="w-5 h-5 text-red-300 mt-1 shrink-0" />
                     <div className="text-sm leading-relaxed opacity-90">
                        {CONTACT_INFO.locations.map((loc, i) => (
                          <p key={i}>{loc}</p>
                        ))}
                     </div>
                   </div>
                </div>
                <div>
                   <div className="flex items-center gap-3 mb-2">
                     <Phone className="w-5 h-5 text-red-300 shrink-0" />
                     <a href={`tel:${CONTACT_INFO.phone}`} className="text-xl font-serif">{CONTACT_INFO.phone}</a>
                   </div>
                   <p className="text-xs text-white/50 pl-8">Available 24/7 for emergencies</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;