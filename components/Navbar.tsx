"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Features", href: "#features" },
  { label: "How it Works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24 py-2">
          {/* Logo - @author Cursor: large and visible on mobile + desktop */}
          <a href="#" className="flex items-center gap-2.5 group shrink-0">
            <Image
              src="/lunchpelogo.png"
              alt="LunchPe"
              width={320}
              height={96}
              className="h-14 w-auto min-h-[52px] sm:h-16 md:h-20 lg:h-24 object-contain object-left group-hover:opacity-90 transition-opacity"
              priority
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 hover:text-primary transition-colors duration-200 relative group"
              >
                {item.label}
                <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary rounded-full group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <a
              href="#waitlist"
              className="bg-primary hover:bg-primary-600 text-white text-sm font-semibold px-5 py-2.5 rounded-xl shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-105 transition-all duration-200"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-lg"
          >
            <div className="px-4 py-4 flex flex-col gap-1">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-sm font-medium text-gray-700 hover:text-primary py-2.5 px-3 rounded-lg hover:bg-orange-50 transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <div className="pt-2 border-t border-gray-100 mt-2">
                <a
                  href="#waitlist"
                  onClick={() => setMobileOpen(false)}
                  className="block w-full text-center bg-primary hover:bg-primary-600 text-white text-sm font-semibold px-5 py-3 rounded-xl mt-2 transition-colors"
                >
                  Get Started
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
