"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { CheckCircle2, Loader2 } from "lucide-react";

type FormValues = {
  name: string;
  phone: string;
  city: string;
  businessName: string;
  customerCount: string;
};

export default function WaitlistForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = async (data: FormValues) => {
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1200));
    console.log("Vendor Waitlist Submission:", data);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="waitlist" className="py-20 lg:py-28 bg-gray-50/50 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-orange-100/30 rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 bg-orange-50 border border-orange-200 rounded-full px-4 py-1.5 mb-4">
            <span className="text-xs font-semibold text-primary uppercase tracking-wider">Join the Waitlist</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-dark mb-4 leading-tight">
            Be the First to Get
            <br />
            <span className="gradient-text">Early Access</span>
          </h2>
          <p className="text-gray-500 leading-relaxed">
            Join 25+ tiffin vendors already on the waitlist. Early members get 3 months free.
          </p>
        </motion.div>

        {/* Form Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8"
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4 }}
              className="py-10 text-center"
            >
              <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mx-auto mb-5">
                <CheckCircle2 size={32} className="text-green-500" />
              </div>
              <h3 className="font-black text-dark text-xl mb-2">You're on the list! 🎉</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">
                Thanks for joining! We'll reach out to you soon with your early access details and onboarding guide.
              </p>
              <div className="mt-6 inline-flex items-center gap-2 bg-primary/10 text-primary text-sm font-semibold px-4 py-2 rounded-full">
                📱 Check your WhatsApp for updates
              </div>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">
                    Your Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("name", { required: "Name is required" })}
                    placeholder="Ramesh Sharma"
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${
                      errors.name ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50/50"
                    }`}
                  />
                  {errors.name && (
                    <p className="text-xs text-red-400 mt-1">{errors.name.message}</p>
                  )}
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">
                    Phone Number <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm text-gray-400 font-medium">+91</span>
                    <input
                      {...register("phone", {
                        required: "Phone is required",
                        pattern: { value: /^[6-9]\d{9}$/, message: "Enter valid 10-digit number" },
                      })}
                      placeholder="9876543210"
                      maxLength={10}
                      className={`w-full border rounded-xl pl-12 pr-4 py-3 text-sm text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${
                        errors.phone ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50/50"
                      }`}
                    />
                  </div>
                  {errors.phone && (
                    <p className="text-xs text-red-400 mt-1">{errors.phone.message}</p>
                  )}
                </div>

                {/* City */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">
                    City <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("city", { required: "City is required" })}
                    placeholder="Jaipur, Rajasthan"
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${
                      errors.city ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50/50"
                    }`}
                  />
                  {errors.city && (
                    <p className="text-xs text-red-400 mt-1">{errors.city.message}</p>
                  )}
                </div>

                {/* Business Name */}
                <div>
                  <label className="block text-sm font-semibold text-dark mb-1.5">
                    Tiffin Business Name <span className="text-red-400">*</span>
                  </label>
                  <input
                    {...register("businessName", { required: "Business name is required" })}
                    placeholder="Sharma Tiffin Service"
                    className={`w-full border rounded-xl px-4 py-3 text-sm text-dark placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors ${
                      errors.businessName ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50/50"
                    }`}
                  />
                  {errors.businessName && (
                    <p className="text-xs text-red-400 mt-1">{errors.businessName.message}</p>
                  )}
                </div>
              </div>

              {/* Customer Count */}
              <div>
                <label className="block text-sm font-semibold text-dark mb-1.5">
                  Number of Current Customers <span className="text-red-400">*</span>
                </label>
                <select
                  {...register("customerCount", { required: "Please select customer count" })}
                  className={`w-full border rounded-xl px-4 py-3 text-sm text-dark focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors appearance-none bg-no-repeat ${
                    errors.customerCount ? "border-red-300 bg-red-50" : "border-gray-200 bg-gray-50/50"
                  }`}
                  style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E\")", backgroundPosition: "right 16px center", backgroundSize: "16px" }}
                >
                  <option value="">Select range</option>
                  <option value="1-25">1 – 25 customers</option>
                  <option value="26-50">26 – 50 customers</option>
                  <option value="51-100">51 – 100 customers</option>
                  <option value="101-250">101 – 250 customers</option>
                  <option value="250+">250+ customers</option>
                </select>
                {errors.customerCount && (
                  <p className="text-xs text-red-400 mt-1">{errors.customerCount.message}</p>
                )}
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-primary-600 disabled:opacity-70 text-white font-bold py-4 rounded-xl text-sm shadow-xl shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] disabled:scale-100 transition-all duration-200 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Joining waitlist...
                  </>
                ) : (
                  "Join Vendor Waitlist →"
                )}
              </button>

              <p className="text-center text-xs text-gray-400 mt-3">
                🔒 Your data is safe with us. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
