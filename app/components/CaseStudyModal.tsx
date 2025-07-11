'use client';

import { useEffect } from 'react';

interface CaseStudyModalProps {
  project: {
    id: number;
    title: string;
    platform: string;
    role: string;
    impact: string;
    description: string;
    image: string;
  } | null; // ← ✅ Add this `| null`
  isOpen: boolean;
  onClose: () => void;
}

export default function CaseStudyModal({ project, isOpen, onClose }: CaseStudyModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const caseStudyDetails = {
    1: {
      challenge: "Create a gamified savings app that encourages UK users to save money through engaging mechanics while maintaining trust in financial transactions.",
      solution: "Designed an intuitive mobile interface with game-like progress tracking, achievement systems, and visual savings goals that make financial planning feel rewarding rather than restrictive.",
      results: ["65% increase in user retention", "40% higher average savings amount", "4.8/5 app store rating"],
      process: ["User Research & Interviews", "Competitive Analysis", "Information Architecture", "Wireframing & Prototyping", "Visual Design", "Usability Testing"],
      technologies: ["Figma", "Principle", "Adobe After Effects", "InVision"]
    },
    2: {
      challenge: "Develop a streamlined job application dashboard that helps students filter and apply for relevant positions without overwhelming complexity.",
      solution: "Created a clean, role-based filtering system with smart recommendations and application tracking that reduces cognitive load while maximizing job discovery.",
      results: ["40% reduction in application time", "85% user satisfaction score", "50% increase in successful applications"],
      process: ["Student Interviews", "Journey Mapping", "Dashboard Wireframes", "Interaction Design", "Visual Systems", "A/B Testing"],
      technologies: ["Sketch", "InVision", "Maze", "Hotjar"]
    },
    3: {
      challenge: "Design HR dashboards and scheduling tools that improve team productivity while maintaining ease of use for non-technical users.",
      solution: "Built intuitive scheduling interfaces with drag-and-drop functionality and automated conflict resolution, plus comprehensive analytics dashboards.",
      results: ["30% improvement in team productivity", "60% reduction in scheduling conflicts", "95% user adoption rate"],
      process: ["Stakeholder Workshops", "Task Analysis", "Workflow Optimization", "Dashboard Design", "Component Library", "User Training"],
      technologies: ["Figma", "Framer", "Miro", "Amplitude"]
    },
    4: {
      challenge: "Create a mentorship platform that effectively matches mentors with mentees while facilitating meaningful long-term relationships.",
      solution: "Designed an intelligent matching algorithm interface with personality-based compatibility scoring and structured interaction frameworks.",
      results: ["85% successful match rate", "70% long-term relationship retention", "4.9/5 platform satisfaction"],
      process: ["Behavioral Research", "Matching Algorithm Design", "Communication Flow Design", "Profile Creation UX", "Relationship Tools", "Success Metrics"],
      technologies: ["Adobe XD", "Principle", "Lookback", "Mixpanel"]
    },
    5: {
      challenge: "Design a playful yet structured e-commerce experience for children's toys that engages young users while ensuring parent approval.",
      solution: "Created a colorful, intuitive shopping interface with parental controls, age-appropriate product discovery, and secure checkout flows.",
      results: ["50% increase in child engagement", "35% higher parent satisfaction", "25% boost in repeat purchases"],
      process: ["Child Psychology Research", "Parent Interviews", "Playful Design Systems", "Safety-First UX", "Testing with Families", "Iterative Refinement"],
      technologies: ["Figma", "ProtoPie", "UserVoice", "Crazy Egg"]
    },
    6: {
      challenge: "Transform traditional pitch deck slides into an engaging digital presentation that improves investor engagement and comprehension.",
      solution: "Developed an interactive presentation interface with dynamic data visualization, progressive disclosure, and investor-focused navigation.",
      results: ["45% increase in investor engagement", "30% more meeting requests", "60% improvement in information retention"],
      process: ["Investor Psychology Study", "Slide-to-Screen Translation", "Interactive Prototyping", "Data Visualization", "Presentation Testing", "Investor Feedback"],
      technologies: ["Figma", "After Effects", "Lottie", "Webflow"]
    }
  };

  if (!project) return null;
const details = caseStudyDetails[project.id as keyof typeof caseStudyDetails];


  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#0C0C0C]/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative min-h-screen flex items-center justify-center p-4">
        <div className="relative bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
          {/* Header */}
          <div className="sticky top-0 bg-[#1A1A1A] border-b border-[#2A2A2A] p-6 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-[#EAEAEA]">{project.title}</h2>
              <p className="text-[#2AA1E7]">{project.description}</p>
            </div>
            <button
              onClick={onClose}
              className="w-10 h-10 flex items-center justify-center text-[#EAEAEA]/70 hover:text-[#2AA1E7] hover:bg-[#2AA1E7]/10 rounded-full transition-all duration-200 cursor-pointer"
            >
              <i className="ri-close-line text-xl"></i>
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-8">
            {/* Project Image */}
            <div className="relative overflow-hidden rounded-xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-64 md:h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/40 to-transparent"></div>
            </div>

            {/* Project Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-[#2AA1E7] mb-2">Platform</h3>
                <p className="text-[#EAEAEA]">{project.platform}</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#2AA1E7] mb-2">Role</h3>
                <p className="text-[#EAEAEA]">{project.role}</p>
              </div>
            </div>

            {/* Challenge */}
            <div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-4">Challenge</h3>
              <p className="text-[#EAEAEA]/80 leading-relaxed">{details?.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-4">Solution</h3>
              <p className="text-[#EAEAEA]/80 leading-relaxed">{details?.solution}</p>
            </div>

            {/* Results */}
            <div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-4">Results</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {details?.results.map((result, index) => (
                  <div key={index} className="bg-[#0C0C0C] border border-[#2A2A2A] rounded-xl p-4">
                    <p className="text-[#5BE49B] font-medium">{result}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Process */}
            <div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-4">Design Process</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {details?.process.map((step, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-[#2AA1E7] rounded-full"></div>
                    <span className="text-[#EAEAEA]/80 text-sm">{step}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-4">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {details?.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="px-3 py-1 bg-[#2AA1E7]/10 text-[#2AA1E7] rounded-full text-sm font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Impact */}
            <div className="bg-gradient-to-r from-[#2AA1E7]/10 to-[#5BE49B]/10 border border-[#2AA1E7]/20 rounded-xl p-6">
              <h3 className="text-xl font-bold text-[#EAEAEA] mb-3">Impact</h3>
              <p className="text-[#EAEAEA]/90 leading-relaxed">{project.impact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
