import React from 'react';
import logo from '../assets/images/Prachi Construction logo.png';

interface BrandLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
}

export const BrandLogo: React.FC<BrandLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
}) => {
  const sizeMap = {
    sm: 42,
    md: 64,
    lg: 80,
    xl: 104,
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`flex items-center gap-3.5 select-none ${className}`}>

      {/* Official Company Logo */}
      <div
        className="relative flex items-center justify-center shrink-0 transition-transform duration-300 hover:scale-105"
        style={{
          width: currentSize,
          height: currentSize,
        }}
      >
        <img
          src={logo}
          alt="Prachi Constructions Logo"
          className="w-full h-full object-contain"
        />
      </div>

      {/* Brand Text Lockup */}
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
