"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function GlassCard({
  children,
  className = "",
  hover = true,
  delay = 0,
}: GlassCardProps) {
  return (
    <motion.div
      className={`glass rounded-2xl p-6 ${className}`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={
        hover
          ? {
              y: -8,
              borderColor: "rgba(124, 58, 237, 0.4)",
              boxShadow: "0 20px 60px rgba(124, 58, 237, 0.15)",
              transition: { duration: 0.3 },
            }
          : undefined
      }
    >
      {children}
    </motion.div>
  );
}
