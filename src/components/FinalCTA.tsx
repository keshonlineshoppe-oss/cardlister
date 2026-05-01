import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

export default function FinalCTA() {
  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.08),transparent_60%)]" />
      <div className="container relative z-10 max-w-3xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-5xl font-bold font-display mb-6">
            Ready to <span className="text-gold">Level Up</span> Your Card Business?
          </motion.h2>
          <motion.p variants={fadeUp} className="text-lg text-gray-300 mb-8 max-w-xl mx-auto">
            Join 500+ Filipino TCG sellers who already made the switch. Start listing smarter today.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/app"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold rounded-lg bg-gradient-to-r from-gold to-gold-dark text-black transition-all hover:shadow-[0_0_30px_rgba(201,168,76,0.5)] hover:scale-[1.02]"
            >
              Start Listing Free <ArrowRight size={18} />
            </a>
            <a
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold rounded-lg border border-gold/50 text-gold hover:bg-gold/10 transition-all"
            >
              Compare Plans
            </a>
          </motion.div>

          <motion.div variants={fadeUp} className="mt-6 flex items-center justify-center gap-4 text-xs text-gray-500">
            <span className="flex items-center gap-1"><Check size={12} className="text-green" /> Free forever plan</span>
            <span className="flex items-center gap-1"><Check size={12} className="text-green" /> No credit card required</span>
            <span className="flex items-center gap-1"><Check size={12} className="text-green" /> Cancel anytime</span>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
