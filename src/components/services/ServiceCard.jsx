import React from "react";
import { Link } from "react-router-dom";

export default function ServiceCard({ service }) {
  return (
    <Link
      to={`/services/${service.id}`}
      className="relative overflow-hidden border border-white/70 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-12 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,1)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group h-full"
    >
      {/* Premium Shine Overlay on Hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

      <div className="relative z-10">
        <div className="flex justify-between items-start mb-12 md:mb-16">
          <span className="font-body-md text-body-md text-secondary font-medium bg-white/50 px-4 py-1.5 rounded-full border border-white/50 shadow-sm">{service.number}</span>
          <span className="material-symbols-outlined text-[40px] text-primary font-light group-hover:text-accent group-hover:scale-110 transition-all duration-500 drop-shadow-sm">
            {service.icon}
          </span>
        </div>
        
        <h3 className="font-subheading text-2xl md:text-3xl text-primary font-semibold mb-4 leading-tight">
          {service.title}
        </h3>
        
        <p className="font-body-md text-body-md text-secondary mb-8 pr-2 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Feature tags (Pills) */}
        <div className="border-t border-black/5 pt-8 flex flex-wrap gap-2 mb-10">
          {service.tags.map((tag) => (
            <span
              key={tag}
              className="font-label-caps text-[11px] tracking-wide text-secondary bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:bg-white group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div className="pt-5 border-t border-outline-variant/40 flex justify-between items-center relative z-10">
        <span className="font-label-caps text-xs text-primary font-semibold uppercase tracking-wider inline-flex items-center gap-2 group-hover:text-accent transition-colors">
          Explore Service Details
          <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </span>
      </div>
    </Link>
  );
}
