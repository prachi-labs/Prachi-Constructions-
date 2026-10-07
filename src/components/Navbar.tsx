import React, { useState, useEffect } from 'react';
import { BrandLogo } from './BrandLogo';
import { Menu, X, PhoneCall, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  onOpenEstimator?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onNavigate, onOpenEstimator }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Legacy', id: 'legacy' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Projects', id: 'projects' },
    { label: 'Approach', id: 'approach' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121524]/95 border-b border-[#384C65]/80 py-3 shadow-[0_10px_30px_rgba(0,0,0,0.6)]'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Zone 1: Brand Wordmark with Official Logo */}
        <a
          href="#"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="group flex items-center transition-opacity hover:opacity-95"
          aria-label="Prachi Constructions Home"
        >
          <BrandLogo size="md" showText={true} />
        </a>

        {/* Zone 2: Navigation Links (Clean, unboxed typography) */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-[#9DACCC] font-sans-clean">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleLinkClick(link.id)}
              className="hover:text-white transition-colors relative py-1 cursor-pointer font-medium tracking-wide after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#485F88] hover:after:w-full after:transition-all after:duration-300"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Zone 3: Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          {onOpenEstimator && (
            <button
              onClick={onOpenEstimator}
              className="px-3.5 py-2 text-xs font-semibold text-[#C0C9DB] hover:text-white hover:bg-[#181d31] rounded-lg border border-[#384C65] hover:border-[#485F88] transition-all whitespace-nowrap cursor-pointer"
            >
              Cost Estimator
            </button>
          )}

          <button
            onClick={() => handleLinkClick('contact')}
            className="px-4 py-2 text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] rounded-lg hover:shadow-[0_0_20px_rgba(72,95,136,0.5)] transition-all whitespace-nowrap cursor-pointer flex items-center gap-1.5 shadow-md"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#C0C9DB] hover:text-white rounded-lg focus:outline-none cursor-pointer"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#121524]/98 border-b border-[#384C65] px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleLinkClick(link.id)}
                className="text-left text-base font-semibold text-[#C0C9DB] hover:text-white transition-colors py-2 border-b border-[#384C65]/40 cursor-pointer"
              >
                {link.label}
              </button>
            ))}

            <div className="pt-4 flex flex-col gap-3">
              {onOpenEstimator && (
                <button
                  onClick={() => {
                    onOpenEstimator();
                    setMobileMenuOpen(false);
                  }}
                  className="w-full py-2.5 text-xs font-semibold text-center text-[#C0C9DB] bg-[#181d31] border border-[#384C65] rounded-lg cursor-pointer hover:text-white"
                >
                  Estimate Construction Budget
                </button>
              )}
              <button
                onClick={() => handleLinkClick('contact')}
                className="w-full py-3 text-xs font-bold uppercase tracking-wider text-center text-white bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] rounded-lg cursor-pointer shadow-md"
              >
                Start a Project
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
