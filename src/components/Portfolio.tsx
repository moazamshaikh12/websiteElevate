"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";

const projects = [
  {
    title: "CloudSync Pro",
    description:
      "Enterprise cloud storage platform with real-time sync, team collaboration, and AI-powered file organization.",
    tech: ["Next.js", "Node.js", "AWS", "PostgreSQL"],
    gradient: "from-purple-600 via-blue-500 to-cyan-500",
    category: "SaaS Platform",
  },
  {
    title: "FinTrack AI",
    description:
      "AI-powered financial analytics dashboard with predictive insights, automated reporting, and risk assessment.",
    tech: ["React", "Python", "TensorFlow", "FastAPI"],
    gradient: "from-emerald-500 via-teal-500 to-cyan-500",
    category: "AI Solution",
  },
  {
    title: "MediFlow",
    description:
      "Healthcare management SaaS with appointment scheduling, patient records, and telemedicine integration.",
    tech: ["Next.js", "Express", "MongoDB", "WebRTC"],
    gradient: "from-pink-500 via-rose-500 to-orange-500",
    category: "Healthcare",
  },
  {
    title: "LogiChain",
    description:
      "Supply chain automation platform with real-time tracking, inventory management, and predictive logistics.",
    tech: ["React", "Go", "Redis", "Docker"],
    gradient: "from-indigo-500 via-purple-500 to-pink-500",
    category: "Automation",
  },
  {
    title: "EduSpark",
    description:
      "E-learning platform with live classes, AI tutoring, gamified progress tracking, and certification management.",
    tech: ["Next.js", "Django", "PostgreSQL", "Socket.io"],
    gradient: "from-amber-500 via-orange-500 to-red-500",
    category: "EdTech",
  },
  {
    title: "PropVault",
    description:
      "Real estate management platform with virtual tours, smart contracts, and automated tenant communications.",
    tech: ["React", "Node.js", "Solidity", "Three.js"],
    gradient: "from-cyan-500 via-blue-500 to-indigo-500",
    category: "PropTech",
  },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full opacity-10 blur-[120px] bg-secondary" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Our Recent Work"
          subtitle="Portfolio"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              className="group relative glass rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Project Image Placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`}
                />
                {/* Abstract shape */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 border-2 border-white/20 rounded-2xl"
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  />
                  <motion.div
                    className="absolute w-14 h-14 border-2 border-white/10 rounded-full"
                    animate={{ rotate: -360 }}
                    transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                  />
                </div>
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-black/40 backdrop-blur-md text-white rounded-full border border-white/10">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-lg font-bold font-[var(--font-outfit)] text-white mb-2 group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {project.description}
                </p>
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 text-xs font-medium bg-white/5 text-muted rounded-md border border-white/5"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover border */}
              <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-primary/30 transition-all duration-500 pointer-events-none" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
