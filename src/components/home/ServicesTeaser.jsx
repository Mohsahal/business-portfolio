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
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
        {services.slice(0, 6).map((service) => (
          <motion.div key={service.id} variants={itemVariants}>
            <Link
              to={`/services/${service.id}`}
              className="service-card border border-white/40 rounded-[2rem] p-8 md:p-10 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-[2px] transition-all duration-500 glass-panel hover:border-outline-variant flex flex-col justify-between group h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-12">
                  <span className="font-body-md text-body-md text-secondary font-medium">{service.number}</span>
                  <span className="material-symbols-outlined text-3xl text-primary font-light group-hover:text-accent transition-colors duration-300">
                    {service.icon}
                  </span>
                </div>
                <h3 className="font-subheading text-xl md:text-2xl text-primary font-semibold mb-4">
                  {service.title}
                </h3>
                <p className="font-body-md text-body-md text-secondary mb-8 line-clamp-3 leading-relaxed">
                  {service.shortDescription}
                </p>
              </div>

              <div className="border-t border-surface-border pt-6 flex flex-wrap gap-2 mt-auto">
                {service.tags.map((tag) => (
                  <span
                    key={tag}
                    className="font-label-caps text-[11px] text-secondary bg-surface-secondary px-3 py-1.5 rounded-sm border border-surface-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
