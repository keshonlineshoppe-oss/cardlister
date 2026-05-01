import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, MapPin, Clock, Send } from 'lucide-react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.08 } },
};

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setSubmitted(false), 4000);
    }, 1500);
  };

  return (
    <div className="overflow-hidden">
      {/* Hero */}
      <section className="py-16 md:py-24 relative">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(201,168,76,0.06),transparent_60%)]" />
        <div className="container relative z-10 max-w-4xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={stagger}>
            <motion.p variants={fadeUp} className="text-gold font-medium mb-3 uppercase tracking-wider text-sm">
              Contact Us
            </motion.p>
            <motion.h1 variants={fadeUp} className="text-4xl md:text-5xl font-bold font-display mb-6">
              Get In <span className="text-gold">Touch</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-lg text-gray-400 max-w-2xl mx-auto">
              Have questions? Need help? We're here for you. Send us a message and we'll respond within 24 hours.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="pb-16 md:pb-24">
        <div className="container max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Info */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={stagger}
              className="lg:col-span-2"
            >
              <motion.h2 variants={fadeUp} className="text-2xl font-bold font-display text-white mb-6">
                Contact Information
              </motion.h2>

              <div className="space-y-6">
                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <Mail size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Email</p>
                    <a href="mailto:support@cardlister.ph" className="text-sm text-gray-400 hover:text-gold transition-colors">
                      support@cardlister.ph
                    </a>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-[#4CAF84]/10 flex items-center justify-center shrink-0">
                    <Clock size={18} className="text-[#4CAF84]" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Response Time</p>
                    <p className="text-sm text-gray-400">Within 24 hours</p>
                  </div>
                </motion.div>

                <motion.div variants={fadeUp} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center shrink-0">
                    <MapPin size={18} className="text-gold" />
                  </div>
                  <div>
                    <p className="text-sm font-medium text-white mb-1">Location</p>
                    <p className="text-sm text-gray-400">Philippines</p>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={fadeUp} className="mt-10 p-5 rounded-xl border border-white/10 bg-[#111111]">
                <p className="text-sm text-gray-300 leading-relaxed">
                  For urgent issues with your account or billing, please include your registered email address in your message so we can assist you faster.
                </p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <form onSubmit={handleSubmit} className="p-6 md:p-8 rounded-xl border border-white/10 bg-[#111111]">
                {submitted && (
                  <div className="mb-6 p-4 rounded-lg bg-[#4CAF84]/10 border border-[#4CAF84]/30 text-[#4CAF84] text-sm">
                    Message sent! We'll get back to you within 24 hours.
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4 mb-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Subject</label>
                  <input
                    type="text"
                    required
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors"
                    placeholder="How can we help?"
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                  <textarea
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 rounded-lg bg-dark border border-white/10 text-white text-sm placeholder:text-gray-600 focus:border-gold/50 focus:outline-none focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
                    placeholder="Tell us more about your question or concern..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3 rounded-lg bg-gradient-to-r from-gold to-[#B8943F] text-black font-semibold text-sm transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:scale-[1.02] disabled:opacity-50 disabled:hover:scale-100 flex items-center justify-center gap-2"
                >
                  {isSubmitting ? 'Sending...' : <><Send size={16} /> Send Message</>}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
