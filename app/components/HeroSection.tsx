
'use client';

import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  // Fixed particle positions to avoid hydration mismatch
  const particles = [
    { left: 10, top: 15, delay: 0 },
    { left: 85, top: 25, delay: 0.5 },
    { left: 25, top: 70, delay: 1 },
    { left: 70, top: 80, delay: 1.5 },
    { left: 15, top: 45, delay: 2 },
    { left: 90, top: 35, delay: 2.5 },
    { left: 40, top: 20, delay: 3 },
    { left: 60, top: 90, delay: 3.5 },
    { left: 5, top: 65, delay: 0.8 },
    { left: 95, top: 55, delay: 1.3 },
    { left: 30, top: 10, delay: 1.8 },
    { left: 75, top: 40, delay: 2.3 },
    { left: 20, top: 85, delay: 2.8 },
    { left: 80, top: 15, delay: 3.3 },
    { left: 45, top: 75, delay: 0.3 },
    { left: 65, top: 30, delay: 1.1 },
    { left: 35, top: 60, delay: 1.6 },
    { left: 55, top: 50, delay: 2.1 },
    { left: 12, top: 35, delay: 2.6 },
    { left: 88, top: 75, delay: 3.1 }
  ];

  return (
    <div className="relative min-h-screen bg-[#0C0C0C] flex items-center justify-center px-8 overflow-hidden">
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Floating Geometric Shapes */}
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-[#2AA1E7]/20 to-[#5BE49B]/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-[#2AA1E7]/30 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
        <div className="absolute bottom-32 left-32 w-40 h-40 bg-gradient-to-br from-[#5BE49B]/25 to-[#2AA1E7]/25 rounded-lg animate-bounce" style={{ animationDuration: '3s' }}></div>
        
        {/* Animated Grid Lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#2AA1E7] to-transparent animate-pulse"></div>
          <div className="absolute top-0 right-1/4 w-px h-full bg-gradient-to-b from-transparent via-[#5BE49B] to-transparent animate-pulse" style={{ animationDelay: '1s' }}></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2AA1E7] to-transparent animate-pulse" style={{ animationDelay: '2s' }}></div>
          <div className="absolute bottom-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#5BE49B] to-transparent animate-pulse" style={{ animationDelay: '3s' }}></div>
        </div>

        {/* Fixed Floating Particles */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-[#2AA1E7] rounded-full animate-ping"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: '3s'
            }}
          ></div>
        ))}

        {/* Interactive Mouse Follower */}
        <div
          className="absolute w-64 h-64 bg-gradient-radial from-[#2AA1E7]/10 to-transparent rounded-full pointer-events-none transition-all duration-300 ease-out"
          style={{
            left: mousePosition.x - 128,
            top: mousePosition.y - 128,
            filter: 'blur(40px)'
          }}
        ></div>

        {/* Hexagonal Patterns */}
        <div className="absolute top-1/3 left-16 w-20 h-20 border-2 border-[#2AA1E7]/50 transform rotate-12 animate-spin" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '15s' }}></div>
        <div className="absolute bottom-1/3 right-16 w-16 h-16 border-2 border-[#5BE49B]/50 transform -rotate-12 animate-spin" style={{ clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)', animationDuration: '12s' }}></div>

        {/* Glowing Orbs */}
        <div className="absolute top-1/2 left-8 w-8 h-8 bg-[#2AA1E7] rounded-full animate-pulse shadow-lg" style={{ boxShadow: '0 0 20px #2AA1E7' }}></div>
        <div className="absolute top-1/4 right-8 w-6 h-6 bg-[#5BE49B] rounded-full animate-pulse shadow-lg" style={{ boxShadow: '0 0 15px #5BE49B', animationDelay: '1s' }}></div>

        {/* Animated Lines */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#2AA1E7]/50 to-transparent animate-pulse" style={{ animationDuration: '4s' }}></div>
      </div>

      {/* Main Content */}
      <div className={`relative z-10 text-center max-w-4xl mx-auto transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        {/* Animated Name with Glitch Effect */}
        <div className="relative mb-6">
          <h1 className="text-6xl md:text-8xl font-bold text-[#EAEAEA] mb-2 relative">
            <span className="relative inline-block">
              I
              <span className="absolute inset-0 text-[#2AA1E7] animate-ping opacity-20">I</span>
            </span>
            <span className="relative inline-block" style={{ animationDelay: '0.1s' }}>
              l
              <span className="absolute inset-0 text-[#5BE49B] animate-ping opacity-20">l</span>
            </span>
            <span className="relative inline-block" style={{ animationDelay: '0.2s' }}>
              i
              <span className="absolute inset-0 text-[#2AA1E7] animate-ping opacity-20">i</span>
            </span>
            <span className="relative inline-block" style={{ animationDelay: '0.3s' }}>
              y
              <span className="absolute inset-0 text-[#5BE49B] animate-ping opacity-20">y</span>
            </span>
            <span className="relative inline-block" style={{ animationDelay: '0.4s' }}>
              a
              <span className="absolute inset-0 text-[#2AA1E7] animate-ping opacity-20">a</span>
            </span>
            <span className="relative inline-block" style={{ animationDelay: '0.5s' }}>
              s
              <span className="absolute inset-0 text-[#5BE49B] animate-ping opacity-20">s</span>
            </span>
            <span className="mx-4"></span>
            <span className="relative inline-block" style={{ animationDelay: '0.6s' }}>
              H
              <span className="absolute inset-0 text-[#2AA1E7] animate-ping opacity-20">H</span>
            </span>
            <span className="relative inline-block" style={{ animationDelay: '0.7s' }}>
              a
              <span className="absolute inset-0 text-[#5BE49B] animate-ping opacity-20">a</span>
            </span>
            <span className="relative inline-block" style={{ animationDelay: '0.8s' }}>
              s
              <span className="absolute inset-0 text-[#2AA1E7] animate-ping opacity-20">s</span>
            </span>
            <span className="relative inline-block" style={{ animationDelay: '0.9s' }}>
              a
              <span className="absolute inset-0 text-[#5BE49B] animate-ping opacity-20">a</span>
            </span>
            <span className="relative inline-block" style={{ animationDelay: '1s' }}>
              n
              <span className="absolute inset-0 text-[#2AA1E7] animate-ping opacity-20">n</span>
            </span>
          </h1>
          
          {/* Glitch Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#2AA1E7]/20 via-transparent to-[#5BE49B]/20 animate-pulse" style={{ animationDuration: '2s' }}></div>
        </div>
        
        {/* Animated Title */}
        <div className="relative mb-8">
          <h2 className="text-2xl md:text-3xl text-[#2AA1E7] mb-2 font-normal animate-pulse">
            UI/UX Designer
          </h2>
          <div className="w-32 h-px bg-gradient-to-r from-[#2AA1E7] to-[#5BE49B] mx-auto animate-pulse"></div>
        </div>
        
        {/* Typing Animation Description */}
        <div className="mb-12 h-16 flex items-center justify-center">
          <p className="text-lg text-[#EAEAEA]/80 max-w-2xl mx-auto font-mono">
            <span className="inline-block animate-pulse">&gt;&lt;</span> Creating digital experiences that matter
            <span className="inline-block w-2 h-5 bg-[#2AA1E7] ml-1 animate-ping"></span>
          </p>
        </div>
        
        {/* Animated CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <button 
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-[#2AA1E7] to-[#5BE49B] text-[#0C0C0C] rounded-xl font-medium hover:scale-110 transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden"
          >
            <span className="relative z-10">View My Work</span>
            <div className="absolute inset-0 bg-gradient-to-r from-[#5BE49B] to-[#2AA1E7] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#5BE49B] rounded-full animate-ping"></div>
          </button>
          
          <button className="group relative px-8 py-4 border-2 border-[#2AA1E7] text-[#2AA1E7] rounded-xl font-medium hover:bg-[#2AA1E7]/10 hover:scale-110 transition-all duration-300 whitespace-nowrap cursor-pointer overflow-hidden">
            <span className="relative z-10">Download Resume</span>
            <div className="absolute inset-0 bg-[#2AA1E7]/20 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#2AA1E7] rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#2AA1E7] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Additional Animated Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-[#2AA1E7] rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-[#5BE49B] rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>
        <div className="absolute top-1/2 left-1/6 w-4 h-4 border border-[#2AA1E7] rounded-full animate-spin" style={{ animationDuration: '8s' }}></div>
        <div className="absolute bottom-1/4 right-1/6 w-3 h-3 border border-[#5BE49B] rounded-full animate-spin" style={{ animationDuration: '6s' }}></div>
      </div>
    </div>
  );
}
