import { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.05 } },
};

const faqs = [
  {
    q: 'Anong TCG ang supported?',
    a: 'Pokemon, One Piece, Yu-Gi-Oh!, Magic: The Gathering, Digimon, and more. We\'re always adding new games based on community requests.',
  },
  {
    q: 'Kailangan ba ng Facebook account?',
    a: 'Yes, we use Facebook Login for authentication and to enable posting to your groups and pages. We never post without your permission.',
  },
  {
    q: 'Pwede ba i-cancel anytime?',
    a: 'Absolutely! No lock-in contracts. Cancel anytime from your account settings. You keep access until the end of your billing period.',
  },
  {
    q: 'Paano gumagana yung AI Scanner?',
    a: 'Take a photo of any card — our AI identifies the card name, set, rarity, and condition. It auto-fills your listing in seconds. Available on the Pro plan.',
  },
  {
    q: 'Safe ba ang data ko?',
    a: 'Yes. We use industry-standard encryption and secure cloud storage. We never sell your data. Read our Privacy Policy for full details.',
  },
  {
    q: 'May refund ba?',
    a: 'Yes! We offer a 7-day money-back guarantee for first-time subscribers. No questions asked.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 md:py-24 bg-dark">
      <div className="container max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="text-center mb-12"
        >
          <motion.h2 variants={fadeUp} className="text-3xl md:text-4xl font-bold font-display mb-4">
            Frequently Asked <span className="text-gold">Questions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={stagger}
          className="space-y-3"
        >
          {faqs.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="border border-white/10 rounded-xl overflow-hidden bg-dark-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left"
              >
                <span className="text-sm font-medium text-white pr-4">{faq.q}</span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === i ? 'auto' : 0,
                  opacity: openIndex === i ? 1 : 0,
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-5 pb-5">
                  <p className="text-sm text-gray-400 leading-relaxed">{faq.a}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
