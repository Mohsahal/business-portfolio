import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "../../data/services";
import { Badge } from "../ui/SectionHeader";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function ServicesTeaser() {
  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap relative"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6 relative z-10">
        <motion.div variants={itemVariants} className="max-w-3xl">
          <Badge className="mb-6">Capabilities</Badge>
          <h2 className="font-h2-mobile md:font-h2 text-h2-mobile md:text-h2 text-primary tracking-tight leading-tight text-balance">
            From idea to execution, we create technology that works for your business.
          </h2>
        </motion.div>
        <motion.div variants={itemVariants}>
          <Link
            to="/services"
            className="text-accent font-semibold font-body-md inline-flex items-center gap-2 hover:opacity-75 transition-opacity pb-1 border-b border-accent"
          >
            View All Services <span className="material-symbols-outlined text-sm">arrow_forward</span>
          </Link>
        </motion.div>
      </div>

      <div className="relative">
        {/* Subtle Ambient Glow for Glassmorphism */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-primary/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter relative z-10">
          {services.slice(0, 6).map((service) => (
            <motion.div key={service.id} variants={itemVariants} className="h-full">
              <Link
                to={`/services/${service.id}`}
                className="relative overflow-hidden border border-white/70 bg-white/40 backdrop-blur-2xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_8px_30px_rgba(0,0,0,0.04),inset_0_1px_1px_rgba(255,255,255,1)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.12),inset_0_1px_1px_rgba(255,255,255,1)] hover:-translate-y-2 transition-all duration-500 flex flex-col justify-between group h-full"
              >
                {/* Premium Shine Overlay on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-0"></div>

                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-12">
                    <span className="font-body-md text-body-md text-secondary font-medium bg-white/50 px-3 py-1 rounded-full border border-white/50">{service.number}</span>
                    <span className="material-symbols-outlined text-[32px] text-primary font-light group-hover:text-accent group-hover:scale-110 transition-all duration-500 drop-shadow-sm">
                      {service.icon}
                    </span>
                  </div>
                  <h3 className="font-subheading text-2xl md:text-[28px] text-primary font-semibold mb-4 leading-tight">
                    {service.title}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary mb-8 line-clamp-3 leading-relaxed">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="border-t border-black/5 pt-6 flex flex-wrap gap-2 mt-auto relative z-10">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-label-caps text-[10.5px] tracking-wide text-secondary bg-white/60 backdrop-blur-md px-4 py-2 rounded-full border border-white/80 shadow-[0_2px_10px_rgba(0,0,0,0.03)] group-hover:bg-white group-hover:shadow-[0_4px_15px_rgba(0,0,0,0.06)] transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
