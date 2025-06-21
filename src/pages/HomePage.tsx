import React from 'react';
import FuturisticLayout from '@/components/FuturisticLayout';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ServiceExplorer from '@/components/ServiceExplorer';
import SustainabilityDashboard from '@/components/SustainabilityDashboard';
import CaseStudies from '@/components/CaseStudies';
import ContactSection from '@/components/ContactSection';
import AIChat from '@/components/AIChat';

const HomePage: React.FC = () => {
  console.log('HomePage component rendering...');

  // Add fallback rendering to debug
  try {
    console.log('Attempting to render HomePage components...');

    return (
      <FuturisticLayout data-id="ekfl43wha" data-path="src/pages/HomePage.tsx">
        <HeroSection data-id="va2mkay0d" data-path="src/pages/HomePage.tsx" />
        <AboutSection data-id="izqrhvbnn" data-path="src/pages/HomePage.tsx" />
        <ServiceExplorer data-id="1wjtva9ap" data-path="src/pages/HomePage.tsx" />
        <SustainabilityDashboard data-id="mri5q5wt4" data-path="src/pages/HomePage.tsx" />
        <CaseStudies data-id="hp8qu8ddd" data-path="src/pages/HomePage.tsx" />
        <ContactSection data-id="ns0prd0e9" data-path="src/pages/HomePage.tsx" />
        <AIChat data-id="fbxcif3db" data-path="src/pages/HomePage.tsx" />
      </FuturisticLayout>);

  } catch (error) {
    console.error('Error rendering HomePage:', error);

    // Fallback simple homepage
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a1a] via-[#1a1a2e] to-[#0a0a1a] text-white flex items-center justify-center" data-id="upt67usrt" data-path="src/pages/HomePage.tsx">
        <div className="text-center" data-id="m7tir3rw8" data-path="src/pages/HomePage.tsx">
          <h1 className="text-6xl font-bold mb-4 gradient-text" data-id="h86idt8p2" data-path="src/pages/HomePage.tsx">Green Glory</h1>
          <p className="text-xl text-gray-300 mb-8" data-id="j14exs35w" data-path="src/pages/HomePage.tsx">Future of Sustainable Security</p>
          <p className="text-red-400" data-id="rhbkkgfxg" data-path="src/pages/HomePage.tsx">Error: {error?.message || 'Unknown error occurred'}</p>
        </div>
      </div>);

  }
};

export default HomePage;