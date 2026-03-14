"use client";

import { motion } from "framer-motion";
import { BarChart2, UtensilsCrossed, RefreshCw, TrendingUp, Bell, Users, CheckCircle2, IndianRupee } from "lucide-react";

const screens = [
  {
    title: "Vendor Dashboard",
    desc: "Complete business overview at a glance",
    color: "from-orange-500 to-orange-600",
    content: "dashboard",
  },
  {
    title: "Customer Meal Selection",
    desc: "Beautiful meal discovery experience",
    color: "from-blue-500 to-blue-700",
    content: "meals",
  },
  {
    title: "Subscription Management",
    desc: "Manage all your active subscriptions",
    color: "from-purple-500 to-purple-700",
    content: "subscriptions",
  },
];

function DashboardMockup() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-[#0A0A0A] px-4 py-3 flex items-center gap-2">
        <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
        <div className="flex-1 mx-3 bg-white/10 rounded-full h-4 flex items-center px-3">
          <span className="text-[8px] text-white/40">app.lunchpe.in/dashboard</span>
        </div>
      </div>
      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div>
            <p className="text-[9px] text-gray-400">Welcome back</p>
            <p className="text-xs font-bold text-dark">Sharma Tiffins</p>
          </div>
          <div className="relative">
            <Bell size={14} className="text-gray-400" />
            <span className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-primary rounded-full text-[7px] text-white flex items-center justify-center">3</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 mb-3">
          {[
            { label: "Orders", val: "128", icon: CheckCircle2, color: "bg-orange-50 text-primary" },
            { label: "Revenue", val: "₹24K", icon: IndianRupee, color: "bg-green-50 text-green-600" },
          ].map(s => (
            <div key={s.label} className={`rounded-xl p-2.5 ${s.color.split(" ")[0]}`}>
              <s.icon size={10} className={`mb-1 ${s.color.split(" ")[1]}`} />
              <p className={`text-base font-black ${s.color.split(" ")[1]}`}>{s.val}</p>
              <p className="text-[9px] text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-xl p-2.5">
          <p className="text-[9px] font-semibold text-gray-500 mb-2">Recent Orders</p>
          {["Priya S. — Veg Thali", "Ravi K. — Dal Rice", "Anjali M. — Paneer"].map((o, i) => (
            <div key={o} className="flex items-center justify-between py-1 border-b border-gray-100 last:border-0">
              <span className="text-[9px] text-gray-600">{o}</span>
              <span className={`text-[8px] font-semibold px-1.5 py-0.5 rounded-full ${i === 0 ? "bg-green-100 text-green-600" : i === 1 ? "bg-yellow-100 text-yellow-600" : "bg-gray-100 text-gray-500"}`}>
                {i === 0 ? "Done" : i === 1 ? "Prep" : "New"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function MealsMockup() {
  const meals = [
    { name: "Veg Thali", price: "₹80", tag: "Popular", color: "bg-green-50" },
    { name: "Dal Rice", price: "₹60", tag: "Budget", color: "bg-blue-50" },
    { name: "Paneer Meal", price: "₹100", tag: "Premium", color: "bg-purple-50" },
  ];
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-primary px-4 py-3">
        <p className="text-[9px] text-white/70 mb-0.5">Sharma Tiffins</p>
        <p className="text-xs font-bold text-white">Choose Your Meal Plan</p>
      </div>
      <div className="p-4 space-y-2.5">
        {meals.map((m) => (
          <div key={m.name} className={`${m.color} rounded-xl p-3 flex items-center justify-between`}>
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-white flex items-center justify-center">
                <UtensilsCrossed size={12} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-dark">{m.name}</p>
                <span className="text-[9px] text-gray-400">{m.tag}</span>
              </div>
            </div>
            <div className="text-right">
              <p className="text-sm font-black text-dark">{m.price}</p>
              <p className="text-[9px] text-gray-400">/day</p>
            </div>
          </div>
        ))}
        <button className="w-full bg-primary text-white text-[11px] font-bold py-2.5 rounded-xl mt-1">
          Subscribe Now →
        </button>
      </div>
    </div>
  );
}

function SubscriptionsMockup() {
  return (
    <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
      <div className="bg-[#0A0A0A] px-4 py-3">
        <p className="text-[10px] text-white font-bold">Subscriptions</p>
        <p className="text-[8px] text-gray-400">94 active customers</p>
      </div>
      <div className="p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { label: "Active", val: "94", color: "bg-green-50 text-green-600" },
            { label: "Paused", val: "12", color: "bg-yellow-50 text-yellow-600" },
            { label: "Expired", val: "8", color: "bg-red-50 text-red-500" },
          ].map(s => (
            <div key={s.label} className={`${s.color.split(" ")[0]} rounded-xl p-2 text-center`}>
              <p className={`text-base font-black ${s.color.split(" ")[1]}`}>{s.val}</p>
              <p className="text-[8px] text-gray-400">{s.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          {[
            { name: "Priya S.", plan: "Monthly Veg", days: "22 days left" },
            { name: "Ravi K.", plan: "Weekly Dal", days: "5 days left" },
            { name: "Meena J.", plan: "Monthly Paneer", days: "18 days left" },
          ].map(s => (
            <div key={s.name} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center text-[9px] font-bold text-primary">
                  {s.name[0]}
                </div>
                <div>
                  <p className="text-[9px] font-semibold text-dark leading-none">{s.name}</p>
                  <p className="text-[8px] text-gray-400">{s.plan}</p>
                </div>
              </div>
              <span className="text-[8px] text-primary font-semibold bg-orange-50 px-1.5 py-0.5 rounded-full">{s.days}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

const mockups = [DashboardMockup, MealsMockup, SubscriptionsMockup];

export default function Screenshots() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-gray-300 uppercase tracking-wider">App Preview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 leading-tight">
            See LunchPe
            <br />
            in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto leading-relaxed">
            Clean, intuitive interfaces designed for busy tiffin vendors who don't have time to figure out complex software.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {screens.map((screen, i) => {
            const Mockup = mockups[i];
            return (
              <motion.div
                key={screen.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
                whileHover={{ y: -6 }}
                className="group"
              >
                {/* Phone frame */}
                <div className="relative mx-auto w-48 sm:w-full max-w-[200px]">
                  <div className="bg-[#1A1A1A] rounded-[32px] p-2.5 shadow-2xl border border-white/10 group-hover:border-white/20 transition-colors">
                    <div className="bg-gray-800 rounded-[24px] overflow-hidden">
                      {/* Notch */}
                      <div className="flex justify-center pt-2 pb-1">
                        <div className="w-16 h-1 bg-gray-700 rounded-full" />
                      </div>
                      <Mockup />
                    </div>
                  </div>
                  {/* Glow effect */}
                  <div className={`absolute -z-10 inset-4 blur-2xl opacity-20 bg-gradient-to-b ${screen.color} rounded-full`} />
                </div>

                {/* Caption */}
                <div className="text-center mt-5">
                  <h3 className="font-bold text-white text-sm mb-1">{screen.title}</h3>
                  <p className="text-xs text-gray-400">{screen.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
