"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { HiArrowRight, HiCalendar, HiClock } from "react-icons/hi";

const posts = [
  {
    title: "The Future of AI in Software Development",
    excerpt:
      "Explore how artificial intelligence is revolutionizing the way we build, test, and deploy modern software applications.",
    category: "AI & Technology",
    date: "Apr 15, 2026",
    readTime: "5 min read",
    gradient: "from-purple-600 to-indigo-600",
  },
  {
    title: "Building Scalable SaaS: Lessons from 50+ Projects",
    excerpt:
      "Key architectural patterns and design decisions that separate a hobby project from an enterprise-grade SaaS platform.",
    category: "Engineering",
    date: "Apr 10, 2026",
    readTime: "8 min read",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Why Startups Should Invest in Design Systems Early",
    excerpt:
      "A design system isn't just for big companies. Here's how investing early saves thousands of hours as you scale.",
    category: "Design",
    date: "Apr 5, 2026",
    readTime: "4 min read",
    gradient: "from-pink-500 to-rose-600",
  },
];

export default function Blog() {
  return (
    <section id="blog" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-10 blur-[100px] bg-accent" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Insights & Updates"
          subtitle="Our Blog"
        />

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, i) => (
            <motion.article
              key={post.title}
              className="group glass rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Image placeholder */}
              <div className="relative h-48 overflow-hidden">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${post.gradient} opacity-50 group-hover:opacity-70 transition-opacity duration-500`}
                />
                {/* Abstract lines */}
                <div className="absolute inset-0 flex items-center justify-center opacity-30">
                  {[...Array(5)].map((_, j) => (
                    <div
                      key={j}
                      className="absolute w-full h-px bg-white/20"
                      style={{
                        top: `${20 + j * 15}%`,
                        transform: `rotate(${-5 + j * 3}deg)`,
                      }}
                    />
                  ))}
                </div>
                {/* Category */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 text-xs font-medium bg-black/40 backdrop-blur-md text-white rounded-full border border-white/10">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Meta */}
                <div className="flex items-center gap-4 text-xs text-muted mb-3">
                  <span className="flex items-center gap-1">
                    <HiCalendar size={12} />
                    {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <HiClock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3 className="text-lg font-bold font-[var(--font-outfit)] text-white mb-2 group-hover:gradient-text transition-all duration-300 leading-snug">
                  {post.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                <span className="inline-flex items-center gap-1 text-primary text-sm font-medium group-hover:gap-2 transition-all duration-300">
                  Read More
                  <HiArrowRight className="text-sm" />
                </span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
