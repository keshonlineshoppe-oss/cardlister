import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } },
};

const steps = [
  {
    step: '01',
    title: 'Scan or Upload',
    desc: 'Take a photo of your card or upload from gallery. Our AI identifies it instantly.',
  },
  {
    step: '02',
    title: 'Review & Price',
    desc: 'Check the auto-filled details, set your price, and add any notes.',
  },
  {
    step: '03',
    title: 'Post & Sell',
    desc: 'One click to post sa Facebook groups. Done — you\'re selling!',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container max-w-4xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-4">
            How It Works — <span className="text-gold">3 Easy Steps</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((item, i) => (
            <motion.div key={i} variants={fadeUp} className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full border-2 border-gold/50 flex items-center justify-center">
                <span className="text-xl font-bold font-display text-gold">{item.step}</span>
              </div>
              <h3 className="text-lg font-semibold font-display text-white mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
