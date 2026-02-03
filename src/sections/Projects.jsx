import React from 'react';
import SectionTag from '../components/SectionTag';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectData = [
    {
      title: "Weldon Paints Store Management",
      desc: "A specialized store management system for Weldon Paints, featuring real-time inventory tracking, sales reporting, and automated stock alerts.",
      image: "/assets/weldon-paints.jpg", 
      tags: ["Node.js", "Express", "React", "MongoDB"],
      link: "#"
    },
    {
      title: "Gulf Dunes Tourism",
      desc: "A comprehensive tourism platform offering desert safari bookings, city tours, and adventure packages with a seamless user interface.",
      image: "/assets/gulf-dunes.jpg", 
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "#" 
    },
    {
      title: "FoodDel - Food Delivery Platform",
      desc: "A high-performance MERN stack food delivery application featuring real-time order tracking, secure payment gateways, and an intuitive restaurant dashboard.",
      image: "/assets/food.jpg", 
      tags: ["React", "Node.js", "Express", "MongoDB"],
      link: "#" 
    },
  ];

  return (
    // ID ko "projects" kar diya hai taake Navbar se link ho jaye
    <section id="projects" className="py-24 px-6 max-w-7xl mx-auto scroll-mt-20">
      <div className="text-center mb-16">
        <SectionTag text="Portfolio" />
        <h2 className="text-4xl md:text-5xl font-bold text-white mt-4">Our Recent Work</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Real projects, real results for real businesses. We specialize in building scalable MERN stack applications.
        </p>
      </div>

      {/* Grid Layout: 1 column on mobile, 2 on medium, 3 on large screens */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;