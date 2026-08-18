import React from "react";
import SEO from "../components/seo/SEO";
import HeroSection from "../components/home/HeroSection";
import ServicesTeaser from "../components/home/ServicesTeaser";
import FeaturedWork from "../components/home/FeaturedWork";
import WhyInfob from "../components/home/WhyInfob";

export default function Home() {
  return (
    <main className="flex-grow">
      <SEO 
        title="INFOB - Digital Solutions" 
        description="Software, AI and digital solutions designed to turn ambitious ideas into powerful products. We build digital experiences that move businesses forward." 
      />
      <HeroSection />
      <ServicesTeaser />
      <FeaturedWork />
      <WhyInfob />
    </main>
  );
}
