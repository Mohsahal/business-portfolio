import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function Button({
  children,
  to,
  href,
  variant = "primary", // "primary" | "secondary" | "outline"
  className = "",
  onClick,
  type = "button",
  arrow = false,
  ...props
}) {
  const ref = useRef(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 400, damping: 25, mass: 0.5 };
  const mouseXSpring = useSpring(x, springConfig);
  const mouseYSpring = useSpring(y, springConfig);

  const handleMouseMove = (e) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const center = { x: left + width / 2, y: top + height / 2 };
    
    // Magnetic pull distance
    const pullX = (e.clientX - center.x) * 0.3; // 30% pull
    const pullY = (e.clientY - center.y) * 0.3;
    
    x.set(pullX);
    y.set(pullY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const baseStyles = "inline-flex items-center justify-center font-body-md text-body-md rounded-DEFAULT transition-colors duration-300 text-center";
  
  const variants = {
    primary: "bg-primary text-on-primary px-8 py-4 hover:bg-surface-tint",
    secondary: "bg-surface-bright text-primary border border-outline-variant px-8 py-4 hover:bg-surface-container-low",
    outline: "border border-outline text-primary px-8 py-4 hover:bg-surface-container-low"
  };

  const content = (
    <>
      <span>{children}</span>
      {arrow && (
        <span className="material-symbols-outlined ml-2 text-[18px] transition-transform duration-300 group-hover:translate-x-1">
          arrow_forward
        </span>
      )}
    </>
  );

  const combinedClasses = `${baseStyles} ${variants[variant] || variants.primary} ${className}`;
  const wrapperClass = className.includes("w-full") ? "w-full block" : "inline-block";

  let Element;
  if (to) {
    Element = <Link to={to} className={combinedClasses} {...props}>{content}</Link>;
  } else if (href) {
    Element = <a href={href} className={combinedClasses} {...props}>{content}</a>;
  } else {
    Element = <button type={type} onClick={onClick} className={combinedClasses} {...props}>{content}</button>;
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: mouseXSpring, y: mouseYSpring }}
      className={wrapperClass}
      whileTap={{ scale: 0.95 }}
    >
      {Element}
    </motion.div>
  );
}
