import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { navLinks } from "../../data/navigation";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="fixed top-4 md:top-6 left-0 right-0 z-50 flex justify-center px-4 md:px-8 pointer-events-none">
      <div className={`pointer-events-auto w-full max-w-5xl flex justify-between items-center h-16 md:h-[72px] px-6 md:px-8 rounded-full border transition-all duration-500 ${
        isScrolled 
          ? "bg-white/80 backdrop-blur-2xl border-outline-variant/30 shadow-[0_8px_30px_rgba(0,0,0,0.08)]" 
          : "bg-white/40 backdrop-blur-lg border-white/50 shadow-sm"
      }`}>
        {/* Brand Logo */}
        <Link 
          to="/" 
          className="font-h1 text-xl md:text-2xl font-extrabold tracking-tighter text-primary hover:opacity-70 transition-opacity"
        >
          INFOB.
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex space-x-1 items-center font-body-md">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path || 
              (link.path !== "/" && location.pathname.startsWith(link.path));
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`transition-all duration-300 px-5 py-2 rounded-full text-sm font-medium tracking-wide ${
                  isActive
                    ? "text-primary bg-white shadow-sm border border-outline-variant/20"
                    : "text-secondary hover:text-primary hover:bg-white/50"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <Link
            to="/contact"
            className="magnetic-button inline-flex items-center justify-center bg-primary text-on-primary px-7 py-2.5 rounded-full font-label-caps text-xs tracking-[0.1em] shadow-lg shadow-primary/10 hover:shadow-primary/20 transition-all duration-300"
          >
            LET'S TALK
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-primary p-2 focus:outline-none bg-white/50 rounded-full border border-outline-variant/20"
          aria-label="Toggle navigation menu"
        >
          <span className="material-symbols-outlined text-2xl mt-1">
            {mobileMenuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-4 right-4 pointer-events-auto bg-white/95 backdrop-blur-3xl border border-outline-variant/30 p-6 rounded-3xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path || 
                (link.path !== "/" && location.pathname.startsWith(link.path));
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-lg py-3 px-4 rounded-2xl transition-colors ${
                    isActive ? "font-bold text-primary bg-surface-container-low" : "text-secondary font-medium hover:text-primary hover:bg-surface-bright"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
            <div className="pt-6 mt-4 border-t border-outline-variant/30">
              <Link
                to="/contact"
                className="w-full text-center inline-flex items-center justify-center bg-primary text-on-primary px-6 py-4 rounded-full font-label-caps text-xs tracking-[0.1em] shadow-lg shadow-primary/20"
              >
                START A CONVERSATION
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
