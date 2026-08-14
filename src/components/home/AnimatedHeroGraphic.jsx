import React, { useRef, useState, useEffect } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

export default function AnimatedHeroGraphic() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative flex items-center justify-center bg-surface rounded-[1.5rem] overflow-hidden border border-outline-variant shadow-ambient group"
      style={{ perspective: "1000px" }}
    >
      {/* Animated Background Mesh */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

      {/* Glowing Floating Orbs */}
      <motion.div 
        animate={{ 
          y: [0, -30, 0],
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-64 h-64 bg-primary/30 rounded-full blur-[80px] -top-10 -left-10 pointer-events-none"
      />
      
      <motion.div 
        animate={{ 
          y: [0, 40, 0],
          scale: [1, 1.3, 1],
          opacity: [0.2, 0.4, 0.2]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute w-80 h-80 bg-accent/30 rounded-full blur-[100px] -bottom-10 -right-10 pointer-events-none"
      />

      {/* 3D Glass Elements */}
      <motion.div 
        animate={{
          rotateX: mousePosition.y * -20,
          rotateY: mousePosition.x * 20,
        }}
        transition={{ type: "spring", stiffness: 75, damping: 15 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-full h-full flex items-center justify-center"
      >
        
        {/* Main Central Card */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="relative z-20 w-[65%] h-[75%] bg-surface-container-lowest/60 backdrop-blur-xl border border-white/10 rounded-2xl shadow-2xl p-6 flex flex-col justify-between overflow-hidden"
          style={{ transform: "translateZ(50px)" }}
        >
          {/* Mock UI Header */}
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <div className="w-5 h-5 rounded-full bg-primary animate-pulse"></div>
            </div>
            <div className="flex-1">
              <div className="w-1/2 h-3 bg-secondary/30 rounded-full mb-2"></div>
              <div className="w-1/3 h-2 bg-secondary/20 rounded-full"></div>
            </div>
          </div>
          
          {/* Mock UI Graph */}
          <div className="flex-1 w-full bg-surface/50 rounded-xl border border-outline-variant/30 relative overflow-hidden mb-4 flex items-end p-4 gap-3">
             <motion.div animate={{ height: ["40%", "70%", "40%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="flex-1 bg-outline-variant/50 rounded-t-md"></motion.div>
             <motion.div animate={{ height: ["60%", "40%", "60%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="flex-1 bg-outline/50 rounded-t-md"></motion.div>
             <motion.div animate={{ height: ["80%", "50%", "80%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="flex-1 bg-secondary/70 rounded-t-md"></motion.div>
             <motion.div animate={{ height: ["50%", "90%", "50%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="flex-1 bg-primary rounded-t-md shadow-lg shadow-primary/10"></motion.div>
          </div>

          {/* Mock UI Footer */}
          <div className="flex gap-2">
            <div className="w-full h-8 bg-surface-bright/50 rounded-lg"></div>
            <div className="w-1/3 h-8 bg-primary/20 rounded-lg"></div>
          </div>
        </motion.div>

        {/* Floating Component Left */}
        <motion.div 
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute z-30 left-[5%] top-[20%] w-32 md:w-40 h-32 md:h-40 bg-surface-bright/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-4 flex flex-col gap-3"
          style={{ transform: "translateZ(80px)" }}
        >
          <div className="w-full h-1/2 bg-outline-variant/30 rounded-lg border border-outline-variant/20"></div>
          <div className="w-3/4 h-3 bg-secondary/30 rounded-full"></div>
          <div className="w-1/2 h-3 bg-secondary/20 rounded-full"></div>
        </motion.div>

        {/* Floating Component Right */}
        <motion.div 
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute z-10 right-[5%] bottom-[15%] w-36 md:w-48 h-24 bg-surface-container-lowest/80 backdrop-blur-md border border-white/10 rounded-2xl shadow-xl p-4 flex items-center gap-4"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="w-12 h-12 rounded-full border-4 border-outline-variant/30 border-t-primary animate-spin"></div>
          <div className="flex-1 space-y-2">
            <div className="w-full h-2 bg-secondary/30 rounded-full"></div>
            <div className="w-4/5 h-2 bg-secondary/20 rounded-full"></div>
          </div>
        </motion.div>
        
        {/* Abstract 3D Rings */}
        <motion.div 
          animate={{ rotateZ: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute z-0 w-[120%] h-[120%] border-[1px] border-dashed border-primary/20 rounded-full"
          style={{ transform: "translateZ(-20px)" }}
        />
        <motion.div 
          animate={{ rotateZ: -360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute z-0 w-[90%] h-[90%] border-[1px] border-outline/30 rounded-full"
          style={{ transform: "translateZ(-10px)" }}
        />

      </motion.div>
    </div>
  );
}
