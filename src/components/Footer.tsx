import React from 'react';
import { BrandLogo } from './BrandLogo';
import { ArrowUp, MapPin, Phone, Mail, ShieldCheck } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Home', id: 'hero' },
    { label: 'About Us', id: 'about' },
    { label: 'Family Legacy', id: 'legacy' },
    { label: 'Expertise', id: 'expertise' },
    { label: 'Selected Projects', id: 'projects' },
    { label: 'Our Approach', id: 'approach' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <footer className="relative bg-[#0d101d] text-[#9DACCC] py-16 px-6 md:px-12 border-t border-[#384C65]/80">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Top Footer Row: Logo, Tagline & Back to Top */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-[#384C65]/60">
          <div>
            <BrandLogo size="lg" showText={true} />
            <p className="font-garamond italic text-base text-[#C0C9DB] mt-2 font-medium">
              Building with Experience. Delivering with Trust.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#181d31] hover:bg-[#202742] border border-[#384C65] text-xs font-bold text-[#C0C9DB] hover:text-white transition-colors cursor-pointer self-start md:self-auto shadow-sm"
            aria-label="Back to top"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#485F88]" />
          </button>
        </div>

        {/* Middle Footer Columns */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs">
          {/* Col 1: Heritage Overview */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C0C9DB] font-bold block">
              Company Overview
            </span>
            <p className="leading-relaxed text-[#9DACCC] font-sans-clean font-medium">
              Prachi Constructions is a family-owned construction company in Kota, Rajasthan,
              rooted in three generations of practical craftsmanship and structural civil engineering excellence.
            </p>
            <div className="text-[11px] text-[#9DACCC] font-mono font-medium">
              Managing Director: Mr. Purushottam Kumawat
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C0C9DB] font-bold block">
              Navigation
            </span>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      if (link.id === 'hero') {
                        scrollToTop();
                      } else {
                        onNavigate(link.id);
                      }
                    }}
                    className="hover:text-white text-[#9DACCC] font-medium transition-colors cursor-pointer"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Project Sectors */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C0C9DB] font-bold block">
              Core Sectors
            </span>
            <ul className="space-y-2 text-[#9DACCC] font-medium">
              <li>Luxury Private Residences & Kothis</li>
              <li>Multi-Story Residential Apartments</li>
              <li>Commercial Automobile Showrooms</li>
              <li>Trading Hubs & Dhan Mandi Plazas</li>
              <li>Institutional & School Campuses</li>
              <li>Civil & Structural RCC Engineering</li>
            </ul>
          </div>

          {/* Col 4: Regional Office */}
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-widest text-[#C0C9DB] font-bold block">
              Headquarters
            </span>
            <div className="space-y-2 font-medium">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#485F88] shrink-0 mt-0.5" />
                <span className="text-[#C0C9DB]">Kota, Rajasthan, India</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#485F88] shrink-0" />
                <span className="font-mono text-[#C0C9DB]">+91 94141 23456</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#485F88] shrink-0" />
                <span className="text-[#C0C9DB]">prachiikumawat246@gmail.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reference-Inspired Institutional Trust Badges */}
        <div className="pt-8 border-t border-[#384C65]/60 flex flex-wrap items-center justify-between gap-6 text-[11px] text-[#9DACCC]">
          <div className="flex items-center gap-6">
            <span className="tracking-widest uppercase font-mono text-[#C0C9DB] font-bold">
              TRUSTED CIVIL EXCELLENCE
            </span>
            <span className="hidden sm:inline">·</span>
            <span>Kota Civil Registry</span>
            <span className="hidden sm:inline">·</span>
            <span>Hadoti Builders Network</span>
            <span className="hidden sm:inline">·</span>
            <span>ISO 9001 Structural Standards</span>
          </div>

          <div className="font-sans-clean font-medium">
            © 2026 Prachi Constructions. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};
