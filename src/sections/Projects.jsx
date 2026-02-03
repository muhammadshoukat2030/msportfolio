import React from 'react';
import SectionTag from '../components/SectionTag';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projectData = [
 {
    title: "Weldon Paints Store Management",
    desc: "A specialized store management system for Weldon Paints, featuring real-time inventory tracking, sales reporting, and automated stock alerts.",
    image: "/assets/weldon-paints.jpg", // public/assets folder mein image rakhein
    tags: ["Node.js", "Express", "React", "MongoDB"]
  },
  {
    title: "Gulf Dunes Tourism",
    desc: "A comprehensive tourism platform offering desert safari bookings, city tours, and adventure packages with a seamless user interface.",
    image: "/assets/gulf-dunes.jpg", // Make sure this image exists in your public/assets folder
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "#" // Add live link if available
  },
    {
    title: "FoodDel - Food Delivery Platform",
    desc: "A high-performance MERN stack food delivery application featuring real-time order tracking, secure payment gateways, and an intuitive restaurant dashboard for menu management.",
    image: "/assets/food.jpg", // public/assets folder mein image rakhein
    tags: ["React", "Node.js", "Express", "MongoDB"],
    link: "#" 
  },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <SectionTag text="Portfolio" />
        <h2 className="text-4xl md:text-5xl font-bold">Our Recent Work</h2>
        <p className="text-gray-500 mt-4">Real projects, real results for real businesses</p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projectData.map((project, i) => (
          <ProjectCard key={i} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;