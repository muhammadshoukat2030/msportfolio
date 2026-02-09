import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "923358004900";

  return (
    <>
      <footer className="bg-[#000000] border-t border-white/5 pt-16 pb-8 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            {/* Logo & About */}
            <div className="col-span-1 md:col-span-1">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-purple-600 rounded-lg flex items-center justify-center font-black text-white">S</div>
                <span className="font-bold text-xl tracking-tighter text-white">MS.<span className="text-purple-500">WebApp</span></span>
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

            {/* Social */}
            <div>
              <h4 className="text-white font-bold mb-6">Social</h4>
              <div className="flex gap-4">
                <a href="https://github.com/muhammadshoukat2030/" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all text-white">GH</a>
                <a href="https://www.linkedin.com/in/muhammad-shoukat-0178a3328" target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all text-white">LN</a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-purple-600 transition-all text-white">TW</a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-600 text-center">
            <p>© {currentYear} MS.WebApp. All rights reserved.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white">Privacy Policy</a>
              <a href="#" className="hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>

      {/* --- FIXED WHATSAPP ICON --- */}
      <a 
        href={`https://wa.me/${whatsappNumber}?text=Hi! I visited your website and want to discuss a project.`}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-[999] bg-[#25D366] p-4 rounded-full shadow-[0_0_20px_rgba(37,211,102,0.4)] hover:scale-110 active:scale-95 transition-all group"
        aria-label="Contact on WhatsApp"
      >
        {/* WhatsApp SVG Icon */}
        <svg 
          className="w-7 h-7 text-white fill-current" 
          viewBox="0 0 24 24"
        >
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.588-5.946 0-6.556 5.332-11.888 11.888-11.888 3.176 0 6.161 1.237 8.404 3.481 2.245 2.244 3.481 5.229 3.481 8.405 0 6.556-5.332 11.888-11.888 11.888-2.022 0-4.005-.515-5.755-1.492l-6.129 1.615zm6.726-2.845c1.516.896 3.19 1.37 4.908 1.37 5.405 0 9.803-4.398 9.803-9.803 0-2.62-1.021-5.082-2.875-6.934-1.854-1.853-4.314-2.873-6.931-2.873-5.405 0-9.803 4.398-9.803 9.803 0 1.932.569 3.812 1.644 5.448l-.991 3.619 3.703-.975zm11.332-6.848c-.287-.144-1.701-.84-1.968-.937-.267-.097-.461-.144-.656.144-.195.288-.755.937-.925 1.129-.17.192-.34.215-.627.072-.287-.144-1.213-.447-2.311-1.427-.854-.761-1.43-1.701-1.597-1.988-.167-.288-.018-.444.126-.587.13-.13.287-.336.431-.504.144-.168.192-.288.288-.48.096-.192.048-.36-.024-.504-.072-.144-.656-1.583-.899-2.16-.236-.571-.475-.494-.656-.504l-.56-.01c-.192 0-.504.072-.768.36-.264.288-1.008.985-1.008 2.4s1.032 2.784 1.176 2.976c.144.192 2.031 3.102 4.921 4.352.688.297 1.225.474 1.643.606.692.219 1.322.188 1.82.114.555-.083 1.701-.696 1.943-1.368.243-.672.243-1.248.17-1.368-.073-.12-.267-.192-.553-.336z"/>
        </svg>

        {/* Tooltip on Hover */}
        <span className="absolute right-16 top-1/2 -translate-y-1/2 bg-white text-black text-xs font-bold px-3 py-1.5 rounded-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap shadow-xl">
          Contact Support
        </span>
      </a>
    </>
  );
};

export default Footer;