import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, ChevronDown, ArrowRight } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const plans = [
  {
    name: 'Free',
    price: '₱0',
    period: 'forever',
    desc: 'Para masubukan mo muna',
    cta: 'https://app.cardlister.ph/signup',
    ctaLabel: 'Get Started',
    highlight: false,
    features: [
      { text: '5 listings per month', included: true },
      { text: 'Basic listing template', included: true },
      { text: 'FX Converter', included: true },
      { text: 'Profit Tracker', included: false },
      { text: 'Multi-group posting', included: false },
      { text: 'AI Card Scanner', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Basic',
    price: '₱199',
    period: '/month',
    desc: 'Mas mura pa sa milk tea',
    cta: 'https://app.cardlister.ph/checkout?plan=basic',
    ctaLabel: 'Start Basic',
    highlight: true,
    features: [
      { text: 'Unlimited listings', included: true },
      { text: 'All listing templates', included: true },
      { text: 'FX Converter', included: true },
      { text: 'Profit Tracker', included: true },
      { text: 'Multi-group posting', included: true },
      { text: 'AI Card Scanner', included: false },
      { text: 'Priority support', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '₱499',
    period: '/month',
    desc: 'Para sa serious sellers',
    cta: 'https://app.cardlister.ph/checkout?plan=pro',
    ctaLabel: 'Go Pro',
    highlight: false,
    features: [
      { text: 'Unlimited listings', included: true },
      { text: 'All listing templates', included: true },
      { text: 'FX Converter', included: true },
      { text: 'Profit Tracker', included: true },
      { text: 'Multi-group posting', included: true },
      { text: 'AI Card Scanner', included: true },
      { text: 'Priority support', included: true },
    ],
  },
];

const comparisonRows = [
  { feature: 'Monthly Listings', free: '5', basic: 'Unlimited', pro: 'Unlimited' },
  { feature: 'Listing Templates', free: 'Basic', basic: 'All', pro: 'All + Custom' },
  { feature: 'FX Converter', free: true, basic: true, pro: true },
  { feature: 'Profit Tracker', free: false, basic: true, pro: true },
  { feature: 'Multi-Group Posting', free: false, basic: true, pro: true },
  { feature: 'Countdown Timer', free: false, basic: true, pro: true },
  { feature: 'Blacklist Access', free: false, basic: true, pro: true },
  { feature: 'AI Card Scanner', free: false, basic: false, pro: true },
  { feature: 'Price Suggestions', free: false, basic: false, pro: true },
  { feature: 'Priority Support', free: false, basic: false, pro: true },
];

const faqs = [
  { q: 'Can I switch plans anytime?', a: 'Yes! Upgrade or downgrade anytime. Changes take effect on your next billing cycle.' },
  { q: 'Is there a free trial for paid plans?', a: 'We offer a 7-day money-back guarantee for first-time subscribers. Try it risk-free!' },
  { q: 'What payment methods do you accept?', a: 'GCash, Maya, credit/debit cards, and bank transfer via our payment partner.' },
  { q: 'Do prices include VAT?', a: 'Yes, all prices shown are final. No hidden fees or surprise charges.' },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-gold font-medium mb-3 uppercase tracking-wider text-sm">
              Pricing
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-display mb-6">
              Simple, <span className="text-gold">Honest Pricing</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              No hidden fees. No lock-in contracts. Start free, upgrade when you're ready.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="pb-16 md:pb-24">
        <div className="container">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
            className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
          >
            {plans.map((plan, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className={`relative p-6 rounded-xl border transition-all ${
                  plan.highlight
                    ? 'border-gold/60 bg-gradient-to-b from-gold/10 to-[#111111] scale-[1.02]'
                    : 'border-white/10 bg-[#111111] hover:border-gold/30'
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-bold bg-gold text-black rounded-full">
                    MOST POPULAR
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="text-lg font-semibold font-display text-white mb-1">{plan.name}</h3>
                  <p className="text-xs text-gray-500 mb-3">{plan.desc}</p>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-3xl font-bold font-display text-white">{plan.price}</span>
                    <span className="text-sm text-gray-400">{plan.period}</span>
                  </div>
                </div>

                <ul className="space-y-3 mb-6">
                  {plan.features.map((f, fi) => (
                    <li key={fi} className="flex items-center gap-2">
                      {f.included ? (
                        <Check size={14} className="text-[#4CAF84] shrink-0" />
                      ) : (
                        <X size={14} className="text-gray-600 shrink-0" />
                      )}
                      <span className={`text-sm ${f.included ? 'text-gray-300' : 'text-gray-600'}`}>
                        {f.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href={plan.cta}
                  className={`block w-full text-center px-5 py-3 text-sm font-semibold rounded-lg transition-all ${
                    plan.highlight
                      ? 'bg-gradient-to-r from-gold to-[#B8943F] text-black hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]'
                      : 'border border-gold/50 text-gold hover:bg-gold/10'
                  }`}
                >
                  {plan.ctaLabel}
                </a>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-16 md:py-24">
        <div className="container max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-center mb-10">
            Feature <span className="text-gold">Comparison</span>
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/10">
                  <th className="text-left py-3 px-4 text-gray-400 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Free</th>
                  <th className="text-center py-3 px-4 text-gold font-medium">Basic</th>
                  <th className="text-center py-3 px-4 text-gray-400 font-medium">Pro</th>
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 px-4 text-gray-300">{row.feature}</td>
                    {(['free', 'basic', 'pro'] as const).map((plan) => (
                      <td key={plan} className="text-center py-3 px-4">
                        {typeof row[plan] === 'boolean' ? (
                          row[plan] ? (
                            <Check size={16} className="text-[#4CAF84] mx-auto" />
                          ) : (
                            <X size={16} className="text-gray-600 mx-auto" />
                          )
                        ) : (
                          <span className="text-gray-300">{row[plan]}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24">
        <div className="container max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold font-display text-center mb-10">
            Pricing <span className="text-gold">FAQ</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="border border-white/10 rounded-xl overflow-hidden bg-[#111111]">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                  <ChevronDown
                    size={18}
                    className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                      openFaq === i ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <motion.div
                  initial={false}
                  animate={{ height: openFaq === i ? 'auto' : 0, opacity: openFaq === i ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden"
                >
                  <div className="px-5 pb-5">
                    <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="container relative z-10 max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Still thinking?
          </h2>
          <p className="text-gray-400 mb-6">Start free. No credit card needed. Upgrade when you see the results.</p>
          <a
            href="/app"
            className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-gold to-[#B8943F] text-black transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:scale-[1.02]"
          >
            Start Free Now <ArrowRight size={16} />
          </a>
        </div>
      </section>
    </div>
  );
}
