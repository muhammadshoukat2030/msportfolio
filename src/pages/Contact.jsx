import React from 'react';
import SectionTag from '../components/SectionTag';
import Swal from 'sweetalert2';

const Contact = () => {

  const whatsappNumber = "923358004900";
  const whatsappMsg = encodeURIComponent(
    "Hello DevZore Team, I’d like to discuss a project with you."
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);

    try {
      const response = await fetch("https://formspree.io/f/mgozjzql", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (response.ok) {
        Swal.fire({
          title: 'Message Sent 🚀',
          text: 'DevZore will contact you within 24 hours.',
          icon: 'success',
          confirmButtonColor: '#7c3aed',
          background: '#0a0a0a',
          color: '#fff'
        }).then(() => {
          form.reset();
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      } else throw new Error();

    } catch {
      Swal.fire({
        title: 'Error',
        text: 'Please try again.',
        icon: 'error',
        background: '#0a0a0a',
        color: '#fff'
      });
    }
  };

  return (
    <section className="relative text-white overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1492724441997-5dc865305da7"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-black/80"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">

        {/* HEADER */}
        <div className="text-center mb-14 sm:mb-20">
          <SectionTag text="DEVZORE AGENCY" />

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 leading-tight">
            Let’s Build Something Great Together
          </h1>

          <p className="text-gray-400 mt-4 max-w-xl mx-auto text-sm sm:text-base">
            DevZore is a modern web development agency based in Islamabad, Pakistan.
            We deliver high-quality websites, web apps, and scalable digital solutions.
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-14 sm:mb-20 text-center">
          <div className="glass p-4 sm:p-6 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400">50+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Projects Delivered</p>
          </div>

          <div className="glass p-4 sm:p-6 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400">20+</h3>
            <p className="text-gray-400 text-xs sm:text-sm">International Clients</p>
          </div>

          <div className="glass p-4 sm:p-6 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400">5★</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Client Satisfaction</p>
          </div>

          <div className="glass p-4 sm:p-6 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-bold text-purple-400">24h</h3>
            <p className="text-gray-400 text-xs sm:text-sm">Response Time</p>
          </div>
        </div>

        {/* CONTACT OPTIONS */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-14 sm:mb-20">

          <a
            href={`https://wa.me/${whatsappNumber}?text=${whatsappMsg}`}
            target="_blank"
            className="bg-green-500 p-6 rounded-2xl text-center hover:scale-105 transition"
          >
            <h3 className="text-lg font-bold text-black">WhatsApp</h3>
            <p className="text-black/80 text-xs sm:text-sm mt-2">Fastest response</p>
          </a>

          <a
            href="mailto:muhammadshoukat2030@gmail.com"
            className="glass p-6 rounded-2xl text-center hover:scale-105 transition"
          >
            <h3 className="text-lg font-bold">Email</h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">Professional communication</p>
          </a>

          <div className="glass p-6 rounded-2xl text-center">
            <h3 className="text-lg font-bold">Office</h3>
            <p className="text-gray-400 text-xs sm:text-sm mt-2">
              Islamabad, Pakistan 🇵🇰
            </p>
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="space-y-6">

            <div>
              <h2 className="text-xl sm:text-2xl font-bold mb-2">Why Choose DevZore?</h2>
              <p className="text-gray-400 text-sm sm:text-base">
                Modern design, fast performance, scalable architecture.
              </p>
            </div>

            <div className="glass p-4 rounded-xl">
              📍 Islamabad, Pakistan
            </div>

            <div className="glass p-4 rounded-xl">
              ⏰ Mon - Sat | 10 AM - 8 PM
            </div>

            <div className="glass p-4 rounded-xl">
              🌍 USA, UK, UAE, Canada
            </div>

          </div>

          {/* FORM */}
          <div className="glass p-5 sm:p-8 rounded-xl shadow-xl">

            <form
              onSubmit={handleSubmit}
              className="grid gap-5"
            >

              <input name="name" placeholder="Full Name *" required className="input" />
              <input name="email" type="email" placeholder="Email *" required className="input" />
              <input name="phone" placeholder="Phone *" required className="input" />
              <input name="country" placeholder="Country *" required className="input" />

              <select name="project_type" required className="input">
               <option value="">Select Service</option>
                <option>🚀 Full Stack Website (MERN / Next.js)</option>
                 <option>🛒 E-commerce Store</option> 
                 <option>🏢 Business Website</option>
                  <option>⚙️ Web App / Dashboard</option> 
                  <option>🎨 UI/UX Design</option>
                   <option>🔥 Landing Page</option> 
                   <option>🛠 Bug Fixing</option> 
                   <option>✨ Custom Project</option>
              </select>

              <select name="budget" required className="input">
                <option value="">Select Budget</option>
                 <option>$300 – $800 (Basic)</option>
                  <option>$800 – $2,000 (Standard)</option>
                   <option>$2,000 – $5,000 (Advanced)</option>
                    <option>$5,000+ (Premium)</option> 
                    <option>Not Sure (Need Guidance)</option>
              </select>

              <textarea
                name="message"
                placeholder="Project details..."
                required
                className="input h-28 sm:h-32"
              ></textarea>

              <button className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 py-3 sm:py-4 rounded-lg font-bold">
                🚀 Start Your Project with DevZore
              </button>

            </form>

          </div>

        </div>

      </div>

      <style jsx>{`
        .glass {
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.08);
          backdrop-filter: blur(10px);
        }

        .input {
          width: 100%;
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.1);
          padding: 12px;
          border-radius: 8px;
          outline: none;
          color: white;
        }

        .input:focus {
          border-color: #7c3aed;
        }

        select option {
          background: #111;
          color: #fff;
        }
      `}</style>

    </section>
  );
};

export default Contact;