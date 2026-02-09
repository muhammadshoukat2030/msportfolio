import React, { useState } from 'react';
import SectionTag from '../components/SectionTag';

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "What technologies do you work with?",
      answer: "We specialize in the MERN Stack (MongoDB, Express, React, Node.js), Next.js for high-performance web apps, and React Native for cross-platform mobile applications."
    },
    {
      question: "How long does a typical project take?",
      answer: "Usually, a standard project takes 2-8 weeks. However, we offer an 'MVP Express' service where we can launch a functional version in just 2-4 weeks."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Absolutely! Every project comes with 3 months of premium maintenance and technical support to ensure your system runs smoothly without any bugs."
    },
    {
      question: "How do I make the payment?",
      answer: "You can pay via Bank Transfer (HBL). Once you select a plan, you'll see our bank details. After payment, just share the screenshot on WhatsApp for confirmation."
    },
    {
      question: "Can you redesign my existing website?",
      answer: "Yes, we specialize in modernizing outdated websites using the latest tech stacks to improve speed, SEO, and user experience."
    }
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto bg-[#050505]">
      <div className="text-center mb-16">
        <SectionTag text="FAQ" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4 text-white">Common Questions</h2>
        <p className="text-gray-400 mt-4">Everything you need to know about our process and services.</p>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className={`border rounded-[5px] transition-all duration-300 overflow-hidden ${
              activeIndex === i 
              ? 'border-purple-500 bg-purple-500/5 shadow-[0_0_20px_rgba(147,51,234,0.1)]' 
              : 'border-white/5 bg-[#0A0A0A] hover:border-white/20'
            }`}
          >
            <button 
              onClick={() => toggleFAQ(i)}
              className="w-full p-6 text-left flex justify-between items-center gap-4"
            >
              <span className={`font-bold text-lg md:text-xl transition-colors ${activeIndex === i ? 'text-purple-400' : 'text-white'}`}>
                {faq.question}
              </span>
              <span className={`text-2xl transition-transform duration-300 ${activeIndex === i ? 'rotate-45 text-purple-400' : 'text-gray-500'}`}>
                +
              </span>
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out ${
                activeIndex === i ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-2">
                {faq.answer}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;