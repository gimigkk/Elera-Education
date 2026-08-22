"use client";

import "./promo-marquee.css";
import { promoItems } from "@/data/promo";
import { FloatUp } from "@/components/ui/float-up";

export function PromoMarquee() {
  // Duplicate 4 times to ensure seamless infinite loop going right
  const items = [...promoItems, ...promoItems, ...promoItems, ...promoItems];

  return (
    <div className="promo-marquee-section" aria-label="Pengumuman Promo & Diskon">
      <div className="promo-marquee-track-wrapper">
        <div className="promo-marquee-track">
          {items.map((item, idx) => (
            <FloatUp
              key={`${item.id}-${idx}`}
              staggerIndex={idx % promoItems.length}
              staggerStep={75}
              distance={14}
              blur={6}
              className="promo-marquee-item"
            >
              <span className="promo-marquee__text">{item.text}</span>
              <span className="promo-marquee__sep">;</span>
            </FloatUp>
          ))}
        </div>
      </div>
    </div>
  );
}
