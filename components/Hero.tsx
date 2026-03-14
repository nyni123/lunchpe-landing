"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Users,
  ShoppingBag,
  Bell,
  Star,
  IndianRupee,
} from "lucide-react";

// Pre-launch: use waitlist/coming-soon messaging until we have real numbers
const stats = [
  { value: "Join", label: "the waitlist" },
  { value: "Built for", label: "India" },
];

const floatingCards = [
  {
    icon: ShoppingBag,
    title: "New Order",
    sub: "Priya S. — Lunch x2",
    color: "bg-green-500",
    position: "top-4 -left-4 lg:-left-12",
    delay: 0.2,
  },
  {
    icon: IndianRupee,
    title: "Payment Received",
    sub: "₹2,400 from Rahul M.",
    color: "bg-primary",
    position: "bottom-12 -right-4 lg:-right-10",
    delay: 0.5,
  },
  {
    icon: TrendingUp,
    title: "Revenue Up",
    sub: "+24% this month",
    color: "bg-blue-500",
    position: "top-1/2 -right-4 lg:-right-16",
    delay: 0.8,
  },
];

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden hero-glow">
      {/* Background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
        {/* Grid dots */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle, #111 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-6"
            >
              <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                India&apos;s #1 Tiffin Platform
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-dark leading-[1.05] tracking-tight mb-6"
            >
              Run Your Tiffin
              <br />
              Business{" "}
              <span className="gradient-text">Smarter</span>
              <br />
              with LunchPe
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg text-gray-500 leading-relaxed mb-8 max-w-lg"
            >
              Manage orders, customers, subscriptions, payments, and deliveries
              from one powerful platform. Built for Indian tiffin businesses.
            </motion.p>

            {/* Bullets */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap gap-x-6 gap-y-2 mb-10"
            >
              {["2 months free — up to 5 customers", "No credit card needed", "Setup in 5 mins"].map((item) => (
                <div key={item} className="flex items-center gap-1.5 text-sm text-gray-600">
                  <CheckCircle2 size={15} className="text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-4 mb-12"
            >
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary-600 text-white font-bold px-7 py-3.5 rounded-xl shadow-xl shadow-primary/30 hover:shadow-primary/50 hover:scale-105 transition-all duration-200 text-sm"
              >
                Start Free Trial
                <ArrowRight size={16} />
              </a>
              <a
                href="#waitlist"
                className="inline-flex items-center gap-2 bg-white border-2 border-gray-200 hover:border-primary text-dark font-semibold px-7 py-3.5 rounded-xl hover:bg-orange-50 transition-all duration-200 text-sm"
              >
                Join Vendor Waitlist
              </a>
            </motion.div>

            {/* Social Proof */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-4"
            >
              <div className="flex -space-x-2">
                {["bg-orange-400", "bg-blue-400", "bg-green-400", "bg-purple-400", "bg-pink-400"].map(
                  (c, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full ${c} border-2 border-white flex items-center justify-center`}
                    >
                      <Users size={12} className="text-white" />
                    </div>
                  )
                )}
              </div>
              <div>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} size={12} className="fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-gray-500 mt-0.5">
                  Be among the first tiffin vendors — <span className="font-semibold text-dark">join the waitlist</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right — Dashboard Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-sm lg:max-w-md">
              {/* Main Dashboard Card */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-5 relative z-10"
              >
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-5">
                  <div>
                    <p className="text-xs text-gray-400 font-medium">Good Morning,</p>
                    <p className="font-bold text-dark">Sharma Tiffin Service</p>
                  </div>
                  <div className="relative">
                    <Bell size={20} className="text-gray-400" />
                    <span className="absolute -top-1 -right-1 w-4 h-4 bg-primary rounded-full text-[9px] text-white flex items-center justify-center font-bold">3</span>
                  </div>
                </div>

                {/* Stats Row */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  {[
                    { label: "Orders", value: "128", trend: "+12%", color: "bg-orange-50 text-primary" },
                    { label: "Revenue", value: "₹24K", trend: "+8%", color: "bg-blue-50 text-blue-600" },
                    { label: "Customers", value: "94", trend: "+5%", color: "bg-green-50 text-green-600" },
                  ].map((s) => (
                    <div key={s.label} className={`rounded-2xl p-3 ${s.color.split(" ")[0]}`}>
                      <p className="text-[10px] text-gray-500 mb-1">{s.label}</p>
                      <p className={`font-black text-base ${s.color.split(" ")[1]}`}>{s.value}</p>
                      <p className="text-[10px] text-green-500 font-semibold">{s.trend}</p>
                    </div>
                  ))}
                </div>

                {/* Recent Orders */}
                <div>
                  <p className="text-xs font-semibold text-gray-500 mb-3 uppercase tracking-wide">Today's Orders</p>
                  <div className="space-y-2.5">
                    {[
                      { name: "Priya Sharma", meal: "Veg Thali", status: "Delivered", color: "bg-green-100 text-green-700" },
                      { name: "Ravi Kumar", meal: "Dal Rice", status: "Preparing", color: "bg-yellow-100 text-yellow-700" },
                      { name: "Anjali M.", meal: "Paneer Meal", status: "Pending", color: "bg-gray-100 text-gray-600" },
                    ].map((order) => (
                      <div key={order.name} className="flex items-center justify-between">
                        <div className="flex items-center gap-2.5">
                          <div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center text-[10px] font-bold text-primary">
                            {order.name[0]}
                          </div>
                          <div>
                            <p className="text-xs font-semibold text-dark leading-none">{order.name}</p>
                            <p className="text-[10px] text-gray-400">{order.meal}</p>
                          </div>
                        </div>
                        <span className={`text-[10px] font-semibold px-2 py-0.5 rounded-full ${order.color}`}>
                          {order.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Revenue Chart Bar */}
                <div className="mt-5 pt-4 border-t border-gray-100">
                  <div className="flex items-end gap-1.5 h-12">
                    {[40, 65, 45, 80, 60, 90, 75].map((h, i) => (
                      <div key={i} className="flex-1 rounded-t-sm bg-primary/10 relative overflow-hidden">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: `${h}%` }}
                          transition={{ delay: 0.8 + i * 0.05, duration: 0.5 }}
                          className="absolute bottom-0 left-0 right-0 bg-primary/60 rounded-t-sm"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-1">
                    {["M","T","W","T","F","S","S"].map((d, i) => (
                      <span key={i} className="text-[9px] text-gray-400 flex-1 text-center">{d}</span>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* Floating notification cards */}
              {floatingCards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: card.delay + 0.5, duration: 0.4 }}
                  className={`absolute ${card.position} bg-white rounded-2xl shadow-xl border border-gray-100 p-3 flex items-center gap-3 z-20 min-w-[160px]`}
                >
                  <div className={`w-8 h-8 ${card.color} rounded-xl flex items-center justify-center flex-shrink-0`}>
                    <card.icon size={14} className="text-white" />
                  </div>
                  <div>
                    <p className="text-[11px] font-bold text-dark leading-none mb-0.5">{card.title}</p>
                    <p className="text-[10px] text-gray-400">{card.sub}</p>
                  </div>
                </motion.div>
              ))}

              {/* Background blob */}
              <div className="absolute -z-10 inset-0 scale-110 blur-2xl opacity-30 bg-gradient-radial from-primary/30 to-transparent rounded-full" />
            </div>
          </motion.div>
        </div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-16 lg:mt-20 flex flex-wrap gap-x-12 gap-y-2 border-t border-gray-100 pt-10 max-w-md"
        >
          {stats.map((s) => (
            <div key={s.label}>
              <p className="text-2xl lg:text-3xl font-black text-dark">{s.value}</p>
              <p className="text-sm text-gray-400 mt-1">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
