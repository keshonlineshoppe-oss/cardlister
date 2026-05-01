import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const painPoints = [
  { text: 'Isa-isang type ng card name, price, at condition — nakakapagod', icon: '😤' },
  { text: 'Copy-paste sa iba\'t ibang groups — ang tagal', icon: '⏰' },
  { text: 'Hindi mo alam kung kumikita ka ba talaga o lugi', icon: '📉' },
  { text: 'Natatakot sa scammers at bogus buyers', icon: '🚨' },
];

export default function Problem() {
  return (
    <>
      <section className="py-16 md:py-24 bg-dark">
        <div className="container max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="text-center mb-12"
          >
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-4">
              Pagod ka na ba sa <span className="text-gold">manual listing?</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg">
              Alam namin ang struggle. Kasi dati, ganyan din kami.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
            className="grid md:grid-cols-2 gap-6"
          >
            {painPoints.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                className="flex items-start gap-4 p-5 rounded-xl border border-white/10 bg-dark-card hover:border-gold/30 transition-colors"
              >
                <span className="text-2xl">{item.icon}</span>
                <p className="text-gray-300">{item.text}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA After Problem */}
      <section className="py-12 md:py-16 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(201,168,76,0.04),transparent_70%)]" />
        <div className="container relative z-10 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl md:text-3xl font-bold font-display mb-3">
            May mas madali nang paraan.
          </h3>
          <p className="text-gray-400 mb-6">
            Hindi mo na kailangan mag-suffer. Let CardLister do the heavy lifting.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="/app"
              className="inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-gold to-gold-dark text-black transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:scale-[1.02]"
            >
              Start Free — No Credit Card
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

      {/* Solution Transition */}
      <section className="py-16 md:py-24 relative">
        <div className="section-divider mb-16" />
        <div className="container max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            variants={stagger}
          >
            <motion.p variants={fadeUp} className="text-green font-medium mb-3 uppercase tracking-wider text-sm">
              The Solution
            </motion.p>
            <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-6">
              CardLister PH — Your <span className="text-gold">Listing Superpower</span>
            </motion.h2>
            <motion.p variants={fadeUp} className="text-gray-400 text-lg max-w-2xl mx-auto">
              Built by Filipino TCG sellers, for Filipino TCG sellers. We turned hours of work into minutes — so you can focus on what matters: selling and collecting.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
