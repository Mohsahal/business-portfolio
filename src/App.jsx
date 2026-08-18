import React from "react";
import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import ScrollToTop from "./components/layout/ScrollToTop";
import PageTransition from "./components/layout/PageTransition";
import WhatsAppFloat from "./components/ui/WhatsAppFloat";

import Home from "./pages/Home";
import Services from "./pages/Services";
import ServiceDetail from "./pages/ServiceDetail";
import Work from "./pages/Work";
import CaseStudy from "./pages/CaseStudy";
import About from "./pages/About";
import Process from "./pages/Process";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

export default function App() {
  const location = useLocation();

  return (
    <HelmetProvider>
      <div className="min-h-screen flex flex-col bg-background text-on-background selection:bg-primary selection:text-on-primary overflow-x-hidden w-full relative">
        <ScrollToTop />
        <Navbar />
        <WhatsAppFloat />
        
        <div className="flex-grow">
          <AnimatePresence mode="wait">
            <Routes location={location} key={location.pathname}>
              {/* Main Routes */}
              <Route path="/" element={<PageTransition><Home /></PageTransition>} />
              <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
              <Route path="/services/:serviceId" element={<PageTransition><ServiceDetail /></PageTransition>} />
              <Route path="/work" element={<PageTransition><Work /></PageTransition>} />
              <Route path="/work/:projectId" element={<PageTransition><CaseStudy /></PageTransition>} />
              <Route path="/about" element={<PageTransition><About /></PageTransition>} />
              <Route path="/process" element={<PageTransition><Process /></PageTransition>} />
              <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
              
              {/* Fallback */}
              <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
            </Routes>
          </AnimatePresence>
        </div>

        <Footer />
      </div>
    </HelmetProvider>
  );
}
