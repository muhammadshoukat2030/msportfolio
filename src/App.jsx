import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TrustBar from './components/TrustBar';
import Services from './sections/Services';
import Projects from './sections/Projects';
import WhyUs from "./sections/WhyUs";
import Process from './sections/Process';
import TechStack from './sections/TechStack';
import Pricing from './sections/Pricing';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';

// Yahan path fix kiya gaya hai - ./pages/Contact.jsx se import hoga
import Contact from './pages/Contact'; 

function App() {
  return (
    <Router>
      <div className="bg-[#000000b5] min-h-screen text-white selection:bg-purple-500/30 font-sans">
        <Navbar />
        <main>
          <Routes>
            {/* Home Page Route */}
            <Route path="/" element={
              <>
                <Hero />
                <TrustBar />
                <Services />
                <Projects />
                <WhyUs />
                <Process />
                <TechStack />
                <Pricing />
                <Testimonials />
                <FAQ />
              </>
            } />
            
            {/* Contact Page Route */}
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;