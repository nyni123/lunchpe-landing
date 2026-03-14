"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Users,
  CreditCard,
  RefreshCw,
  Smartphone,
} from "lucide-react";

const features = [
  {
    icon: ClipboardList,
    title: "Order Management",
    desc: "Centralize all incoming orders. Accept, track, and manage daily tiffin orders effortlessly from a single dashboard.",
    color: "bg-orange-50 text-primary",
    shadow: "hover:shadow-primary/10",
  },
  {
    icon: Users,
    title: "Customer Management",
    desc: "Maintain complete customer profiles including addresses, preferences, and order history in one organized place.",
    color: "bg-blue-50 text-blue-600",
    shadow: "hover:shadow-blue-500/10",
  },
  {
    icon: CreditCard,
    title: "Payment Tracking",
    desc: "Track all payments, send automated reminders, and get a clear picture of outstanding dues at a glance.",
    color: "bg-green-50 text-green-600",
    shadow: "hover:shadow-green-500/10",
  },
  {
    icon: RefreshCw,
    title: "Subscription Plans",
    desc: "Create weekly, monthly, and custom meal subscription plans. Automate renewals and manage cancellations easily.",
    color: "bg-purple-50 text-purple-600",
    shadow: "hover:shadow-purple-500/10",
  },
  {
    icon: Smartphone,
    title: "Mobile App Access",
    desc: "Run your entire tiffin business from your smartphone. Available on Android for vendors and their customers.",
    color: "bg-teal-50 text-teal-600",
    shadow: "hover:shadow-teal-500/10",
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export default function Features() {
  return (
    <section id="features" className="py-20 lg:py-28 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Features</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-5 leading-tight">
            Everything Your Tiffin
            <br />
            Business Needs
          </h2>
          <p className="text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
            Purpose-built features for tiffin vendors. Not a generic tool — built specifically for how your business works.
          </p>
        </motion.div>

        {/* Feature Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              whileHover={{ y: -4 }}
              className={`bg-white rounded-2xl p-7 border border-gray-100 shadow-sm hover:shadow-xl ${feature.shadow} transition-all duration-300 group`}
            >
              <div
                className={`w-12 h-12 rounded-2xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
              >
                <feature.icon size={22} />
              </div>
              <h3 className="font-bold text-dark text-lg mb-2.5">{feature.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
