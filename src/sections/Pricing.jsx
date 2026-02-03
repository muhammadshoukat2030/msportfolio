// import React from 'react';
// import SectionTag from '../components/SectionTag';

// const Pricing = () => {
//   const plans = [
//     { name: "Starter", price: "$750", features: ["Up to 5 pages", "Responsive Design", "Contact Form"] },
//     { name: "Professional", price: "$1,500", features: ["Up to 15 pages", "Custom CMS", "Database Integration"], popular: true },
//     { name: "Enterprise", price: "$3,000+", features: ["Unlimited pages", "Advanced API", "Mobile App Included"] }
//   ];

//   return (
//     <section id="pricing" className="py-24 px-6 max-w-7xl mx-auto text-center">
//       <SectionTag text="Pricing" />
//       <h2 className="text-4xl font-bold mb-16">Simple, Transparent Pricing</h2>
//       <div className="grid md:grid-cols-3 gap-8">
//         {plans.map((plan, i) => (
//           <div key={i} className={`velocity-card ${plan.popular ? 'border-purple-500/50 relative' : ''}`}>
//             {plan.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-[10px] font-bold px-3 py-1 rounded-full">POPULAR</span>}
//             <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
//             <div className="text-4xl font-black mb-6">{plan.price}<span className="text-sm text-gray-500 font-normal">/project</span></div>
//             <ul className="text-left space-y-4 mb-8 text-sm text-gray-400">
//               {plan.features.map(f => <li key={f}>✓ {f}</li>)}
//             </ul>
//             <button className="w-full py-3 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all font-bold">Get Started</button>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Pricing;

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
    <section className="py-24 px-6 max-w-7xl mx-auto bg-[#030303]">
      <div className="text-center mb-16">
        <SectionTag text="PRICING" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-400 mt-4">Fixed prices with no hidden fees. Choose the package that fits your needs.</p>
      </div>

      {/* Limited Availability Alert */}
      <div className="max-w-2xl mx-auto mb-12 bg-red-500/10 border border-red-500/20 p-4 rounded-xl text-center">
        <p className="text-sm text-red-400 font-medium">
          ⚠️ Limited Availability: We only accept <span className="font-bold">3 new projects per month</span>. 
          <span className="text-green-400 ml-2">2 slots remaining</span> for this month.
        </p>
      </div>

      {/* 1. Interactive Calculator Card */}
      <div className="max-w-xl mx-auto velocity-card !p-10 mb-20 border-white/10 shadow-2xl">
        <h3 className="text-2xl font-bold text-center mb-8">Estimate Your Project Cost</h3>
        
        <div className="space-y-6">
          <div>
            <label className="text-sm font-bold text-gray-400 block mb-2">Project Type</label>
            <select 
              onChange={(e) => setBasePrice(parseInt(e.target.value))}
              className="w-full bg-black border border-white/10 p-4 rounded-xl outline-none focus:border-purple-500 appearance-none"
            >
              <option value="750">Simple Landing Page - $750</option>
              <option value="1500">Business Website - $1,500</option>
              <option value="3000">E-commerce / App - $3,000</option>
            </select>
          </div>

          <div className="space-y-3">
            <label className="text-sm font-bold text-gray-400 block mb-2">Additional Features</label>
            {Object.keys(featureCosts).map((f) => (
              <label key={f} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="checkbox" 
                  className="w-5 h-5 accent-purple-600 rounded"
                  onChange={() => setFeatures({...features, [f]: !features[f]})}
                />
                <span className="text-gray-300 capitalize group-hover:text-white transition-colors">
                  {f.replace('admin', 'Admin Dashboard').replace('api', 'API Integration').replace('payment', 'Payment Integration')} (+${featureCosts[f]})
                </span>
              </label>
            ))}
          </div>

          <div className="bg-[#111] p-6 rounded-2xl text-center border border-white/5">
            <p className="text-gray-500 text-xs uppercase font-bold tracking-widest mb-1">Estimated Total</p>
            <div className="text-5xl font-bold text-indigo-400">${total.toLocaleString()}</div>
            <p className="text-[10px] text-gray-600 mt-2">This is an estimate. Final quote after consultation.</p>
          </div>

          <button className="w-full bg-indigo-600 hover:bg-indigo-700 py-4 rounded-xl font-bold transition-all active:scale-95">
            Get Accurate Quote
          </button>
        </div>
      </div>

      {/* 2. Comparison Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Starter */}
        <div className="velocity-card !p-10 flex flex-col">
          <h4 className="text-xl font-bold mb-2">Starter</h4>
          <div className="text-4xl font-bold mb-4">$750 <span className="text-sm text-gray-500 font-normal">/project</span></div>
          <p className="text-gray-400 text-sm mb-8">Perfect for landing pages and simple websites</p>
          <ul className="space-y-4 mb-12 flex-1 text-sm">
            {['Up to 5 pages', 'Responsive design', 'Contact form', 'SEO optimization', '2 month support'].map(i => (
              <li key={i} className="flex items-center gap-2 text-gray-300">✅ {i}</li>
            ))}
          </ul>
          <button className="border border-white/10 hover:bg-white/5 py-3 rounded-xl font-bold transition-all">Get Started</button>
        </div>

        {/* Professional - POPULAR */}
        <div className="velocity-card !p-10 border-indigo-500/50 relative transform md:scale-105 shadow-[0_0_40px_rgba(99,102,241,0.1)]">
          <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-indigo-600 text-[10px] font-bold px-4 py-1 rounded-full uppercase tracking-widest">Popular</span>
          <h4 className="text-xl font-bold mb-2">Professional</h4>
          <div className="text-4xl font-bold mb-4">$1,500 <span className="text-sm text-gray-500 font-normal">/project</span></div>
          <p className="text-gray-400 text-sm mb-8">Ideal for small businesses and startups</p>
          <ul className="space-y-4 mb-12 flex-1 text-sm">
            {['Up to 15 pages', 'Custom CMS', 'Database integration', 'Payment gateway', '3 months support'].map(i => (
              <li key={i} className="flex items-center gap-2 text-gray-300">✅ {i}</li>
            ))}
          </ul>
          <button className="bg-indigo-600 hover:bg-indigo-700 py-3 rounded-xl font-bold transition-all shadow-lg shadow-indigo-500/20">Get Started</button>
        </div>

        {/* Enterprise */}
        <div className="velocity-card !p-10 flex flex-col">
          <h4 className="text-xl font-bold mb-2">Enterprise</h4>
          <div className="text-4xl font-bold mb-4">$3,000+ <span className="text-sm text-gray-500 font-normal">/project</span></div>
          <p className="text-gray-400 text-sm mb-8">For complex applications and businesses</p>
          <ul className="space-y-4 mb-12 flex-1 text-sm">
            {['Unlimited pages', 'Advanced features', 'API development', 'Mobile app included', '6 months support'].map(i => (
              <li key={i} className="flex items-center gap-2 text-gray-300">✅ {i}</li>
            ))}
          </ul>
          <button className="border border-white/10 hover:bg-white/5 py-3 rounded-xl font-bold transition-all">Contact Us</button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;