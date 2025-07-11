'use client';

export default function ContactSection() {
  return (
    <div className="bg-[#0C0C0C] py-20 px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-[#EAEAEA] mb-6">
          Let's Work <span className="text-[#2AA1E7]">Together</span>
        </h2>
        <p className="text-lg text-[#EAEAEA]/70 mb-12 max-w-2xl mx-auto">
          Have a project in mind? I'd love to hear about it and discuss how we can bring your ideas to life.
        </p>

        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <button className="px-8 py-4 bg-[#2AA1E7] text-[#0C0C0C] rounded-xl font-medium hover:bg-[#2AA1E7]/90 transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer">
            Get In Touch
          </button>
          <button className="px-8 py-4 bg-transparent border-2 border-[#5BE49B] text-[#5BE49B] rounded-xl font-medium hover:bg-[#5BE49B] hover:text-[#0C0C0C] transition-all duration-300 hover:scale-105 whitespace-nowrap cursor-pointer">
            Download Resume
          </button>
        </div>

        <div className="flex justify-center space-x-8">
          <a href="#" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">
            <i className="ri-linkedin-line text-2xl"></i>
          </a>
          <a href="#" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">
            <i className="ri-dribbble-line text-2xl"></i>
          </a>
          <a href="#" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">
            <i className="ri-behance-line text-2xl"></i>
          </a>
          <a href="#" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">
            <i className="ri-mail-line text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  );
}