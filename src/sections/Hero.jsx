import React from 'react';

const Hero = () => {
  const stats = [
    { label: "Projects Delivered", value: "17+", icon: "🚀" },
    { label: "Client Satisfaction", value: "98%", icon: "⭐" },
    { label: "Weeks to Launch", value: "2-8", icon: "⚡" },
    { label: "Support Available", value: "24/7", icon: "💬" },
  ];

  return (
    <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto text-center">
      <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-green-500/20 bg-green-500/5 text-green-400 text-xs">
        <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
        Available for new projects
      </div>
      
      <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
        Build Your Dream <br />
        <span className="gradient-text">Website or App</span>
      </h1>
      
      <p className="text-gray-400 text-lg mb-10 max-w-2xl mx-auto">
        MERN Stack & React Native specialist. Delivering high-performance solutions in 2-8 weeks.
      </p>

      <div className="flex justify-center gap-4 mb-20">
        <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)]">
          Get Free Quote →
        </button>
        <button className="bg-[#111] border border-white/10 px-8 py-3 rounded-xl font-bold hover:bg-white/5 transition-all">
          View Our Work
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <div key={i} className="velocity-card">
            <div className="text-2xl mb-2">{s.icon}</div>
            <div className="text-3xl font-bold mb-1">{s.value}</div>
            <div className="text-gray-500 text-[10px] uppercase tracking-widest">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;