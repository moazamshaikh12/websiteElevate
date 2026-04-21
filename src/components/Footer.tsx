"use client";

import { motion } from "framer-motion";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";
import { HiMail, HiPhone, HiLocationMarker } from "react-icons/hi";

const footerLinks = {
  Company: ["About Us", "Careers", "Blog", "Press"],
  Services: ["Web Development", "SaaS Solutions", "Business Automation", "AI Solutions"],
  Resources: ["Documentation", "Case Studies", "FAQ", "Support"],
  Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
};

const socialLinks = [
  { icon: FaTwitter, href: "#", label: "Twitter" },
  { icon: FaLinkedinIn, href: "#", label: "LinkedIn" },
  { icon: FaGithub, href: "#", label: "GitHub" },
  { icon: FaInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5">
      {/* Gradient line at top */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        {/* Main footer content */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="relative w-10 h-10">
                <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-primary to-secondary" />
                <div className="absolute inset-[2px] rounded-lg bg-[#030014] flex items-center justify-center">
                  <span className="text-lg font-bold gradient-text font-[var(--font-outfit)]">E</span>
                </div>
              </div>
              <span className="text-lg font-semibold font-[var(--font-outfit)] text-white">
                Elevate <span className="gradient-text">Softworks</span>
              </span>
            </div>
            <p className="text-muted text-sm leading-relaxed mb-6 max-w-xs">
              Elevating ideas into scalable digital solutions. We build premium software that drives
              growth and transforms businesses.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg glass flex items-center justify-center text-muted hover:text-white hover:border-primary/40 transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon size={16} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="text-white font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-muted text-sm hover:text-white transition-colors duration-300 hover:translate-x-1 inline-block"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact info bar */}
        <div className="border-t border-white/5 pt-8 mb-8">
          <div className="flex flex-wrap gap-6 justify-center text-sm text-muted">
            <a href="mailto:hello@elevatesoftworks.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <HiMail size={16} className="text-primary" />
              hello@elevatesoftworks.com
            </a>
            <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-white transition-colors">
              <HiPhone size={16} className="text-primary" />
              +1 (234) 567-890
            </a>
            <span className="flex items-center gap-2">
              <HiLocationMarker size={16} className="text-primary" />
              San Francisco, CA
            </span>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Elevate Softworks. All rights reserved.
          </p>
          <p className="text-muted/50 text-xs">
            Crafted with passion & precision
          </p>
        </div>
      </div>
    </footer>
  );
}
