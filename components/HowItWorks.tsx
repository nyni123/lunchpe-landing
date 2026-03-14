"use client";

import { motion } from "framer-motion";
import { UserPlus, UtensilsCrossed, ShoppingCart, LayoutDashboard } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: UserPlus,
    title: "Sign Up as a Tiffin Vendor",
    desc: "Create your LunchPe vendor account in minutes. Set up your business profile, add your service area, and you're ready to go.",
    color: "from-primary to-orange-600",
  },
  {
    number: "02",
    icon: UtensilsCrossed,
    title: "Add Your Meal Plans",
    desc: "Create daily, weekly, or monthly meal plans. Set prices, meal descriptions, and customize options for breakfast, lunch, and dinner.",
    color: "from-blue-500 to-blue-600",
  },
  {
    number: "03",
    icon: ShoppingCart,
    title: "Customers Subscribe",
    desc: "Share your LunchPe link with customers. They browse plans, subscribe, and pay online. Zero effort on your side.",
    color: "from-green-500 to-green-600",
  },
  {
    number: "04",
    icon: LayoutDashboard,
    title: "Manage Orders Easily",
    desc: "View all orders in your dashboard, assign deliveries, and track payments.",
    color: "from-purple-500 to-purple-600",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-orange-50/40 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">How It Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-5 leading-tight">
            Up & Running in
            <br />
            <span className="gradient-text">4 Simple Steps</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
            No technical knowledge needed. If you can use WhatsApp, you can use LunchPe.
          </p>
        </motion.div>

        {/* Steps — Desktop timeline */}
        <div className="hidden lg:block">
          {/* Connecting line */}
          <div className="relative">
            <div className="absolute top-[52px] left-0 right-0 h-0.5 bg-gray-100 mx-[12.5%]">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, delay: 0.3 }}
                className="h-full bg-gradient-to-r from-primary via-blue-500 to-purple-500 origin-left"
              />
            </div>

            <div className="grid grid-cols-4 gap-6">
              {steps.map((step, i) => (
                <motion.div
                  key={step.number}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="flex flex-col items-center text-center"
                >
                  {/* Icon circle */}
                  <div className={`relative w-[104px] h-[104px] rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center mb-6 shadow-xl z-10`}>
                    <step.icon size={34} className="text-white" />
                    <div className="absolute -top-1 -right-1 w-7 h-7 bg-white rounded-full flex items-center justify-center shadow-md">
                      <span className="text-[10px] font-black text-dark">{step.number}</span>
                    </div>
                  </div>
                  <h3 className="font-bold text-dark text-base mb-2 leading-snug">{step.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Steps — Mobile vertical */}
        <div className="lg:hidden space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-5"
            >
              <div className="flex flex-col items-center">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center shadow-lg flex-shrink-0`}>
                  <step.icon size={22} className="text-white" />
                </div>
                {i < steps.length - 1 && (
                  <div className="w-0.5 flex-1 bg-gray-100 my-2 min-h-[20px]" />
                )}
              </div>
              <div className="pt-1 pb-4">
                <div className="text-xs font-black text-primary mb-1">{step.number}</div>
                <h3 className="font-bold text-dark text-base mb-1.5">{step.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
