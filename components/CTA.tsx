"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-20 lg:py-28 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden bg-gradient-to-br from-[#111111] to-[#1a1a1a] rounded-3xl px-8 py-16 lg:py-20 text-center"
        >
          {/* Glow effects */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-primary/15 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -left-10 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute -bottom-10 -right-10 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl" />

          {/* Decorative dots */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />

          <div className="relative z-10">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-primary/20 border border-primary/30 rounded-full px-4 py-1.5 mb-6"
            >
              <Sparkles size={12} className="text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Limited Early Access
              </span>
            </motion.div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black text-white mb-6 leading-tight max-w-3xl mx-auto">
              Start Growing Your Tiffin
              <br />
              Business <span className="gradient-text">Today</span>
            </h2>

            <p className="text-gray-400 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
              Join 25+ tiffin vendors who are already managing their business smarter with LunchPe.
              Early members get 3 months completely free.
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-bold px-8 py-4 rounded-xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transition-all duration-200"
              >
                Join Vendor Waitlist
                <ArrowRight size={16} />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                href="#features"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-200"
              >
                Explore Features
              </motion.a>
            </div>

            {/* Trust indicators */}
            <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
              {[
                "✓ 2 months free — up to 5 customers",
                "✓ No credit card required",
                "✓ Setup in 5 minutes",
                "✓ Cancel anytime",
              ].map((item) => (
                <span key={item} className="text-sm text-gray-400 font-medium">{item}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
