import React, { useState } from 'react';
import SectionTag from '../components/SectionTag';

const FAQ = () => {
  const faqs = [
    {
      question: "What technologies do you work with?",
      answer: "We specialize in MERN Stack (MongoDB, Express, React, Node.js), Next.js, and React Native for mobile apps."
    },
    {
      question: "How long does a typical project take?",
      answer: "Usually 2-8 weeks depending on complexity. MVP versions can be launched even faster in 2-4 weeks."
    },
    {
      question: "Do you provide post-launch support?",
      answer: "Yes, we provide 3 months of free maintenance and technical support after every project launch."
    }
  ];

  return (
    <section id="faq" className="py-24 px-6 max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <SectionTag text="FAQ" />
        <h2 className="text-4xl font-bold mt-4">Frequently Asked Questions</h2>
      </div>

      <div className="space-y-4">
        {faqs.map((faq, i) => (
          <div key={i} className="velocity-card p-8 border border-white/5 hover:border-purple-500/20 transition-all">
            <h3 className="text-xl font-bold mb-3 text-white">{faq.question}</h3>
            <p className="text-gray-400 leading-relaxed">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;