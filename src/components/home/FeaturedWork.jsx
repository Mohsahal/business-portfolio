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
          <article className="card-container group cursor-pointer border border-outline-variant/30 p-6 md:p-10 rounded-[2rem] glass-panel hover:border-primary transition-all duration-300">
            <Link to={`/work/${topProjects[0].id}`}>
              <div className="image-hover-zoom bg-transparent mb-8 h-[340px] sm:h-[460px] md:h-[580px] w-full rounded-[1.5rem] flex items-center justify-center overflow-hidden">
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
                      <span key={tag} className="bg-surface-bright px-3 py-1 rounded-full font-label-caps text-label-caps text-secondary border border-outline-variant/20">
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
                  <span className="inline-flex items-center gap-2 font-body-md text-body-md text-primary font-semibold group-hover:translate-x-1 transition-transform">
                    View Case Study <span className="material-symbols-outlined">arrow_forward</span>
                  </span>
                </div>
              </div>
            </Link>
          </article>
        )}

        {/* Next 2 Projects in 2 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
          {topProjects.slice(1, 3).map((project) => (
            <article key={project.id} className="card-container group cursor-pointer border border-outline-variant/30 p-6 md:p-8 rounded-[2rem] glass-panel hover:border-primary transition-all duration-300 flex flex-col justify-between">
              <Link to={`/work/${project.id}`} className="flex flex-col h-full justify-between">
                <div>
                  <div className="image-hover-zoom bg-transparent mb-6 h-[280px] md:h-[380px] w-full rounded-[1.5rem] overflow-hidden">
                    <img
                      className="w-full h-full object-cover"
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
                  <h3 className="font-subheading text-xl md:text-2xl text-primary font-bold mb-3">
                    {project.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary mb-6">
                    {project.shortDescription}
                  </p>
                </div>
                <div className="pt-4 border-t border-outline-variant flex items-center justify-between">
                  <span className="font-label-caps text-xs text-primary font-semibold uppercase tracking-wider">
                    CASE STUDY
                  </span>
                  <span className="material-symbols-outlined text-primary group-hover:translate-x-1 transition-transform">
                    arrow_forward
                  </span>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
