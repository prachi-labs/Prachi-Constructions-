import React, { useEffect, useState, useRef } from 'react';
import { ThreeCanvas } from './ThreeCanvas';
import { BrandLogo } from './BrandLogo';
import { ChevronDown, ArrowRight, ShieldCheck, Compass, Sparkles, Sliders } from 'lucide-react';

// Exact generated high-res photographic stage assets
import stage1Img from '../assets/images/building_stage1_foundation_1791342362300.jpg';
import stage2Img from '../assets/images/building_stage2_framing_1791342377118.jpg';
import stage3Img from '../assets/images/building_stage3_architecture_1791342397917.jpg';
import stage4Img from '../assets/images/building_stage4_finishing_1791342412580.jpg';
import stage5Img from '../assets/images/building_stage5_completed_1791342426062.jpg';

interface HeroProps {
  onExploreProjects: () => void;
  onOurStory: () => void;
  onStartProject: () => void;
}

const STAGES = [
  {
    pct: 0,
    name: 'Foundation',
    badge: 'Stage 01 · 0% Scroll',
    title: 'Raw Construction & Groundwork',
    subtitle: 'Tower cranes, reinforced concrete framing, rebar pillars & foundational engineering.',
    phaseTag: 'Foundation & Earthwork',
    image: stage1Img,
  },
  {
    pct: 0.25,
    name: 'Structure',
    badge: 'Stage 02 · 25% Scroll',
    title: 'Structure Taking Shape',
    subtitle: 'Multi-tiered floor slabs, structural column alignment, and initial wall aperture geometry.',
    phaseTag: 'Structural Civil Works',
    image: stage2Img,
  },
  {
    pct: 0.5,
    name: 'Architecture',
    badge: 'Stage 03 · 50% Scroll',
    title: 'Architectural Envelope & Facade',
    subtitle: 'Exterior wall finishes, modern cantilevered balconies, and architectural massing.',
    phaseTag: 'Facade & Masonry',
    image: stage3Img,
  },
  {
    pct: 0.75,
    name: 'Finishing',
    badge: 'Stage 04 · 75% Scroll',
    title: 'Craftsmanship & Finishing',
    subtitle: 'Floor-to-ceiling glass installation, exterior facade lighting, and refined landscaping.',
    phaseTag: 'Glazing & MEP Systems',
    image: stage4Img,
  },
  {
    pct: 1.0,
    name: 'Completed Villa',
    badge: 'Stage 05 · 100% Scroll',
    title: 'Completed Architectural Living',
    subtitle: 'A luxury contemporary villa: warm evening ambient lights, infinity pool reflections & enduring trust.',
    phaseTag: 'Delivered Masterpiece',
    image: stage5Img,
  },
];

