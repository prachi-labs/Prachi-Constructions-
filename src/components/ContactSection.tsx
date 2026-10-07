import React, { useState } from 'react';
import { BrandLogo } from './BrandLogo';
import { Phone, Mail, MapPin, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

interface ContactSectionProps {
  prefilledType?: string;
  prefilledCost?: string;
  onExploreProjects: () => void;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  prefilledType,
  prefilledCost,
  onExploreProjects,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: prefilledType || 'Residential Construction',
    locationArea: 'Kota',
    message: prefilledCost ? `Looking for estimate feasibility around ${prefilledCost}.` : '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Sync if prefilled changes
  React.useEffect(() => {
    if (prefilledType) {
      setFormData((prev) => ({
        ...prev,
        projectType: prefilledType,
        message: prefilledCost ? `Inquiring for feasibility around ${prefilledCost}.` : prev.message,
      }));
    }
  }, [prefilledType, prefilledCost]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 700);
  };

  return (
    <section id="contact" className="relative bg-[#090f0d] py-24 px-6 md:px-12 border-b border-neutral-800/80">
      <div className="max-w-7xl mx-auto space-y-20">
        
        {/* FINAL CLOSING CTA BANNER */}
        <div className="relative rounded-3xl p-8 md:p-14 bg-gradient-to-r from-[#181d31] via-[#202742] to-[#181d31] border border-[#384C65] shadow-[0_25px_60px_rgba(0,0,0,0.7)] overflow-hidden text-center">
          <div className="absolute inset-0 architectural-grid opacity-30 pointer-events-none" />
          
          <div className="relative z-10 max-w-3xl mx-auto space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#121524] border border-[#485F88] text-xs text-[#C0C9DB] font-bold uppercase tracking-widest">
              <span>Ready for Execution</span>
            </div>

            <h2 className="font-cinzel text-3xl md:text-5xl font-bold tracking-tight text-white leading-tight">
              Let's Build Something <span className="text-[#C0C9DB] italic font-garamond font-normal">That Lasts.</span>
            </h2>

            <p className="text-sm md:text-base text-[#C0C9DB] leading-relaxed font-sans-clean max-w-xl mx-auto font-medium">
              25+ years of experience. Generations of knowledge. One commitment to quality.
              Whether building a luxury family kothi, a commercial showroom, or an educational campus in Kota.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <a
                href="#enquiry-form"
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_24px_rgba(72,95,136,0.5)] transition-all flex items-center justify-center gap-2 shadow-md"
              >
                <span>Start a Conversation</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                onClick={onExploreProjects}
                className="w-full sm:w-auto px-8 py-3.5 rounded-xl bg-[#202742] hover:bg-[#283254] border border-[#384C65] text-[#C0C9DB] hover:text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer shadow-sm"
              >
                View Projects
              </button>
            </div>
          </div>
        </div>

        {/* CONTACT & DIRECT ENQUIRY FORM GRID */}
        <div id="enquiry-form" className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Contact Info & Company Identity */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <BrandLogo size="lg" showText={true} />
              <p className="text-[#C0C9DB] text-xs md:text-sm font-sans-clean mt-4 leading-relaxed font-medium">
                Building with Experience. Delivering with Trust. Headquartered in Kota, Rajasthan.
                Under the direct leadership of Mr. Purushottam Kumawat.
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-[#384C65]/80">
              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#181d31] border border-[#384C65]">
                <MapPin className="w-5 h-5 text-[#C0C9DB] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Office Headquarters</div>
                  <div className="text-xs text-[#C0C9DB] font-sans-clean mt-0.5 font-medium">
                    Kota, Rajasthan, India
                  </div>
                  <div className="text-[11px] text-[#9DACCC] mt-0.5 font-medium">
                    Serving Kota, Bijoliya & Hadoti Region
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#181d31] border border-[#384C65]">
                <Phone className="w-5 h-5 text-[#C0C9DB] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Direct Phone Consultation</div>
                  <div className="text-xs text-[#C0C9DB] font-mono mt-0.5 font-bold">
                    +91 9214321354
                  </div>
                  <div className="text-[11px] text-[#9DACCC] mt-0.5 font-medium">
                    Direct line to project engineering team
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-4 rounded-xl bg-[#181d31] border border-[#384C65]">
                <Mail className="w-5 h-5 text-[#C0C9DB] shrink-0 mt-0.5" />
                <div>
                  <div className="text-xs font-bold text-white">Official Correspondence</div>
                  <div className="text-xs text-[#C0C9DB] font-sans-clean mt-0.5 font-medium">
                    pankajkota0@gmail.com 
                  </div>
                  <div className="text-[11px] text-[#9DACCC] mt-0.5 font-medium">
                    Tender inquiries & project proposals
                  </div>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-[#181d31] border border-[#384C65] text-xs text-[#C0C9DB] flex items-center gap-2 font-medium">
              <ShieldCheck className="w-5 h-5 text-[#485F88] shrink-0" />
              <span>We provide free site feasibility inspections for prospective construction projects in Kota.</span>
            </div>
          </div>

          {/* Right: Clean Functional Enquiry Form */}
          <div className="lg:col-span-7">
            <div className="p-8 rounded-3xl bg-[#181d31] border border-[#384C65] shadow-[0_20px_50px_rgba(0,0,0,0.6)]">
              
              <div className="mb-6">
                <span className="text-[11px] uppercase tracking-[0.25em] text-[#C0C9DB] font-bold block mb-1">
                  Direct Project Inquiry
                </span>
                <h3 className="font-cinzel text-2xl font-bold text-white">
                  Send Your Construction Brief
                </h3>
                <p className="text-xs text-[#9DACCC] font-sans-clean mt-1 font-medium">
                  Provide project details for direct review by Mr. Purushottam Kumawat and our civil engineers.
                </p>
              </div>

              {isSubmitted ? (
                <div className="p-8 rounded-2xl bg-[#121524] border border-[#485F88] text-center space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 rounded-full bg-[#202742] border border-[#485F88] text-[#C0C9DB] flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h4 className="font-cinzel text-xl font-bold text-white">
                    Enquiry Received Successfully
                  </h4>
                  <p className="text-xs text-[#C0C9DB] font-sans-clean max-w-md mx-auto leading-relaxed font-medium">
                    Thank you, <strong className="text-white">{formData.name}</strong>. Your project brief has been logged.
                    Mr. Purushottam Kumawat or our engineering supervisor will contact you at <strong className="text-[#C0C9DB]">{formData.phone}</strong> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        phone: '',
                        email: '',
                        projectType: 'Residential Construction',
                        locationArea: 'Kota',
                        message: '',
                      });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-[#202742] border border-[#384C65] text-xs font-bold text-[#C0C9DB] hover:text-white transition-colors cursor-pointer"
                  >
                    Submit Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C0C9DB] font-bold block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Sharma"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#202742] border border-[#384C65] text-white placeholder-[#9DACCC]/60 text-xs focus:outline-none focus:border-[#485F88] transition-colors font-medium"
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C0C9DB] font-bold block mb-1.5">
                        Mobile Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. +91 98290 XXXXX"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#202742] border border-[#384C65] text-white placeholder-[#9DACCC]/60 text-xs focus:outline-none focus:border-[#485F88] transition-colors font-medium"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C0C9DB] font-bold block mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="e.g. ramesh@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#202742] border border-[#384C65] text-white placeholder-[#9DACCC]/60 text-xs focus:outline-none focus:border-[#485F88] transition-colors font-medium"
                      />
                    </div>

                    {/* Project Type */}
                    <div>
                      <label className="text-[11px] uppercase tracking-wider text-[#C0C9DB] font-bold block mb-1.5">
                        Project Category *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl bg-[#202742] border border-[#384C65] text-white text-xs focus:outline-none focus:border-[#485F88] transition-colors cursor-pointer font-medium"
                      >
                        <option value="Residential Construction" className="bg-[#181d31]">Residential Villa / Kothi</option>
                        <option value="Multi-Story Apartments" className="bg-[#181d31]">Multi-Story Apartments</option>
                        <option value="Commercial Showroom / Complex" className="bg-[#181d31]">Commercial Showroom / Plaza</option>
                        <option value="Institutional / School" className="bg-[#181d31]">Institutional School / Campus</option>
                        <option value="Civil & Structural Work" className="bg-[#181d31]">Civil & Structural Works Only</option>
                      </select>
                    </div>
                  </div>

                  {/* Location in Kota */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#C0C9DB] font-bold block mb-1.5">
                      Proposed Project Location (City / Sector)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Kota (R.K. Puram / Dhan Mandi / Bajrang Nagar) or Bijoliya"
                      value={formData.locationArea}
                      onChange={(e) => setFormData({ ...formData, locationArea: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#202742] border border-[#384C65] text-white placeholder-[#9DACCC]/60 text-xs focus:outline-none focus:border-[#485F88] transition-colors font-medium"
                    />
                  </div>

                  {/* Message */}
                  <div>
                    <label className="text-[11px] uppercase tracking-wider text-[#C0C9DB] font-bold block mb-1.5">
                      Project Scope & Message
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share estimated built-up area, architectural stage, or site location..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#202742] border border-[#384C65] text-white placeholder-[#9DACCC]/60 text-xs focus:outline-none focus:border-[#485F88] transition-colors font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] text-white font-extrabold text-xs uppercase tracking-wider hover:shadow-[0_0_24px_rgba(72,95,136,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 shadow-md"
                  >
                    {isSubmitting ? (
                      <span>Submitting Project Brief...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>Send Enquiry to Prachi Constructions</span>
                      </>
                    )}
                  </button>

                  <div className="text-[11px] text-[#9DACCC] text-center font-sans-clean pt-1 font-medium">
                    Your contact information is kept strictly confidential and used solely for direct project consultation.
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
