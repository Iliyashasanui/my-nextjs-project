'use client';

export default function SkillsSection() {
  const skills = [
    { name: 'User Experience Design', level: 95 },
    { name: 'User Interface Design', level: 92 },
    { name: 'Prototyping', level: 88 },
    { name: 'Design Systems', level: 90 },
    { name: 'User Research', level: 85 },
    { name: 'Accessibility', level: 82 }
  ];

  const tools = [
    'Figma', 'Adobe XD', 'Sketch', 'Principle', 'InVision', 'Framer'
  ];

  return (
    <div className="bg-[#0C0C0C] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
            Skills & <span className="text-[#2AA1E7]">Expertise</span>
          </h2>
          <p className="text-lg text-[#EAEAEA]/70">
            Crafting digital experiences with modern tools and proven methodologies
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Skills */}
          <div>
            <h3 className="text-2xl font-bold text-[#EAEAEA] mb-8">Core Skills</h3>
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-[#EAEAEA] font-medium">{skill.name}</span>
                    <span className="text-[#2AA1E7] text-sm">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-[#1A1A1A] rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-[#2AA1E7] to-[#5BE49B] h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div>
            <h3 className="text-2xl font-bold text-[#EAEAEA] mb-8">Design Tools</h3>
            <div className="grid grid-cols-2 gap-4">
              {tools.map((tool, index) => (
                <div
                  key={tool}
                  className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-xl p-4 hover:border-[#2AA1E7]/50 transition-all duration-300 cursor-pointer hover:scale-105"
                >
                  <span className="text-[#EAEAEA] font-medium">{tool}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}