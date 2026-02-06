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
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-20">
        <SectionTag text="Our Process" />
        <h2 className="text-4xl font-bold">How We Work</h2>
        <p className="text-gray-500 mt-2">Simple, transparent process from idea to launch</p>
      </div>

      <div className="relative space-y-12">
        <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-linear-to-b from-purple-500/50 to-transparent"></div>
        {steps.map((step, i) => (
          <div key={i} className="relative pl-20 group">
            <div className="absolute left-0 w-12 h-12 rounded-full bg-purple-600 flex items-center justify-center font-bold text-xl z-10 shadow-[0_0_15px_rgba(147,51,234,0.5)]">
              {step.n}
            </div>
            <h3 className="text-2xl font-bold mb-2 group-hover:text-purple-400 transition-colors">{step.t}</h3>
            <p className="text-gray-400 leading-relaxed">{step.d}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Process;