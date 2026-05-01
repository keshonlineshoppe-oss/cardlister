import { motion } from 'framer-motion';
import { Camera, Zap, BarChart3, Shield, TrendingUp, Clock } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const benefits = [
  {
    icon: <Camera size={24} />,
    title: 'AI Card Scanner',
    desc: 'Snap a photo, get instant card details. No more manual typing ng card names.',
    highlight: true,
  },
  {
    icon: <Zap size={24} />,
    title: 'One-Click Listing',
    desc: 'Create complete listings in seconds. Auto-fill prices, conditions, and descriptions.',
    highlight: false,
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Profit Tracker',
    desc: 'See exactly how much you\'re earning. Track costs, sales, and net profit per card.',
    highlight: false,
  },
  {
    icon: <Shield size={24} />,
    title: 'Blacklist System',
    desc: 'Protect yourself from scammers. Community-powered blacklist ng bogus buyers.',
    highlight: false,
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'FX Converter',
    desc: 'Auto-convert USD prices to PHP. Always know the right selling price.',
    highlight: false,
  },
  {
    icon: <Clock size={24} />,
    title: 'Countdown Timer',
    desc: 'Create urgency sa listings mo. Limited-time offers that actually convert.',
    highlight: false,
  },
];

export default function Benefits() {
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
            Everything You Need to <span className="text-gold">Sell Smarter</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-400 text-lg">
            Tools na ginawa para sa totoong sellers — hindi lang features para sa show.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className={`p-6 rounded-xl border transition-all duration-300 hover:translate-y-[-2px] ${
                benefit.highlight
                  ? 'border-gold/50 bg-gradient-to-b from-gold/10 to-dark-card hover:border-gold'
                  : 'border-white/10 bg-dark-card hover:border-gold/30'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                benefit.highlight ? 'bg-gold/20 text-gold' : 'bg-green/20 text-green'
              }`}>
                {benefit.icon}
              </div>
              <h3 className="text-lg font-semibold font-display text-white mb-2">{benefit.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{benefit.desc}</p>
              {benefit.highlight && (
                <span className="inline-block mt-3 text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">
                  PRO Feature
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
