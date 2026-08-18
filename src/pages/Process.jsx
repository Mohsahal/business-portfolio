
import { Link } from "react-router-dom";
import SEO from "../components/seo/SEO";
import ProcessTimeline from "../components/services/ProcessTimeline";
import CorePrinciples from "../components/services/CorePrinciples";


export default function Process() {
  return (
    <main className="pt-19.5 pb-section-gap">
      <SEO 
        title="Our Process" 
        description="From idea to impact. Learn about our proven engineering methodology and how we deliver digital excellence." 
      />
      
      {/* Two-Column Premium Process Hero Section */}
      <section className="relative pt-24 lg:pt-28 pb-16 lg:pb-32 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto overflow-hidden">
        
        {/* Left Side: Image */}
        <div className="relative h-[400px] lg:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border border-outline-variant">
          <div className="absolute inset-0 bg-primary/5 mix-blend-multiply z-10 transition-colors duration-500 hover:bg-transparent"></div>
          <img 
            src="/images/about-office.jpg" 
            alt="Engineering Process" 
            className="w-full h-full object-cover grayscale-[50%] hover:grayscale-0 transition-all duration-700"
          />
          {/* Decorative Corner Accents */}
          <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-white/60 m-6 lg:m-8 z-20"></div>
          <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-white/60 m-6 lg:m-8 z-20"></div>
        </div>

        {/* Right Side: Text Content */}
        <div className="w-full flex flex-col items-start text-left z-10">
          <div className="inline-flex items-center gap-4 px-5 py-2 border border-outline-variant bg-surface-bright rounded-full mb-8 lg:mb-10 shadow-sm backdrop-blur-md">
             <span className="relative flex h-2 w-2">
               <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-40"></span>
               <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
             </span>
             <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-primary font-bold">
               Our Methodology
             </span>
          </div>
          
          <h1 className="font-h1 text-5xl sm:text-6xl md:text-6xl lg:text-[72px] leading-[1.05] text-primary font-bold tracking-tighter mb-6 lg:mb-8">
            The engineering <br className="hidden md:block" />
            <span className="font-light italic text-outline/60 tracking-tight xl:whitespace-nowrap">behind excellence.</span>
          </h1>
          
          <p className="font-body-lg text-lg lg:text-xl text-secondary leading-relaxed font-light max-w-lg">
            We combine rigorous software engineering principles with agile execution to deliver scalable systems that move ambitious businesses forward.
          </p>

          <div className="mt-10 lg:mt-12 flex items-center gap-6 pt-6 lg:pt-8 border-t border-outline-variant w-full max-w-sm">
             <div className="flex -space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-background bg-surface-variant flex items-center justify-center font-mono text-[10px] lg:text-xs font-bold text-primary">01</div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-background bg-surface-variant flex items-center justify-center font-mono text-[10px] lg:text-xs font-bold text-primary">02</div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-full border-2 border-background bg-surface-variant flex items-center justify-center font-mono text-[10px] lg:text-xs font-bold text-primary">03</div>
             </div>
             <p className="font-mono text-[10px] uppercase tracking-widest text-secondary font-bold">
               Iterative <br/> Engineering
             </p>
          </div>
        </div>
      </section>

      {/* Core Principles (New Content) */}
      <CorePrinciples />

      {/* Reusing the Timeline Component */}
      {/* ProcessTimeline has its own top border and padding, which separates it nicely from the hero */}
      <ProcessTimeline />
      
      {/* Bottom CTA */}
      <section className="px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto mt-24 mb-16">
        <div className="border-t border-outline-variant pt-24 pb-12 flex flex-col items-center text-center">
          
          <div className="inline-flex items-center gap-3 px-5 py-2 border border-outline-variant bg-surface-container-lowest rounded-full mb-10 shadow-sm">
             <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
             <span className="font-mono text-[10px] md:text-xs uppercase tracking-[0.2em] text-secondary font-semibold">
               Next Steps
             </span>
          </div>

          <h2 className="font-h1 text-4xl sm:text-5xl md:text-7xl lg:text-[80px] leading-[1.05] text-primary font-bold tracking-tighter mb-8 max-w-4xl">
            Ready to build <br className="hidden md:block"/>
            <span className="text-outline/40 italic font-light">something exceptional?</span>
          </h2>
          
          <p className="font-body-lg text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 font-light">
            Let's discuss how our rigorous engineering process can accelerate your digital transformation.
          </p>
          
          <Link
            to="/contact"
            className="magnetic-button inline-flex items-center justify-center px-12 py-6 bg-primary text-on-primary font-mono text-xs uppercase tracking-[0.2em] font-bold hover:bg-black transition-colors duration-300"
          >
            Start Your Project
          </Link>
        </div>
      </section>
    </main>
  );
}
