import React from 'react';
import SectionTag from '../components/SectionTag';
import Swal from 'sweetalert2';

const Contact = () => {
  // WhatsApp Configuration
  const whatsappNumber = "923358004900";
  const whatsappMsg = encodeURIComponent("Hello! I'm interested in a project. Let's discuss.");

  // Form Submission Handler
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      // Formspree API call
      const response = await fetch("https://formspree.io/f/mgozjzql", {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        // Success Popup
        Swal.fire({
          title: 'Success!',
          text: 'Your message has been sent successfully.',
          icon: 'success',
          confirmButtonText: 'OK',
          confirmButtonColor: '#6366f1',
          background: '#111111',
          color: '#ffffff',
          showClass: {
            popup: 'animate__animated animate__fadeInDown'
          }
        }).then((result) => {
          if (result.isConfirmed) {
            form.reset(); // Form clear karein

            // FIXED: Removed window.location.href to prevent 404 error
            // Only using smooth scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }
        });
      } else {
        Swal.fire({
          title: 'Error!',
          text: 'Something went wrong. Please try again.',
          icon: 'error',
          background: '#111111',
          color: '#ffffff'
        });
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      Swal.fire({
        title: 'Network Error',
        text: 'Please check your internet connection.',
        icon: 'warning',
        background: '#111111',
        color: '#ffffff'
      });
    }
  };

  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto bg-[#000000] text-white">
      <div className="text-center mb-16">
        <SectionTag text="CONTACT" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Let's Build Something Amazing</h2>
        <p className="text-gray-400 mt-2">Get a free quote within 24 hours</p>
      </div>

      {/* Interactive Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        <a
          href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#10B981] p-8 rounded-2xl text-center flex flex-col items-center justify-center cursor-pointer hover:scale-105 transition-all"
        >
          <div className="text-3xl mb-3 text-black">💬</div>
          <h4 className="font-bold text-black text-xl">WhatsApp</h4>
          <p className="text-black/80 text-sm">Get instant reply (Fastest)</p>
        </a>

        <a
          href="mailto:muhammadshoukat2030@gmail.com"
          className="bg-[#090909] border border-white/5 p-8 rounded-2xl text-center flex flex-col items-center justify-center hover:border-purple-500/50 hover:scale-105 transition-all"
        >
          <div className="text-3xl mb-3">📧</div>
          <h4 className="font-bold text-xl">Email</h4>
          <p className="text-gray-500 text-sm">Detailed project inquiry</p>
        </a>

        <a
          href="#project-form"
          className="bg-[#0d0d0d] border border-white/5 p-8 rounded-2xl text-center flex flex-col items-center justify-center hover:border-purple-500/50 hover:scale-105 transition-all"
        >
          <div className="text-3xl mb-3">📝</div>
          <h4 className="font-bold text-xl">Contact Form</h4>
          <p className="text-gray-500 text-sm">Fill out details below</p>
        </a>
      </div>

     <div id="project-form" className="relative bg-[#050505] border border-white/5 p-8 md:p-14 rounded-xl max-w-4xl mx-auto shadow-2xl overflow-hidden">
  {/* Decorative Background Glow */}
  <div className="absolute -top-24 -right-24 w-48 h-48 bg-purple-600/10 blur-[100px]"></div>
  <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-indigo-600/10 blur-[100px]"></div>

  <form onSubmit={handleSubmit} className="relative grid grid-cols-1 md:grid-cols-2 gap-8">
    
    {/* Full Name */}
    <div className="flex flex-col gap-2 group">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-purple-500 transition-colors">Full Name *</label>
      <input 
        name="name" type="text" 
        className="bg-white/5 border border-white/10 rounded-[10px] p-4 focus:border-purple-500 focus:bg-white/8 outline-none transition-all text-gray-200 placeholder:text-gray-600" 
        placeholder="Full Name" required 
      />
    </div>

    {/* Email Address */}
    <div className="flex flex-col gap-2 group">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-purple-500 transition-colors">Email Address *</label>
      <input 
        name="email" type="email" 
        className="bg-white/5 border border-white/10 rounded-[10px] p-4 focus:border-purple-500 focus:bg-white/8 outline-none transition-all text-gray-200 placeholder:text-gray-600" 
        placeholder="Email Address" required 
      />
    </div>

    {/* Phone Number */}
    <div className="flex flex-col gap-2 group">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-purple-500 transition-colors">Phone Number *</label>
      <input 
        name="phone" type="tel" 
        className="bg-white/5 border border-white/10 rounded-[10px] p-4 focus:border-purple-500 focus:bg-white/8 outline-none transition-all text-gray-200 placeholder:text-gray-600" 
        placeholder="+92 335 800 4900" required 
      />
    </div>

    {/* Country */}
    <div className="flex flex-col gap-2 group">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-purple-500 transition-colors">Country *</label>
      <input 
        name="country" type="text" 
        className="bg-white/5 border border-white/10 rounded-[10px] p-4 focus:border-purple-500 focus:bg-white/8 outline-none transition-all text-gray-200 placeholder:text-gray-600" 
        placeholder="Pakistan" required 
      />
    </div>

    {/* Project Type */}
    <div className="flex flex-col gap-2 group relative">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-purple-500 transition-colors">Project Type</label>
      <div className="relative">
        <select
          name="project_type"
          className="w-full bg-white/5 border border-white/10 rounded-[10px] p-4 focus:border-purple-500 focus:bg-white/8 outline-none transition-all appearance-none text-gray-300 cursor-pointer shadow-xl"
          required
        >
          <option value="" disabled selected className="bg-[#050505]">What service do you need?</option>
          <option value="MERN Stack" className="bg-[#050505]">🚀 Full Stack Website (MERN)</option>
          <option value="E-commerce" className="bg-[#050505]">🛒 Online Store / E-commerce</option>
          <option value="Business Portfolio" className="bg-[#050505]">🏢 Corporate / Business Portfolio</option>
          <option value="Management System" className="bg-[#050505]">⚙️ Inventory Management System</option>
          <option value="UI/UX Design" className="bg-[#050505]">🎨 Figma to React Conversion</option>
          <option value="Other" className="bg-[#050505]">✨ Other (Custom Project)</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-focus-within:text-purple-500 group-focus-within:rotate-180 transition-all">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>

    {/* Budget */}
    <div className="flex flex-col gap-2 group relative">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-purple-500 transition-colors">Estimated Budget</label>
      <div className="relative">
        <select 
          name="budget" 
          className="w-full bg-white/5 border border-white/10 rounded-[10px] p-4 focus:border-purple-500 focus:bg-white/8 outline-none transition-all appearance-none text-gray-300 cursor-pointer shadow-xl"
          required
        >
          <option value="" disabled selected className="bg-[#050505]">Select your budget</option>
          <option value="500-1000" className="bg-[#050505]">$500 - $1,000</option>
          <option value="1000-2500" className="bg-[#050505]">$1,000 - $2,500</option>
          <option value="2500-5000" className="bg-[#050505]">$2,500 - $5,000</option>
          <option value="5000+" className="bg-[#050505]">$5,000+</option>
        </select>
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-gray-500 group-focus-within:text-purple-500 transition-colors">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
        </div>
      </div>
    </div>

    {/* Message Field */}
    <div className="md:col-span-2 flex flex-col gap-2 group">
      <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1 group-focus-within:text-purple-500 transition-colors">Message *</label>
      <textarea 
        name="message" 
        className="bg-white/5 border border-white/10 rounded-[10px] p-4 h-40 focus:border-purple-500 focus:bg-white/8 outline-none resize-none transition-all text-gray-200 placeholder:text-gray-600" 
        placeholder="Briefly describe your project goals..." required
      ></textarea>
    </div>

    {/* Submit Button */}
    <button type="submit" className="md:col-span-2 relative overflow-hidden bg-linear-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold py-5 rounded-[10px] shadow-[0_0_20px_rgba(147,51,234,0.3)] transition-all active:scale-[0.98] group">
      <span className="relative z-10 flex items-center justify-center gap-2">
        Send Message 
        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
      </span>
    </button>
  </form>
</div>
    </section>
  );
};

export default Contact;