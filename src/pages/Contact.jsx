import React from "react";
import SEO from "../components/seo/SEO";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding pt-32 md:pt-40 pb-section-gap">
      <SEO 
        title="Contact Us" 
        description="Ready to build something real? Get in touch with INFOB to discuss your next digital project." 
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">
        {/* Left Side: Header & Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="mb-12">
            <h1 className="font-hero-mobile text-5xl md:font-h1 md:text-6xl lg:text-7xl text-primary font-bold tracking-tight mb-8">
              Have an idea?<br className="hidden sm:inline" /> Let's build it.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-md leading-relaxed">
              We build high-performance software and AI systems for ambitious teams. Reach out to discuss how INFOB can engineer and accelerate your digital operations.
            </p>
          </div>

          <div className="space-y-6 border-t border-outline-variant pt-8">
            {/* Email Channel */}
            <a
              href="mailto:hello@infob.in"
              className="flex items-center group p-4 -mx-4 rounded-DEFAULT hover:bg-surface-bright transition-colors"
            >
              <div className="w-12 h-12 bg-surface-container-low rounded-DEFAULT flex items-center justify-center mr-4 group-hover:bg-primary transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors">
                  mail
                </span>
              </div>
              <div>
                <div className="font-label-caps text-xs text-outline mb-1 uppercase tracking-wider">
                  Direct Inquiries
                </div>
                <div className="font-subheading text-lg font-medium text-primary">
                  hello@infob.in
                </div>
              </div>
            </a>

            {/* WhatsApp Channel */}
            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noreferrer"
              className="flex items-center group p-4 -mx-4 rounded-DEFAULT hover:bg-surface-bright transition-colors"
            >
              <div className="w-12 h-12 bg-surface-container-low rounded-DEFAULT flex items-center justify-center mr-4 group-hover:bg-[#25D366] transition-colors duration-300">
                <span className="material-symbols-outlined text-primary group-hover:text-on-primary transition-colors">
                  chat
                </span>
              </div>
              <div>
                <div className="font-label-caps text-xs text-outline mb-1 uppercase tracking-wider">
                  WhatsApp Messaging
                </div>
                <div className="font-subheading text-lg font-medium text-primary">
                  Start an instant chat →
                </div>
              </div>
            </a>
          </div>

          <div className="mt-12 p-6 rounded-DEFAULT bg-surface-bright border border-outline-variant/30 text-sm text-secondary">
            <div className="font-semibold text-primary mb-1">Confidentiality Assured</div>
            <p>We are happy to sign standard Non-Disclosure Agreements (NDAs) prior to scoping technical IP or architectural specs.</p>
          </div>
        </div>

        {/* Right Side: Form (Bento/Card Style) */}
        <div className="lg:col-span-7">
          <ContactForm />
        </div>
      </div>
    </main>
  );
}
