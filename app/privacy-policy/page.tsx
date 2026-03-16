import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Privacy Policy - LunchPe Apps",
  description:
    "LunchPe Privacy Policy. Learn how we collect, use, disclose, and safeguard your information when you use the LunchPe Vendor App or Customer App.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-x-hidden min-h-screen bg-white">
      <Navbar />
      <article className="pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-primary border-b-2 border-primary pb-2 mb-6">
            Privacy Policy
          </h1>
          <p className="bg-primary/5 text-gray-800 font-semibold py-3 px-4 rounded-lg mb-8">
            Last Updated: March 2026
          </p>

          <div className="prose prose-gray max-w-none space-y-6">
            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">1. Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                Welcome to LunchPe (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;). We operate two mobile applications: the <strong>LunchPe Vendor App</strong> (for tiffin vendors to manage customers, orders, menus, and payments) and the <strong>LunchPe Customer App</strong> (for customers to browse menus, place orders, manage subscriptions, and make payments). We are committed to protecting your privacy and the security of your personal information.
              </p>
              <p className="text-gray-600 leading-relaxed">
                This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use either the LunchPe Vendor App or the LunchPe Customer App. By using our apps, you agree to this policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">2. Information We Collect</h2>
              <p className="text-gray-600 leading-relaxed">We collect the following types of information. The data collected depends on which app you use:</p>

              <p className="text-gray-600 leading-relaxed mt-4 font-medium">Common to Both Apps</p>
              <p className="text-gray-600 leading-relaxed text-sm mt-1">Account & Profile Information:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Phone number (for login via OTP)</li>
                <li>Name and email address</li>
                <li>Profile photo (optional)</li>
              </ul>
              <p className="text-gray-600 leading-relaxed text-sm mt-2">Device Information:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Device token for push notifications</li>
                <li>Device type (Android) and device identifier</li>
              </ul>

              <p className="text-gray-600 leading-relaxed mt-4 font-medium">Vendor App Only</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Tiffin center name, profile/logo</li>
                <li>UPI ID for receiving payments, QR code image for payment setup</li>
                <li>Customer information (name, phone, email) that you add</li>
                <li>Orders, meal plans, weekly menus, payment records and verification status</li>
              </ul>

              <p className="text-gray-600 leading-relaxed mt-4 font-medium">Customer App Only</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Delivery address(es)</li>
                <li>Order history and subscriptions/meal plans</li>
                <li>Payment information (UPI) for paying vendors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">3. How We Collect Information</h2>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li><strong>Directly from you:</strong> When you register, complete your profile, add customers (Vendor) or delivery addresses (Customer), or set up payment methods</li>
                <li><strong>Through the app:</strong> Via Firebase Phone Auth (OTP) for login; camera for QR code capture (Vendor) or profile photo (both apps)</li>
                <li><strong>Automatically:</strong> Device tokens for push notifications when you enable them</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">4. How We Use Your Information</h2>
              <p className="text-gray-600 leading-relaxed">We use your information to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mt-2">
                <li>Authenticate your identity via phone OTP (Firebase)</li>
                <li>Provide and maintain the app (dashboard, orders, customers, menus for Vendors; orders, subscriptions, deliveries for Customers)</li>
                <li>Send push notifications about orders, payments, and updates</li>
                <li>Process payments (UPI/QR-based for Vendors; UPI for Customers)</li>
                <li>Store your data securely on our servers (lunchpe.brahmastack.com)</li>
                <li>Improve our services and fix issues</li>
                <li>Comply with legal obligations</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">5. Device Permissions</h2>
              <p className="text-gray-600 leading-relaxed">Our apps may request the following permissions:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mt-2">
                <li><strong>Camera:</strong> Vendor App — to capture QR code images for payment setup; both apps — for profile photos</li>
                <li><strong>Storage/Photos:</strong> To save and access QR code (Vendor) and profile images</li>
                <li><strong>Notifications:</strong> To send push notifications about orders and payments</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                You can revoke these permissions at any time through your device settings. Some features may not work without them.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">6. Third-Party Services</h2>
              <p className="text-gray-600 leading-relaxed">We use these third-party services:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mt-2">
                <li><strong>Firebase (Google):</strong> Phone authentication (OTP), push notifications (Cloud Messaging)</li>
                <li><strong>Google:</strong> Firebase services are operated by Google; their privacy policy applies:{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://policies.google.com/privacy
                  </a>
                </li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">We do not sell your data to third parties.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">7. Data Storage and Security</h2>
              <p className="text-gray-600 leading-relaxed">Your data is stored on our servers hosted at lunchpe.brahmastack.com. We use:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mt-2">
                <li>Secure storage for authentication tokens</li>
                <li>HTTPS for all data transmission</li>
                <li>Access controls and secure practices</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">
                No method of transmission over the internet is 100% secure. We strive to protect your information but cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">8. Data Sharing</h2>
              <p className="text-gray-600 leading-relaxed">We do not sell, trade, or rent your personal information. We may share information only:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mt-2">
                <li>With your consent</li>
                <li>To comply with laws or legal requests</li>
                <li>To protect our rights or prevent fraud</li>
                <li>With service providers (e.g., Firebase) who assist us under strict confidentiality</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">9. Your Rights</h2>
              <p className="text-gray-600 leading-relaxed">You have the right to:</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600 mt-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Opt out of push notifications (device settings)</li>
                <li>Withdraw consent</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">To exercise these rights, contact us using the details below.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">10. Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We retain your data as long as your account is active and as needed to provide our services or comply with legal obligations. When you delete your account, we will delete or anonymize your personal information except where required by law.
              </p>
            </section>

            <section id="delete-account">
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">11. LunchPe Vendor App – Account & Data Deletion</h2>
              <p className="text-gray-600 leading-relaxed font-medium">How to request deletion</p>
              <p className="text-gray-600 leading-relaxed">
                To request deletion of your LunchPe Vendor account and associated data:
              </p>
              <ol className="list-decimal pl-6 space-y-1 text-gray-600 mt-2">
                <li>Email us at: <a href="mailto:developer@lunchpe.com" className="text-primary hover:underline">developer@lunchpe.com</a> with subject &quot;Account Deletion Request&quot;</li>
                <li>Include your registered phone number used in the app</li>
                <li>We will process your request within 30 days</li>
              </ol>
              <p className="text-gray-600 leading-relaxed mt-4 font-medium">What we delete</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Account/profile information (name, email, phone, tiffin center name)</li>
                <li>Logo and payment QR images</li>
                <li>Device token for notifications</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-4 font-medium">What we may retain</p>
              <ul className="list-disc pl-6 space-y-1 text-gray-600">
                <li>Order and payment records as required by law (tax, accounting)</li>
                <li>Anonymized or aggregated data for analytics</li>
              </ul>
              <p className="text-gray-600 leading-relaxed mt-3">We do not sell your data.</p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">12. Children&apos;s Privacy</h2>
              <p className="text-gray-600 leading-relaxed">
                Our apps are not intended for users under 13. We do not knowingly collect information from children. If you believe we have collected data from a child, please contact us immediately.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">13. Changes to This Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you by updating the &quot;Last Updated&quot; date or through the app. Continued use after changes means you accept the updated policy.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-gray-900 mt-8 mb-3">14. Contact Us</h2>
              <div className="bg-gray-100 p-6 rounded-lg mt-4">
                <p className="font-semibold text-gray-900">LunchPe Support</p>
                <p className="text-gray-600">Email: developer@lunchpe.com</p>
                {/* <p className="text-gray-600">
                  Website:{" "}
                  <a href="https://lunchpe.brahmastack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    https://lunchpe.brahmastack.com
                  </a>
                </p> */}
                <p className="text-gray-600">Location: Jaipur, Rajasthan, India</p>
                <br />
                <p className="font-semibold text-gray-900">Technical & Development</p>
                <p className="text-gray-600">Brahma Stack Technologies</p>
                <p className="text-gray-600">Email: contact@brahmastack.com</p>
                <p className="text-gray-600">
                  Website:{" "}
                  <a href="https://www.brahmastack.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                    www.brahmastack.com
                  </a>
                </p>
              </div>
            </section>
          </div>
        </div>
      </article>
      <Footer />
    </main>
  );
}
