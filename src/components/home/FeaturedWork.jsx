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

      <div className="space-y-16">
        {/* Project 1 - Full Width */}
        {topProjects[0] && (
          <Link 
            to={`/work/${topProjects[0].id}`}
            className="card-container relative overflow-hidden group cursor-pointer border border-outline-variant/30 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl p-6 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 block"
          >
            {/* Premium Shine Overlay on Hover */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 rounded-[2.5rem]"></div>
            
            <div className="relative z-10">
              <div className="image-hover-zoom bg-surface-container-lowest mb-8 h-[340px] sm:h-[460px] md:h-[580px] w-full rounded-[1.5rem] flex items-center justify-center overflow-hidden">
                <img
                  className="w-full h-full object-cover"
                  src={topProjects[0].image}
                  alt={topProjects[0].alt}
                  loading="lazy"
                />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
                <div className="md:col-span-8">
                  <div className="flex gap-2 mb-4">
                    {topProjects[0].tags.slice(0, 2).map((tag) => (
                      <span key={tag} className="font-label-caps text-[11px] tracking-wide text-secondary bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:bg-white group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-h2 text-2xl md:text-4xl text-primary font-bold mb-4">
                    {topProjects[0].title}
                  </h3>
                  <p className="font-body-lg text-body-lg text-secondary max-w-3xl">
                    {topProjects[0].shortDescription}
                  </p>
                </div>
                <div className="md:col-span-4 md:text-right flex items-end justify-end h-full pt-4 md:pt-0">
                  <span className="inline-flex items-center gap-2 font-label-caps text-xs text-primary font-semibold uppercase tracking-wider group-hover:text-accent transition-colors">
                    View Case Study <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </span>
                </div>
              </div>
            </div>
          </Link>
        )}

        {/* Next 2 Projects in 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {topProjects.slice(1, 3).map((project) => (
            <Link 
              key={project.id} 
              to={`/work/${project.id}`} 
              className="card-container relative overflow-hidden group cursor-pointer border border-outline-variant/30 rounded-[2.5rem] bg-white/40 backdrop-blur-2xl p-6 md:p-8 shadow-[0_8px_30px_rgba(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12)] hover:-translate-y-2 hover:border-primary/30 transition-all duration-500 flex flex-col justify-between"
            >
              {/* Premium Shine Overlay on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0 rounded-[2.5rem]"></div>
              
              <div className="relative z-10 flex flex-col h-full">
                <div className="image-hover-zoom bg-surface-container-lowest mb-6 h-[280px] md:h-[380px] w-full rounded-[1.5rem] overflow-hidden">
                  <img
                    className="w-full h-full object-cover"
                    src={project.image}
                    alt={project.alt}
                    loading="lazy"
                  />
                </div>
                <div className="flex gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span key={tag} className="font-label-caps text-[11px] tracking-wide text-secondary bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:bg-white group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-subheading text-xl md:text-2xl text-primary font-bold mb-3">
                  {project.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-8 flex-grow">
                  {project.shortDescription}
                </p>
                <div className="pt-4 border-t border-outline-variant/40 flex items-center justify-between mt-auto">
                  <span className="font-label-caps text-xs text-primary font-semibold uppercase tracking-wider group-hover:text-accent transition-colors">
                    CASE STUDY
                  </span>
                  <span className="material-symbols-outlined text-sm text-primary group-hover:translate-x-1 group-hover:text-accent transition-all">
                    arrow_forward
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
