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
            
            // OK click hone par Hero section ya top par bhejne ke liye
            window.location.href = "/sections/Hero"; // Agar id "hero" hai
            // Ya phir top scroll
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
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto bg-[#030303] text-white">
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
          className="bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl text-center flex flex-col items-center justify-center hover:border-purple-500/50 hover:scale-105 transition-all"
        >
          <div className="text-3xl mb-3">📧</div>
          <h4 className="font-bold text-xl">Email</h4>
          <p className="text-gray-500 text-sm">Detailed project inquiry</p>
        </a>

        <a 
          href="#project-form"
          className="bg-[#0A0A0A] border border-white/5 p-8 rounded-2xl text-center flex flex-col items-center justify-center hover:border-purple-500/50 hover:scale-105 transition-all"
        >
          <div className="text-3xl mb-3">📝</div>
          <h4 className="font-bold text-xl">Contact Form</h4>
          <p className="text-gray-500 text-sm">Fill out details below</p>
        </a>
      </div>

      {/* Formspree Form */}
      <div id="project-form" className="bg-[#0A0A0A] border border-white/5 p-8 md:p-12 rounded-3xl max-w-4xl mx-auto">
        <form 
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Name *</label>
            <input name="name" type="text" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all" placeholder="Enter your name" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Email *</label>
            <input name="email" type="email" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all" placeholder="Enter your email" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Phone *</label>
            <input name="phone" type="tel" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all" placeholder="+92 335 800 4900" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Country *</label>
            <input name="country" type="text" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all" placeholder="Your Country" required />
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Project Type</label>
            <select name="project_type" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all appearance-none text-gray-400">
              <option>Select type</option>
              <option>Web Development</option>
              <option>Mobile App</option>
              <option>UI/UX Design</option>
            </select>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Budget</label>
            <select name="budget" className="bg-[#030303] border border-white/10 rounded-xl p-4 focus:border-purple-500 outline-none transition-all appearance-none text-gray-400">
              <option>Select budget</option>
              <option>$500 - $1000</option>
              <option>$1000 - $5000</option>
              <option>$5000+</option>
            </select>
          </div>

          <div className="md:col-span-2 flex flex-col gap-2">
            <label className="text-sm font-medium text-gray-300">Message *</label>
            <textarea name="message" className="bg-[#030303] border border-white/10 rounded-xl p-4 h-32 focus:border-purple-500 outline-none resize-none transition-all" placeholder="Tell us about your project..." required></textarea>
          </div>

          <button type="submit" className="md:col-span-2 bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-purple-500/20 transition-all active:scale-95">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;