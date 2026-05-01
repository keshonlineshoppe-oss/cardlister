import Hero from '../components/Hero';
import Problem from '../components/Problem';
import Benefits from '../components/Benefits';
import HowItWorks from '../components/HowItWorks';
import Trust from '../components/Trust';
import PricingSection from '../components/PricingSection';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FinalCTA from '../components/FinalCTA';

export default function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <Problem />
      <Benefits />
      <HowItWorks />
      <Trust />
      <PricingSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
    </div>
  );
}
