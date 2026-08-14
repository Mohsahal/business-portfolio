import React from "react";
import HeroSection from "../components/home/HeroSection";
import ServicesTeaser from "../components/home/ServicesTeaser";
import FeaturedWork from "../components/home/FeaturedWork";
import WhyInfob from "../components/home/WhyInfob";

export default function Home() {
  return (
    <main className="pt-6 md:pt-6">
      <HeroSection />
      <ServicesTeaser />
      <FeaturedWork />
      <WhyInfob />
    </main>
  );
}
