import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { href: '/', label: 'Home' },
  { href: '/features', label: 'Features' },
  { href: '/pricing', label: 'Pricing' },
  { href: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-dark/90 backdrop-blur-xl">
      <div className="container flex items-center justify-between h-16 md:h-20">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
            <span className="text-sm font-bold text-black font-display">CL</span>
          </div>
          <span className="text-lg font-bold font-display text-white">
            CardLister<span className="text-gold">PH</span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition-colors hover:text-gold ${
                pathname === link.href ? 'text-gold' : 'text-gray-300'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="/app"
            className="px-5 py-2.5 text-sm font-semibold rounded-lg bg-gradient-to-r from-gold to-gold-dark text-black transition-all hover:shadow-[0_0_20px_rgba(201,168,76,0.4)] hover:scale-105"
          >
            Start Free
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-300 hover:text-white"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-white/10 bg-dark/95 backdrop-blur-xl"
          >
            <div className="container py-4 flex flex-col gap-3">
              {links.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 text-base font-medium transition-colors ${
                    pathname === link.href ? 'text-gold' : 'text-gray-300'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="/app"
                className="mt-2 px-5 py-3 text-center text-sm font-semibold rounded-lg bg-gradient-to-r from-gold to-gold-dark text-black"
              >
                Start Free
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
