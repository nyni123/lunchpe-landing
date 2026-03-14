"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap } from "lucide-react";

// Single plan: up to 5 customers free for 2 months — focused on grabbing tiffin owners
const plan = {
  heading: "Up to 5 customers are free for 2 months",
  subtext: "No credit card. No commitment. Start in 2 minutes.",
  features: [
    "Manage orders & customers in one place",
    "In-app reminders — fewer missed payments",
    "Daily order list for your tiffin center",
    "Free for 2 months, then pay only when you grow",
  ],
  cta: "Start Free Trial",
};

export default function Pricing() {
  return (
    <section id="pricing" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Pricing</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-5 leading-tight">
            Simple, Transparent
            <br />
            Pricing
          </h2>
        </motion.div>

        {/* Single plan card — built to grab tiffin owners */}
        <div className="max-w-md mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            whileHover={{ y: -4 }}
            className="relative rounded-3xl p-8 flex flex-col bg-dark text-white shadow-2xl border-2 border-primary/30"
          >
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <div className="flex items-center gap-1.5 bg-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-lg shadow-primary/30">
                <Zap size={11} />
                Limited-time offer
              </div>
            </div>

            <h3 className="text-xl font-bold text-white mb-2 mt-2">
              {plan.heading}
            </h3>
            <p className="text-gray-400 text-sm mb-6">
              {plan.subtext}
            </p>

            <div className="flex-1 space-y-3 mb-7">
              {plan.features.map((f) => (
                <div key={f} className="flex items-start gap-2.5">
                  <CheckCircle2 size={15} className="flex-shrink-0 mt-0.5 text-primary" />
                  <span className="text-sm text-gray-300">{f}</span>
                </div>
              ))}
            </div>

            <a
              href="#waitlist"
              className="block text-center font-bold py-4 rounded-xl text-sm bg-primary hover:bg-primary-600 text-white shadow-lg shadow-primary/30 hover:shadow-primary/50 hover:scale-[1.02] transition-all duration-200"
            >
              {plan.cta}
            </a>
          </motion.div>
        </div>

        {/* Bottom note — trust & urgency for tiffin owners */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center text-sm text-gray-500 mt-6"
        >
          No credit card required. Cancel anytime. Join tiffin owners who run their business from one app.
          <a href="#waitlist" className="text-primary font-semibold ml-1 hover:underline">Get started today →</a>
        </motion.p>
      </div>
    </section>
  );
}
