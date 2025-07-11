'use client';

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] border-t border-[#2A2A2A] py-12 px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-[#EAEAEA] mb-4">Iliyas Hasan</h3>
            <p className="text-[#EAEAEA]/70 leading-relaxed max-w-md">
              UI/UX Designer passionate about creating meaningful digital experiences that solve real-world problems.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-[#EAEAEA] mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">About</a></li>
              <li><a href="#projects" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">Projects</a></li>
              <li><a href="#skills" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">Skills</a></li>
              <li><a href="#contact" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold text-[#EAEAEA] mb-4">Get In Touch</h4>
            <div className="space-y-2">
              <p className="text-[#EAEAEA]/70">Delhi, India</p>
              <p className="text-[#EAEAEA]/70">hello@iliyashasan.com</p>
              <p className="text-[#EAEAEA]/70">+91 98765 43210</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#2A2A2A] pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[#EAEAEA]/70 text-sm mb-4 md:mb-0">
            © 2024 Iliyas Hasan. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">
              <i className="ri-linkedin-line text-xl"></i>
            </a>
            <a href="#" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">
              <i className="ri-dribbble-line text-xl"></i>
            </a>
            <a href="#" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">
              <i className="ri-behance-line text-xl"></i>
            </a>
            <a href="#" className="text-[#EAEAEA]/70 hover:text-[#2AA1E7] transition-colors duration-300">
              <i className="ri-twitter-line text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}