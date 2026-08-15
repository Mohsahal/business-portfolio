import React from "react";
import { Link } from "react-router-dom";
import ProjectBento from "../components/work/ProjectBento";

export default function Work() {
  return (
    <main className="flex-grow max-w-container-max mx-auto w-full px-margin-mobile md:px-margin-desktop py-section-gap pt-32">
      {/* Hero Header */}
      <header className="mb-section-gap max-w-4xl pt-8 md:pt-16">
        <h1 className="font-hero-mobile text-hero-mobile md:font-h1 md:text-6xl lg:text-[80px] text-primary mb-6 font-bold tracking-tight">
          Selected work
        </h1>
        <p className="font-subheading text-subheading text-secondary">
          Real products. Real systems. Real impact.
        </p>
      </header>

      {/* Project Grid - Asymmetrical Layout */}
      <ProjectBento />

      {/* Call to Action Section */}
      <section className="px-6 py-16 md:p-20 border-t border-outline-variant/30 flex flex-col items-center text-center">
        <h2 className="font-h2 text-3xl md:text-5xl text-primary font-bold mb-6 tracking-tight">
          Ready to build something real?
        </h2>
        <p className="font-body-lg text-body-lg text-secondary mb-10 max-w-2xl">
          We partner with ambitious organizations to design and engineer systems that matter.
        </p>
        <Link
          to="/contact"
          className="magnetic-button bg-primary text-on-primary px-8 py-4 rounded-DEFAULT font-body-lg text-body-lg hover:bg-surface-tint transition-colors"
        >
          Start a Conversation
        </Link>
      </section>
    </main>
  );
}
