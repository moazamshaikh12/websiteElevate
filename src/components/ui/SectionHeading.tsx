"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  light?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = true,
  light = false,
}: SectionHeadingProps) {
  return (
    <motion.div
      className={`mb-16 ${centered ? "text-center" : ""}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      {subtitle && (
        <motion.span
          className="inline-block text-sm font-semibold tracking-wider uppercase text-primary mb-3"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {subtitle}
        </motion.span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold font-[var(--font-outfit)] leading-tight ${
          light ? "text-white" : "gradient-text"
        }`}
      >
        {title}
      </h2>
      <motion.div
        className={`mt-4 h-1 w-20 bg-gradient-to-r from-primary to-secondary rounded-full ${
          centered ? "mx-auto" : ""
        }`}
        initial={{ width: 0 }}
        whileInView={{ width: 80 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
      />
    </motion.div>
  );
}
