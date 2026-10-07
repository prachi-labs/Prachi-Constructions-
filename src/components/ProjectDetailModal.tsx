import React from 'react';
import { X, MapPin, Building, Calendar, UserCheck, ShieldCheck, Phone, CheckCircle } from 'lucide-react';

export interface ProjectData {
  id: string;
  name: string;
  location: string;
  category: 'residential' | 'commercial' | 'institutional';
  status: 'completed' | 'ongoing';
  clientOrAssociation?: string;
  shortDesc: string;
  fullDesc: string;
  image: string;
  year?: string;
  scope: string[];
  specs: { label: string; value: string }[];
}

interface ModalProps {
  project: ProjectData | null;
  onClose: () => void;
  onInquire: (projectName: string) => void;
}

export const ProjectDetailModal: React.FC<ModalProps> = ({ project, onClose, onInquire }) => {
  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-[#181d31] border border-[#384C65] rounded-2xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-[#C0C9DB]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/70 hover:bg-black text-[#9DACCC] hover:text-white border border-[#384C65] flex items-center justify-center transition-colors cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hero Image Area */}
        <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-t-2xl">
          <img
            src={project.image}
            alt={project.name}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#181d31] via-transparent to-black/30" />
          
          {/* Status Badge */}
          <div className="absolute top-4 left-4 flex items-center gap-2">
            <span
              className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${
                project.status === 'completed'
                  ? 'bg-[#202c42] text-[#C0C9DB] border border-[#485F88]'
                  : 'bg-[#28253b] text-[#C0C9DB] border border-[#485F88]'
              }`}
            >
              {project.status === 'completed' ? 'Executed & Delivered' : 'Currently Under Execution'}
            </span>
          </div>

          {/* Project Title Over Image Bottom */}
          <div className="absolute bottom-4 left-6 right-6">
            <div className="text-xs uppercase tracking-widest text-[#C0C9DB] font-bold mb-1">
              {project.category.toUpperCase()} PROJECT
            </div>
            <h2 className="font-cinzel text-2xl sm:text-4xl font-extrabold text-white drop-shadow-md">
              {project.name}
            </h2>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Key Quick Metadata Strip */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-[#202742] border border-[#384C65] text-xs font-medium">
            <div>
              <span className="text-[#9DACCC] block mb-0.5">Location</span>
              <span className="font-bold text-white flex items-center gap-1">
                <MapPin className="w-3.5 h-3.5 text-[#C0C9DB]" />
                {project.location}
              </span>
            </div>
            <div>
              <span className="text-[#9DACCC] block mb-0.5">Category</span>
              <span className="font-bold text-white capitalize flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-[#C0C9DB]" />
                {project.category}
              </span>
            </div>
            {project.clientOrAssociation && (
              <div className="col-span-2 sm:col-span-2">
                <span className="text-[#9DACCC] block mb-0.5">Owner / Associated Group</span>
                <span className="font-bold text-[#C0C9DB] flex items-center gap-1">
                  <UserCheck className="w-3.5 h-3.5 text-[#485F88]" />
                  {project.clientOrAssociation}
                </span>
              </div>
            )}
          </div>

          {/* Description */}
          <div>
            <h3 className="font-cinzel text-lg font-bold text-white mb-2">
              Project Overview & Execution Context
            </h3>
            <p className="text-sm text-[#C0C9DB] leading-relaxed font-sans-clean font-medium">
              {project.fullDesc}
            </p>
          </div>

          {/* Engineering Scope */}
          <div>
            <h4 className="font-cinzel text-base font-bold text-white mb-3">
              Civil & Architectural Scope
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {project.scope.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs text-[#C0C9DB] font-medium">
                  <CheckCircle className="w-4 h-4 text-[#485F88] shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Project Specifications */}
          {project.specs.length > 0 && (
            <div className="pt-4 border-t border-[#384C65]/60">
              <h4 className="font-cinzel text-base font-bold text-white mb-3">
                Key Technical Specifications
              </h4>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {project.specs.map((s, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-[#202742] border border-[#384C65]">
                    <span className="text-[11px] text-[#9DACCC] block font-bold">{s.label}</span>
                    <span className="text-xs font-bold text-white mt-0.5 block">{s.value}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Bottom Actions */}
          <div className="pt-6 border-t border-[#384C65]/60 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-[#9DACCC] flex items-center gap-2 font-medium">
              <ShieldCheck className="w-4 h-4 text-[#485F88]" />
              <span>Executed under direct supervision of Mr. Purushottam Kumawat</span>
            </div>

            <button
              onClick={() => {
                onClose();
                onInquire(project.name);
              }}
              className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-[#384C65] via-[#485F88] to-[#9DACCC] text-white font-bold text-xs uppercase tracking-wider hover:shadow-[0_0_20px_rgba(72,95,136,0.5)] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>Enquire About Similar Project</span>
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
