"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import {
  HiLightningBolt,
  HiCube,
  HiClock,
  HiUsers,
  HiShieldCheck,
  HiTrendingUp,
} from "react-icons/hi";
import { ReactNode } from "react";

interface FeatureProps {
  icon: ReactNode;
  title: string;
  description: string;
  step: number;
  delay: number;
}

function Feature({ icon, title, description, step, delay }: FeatureProps) {
  return (
    <motion.div
      className="relative flex gap-6 group"
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      {/* Step number & icon */}
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300 border border-primary/10 group-hover:border-primary/30">
          <div className="text-primary text-xl">{icon}</div>
        </div>
        {step < 6 && (
          <div className="w-px h-full bg-gradient-to-b from-primary/20 to-transparent mt-3" />
        )}
      </div>

      {/* Content */}
      <div className="pb-10">
        <div className="flex items-center gap-3 mb-2">
          <span className="text-xs font-bold text-primary/60 uppercase tracking-widest">
            Step {String(step).padStart(2, "0")}
          </span>
        </div>
        <h3 className="text-lg font-bold font-[var(--font-outfit)] text-white mb-2">
          {title}
        </h3>
        <p className="text-muted text-sm leading-relaxed max-w-md">
          {description}
        </p>
      </div>
    </motion.div>
  );
}

const features = [
  {
    icon: <HiCube />,
    title: "Scalable Architecture",
    description:
      "Every solution we build is designed to scale from hundreds to millions of users, with cloud-native infrastructure and microservices architecture.",
  },
  {
    icon: <HiLightningBolt />,
    title: "Modern Tech Stack",
    description:
      "We use cutting-edge technologies like React, Next.js, Node.js, Python, and cloud platforms to deliver future-proof solutions.",
  },
  {
    icon: <HiClock />,
    title: "Fast Delivery",
    description:
      "Agile methodology with 2-week sprint cycles ensures rapid development without compromising quality. MVP in as little as 6 weeks.",
  },
  {
    icon: <HiUsers />,
    title: "Client-Focused Approach",
    description:
      "We treat every project as a partnership. Transparent communication, regular updates, and dedicated project managers keep you in control.",
  },
  {
    icon: <HiShieldCheck />,
    title: "Security First",
    description:
      "Enterprise-grade security with SOC 2 compliance, encrypted data handling, and regular security audits built into every project.",
  },
  {
    icon: <HiTrendingUp />,
    title: "Ongoing Support",
    description:
      "Our relationship doesn't end at launch. We provide continuous optimization, monitoring, and feature development to keep you ahead.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/3 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-primary" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Why Choose Us"
          subtitle="Our Strengths"
        />

        <div className="grid lg:grid-cols-2 gap-x-16 gap-y-0">
          <div>
            {features.slice(0, 3).map((feature, i) => (
              <Feature key={feature.title} {...feature} step={i + 1} delay={i * 0.1} />
            ))}
          </div>
          <div>
            {features.slice(3).map((feature, i) => (
              <Feature key={feature.title} {...feature} step={i + 4} delay={(i + 3) * 0.1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
