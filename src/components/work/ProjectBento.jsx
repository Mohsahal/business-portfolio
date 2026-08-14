import React from "react";
import { Link } from "react-router-dom";
import { projects } from "../../data/projects";
import TiltCard from "../ui/TiltCard";

export default function ProjectBento() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter gap-y-24">
      {projects.map((project, index) => {
        if (index === 0) {
          // Featured Project (Full Width)
          return (
            <TiltCard key={project.id} className="card-container md:col-span-12 group cursor-pointer" tiltAmount={2}>
              <Link to={`/work/${project.id}`}>
                <div className="image-hover-zoom bg-surface-container-low mb-8 h-[360px] sm:h-[480px] md:h-[614px] w-full rounded-DEFAULT border border-outline-variant/30 flex items-center justify-center overflow-hidden">
                  <img
                    className="w-full h-full object-cover rounded-DEFAULT"
                    src={project.image}
                    alt={project.alt}
                    loading="eager"
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
                  <div className="md:col-span-8">
                    <div className="flex gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span key={tag} className="bg-surface-bright px-3 py-1 rounded-full font-label-caps text-label-caps text-secondary border border-outline-variant/20">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h2 className="font-h2 text-3xl md:text-5xl text-primary font-bold mb-4 tracking-tight">
                      {project.title}
                    </h2>
                    <p className="font-body-lg text-body-lg text-secondary max-w-3xl">
                      {project.shortDescription}
                    </p>
                  </div>
                  <div className="md:col-span-4 md:text-right flex items-end justify-end h-full pt-4 md:pt-0">
                    <span className="inline-flex items-center gap-2 font-body-md text-body-md text-primary font-semibold hover:opacity-80 transition-opacity">
                      View Case Study <span className="material-symbols-outlined">arrow_forward</span>
                    </span>
                  </div>
                </div>
              </Link>
            </TiltCard>
          );
        }

        // Standard Bento Project
        return (
          <TiltCard 
            key={project.id} 
            className={`card-container ${project.colSpan} group cursor-pointer ${project.offset || ''}`} 
            tiltAmount={4}
          >
            <Link to={`/work/${project.id}`}>
              <div className={`image-hover-zoom bg-surface-container-low mb-6 ${project.imageHeight || 'h-[400px]'} w-full rounded-DEFAULT border border-outline-variant/30 overflow-hidden`}>
                <img
                  className="w-full h-full object-cover rounded-DEFAULT"
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                />
              </div>
              <div className="flex gap-2 mb-4">
                {project.tags.slice(0, 2).map((tag) => (
                  <span key={tag} className="bg-surface-bright px-3 py-1 rounded-full font-label-caps text-label-caps text-secondary border border-outline-variant/20">
                    {tag}
                  </span>
                ))}
              </div>
              <h3 className="font-subheading text-2xl md:text-3xl text-primary font-bold mb-3">
                {project.title}
              </h3>
              <p className="font-body-md text-body-md text-secondary mb-6 max-w-xl">
                {project.shortDescription}
              </p>
              <span className="inline-flex items-center gap-2 font-label-caps text-label-caps text-primary border-b border-primary pb-1 hover:opacity-80 transition-opacity">
                VIEW CASE STUDY <span className="material-symbols-outlined text-sm">arrow_forward</span>
              </span>
            </Link>
          </TiltCard>
        );
      })}
    </div>
  );
}
