"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import AnimatedCounter from "./ui/AnimatedCounter";
import { HiLightningBolt, HiEye } from "react-icons/hi";

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* Background decor */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-primary" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full opacity-10 blur-[80px] bg-secondary" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading title="Who We Are" subtitle="About Us" />

        {/* Intro */}
        <motion.div
          className="max-w-3xl mx-auto text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-lg text-muted leading-relaxed">
            At <strong className="text-white">Elevate Softworks</strong>, we&apos;re a team of
            passionate developers, designers, and strategists dedicated to transforming ambitious
            ideas into powerful digital products. With over five years of experience, we&apos;ve
            delivered 150+ projects that drive measurable results for startups and enterprises
            alike.
          </p>
        </motion.div>

        {/* Mission & Vision Cards */}
        <div className="grid md:grid-cols-2 gap-6 mb-20">
          <motion.div
            className="glass rounded-2xl p-8 relative overflow-hidden group"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ borderColor: "rgba(124, 58, 237, 0.4)" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-primary/5 blur-[40px] group-hover:bg-primary/15 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center mb-5">
                <HiLightningBolt className="text-primary text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-[var(--font-outfit)] text-white mb-3">
                Our Mission
              </h3>
              <p className="text-muted leading-relaxed">
                To empower businesses with cutting-edge technology solutions that simplify
                complexity, accelerate growth, and create lasting digital impact. We believe in
                building software that&apos;s not just functional, but transformative.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-8 relative overflow-hidden group"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            whileHover={{ borderColor: "rgba(6, 182, 212, 0.4)" }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 rounded-full bg-secondary/5 blur-[40px] group-hover:bg-secondary/15 transition-all duration-500" />
            <div className="relative z-10">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-secondary/20 to-accent/20 flex items-center justify-center mb-5">
                <HiEye className="text-secondary text-2xl" />
              </div>
              <h3 className="text-xl font-bold font-[var(--font-outfit)] text-white mb-3">
                Our Vision
              </h3>
              <p className="text-muted leading-relaxed">
                To be the go-to software partner for innovation-driven companies worldwide.
                We envision a future where every business — from startup to enterprise — has
                access to world-class digital solutions that propel them forward.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Counter Row */}
        <motion.div
          className="glass rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter end={150} suffix="+" label="Projects Completed" />
            <AnimatedCounter end={80} suffix="+" label="Happy Clients" />
            <AnimatedCounter end={5} suffix="+" label="Years Experience" />
            <AnimatedCounter end={30} suffix="+" label="Team Members" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
