"use client";

import "./university-marquee.css";
import { topUniversities } from "@/data/universities";

export function UniversityMarquee() {
  // Duplicate array 3 times for seamless 360-degree infinite marquee loop
  const marqueeItems = [...topUniversities, ...topUniversities, ...topUniversities];

  return (
    <section className="site-section uni-marquee-section" aria-label="Universitas Tentor">
      <div className="uni-marquee-track-wrapper">
        <div className="uni-marquee-track">
          {marqueeItems.map((uni, index) => (
            <div key={`${uni.id}-${index}`} className="uni-marquee-cell">
              <div className="uni-marquee-cell__inner">
                <div className="uni-marquee-cell__logo-box">
                  <div
                    className="uni-marquee-cell__logo-mask"
                    style={{
                      WebkitMaskImage: `url(${uni.logoUrl})`,
                      maskImage: `url(${uni.logoUrl})`,
                    }}
                    role="img"
                    aria-label={`${uni.name} Logo`}
                  />
                </div>
                <div className="uni-marquee-cell__text">
                  <span className="uni-marquee-cell__line">{uni.line1}</span>
                  <span className="uni-marquee-cell__line">{uni.line2}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
