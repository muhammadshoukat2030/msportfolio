import React from 'react';
import SectionTag from '../components/SectionTag';

const Testimonials = () => {
  const reviews = [
    {
      name: "Sohail Afridi",
      role: "CEO, TechFlow QATAR 🇶🇦",
      content: "MS.WebApp delivered our enterprise project 2 weeks ahead of schedule. The React architecture is clean and the performance is top-notch. Highly recommended for Qatar-based businesses!",
      avatar: "SA",
      rating: 5
    },
    {
      name: "Hamza Khan",
      role: "Founder, HK Solutions PAKISTAN 🇵🇰",
      content: "Working with MS.WebApp was a breeze. They understood our local market needs perfectly and integrated the payment systems flawlessly. Best developer team in the region!",
      avatar: "HK",
      rating: 5
    },
    {
      name: "Omar Al-Sayed",
      role: "Product Manager, Gulf Dunes DUBAI 🇦🇪",
      content: "Excellent communication and high-quality UI/UX work. They handled our API integrations perfectly. The modern design they provided has significantly increased our user engagement.",
      avatar: "OA",
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-4 md:px-6 max-w-7xl mx-auto bg-[#050505]">
      <div className="text-center mb-16">
        <SectionTag text="TESTIMONIALS" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">Trusted by Clients Worldwide</h2>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto text-sm md:text-base">
          Don't just take our word for it. Here is what business owners from Qatar, Pakistan, and UAE say about working with MS.WebApp.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {reviews.map((review, index) => (
          <div 
            key={index} 
            className="p-8 bg-[#0A0A0A] border border-white/5 rounded-[5px] hover:border-purple-500/30 transition-all group relative overflow-hidden"
          >
            {/* Quote Icon Background */}
            <div className="absolute -top-4 -right-2 text-white/5 text-8xl font-serif pointer-events-none group-hover:text-purple-500/10 transition-colors">
              "
            </div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(review.rating)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-yellow-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>

            <p className="text-gray-300 italic mb-8 relative z-10 leading-relaxed text-sm md:text-base">
              "{review.content}"
            </p>

            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-purple-600/20 border border-purple-500/30 rounded-full flex items-center justify-center font-bold text-purple-400">
                {review.avatar}
              </div>
              <div>
                <h4 className="text-white font-bold text-sm">{review.name}</h4>
                <p className="text-gray-500 text-xs">{review.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Trust Badge */}
      <div className="mt-16 flex flex-wrap justify-center items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
         <span className="text-white font-bold text-xl uppercase tracking-tighter">Global Excellence</span>
         <span className="text-white font-bold text-xl uppercase tracking-tighter">5-Star Rated Service</span>
         <span className="text-white font-bold text-xl uppercase tracking-tighter">Verified Developer</span>
      </div>
    </section>
  );
};

export default Testimonials;