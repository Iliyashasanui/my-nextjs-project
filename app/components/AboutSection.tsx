
'use client';

export default function AboutSection() {
  const stats = [
    { number: '12+', label: 'Completed Projects' },
    { number: '3+', label: 'Years of Experience' },
    { number: '5+', label: 'Industry Verticals' }
  ];

  const tools = [
    { name: 'Figma', icon: 'ri-pencil-ruler-2-line' },
    { name: 'Webflow', icon: 'ri-code-s-slash-line' },
    { name: 'UXPin', icon: 'ri-user-heart-line' },
    { name: 'Framer', icon: 'ri-layout-4-line' },
    { name: 'Adobe Suite', icon: 'ri-image-edit-line' }
  ];

  return (
    <div className="bg-[#0C0C0C] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-6">
            Designing with <span className="text-[#2AA1E7]">Clarity</span> & <span className="text-[#5BE49B]">Curiosity</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <p className="text-lg text-[#EAEAEA] leading-relaxed">
              I'm a UI/UX designer crafting systems that empower users. I use structure, hierarchy, and simplicity to shape intuitive interfaces across web and mobile. I've worked with startups and growth-stage teams across SaaS, FinTech, EdTech, and more.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-[#1A1A1A] rounded-xl border border-[#2A2A2A] hover:border-[#2AA1E7]/30 transition-all duration-300">
                  <div className="text-2xl font-bold text-[#2AA1E7] mb-2">{stat.number}</div>
                  <div className="text-sm text-[#EAEAEA]/70">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Content - Tools */}
          <div>
            <h3 className="text-2xl font-bold text-[#EAEAEA] mb-8 text-center">
              Design <span className="text-[#5BE49B]">Toolkit</span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool.name}
                  className="group bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-6 hover:border-[#2AA1E7]/50 hover:bg-[#1A1A1A]/80 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-[#2AA1E7]/10 rounded-lg flex items-center justify-center group-hover:bg-[#2AA1E7]/20 transition-colors duration-300">
                      <i className={`${tool.icon} text-xl text-[#2AA1E7]`}></i>
                    </div>
                    <span className="text-[#EAEAEA] font-medium group-hover:text-[#2AA1E7] transition-colors duration-300">
                      {tool.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
