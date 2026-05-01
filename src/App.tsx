import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import DataDeletion from './pages/DataDeletion';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#050505]">
      <div className="container py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold to-gold-dark flex items-center justify-center">
                <span className="text-sm font-bold text-black font-display">CL</span>
              </div>
              <span className="text-lg font-bold font-display text-white">
                CardLister<span className="text-gold">PH</span>
              </span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              The fastest card listing tool built specifically for Filipino TCG sellers.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-display">Product</h4>
            <ul className="space-y-2.5">
              <li><a href="/features" className="text-sm text-gray-400 hover:text-gold transition-colors">Features</a></li>
              <li><a href="/pricing" className="text-sm text-gray-400 hover:text-gold transition-colors">Pricing</a></li>
              <li><a href="/app" className="text-sm text-gray-400 hover:text-gold transition-colors">Get Started</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-display">Company</h4>
            <ul className="space-y-2.5">
              <li><a href="/contact" className="text-sm text-gray-400 hover:text-gold transition-colors">Contact</a></li>
              <li><a href="mailto:support@cardlister.ph" className="text-sm text-gray-400 hover:text-gold transition-colors">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white mb-4 font-display">Legal</h4>
            <ul className="space-y-2.5">
              <li><a href="/privacy" className="text-sm text-gray-400 hover:text-gold transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-sm text-gray-400 hover:text-gold transition-colors">Terms of Service</a></li>
              <li><a href="/data-deletion" className="text-sm text-gray-400 hover:text-gold transition-colors">Data Deletion</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} CardLister PH. All rights reserved.
          </p>
          <span className="text-xs text-gray-500">Made with 🇵🇭 for Filipino sellers</span>
        </div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen bg-dark text-white flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 md:pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/features" element={<Features />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/data-deletion" element={<DataDeletion />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
