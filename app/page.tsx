
'use client';

import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsGallery from './components/ProjectsGallery';
import SkillsSection from './components/SkillsSection';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div className="bg-[#0C0C0C] text-[#EAEAEA]">
      <HeroSection />
      <AboutSection />
      <ProjectsGallery />
      <SkillsSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
