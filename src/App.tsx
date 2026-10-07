/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroTransformation } from './components/HeroTransformation';
import { ExperienceStats } from './components/ExperienceStats';
import { LegacyTimeline } from './components/LegacyTimeline';
import { AboutSection } from './components/AboutSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { ProjectsSection } from './components/ProjectsSection';
import { InteractiveMap } from './components/InteractiveMap';
import { ApproachStrengthSection } from './components/ApproachStrengthSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { CostEstimatorModal } from './components/CostEstimatorModal';

export default function App() {
  // Global filter state for projects showcase
  const [locationFilter, setLocationFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [statusFilter, setStatusFilter] = useState('all');

  // Estimator modal state
  const [isEstimatorOpen, setIsEstimatorOpen] = useState(false);
  const [prefilledType, setPrefilledType] = useState<string | undefined>();
  const [prefilledCost, setPrefilledCost] = useState<string | undefined>();

  // Smooth scroll handler
  const handleNavigate = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleSearchClick = () => {
    handleNavigate('projects');
  };

  const handleInquireProject = (projectName: string) => {
    setPrefilledType(`Inquiry regarding ${projectName}`);
    handleNavigate('contact');
  };

  const handleApplyEstimate = (data: { projectType: string; areaSqFt: number; estimatedCost: string }) => {
    setPrefilledType(data.projectType);
    setPrefilledCost(`${data.estimatedCost} (${data.areaSqFt} sq. ft.)`);
    handleNavigate('contact');
  };

  return (
    <div className="min-h-screen bg-[#121524] text-[#C0C9DB] flex flex-col selection:bg-[#485F88]/40 selection:text-white">
      {/* Top Bar Navigation */}
      <Navbar
        onNavigate={handleNavigate}
        onOpenEstimator={() => setIsEstimatorOpen(true)}
      />

      {/* 1. Cinematic 3D Scroll Transformation Hero */}
      <HeroTransformation
        onExploreProjects={() => handleNavigate('projects')}
        onOurStory={() => handleNavigate('legacy')}
        onStartProject={() => handleNavigate('contact')}
      />

      {/* 2. Experience Stats & Reference Search Console */}
      <ExperienceStats
        selectedLocation={locationFilter}
        onLocationChange={setLocationFilter}
        selectedCategory={categoryFilter}
        onCategoryChange={setCategoryFilter}
        selectedStatus={statusFilter}
        onStatusChange={setStatusFilter}
        onSearchClick={handleSearchClick}
      />

      {/* 3. Selected Projects (Featured Showcase - Restored Right Below Search) */}
      <ProjectsSection
        locationFilter={locationFilter}
        categoryFilter={categoryFilter}
        statusFilter={statusFilter}
        onInquireProject={handleInquireProject}
      />

      {/* 4. Interactive Regional Footprint Map */}
      <InteractiveMap
        onSelectProject={(projId) => {
          handleNavigate('projects');
        }}
      />

      {/* 5. Our Story / Three Generations Family Legacy */}
      <LegacyTimeline />

      {/* 6. About Prachi Constructions & Founder Leadership */}
      <AboutSection onContactClick={() => handleNavigate('contact')} />

      {/* 7. Our Expertise (6 Core Disciplines) */}
      <ExpertiseSection
        onSelectCategory={(cat) => {
          setCategoryFilter(cat);
          handleNavigate('projects');
        }}
      />

      {/* 8. Approach, Strengths, Values & Vision */}
      <ApproachStrengthSection />

      {/* 9. Contact & Enquiry Form */}
      <ContactSection
        prefilledType={prefilledType}
        prefilledCost={prefilledCost}
        onExploreProjects={() => handleNavigate('projects')}
      />

      {/* 10. Footer */}
      <Footer onNavigate={handleNavigate} />

      {/* Budget & Construction Estimator Modal */}
      <CostEstimatorModal
        isOpen={isEstimatorOpen}
        onClose={() => setIsEstimatorOpen(false)}
        onApplyEstimate={handleApplyEstimate}
      />
    </div>
  );
}
