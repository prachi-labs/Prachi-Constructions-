import React from 'react';
import { Search, MapPin, Building2, CalendarCheck, Sparkles } from 'lucide-react';

interface ExperienceStatsProps {
  selectedLocation: string;
  onLocationChange: (loc: string) => void;
  selectedCategory: string;
  onCategoryChange: (cat: string) => void;
  selectedStatus: string;
  onStatusChange: (status: string) => void;
  onSearchClick: () => void;
}

export const ExperienceStats: React.FC<ExperienceStatsProps> = ({
  selectedLocation,
  onLocationChange,
  selectedCategory,
  onCategoryChange,
  selectedStatus,
  onStatusChange,
  onSearchClick,
}) => {
  const stats = [
    {
      value: '25+',
      label: 'Years of Experience',
      desc: 'Decades of on-site civil mastery and building delivery.',
    },
    {
      value: '3',
      label: 'Generations of Legacy',
      desc: 'Nathu Lal → Hari Ram → Purushottam Kumawat.',
    },
    {
      value: '4+',
      label: 'Project Categories',
      desc: 'Residential, Commercial, Institutional & Civil works.',
    },
    {
      value: 'Kota & Region',
      label: 'Primary Project Presence',
      desc: 'Landmark developments across Kota, Bijoliya & Hadoti.',
    },
  ];

  return (
    <section className="relative z-20 bg-[#121524] border-b border-[#384C65]/80 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* Sleek, Compact Architectural Search Console - No blur box, reduced size */}
        <div className="p-4 md:p-5 rounded-xl bg-[#181d31] border border-[#384C65] shadow-lg">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-4 pb-3 border-b border-[#384C65]/60">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-[#485F88]" />
              <span className="text-xs uppercase tracking-[0.2em] text-[#C0C9DB] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#9DACCC]" />
                Architectural Portfolio Filter
              </span>
            </div>
            <p className="text-xs text-[#9DACCC] font-medium font-sans-clean">
              Filter by Kota regional sites, architectural category, or current execution milestone.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 items-center">
            {/* Location selector */}
            <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-[#202742] border border-[#384C65] focus-within:border-[#485F88] transition-colors">
              <label className="text-[10px] uppercase tracking-wider text-[#9DACCC] flex items-center gap-1.5 font-bold">
                <MapPin className="w-3 h-3 text-[#C0C9DB]" />
                Location
              </label>
              <select
                value={selectedLocation}
                onChange={(e) => onLocationChange(e.target.value)}
                className="bg-transparent text-xs sm:text-sm text-white font-bold focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-[#181d31] text-[#C0C9DB] font-medium">All Locations (Kota & Beyond)</option>
                <option value="kota" className="bg-[#181d31] text-[#C0C9DB] font-medium">Kota City (Urban Hubs)</option>
                <option value="bijoliya" className="bg-[#181d31] text-[#C0C9DB] font-medium">Bijoliya (Specialized)</option>
              </select>
            </div>

            {/* Category selector */}
            <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-[#202742] border border-[#384C65] focus-within:border-[#485F88] transition-colors">
              <label className="text-[10px] uppercase tracking-wider text-[#9DACCC] flex items-center gap-1.5 font-bold">
                <Building2 className="w-3 h-3 text-[#C0C9DB]" />
                Category
              </label>
              <select
                value={selectedCategory}
                onChange={(e) => onCategoryChange(e.target.value)}
                className="bg-transparent text-xs sm:text-sm text-white font-bold focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-[#181d31] text-[#C0C9DB] font-medium">All Categories (9 Projects)</option>
                <option value="residential" className="bg-[#181d31] text-[#C0C9DB] font-medium">Residential (5 Projects)</option>
                <option value="commercial" className="bg-[#181d31] text-[#C0C9DB] font-medium">Commercial (3 Projects)</option>
                <option value="institutional" className="bg-[#181d31] text-[#C0C9DB] font-medium">Institutional (1 Project)</option>
              </select>
            </div>

            {/* Status selector */}
            <div className="flex flex-col gap-1 p-2.5 rounded-lg bg-[#202742] border border-[#384C65] focus-within:border-[#485F88] transition-colors">
              <label className="text-[10px] uppercase tracking-wider text-[#9DACCC] flex items-center gap-1.5 font-bold">
                <CalendarCheck className="w-3 h-3 text-[#C0C9DB]" />
                Status
              </label>
              <select
                value={selectedStatus}
                onChange={(e) => onStatusChange(e.target.value)}
                className="bg-transparent text-xs sm:text-sm text-white font-bold focus:outline-none cursor-pointer"
              >
                <option value="all" className="bg-[#181d31] text-[#C0C9DB] font-medium">All Project Statuses</option>
                <option value="completed" className="bg-[#181d31] text-[#C0C9DB] font-medium">Completed & Delivered</option>
                <option value="ongoing" className="bg-[#181d31] text-[#C0C9DB] font-medium">Under Execution</option>
              </select>
            </div>

            {/* Search Button */}
            <div className="flex items-end">
              <button
                onClick={onSearchClick}
                className="w-full py-2.5 px-4 rounded-lg bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] text-white font-extrabold text-xs uppercase tracking-wider hover:shadow-[0_0_16px_rgba(72,95,136,0.6)] transition-all flex items-center justify-center gap-2 cursor-pointer h-[48px] shadow-md"
              >
                <Search className="w-4 h-4 stroke-[2.5]" />
                <span>Search Projects</span>
              </button>
            </div>
          </div>
        </div>

        {/* 4 Core Statistics Grid - Bold Typography */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((s, idx) => (
            <div
              key={s.label}
              className="p-5 rounded-xl bg-[#181d31] border border-[#384C65] hover:border-[#485F88] transition-all duration-300 group shadow-sm"
            >
              <div className="font-cinzel text-3xl md:text-4xl lg:text-5xl font-extrabold text-white mb-1.5 tabular-nums group-hover:text-[#C0C9DB] transition-colors drop-shadow-sm">
                {s.value}
              </div>
              <div className="text-sm font-bold text-white mb-1 font-sans-clean">
                {s.label}
              </div>
              <div className="text-xs text-[#9DACCC] font-medium leading-relaxed font-sans-clean">
                {s.desc}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
