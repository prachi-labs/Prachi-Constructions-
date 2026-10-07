import React from 'react';
import { BrandLogo } from './BrandLogo';
import { Award, CheckCircle2, Phone, Mail, MapPin, ArrowRight } from 'lucide-react';

interface AboutProps {
  onContactClick: () => void;
}

export const AboutSection: React.FC<AboutProps> = ({ onContactClick }) => {
  return (
    <section id="about" className="relative bg-[#121524] py-24 px-6 md:px-12 border-b border-[#384C65]/80">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Editorial About Content */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex items-center gap-2">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C0C9DB] font-bold">
                About Prachi Constructions
              </span>
              <span className="text-[#384C65]">·</span>
              <span className="text-[11px] uppercase tracking-wider text-[#9DACCC] font-bold">
                Kota, Rajasthan
              </span>
            </div>

            <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
              Built on Experience. <br />
              <span className="text-[#C0C9DB] font-normal italic font-garamond">Driven by Execution.</span>
            </h2>

            <div className="space-y-4 text-[#C0C9DB] text-sm md:text-base leading-relaxed font-sans-clean font-medium">
              <p>
                Prachi Constructions is a family-owned construction business based in Kota, Rajasthan,
                with more than <strong className="text-white font-bold">25 years of experience</strong> in the construction industry.
              </p>
              <p>
                Our journey is built on generations of practical construction knowledge, strong workmanship,
                and a deep understanding of on-site project execution. We believe that true durability begins with
                ground-level integrity—from foundation earthwork to high-precision structural concrete.
              </p>
              <p>
                Today, under the leadership of <strong className="text-white font-bold">Mr. Purushottam Kumawat</strong>,
                Prachi Constructions combines decades of practical experience with a professional approach to modern construction projects.
              </p>
              <p className="text-[#9DACCC] text-sm">
                The company has executed and been associated with residential, commercial, institutional,
                and specialized construction projects across Kota, Bijoliya, and surrounding areas of Rajasthan.
              </p>
            </div>

            {/* Credibility bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-[#384C65]/60">
              <div className="flex items-center gap-2.5 text-xs text-[#C0C9DB] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#485F88] shrink-0" />
                <span>Direct on-site supervision & engineering</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#C0C9DB] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#485F88] shrink-0" />
                <span>Rigorous material testing & quality checks</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#C0C9DB] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#485F88] shrink-0" />
                <span>Transparent timelines & resource coordination</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#C0C9DB] font-semibold">
                <CheckCircle2 className="w-4 h-4 text-[#485F88] shrink-0" />
                <span>Associated with leading developer groups</span>
              </div>
            </div>

            <div className="pt-2">
              <button
                onClick={onContactClick}
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(72,95,136,0.5)] transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <span>Discuss Your Project with Us</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Column: Reference-Inspired Founder & Leadership Card */}
          <div className="lg:col-span-5">
            <div className="p-8 rounded-3xl bg-[#181d31] border border-[#384C65] shadow-[0_20px_50px_rgba(0,0,0,0.6)] relative overflow-hidden">
              
              {/* Subtle blue corner accent */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-radial from-[#485F88]/15 to-transparent pointer-events-none" />

              <div className="flex items-center gap-3 mb-6">
                <BrandLogo size="md" showText={false} />
                <div>
                  <span className="text-[10px] uppercase tracking-widest text-[#9DACCC] font-bold">
                    Managing Leadership
                  </span>
                  <h3 className="font-cinzel text-xl font-bold text-white">
                    Mr. Purushottam Kumawat
                  </h3>
                  <span className="text-xs text-[#9DACCC] font-sans-clean font-medium">
                    Founder & Managing Director
                  </span>
                </div>
              </div>

              {/* Founder quote */}
              <blockquote className="p-4 rounded-xl bg-[#202742] border border-[#384C65] text-xs md:text-sm text-[#C0C9DB] italic mb-6 leading-relaxed font-garamond">
                "Construction is not merely assembling bricks and concrete; it is the physical manifestation of trust.
                When a client entrusts us with their dream home, showroom, or educational campus in Kota, we bring
                generations of honesty, engineering rigor, and personal on-site care."
              </blockquote>

              {/* Leadership Specs */}
              <div className="space-y-3 mb-6 text-xs text-[#C0C9DB] font-medium">
                <div className="flex items-center gap-2.5">
                  <MapPin className="w-3.5 h-3.5 text-[#C0C9DB] shrink-0" />
                  <span>Headquartered in Kota, Rajasthan, India</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Award className="w-3.5 h-3.5 text-[#C0C9DB] shrink-0" />
                  <span>25+ Years Hands-on Civil & Construction Management</span>
                </div>
                <div className="flex items-center gap-2.5">
                  <Mail className="w-3.5 h-3.5 text-[#C0C9DB] shrink-0" />
                  <span>pankajkota0@gmail.com</span>
                </div>
              </div>

              {/* Direct consultation CTA button */}
              <button
                onClick={onContactClick}
                className="w-full py-3 px-4 rounded-xl bg-[#202742] hover:bg-[#283254] border border-[#384C65] text-[#C0C9DB] hover:text-white text-xs font-bold uppercase tracking-wider transition-all flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <Phone className="w-3.5 h-3.5 text-[#C0C9DB]" />
                <span>Schedule Site Discussion</span>
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
