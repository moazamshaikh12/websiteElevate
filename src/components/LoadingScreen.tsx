"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#030014]"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          {/* Background glow */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div
              className="absolute top-1/2 left-1/2 w-[500px] h-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, rgba(124,58,237,0.15) 0%, transparent 70%)",
              }}
              animate={{ scale: [1, 1.3, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>

          {/* Logo */}
          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              className="relative"
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 relative">
                <motion.div
                  className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary to-secondary"
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                  style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}
                />
                <div className="absolute inset-[3px] rounded-xl bg-[#030014] flex items-center justify-center" style={{ borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%" }}>
                  <span className="text-2xl md:text-3xl font-bold gradient-text font-[var(--font-outfit)]">
                    E
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col items-center gap-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <h1 className="text-xl md:text-2xl font-bold font-[var(--font-outfit)] gradient-text">
                Elevate Softworks
              </h1>
              {/* Loading bar */}
              <div className="w-48 h-[2px] bg-white/10 rounded-full overflow-hidden mt-3">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary via-secondary to-primary rounded-full"
                  initial={{ width: "0%" }}
                  animate={{ width: "100%" }}
                  transition={{ duration: 1.8, delay: 0.3, ease: "easeInOut" }}
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
