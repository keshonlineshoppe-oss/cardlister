import { motion } from 'framer-motion';
import { Trash2, Mail, CheckCircle } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

export default function DataDeletion() {
  return (
    <div className="overflow-hidden">
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center">
                <Trash2 size={20} className="text-red-400" />
              </div>
              <div>
                <h1 className="text-3xl md:text-4xl font-bold font-display">Data Deletion</h1>
              </div>
            </motion.div>
            <motion.p variants={fadeUp} className="text-sm text-gray-500 mb-10">
              Last updated: May 1, 2026
            </motion.p>

            <motion.div variants={fadeUp} className="space-y-8">
              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">Your Right to Data Deletion</h2>
                <p className="text-gray-400 leading-relaxed">
                  In compliance with Meta's Platform Terms and data protection regulations, you have the right to request complete deletion of your data from CardLister PH at any time. We take your privacy seriously and will process all deletion requests promptly.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">What Gets Deleted</h2>
                <p className="text-gray-400 leading-relaxed mb-3">
                  When you request data deletion, we will permanently remove:
                </p>
                <ul className="space-y-2">
                  {[
                    'Your account profile and login credentials',
                    'All card listings you created',
                    'Profit tracking and sales data',
                    'Facebook access tokens and permissions',
                    'Subscription and billing history',
                    'Any saved preferences and settings',
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-2 text-gray-400">
                      <CheckCircle size={16} className="text-[#4CAF84] shrink-0 mt-0.5" />
                      <span className="text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">How to Request Deletion</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-base font-medium text-white mb-2">Option 1: In-App Deletion</h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      If you have access to your account, go to <strong className="text-white">Settings → Account → Delete My Data</strong>. This will immediately begin the deletion process.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-base font-medium text-white mb-2">Option 2: Email Request</h3>
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                        <Mail size={18} className="text-gold" />
                      </div>
                      <div>
                        <p className="text-gray-300 leading-relaxed mb-3 text-sm">
                          If you cannot access your account, you can request data deletion by emailing us directly:
                        </p>
                        <a
                          href="mailto:support@cardlister.ph?subject=Data Deletion Request"
                          className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gold/10 border border-gold/30 text-gold text-sm font-medium hover:bg-gold/20 transition-colors"
                        >
                          <Mail size={14} /> support@cardlister.ph
                        </a>
                        <p className="text-sm text-gray-500 mt-3">
                          Please include the email address associated with your account. We will verify your identity before processing the request.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">Processing Timeline</h2>
                <div className="grid sm:grid-cols-3 gap-4">
                  {[
                    { time: '24 hours', desc: 'Account deactivated and access revoked' },
                    { time: '7 days', desc: 'All personal data removed from active systems' },
                    { time: '30 days', desc: 'Data purged from all backups and archives' },
                  ].map((item, i) => (
                    <div key={i} className="p-4 rounded-xl border border-white/10 bg-[#111111] text-center">
                      <div className="text-lg font-bold font-display text-gold mb-1">{item.time}</div>
                      <p className="text-xs text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">Facebook Data</h2>
                <p className="text-gray-400 leading-relaxed text-sm">
                  When you delete your data from CardLister PH, we also revoke all Facebook permissions and delete any stored Facebook tokens. You can also remove CardLister PH from your Facebook account by going to{' '}
                  <strong className="text-white">Facebook Settings → Apps and Websites → CardLister PH → Remove</strong>.
                </p>
              </section>

              <section>
                <h2 className="text-xl font-semibold font-display text-white mb-3">Questions?</h2>
                <p className="text-gray-400 leading-relaxed text-sm">
                  If you have any questions about data deletion, please contact us at{' '}
                  <a href="mailto:support@cardlister.ph" className="text-gold hover:underline">support@cardlister.ph</a>{' '}
                  or visit our <a href="/privacy" className="text-gold hover:underline">Privacy Policy</a> for more information.
                </p>
              </section>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
