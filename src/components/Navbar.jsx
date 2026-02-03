import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Nav links structure
  const navLinks = [
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#projects" }, // Aapke App.jsx mein id="projects" use hui hai
    { name: "Pricing", href: "#pricing" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed top-0 w-full z-[100] bg-[#030303]/80 backdrop-blur-md border-b border-white/5">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        
        {/* Logo - Clicking this scrolls to top */}
        <a href="#" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-black text-white">N</div>
          <span className="font-bold text-xl tracking-tighter text-white">
            Nexly<span className="text-purple-500">WebApp</span>
          </span>
        </a>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href} className="hover:text-white transition-colors">
              {link.name}
            </a>
          ))}
          
          {/* Get Started Button - Linked to Contact Section */}
          <a 
            href="#contact" 
            className="bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded-lg font-bold transition-all shadow-lg shadow-purple-500/20"
          >
            Get Started →
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-white focus:outline-none p-2"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
              <span className={`h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute w-full bg-[#030303] border-b border-white/5 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 pointer-events-none'}`}>
        <div className="px-6 py-8 flex flex-col gap-6 text-center">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-400 hover:text-purple-500 transition-colors"
            >
              {link.name}
            </a>
          ))}
          
          {/* Mobile Get Started Button - Linked to Contact Section */}
          <a 
            href="#contact" 
            onClick={() => setIsOpen(false)}
            className="bg-purple-600 text-white px-5 py-3 rounded-lg font-bold"
          >
            Get Started →
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;