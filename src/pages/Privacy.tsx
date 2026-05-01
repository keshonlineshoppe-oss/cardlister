import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

export default function Privacy() {
  return (
    <div className="overflow-hidden">
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-2">
              Privacy Policy
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sm text-gray-500 mb-10">
              Last updated: May 1, 2026
            </motion.p>

            <motion.div variants={fadeUp} className="prose prose-invert prose-sm max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">1. Introduction</h2>
                <p className="text-gray-400 leading-relaxed">
                  CardLister PH ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our web application and services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">2. Information We Collect</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  We collect information that you provide directly to us, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Account information (name, email address)</li>
                  <li>Profile information from Facebook Login</li>
                  <li>Card listing data you create within the app</li>
                  <li>Transaction and billing information</li>
                  <li>Communications you send to us</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">3. Facebook Login & Permissions</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  We use Facebook Login for authentication. When you sign in with Facebook, we request access to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li><strong className="text-white">Pages access</strong> — To post listings on your behalf to your connected Pages</li>
                  <li><strong className="text-white">Groups access</strong> — To post listings to Facebook Groups you select</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-3">
                  <strong className="text-white">We do NOT:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Store your Facebook password</li>
                  <li>Access your private messages</li>
                  <li>Post without your explicit permission</li>
                  <li>Access your friends list or personal photos</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">4. How We Use Your Information</h2>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>To provide and maintain our service</li>
                  <li>To process your card listings and post them to selected groups/pages</li>
                  <li>To track your sales and profit data</li>
                  <li>To communicate with you about your account</li>
                  <li>To improve our services and develop new features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">5. Data Storage & Security</h2>
                <p className="text-gray-400 leading-relaxed">
                  Your data is stored securely via Supabase, a trusted cloud database provider. We implement industry-standard security measures including encryption in transit and at rest, regular security audits, and access controls to protect your information.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">6. Data Sharing</h2>
                <p className="text-gray-400 leading-relaxed">
                  We do not sell, trade, or rent your personal information to third parties. We may share information only with service providers who assist us in operating our platform (e.g., payment processors, hosting providers), and only as necessary to provide our services.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">7. Data Deletion</h2>
                <p className="text-gray-400 leading-relaxed">
                  You have the right to request deletion of your data at any time. You can do so by:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400 mt-3">
                  <li>Visiting our <a href="/data-deletion" className="text-gold hover:underline">Data Deletion page</a></li>
                  <li>Emailing us at <a href="mailto:support@cardlister.ph" className="text-gold hover:underline">support@cardlister.ph</a></li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-3">
                  Upon request, we will delete all your personal data within 30 days, unless retention is required by law.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">8. Cookies & Tracking</h2>
                <p className="text-gray-400 leading-relaxed">
                  We use essential cookies to maintain your session and preferences. We use privacy-friendly analytics to understand how our service is used. We do not use invasive third-party tracking or sell data to advertisers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">9. Changes to This Policy</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the "Last updated" date.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">10. Contact Us</h2>
                <p className="text-gray-400 leading-relaxed">
                  If you have questions about this Privacy Policy, please contact us at{' '}
                  <a href="mailto:support@cardlister.ph" className="text-gold hover:underline">
                    support@cardlister.ph
                  </a>
                </p>
              </section>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
