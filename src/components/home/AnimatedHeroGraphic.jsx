import React, { useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AnimatedHeroGraphic() {
  const containerRef = useRef(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 2 - 1;
    const y = ((e.clientY - rect.top) / rect.height) * 2 - 1;
    setMousePosition({ x, y });
  };

  const handleMouseLeave = () => {
    setMousePosition({ x: 0, y: 0 });
    setIsHovered(false);
  };

  return (
    <div 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      className="w-full h-full relative flex items-center justify-center bg-transparent group"
      style={{ perspective: "2000px" }}
    >
      {/* Background Glow */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.1, 0.2, 0.1] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute w-[25rem] h-[25rem] bg-primary/20 rounded-full blur-[100px] pointer-events-none"
      />

      {/* Main 3D Container */}
      <motion.div
        animate={{
          rotateX: mousePosition.y * -15,
          rotateY: mousePosition.x * 15,
        }}
        transition={{ type: "spring", stiffness: 40, damping: 20 }}
        style={{ transformStyle: "preserve-3d" }}
        className="relative w-72 h-72 lg:w-[28rem] lg:h-[28rem] flex items-center justify-center"
      >
        
        {/* Card 1: Bottom Layer (Mobile App) */}
        <motion.div
          animate={{
            z: isHovered ? -120 : -60,
            x: isHovered ? -100 : -40,
            y: isHovered ? 80 : 40,
            rotateZ: isHovered ? -8 : -15,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="absolute w-56 h-72 lg:w-64 lg:h-80 glass-panel bg-white/40 backdrop-blur-md rounded-2xl border border-white/60 shadow-[0_20px_40px_rgba(0,0,0,0.05)] p-5 flex flex-col gap-4"
          style={{ transformStyle: "preserve-3d" }}
        >
          <div className="flex justify-between items-center mb-2">
            <div className="w-8 h-8 rounded-lg bg-white flex items-center justify-center shadow-[0_2px_8px_rgba(0,0,0,0.04)] border border-outline-variant/20">
              <div className="w-2.5 h-2.5 rounded-full bg-white border-[1.5px] border-outline-variant/40 shadow-sm"></div>
            </div>
            <div className="h-2 w-12 bg-outline/30 rounded-full"></div>
          </div>
          <div className="flex-1 bg-white/30 rounded-xl border border-white/40 p-3 flex flex-col gap-3">
             <div className="h-24 w-full bg-outline-variant/30 rounded-lg"></div>
             <div className="h-8 w-full bg-primary/20 rounded-lg"></div>
             <div className="h-8 w-full bg-secondary/10 rounded-lg"></div>
          </div>
        </motion.div>

        {/* Card 2: Middle Layer (Web Platform - Main) */}
        <motion.div
          animate={{
            z: 0,
            x: 0,
            y: 0,
            rotateZ: 0,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="absolute z-10 w-72 h-64 lg:w-96 lg:h-80 glass-panel-heavy bg-white/60 backdrop-blur-2xl rounded-2xl border border-white/80 shadow-[0_30px_60px_rgba(0,0,0,0.1),inset_0_1px_1px_rgba(255,255,255,1)] p-6 flex flex-col justify-between"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* Header */}
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center shadow-[0_10px_20px_var(--color-primary)]">
               <span className="material-symbols-outlined text-[24px] text-on-primary">public</span>
            </div>
            <div className="flex-1 space-y-2">
              <div className="h-3 w-1/2 bg-primary/80 rounded-full"></div>
              <div className="h-2 w-1/3 bg-secondary/40 rounded-full"></div>
            </div>
          </div>
          {/* Dashboard Chart */}
          <div className="flex-1 w-full bg-surface-bright/50 rounded-xl border border-white/50 p-4 flex items-end gap-3 overflow-hidden relative">
             <div className="absolute top-3 left-4 text-[10px] font-label-caps tracking-widest text-secondary">METRICS</div>
             <motion.div animate={{ height: ["40%", "70%", "40%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }} className="flex-1 bg-outline/40 rounded-t-md"></motion.div>
             <motion.div animate={{ height: ["60%", "40%", "60%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }} className="flex-1 bg-outline/50 rounded-t-md"></motion.div>
             <motion.div animate={{ height: ["80%", "50%", "80%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="flex-1 bg-secondary/70 rounded-t-md"></motion.div>
             <motion.div animate={{ height: ["50%", "100%", "50%"] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }} className="flex-1 bg-primary rounded-t-md shadow-[0_0_15px_var(--color-primary)]"></motion.div>
          </div>
        </motion.div>

        {/* Card 3: Top Layer (AI & Data) */}
        <motion.div
          animate={{
            z: isHovered ? 120 : 60,
            x: isHovered ? 100 : 40,
            y: isHovered ? -80 : -40,
            rotateZ: isHovered ? 8 : 15,
          }}
          transition={{ type: "spring", stiffness: 60, damping: 15 }}
          className="absolute z-20 w-48 h-48 lg:w-56 lg:h-56 glass-panel bg-white/40 backdrop-blur-xl rounded-2xl border border-white/50 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 flex flex-col items-center justify-center gap-4"
          style={{ transformStyle: "preserve-3d" }}
        >
          {/* AI Node Graphic */}
          <div className="relative w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center">
            <motion.div 
              animate={{ rotate: 360 }} 
              transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              className="absolute inset-[-4px] rounded-full border-4 border-transparent border-t-primary"
            ></motion.div>
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm">
               <div className="w-4 h-4 bg-primary rounded-full animate-pulse shadow-[0_0_15px_var(--color-primary)]"></div>
            </div>
          </div>
          <div className="text-center">
            <div className="h-2.5 w-20 bg-primary/70 rounded-full mx-auto mb-2"></div>
            <div className="h-1.5 w-12 bg-secondary/40 rounded-full mx-auto"></div>
          </div>
        </motion.div>

      </motion.div>
    </div>
  );
}
