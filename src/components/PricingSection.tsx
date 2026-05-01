import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const plans = [
  {
    name: 'Free',
    price: '₱0',
    period: 'forever',
    desc: 'Para masubukan mo muna',
    cta: '/app',
    ctaLabel: 'Get Started',
    highlight: false,
    features: [
      { text: '5 listings per month', included: true },
      { text: 'Basic listing template', included: true },
      { text: 'FX Converter', included: true },
      { text: 'Profit Tracker', included: false },
      { text: 'Multi-group posting', included: false },
      { text: 'AI Card Scanner', included: false },
    ],
  },
  {
    name: 'Basic',
    price: '₱199',
    period: '/month',
    desc: 'Mas mura pa sa milk tea',
    cta: '/checkout?plan=basic',
    ctaLabel: 'Start Basic',
    highlight: true,
    features: [
      { text: 'Unlimited listings', included: true },
      { text: 'All listing templates', included: true },
      { text: 'FX Converter', included: true },
      { text: 'Profit Tracker', included: true },
      { text: 'Multi-group posting', included: true },
      { text: 'AI Card Scanner', included: false },
    ],
  },
  {
    name: 'Pro',
    price: '₱499',
    period: '/month',
    desc: 'Para sa serious sellers',
    cta: '/checkout?plan=pro',
    ctaLabel: 'Go Pro',
    highlight: false,
    features: [
      { text: 'Unlimited listings', included: true },
      { text: 'All listing templates', included: true },
      { text: 'FX Converter', included: true },
      { text: 'Profit Tracker', included: true },
      { text: 'Multi-group posting', included: true },
      { text: 'AI Card Scanner', included: true },
    ],
  },
];

export default function PricingSection() {
  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-4">
            Simple, <span className="text-gold">Honest Pricing</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            No hidden fees. No lock-in. Cancel anytime.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto"
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`relative p-6 rounded-xl border transition-all ${
                plan.highlight
                  ? 'border-gold/60 bg-gradient-to-b from-gold/10 to-dark-card scale-[1.02]'
                  : 'border-white/10 bg-dark-card hover:border-gold/30'
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
                      <Check size={14} className="text-green shrink-0" />
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
                    ? 'bg-gradient-to-r from-gold to-gold-dark text-black hover:shadow-[0_0_20px_rgba(201,168,76,0.4)]'
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
  );
}
