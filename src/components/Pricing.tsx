"use client";

import { motion } from "framer-motion";
import SectionHeading from "./ui/SectionHeading";
import { HiCheck, HiArrowRight } from "react-icons/hi";

const plans = [
  {
    name: "Starter",
    price: "2,499",
    period: "per project",
    description: "Perfect for small businesses and MVPs",
    features: [
      "Custom Landing Page",
      "Responsive Design",
      "Up to 5 Pages",
      "Basic SEO Optimization",
      "Contact Form Integration",
      "1 Month Support",
    ],
    highlighted: false,
    gradient: "from-purple-500/20 to-indigo-500/20",
  },
  {
    name: "Professional",
    price: "7,999",
    period: "per project",
    description: "Ideal for growing businesses and SaaS products",
    features: [
      "Full Web Application",
      "Custom UI/UX Design",
      "User Authentication",
      "Database Integration",
      "API Development",
      "Payment Gateway",
      "Admin Dashboard",
      "3 Months Support",
    ],
    highlighted: true,
    gradient: "from-primary/20 to-secondary/20",
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "tailored pricing",
    description: "For large-scale platforms and complex solutions",
    features: [
      "Everything in Professional",
      "Microservices Architecture",
      "AI/ML Integration",
      "Advanced Security",
      "Scalable Infrastructure",
      "Dedicated Team",
      "24/7 Priority Support",
      "Custom SLA",
    ],
    highlighted: false,
    gradient: "from-cyan-500/20 to-teal-500/20",
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="section-padding relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-10 blur-[120px] bg-primary" />

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeading
          title="Simple, Transparent Pricing"
          subtitle="Pricing Plans"
        />

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative glass rounded-2xl p-8 ${
                plan.highlighted
                  ? "border-primary/30 scale-105 md:scale-[1.05]"
                  : ""
              }`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
            >
              {/* Popular badge */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold rounded-full">
                    Most Popular
                  </span>
                </div>
              )}

              {/* Header */}
              <div className="mb-6">
                <h3 className="text-lg font-bold font-[var(--font-outfit)] text-white mb-1">
                  {plan.name}
                </h3>
                <p className="text-muted text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-8">
                <div className="flex items-baseline gap-1">
                  {plan.price !== "Custom" && (
                    <span className="text-muted text-lg">$</span>
                  )}
                  <span className="text-4xl font-bold gradient-text font-[var(--font-outfit)]">
                    {plan.price}
                  </span>
                </div>
                <span className="text-muted text-sm">{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <HiCheck className="text-primary mt-0.5 shrink-0" />
                    <span className="text-muted">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href="#contact"
                className={`w-full flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-gradient-to-r from-primary to-secondary text-white btn-glow"
                    : "glass text-white hover:border-primary/40"
                }`}
              >
                Get Started
                <HiArrowRight className="text-sm" />
              </a>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.p
          className="text-center text-muted text-sm mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          All prices are starting points. Final pricing depends on project scope and complexity.
        </motion.p>
      </div>
    </section>
  );
}
