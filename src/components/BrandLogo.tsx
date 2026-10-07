import React from 'react';
import logo from '../assets/images/Prachi Construction logo.png';

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
      
      {/* Official Company Logo */}
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
        style={{
          width: currentSize.box,
          height: currentSize.box,
        }}
      >
        <img
          src={logo}
          alt="Prachi Constructions Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Text Lockup for Topbar / Hero / Footer */}
      {showText && (
        <div className="flex flex-col">
          <span className="font-cinzel text-base md:text-lg font-semibold tracking-wider text-white flex items-center gap-1.5">
            PRACHI{' '}
            <span className="text-[#C0C9DB] font-light">
              CONSTRUCTIONS
            </span>
          </span>

          <span className="text-[10px] md:text-[11px] font-sans-clean text-[#9DACCC] tracking-widest uppercase font-medium">
            Kota · Rajasthan · Est. 25+ Yrs
          </span>
        </div>
      )}
    </div>
  );
};
