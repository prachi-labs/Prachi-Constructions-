import React from 'react';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  monochrome?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  monochrome = false,
}) => {
  const sizeMap = {
    sm: { box: 36, text: 'text-sm' },
    md: { box: 48, text: 'text-base' },
    lg: { box: 64, text: 'text-lg' },
    xl: { box: 88, text: 'text-xl' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>
      {/* Official Circular Architectural Emblem */}
      <div 
        className="relative flex items-center justify-center shrink-0 rounded-full transition-transform duration-300 hover:scale-105"
        style={{ width: currentSize.box, height: currentSize.box }}
      >
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_2px_12px_rgba(212,175,55,0.15)]"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle Outer Dark Background Circle */}
          <circle cx="100" cy="100" r="96" fill="#121524" stroke="#384C65" strokeWidth="1.5" />

          {/* Elegant Circular Boundary Arcs from the official logo */}
          <path
            d="M 100 16 A 84 84 0 0 1 184 100 A 84 84 0 0 1 156 160"
            stroke={monochrome ? '#9DACCC' : '#C0C9DB'}
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M 100 184 A 84 84 0 0 1 16 100 A 84 84 0 0 1 44 40"
            stroke={monochrome ? '#9DACCC' : '#C0C9DB'}
            strokeWidth="3"
            strokeLinecap="round"
          />

          {/* Architectural House / Gable Roof Accent Line */}
          <path
            d="M 125 106 L 150 88 L 164 98"
            stroke={monochrome ? '#9DACCC' : '#485F88'}
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 160 95 L 160 115"
            stroke={monochrome ? '#9DACCC' : '#9DACCC'}
            strokeWidth="2"
            strokeLinecap="round"
          />

          {/* Monogram P with architectural facade etching pattern */}
          <g>
            {/* P Stem & Serifs */}
            <path
              d="M 46 54 L 84 54 C 104 54 116 66 116 82 C 116 98 104 110 84 110 L 64 110 L 64 136 L 46 136 Z"
              fill={monochrome ? '#C0C9DB' : '#E2E8F0'}
              fillOpacity="0.95"
            />
            {/* Architectural Grid / Column Hatching inside P */}
            <line x1="56" y1="58" x2="56" y2="132" stroke="#121524" strokeWidth="1.5" />
            <line x1="68" y1="62" x2="68" y2="102" stroke="#121524" strokeWidth="1.5" />
            <line x1="80" y1="62" x2="80" y2="102" stroke="#121524" strokeWidth="1.5" />
            <line x1="92" y1="68" x2="92" y2="96" stroke="#121524" strokeWidth="1.5" />
            <line x1="56" y1="74" x2="104" y2="74" stroke="#121524" strokeWidth="1.2" />
            <line x1="56" y1="90" x2="104" y2="90" stroke="#121524" strokeWidth="1.2" />

            {/* Inner P Loop Cutout */}
            <path
              d="M 64 68 L 82 68 C 94 68 99 74 99 82 C 99 90 94 96 82 96 L 64 96 Z"
              fill="#0E111D"
            />
          </g>

          {/* Monogram C intertwined */}
          <g>
            <path
              d="M 152 74 C 136 62 118 64 104 76 C 90 89 88 112 96 128 C 105 145 125 154 146 148 C 158 144 166 136 172 128 L 156 120 C 150 126 142 132 132 132 C 118 132 108 120 108 108 C 108 94 118 82 134 82 C 144 82 150 86 156 92 Z"
              fill={monochrome ? '#9DACCC' : '#C0C9DB'}
              fillOpacity="0.9"
            />
            {/* Architectural Stone lines inside C */}
            <line x1="102" y1="100" x2="114" y2="100" stroke="#0E111D" strokeWidth="1.5" />
            <line x1="110" y1="116" x2="124" y2="116" stroke="#0E111D" strokeWidth="1.5" />
            <line x1="126" y1="134" x2="140" y2="134" stroke="#0E111D" strokeWidth="1.5" />
          </g>

          {/* Middle Horizontal Brand Ribbon Bar */}
          <rect x="36" y="103" width="128" height="18" fill="#121524" />
          <line x1="36" y1="103" x2="164" y2="103" stroke="#384C65" strokeWidth="0.8" />
          <line x1="36" y1="121" x2="164" y2="121" stroke="#384C65" strokeWidth="0.8" />

          {/* Official Lettering: PRACHI CONSTRUCTION */}
          <text
            x="100"
            y="116"
            textAnchor="middle"
            fill={monochrome ? '#C0C9DB' : '#C0C9DB'}
            fontSize="9"
            fontFamily="'Cinzel', 'Times New Roman', serif"
            letterSpacing="2.8"
            fontWeight="600"
          >
            PRACHI CONSTRUCTION
          </text>
        </svg>
      </div>

      {/* Brand Text Lockup for Topbar / Hero / Footer */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-cinzel text-base md:text-lg font-semibold tracking-wider text-white flex items-center gap-1.5">
            PRACHI <span className="text-[#C0C9DB] font-light">CONSTRUCTIONS</span>
          </span>
          <span className="text-[10px] md:text-[11px] font-sans-clean text-[#9DACCC] tracking-widest uppercase font-medium">
            Kota · Rajasthan · Est. 25+ Yrs
          </span>
        </div>
      )}
    </div>
  );
};
