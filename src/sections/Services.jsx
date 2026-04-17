import React from 'react';
import SectionTag from '../components/SectionTag';

const Services = () => {
  const mainServices = [
    { title: "Web Development", desc: "Custom websites and web applications built with React, Next.js, and modern frameworks.", icon: "🌐" },
    { title: "Mobile Apps", desc: "Native iOS and Android apps using React Native and Flutter for seamless experiences.", icon: "📱" },
    { title: "E-Commerce", desc: "Full-featured online stores with payment processing and inventory management.", icon: "🛒" },
    { title: "API Development", desc: "RESTful APIs and backend systems that power modern applications with scalability.", icon: "⚙️" },
    { title: "UI/UX Design", desc: "Beautiful, intuitive interfaces designed to convert visitors into customers.", icon: "🎨" },
    { title: "MVP Development", desc: "Launch your startup idea quickly with a minimum viable product built in 2-4 weeks.", icon: "🚀" },
  ];

  const industries = [
    { title: "E-Commerce & Retail", desc: "Online stores, marketplaces, subscription boxes, and custom shopping experiences.", icon: "🛒" },
    { title: "Healthcare & Medical", desc: "Telemedicine, appointment booking, patient portals, and pharmacy management.", icon: "⚕️" },
    { title: "Real Estate & Property", desc: "Property listings, rental management, CRM, and virtual tour platforms.", icon: "🏠" },
    { title: "Food & Restaurant", icon: "🍕", desc: "Online ordering, delivery apps, reservations, and restaurant management." },
    { title: "Automotive & Rental", icon: "🚗", desc: "Car rentals, auto parts stores, dealerships, and vehicle marketplaces." },
    { title: "Education & E-Learning", icon: "🎓", desc: "LMS platforms, online courses, student portals, and tutoring systems." },
    { title: "Finance & Fintech", icon: "💰", desc: "Expense tracking, invoicing, payment gateways, and financial dashboards." },
    { title: "Fitness & Wellness", icon: "💪", desc: "Gym management, fitness tracking, personal training, and nutrition apps." },
    { title: "Travel & Hospitality", icon: "✈️", desc: "Hotel bookings, travel agencies, tour platforms, and vacation rentals." },
    { title: "Beauty & Salon", icon: "💅", desc: "Appointment booking, beauty e-commerce, memberships, and service catalogs." },
    // { title: "Social Media & Networking", icon: "📱", desc: "Social platforms, community apps, dating apps, and networking tools." },
    // { title: "Gaming & Entertainment", icon: "🎮", desc: "Web games, streaming platforms, event ticketing, and entertainment apps." }
  ];

  return (
    <section id="services" className="py-16 md:py-24 px-4 md:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* PART 1: MAIN SERVICES */}
      <div className="text-center mb-16 md:mb-20">
        <SectionTag text="SERVICES" />
        <h2 className="text-3xl md:text-5xl font-bold mt-5 leading-tight text-white">What We Build</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
          End-to-end solutions for startups and businesses
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-24 md:mb-32">
        {mainServices.map((service, i) => (
          <div key={i} className="velocity-card group p-8 bg-[#0a0a0a] border border-white/5 rounded-[5px] hover:border-purple-600/50 transition-all text-center md:text-left">
            <div className="text-4xl mb-6 group-hover:scale-110 transition-transform duration-300 inline-block">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3 text-white group-hover:text-purple-400 transition-colors">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* PART 2: INDUSTRIES WE SERVE */}
      <div className="text-center mb-12 md:mb-16">
        <SectionTag text="INDUSTRIES" />
        <h2 className="text-3xl md:text-5xl font-bold mt-4 leading-tight text-white">Industries We Serve</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base px-4">
          Custom solutions for every business vertical
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {industries.map((item, i) => (
          <div key={i} className="velocity-card flex flex-col items-center text-center p-6 md:p-8 group bg-[#0a0a0a] border border-white/10 rounded-[5px] hover:border-purple-500/70 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/5">
              {item.icon}
            </div>
            <h4 className="font-bold text-lg md:text-xl mb-3 text-white">{item.title}</h4>
            <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;