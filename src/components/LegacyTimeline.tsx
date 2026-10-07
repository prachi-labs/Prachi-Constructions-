import React, { useState } from 'react';
import { Award, Compass, HardHat, Sparkles } from 'lucide-react';

export const LegacyTimeline: React.FC = () => {
  const [activeGen, setActiveGen] = useState<number>(2); // Default to current founder Purushottam Kumawat

  const generations = [
    {
      genNumber: '01',
      title: 'First Generation · Foundational Roots',
      person: 'Mr. Nathu Lal Kumawat',
      role: 'Pioneered the Family Construction Foundation',
      era: 'Foundational Knowledge & Practical Mastery',
      icon: HardHat,
      narrative:
        'Established the bedrock of the family’s construction journey through relentless on-site involvement, traditional stone & masonry understanding, and deep practical craftsmanship across regional projects in Rajasthan.',
      highlights: [
        'Mastery of structural masonry & native stonework',
        'Direct hands-on site supervision & labor leadership',
        'Ingrained principle of uncompromising structural durability',
      ],
    },
    {
      genNumber: '02',
      title: 'Second Generation · Knowledge Expansion',
      person: 'Mr. Hari Ram Kumawat',
      role: 'Advanced the Family Construction Knowledge',
      era: 'Civil Execution & Regional Trust',
      icon: Compass,
      narrative:
        'Carried the family’s construction knowledge forward into larger residential and civil works. Deepened the understanding of modern RCC structural engineering, multi-contractor coordination, and regional project delivery in Kota and neighboring hubs.',
      highlights: [
        'Transition to reinforced concrete frameworks & multi-level builds',
        'Building long-term goodwill with property developers & landowners',
        'Mentorship of modern engineering and site execution standards',
      ],
    },
    {
      genNumber: '03',
      title: 'Third Generation · Institutional Era',
      person: 'Mr. Purushottam Kumawat',
      role: 'Founder & Managing Director · Prachi Constructions',
      era: 'Professional Enterprise & Contemporary Execution',
      icon: Award,
      narrative:
        'Built directly upon this multi-generational foundation to officially establish Prachi Constructions as a full-scale, professionally managed construction enterprise. Combining heritage on-site wisdom with contemporary civil engineering and landmark project execution.',
      highlights: [
        'Founded Prachi Constructions as a premier civil engineering entity',
        'Delivered marquee commercial showrooms, residential towers & institutions',
        'Pioneered modern project scheduling, procurement & safety protocols',
      ],
    },
  ];

  return (
    <section id="legacy" className="relative bg-[#121524] py-24 px-6 md:px-12 border-b border-[#384C65]/80 overflow-hidden">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 architectural-grid opacity-25 pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C0C9DB] font-bold flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-[#9DACCC]" />
              Family Construction Heritage
            </span>
            <span className="text-[#384C65]">·</span>
            <span className="text-[11px] uppercase tracking-wider text-[#9DACCC] font-bold">
              Kota, Rajasthan
            </span>
          </div>
          <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold tracking-tight text-white mb-4">
            Three Generations. <span className="text-[#C0C9DB] font-normal italic font-garamond">One Foundation.</span>
          </h2>
          <p className="text-[#C0C9DB] text-sm md:text-base leading-relaxed font-sans-clean font-medium">
            Our 25+ years of building excellence is not an overnight achievement—it is a continuum of practical
            civil expertise refined over three generations of master builders.
          </p>
        </div>

        {/* Interactive Generation Stepper Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 relative">
          
          {/* Subtle Horizontal Connecting Line on Desktop */}
          <div className="hidden lg:block absolute top-[44px] left-[15%] right-[15%] h-[1.5px] bg-gradient-to-r from-[#384C65]/20 via-[#485F88] to-[#384C65]/20 -z-0" />

          {generations.map((gen, idx) => {
            const Icon = gen.icon;
            const isSelected = activeGen === idx;

            return (
              <div
                key={gen.genNumber}
                onClick={() => setActiveGen(idx)}
                className={`relative z-10 p-8 rounded-2xl transition-all duration-300 cursor-pointer ${
                  isSelected
                    ? 'bg-[#181d31] border border-[#485F88] shadow-[0_12px_36px_rgba(72,95,136,0.3)] translate-y-[-4px]'
                    : 'bg-[#181d31]/50 border border-[#384C65]/60 hover:border-[#485F88]/60 hover:bg-[#181d31]'
                }`}
              >
                {/* Top Badge & Generation Number */}
                <div className="flex items-center justify-between mb-6">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center transition-colors ${
                      isSelected
                        ? 'bg-gradient-to-r from-[#384C65] to-[#485F88] text-white shadow-[0_0_16px_rgba(72,95,136,0.5)]'
                        : 'bg-[#202742] text-[#9DACCC]'
                    }`}
                  >
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="font-mono text-sm tracking-widest text-[#C0C9DB] font-bold">
                    GEN {gen.genNumber}
                  </span>
                </div>

                {/* Subtitle / Era */}
                <div className="text-[11px] uppercase tracking-wider text-[#9DACCC] font-bold mb-1">
                  {gen.title}
                </div>

                {/* Person Name */}
                <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white mb-1">
                  {gen.person}
                </h3>

                <div className="text-xs text-[#9DACCC] font-sans-clean mb-4 italic font-medium">
                  {gen.role}
                </div>

                <p className="text-xs text-[#C0C9DB] leading-relaxed font-sans-clean mb-6 font-medium">
                  {gen.narrative}
                </p>

                {/* Key Pillars */}
                <div className="space-y-2 pt-4 border-t border-[#384C65]/60">
                  <div className="text-[10px] uppercase tracking-widest text-[#9DACCC] font-bold">
                    Core Contributions:
                  </div>
                  {gen.highlights.map((item, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2 text-xs text-[#C0C9DB] font-medium">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#485F88] mt-1.5 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Family Progression Summary Ribbon */}
        <div className="mt-12 p-6 rounded-xl bg-[#181d31] border border-[#384C65] flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left shadow-lg">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 text-xs md:text-sm font-sans-clean text-[#C0C9DB]">
            <span className="font-bold text-white">Nathu Lal Kumawat</span>
            <span className="text-[#485F88] font-bold">→</span>
            <span className="font-bold text-white">Hari Ram Kumawat</span>
            <span className="text-[#485F88] font-bold">→</span>
            <span className="font-bold text-[#C0C9DB]">Mr. Purushottam Kumawat (Founder)</span>
            <span className="text-[#485F88] font-bold">→</span>
            <span className="text-[#9DACCC] font-bold">Prachi Constructions</span>
          </div>

          <div className="text-xs text-[#9DACCC] tracking-wider uppercase font-mono font-bold">
            Kota · 25+ Years Experience
          </div>
        </div>

      </div>
    </section>
  );
};
