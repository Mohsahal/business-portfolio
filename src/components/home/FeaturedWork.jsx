import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import { Badge } from "../ui/SectionHeader";

export default function FeaturedWork() {
  const topProjects = projects.slice(0, 3);

  return (
    <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
        <div className="max-w-3xl">
          <Badge className="mb-6">Portfolio</Badge>
          <h2 className="font-hero-mobile text-hero-mobile md:font-h1 md:text-h1 text-primary tracking-tight font-bold mb-4">
            Selected work
          </h2>
          <p className="font-subheading text-subheading text-secondary">
            Real products. Real systems. Real impact.
          </p>
        </div>
        <Link
          to="/work"
          className="text-primary font-semibold font-body-md inline-flex items-center gap-2 hover:opacity-75 transition-opacity pb-1 border-b border-primary"
        >
          View All Projects <span className="material-symbols-outlined text-sm">arrow_forward</span>
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
        {topProjects.map((project, index) => {
          // First item is full width and slightly taller
          const heightClass = index === 0 ? "h-[400px] md:h-[600px]" : "h-[350px] md:h-[500px]";
          
          return (
            <div 
              key={project.id} 
              className={`relative overflow-hidden group cursor-pointer ${project.colSpan} ${project.offset || ''}`}
            >
              <Link to={`/work/${project.id}`} className="block w-full h-full">
                <div className={`w-full ${heightClass} relative bg-surface-container-lowest`}>
                  {/* Background Image */}
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    src={project.image}
                    alt={project.alt}
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                  
                  {/* Gradient Overlay for Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Top Left Badge */}
                  <div className="absolute top-6 left-6 bg-white px-3 py-1 shadow-sm">
                    <span className="font-label-caps text-[10px] md:text-xs font-bold text-primary uppercase tracking-widest">
                      {project.category || project.tags[0]}
                    </span>
                  </div>
                  
                  {/* Top Right Arrow */}
                  <div className="absolute top-6 right-6 bg-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center shadow-sm group-hover:bg-primary text-primary group-hover:text-white transition-colors duration-300">
                    <span className="material-symbols-outlined text-sm md:text-base">arrow_outward</span>
                  </div>
                  
                  {/* Bottom Left Content */}
                  <div className="absolute bottom-6 left-6 right-6 md:bottom-8 md:left-8 md:right-8 text-white">
                    <p className="font-mono text-xs md:text-sm text-white/70 mb-2">
                      {project.year || "2024"}
                    </p>
                    <h2 className="font-h2 text-2xl md:text-4xl font-semibold mb-2 md:mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                      {project.title}
                    </h2>
                    <p className="font-body-md text-sm md:text-base text-white/80 line-clamp-2 max-w-2xl group-hover:translate-x-2 transition-transform duration-300 delay-75">
                      {project.shortDescription}
                    </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
      </div>
    </section>
  );
}
