import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const stats = [
  { value: '500+', label: 'Filipino Sellers' },
  { value: '10,000+', label: 'Cards Listed' },
  { value: '2 min', label: 'Avg. Listing Time' },
  { value: '24/7', label: 'Support' },
];

export default function Trust() {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="absolute inset-0 z-0">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663594496679/3LNNiugeGyKA7zjNa4TQhv/trust-section-bg-UradHPi8pC3d5wtZmsenxY.webp"
          alt=""
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-dark/80" />
      </div>
      <div className="container relative z-10 max-w-4xl mx-auto text-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-6">
            Built <span className="text-gold">By Filipinos</span>, For Filipinos
          </motion.h2>
          <motion.p variants={fadeUp} className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
            Hindi ito galing sa ibang bansa na hindi naiintindihan ang market natin. CardLister PH is made right here — by sellers who understand the hustle.
          </motion.p>
          <motion.div variants={fadeUp} className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="p-4">
                <div className="text-2xl md:text-3xl font-bold font-display text-gold">{stat.value}</div>
                <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
