import React from 'react';
import SectionTag from '../components/SectionTag';
import TechIcon from '../components/TechIcon';

const TechStack = () => {
  const categories = [
    {
      title: "Frontend Development",
      items: [
        { name: "React", subtitle: "UI Library", icon: "⚛️", color: "#61DAFB" },
        { name: "Next.js", subtitle: "React Framework", icon: "▲", color: "#FFFFFF" },
        { name: "Tailwind CSS", subtitle: "CSS Framework", icon: "🎨", color: "#38BDF8" },
        { name: "JavaScript", subtitle: "Language", icon: "🟨", color: "#F7DF1E" }
      ]
    },
    {
      title: "Backend Development",
      items: [
        { name: "Node.js", subtitle: "Runtime", icon: "⬢", color: "#339933" },
        // { name: "Laravel", subtitle: "PHP Framework", icon: "L", color: "#FF2D20" },
        { name: "Express", subtitle: "Node Framework", icon: "E", color: "#828282" },
        { name: "Django", subtitle: "Python Framework", icon: "D", color: "#092E20" }
      ]
    },
    {
      title: "Mobile Development",
      items: [
        { name: "React Native", subtitle: "iOS & Android", icon: "RN", color: "#61DAFB" },
        { name: "Flutter", subtitle: "Cross-Platform", icon: "F", color: "#02569B" },
        // { name: "Expo", subtitle: "Framework", icon: "E", color: "#ffffff" }
      ]
    },
    {
      title: "Database & Storage",
      items: [
        { name: "PostgreSQL", subtitle: "Relational", icon: "🐘", color: "#336791" },
        { name: "MongoDB", subtitle: "NoSQL", icon: "🍃", color: "#47A248" },
        { name: "MySQL", subtitle: "SQL Database", icon: "🐬", color: "#4479A1" },
        { name: "Redis", subtitle: "Caching", icon: "R", color: "#DC382D" }
      ]
    },
    {
      title: "Cloud & Deployment",
      items: [
        { name: "AWS", subtitle: "Cloud Hosting", icon: "☁️", color: "#FF9900" },
        { name: "Vercel", subtitle: "Frontend Hosting", icon: "▲", color: "#FFFFFF" },
        { name: "DigitalOcean", subtitle: "VPS Hosting", icon: "DO", color: "#0080FF" },
        { name: "GitHub", subtitle: "Version Control", icon: "GH", color: "#828282" }
      ]
    }
  ];

  return (
    <section id="tech" className="py-24 px-6 max-w-7xl mx-auto">
      {/* Header Section */}
      <div className="text-center mb-20">
        <SectionTag text="TECHNOLOGY" />
        <h2 className="text-4xl md:text-5xl font-bold mt-4">Our Tech Stack</h2>
        <p className="text-gray-500 mt-4 max-w-2xl mx-auto">
          Modern, proven technologies for enterprise-grade solutions.
        </p>
      </div>

      {/* Categories Loop */}
      {categories.map((cat, i) => (
        <div key={i} className="mb-20">
          <h3 className="flex items-center gap-3 text-white text-xl font-bold mb-8 pl-4 border-l-4 border-purple-600 uppercase tracking-wider">
             {cat.title}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {cat.items.map((item, idx) => (
              <TechIcon key={idx} {...item} />
            ))}
          </div>
        </div>
      ))}
    </section>
  );
};

export default TechStack;