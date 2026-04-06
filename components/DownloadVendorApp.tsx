"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import {
  CheckCircle2,
  ClipboardList,
  IndianRupee,
  Smartphone,
  Users,
  UtensilsCrossed,
} from "lucide-react";

const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.lunchpe.vendor";

const PLAY_BADGE_SRC = "/get-it-on-google-play.png";
const APP_SCREENSHOT_SRC = "/vendormobile.jpg";

const perks = [
  {
    icon: ClipboardList,
    title: "Orders & status",
    desc: "Track deliveries, plans, and daily operations from one home screen.",
  },
  {
    icon: Users,
    title: "Customers",
    desc: "Manage profiles, subscriptions, and who is on which meal plan.",
  },
  {
    icon: UtensilsCrossed,
    title: "Menu & plans",
    desc: "Update menus and meal plans so customers always see what's live.",
  },
  {
    icon: IndianRupee,
    title: "Payments",
    desc: "See billing cycles, reminders, and payment flow without spreadsheet chaos.",
  },
];

export default function DownloadVendorApp() {
  return (
    <section
      id="download-vendor-app"
      className="relative py-20 lg:py-28 overflow-hidden bg-gradient-to-b from-orange-50/25 via-white to-white scroll-mt-24 md:scroll-mt-28"
    >
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-32 w-80 h-80 bg-orange-200/25 rounded-full blur-3xl" />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #111 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-5"
            >
              <Smartphone size={14} className="text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Vendor app
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.05 }}
              className="text-3xl sm:text-4xl lg:text-5xl font-black text-dark leading-tight mb-5"
            >
              Run your tiffin business
              <br />
              from <span className="gradient-text">your pocket</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.1 }}
              className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg"
            >
              Orders, customers, menus, plans, and payments — handle the day-to-day
              of your tiffin service in one app built for vendors in India.
            </motion.p>

            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: 0.15 }}
              className="grid sm:grid-cols-2 gap-4 mb-10"
            >
              {perks.map((item) => (
                <li
                  key={item.title}
                  className="flex gap-3 p-4 rounded-2xl bg-white/80 border border-orange-100/80 shadow-sm shadow-orange-500/5 card-hover"
                >
                  <div className="shrink-0 w-10 h-10 rounded-xl bg-orange-50 flex items-center justify-center text-primary">
                    <item.icon size={20} strokeWidth={2} />
                  </div>
                  <div>
                    <p className="font-bold text-dark text-sm">{item.title}</p>
                    <p className="text-xs text-gray-500 leading-snug mt-0.5">
                      {item.desc}
                    </p>
                  </div>
                </li>
              ))}
            </motion.ul>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col sm:flex-row sm:items-center gap-5"
            >
              <motion.a
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-fit rounded-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
              >
                <Image
                  src={PLAY_BADGE_SRC}
                  alt="Get it on Google Play"
                  width={646}
                  height={250}
                  className="h-[52px] sm:h-[60px] w-auto"
                />
              </motion.a>
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <CheckCircle2 size={18} className="text-primary shrink-0" />
                <span>Free download · Android</span>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[min(100%,320px)] aspect-square bg-primary/12 rounded-full blur-3xl" />
            </div>
            <div className="relative w-[min(100%,280px)] sm:w-[300px]">
              <div
                className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-orange-100/60 via-primary/15 to-transparent opacity-90"
                aria-hidden
              />
              <div className="relative mx-auto aspect-[9/19.5] w-full rounded-[2.35rem] border-[10px] border-[#1a1a1a] bg-[#1a1a1a] shadow-2xl shadow-black/40 overflow-hidden">
                <Image
                  src={APP_SCREENSHOT_SRC}
                  alt="LunchPe vendor app — dashboard, quick actions, and orders"
                  fill
                  className="object-cover object-top select-none pointer-events-none"
                  sizes="(max-width: 640px) 280px, 300px"
                />
                <div
                  className="absolute top-0 left-1/2 z-10 h-[20px] w-[min(34%,104px)] -translate-x-1/2 rounded-b-[10px] bg-black pointer-events-none"
                  aria-hidden
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
