"use client";

import "./promo-marquee.css";
import { promoItems } from "@/data/promo";

export function PromoMarquee() {
  // Duplicate 4 times to ensure seamless infinite loop going right
  const items = [...promoItems, ...promoItems, ...promoItems, ...promoItems];

  return (
    <div className="promo-marquee-section" aria-label="Pengumuman Promo & Diskon">
      <div className="promo-marquee-track-wrapper">
        <div className="promo-marquee-track">
          {items.map((item, idx) => (
            <div key={`${item.id}-${idx}`} className="promo-marquee-item">
              <span className="promo-marquee__text">{item.text}</span>
              <span className="promo-marquee__sep">;</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
