import React from 'react';

const ProjectCard = ({ title, desc, image, tags }) => (
  <div className="velocity-card overflow-hidden !p-0 group">
    <div className="relative h-64 bg-zinc-900 overflow-hidden">
      <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
    </div>
    <div className="p-8">
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-gray-400 text-sm mb-6 leading-relaxed">{desc}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span key={tag} className="px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] font-bold uppercase">
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default ProjectCard;