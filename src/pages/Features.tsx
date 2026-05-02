import { motion } from 'framer-motion';
import {
  Camera, FileText, Copy, DollarSign, BarChart3, Shield,
  Clock, TrendingUp, Zap, ArrowRight, Sparkles
} from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.06 } },
};

const featureGroups = [
  {
    title: 'Listing Tools',
    desc: 'Create professional listings in seconds',
    features: [
      {
        icon: <FileText size={22} />,
        title: 'Smart Templates',
        desc: 'Pre-built listing templates for every TCG. Auto-format card details, prices, and conditions.',
      },
      {
        icon: <Copy size={22} />,
        title: 'Multi-Group Posting',
        desc: 'Post to multiple Facebook groups with one click. No more copy-paste sa iba\'t ibang groups.',
      },
      {
        icon: <Clock size={22} />,
        title: 'Countdown Timer',
        desc: 'Add urgency to your listings with built-in countdown timers. Perfect for flash sales.',
      },
    ],
  },
  {
    title: 'Selling Tools',
    desc: 'Track, manage, and grow your sales',
    features: [
      {
        icon: <BarChart3 size={22} />,
        title: 'Profit Tracker',
        desc: 'Track every sale, cost, and profit. Know exactly how much you\'re earning per card and per month.',
      },
      {
        icon: <DollarSign size={22} />,
        title: 'FX Converter',
        desc: 'Real-time USD to PHP conversion. Always price your cards right based on current exchange rates.',
      },
      {
        icon: <Shield size={22} />,
        title: 'Blacklist System',
        desc: 'Community-powered buyer blacklist. Protect yourself and other sellers from scammers.',
      },
    ],
  },
  {
    title: 'Automation',
    desc: 'Let AI do the heavy lifting',
    features: [
      {
        icon: <Camera size={22} />,
        title: 'AI Card Scanner',
        desc: 'Snap a photo — our AI identifies the card, set, rarity, and condition. Auto-fills your entire listing.',
        highlight: true,
      },
      {
        icon: <Zap size={22} />,
        title: 'Quick Actions',
        desc: 'Keyboard shortcuts and quick actions for power sellers. List cards at lightning speed.',
      },
      {
        icon: <TrendingUp size={22} />,
        title: 'Price Suggestions',
        desc: 'Get market-based price suggestions for your cards. Never underprice or overprice again.',
      },
    ],
  },
];

export default function Features() {
  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-gold font-medium mb-3 uppercase tracking-wider text-sm">
              Features
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-display mb-6">
              Tools That <span className="text-gold">Actually Help</span> You Sell
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Every feature is built from real seller feedback. No bloat — just tools that make you money.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Feature Groups */}
      {featureGroups.map((group, gi) => (
        <section key={gi} className="py-12 md:py-16">
          <div className="container">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="mb-10"
            >
              <motion.h2 variants={fadeUp} className="text-2xl md:text-3xl font-bold font-display mb-2">
                {group.title}
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400">{group.desc}</motion.p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-100px' }}
              variants={stagger}
              className="grid md:grid-cols-3 gap-6"
            >
              {group.features.map((f, fi) => (
                <motion.div
                  key={fi}
                  variants={fadeUp}
                  className={`p-6 rounded-xl border transition-all duration-300 hover:translate-y-[-2px] ${
                    f.highlight
                      ? 'border-gold/50 bg-gradient-to-b from-gold/10 to-[#111111]'
                      : 'border-white/10 bg-[#111111] hover:border-gold/30'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-lg flex items-center justify-center mb-4 ${
                    f.highlight ? 'bg-gold/20 text-gold' : 'bg-[#4CAF84]/20 text-[#4CAF84]'
                  }`}>
                    {f.icon}
                  </div>
                  <h3 className="text-lg font-semibold font-display text-white mb-2">{f.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{f.desc}</p>
                  {f.highlight && (
                    <div className="mt-3 inline-flex items-center gap-1 text-xs font-medium text-gold bg-gold/10 px-2 py-1 rounded">
                      <Sparkles size={12} /> PRO Feature
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      ))}

      {/* Scanner Highlight */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-[#4CAF84]/20 rounded-2xl blur-3xl" />
                <img
                  src="https://d2xsxph8kpxj0f.cloudfront.net/310519663594496679/3LNNiugeGyKA7zjNa4TQhv/scanner-feature-AYhQgHXCzxHfhFnVKFqFNi.webp"
                  alt="AI Card Scanner"
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
            >
              <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-4">
                <Sparkles size={14} className="text-gold" />
                <span className="text-xs font-medium text-gold">AI-Powered</span>
              </motion.div>
              <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-4">
                AI Card Scanner
              </motion.h2>
              <motion.p variants={fadeUp} className="text-gray-400 mb-6">
                Point your camera at any trading card. Our AI instantly identifies the card name, set, rarity, and even estimates condition. Your listing is auto-filled in seconds.
              </motion.p>
              <motion.ul variants={fadeUp} className="space-y-3 mb-8">
                {['Supports Pokemon, One Piece, Yu-Gi-Oh! & more', 'Auto-fills card name, set, and rarity', 'Condition estimation with AI', 'Works with any camera or uploaded photo'].map((item, i) => (
                  <li key={i} className="flex items-center gap-2 text-sm text-gray-300">
                    <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                    {item}
                  </li>
                ))}
              </motion.ul>
              <motion.a
                variants={fadeUp}
                href="https://app.cardlister.ph/checkout?plan=pro"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold rounded-lg bg-gradient-to-r from-gold to-[#B8943F] text-black transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:scale-[1.02]"
              >
                Get Pro Access <ArrowRight size={16} />
              </motion.a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 md:py-20 relative">
        <div className="section-divider mb-16" />
        <div className="container max-w-2xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold font-display mb-4">
            Ready to try it?
          </h2>
          <p className="text-gray-400 mb-6">Start with the free plan. Upgrade when you're ready.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/app"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-gold to-[#B8943F] text-black transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:scale-[1.02]"
            >
              Start Free <ArrowRight size={16} />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-lg border border-gold/50 text-gold hover:bg-gold/10 transition-all"
            >
              View Pricing
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
