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
    // ID aur Scroll Margin add ki gayi hai
    <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto bg-[#000000] scroll-mt-20">
      <div className="text-center mb-16">
        <SectionTag text="PRICING" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">Fixed prices with no hidden fees. Choose the package that fits your needs.</p>
      </div>

      {/* Limited Availability Alert */}
      <div className="max-w-2xl mx-auto mb-12 bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center">
        <p className="text-sm text-red-400 font-medium">
          ⚠️ Limited Availability: We only accept <span className="font-bold">3 new projects per month</span>.
          <span className="text-green-400 ml-2">2 slots remaining</span> for this month.
        </p>
      </div>

      {/* 1. Interactive Calculator Card */}
      <div className="max-w-xl mx-auto velocity-card p-10! mb-20 border border-white/10 shadow-2xl bg-[#000000] rounded-2xl">
        <h3 className="text-2xl font-bold text-center mb-8 text-white">Estimate Your Project Cost</h3>

        <div className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-400 block mb-2">Project Type</label>
            <select
              onChange={(e) => setBasePrice(parseInt(e.target.value))}
              className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500 text-white appearance-none"
            >
              <option value="750">Simple Landing Page - $750</option>
              <option value="1500">Business Website - $1,500</option>
              <option value="3000">E-commerce / App - $3,000</option>
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-400 block mb-2">Additional Features</label>
            {Object.keys(featureCosts).map((f) => (
              <label key={f} className="flex items-center gap-3 cursor-pointer group text-white">
                <input
                  type="checkbox"
                  className="w-5 h-5 accent-purple-600 rounded"
                  onChange={() => setFeatures({ ...features, [f]: !features[f] })}
                />
                <span className="text-gray-300 capitalize group-hover:text-white transition-colors">
                  {f.replace('admin', 'Admin Dashboard').replace('api', 'API Integration').replace('payment', 'Payment Integration')} (+${featureCosts[f]})
                </span>
              </label>
            ))}
          </div>

          <div className="bg-[#111] p-6 rounded-2xl text-center border border-white/5">
            <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Estimated Total</p>
            <div className="text-5xl font-bold text-purple-400">${total.toLocaleString()}</div>
            <p className="text-[10px] text-gray-600 mt-2">This is an estimate. Final quote after consultation.</p>
          </div>

          {/* Calculator Button linked to Contact */}
          <a href="#contact" className="block text-center w-full bg-purple-600 hover:bg-purple-700 text-white py-4 rounded-xl font-bold transition-all active:scale-95">
            Get Accurate Quote
          </a>
        </div>
      </div>

      {/* 2. Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="velocity-card p-10 flex flex-col border border-white/5 rounded-2xl bg-[#000000]">
          <h4 className="text-xl font-bold mb-2 text-white">Starter</h4>
          <div className="text-4xl font-bold mb-4 text-white">$750 <span className="text-sm text-gray-500 font-normal">/project</span></div>
          <p className="text-gray-400 text-sm mb-8">Perfect for landing pages and simple websites</p>
          <ul className="space-y-4 mb-12 flex-1 text-sm text-white">
            {['Up to 5 pages', 'Responsive design', 'Contact form', 'SEO optimization', '2 month support'].map(i => (
              <li key={i} className="flex items-center gap-2">✅ {i}</li>
            ))}
          </ul>
          <a href="#contact" className="text-center border border-white/10 hover:bg-white/5 py-3 rounded-xl font-bold transition-all text-white">Get Started</a>
        </div>

        {/* Professional - POPULAR */}
        <div className="velocity-card p-10 border-purple-500/50 relative transform md:scale-105 shadow-[0_0_40px_rgba(147,51,234,0.1)] bg-[#000000] rounded-2xl border">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-purple-600 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest text-white">Popular</span>
          <h4 className="text-xl font-bold mb-2 text-white">Professional</h4>
          <div className="text-4xl font-bold mb-4 text-white">$1,500 <span className="text-sm text-gray-500 font-normal">/project</span></div>
          <p className="text-gray-400 text-sm mb-8">Ideal for small businesses and startups</p>
          <ul className="space-y-4 mb-12 flex-1 text-sm text-white">
            {['Up to 15 pages', 'Custom CMS', 'Database integration', 'Payment gateway', '3 months support'].map(i => (
              <li key={i} className="flex items-center gap-2">✅ {i}</li>
            ))}
          </ul>
          {/* <a href="#contact" className="text-center bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-bold transition-all shadow-lg shadow-purple-500/20 text-white">Get Started</a> */}
          <a
            href="#contact"
            className="block w-full text-center border bg-purple-600 hover:bg-purple-700 py-3 rounded-xl font-bold transition-all text-white"
          >
            Get Started
          </a>
        </div>

        {/* Enterprise */}
        <div className="velocity-card p-10 flex flex-col border border-white/5 rounded-2xl bg-[#000000]">
          <h4 className="text-xl font-bold mb-2 text-white">Enterprise</h4>
          <div className="text-4xl font-bold mb-4 text-white">$3,000+ <span className="text-sm text-gray-500 font-normal">/project</span></div>
          <p className="text-gray-400 text-sm mb-8">For complex applications and businesses</p>
          <ul className="space-y-4 mb-12 flex-1 text-sm text-white">
            {['Unlimited pages', 'Advanced features', 'API development', 'Mobile app included', '6 months support'].map(i => (
              <li key={i} className="flex items-center gap-2">✅ {i}</li>
            ))}
          </ul>
          <a href="#contact" className="text-center border border-white/10 hover:bg-white/5 py-3 rounded-xl font-bold transition-all text-white">Get Started</a>
        </div>
      </div>
    </section>
  );
};

export default Pricing;