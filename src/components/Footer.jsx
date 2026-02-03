import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#030303] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Logo & About */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-black">N</div>
              <span className="font-bold text-xl tracking-tighter">Nextly<span className="text-purple-500">WebApp</span></span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">
              Building next-generation web and mobile solutions for modern businesses and startups.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-6">Company</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li><a href="#services" className="hover:text-purple-500 transition-colors">Services</a></li>
              <li><a href="#projects" className="hover:text-purple-500 transition-colors">Portfolio</a></li>
              <li><a href="#pricing" className="hover:text-purple-500 transition-colors">Pricing</a></li>
              <li><a href="#contact" className="hover:text-purple-500 transition-colors">Contact</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold mb-6">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-500">
              <li>muhammadshoukat2030@email.com</li>
              <li>Islamabad, Pakistan</li>
              <li>+92 3358004900</li>
            </ul>
          </div>

          {/* Newsletter / Social */}
          <div>
            <h4 className="text-white font-bold mb-6">Social</h4>
            <div className="flex gap-4">
              <a href="https://github.com/muhammadshoukat2030/forfolio" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all">GH</a>
              <a href="https://www.linkedin.com/in/muhammad-shoukat-0178a3328" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all">LN</a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all">TW</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 text-center">
          {/* <p>© {currentYear} NexlyWebApp. All rights reserved.</p> */}
          <p>© {currentYear} MS.WebApp. All rights reserved.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;