export const HeroTransformation: React.FC<HeroProps> = ({
  onExploreProjects,
  onOurStory,
  onStartProject,
}) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0); // 0.0 to 1.0
  const [manualOverride, setManualOverride] = useState(false);

  // Monitor scroll in sticky container
  useEffect(() => {
    const handleScroll = () => {
      if (!trackRef.current) return;
      const rect = trackRef.current.getBoundingClientRect();
      const totalHeight = trackRef.current.offsetHeight - window.innerHeight;
      if (totalHeight <= 0) return;

      const currentScroll = -rect.top;
      const rawP = Math.max(0, Math.min(1, currentScroll / totalHeight));
      
      if (!manualOverride) {
        setScrollProgress(rawP);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, [manualOverride]);

  // Jump to specific stage
  const jumpToStage = (pct: number) => {
    if (!trackRef.current) return;
    const totalHeight = trackRef.current.offsetHeight - window.innerHeight;
    const targetScrollY = trackRef.current.offsetTop + pct * totalHeight;
    setManualOverride(true);
    setScrollProgress(pct);
    window.scrollTo({
      top: targetScrollY,
      behavior: 'smooth',
    });
    setTimeout(() => setManualOverride(false), 900);
  };

  // Compute opacity for each of the 5 images based on scrollProgress
  // We want smooth continuous blend transitions
  const getOpacities = (p: number) => {
    // 5 stages at points 0, 0.25, 0.5, 0.75, 1.0
    const points = [0, 0.25, 0.5, 0.75, 1.0];
    const opacities = [0, 0, 0, 0, 0];

    for (let i = 0; i < points.length; i++) {
      if (i === 0 && p <= points[1]) {
        // Between stage 0 and 1
        opacities[0] = 1 - (p / 0.25);
        opacities[1] = p / 0.25;
      } else if (i === 1 && p > points[1] && p <= points[2]) {
        opacities[1] = 1 - ((p - 0.25) / 0.25);
        opacities[2] = (p - 0.25) / 0.25;
      } else if (i === 2 && p > points[2] && p <= points[3]) {
        opacities[2] = 1 - ((p - 0.5) / 0.25);
        opacities[3] = (p - 0.5) / 0.25;
      } else if (i === 3 && p > points[3] && p <= points[4]) {
        opacities[3] = 1 - ((p - 0.75) / 0.25);
        opacities[4] = (p - 0.75) / 0.25;
      }
    }

    if (p >= 0.98) {
      opacities[4] = 1;
      opacities[3] = 0;
    }

    return opacities;
  };

  const opacities = getOpacities(scrollProgress);

  // Active stage index for labels
  const activeIndex = scrollProgress < 0.2 
    ? 0 
    : scrollProgress < 0.45 
    ? 1 
    : scrollProgress < 0.7 
    ? 2 
    : scrollProgress < 0.9 
    ? 3 
    : 4;

  const currentStage = STAGES[activeIndex];

  return (
    <section ref={trackRef} className="relative w-full h-[200vh] bg-[#121524]">
      {/* Sticky Viewport (100vh) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex flex-col justify-between">
        
        {/* Layer 1: Three.js 3D Wireframe & Structural Geometry Canvas (Transparent Accent) */}
        <ThreeCanvas progress={scrollProgress} className="z-10 opacity-25" />

        {/* Layer 2: Photographic 5-Stage Transformation Backdrops - 100% Crisp & Clear */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          {STAGES.map((stage, idx) => (
            <div
              key={stage.name}
              className="absolute inset-0 transition-opacity duration-300 ease-out"
              style={{ opacity: opacities[idx] }}
            >
              <img
                src={stage.image}
                alt={stage.title}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform scale-100 filter brightness-105 contrast-105"
              />
              {/* Very minimal soft gradient only at the very bottom edge so background is 100% clear and attractive */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121524]/60 via-transparent to-black/20 pointer-events-none" />
            </div>
          ))}
        </div>

        {/* TOP STATUS TICKER: Progress Tracker Bar */}
        <div className="relative z-20 pt-20 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
          <div className="flex items-center gap-3 bg-[#121524]/90 px-3.5 py-1.5 rounded-full border border-[#384C65] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#485F88] animate-pulse" />
            <span className="text-[11px] uppercase tracking-[0.2em] font-sans-clean text-[#C0C9DB] font-semibold">
              3D Architectural Scroll Transformation
            </span>
            <span className="text-neutral-500 hidden sm:inline">·</span>
            <span className="text-[11px] text-white font-mono font-bold hidden sm:inline">
              {Math.round(scrollProgress * 100)}%
            </span>
          </div>

          {/* Quick Stage Pills for Interactive Jump */}
          <div className="hidden lg:flex items-center gap-1.5 p-1 rounded-full bg-[#121524]/90 border border-[#384C65] shadow-sm">
            {STAGES.map((s, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={s.name}
                  onClick={() => jumpToStage(s.pct)}
                  className={`px-3 py-1 text-xs font-sans-clean rounded-full transition-all duration-200 cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-gradient-to-r from-[#384C65] to-[#485F88] text-white font-bold shadow-[0_0_12px_rgba(72,95,136,0.5)]'
                      : 'text-[#9DACCC] hover:text-white hover:bg-[#202742]'
                  }`}
                >
                  {s.name}
                </button>
              );
            })}
          </div>
        </div>

        {/* CENTER CONTENT: Compact, Elegant Architectural Typography */}
        <div className="relative z-20 px-6 md:px-12 max-w-7xl mx-auto w-full py-auto my-auto flex flex-col items-start">

          {scrollProgress < 0.85 ? (
            /* Construction Progress Storytelling Mode (0% - 84%) - Compact Footprint */
            <div className="max-w-md p-0 bg-transparent border-0 shadow-none transition-all duration-300">
              
              {/* Stage Badge & Kicker - Compact Pill */}
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-full bg-[#121524]/95 border border-[#485F88]/80 shadow-[0_2px_8px_rgba(0,0,0,0.8)] mb-2">
                <span className="text-[10px] uppercase tracking-[0.18em] text-[#C0C9DB] font-extrabold">
                  {currentStage.badge}
                </span>
                <span className="text-neutral-500">·</span>
                <span className="text-[10px] uppercase tracking-wider text-white font-bold">
                  {currentStage.phaseTag}
                </span>
              </div>

              {/* Dynamic Stage Headline - Reduced Size, Crisp & Bold */}
              <h1 className="font-cinzel text-xl sm:text-2xl md:text-3xl font-extrabold tracking-tight text-white mb-2 leading-tight text-balance drop-shadow-[0_2px_12px_rgba(0,0,0,1)] [text-shadow:_0_2px_6px_rgb(0_0_0),_0_4px_16px_rgb(0_0_0)]">
                {currentStage.title}
              </h1>

              {/* Stage Description - Concise & Compact & Bold */}
              <p className="text-[#C0C9DB] font-semibold text-xs sm:text-sm leading-snug mb-3.5 font-sans-clean max-w-sm drop-shadow-[0_2px_8px_rgba(0,0,0,1)] [text-shadow:_0_1px_4px_rgb(0_0_0)]">
                {currentStage.subtitle}
              </p>

              {/* Progress Indicator Slider (Sleek Compact Bar) */}
              <div className="space-y-1.5 max-w-xs">
                <div className="flex justify-between text-[10px] text-white font-bold font-mono drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">
                  <span>0% Raw Foundation</span>
                  <span className="text-[#9DACCC] font-extrabold uppercase tracking-wider">Scroll to build ↓</span>
                  <span>100% Completed</span>
                </div>
                <div className="relative w-full h-1 bg-[#121524]/90 rounded-full overflow-hidden border border-[#384C65] shadow-md">
                  <div
                    className="h-full bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] transition-all duration-150"
                    style={{ width: `${scrollProgress * 100}%` }}
                  />
                </div>
              </div>

              {/* Trust Badges - Compact Micro-Pills */}
              <div className="mt-3.5 flex flex-wrap items-center gap-2 text-[10px] text-[#C0C9DB]">
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121524]/90 border border-[#384C65] font-bold shadow-sm">
                  <Compass className="w-3 h-3 text-[#9DACCC]" />
                  <span>25+ Years Foundation</span>
                </div>
                <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#121524]/90 border border-[#384C65] font-bold shadow-sm">
                  <ShieldCheck className="w-3 h-3 text-[#9DACCC]" />
                  <span>Three Generations of Trust</span>
                </div>
              </div>
            </div>
          ) : (
            /* Final Brand Reveal Mode (85% - 100%) - Compact Architectural Card */
            <div className="max-w-xl p-0 bg-transparent border-0 shadow-none transition-all duration-500 animate-in fade-in">
              
              {/* Grand Official Logo Lockup */}
              <div className="mb-3 flex items-center gap-3">
                <BrandLogo size="sm" showText={false} />
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] text-[#9DACCC] font-bold block drop-shadow-[0_2px_6px_rgba(0,0,0,1)]">
                    Established Legacy · Kota, Rajasthan
                  </span>
                  <span className="font-cinzel text-base md:text-lg font-bold text-white tracking-wider drop-shadow-[0_2px_8px_rgba(0,0,0,1)]">
                    PRACHI CONSTRUCTIONS
                  </span>
                </div>
              </div>

              {/* Main Headline */}
              <h1 className="font-cinzel text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 leading-tight text-balance drop-shadow-[0_3px_16px_rgba(0,0,0,1)] [text-shadow:_0_2px_6px_rgb(0_0_0),_0_4px_18px_rgb(0_0_0)]">
                Building with Experience. <br />
                <span className="text-[#C0C9DB] italic font-garamond font-normal">Delivering with Trust.</span>
              </h1>

              {/* Supporting Editorial Prose */}
              <p className="text-[#C0C9DB] font-semibold text-xs sm:text-sm leading-relaxed mb-5 max-w-md font-sans-clean drop-shadow-[0_2px_8px_rgba(0,0,0,1)] [text-shadow:_0_1px_4px_rgb(0_0_0)]">
                A family legacy of construction expertise, carried forward through three generations
                and built into every residential, commercial, and institutional project we execute across Kota & Rajasthan.
              </p>

              {/* Primary & Secondary Action CTAs */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5">
                <button
                  onClick={onExploreProjects}
                  className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-white bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] rounded-lg hover:shadow-[0_0_20px_rgba(72,95,136,0.6)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-md"
                >
                  <span>Explore Our Projects</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={onOurStory}
                  className="px-5 py-2.5 text-xs font-bold tracking-wider uppercase text-[#C0C9DB] bg-[#121524]/90 hover:bg-[#1c2237] border border-[#384C65] hover:border-[#485F88] rounded-lg transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer whitespace-nowrap shadow-md"
                >
                  <span>Our Story & Legacy</span>
                </button>

                <button
                  onClick={onStartProject}
                  className="px-3.5 py-2.5 text-xs font-bold tracking-wider uppercase text-[#C0C9DB] hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap drop-shadow"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Start a Project</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* BOTTOM CONTROLS & SCROLL HINT */}
        <div className="relative z-20 pb-8 px-6 md:px-12 max-w-7xl mx-auto w-full flex items-center justify-between">
          {/* Scroll Down Prompt / Direct Jump */}
          <div className="flex items-center gap-4">
            <button
              onClick={onExploreProjects}
              className="px-4 py-2 rounded-full bg-[#121524]/90 hover:bg-[#1c2237] border border-[#485F88]/70 text-xs font-bold text-[#C0C9DB] hover:text-white flex items-center gap-2 cursor-pointer shadow-lg transition-all"
            >
              <span>View All 9 Projects</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            <div className="hidden sm:flex items-center gap-2.5 text-[#9DACCC]">
              <div className="w-5 h-8 rounded-full border border-[#384C65] flex items-start justify-center p-1">
                <div className="w-1.5 h-2 rounded-full bg-[#485F88] animate-bounce" />
              </div>
              <span className="text-[11px] tracking-wider uppercase font-sans-clean text-[#C0C9DB] font-bold">
                {scrollProgress < 0.9 ? 'Scroll down to build' : 'Portfolio Revealed'}
              </span>
            </div>
          </div>

          {/* Quick Step Indicators */}
          <div className="flex items-center gap-2">
            {STAGES.map((st, i) => (
              <button
                key={st.name}
                onClick={() => jumpToStage(st.pct)}
                aria-label={`Jump to ${st.name}`}
                className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${
                  activeIndex === i
                    ? 'w-8 bg-[#C0C9DB]'
                    : 'w-2.5 bg-[#384C65] hover:bg-[#485F88]'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
