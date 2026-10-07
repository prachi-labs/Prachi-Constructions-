import React, { useState } from 'react';
import { MapPin, Navigation, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { ProjectData } from './ProjectDetailModal';

interface InteractiveMapProps {
  onSelectProject: (projectId: string) => void;
}

interface MapMarker {
  id: string;
  name: string;
  area: string;
  type: string;
  status: 'completed' | 'ongoing';
  topPct: number;
  leftPct: number;
}

export const InteractiveMap: React.FC<InteractiveMapProps> = ({ onSelectProject }) => {
  const [activePinId, setActivePinId] = useState<string>('urban-heights');

  const markers: MapMarker[] = [
    { id: 'urban-heights', name: 'Urban Heights', area: 'Central Kota', type: 'Residential Tower', status: 'completed', topPct: 42, leftPct: 48 },
    { id: 'ganpati-flats', name: 'Ganpati Flats', area: 'Ek Number Road, Kota', type: 'Residential Apartments', status: 'completed', topPct: 35, leftPct: 40 },
    { id: 'shakun-marvel', name: 'Shakun Marvel', area: 'Dhan Mandi, Kota', type: 'Commercial Market Hub', status: 'completed', topPct: 50, leftPct: 44 },
    { id: 'sukhmani-apartment', name: 'Sukhmani Apartment', area: 'Bajrang Nagar, Kota', type: 'Residential Suites', status: 'completed', topPct: 38, leftPct: 56 },
    { id: 'fortune-elita', name: 'Fortune Elita', area: 'R.K. Puram, Kota', type: 'Luxury Residences', status: 'completed', topPct: 58, leftPct: 52 },
    { id: 'bhuvnesh-bal-vidyalaya', name: 'Bhuvnesh Bal Vidyalaya', area: 'Kota Institutional Zone', type: 'School Campus', status: 'completed', topPct: 46, leftPct: 36 },
    { id: 'kota-hyundai-showrooms', name: 'Kota Hyundai Showrooms', area: 'Kota Main Highway', type: 'Automobile Showroom', status: 'ongoing', topPct: 30, leftPct: 62 },
    { id: 'the-nexus', name: 'The Nexus', area: 'Near Ortus Hotel, Kota', type: 'Commercial Complex', status: 'ongoing', topPct: 48, leftPct: 60 },
    { id: 'kailash-meena-kothi', name: 'Kailash Meena Kothi', area: 'Bijoliya Region', type: 'Grand Luxury Kothi', status: 'ongoing', topPct: 75, leftPct: 82 },
  ];

  const activeMarker = markers.find((m) => m.id === activePinId) || markers[0];

  return (
    <section className="relative bg-[#121524] py-20 px-6 md:px-12 border-b border-[#384C65]/80">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <span className="text-[11px] uppercase tracking-[0.25em] text-[#9DACCC] font-bold block mb-2">
              Regional Geolocation Presence
            </span>
            <h2 className="font-cinzel text-3xl md:text-4xl font-extrabold tracking-tight text-white">
              Explore Our Footprint Across <span className="text-[#C0C9DB] italic font-garamond">Kota & Hadoti</span>
            </h2>
          </div>
          <p className="text-xs text-[#9DACCC] max-w-md font-sans-clean font-medium">
            Interactive map representing our core project footprints across Kota urban sectors and regional developments in Bijoliya.
          </p>
        </div>

        {/* Map Container: Dark luxury styling with architectural pins */}
        <div className="relative rounded-3xl bg-[#0e111d] border border-[#384C65] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.7)] p-6 md:p-8 min-h-[500px] flex flex-col justify-between">
          
          {/* Architectural Road Grid Vectors Simulation */}
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="map-grid" width="60" height="60" patternUnits="userSpaceOnUse">
                  <path d="M 60 0 L 0 0 0 60" fill="none" stroke="#232a42" strokeWidth="0.8" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#map-grid)" />
              {/* Stylized River Chambal flowing through Kota */}
              <path
                d="M 100 0 C 250 200, 320 300, 480 600"
                fill="none"
                stroke="#1b243b"
                strokeWidth="18"
                opacity="0.5"
              />
              <path
                d="M 100 0 C 250 200, 320 300, 480 600"
                fill="none"
                stroke="#485F88"
                strokeWidth="1.5"
                strokeDasharray="4 6"
                opacity="0.4"
              />
              {/* Arterial Highways */}
              <line x1="0" y1="240" x2="1000" y2="280" stroke="#384C65" strokeWidth="3" />
              <line x1="300" y1="0" x2="600" y2="600" stroke="#384C65" strokeWidth="3" />
              <line x1="700" y1="100" x2="900" y2="500" stroke="#384C65" strokeWidth="2" strokeDasharray="6 4" />
            </svg>
          </div>

          {/* Region Badges */}
          <div className="relative z-10 flex items-center justify-between">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#181d31] border border-[#384C65] text-xs">
              <Navigation className="w-4 h-4 text-[#C0C9DB]" />
              <span className="font-bold text-white">Kota & Hadoti Territory Map</span>
              <span className="text-[#384C65]">·</span>
              <span className="text-[#9DACCC] font-medium">Rajasthan, India</span>
            </div>

            <div className="hidden sm:flex items-center gap-4 text-xs font-bold">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#485F88]" />
                <span className="text-[#C0C9DB]">Completed Projects</span>
              </div>
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-[#9DACCC]" />
                <span className="text-[#C0C9DB]">Ongoing Projects</span>
              </div>
            </div>
          </div>

          {/* Pins Layer */}
          <div className="relative z-10 w-full h-[320px] my-4">
            {markers.map((marker) => {
              const isActive = marker.id === activePinId;
              return (
                <div
                  key={marker.id}
                  style={{ top: `${marker.topPct}%`, left: `${marker.leftPct}%` }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
                  onClick={() => setActivePinId(marker.id)}
                >
                  {/* Pin Dot & Glow */}
                  <div className="relative flex items-center justify-center">
                    <span
                      className={`absolute w-8 h-8 rounded-full transition-all duration-300 ${
                        isActive
                          ? 'bg-[#485F88]/40 scale-125 animate-ping'
                          : 'group-hover:bg-white/10'
                      }`}
                    />
                    <div
                      className={`w-6 h-6 rounded-full flex items-center justify-center border transition-transform duration-200 ${
                        isActive
                          ? 'bg-[#C0C9DB] border-white scale-125 shadow-[0_0_15px_rgba(192,201,219,0.8)]'
                          : marker.status === 'completed'
                          ? 'bg-[#181d31] border-[#485F88] text-[#C0C9DB] group-hover:scale-110'
                          : 'bg-[#242b45] border-[#9DACCC] text-white group-hover:scale-110'
                      }`}
                    >
                      <MapPin className={`w-3.5 h-3.5 ${isActive ? 'text-[#121524]' : ''}`} />
                    </div>
                  </div>

                  {/* Marker Floating Tag */}
                  <div
                    className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[10px] whitespace-nowrap font-sans-clean transition-all duration-200 pointer-events-none ${
                      isActive
                        ? 'bg-[#181d31] text-[#C0C9DB] border border-[#485F88] shadow-lg opacity-100 font-bold'
                        : 'bg-[#121524]/90 text-[#9DACCC] opacity-0 group-hover:opacity-100'
                    }`}
                  >
                    {marker.name}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Card for Selected Marker */}
          <div className="relative z-10 p-4 sm:p-5 rounded-2xl bg-[#181d31] border border-[#384C65] shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#121524] border border-[#384C65] flex items-center justify-center text-[#C0C9DB] shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-cinzel text-base font-bold text-white">
                    {activeMarker.name}
                  </h4>
                  <span
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-bold ${
                      activeMarker.status === 'completed'
                        ? 'bg-[#202c42] text-[#C0C9DB] border border-[#485F88]/60'
                        : 'bg-[#28253b] text-[#C0C9DB] border border-[#485F88]/60'
                    }`}
                  >
                    {activeMarker.status}
                  </span>
                </div>
                <div className="text-xs text-[#9DACCC] font-sans-clean font-medium">
                  {activeMarker.area} · {activeMarker.type}
                </div>
              </div>
            </div>

            <button
              onClick={() => onSelectProject(activeMarker.id)}
              className="px-4 py-2 rounded-lg bg-[#202742] hover:bg-[#283254] border border-[#384C65] text-xs font-bold text-[#C0C9DB] hover:text-white transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap self-stretch sm:self-auto justify-center"
            >
              <span>Inspect Project Specifications</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
