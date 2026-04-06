import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Solution from "@/components/Solution";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import DownloadApp from "@/components/DownloadApp";
import DownloadVendorApp from "@/components/DownloadVendorApp";
import Pricing from "@/components/Pricing";
import WaitlistForm from "@/components/WaitlistForm";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Features />
      <HowItWorks />
      <Screenshots />
      <DownloadVendorApp />
      <DownloadApp />
      <Pricing />
      <WaitlistForm />
      <CTA />
      <Footer />
    </main>
  );
}
