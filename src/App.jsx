import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TrustBar from './components/TrustBar'; 
import Services from './sections/Services'; 
import Projects from './sections/Projects'; 
import WhyUs from "./sections/WhyUs";
import Process from './sections/Process'; 
import TechStack from './sections/TechStack'; 
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials'; // Naya section jo humne banaya
import FAQ from './sections/FAQ';
import Contact from './sections/Contact'; 
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#000000b5] min-h-screen text-white selection:bg-purple-500/30 font-sans">
      {/* 1. Navigation */}
      <Navbar />
      
      <main>
        {/* 2. Introduction & Social Proof */}
        <Hero />
        <TrustBar />
        
        {/* 3. What You Offer */}
        <Services />
        
        {/* 4. Proof of Work (Portfolio) */}
        <Projects />
        
        {/* 5. Differentiators (Why choose you?) */}
        <WhyUs />
        
        {/* 6. Transparency (How you work & Tools you use) */}
        <Process /> 
        <TechStack />
        
        {/* 7. Investment (Pricing) */}
        <Pricing />
        
        {/* 8. Trust Building (Social Proof) */}
        <Testimonials /> 
        
        {/* 9. Objection Handling (Questions) */}
        <FAQ />

        {/* 10. Final Call to Action (Contact) */}
        <Contact /> 
      </main>
      
      {/* 11. Footer & Floating WhatsApp */}
      <Footer />
    </div>
  );
}

export default App;