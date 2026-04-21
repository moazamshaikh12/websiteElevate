"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import ParticleBackground from "./ui/ParticleBackground";
import { HiArrowRight, HiChevronDown } from "react-icons/hi";

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const bgX = useTransform(mouseX, [0, 1], [-15, 15]);
  const bgY = useTransform(mouseY, [0, 1], [-15, 15]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX / window.innerWidth);
      mouseY.set(e.clientY / window.innerHeight);
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Particle Background */}
      <ParticleBackground />

      {/* Gradient orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full opacity-20 blur-[120px]"
        style={{
          background: "radial-gradient(circle, #7c3aed 0%, transparent 70%)",
          x: bgX,
          y: bgY,
        }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[100px]"
        style={{
          background: "radial-gradient(circle, #06b6d4 0%, transparent 70%)",
          x: useTransform(mouseX, [0, 1], [15, -15]),
          y: useTransform(mouseY, [0, 1], [15, -15]),
        }}
      />
      <motion.div
        className="absolute top-1/2 left-1/2 w-[400px] h-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-10 blur-[80px]"
        style={{
          background: "radial-gradient(circle, #f472b6 0%, transparent 70%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold font-[var(--font-outfit)] leading-[1.1] mb-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <span className="text-white">Elevating Ideas into</span>
          <br />
          <span className="gradient-text">Scalable Digital Solutions</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-lg md:text-xl text-muted max-w-2xl mx-auto mb-10 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          We design, build, and scale premium software products — from SaaS
          platforms to AI-powered solutions — that drive real business growth.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, "#contact")}
            className="group px-8 py-4 bg-gradient-to-r from-primary to-secondary text-white font-semibold rounded-xl btn-glow btn-ripple flex items-center gap-2 text-base"
          >
            Get Started
            <HiArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <a
            href="#services"
            onClick={(e) => handleNavClick(e, "#services")}
            className="group px-8 py-4 glass text-white font-semibold rounded-xl hover:border-primary/40 transition-all duration-300 flex items-center gap-2 text-base"
          >
            View Services
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-8 border-t border-white/5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1 }}
        >
          {[
            { value: "150+", label: "Projects Delivered" },
            { value: "80+", label: "Happy Clients" },
            { value: "99%", label: "Client Satisfaction" },
            { value: "5+", label: "Years Experience" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 + i * 0.1 }}
            >
              <div className="text-2xl md:text-3xl font-bold gradient-text font-[var(--font-outfit)]">
                {stat.value}
              </div>
              <div className="text-xs text-muted mt-1">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        onClick={(e) => handleNavClick(e, "#about")}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted hover:text-white transition-colors"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span className="text-xs">Scroll Down</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <HiChevronDown size={20} />
        </motion.div>
      </motion.a>
    </section>
  );
}
