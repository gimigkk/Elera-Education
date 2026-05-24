import { HeroSection } from "@/components/sections/hero-section";
import { PromoMarquee } from "@/components/sections/promo-marquee";
import { UniversityMarquee } from "@/components/sections/university-marquee";
import { ValuePropsSection } from "@/components/sections/value-props-section";

export default function Home() {
  return (
    <main className="site-frame">
      <HeroSection />
      <PromoMarquee />
      <UniversityMarquee />
      <ValuePropsSection />
    </main>
  );
}
