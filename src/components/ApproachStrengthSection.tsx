import React, { useState } from 'react';
import { ShieldCheck, HardHat, CheckCircle2, Award, Users, Sparkles, Clock, Target } from 'lucide-react';

export const ApproachStrengthSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      num: '01',
      title: 'Understand',
      subtitle: 'Client Objectives & Site Analysis',
      desc: 'We conduct comprehensive soil assessments, evaluate client architectural blueprints, structural load expectations, and project aspirations in Kota or regional Rajasthan.',
    },
    {
      num: '02',
      title: 'Plan',
      subtitle: 'Resources, Procurement & Logistics',
      desc: 'Coordinate certified raw materials (high-grade cement, tested TMT rebar, aggregate stone), deploy specialized masonry crews, and establish a clear stage-by-stage execution schedule.',
    },
    {
      num: '03',
      title: 'Execute',
      subtitle: 'Rigorous On-Site Civil Execution',
      desc: 'Ground breaking, deep foundation pile caps, precision shuttering, vibration-compacted concrete pours, and structural frame casting with strict adherence to structural drawings.',
    },
    {
      num: '04',
      title: 'Supervise',
      subtitle: 'Daily Site Inspection & Quality Control',
      desc: 'Our senior foremen and engineers verify slump tests, curing times, rebar covers, and worker safety daily to ensure zero structural flaws or deviations.',
    },
    {
      num: '05',
      title: 'Deliver',
      subtitle: 'Turnkey Handover & Lasting Trust',
      desc: 'Completing finishing masonry, waterproofing tests, MEP handoffs, and final architectural inspection with the client—delivering spaces built to endure for generations.',
    },
  ];

  const strengths = [
    {
      title: '25+ Years Experience',
      desc: 'Unmatched longevity and technical confidence developed over a quarter-century of building in Kota.',
    },
    {
      title: 'Three Generations',
      desc: 'Heritage practical wisdom passed down from Nathu Lal to Hari Ram to Purushottam Kumawat.',
    },
    {
      title: 'Hands-On Execution',
      desc: 'Direct founder and senior engineer involvement on active construction sites every single day.',
    },
    {
      title: 'Resource Management',
      desc: 'Disciplined coordination of skilled labor, bulk raw materials, and specialized subcontractor fleets.',
    },
    {
      title: 'Quality Focus',
      desc: 'Zero tolerance for substandard cement or rebar; strict curing and structural stability benchmarks.',
    },
    {
      title: 'Client Coordination',
      desc: 'Transparent milestones, proactive communications, and honest advisory from day one to keys in hand.',
    },
  ];

  const values = [
    'Quality Workmanship',
    'Reliable Execution',
    'Strong Site Supervision',
    'Efficient Resource Management',
    'Timely Progress',
    'Long-Term Trust',
  ];

  return (
    <section id="approach" className="relative bg-[#121524] py-24 px-6 md:px-12 border-b border-[#384C65]/80">
      <div className="max-w-7xl mx-auto space-y-24">
        
        {/* PART 1: HOW WE BUILD (01 to 05) */}
        <div>
          <div className="max-w-3xl mb-16">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C0C9DB] font-bold block mb-3">
              Methodology & Execution
            </span>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold tracking-tight text-white mb-4">
              How We <span className="text-[#C0C9DB] italic font-garamond font-normal">Build</span>
            </h2>
            <p className="text-[#C0C9DB] text-sm md:text-base leading-relaxed font-sans-clean font-medium">
              A disciplined five-stage process refined through decades of civil contracting to ensure precision at every step.
            </p>
          </div>

          {/* Process Timeline Grid */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
            {steps.map((st, idx) => {
              const isSelected = activeStep === idx;
              return (
                <div
                  key={st.num}
                  onClick={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer flex flex-col justify-between ${
                    isSelected
                      ? 'bg-[#202742] border border-[#485F88] shadow-[0_10px_30px_rgba(72,95,136,0.25)] translate-y-[-2px]'
                      : 'bg-[#181d31] border border-[#384C65] hover:border-[#485F88] hover:bg-[#181d31]/90'
                  }`}
                >
                  <div>
                    <div className="font-mono text-xs font-bold text-[#C0C9DB] tracking-widest mb-4">
                      STEP {st.num}
                    </div>
                    <h3 className="font-cinzel text-lg font-bold text-white mb-1">
                      {st.title}
                    </h3>
                    <div className="text-[11px] text-[#9DACCC] font-bold font-sans-clean mb-3">
                      {st.subtitle}
                    </div>
                    <p className="text-xs text-[#C0C9DB] leading-relaxed font-sans-clean font-medium">
                      {st.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#384C65]/60 flex items-center justify-between text-[11px] text-[#9DACCC] font-medium">
                    <span>Phase 0{idx + 1}</span>
                    <span className="w-1.5 h-1.5 rounded-full bg-[#485F88]" />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* PART 2: OUR STRENGTH (Experience That Builds Confidence) */}
        <div>
          <div className="max-w-3xl mb-12">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C0C9DB] font-bold block mb-2">
              Our Structural Advantages
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-bold tracking-tight text-white">
              Experience That <span className="text-[#C0C9DB] italic font-garamond font-normal">Builds Confidence</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {strengths.map((item, idx) => (
              <div
                key={item.title}
                className="p-6 rounded-2xl bg-[#181d31] border border-[#384C65] hover:border-[#485F88] transition-all group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-8 h-8 rounded-lg bg-[#202742] border border-[#384C65] flex items-center justify-center text-[#C0C9DB] group-hover:bg-[#485F88] group-hover:text-white transition-colors">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h3 className="font-cinzel text-base font-bold text-white group-hover:text-[#C0C9DB] transition-colors">
                    {item.title}
                  </h3>
                </div>
                <p className="text-xs text-[#C0C9DB] leading-relaxed font-sans-clean font-medium">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* PART 3: TRUST / VALUES (Minimal Premium Typographic Strip) */}
        <div className="p-8 rounded-2xl bg-[#181d31] border border-[#384C65]">
          <div className="text-center max-w-xl mx-auto mb-8">
            <span className="text-[10px] uppercase tracking-[0.3em] text-[#C0C9DB] font-bold block mb-2">
              Core Guiding Principles
            </span>
            <h3 className="font-cinzel text-xl md:text-2xl font-bold text-white">
              The Bedrock of Every Project We Undertake
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {values.map((val) => (
              <div
                key={val}
                className="p-4 rounded-xl bg-[#202742] border border-[#384C65] flex flex-col items-center justify-center gap-2 group hover:border-[#485F88] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#485F88] group-hover:scale-150 transition-transform" />
                <span className="text-xs font-bold text-[#C0C9DB] group-hover:text-white font-sans-clean">
                  {val}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* PART 4: VISION (Building Beyond Structures) */}
        <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-r from-[#181d31] via-[#202742] to-[#181d31] border border-[#384C65] relative overflow-hidden">
          <div className="max-w-3xl relative z-10 space-y-4">
            <span className="text-[11px] uppercase tracking-[0.3em] text-[#C0C9DB] font-bold block">
              Our Vision
            </span>
            <h2 className="font-cinzel text-2xl md:text-4xl font-bold text-white leading-tight">
              Building Beyond Structures
            </h2>
            <p className="text-sm md:text-base text-[#C0C9DB] leading-relaxed font-sans-clean font-medium">
              Our vision is to establish Prachi Constructions as a trusted and professionally managed construction company,
              recognized for quality execution, reliable project management and long-term client relationships.
            </p>
            <p className="text-xs md:text-sm text-[#9DACCC] leading-relaxed font-sans-clean font-medium">
              We aim to continue building residential, commercial and institutional projects while creating structures
              that reflect our experience, workmanship and commitment across Kota, Rajasthan and beyond.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
