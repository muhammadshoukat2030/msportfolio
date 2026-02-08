const whyUsData = [
  { icon: "💰", title: "Transparent Pricing", desc: "Fixed prices with no hidden fees. You know exactly what you're paying upfront." },
  { icon: "⚡", title: "Lightning Fast", desc: "Most projects delivered in 2-8 weeks. We respect your time and deadlines." },
  { icon: "🤝", title: "True Partnership", desc: "We don't disappear after launch. Ongoing support included in every package." },
  { icon: "🎨", title: "Custom Solutions", desc: "No templates. Every project is built from scratch to match your unique needs." },
  { icon: "📞", title: "Direct Communication", desc: "Talk directly to the developers. No middlemen, no miscommunication." },
  { icon: "🔒", title: "Your Code, Your Rights", desc: "You own 100% of the source code. No vendor lock-in, complete freedom." },
];

export default function WhyUs() {
  return (
    <section className="py-16 md:py-24 px-4 md:px-6 bg-[#080808]">
      {/* Header Section */}
      <div className="max-w-6xl mx-auto text-center mb-12 md:mb-20">
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
          What Makes Us Different
        </h2>
        <p className="text-gray-400 text-sm md:text-base">
          The MS.WebApp advantage
        </p>
      </div>

      {/* Responsive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
        {whyUsData.map((item, index) => (
          <div 
            key={index} 
            className="bg-[#100f0f] border border-white/10 p-6 md:p-8 rounded-[5px] hover:border-purple-600/50 transition-all duration-300 group cursor-default"
          >
            <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300">
              {item.icon}
            </div>
            <h3 className="text-lg md:text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              {item.title}
            </h3>
            <p className="text-xs md:text-sm text-gray-500 leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}