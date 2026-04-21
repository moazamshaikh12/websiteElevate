"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiArrowRight,
} from "react-icons/hi";
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    // Simulate send
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setIsSent(false), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] bg-primary" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-secondary" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Let's Build Something Great"
          subtitle="Get In Touch"
        />

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Contact info */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <h3 className="text-xl font-bold font-[var(--font-outfit)] text-white mb-3">
                Ready to start your project?
              </h3>
              <p className="text-muted leading-relaxed">
                Whether you have a detailed spec or just a rough idea, we&apos;d love to hear from
                you. Let&apos;s discuss how we can bring your vision to life.
              </p>
            </div>

            {/* Info items */}
            <div className="space-y-4">
              {[
                { icon: HiMail, text: "hello@elevatesoftworks.com", href: "mailto:hello@elevatesoftworks.com" },
                { icon: HiPhone, text: "+1 (234) 567-890", href: "tel:+1234567890" },
                { icon: HiLocationMarker, text: "San Francisco, CA", href: "#" },
              ].map((item) => (
                <a
                  key={item.text}
                  href={item.href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl glass flex items-center justify-center group-hover:border-primary/40 transition-all duration-300">
                    <item.icon className="text-primary text-lg" />
                  </div>
                  <span className="text-muted group-hover:text-white transition-colors duration-300">
                    {item.text}
                  </span>
                </a>
              ))}
            </div>

            {/* Social */}
            <div>
              <p className="text-sm text-muted mb-3">Follow us</p>
              <div className="flex gap-3">
                {[
                  { icon: FaTwitter, label: "Twitter" },
                  { icon: FaLinkedinIn, label: "LinkedIn" },
                  { icon: FaGithub, label: "GitHub" },
                  { icon: FaInstagram, label: "Instagram" },
                ].map((social) => (
                  <motion.a
                    key={social.label}
                    href="#"
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
          </motion.div>

          {/* Form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-white mb-2">
                    Your Name
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-white mb-2">
                    Your Email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-white mb-2">
                  Your Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder:text-muted/50 focus:outline-none focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <motion.button
                type="submit"
                disabled={isSending}
                className="w-full py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl btn-glow btn-ripple flex items-center justify-center gap-2 disabled:opacity-60 disabled:cursor-not-allowed"
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                {isSending ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : isSent ? (
                  <>
                    ✓ Message Sent!
                  </>
                ) : (
                  <>
                    Send Message
                    <HiArrowRight />
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
