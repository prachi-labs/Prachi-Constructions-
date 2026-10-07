import React, { useState } from 'react';
import { ProjectData, ProjectDetailModal } from './ProjectDetailModal';
import { MapPin, ArrowUpRight, CheckCircle2, Clock, Sparkles } from 'lucide-react';

// Import our verified generated images
import urbanHeightsImg from '../assets/images/project_urban_heights_1791342468221.jpg';
import commercialImg from '../assets/images/project_commercial_nexus_1791342524880.jpg';
import kothiImg from '../assets/images/project_kailash_meena_kothi_1791342552714.jpg';
import schoolImg from '../assets/images/project_institutional_campus_1791342565210.jpg';
import stage3Img from '../assets/images/building_stage3_architecture_1791342397917.jpg';
import stage4Img from '../assets/images/building_stage4_finishing_1791342412580.jpg';
import stage5Img from '../assets/images/building_stage5_completed_1791342426062.jpg';

interface ProjectsSectionProps {
  locationFilter: string;
  categoryFilter: string;
  statusFilter: string;
  onInquireProject: (projectName: string) => void;
}

export const PROJECTS_DATA: ProjectData[] = [
  {
    id: 'urban-heights',
    name: 'Urban Heights',
    location: 'Kota',
    category: 'residential',
    status: 'completed',
    clientOrAssociation: 'Owner: Mr. Om Khotari',
    shortDesc: 'Prominent multi-story residential apartment development featuring contemporary architectural massing and high-spec structural engineering.',
    fullDesc: 'Urban Heights is an esteemed residential project in Kota developed for Mr. Om Khotari. Prachi Constructions delivered comprehensive civil structural execution, basement seismic engineering, and modern exterior facade finishes, establishing high-quality residential standards in Kota.',
    image: urbanHeightsImg,
    scope: [
      'Multi-level RCC frame execution',
      'Basement foundation & seismic detailing',
      'Architectural balcony glass & facade panels',
      'Elevator shafts & common utilities civil works',
    ],
    specs: [
      { label: 'Project Type', value: 'Residential Apartments' },
      { label: 'Civil Execution', value: 'Complete RCC & Masonry' },
      { label: 'Client / Owner', value: 'Mr. Om Khotari' },
    ],
  },
  {
    id: 'lakshya-towers',
    name: 'LAKSHYA TOWERS',
    location: 'Ek Number Road, Kota',
    category: 'residential',
    status: 'completed',
    shortDesc: 'Landmark residential apartment complex situated on prime Ek Number Road with spacious floor layouts and resilient concrete construction.',
    fullDesc: 'Located on Ek Number Road, LAKSHYA TOWERS represents a benchmark in urban residential housing in Kota. Built with attention to structural longevity, natural cross-ventilation, and durable finishings that have stood the test of time.',
    image: stage3Img,
    scope: [
      'Turnkey civil structural framework',
      'Brick masonry & precision plastering',
      'Terrace waterproofing & thermal insulation',
      'Comprehensive plumbing & electrical conduit embedment',
    ],
    specs: [
      { label: 'Location Hub', value: 'Ek Number Road, Kota' },
      { label: 'Building Class', value: 'Multi-Family Residence' },
      { label: 'Status', value: 'Fully Occupied & Delivered' },
    ],
  },
  {
    id: 'shakun-marvel',
    name: 'Shakun Marvel',
    location: 'Dhan Mandi, Kota',
    category: 'commercial',
    status: 'completed',
    clientOrAssociation: 'Associated with Pandey Group',
    shortDesc: 'Premier commercial and trading complex in the bustling trade district of Dhan Mandi, engineered for heavy commercial loads.',
    fullDesc: 'Executed in collaboration with the renowned Pandey Group, Shakun Marvel is a marquee commercial shopping and trade hub in Dhan Mandi, Kota. The building incorporates wide commercial column grids, heavy-load floor slabs, and high-efficiency circulation paths.',
    image: commercialImg,
    scope: [
      'Commercial grade high-strength concrete pours',
      'Post-tensioned beam grid for open shop layouts',
      'Heavy-duty commercial fire-exit staircases',
      'Dhan Mandi site logistics & tight-quarter execution',
    ],
    specs: [
      { label: 'Associated Partner', value: 'Pandey Group' },
      { label: 'Location', value: 'Dhan Mandi, Kota' },
      { label: 'Use Case', value: 'Commercial Retail Hub' },
    ],
  },
 {
  id: 'west-side-kota',
  name: 'West Side Kota',
  location: 'Kota, Rajasthan',
  category: 'commercial',
  status: 'completed',
  shortDesc: 'Commercial retail fashion and lifestyle store designed for a modern and engaging shopping experience.',
  fullDesc: 'West Side Kota is a commercial retail fashion and lifestyle store developed with a focus on modern retail functionality, quality civil execution, and a customer-oriented shopping environment.',
  image: commercialImg,
  scope: [
    'Commercial civil structural execution',
    'Retail space development',
    'Electrical and plumbing infrastructure',
    'Interior finishing and retail frontage works',
  ],
  specs: [
    { label: 'Project Type', value: 'Fashion & Lifestyle Retail Store' },
    { label: 'Location', value: 'Kota, Rajasthan' },
    { label: 'Status', value: 'Completed & Delivered' },
  ],
},
{
    id: 'sukhmani-apartment',
    name: 'Sukhmani Apartment',
    location: 'Bajrang Nagar, Kota',
    category: 'residential',
    status: 'completed',
    shortDesc: 'Refined contemporary family apartments in Bajrang Nagar with premium stone accents and structural durability.',
    fullDesc: 'Sukhmani Apartment in Bajrang Nagar was executed with a focus on modern aesthetic sensibilities and peaceful residential living. Prachi Constructions oversaw full structural execution, exterior weather-resistant coatings, and high-end residential common areas.',
    image: stage4Img,
    scope: [
      'RCC framed superstructure & shear walls',
      'High-grade exterior plaster & waterproofing',
      'Underground & overhead water reservoir construction',
      'Stone cladding & entrance foyer civil works',
    ],
    specs: [
      { label: 'Sector', value: 'Bajrang Nagar, Kota' },
      { label: 'Designation', value: 'Residential Apartments' },
      { label: 'Quality Standard', value: 'Premium Grade Concrete' },
    ],
  },
  {
    id: 'fortune-elita',
    name: 'Fortune Elita',
    location: 'R.K. Puram, Kota',
    category: 'residential',
    status: 'completed',
    shortDesc: 'Prestigious residential development in the upscale enclave of R.K. Puram, boasting sleek cantilevered balconies and luxury finishes.',
    fullDesc: 'Situated in the elite neighborhood of R.K. Puram, Kota, Fortune Elita showcases modern luxury multi-family living. The project features clean geometric facades, floor-to-ceiling glass balconies, and robust civil works executed to the highest specifications.',
    image: stage5Img,
    scope: [
      'Complex architectural cantilevers & pergolas',
      'Deep foundation with specialized soil stabilization',
      'Luxury entrance lobby civil detailing',
      'Parking deck with heavy-duty paver subbase',
    ],
    specs: [
      { label: 'Prime Location', value: 'R.K. Puram, Kota' },
      { label: 'Category', value: 'Luxury Residential' },
      { label: 'Status', value: 'Delivered & Handed Over' },
    ],
  },
  {
    id: 'bhuvnesh-bal-vidyalaya',
    name: 'Bhuvnesh Bal Vidyalaya',
    location: 'Kota',
    category: 'institutional',
    status: 'completed',
    shortDesc: 'Extensive educational campus building with high-capacity classrooms, wide corridors, and safe student recreational courtyards.',
    fullDesc: 'Bhuvnesh Bal Vidyalaya is a cornerstone educational institution in Kota. Prachi Constructions delivered the campus civil infrastructure with strict adherence to institutional building codes, wide fire-safe corridors, child-friendly staircases, and durable low-maintenance materials.',
    image: schoolImg,
    scope: [
      'Institutional multi-wing classroom blocks',
      'Wide central assembly courtyard & pavers',
      'High acoustic performance partition walls',
      'Durable institutional flooring & railings',
    ],
    specs: [
      { label: 'Category', value: 'Institutional Education' },
      { label: 'Location', value: 'Kota, Rajasthan' },
      { label: 'Impact', value: 'Serving Generations of Students' },
    ],
  },
  {
    id: 'kota-hyundai-showrooms',
    name: 'Kota Hyundai Showrooms',
    location: 'Kota',
    category: 'commercial',
    status: 'ongoing',
    shortDesc: 'New & Old Showroom Projects — expansive automotive retail showrooms featuring double-height glass facades and modern workshop bays.',
    fullDesc: 'Prachi Constructions is associated with both the New and Old Hyundai Showroom projects in Kota. These high-visibility automotive dealerships require precision flat floors for vehicle display, wide unobstructed spans for service bays, and sleek modern corporate branding architecture.',
    image: commercialImg,
    scope: [
      'Double-height structural steel & RCC framing',
      'Super-flat industrial floor slab for car displays',
      'Automotive service bay drainage & oil separators',
      'Modern glass curtain wall perimeter structure',
    ],
    specs: [
      { label: 'Brand', value: 'Hyundai Dealership' },
      { label: 'Scope', value: 'New & Old Showroom Facilities' },
      { label: 'Status', value: 'Active Execution / Phase Upgrades' },
    ],
  },
  {
    id: 'the-nexus',
    name: 'The Nexus',
    location: 'Near Ortus Hotel, Kota',
    category: 'commercial',
    status: 'ongoing',
    shortDesc: 'A premier upcoming commercial center near Ortus Hotel, delivering high-end retail spaces and contemporary corporate offices.',
    fullDesc: 'Located strategically near Ortus Hotel in Kota, The Nexus is set to be one of the city’s premier commercial shopping and office destinations. Prachi Constructions is managing the civil structural execution, expansive multi-level retail floor slabs, and modern glass facade engineering.',
    image: commercialImg,
    scope: [
      'Multi-level commercial structure near Ortus Hotel',
      'High-ceiling retail show-windows',
      'Central escalator / atrium structural framing',
      'Basement parking with mechanical ventilation ducts',
    ],
    specs: [
      { label: 'Prominent Landmark', value: 'Near Ortus Hotel, Kota' },
      { label: 'Class', value: 'Commercial Complex' },
      { label: 'Status', value: 'Under Active Construction' },
    ],
  },
  {
    id: 'kailash-meena-kothi',
    name: 'Kailash Meena Kothi',
    location: 'Bijoliya',
    category: 'residential',
    status: 'ongoing',
    shortDesc: 'Currently Under Execution — A grand luxury private residence kothi blending traditional Rajasthani stone craftsmanship with contemporary villa architecture.',
    fullDesc: 'Currently under active execution in Bijoliya, the Kailash Meena Kothi is a magnificent private estate residence. Blending regional stone carving heritage with cutting-edge reinforced concrete engineering, expansive courtyards, luxury verandas, and panoramic architectural terraces.',
    image: kothiImg,
    scope: [
      'Custom luxury kothi private estate execution',
      'Master stone masonry integration (Bijoliya stone)',
      'Expansive column-free living halls & high ceilings',
      'Extensive outdoor landscaping & veranda colonnades',
    ],
    specs: [
      { label: 'Location', value: 'Bijoliya, Rajasthan' },
      { label: 'Residence Type', value: 'Grand Luxury Kothi' },
      { label: 'Current Phase', value: 'Under Civil Execution' },
    ],
  },
];

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  locationFilter,
  categoryFilter,
  statusFilter,
  onInquireProject,
}) => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [activeCategoryTab, setActiveCategoryTab] = useState<string>('all');

  // Unified filter logic - tabs take active priority so projects are never lost
  const effectiveCategory = activeCategoryTab !== 'all' ? activeCategoryTab : categoryFilter;

  const filteredProjects = PROJECTS_DATA.filter((proj) => {
    // 1. Category filter
    if (effectiveCategory !== 'all' && proj.category !== effectiveCategory) {
      return false;
    }

    // 2. Location filter (if set in console)
    if (locationFilter !== 'all') {
      if (locationFilter === 'kota' && !proj.location.toLowerCase().includes('kota')) return false;
      if (locationFilter === 'bijoliya' && !proj.location.toLowerCase().includes('bijoliya')) return false;
    }

    // 3. Status filter (if set in console)
    if (statusFilter !== 'all' && proj.status !== statusFilter) {
      return false;
    }

    return true;
  });

  const resetAllFilters = () => {
    setActiveCategoryTab('all');
  };

  return (
    <section id="projects" className="relative bg-[#121524] py-20 px-6 md:px-12 border-b border-[#384C65]/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 mb-2.5">
              <span className="text-[11px] uppercase tracking-[0.25em] text-[#C0C9DB] font-bold flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-[#9DACCC]" />
                Selected Projects
              </span>
              <span className="text-[#384C65]">·</span>
              <span className="text-[11px] uppercase tracking-wider text-[#9DACCC] font-bold">
                Kota & Rajasthan ({PROJECTS_DATA.length} Landmark Projects)
              </span>
            </div>
            <h2 className="font-cinzel text-3xl md:text-5xl font-extrabold tracking-tight text-white">
              Built Through <span className="text-[#C0C9DB] italic font-garamond font-normal">Experience</span>
            </h2>
            <p className="text-[#C0C9DB] text-sm mt-2 font-medium font-sans-clean">
              All 10 premier executed and active construction projects in Kota & Rajasthan. Click any project card to inspect civil specifications, structural scope, and engineering details.
            </p>
          </div>

          {/* Interactive Category Tabs with Project Counts */}
          <div className="flex items-center gap-1.5 p-1.5 bg-[#181d31] rounded-xl border border-[#384C65] self-start md:self-auto overflow-x-auto max-w-full shadow-sm">
            {[
              { id: 'all', label: 'All Projects', count: PROJECTS_DATA.length },
              { id: 'residential', label: 'Residential', count: 5 },
              { id: 'commercial', label: 'Commercial', count: 4 },
              { id: 'institutional', label: 'Institutional', count: 1 },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategoryTab(tab.id)}
                className={`px-3.5 py-1.5 text-xs rounded-lg transition-all whitespace-nowrap cursor-pointer font-bold ${
                  activeCategoryTab === tab.id
                    ? 'bg-gradient-to-r from-[#384C65] to-[#485F88] text-white shadow-sm'
                    : 'text-[#9DACCC] hover:text-white hover:bg-[#202742]'
                }`}
              >
                <span>{tab.label}</span>
                <span className={`ml-1.5 px-1.5 py-0.2 rounded-full text-[10px] font-extrabold ${
                  activeCategoryTab === tab.id ? 'bg-white/20 text-white' : 'bg-[#202742] text-[#9DACCC]'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Filter status strip with quick reset if not all shown */}
        {filteredProjects.length < PROJECTS_DATA.length && (
          <div className="mb-6 px-4 py-2.5 rounded-lg bg-[#181d31] border border-[#384C65] flex items-center justify-between">
            <span className="text-xs text-[#9DACCC] font-medium">
              Showing <strong className="text-white font-bold">{filteredProjects.length}</strong> of <strong className="text-[#C0C9DB] font-bold">{PROJECTS_DATA.length}</strong> projects
            </span>
            <button
              onClick={resetAllFilters}
              className="text-xs font-bold text-[#C0C9DB] hover:text-white underline cursor-pointer"
            >
              Show All 10 Projects
            </button>
          </div>
        )}

        {/* Projects Grid: Reference-Inspired Cinematic Luxury Cards (No Blur, Bold Text, Clear) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-2xl bg-[#181d31] border border-[#384C65] hover:border-[#485F88] overflow-hidden shadow-[0_12px_36px_rgba(0,0,0,0.6)] transition-all duration-300 hover:translate-y-[-4px] cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Zoom Effect */}
              <div className="relative h-64 w-full overflow-hidden bg-[#121524]">
                <img
                  src={project.image}
                  alt={project.name}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#181d31] via-transparent to-black/25" />

                {/* Top Badge (Completed vs Under Execution) - Solid & Sharp, No Blur */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span
                    className={`px-2.5 py-1 rounded-md text-[10px] uppercase font-extrabold tracking-wider shadow-md ${
                      project.status === 'completed'
                        ? 'bg-[#202c42] text-[#C0C9DB] border border-[#485F88]/70'
                        : 'bg-[#28253b] text-[#C0C9DB] border border-[#485F88]/70'
                    }`}
                  >
                    {project.status === 'completed' ? 'Delivered' : 'Under Execution'}
                  </span>

                  <span className="w-8 h-8 rounded-full bg-black/80 border border-[#485F88] text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <ArrowUpRight className="w-4 h-4 text-[#C0C9DB]" />
                  </span>
                </div>

                {/* Location overlay - Bold */}
                <div className="absolute bottom-3 left-4 flex items-center gap-1.5 text-xs text-white font-bold font-sans-clean drop-shadow-[0_1px_4px_rgba(0,0,0,1)]">
                  <MapPin className="w-3.5 h-3.5 text-[#C0C9DB]" />
                  <span>{project.location}</span>
                </div>
              </div>

              {/* Card Content Area - Bold, Sharp & Clean */}
              <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-widest text-[#9DACCC] font-extrabold">
                    {project.category}
                  </div>
                  <h3 className="font-cinzel text-xl font-extrabold text-white group-hover:text-[#C0C9DB] transition-colors mt-0.5">
                    {project.name}
                  </h3>

                  {project.clientOrAssociation && (
                    <div className="text-xs text-[#C0C9DB] font-bold font-sans-clean mt-1">
                      {project.clientOrAssociation}
                    </div>
                  )}

                  <p className="text-xs text-[#9DACCC] font-medium leading-relaxed font-sans-clean mt-2 line-clamp-2">
                    {project.shortDesc}
                  </p>
                </div>

                {/* Card Footer */}
                <div className="pt-4 border-t border-[#384C65]/60 flex items-center justify-between text-xs">
                  <span className="text-[#9DACCC] font-semibold font-sans-clean">
                    {project.status === 'completed' ? 'Civil Delivery Complete' : 'Active Site Work'}
                  </span>
                  <span className="text-[#C0C9DB] font-bold group-hover:translate-x-1 transition-transform inline-flex items-center gap-1">
                    Details →
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state if filters match none */}
        {filteredProjects.length === 0 && (
          <div className="p-12 text-center rounded-2xl bg-[#181d31] border border-[#384C65]">
            <p className="text-[#9DACCC] text-sm mb-4 font-medium">
              No projects found matching the selected filter criteria.
            </p>
            <button
              onClick={() => setActiveCategoryTab('all')}
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-[#384C65] to-[#485F88] text-white font-bold text-xs uppercase cursor-pointer hover:shadow-md transition-all"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* Project Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onInquire={(projName) => onInquireProject(projName)}
      />
    </section>
  );
};
