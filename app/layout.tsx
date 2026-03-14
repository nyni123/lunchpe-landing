import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "LunchPe — Manage Your Tiffin Business Smarter",
  description:
    "LunchPe is a platform designed for tiffin service providers to manage orders, customers, subscriptions, and payments from one place.",
  keywords: "tiffin management, tiffin software, meal subscription, tiffin business India",
  icons: {
    icon: [
      { url: "/fav-icons/favicon.ico", sizes: "any" },
      { url: "/fav-icons/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/fav-icons/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/fav-icons/android-chrome-192x192.png", type: "image/png", sizes: "192x192" },
      { url: "/fav-icons/android-chrome-512x512.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [
      { url: "/fav-icons/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  openGraph: {
    title: "LunchPe — Manage Your Tiffin Business Smarter",
    description: "Manage orders, customers, subscriptions, payments, and deliveries from one powerful platform.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
