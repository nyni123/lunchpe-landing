import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import RazorpayPaymentButton from "@/components/RazorpayPaymentButton";
import { CheckCircle2, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Vendor Registration — LunchPe",
  description:
    "Pay your LunchPe vendor registration fee securely via Razorpay. Complete payment to activate your tiffin business account.",
};

const steps = [
  "Click the Pay Now button below",
  "Complete payment via UPI, card, or net banking",
  "Share your payment confirmation with our team on WhatsApp or email",
];

export default function RegisterPage() {
  return (
    <main className="overflow-x-hidden min-h-screen bg-white">
      <Navbar />

      <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 hero-glow">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
          <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-orange-100/40 rounded-full blur-3xl" />
        </div>

        <div className="max-w-lg mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
              <ShieldCheck size={14} className="text-primary" />
              <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                Secure Payment
              </span>
            </div>

            <h1 className="text-3xl sm:text-4xl font-black text-dark mb-4 leading-tight">
              Vendor Registration Fee
            </h1>

            <p className="text-gray-500 leading-relaxed">
              Pay your LunchPe registration fee to get started. Payments are processed
              securely by Razorpay.
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl border border-gray-100 p-8">
            <div className="space-y-3 mb-8">
              {steps.map((step, index) => (
                <div key={step} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-primary flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-600">
                    <span className="font-semibold text-dark">{index + 1}. </span>
                    {step}
                  </p>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-100 pt-8">
              <RazorpayPaymentButton />
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              Need help? Email{" "}
              <a
                href="mailto:developer@lunchpe.com"
                className="text-primary hover:underline font-medium"
              >
                developer@lunchpe.com
              </a>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
