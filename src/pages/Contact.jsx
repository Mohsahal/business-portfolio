import React from "react";
import SEO from "../components/seo/SEO";
import ContactForm from "../components/contact/ContactForm";

export default function Contact() {
  return (
    <main className="flex-grow w-full max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop py-section-padding pt-32 md:pt-[160px] pb-section-gap">
      <SEO 
        title="Contact Us - Infob" 
        description="Ready to build something real? Get in touch with INFOB to discuss your next digital project." 
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-gutter items-start">
        {/* Left Side: Header & Contact Info */}
        <div className="lg:col-span-5 flex flex-col justify-start">
          <div className="mb-12">
            <h1 className="font-h1-mobile md:font-h1 text-4xl sm:text-5xl md:text-6xl lg:text-[72px] leading-tight text-primary font-bold tracking-tight mb-8">
              Let's build<br className="hidden md:block" />
              <span className="md:hidden"> </span>something useful.
            </h1>
            <p className="font-body-lg text-body-lg text-secondary max-w-md leading-relaxed">
              We build high-performance software for ambitious teams. Reach out to discuss how Infob can help automate and grow your operations.
            </p>
          </div>

          <div className="space-y-6 border-t border-outline-variant pt-8 mt-auto lg:mb-0 mb-12">
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
                  Email Us
                </div>
                <div className="font-subheading text-lg font-medium text-primary">
                  hello@infob.in
                </div>
              </div>
            </a>

            {/* WhatsApp Channel */}
            <a
              href="https://wa.me/917306093151"
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
                  WhatsApp
                </div>
                <div className="font-subheading text-lg font-medium text-primary">
                  Start a conversation
                </div>
              </div>
            </a>
          </div>

          <div className="mt-8 p-6 rounded-DEFAULT bg-surface-bright border border-outline-variant/30 text-sm text-secondary hidden lg:block">
            <div className="font-semibold text-primary mb-1">Confidentiality Assured</div>
            <p>We are happy to sign standard Non-Disclosure Agreements (NDAs) prior to scoping technical IP or architectural specs.</p>
          </div>
        </div>

        {/* Right Side: Form & Map */}
        <div className="lg:col-span-7">
          <ContactForm />
          
          {/* Map (Moved under form) */}
          <div className="mt-12 rounded-none overflow-hidden border border-outline-variant/40 relative hidden lg:flex flex-col bg-white">
            <div className="p-6 z-10 relative">
              <div className="flex items-start gap-4">
                <span className="material-symbols-outlined text-outline">location_on</span>
                <div>
                  <div className="font-label-caps text-[11px] text-outline mb-1 uppercase tracking-wider">Studio location</div>
                  <div className="font-body-md text-sm font-medium text-primary">Bangalore, Karnataka, India</div>
                </div>
              </div>
            </div>
            <div className="h-[250px] w-full relative pointer-events-none overflow-hidden">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.886539092!2d77.4908535!3d12.95395998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                className="absolute w-full h-[400px] -top-[75px] left-0"
                style={{ border: 0, filter: 'grayscale(1) contrast(1.1) opacity(0.7)' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Studio Location Bangalore"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
