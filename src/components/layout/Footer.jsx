import React from "react";
import { Link } from "react-router-dom";
import { footerLinks } from "../../data/navigation";

export default function Footer() {
  return (
    <footer className="bg-primary text-on-primary w-full py-section-gap">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Brand Column */}
        <div className="md:col-span-4 mb-12 md:mb-0 flex flex-col justify-between">
          <div>
            <Link to="/" className="font-h1-mobile text-h1-mobile font-bold text-on-primary mb-6 inline-block tracking-tighter">
              INFOB
            </Link>
            <p className="font-body-md text-body-md text-secondary-fixed-dim max-w-xs mb-8">
              Software, AI and digital solutions designed to turn ambitious ideas into powerful products.
            </p>
          </div>
          <p className="font-body-md text-body-md text-secondary-fixed-dim">
            © {new Date().getFullYear()} INFOB Digital Solutions. All rights reserved.
          </p>
        </div>

        {/* Links Grid */}
        <div className="md:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8">
          {/* Navigation */}
          <div className="flex flex-col space-y-4 font-body-md text-body-md">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-2 uppercase tracking-wider">Navigation</span>
            {footerLinks.navigation.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Company */}
          <div className="flex flex-col space-y-4 font-body-md text-body-md">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-2 uppercase tracking-wider">Company</span>
            {footerLinks.company.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Connect / Contact */}
          <div className="flex flex-col space-y-4 font-body-md text-body-md">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-2 uppercase tracking-wider">Direct</span>
            <Link
              to="/contact"
              className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1"
            >
              Contact Us
            </Link>
            <a
              href="mailto:hello@infob.in"
              className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 text-sm break-all"
            >
              hello@infob.in
            </a>
          </div>

          {/* Social */}
          <div className="flex flex-col space-y-4 font-body-md text-body-md">
            <span className="font-label-caps text-label-caps text-secondary-fixed-dim mb-2 uppercase tracking-wider">Social</span>
            {footerLinks.social.map((item) => (
              <a
                key={item.name}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="text-secondary-fixed-dim hover:text-on-primary transition-all duration-300 hover:translate-x-1 inline-flex items-center gap-1"
              >
                {item.name}
                <span className="material-symbols-outlined text-xs">north_east</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
