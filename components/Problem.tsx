"use client";

import { motion } from "framer-motion";
import { MessageCircle, Calculator, Database, ClipboardList } from "lucide-react";

const problems = [
  {
    icon: MessageCircle,
    title: "Orders via WhatsApp chaos",
    desc: "Juggling hundreds of daily orders across WhatsApp groups and individual chats. Orders get missed, customers get angry.",
    color: "bg-red-50 text-red-500",
    border: "border-red-100",
  },
  {
    icon: Calculator,
    title: "Manual payment tracking",
    desc: "Using notebooks or spreadsheets to track who paid, who owes, and who needs reminders. It's a nightmare every month-end.",
    color: "bg-orange-50 text-orange-500",
    border: "border-orange-100",
  },
  {
    icon: Database,
    title: "Customer data all over the place",
    desc: "Customer names in a diary, addresses on notes, preferences in memory. No single source of truth anywhere.",
    color: "bg-yellow-50 text-yellow-500",
    border: "border-yellow-100",
  },
  {
    icon: ClipboardList,
    title: "No clear daily order list",
    desc: "Every morning you scramble through chats and notebooks to see who ordered what. One missed order and you lose a customer's trust.",
    color: "bg-purple-50 text-purple-500",
    border: "border-purple-100",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Problem() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-red-500/10 border border-red-500/20 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-red-400 uppercase tracking-wider">The Problem</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            Running a Tiffin Business
            <br />
            <span className="text-red-400">is Hard</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto leading-relaxed">
            Most tiffin vendors spend more time managing chaos than cooking great food.
            Sound familiar?
          </p>
        </motion.div>

        {/* Problem Cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {problems.map((p) => (
            <motion.div
              key={p.title}
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              className={`bg-white/[0.03] backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 group`}
            >
              <div className={`w-11 h-11 rounded-xl ${p.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                <p.icon size={20} />
              </div>
              <h3 className="font-bold text-white mb-2.5 leading-snug">{p.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom tagline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-14"
        >
          <p className="text-gray-500 text-lg">
            There&apos;s a better way. Introducing{" "}
            <span className="text-primary font-bold">LunchPe</span> ↓
          </p>
        </motion.div>
      </div>
    </section>
  );
}
