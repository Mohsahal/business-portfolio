import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Badge } from "../ui/SectionHeader";
import Button from "../ui/Button";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function WhyInfob() {
  const pillars = [
    {
      title: "Business First",
      description: "Technology is a means to an end. We begin every engagement by understanding your operational metrics and strategic goals, ensuring our digital solutions deliver measurable impact."
    },
    {
      title: "Engineering Excellence",
      description: "We build for scale, security, and longevity. Our architectures are robust, relying on proven patterns rather than fragile novelties, guaranteeing long-term stability."
    },
    {
      title: "Modern Design",
      description: "We employ Informed Minimalism. Our interfaces are stripped of the extraneous, focusing user attention precisely where it is needed to accomplish complex tasks intuitively."
    },
    {
      title: "AI Ready",
      description: "We design systems with data at their core, ensuring your infrastructure is primed to leverage machine learning and artificial intelligence capabilities as they evolve."
    }
  ];

  return (
    <motion.section 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mb-section-gap"
    >
      <motion.div variants={itemVariants} className="mb-16">
        <Badge className="mb-6">Philosophy</Badge>
        <h2 className="font-h2-mobile text-h2-mobile md:font-h2 md:text-h2 text-primary border-b border-surface-border pb-6 tracking-tight">
          Why INFOB?
        </h2>
      </motion.div>

      <div className="space-y-12">
        {pillars.map((pillar, idx) => (
          <motion.div
            variants={itemVariants}
            key={pillar.title}
            className={`flex flex-col md:flex-row gap-8 items-start pb-12 ${
              idx !== pillars.length - 1 ? "border-b border-surface-border" : ""
            }`}
          >
            <div className="font-h1-mobile text-2xl md:text-4xl lg:text-5xl font-bold text-primary md:w-1/2 tracking-tight leading-tight">
              {pillar.title}
            </div>
            <div className="md:w-1/2 pt-2 md:pt-4">
              <p className="font-body-lg text-body-lg text-secondary leading-relaxed">
                {pillar.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Embedded CTA Block */}
      <motion.div 
        variants={itemVariants}
        className="mt-24 bg-surface-bright border border-surface-border rounded-xl p-10 md:p-20 text-center shadow-sm"
      >
        <h3 className="font-h2-mobile md:font-h2 text-2xl md:text-4xl font-bold text-primary mb-6 tracking-tight text-balance mx-auto">
          Ready to initiate your next project?
        </h3>
        <p className="font-body-lg text-body-lg text-secondary max-w-2xl mx-auto mb-10 text-pretty">
          Engage with our technical architects to discuss your specific requirements.
        </p>
        <Button to="/contact" variant="primary">
          Start the Conversation
        </Button>
      </motion.div>
    </motion.section>
  );
}
