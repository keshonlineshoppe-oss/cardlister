import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

export default function Terms() {
  return (
    <div className="overflow-hidden">
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.h1 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-2">
              Terms of Service
            </motion.h1>
            <motion.p variants={fadeUp} className="text-sm text-gray-500 mb-10">
              Last updated: May 1, 2026
            </motion.p>

            <motion.div variants={fadeUp} className="prose prose-invert prose-sm max-w-none space-y-8">
              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">1. Acceptance of Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  By accessing or using CardLister PH ("the Service"), you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use the Service. These terms apply to all users, including visitors, registered users, and subscribers.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">2. Description of Service</h2>
                <p className="text-gray-400 leading-relaxed">
                  CardLister PH is a web-based tool that helps Trading Card Game (TCG) sellers create, manage, and post card listings to Facebook Pages and Groups. The Service includes features such as card scanning, listing creation, profit tracking, and other tools as described on our website.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">3. Account Registration</h2>
                <p className="text-gray-400 leading-relaxed">
                  To use certain features of the Service, you must create an account using Facebook Login. You are responsible for maintaining the confidentiality of your account and for all activities that occur under your account. You must be at least 18 years old to use this Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">4. Subscription & Billing</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  CardLister PH offers free and paid subscription plans:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li><strong className="text-white">Free Plan:</strong> Limited features, no payment required</li>
                  <li><strong className="text-white">Basic Plan (₱199/month):</strong> Full feature access as described on our Pricing page</li>
                  <li><strong className="text-white">Pro Plan (₱499/month):</strong> All Basic features plus AI Card Scanner and priority support</li>
                </ul>
                <p className="text-gray-400 leading-relaxed mt-3">
                  Paid subscriptions are billed monthly on the date of initial subscription. Prices are in Philippine Pesos (PHP) and are subject to change with 30 days notice.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">5. Cancellation & Refunds</h2>
                <p className="text-gray-400 leading-relaxed">
                  You may cancel your subscription at any time through your account settings. Upon cancellation, you will retain access to paid features until the end of your current billing period. We offer a 7-day money-back guarantee for first-time subscribers. After 7 days, no refunds will be issued for partial billing periods.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">6. Acceptable Use</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  You agree not to:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Use the Service for any illegal purpose</li>
                  <li>Post fraudulent, misleading, or counterfeit card listings</li>
                  <li>Attempt to gain unauthorized access to the Service</li>
                  <li>Interfere with or disrupt the Service's infrastructure</li>
                  <li>Use automated tools to scrape or extract data from the Service</li>
                  <li>Violate Facebook's Terms of Service while using our posting features</li>
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">7. Intellectual Property</h2>
                <p className="text-gray-400 leading-relaxed">
                  The Service, including its design, features, and content, is owned by CardLister PH and protected by intellectual property laws. You retain ownership of your card listing content but grant us a license to display and process it within the Service.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">8. Limitation of Liability</h2>
                <p className="text-gray-400 leading-relaxed">
                  CardLister PH is provided "as is" without warranties of any kind. We are not liable for any indirect, incidental, special, or consequential damages arising from your use of the Service. Our total liability shall not exceed the amount you paid us in the 12 months preceding the claim. We are not responsible for any losses resulting from transactions between buyers and sellers facilitated through our listing tools.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">9. Service Availability</h2>
                <p className="text-gray-400 leading-relaxed">
                  We strive to maintain 99.9% uptime but do not guarantee uninterrupted access. We may temporarily suspend the Service for maintenance, updates, or circumstances beyond our control. We will provide reasonable notice when possible.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">10. Termination</h2>
                <p className="text-gray-400 leading-relaxed">
                  We reserve the right to suspend or terminate your account if you violate these Terms. Upon termination, your right to use the Service ceases immediately. You may request deletion of your data per our Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">11. Changes to Terms</h2>
                <p className="text-gray-400 leading-relaxed">
                  We may modify these Terms at any time. We will notify users of material changes via email or in-app notification. Continued use of the Service after changes constitutes acceptance of the new Terms.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">12. Governing Law</h2>
                <p className="text-gray-400 leading-relaxed">
                  These Terms are governed by the laws of the Republic of the Philippines. Any disputes shall be resolved in the appropriate courts of the Philippines.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">13. Contact</h2>
                <p className="text-gray-400 leading-relaxed">
                  For questions about these Terms, contact us at{' '}
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
