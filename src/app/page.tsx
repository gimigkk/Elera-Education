import { HeroSection } from "@/components/sections/hero-section";
import { UniversityMarquee } from "@/components/sections/university-marquee";

export default function Home() {
  return (
    <main className="site-frame">
      <HeroSection />
      <UniversityMarquee />
    </main>
  );
}
