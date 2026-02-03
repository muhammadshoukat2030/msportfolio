import React from 'react';
import SectionTag from '../components/SectionTag';

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto bg-[#030303] text-white">
      <div className="text-center mb-16">
        <SectionTag text="CONTACT" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Let's Build Something Amazing</h2>
        <p className="text-gray-400 mt-2">Get a free quote within 24 hours</p>
      </div>

      {/* Top 3 Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <div className="bg-[#10B981] p-8 rounded-2xl text-center flex flex-col items-center justify-center cursor-pointer hover:opacity-90 transition-all">
          <div className="text-3xl mb-3 text-black">💬</div>
          <h4 className="font-bold text-black text-xl">WhatsApp</h4>
          <p className="text-black/80 text-sm">Get instant reply (Fastest)</p>
        </div>

        <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl text-center flex flex-col items-center justify-center hover:border-white/20 transition-all">
          <div className="text-3xl mb-3">📧</div>
          <h4 className="font-bold text-xl">Email</h4>
          <p className="text-gray-500 text-sm">Detailed project inquiry</p>
        </div>

        <div className="bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl text-center flex flex-col items-center justify-center hover:border-white/20 transition-all">
          <div className="text-3xl mb-3">📝</div>
          <h4 className="font-bold text-xl">Contact Form</h4>
          <p className="text-gray-500 text-sm">Fill out details below</p>
        </div>
      </div>

      {/* Main Detailed Form */}
      <div className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Name *</label>
            <input type="text" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all" placeholder="Enter your name" required />
          </div>

          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Email *</label>
            <input type="email" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all" placeholder="Enter your email" required />
          </div>

          {/* Phone */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Phone *</label>
            <input type="tel" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all" placeholder="+92 335 800 4900" required />
          </div>

          {/* Country */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Country *</label>
            <input type="text" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all" placeholder="Your Country" required />
          </div>

          {/* Project Type Select */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Project Type</label>
            <select className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all appearance-none">
              <option>Select type</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
            </select>
          </div>

          {/* Budget Select */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Budget</label>
            <select className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all appearance-none">
              <option>Select budget</option>
              <option>$500 - $1000</option>
              <option>$1000 - $5000</option>
              <option>$5000+</option>
            </select>
          </div>

          {/* Message */}
          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Message *</label>
            <textarea className="bg-[#030303] border border-white/10 rounded-xl p-4 h-32 focus:border-purple-500 outline-none resize-none transition-all" placeholder="Tell us about your project..." required></textarea>
          </div>

          {/* Submit Button */}
          <button className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 transition-all active:scale-95">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;