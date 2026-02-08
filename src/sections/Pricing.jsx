import React, { useState } from 'react';
import SectionTag from '../components/SectionTag';

const Pricing = () => {
  // Calculator logic
  const [basePrice, setBasePrice] = useState(750);
  const [features, setFeatures] = useState({
    payment: false,
    admin: false,
    api: false,
  });

  const featureCosts = { payment: 500, admin: 300, api: 400 };

  const total = basePrice +
    (features.payment ? featureCosts.payment : 0) +
    (features.admin ? featureCosts.admin : 0) +
    (features.api ? featureCosts.api : 0);

  return (
    <section id="pricing" className="py-24 px-4 md:px-6 max-w-7xl mx-auto bg-[#050505] scroll-mt-20">
      <div className="text-center mb-16">
        <SectionTag text="PRICING" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">Fixed prices with no hidden fees. Choose the package that fits your needs.</p>
      </div>

      {/* Limited Availability Alert */}
      <div className="max-w-2xl mx-auto mb-12 bg-red-500/5 border border-red-500/20 p-4 rounded-[5px] text-center">
        <p className="text-xs md:text-sm text-red-400 font-medium">
          ⚠️ Limited Availability: We only accept <span className="font-bold">3 new projects per month</span>.
          <span className="text-green-400 ml-2">2 slots remaining</span> for this month.
        </p>
      </div>

      {/* 1. Interactive Calculator Card */}
      <div className="max-w-xl mx-auto bg-[#0A0A0A] p-8 md:p-10 mb-20 border border-white/10 shadow-2xl rounded-[5px] relative overflow-hidden">
        {/* Subtle Glow inside calculator */}
        <div className="absolute -top-10 -right-10 w-32 h-32 bg-purple-600/10 blur-[50px]"></div>
        
        <h3 className="text-2xl font-bold text-center mb-8 text-white relative z-10">Estimate Your Project Cost</h3>

        <div className="space-y-6 relative z-10">
          <div>
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-3">Project Type</label>
            <select
              onChange={(e) => setBasePrice(parseInt(e.target.value))}
              className="w-full bg-white/5 border border-white/10 p-4 rounded-[5px] outline-none focus:border-purple-500 text-white appearance-none cursor-pointer transition-all"
            >
              <option value="750" className="bg-[#0A0A0A]">Simple Landing Page - $750</option>
              <option value="1500" className="bg-[#0A0A0A]">Business Website - $1,500</option>
              <option value="3000" className="bg-[#0A0A0A]">E-commerce / App - $3,000</option>
            </select>
          </div>

          <div className="space-y-4">
            <label className="text-xs font-bold text-gray-500 uppercase tracking-widest block mb-1">Additional Features</label>
            {Object.keys(featureCosts).map((f) => (
              <label key={f} className="flex items-center gap-3 cursor-pointer group text-white bg-white/2 p-3 rounded-[5px] border border-transparent hover:border-white/10 transition-all">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-purple-600 rounded"
                  onChange={() => setFeatures({ ...features, [f]: !features[f] })}
                />
                <span className="text-gray-400 text-sm capitalize group-hover:text-white transition-colors">
                  {f.replace('admin', 'Admin Dashboard').replace('api', 'API Integration').replace('payment', 'Payment Integration')} (+${featureCosts[f]})
                </span>
              </label>
            ))}
          </div>

          <div className="bg-purple-600/5 p-6 rounded-[5px] text-center border border-purple-500/20">
            <p className="text-purple-400 text-xs uppercase font-bold tracking-widest mb-1">Estimated Total</p>
            <div className="text-5xl font-bold text-white">${total.toLocaleString()}</div>
            <p className="text-[10px] text-gray-600 mt-2">This is an estimate. Final quote after consultation.</p>
          </div>

          <a href="#contact" className="block text-center w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-[5px] font-bold transition-all active:scale-95 shadow-[0_0_20px_rgba(147,51,234,0.2)]">
            Get Accurate Quote
          </a>
        </div>
      </div>

      {/* 2. Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Starter */}
        <div className="p-8 md:p-10 flex flex-col border border-white/5 rounded-[5px] bg-[#0A0A0A] hover:border-white/20 transition-all">
          <h4 className="text-xl font-bold mb-2 text-white">Starter</h4>
          <div className="text-4xl font-bold mb-4 text-white">$750 <span className="text-sm text-gray-500 font-normal">/project</span></div>
          <p className="text-gray-400 text-sm mb-8">Perfect for landing pages and simple websites</p>
          <ul className="space-y-4 mb-12 flex-1 text-sm text-gray-300">
            {['Up to 5 pages', 'Responsive design', 'Contact form', 'SEO optimization', '2 month support'].map(i => (
              <li key={i} className="flex items-center gap-2 font-medium"> <span className="text-purple-500">✓</span> {i}</li>
            ))}
          </ul>
          <a href="#contact" className="text-center border border-white/10 hover:bg-white/5 py-3 rounded-[5px] font-bold transition-all text-white">Get Started</a>
        </div>

        {/* Professional - POPULAR */}
        <div className="p-8 md:p-10 border-purple-600 relative transform md:scale-105 shadow-[0_0_50px_rgba(147,51,234,0.15)] bg-[#0D0D0D] rounded-[5px] border-2">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest text-white shadow-lg">Most Popular</span>
          <h4 className="text-xl font-bold mb-2 text-white">Professional</h4>
          <div className="text-4xl font-bold mb-4 text-white">$1,500 <span className="text-sm text-gray-500 font-normal">/project</span></div>
          <p className="text-gray-400 text-sm mb-8">Ideal for small businesses and startups</p>
          <ul className="space-y-4 mb-12 flex-1 text-sm text-gray-300">
            {['Up to 15 pages', 'Custom CMS', 'Database integration', 'Payment gateway', '3 months support'].map(i => (
              <li key={i} className="flex items-center gap-2 font-medium"> <span className="text-purple-500">✓</span> {i}</li>
            ))}
          </ul>
          <a href="#contact" className="block w-full text-center bg-purple-600 hover:bg-purple-700 py-3 rounded-[5px] font-bold transition-all text-white shadow-lg shadow-purple-500/20">
            Get Started
          </a>
        </div>

        {/* Enterprise */}
        <div className="p-8 md:p-10 flex flex-col border border-white/5 rounded-[5px] bg-[#0A0A0A] hover:border-white/20 transition-all">
          <h4 className="text-xl font-bold mb-2 text-white">Enterprise</h4>
          <div className="text-4xl font-bold mb-4 text-white">$3,000+ <span className="text-sm text-gray-500 font-normal">/project</span></div>
          <p className="text-gray-400 text-sm mb-8">For complex applications and businesses</p>
          <ul className="space-y-4 mb-12 flex-1 text-sm text-gray-300">
            {['Unlimited pages', 'Advanced features', 'API development', 'Mobile app included', '6 months support'].map(i => (
              <li key={i} className="flex items-center gap-2 font-medium"> <span className="text-purple-500">✓</span> {i}</li>
            ))}
          </ul>
          <a href="#contact" className="text-center border border-white/10 hover:bg-white/5 py-3 rounded-[5px] font-bold transition-all text-white">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;