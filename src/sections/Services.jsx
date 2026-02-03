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
    { title: "Social Media & Networking", icon: "📱", desc: "Social platforms, community apps, dating apps, and networking tools." },
    { title: "Gaming & Entertainment", icon: "🎮", desc: "Web games, streaming platforms, event ticketing, and entertainment apps." }
  ];

  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto">
      {/* PART 1: MAIN SERVICES */}
      <div className="text-center mb-20">
        <SectionTag text="SERVICES" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4">What We Build</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">End-to-end solutions for startups and businesses</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-32">
        {mainServices.map((service, i) => (
          <div key={i} className="velocity-card group text-center md:text-left">
            <div className="text-4xl mb-6">{service.icon}</div>
            <h3 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">{service.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{service.desc}</p>
          </div>
        ))}
      </div>

      {/* PART 2: INDUSTRIES WE SERVE */}
      <div className="text-center mb-16">
        <SectionTag text="INDUSTRIES" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Industries We Serve</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">Custom solutions for every business vertical</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {industries.map((item, i) => (
          <div key={i} className="velocity-card flex flex-col items-center text-center p-8 group border-white/5 hover:border-purple-500/30 transition-all duration-300">
            <div className="w-16 h-16 rounded-2xl bg-purple-500/10 flex items-center justify-center text-3xl mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-purple-500/5">
              {item.icon}
            </div>
            <h4 className="font-bold text-lg mb-3">{item.title}</h4>
            <p className="text-gray-500 text-xs leading-relaxed">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;