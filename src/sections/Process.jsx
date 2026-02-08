import React from 'react';
import SectionTag from '../components/SectionTag';

const Process = () => {
  const steps = [
    { n: "1", t: "Discovery Call", d: "Free 30-minute consultation to understand your vision, goals, and requirements" },
    { n: "2", t: "Proposal & Quote", d: "Detailed project scope, timeline, and fixed-price quote within 24 hours" },
    { n: "3", t: "Design & Development", d: "Weekly updates, live previews, and your feedback incorporated in real-time" },
    { n: "4", t: "Testing & Launch", d: "Thorough QA testing, deployment, and training on how to manage your platform" },
    { n: "5", t: "Ongoing Support", d: "Post-launch support, maintenance, and feature updates included in every package" },
  ];

  return (
    <section id="process" className="py-20 md:py-12 px-4 md:px-6 max-w-4xl mx-auto scroll-mt-20">
      {/* Header Section */}
      <div className="text-center mb-16 md:mb-24">
        <SectionTag text="Our Process" />
        <h2 className="text-3xl md:text-5xl font-bold text-white mt-4 leading-tight">
          How We Work
        </h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm md:text-base leading-relaxed">
          Simple, transparent process from idea to launch
        </p>
      </div>

      <div className="relative space-y-12 md:space-y-16">
        {/* Animated Vertical Line - Adjusted for better mobile alignment */}
        <div className="absolute left-6 md:left-6 top-2 bottom-2 w-px bg-linear-to-b from-purple-500 via-purple-500/30 to-transparent"></div>
        
        {steps.map((step, i) => (
          <div key={i} className="relative pl-16 md:pl-24 group transition-all duration-500">
            
            {/* Step Number with 5px Radius */}
            <div className="absolute left-0 w-12 h-12 rounded-[5px] bg-purple-600 flex items-center justify-center font-bold text-xl z-10 shadow-[0_0_20px_rgba(147,51,234,0.3)] group-hover:shadow-purple-500/60 group-hover:scale-110 transition-all duration-300 text-white border border-white/10">
              {step.n}
            </div>
            
            {/* Content Area */}
            <div className="group-hover:translate-x-2 transition-transform duration-300">
              <h3 className="text-xl md:text-2xl font-bold mb-2 text-white group-hover:text-purple-400 transition-colors">
                {step.t}
              </h3>
              <p className="text-gray-500 group-hover:text-gray-400 leading-relaxed text-xs md:text-sm lg:text-base transition-colors">
                {step.d}
              </p>
            </div>

            {/* Subtle Hover Background Card - Glass Effect */}
            <div className="absolute -inset-y-4 -inset-x-4 bg-white/3 rounded-[5px] -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 border border-white/5"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;