import React, { useState } from 'react';
import { Home, Building, Landmark, Layers, Eye, Users, ArrowRight } from 'lucide-react';

interface ExpertiseProps {
  onSelectCategory: (category: string) => void;
}

export const ExpertiseSection: React.FC<ExpertiseProps> = ({ onSelectCategory }) => {
  const [activeTab, setActiveTab] = useState<number>(0);

  const capabilities = [
    {
      id: 'residential',
      title: 'Residential Construction',
      tagline: 'Private Luxury Residences & Multi-Unit Apartments',
      icon: Home,
      description:
        'Turnkey execution of contemporary private villas, bungalows, kothis, and multi-story apartment complexes across Kota. We engineer private spaces with structural precision, earthquake-resistant frames, and fine architectural finishes.',
      metrics: 'Delivered Ganpati Flats, Sukhmani, Fortune Elita',
      capabilities: [
        'Luxury Private Kothis & Custom Villas',
        'Multi-Story Residential Apartments',
        'Deep Structural RCC & Foundation Waterproofing',
        'High-End Interior Civil Integration',
      ],
    },
    {
      id: 'commercial',
      title: 'Commercial Construction',
      tagline: 'Showrooms, Retail Plazas & Corporate Hubs',
      icon: Building,
      description:
        'High-volume commercial buildings engineered for heavy footfalls and modern business needs. From expansive automotive showrooms to prime multi-tenant commercial centers in Kota’s busiest trade zones.',
      metrics: 'Kota Hyundai Showrooms & The Nexus Plaza',
      capabilities: [
        'Double-Height Automotive Glass Showrooms',
        'Retail Trade Centers & Dhan Mandi Complexes',
        'Heavy-Load Commercial Slabs & Clear Spans',
        'Fire Safety, Electrical & MEP Infrastructure',
      ],
    },
    {
      id: 'institutional',
      title: 'Institutional Construction',
      tagline: 'Educational Campuses & Community Infrastructure',
      icon: Landmark,
      description:
        'Large-scale academic buildings, classrooms, auditoriums, and institutional centers designed with safety, natural cross-ventilation, and durable low-maintenance structural envelopes.',
      metrics: 'Bhuvnesh Bal Vidyalaya Kota & Educational Wings',
      capabilities: [
        'Multi-Wing School & Academy Buildings',
        'Wide Corridors & High-Capacity Staircases',
        'Acoustic Walls & Durable Paver Courtyards',
        'Government & Educational Norms Compliance',
      ],
    },
    {
      id: 'civil',
      title: 'Civil & Structural Works',
      tagline: 'Foundations, Retaining Walls & Heavy Concrete',
      icon: Layers,
      description:
        'The foundational backbone of every lasting structure. Advanced soil testing coordination, deep pile foundations, cantilevered concrete beams, retaining structures, and high-strength concrete pour management.',
      metrics: 'Over 25+ Years of Structural Stability',
      capabilities: [
        'Deep Foundation Earthwork & Pile Caps',
        'Engineered RCC Framing & Post-Tensioned Beams',
        'Substructure Retaining Walls & Water Tanks',
        'Precision Rebar Placement & Cube Testing',
      ],
    },
    {
      id: 'site',
      title: 'Site Execution & Supervision',
      tagline: 'Vigilant Ground-Level Quality Control',
      icon: Eye,
      description:
        'Our leadership remains on the ground. Daily supervision of labor teams, subcontractor alignment, batching plant quality control, and strict on-site safety standards prevent errors before they happen.',
      metrics: 'Zero Structural Compromise Policy',
      capabilities: [
        'Full-Time Resident Engineers & Foremen',
        'Daily Checklist & Material Batch Verification',
        'Subcontractor Discipline & Milestone Tracking',
        'Worker Safety Equipment & Site Cleanliness',
      ],
    },
    {
      id: 'management',
      title: 'Project Management & Procurement',
      tagline: 'Seamless Scheduling, Manpower & Logistics',
      icon: Users,
      description:
        'Integrated material procurement, sand/cement supply chain management in Rajasthan, bulk steel logistics, and stage-gate scheduling to ensure projects finish smoothly on target.',
      metrics: 'Controlled Timelines & Material Optimization',
      capabilities: [
        'Critical Path Scheduling & Cashflow Alignment',
        'Direct Regional Material Procurement (Hadoti)',
        'Experienced Labor & Masonry Crew Mobilization',
        'Transparent Milestone Reports for Clients',
      ],
    },
  ];

  return (
    <section id="expertise" className="relative bg-[#121524] py-24 px-6 md:px-12 border-b border-[#384C65]/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#C0C9DB] font-bold block mb-3">
              Comprehensive Construction Disciplines
            </span>
            <h2 className="font-cinzel text-3xl md:text-5xl font-bold tracking-tight text-white">
              Our Core <span className="text-[#C0C9DB] italic font-garamond font-normal">Expertise</span>
            </h2>
          </div>
          <p className="text-[#9DACCC] text-sm max-w-md font-sans-clean font-medium">
            From preliminary groundwork to turnkey handover, we offer full-spectrum civil engineering and project execution.
          </p>
        </div>

        {/* 6 Capabilities Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            const isHovered = activeTab === index;

            return (
              <div
                key={item.id}
                onMouseEnter={() => setActiveTab(index)}
                className={`group relative p-8 rounded-2xl transition-all duration-300 flex flex-col justify-between ${
                  isHovered
                    ? 'bg-[#181d31] border border-[#485F88] shadow-[0_12px_32px_rgba(72,95,136,0.25)]'
                    : 'bg-[#181d31]/80 border border-[#384C65] hover:border-[#485F88] hover:bg-[#181d31]'
                }`}
              >
                <div>
                  {/* Top Bar with Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-xl bg-[#202742] border border-[#384C65] flex items-center justify-center text-[#C0C9DB] group-hover:bg-gradient-to-r group-hover:from-[#384C65] group-hover:to-[#485F88] group-hover:text-white transition-all">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs text-[#9DACCC] group-hover:text-[#C0C9DB] tracking-widest transition-colors font-bold">
                      0{index + 1}
                    </span>
                  </div>

                  {/* Title & Subheading */}
                  <h3 className="font-cinzel text-xl font-bold text-white mb-1 group-hover:text-[#C0C9DB] transition-colors">
                    {item.title}
                  </h3>
                  <div className="text-xs text-[#9DACCC] font-bold font-sans-clean mb-4">
                    {item.tagline}
                  </div>

                  <p className="text-xs text-[#C0C9DB] leading-relaxed font-sans-clean mb-6 font-medium">
                    {item.description}
                  </p>

                  {/* Capability List */}
                  <div className="space-y-2 mb-6 pt-4 border-t border-[#384C65]/60">
                    {item.capabilities.map((cap, cIdx) => (
                      <div key={cIdx} className="flex items-center gap-2 text-xs text-[#C0C9DB] font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#485F88]" />
                        <span>{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom link to related projects */}
                <div className="pt-4 border-t border-[#384C65]/60 flex items-center justify-between">
                  <span className="text-[11px] text-[#9DACCC] font-sans-clean font-medium">
                    {item.metrics}
                  </span>
                  <button
                    onClick={() => onSelectCategory(item.id)}
                    className="text-xs font-bold text-[#C0C9DB] hover:text-white flex items-center gap-1 cursor-pointer transition-colors"
                  >
                    <span>View Projects</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
