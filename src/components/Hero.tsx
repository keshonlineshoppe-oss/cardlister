import { motion } from 'framer-motion';
import { Zap, TrendingUp, Clock, ArrowRight, Check } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663594496679/3LNNiugeGyKA7zjNa4TQhv/hero-bg-9dXaCaykJqZ3VeNzCmMEyX.webp"
          alt=""
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/80 to-dark" />
      </div>

      <div className="container relative z-10 py-20 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-gold/5 mb-6">
              <Zap size={14} className="text-gold" />
              <span className="text-xs font-medium text-gold">List cards 10x faster</span>
            </motion.div>

            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              Stop Typing.{' '}
              <span className="text-gold">Start Selling.</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg md:text-xl text-gray-300 mb-4 max-w-lg">
              Ang pinaka-mabilis na card listing tool para sa Filipino TCG sellers. From photo to posted — in seconds, hindi oras.
            </motion.p>

            <motion.div variants={fadeUp} className="flex items-center gap-4 mb-8">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-green" />
                <span className="text-sm text-gray-400">2 minutes per listing</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp size={16} className="text-green" />
                <span className="text-sm text-gray-400">500+ sellers</span>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <a
                href="/app"
                className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-gold to-gold-dark text-black transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:scale-[1.02]"
              >
                Start Listing Free <ArrowRight size={16} />
              </a>
              <a
                href="/features"
                className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-lg border border-gold/50 text-gold hover:bg-gold/10 transition-all"
              >
                See How It Works
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-6 flex items-center gap-4 text-xs text-gray-500">
              <span className="flex items-center gap-1"><Check size={12} className="text-green" /> No credit card required</span>
              <span className="flex items-center gap-1"><Check size={12} className="text-green" /> Cancel anytime</span>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="hidden lg:block"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 to-green/20 rounded-2xl blur-3xl" />
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663594496679/3LNNiugeGyKA7zjNa4TQhv/cards-floating-BM5TYcRxkZYGtxsJk4gKEc.webp"
                alt="Trading cards floating"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
