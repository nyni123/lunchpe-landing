"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Zap, Shield, Smartphone } from "lucide-react";

const points = [
  "All your orders in one dashboard",
  "Automatic payment reminders",
  "Customer profiles & history",
  "Subscription billing automation",
];

const pillars = [
  { icon: Zap, title: "Lightning Fast", desc: "Setup in under 5 minutes", color: "text-yellow-500 bg-yellow-50" },
  { icon: Shield, title: "Secure & Reliable", desc: "99.9% uptime guaranteed", color: "text-green-500 bg-green-50" },
  { icon: Smartphone, title: "Mobile-first", desc: "Works on any device", color: "text-blue-500 bg-blue-50" },
];

export default function Solution() {
  return (
    <section className="py-20 lg:py-28 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-orange-50/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left — Text */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-5"
            >
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">The Solution</span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark mb-6 leading-tight"
            >
              LunchPe Makes
              <br />
              It <span className="gradient-text">Simple</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-gray-500 text-lg mb-8 leading-relaxed"
            >
              LunchPe provides an easy platform to manage your tiffin service digitally.
              Stop juggling multiple apps and start running your business like a pro.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-10"
            >
              {points.map((p, i) => (
                <div key={p} className="flex items-start gap-3">
                  <CheckCircle2 size={17} className="text-primary flex-shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600 font-medium">{p}</span>
                </div>
              ))}
            </motion.div>

            {/* Pillars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-wrap gap-3"
            >
              {pillars.map((pillar) => (
                <div
                  key={pillar.title}
                  className="flex items-center gap-2.5 bg-white border border-gray-100 rounded-xl px-4 py-2.5 shadow-sm"
                >
                  <div className={`w-7 h-7 rounded-lg ${pillar.color} flex items-center justify-center`}>
                    <pillar.icon size={14} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-dark leading-none">{pillar.title}</p>
                    <p className="text-[10px] text-gray-400">{pillar.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Right — Visual blocks */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              {/* Block 1 */}
              <motion.div
                whileHover={{ scale: 1.03 }}
                className="col-span-2 bg-gradient-to-br from-primary to-orange-600 rounded-3xl p-6 text-white shadow-xl shadow-primary/20"
              >
                <div className="flex items-center justify-between mb-4">
                  <p className="font-bold text-sm">Today&apos;s Summary</p>
                  <span className="text-xs bg-white/20 px-2 py-0.5 rounded-full">Live</span>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { label: "Orders", val: "134" },
                    { label: "Revenue", val: "₹26.4K" },
                    { label: "Active Subs", val: "98" },
                  ].map((s) => (
                    <div key={s.label}>
                      <p className="text-2xl font-black">{s.val}</p>
                      <p className="text-[11px] text-white/70 mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Block 2 */}
              <motion.div whileHover={{ scale: 1.03 }} className="bg-dark rounded-3xl p-5 text-white shadow-xl">
                <p className="text-xs text-gray-400 mb-3 font-medium">Subscription Plans</p>
                <div className="space-y-2">
                  {[
                    { plan: "Monthly", count: 42, pct: 78 },
                    { plan: "Weekly", count: 28, pct: 52 },
                  ].map((s) => (
                    <div key={s.plan}>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-300">{s.plan}</span>
                        <span className="text-white font-semibold">{s.count}</span>
                      </div>
                      <div className="h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${s.pct}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-primary rounded-full"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Block 3 */}
              <motion.div whileHover={{ scale: 1.03 }} className="bg-white border border-gray-100 rounded-3xl p-5 shadow-xl">
                <p className="text-xs text-gray-400 mb-3 font-medium">Pending Payments</p>
                <p className="text-3xl font-black text-dark mb-1">₹4,200</p>
                <p className="text-xs text-red-400 font-medium">6 customers overdue</p>
                <button className="mt-3 w-full bg-primary/10 text-primary text-xs font-bold py-2 rounded-xl hover:bg-primary/20 transition-colors">
                  Send Reminders →
                </button>
              </motion.div>

              {/* Block 4 */}
              <motion.div whileHover={{ scale: 1.03 }} className="col-span-2 bg-orange-50 border border-orange-100 rounded-3xl p-5">
                <p className="text-xs text-primary font-semibold mb-3 uppercase tracking-wide">Delivery Status</p>
                <div className="flex items-center gap-4">
                  {[
                    { label: "Assigned", val: "28", color: "bg-blue-500" },
                    { label: "Delivered", val: "91", color: "bg-green-500" },
                    { label: "Failed", val: "2", color: "bg-red-400" },
                  ].map((d) => (
                    <div key={d.label} className="flex-1 text-center">
                      <div className={`w-8 h-8 ${d.color} rounded-xl mx-auto mb-1.5 flex items-center justify-center`}>
                        <span className="text-white text-xs font-black">{d.val}</span>
                      </div>
                      <p className="text-[10px] text-gray-500 font-medium">{d.label}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
