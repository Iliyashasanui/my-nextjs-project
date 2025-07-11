
'use client';

import { useState, useEffect, useRef } from 'react';
import CaseStudyModal from './CaseStudyModal';

export default function ProjectsGallery() {
  const [visibleProjects, setVisibleProjects] = useState(new Set());
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const projectRefs = useRef([]);

  const projects = [
    {
      id: 1,
      title: 'GoodBreach',
      platform: 'Mobile',
      role: 'UI/UX Design',
      impact: 'Gamified savings app increasing user retention by 65%',
      description: 'FinTech savings app for UK users',
      image: 'https://readdy.ai/api/search-image?query=Clean%20minimal%20mobile%20banking%20app%20interface%20design%20with%20savings%20visualization%2C%20modern%20fintech%20UI%20with%20simple%20geometric%20elements%20and%20professional%20color%20scheme%2C%20user-friendly%20financial%20dashboard&width=400&height=300&seq=goodbreach&orientation=landscape'
    },
    {
      id: 2,
      title: 'MockPlacement',
      platform: 'Web',
      role: 'UI/UX Strategy',
      impact: 'Student dashboard reducing application time by 40%',
      description: 'Role-filtered job application interface',
      image: 'https://readdy.ai/api/search-image?query=Professional%20job%20application%20dashboard%20interface%20with%20clean%20typography%20and%20organized%20layout%2C%20student-friendly%20design%20with%20role%20filtering%20and%20application%20tracking%2C%20modern%20web%20UI%20design&width=400&height=300&seq=mockplacement&orientation=landscape'
    },
    {
      id: 3,
      title: 'Talencred',
      platform: 'Hybrid',
      role: 'UI/UX Research',
      impact: 'Social scheduling tool improving team productivity by 30%',
      description: 'HR tool dashboards and scheduling',
      image: 'https://readdy.ai/api/search-image?query=Modern%20HR%20dashboard%20interface%20with%20scheduling%20calendar%20and%20team%20collaboration%20features%2C%20clean%20professional%20design%20with%20data%20visualization%20and%20productivity%20tools%2C%20business%20application%20UI&width=400&height=300&seq=talencred&orientation=landscape'
    },
    {
      id: 4,
      title: 'MentorMatch',
      platform: 'Web',
      role: 'UI/UX Flow',
      impact: 'Mentor-mentee connection platform with 85% match success',
      description: 'Educational mentorship flow design',
      image: 'https://readdy.ai/api/search-image?query=Educational%20mentorship%20platform%20interface%20with%20user%20matching%20and%20connection%20features%2C%20clean%20modern%20design%20for%20mentor-student%20interactions%2C%20professional%20learning%20platform%20UI&width=400&height=300&seq=mentormatch&orientation=landscape'
    },
    {
      id: 5,
      title: 'CoccoPocco',
      platform: 'Mobile',
      role: 'UI/UX Design',
      impact: 'Playful e-commerce app increasing child engagement by 50%',
      description: 'Structured toy e-commerce experience',
      image: 'https://readdy.ai/api/search-image?query=Playful%20yet%20structured%20toy%20e-commerce%20mobile%20app%20interface%20with%20colorful%20product%20cards%20and%20child-friendly%20navigation%2C%20organized%20shopping%20experience%20with%20fun%20elements%2C%20family-oriented%20design&width=400&height=300&seq=coccopocco&orientation=landscape'
    },
    {
      id: 6,
      title: 'EnsurePe Pitch Deck',
      platform: 'Web',
      role: 'Design Strategy',
      impact: 'Slide-to-screen conversion improving investor engagement',
      description: 'Investment presentation interface',
      image: 'https://readdy.ai/api/search-image?query=Professional%20investor%20presentation%20interface%20with%20clean%20slide%20layouts%20and%20business%20data%20visualization%2C%20corporate%20pitch%20deck%20design%20with%20modern%20typography%20and%20structured%20information%20hierarchy&width=400&height=300&seq=ensurepe&orientation=landscape'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
  const dataIndex = entry.target.getAttribute('data-index');
  if (dataIndex !== null) {
    const index = parseInt(dataIndex);
    setVisibleProjects(prev => new Set([...prev, index]));
  }
}
          }
        });
      },
      { threshold: 0.2 }
    );

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const handleReadCaseStudy = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <div id="projects" className="bg-[#0C0C0C] py-20 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-6">
            Case <span className="text-[#2AA1E7]">Studies</span>
          </h2>
          <p className="text-lg text-[#EAEAEA]/70 max-w-2xl mx-auto">
            Exploring design challenges and crafting solutions that drive real impact
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={(el) => (projectRefs.current[index] = el)}
              data-index={index}
              className={`group bg-[#1A1A1A] border border-[#2A2A2A] rounded-2xl overflow-hidden hover:border-[#2AA1E7]/30 transition-all duration-700 hover:scale-[1.02] hover:shadow-2xl hover:shadow-[#2AA1E7]/5 ${visibleProjects.has(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
            >
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 p-8">
                {/* Project Image */}
                <div className="lg:col-span-2">
                  <div className="relative overflow-hidden rounded-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0C0C0C]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="lg:col-span-3 space-y-6">
                  <div>
                    <div className="flex flex-wrap gap-3 mb-4">
                      <span className="px-3 py-1 bg-[#2AA1E7]/10 text-[#2AA1E7] rounded-full text-sm font-medium">
                        {project.platform}
                      </span>
                      <span className="px-3 py-1 bg-[#5BE49B]/10 text-[#5BE49B] rounded-full text-sm font-medium">
                        {project.role}
                      </span>
                    </div>
                    <h3 className="text-2xl md:text-3xl font-bold text-[#EAEAEA] group-hover:text-[#2AA1E7] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-[#EAEAEA]/70 mt-2">{project.description}</p>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-[#2AA1E7] mb-2">IMPACT</h4>
                      <p className="text-[#EAEAEA] leading-relaxed">{project.impact}</p>
                    </div>
                  </div>

                  <button 
                    onClick={() => handleReadCaseStudy(project)}
                    className="inline-flex items-center px-6 py-3 bg-transparent border-2 border-[#2AA1E7] text-[#2AA1E7] rounded-xl hover:bg-[#2AA1E7] hover:text-[#0C0C0C] transition-all duration-300 font-medium whitespace-nowrap cursor-pointer group-hover:scale-105"
                  >
                    <span>Read Case Study</span>
                    <i className="ri-arrow-right-line ml-2"></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Case Study Modal */}
      {selectedProject && (
        <CaseStudyModal
          project={selectedProject}
          isOpen={isModalOpen}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
}
