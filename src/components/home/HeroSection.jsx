import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Button from "../ui/Button";
import AnimatedHeroGraphic from "./AnimatedHeroGraphic";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] } 
  }
};

export default function HeroSection() {
  return (
    <section className="relative min-h-screen lg:min-h-[80vh] flex flex-col lg:flex-row items-start lg:items-center px-6 md:px-margin-desktop max-w-container-max mx-auto pt-28 lg:pt-20 pb-16">
      <motion.div 
        className="w-full lg:w-[50%] flex flex-col justify-center items-start text-left pr-0 lg:pr-12 xl:pr-16 z-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.p variants={itemVariants} className="font-label-caps text-label-caps text-accent uppercase mb-6 tracking-widest flex items-center">
          <span className="w-8 h-[2px] bg-accent mr-4 inline-block"></span>
          INFOB DIGITAL SOLUTIONS
        </motion.p>
        
        <motion.h1 variants={itemVariants} className="font-hero-mobile text-[44px] leading-[1.1] sm:text-5xl md:text-6xl lg:text-[64px] text-primary mb-6 tracking-tighter font-bold text-left">
          We build digital experiences that move businesses forward.
        </motion.h1>
        
        <motion.p variants={itemVariants} className="font-body-lg text-lg sm:text-xl text-secondary max-w-xl mb-10 text-left leading-relaxed">
          Software, AI and digital solutions designed to turn ambitious ideas into powerful products.
        </motion.p>
        
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row w-full sm:w-auto gap-4">
          <Button to="/contact" variant="primary" className="w-full sm:w-auto justify-center">
            Start a Project →
          </Button>
          <Button to="/work" variant="outline" className="w-full sm:w-auto justify-center">
            Explore Our Work
          </Button>
        </motion.div>
      </motion.div>

      {/* Hero Image / Animated 3D Graphic */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
        className="w-full lg:w-[50%] h-[350px] sm:h-[450px] md:h-[500px] lg:h-[600px] mt-12 lg:mt-0 relative"
      >
        <AnimatedHeroGraphic />
      </motion.div>
    </section>
  );
}
