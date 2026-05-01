import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

const testimonials = [
  {
    name: 'Mark D.',
    role: 'Pokemon TCG Seller',
    text: 'Dati 2 hours bago matapos ang listings ko. Ngayon 15 minutes lang. Sobrang game changer!',
    stars: 5,
  },
  {
    name: 'Jessa R.',
    role: 'One Piece TCG Seller',
    text: 'Yung profit tracker lang sulit na. Finally alam ko na kung kumikita talaga ako or hindi.',
    stars: 5,
  },
  {
    name: 'Carlo M.',
    role: 'Yu-Gi-Oh! Seller',
    text: 'The AI scanner is insane. Photo lang tapos auto-fill na lahat. Worth every peso ng Pro plan.',
    stars: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container max-w-5xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-4">
            What Sellers Are <span className="text-gold">Saying</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="p-6 rounded-xl border border-white/10 bg-dark-card"
            >
              <div className="flex gap-1 mb-3">
                {Array.from({ length: t.stars }).map((_, si) => (
                  <Star key={si} size={14} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="text-sm text-gray-300 leading-relaxed mb-4">"{t.text}"</p>
              <div>
                <p className="text-sm font-semibold text-white">{t.name}</p>
                <p className="text-xs text-gray-500">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
