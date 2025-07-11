'use client';

export default function ExperienceSection() {
  const experiences = [
    {
      role: 'Senior UI/UX Designer',
      company: 'TechFlow Solutions',
      period: '2022 - Present',
      description: 'Led design initiatives for multiple SaaS products, focusing on user-centered design and conversion optimization.'
    },
    {
      role: 'Product Designer',
      company: 'FinTech Innovations',
      period: '2021 - 2022',
      description: 'Designed mobile-first financial applications with emphasis on security and user trust.'
    },
    {
      role: 'UI/UX Designer',
      company: 'StartupHub',
      period: '2020 - 2021',
      description: 'Created design systems and brand identities for early-stage startups across various industries.'
    }
  ];

  return (
    <div className="bg-[#1A1A1A] py-20 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-4">
            Work <span className="text-[#2AA1E7]">Experience</span>
          </h2>
          <p className="text-lg text-[#EAEAEA]/70">
            Building expertise through diverse projects and collaborative teams
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div key={index} className="bg-[#0C0C0C] border border-[#2A2A2A] rounded-2xl p-8 hover:border-[#2AA1E7]/30 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#EAEAEA] mb-1">{exp.role}</h3>
                  <p className="text-[#2AA1E7] font-medium">{exp.company}</p>
                </div>
                <span className="text-[#5BE49B] font-medium mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-[#EAEAEA]/80 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}