import { HeroSection } from "@/components/sections/hero-section";
import { PromoMarquee } from "@/components/sections/promo-marquee";
import { UniversityMarquee } from "@/components/sections/university-marquee";
import { ValuePropsSection } from "@/components/sections/value-props-section";
import { PricingSection } from "@/components/sections/pricing-section";
import { CtaSection } from "@/components/sections/cta-section";

export default function Home() {
  return (
    <main className="site-frame">
      <HeroSection />
      <PromoMarquee />
      <UniversityMarquee />
      <ValuePropsSection />
      <PricingSection />
      <CtaSection />
    </main>
  );
}

