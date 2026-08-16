import React from "react";
import { Link } from "react-router-dom";
import TiltCard from "../ui/TiltCard";

export default function ServiceCard({ service }) {
  return (
    <TiltCard tiltAmount={3} innerClassName="group glass-panel rounded-[2rem] p-8 md:p-12 hover:bg-white/60 transition-all duration-500 relative overflow-hidden flex flex-col justify-between">
      <div>
        <div className="flex justify-between items-start mb-12 md:mb-16">
          <span className="font-body-md text-body-md text-secondary font-medium">{service.number}</span>
          <span className="material-symbols-outlined text-3xl md:text-4xl text-primary font-light group-hover:scale-110 transition-transform duration-300 normal-case">
            {service.icon}
          </span>
        </div>
        
        <h3 className="font-subheading text-2xl md:text-3xl text-primary font-semibold mb-4">
          {service.title}
        </h3>
        
        <p className="font-body-md text-body-md text-secondary mb-8 pr-2 leading-relaxed">
          {service.shortDescription}
        </p>

        {/* Feature bullets */}
        <ul className="space-y-3 font-body-md text-body-md text-secondary border-t border-outline-variant pt-6 mb-8">
          {service.tags.map((tag) => (
            <li key={tag} className="flex items-center gap-3">
              <span className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></span>
              <span>{tag}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="pt-4 border-t border-outline-variant/60 flex justify-between items-center">
        <Link
          to={`/services/${service.id}`}
          className="font-label-caps text-xs text-primary font-semibold uppercase tracking-wider inline-flex items-center gap-2 hover:opacity-75 transition-opacity"
        >
          Explore Service Details
          <span className="material-symbols-outlined text-sm normal-case">arrow_forward</span>
        </Link>
      </div>
    </TiltCard>
  );
}
