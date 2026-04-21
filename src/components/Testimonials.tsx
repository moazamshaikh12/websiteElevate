"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { HiStar, HiChevronLeft, HiChevronRight } from "react-icons/hi";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CEO, CloudSync",
    avatar: "SC",
    text: "Elevate Softworks transformed our legacy system into a modern SaaS platform. Their technical expertise and dedication to quality exceeded all expectations. The new platform has helped us scale to 10x our previous capacity.",
    rating: 5,
    gradient: "from-purple-500 to-indigo-500",
  },
  {
    name: "Marcus Rivera",
    role: "CTO, FinTrack",
    avatar: "MR",
    text: "Working with Elevate was a game-changer. They built our AI analytics dashboard in record time, and the quality of code was impeccable. Their team feels like a true extension of ours — responsive, proactive, and brilliant.",
    rating: 5,
    gradient: "from-cyan-500 to-teal-500",
  },
  {
    name: "Aisha Patel",
    role: "Founder, MediFlow",
    avatar: "AP",
    text: "From concept to launch, Elevate Softworks delivered a healthcare platform that our users absolutely love. Their attention to UX design and HIPAA compliance showed deep industry understanding. Couldn't recommend them more.",
    rating: 5,
    gradient: "from-pink-500 to-rose-500",
  },
  {
    name: "James Okafor",
    role: "VP Engineering, LogiChain",
    avatar: "JO",
    text: "The automation platform Elevate built has saved us over 200 hours per month in manual operations. Their approach to understanding our workflows before writing code made all the difference. Exceptional work.",
    rating: 5,
    gradient: "from-amber-500 to-orange-500",
  },
  {
    name: "Emily Walsh",
    role: "Head of Product, EduSpark",
    avatar: "EW",
    text: "Elevate Softworks doesn't just build software — they craft solutions. Our e-learning platform went from idea to 50,000 active users in 6 months, and their post-launch support has been outstanding.",
    rating: 5,
    gradient: "from-emerald-500 to-cyan-500",
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  const next = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const prev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Auto-advance
  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
      scale: 0.95,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
      scale: 0.95,
    }),
  };

  const t = testimonials[current];

  return (
    <section id="testimonials" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full opacity-10 blur-[120px] bg-secondary" />

      <div className="max-w-4xl mx-auto relative z-10">
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Testimonials"
        />

        {/* Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="glass rounded-2xl p-8 md:p-12"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <HiStar key={i} className="text-amber-400 text-xl" />
                  ))}
                </div>

                {/* Quote */}
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 italic">
                  &ldquo;{t.text}&rdquo;
                </p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm`}
                  >
                    {t.avatar}
                  </div>
                  <div>
                    <div className="text-white font-semibold">{t.name}</div>
                    <div className="text-muted text-sm">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:border-primary/40 transition-all duration-300"
              aria-label="Previous testimonial"
            >
              <HiChevronLeft size={20} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    setDirection(i > current ? 1 : -1);
                    setCurrent(i);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? "w-8 bg-gradient-to-r from-primary to-secondary"
                      : "w-2 bg-white/20 hover:bg-white/40"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full glass flex items-center justify-center text-white hover:border-primary/40 transition-all duration-300"
              aria-label="Next testimonial"
            >
              <HiChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
