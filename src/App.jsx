import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Services from './sections/Services'; // Industries section iske andar add kiya hai
import Projects from './sections/Projects'; // MERN projects ki info yahan hai
import Process from './sections/Process'; 
import TechStack from './sections/TechStack'; // Cloud & Deployment added
import Pricing from './sections/Pricing';
import Contact from './sections/Contact'; 
import FAQ from './sections/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-[#000000] min-h-screen text-white selection:bg-purple-500/30 font-sans">
      {/* 1. Navbar with Hamburger & Smooth Scroll links */}
      <Navbar />
      
      <main>
        {/* 2. Hero Section */}
        <Hero />
        
        {/* 3. Services & Industries We Serve */}
        <Services />
        
        {/* 4. Portfolio (FoodDel, Weldon Paints, Gulf Dunes, etc.) */}
        <Projects />
        
        {/* 5. Working Process Timeline */}
        <Process /> 
        
        {/* 6. Full Tech Stack (Frontend, Backend, DB, Cloud) */}
        <TechStack />
        
        {/* 7. Pricing Packages */}
        <Pricing />
        
        {/* 8. Contact Form Section */}
        <Contact /> 
        
        {/* 9. FAQ Section (Clean & Minimal) */}
        <FAQ />
      </main>
      
      {/* 10. Professional Footer */}
      <Footer />
    </div>
  );
}

export default App;