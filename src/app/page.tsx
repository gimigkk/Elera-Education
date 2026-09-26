import { HeroSection } from "@/components/sections/hero-section";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { TestimonialsSection } from "@/components/sections/testimonials-section";
import { CtaSection } from "@/components/sections/cta-section";
import { FooterSection } from "@/components/sections/footer-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="site-frame">
        <ValuePropsSection />
        <PricingSection />
        <CtaSection />
        <TestimonialsSection />
      </div>
      <FooterSection />
    </main>
  );
}

