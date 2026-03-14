"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";
// import { Twitter, Linkedin } from "lucide-react"; // uncomment when adding Twitter/LinkedIn links

const links = {
  Product: [
    { label: "Features", href: "#features" },
    { label: "How it Works", href: "#how-it-works" },
    { label: "Pricing", href: "#pricing" },
  ],
  Brahmastack: [
    { label: "About Brahmastack", href: "https://brahmastack.com/" },
    { label: "Contact", href: "https://brahmastack.com/contact/" },
  ],
};

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0A0A0A] text-white pt-16 pb-8 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Top */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 pb-12 border-b border-white/10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-block mb-4">
              <Image
                src="/lunchpelogo.png"
                alt="LunchPe"
                width={320}
                height={96}
                className="h-16 w-auto min-h-[56px] sm:h-20 md:h-24 object-contain object-left opacity-95 hover:opacity-100 transition-opacity"
              />
            </a>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs mb-6">
              India&apos;s smartest tiffin management platform. Helping tiffin providers
              manage orders, customers, and payments from one place.
            </p>
            <div className="flex items-center gap-3 mb-5">
              <a
                href="mailto:contact@brahmastack.com"
                className="flex items-center gap-2 text-xs text-gray-400 hover:text-primary transition-colors"
              >
                <Mail size={13} />
                contact@brahmastack.com
              </a>
            </div>
            <div className="flex gap-3">
              {[
                // { Icon: Twitter, href: "#" },
                { Icon: Instagram, href: "https://instagram.com/lunchpeofficial" },
                // { Icon: Linkedin, href: "#" },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="w-8 h-8 bg-white/5 hover:bg-primary rounded-lg flex items-center justify-center transition-colors group"
                >
                  <Icon size={14} className="text-gray-400 group-hover:text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category}>
              <p className="text-xs font-bold text-white uppercase tracking-widest mb-4">{category}</p>
              <ul className="space-y-3">
                {items.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="text-sm text-gray-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500 text-center sm:text-left">
            © {new Date().getFullYear()} LunchPe by{" "}
            <span className="text-gray-400 font-medium">Brahmastack Technologies Pvt. Ltd.</span>
            {" "}All rights reserved.
          </p>
          <div className="flex items-center gap-1.5">
            <span className="text-xs text-gray-500">Made with</span>
            <span className="text-red-400 text-xs">♥</span>
            <span className="text-xs text-gray-500">in India 🇮🇳</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
