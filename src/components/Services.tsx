"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import {
  HiCode,
  HiCloud,
  HiCog,
  HiChip,
} from "react-icons/hi";
import { ReactNode } from "react";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  features: string[];
  gradient: string;
  delay: number;
}

function ServiceCard({ icon, title, description, features, gradient, delay }: ServiceCardProps) {
  return (
    <motion.div
      className="group relative glass rounded-2xl p-8 overflow-hidden cursor-pointer"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{
        y: -12,
        transition: { duration: 0.3 },
      }}
    >
      {/* Glow effect on hover */}
      <div
        className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${gradient}`}
        style={{ filter: "blur(80px)" }}
      />

      {/* Border glow */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 border border-primary/30" />

      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary/20 to-secondary/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
          whileHover={{ rotate: [0, -10, 10, 0] }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-primary text-3xl group-hover:text-primary-light transition-colors duration-300">
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <h3 className="text-xl font-bold font-[var(--font-outfit)] text-white mb-3 group-hover:gradient-text transition-all duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-muted text-sm leading-relaxed mb-5">{description}</p>

        {/* Features */}
        <ul className="space-y-2">
          {features.map((feature) => (
            <li key={feature} className="flex items-center gap-2 text-sm text-muted/80">
              <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
              {feature}
            </li>
          ))}
        </ul>

        {/* Arrow */}
        <div className="mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
          Learn More
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

const services = [
  {
    icon: <HiCode />,
    title: "Web Application Development",
    description:
      "Custom web applications built with modern frameworks, optimized for performance, scalability, and exceptional user experience.",
    features: ["React & Next.js", "Full-Stack Solutions", "Progressive Web Apps", "API Development"],
    gradient: "bg-purple-500/10",
  },
  {
    icon: <HiCloud />,
    title: "SaaS Application Development",
    description:
      "End-to-end SaaS platforms with subscription management, multi-tenancy, analytics dashboards, and seamless integrations.",
    features: ["Multi-Tenant Architecture", "Payment Integration", "Analytics Dashboard", "Auto Scaling"],
    gradient: "bg-cyan-500/10",
  },
  {
    icon: <HiCog />,
    title: "Business Automation Solutions",
    description:
      "Streamline operations with custom automation workflows, CRM systems, ERP solutions, and intelligent process optimization.",
    features: ["Workflow Automation", "Custom CRM/ERP", "Data Pipeline", "Process Optimization"],
    gradient: "bg-pink-500/10",
  },
  {
    icon: <HiChip />,
    title: "AI-Powered Solutions",
    description:
      "Leverage artificial intelligence and machine learning to unlock insights, automate decisions, and build intelligent products.",
    features: ["Machine Learning Models", "Natural Language Processing", "Computer Vision", "Predictive Analytics"],
    gradient: "bg-emerald-500/10",
  },
];

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 grid-pattern opacity-30" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] bg-primary" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="What We Build"
          subtitle="Our Services"
        />

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} {...service} delay={i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
}
