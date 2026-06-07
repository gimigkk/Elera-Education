"use client";

import "./hero-section.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { starTutor, heroCTA } from "@/data/hero";
import { Navbar } from "@/components/ui/navbar";

const heroSlides = [
  {
    tag: "LOKASI",
    line1: "Bimbel Privat Yogya",
    line2: "Datang ke Rumah",
    cta: "LIHAT PAKET!",
    href: "#pricing",
  },
  {
    tag: "HASIL KARYA",
    line1: "100% Terbukti",
    line2: "Hasil Nyata & Teruji",
    cta: "LIHAT TESTIMONI!",
    href: "#testimonials",
  },
  {
    tag: "JADWAL",
    line1: "Fleksibel Waktu",
    line2: "Sesuai Kebutuhan Anak",
    cta: "KONSULTASI!",
    href: "https://wa.me/628129387076?text=Halo%2C%20saya%20ingin%20konsultasi%20jadwal",
  },
  {
    tag: "EDUKASI PEMULA",
    line1: "100% Didampingi",
    line2: "Mentor Ramah & Sabar",
    cta: "HUBUNGI KAMI!",
    href: "https://wa.me/628129387076?text=Halo%2C%20saya%20ingin%20tanya%20tentor",
  },
];

export function HeroSection() {
  const [featureIndex, setFeatureIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      {/* Top Navbar inside site frame */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="site-section hero-container">

        {/* ===================== DESKTOP LAYOUT ===================== */}
        <div className="hero-desktop">
          {/* Layer 0: Background image */}
          <div className="hero-container__bg">
            <Image
              src="/images/hero/test bg.png"
              alt="Campus background"
              fill
              priority
              sizes="(max-width: 1240px) 100vw, 1240px"
              style={{ objectFit: "cover", objectPosition: "center" }}
            />
          </div>

          {/* Layer 1: Left white dot-grid panel */}
          <div className="hero-container__overlay" />

          {/* Layer 2: Girl cutout centered at split */}
          <div className="hero-container__girl">
            <Image
              src="/images/hero/Girl test.png"
              alt={starTutor.name}
              fill
              priority
              sizes="500px"
              style={{ objectFit: "contain", objectPosition: "top center" }}
            />
          </div>

          {/* Layer 2.5: Corner Text Markers */}
          <div className="hero-corner hero-corner--top-left">| Bimbel Privat</div>
          <div className="hero-corner hero-corner--bottom-left">| Harga Ramah</div>
          <div className="hero-corner hero-corner--top-right">Jadwal Menyesuaikan |</div>
          <div className="hero-corner hero-corner--bottom-right">Hasil Terbuktikan |</div>

          {/* Layer 3: Grid Content */}
          <div className="hero-container__content">
            {/* LEFT — CTA */}
            <div className="hero-container__left">
              <div className="edukeo-brand">
                <h1 className="edukeo-brand__headline">
                  <span className="edukeo-brand__headline-sub">Bimbel Privat Yogya?</span>
                  <span className="edukeo-brand__headline-main">Datang ke Rumah, Hasil Nyata</span>
                </h1>
                <div className="edukeo-brand__block">
                  <ul className="edukeo-brand__features">
                    {heroCTA.features.map((feature, i) => (
                      <li key={i} className="edukeo-brand__feature">
                        <span className="edukeo-brand__check">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* RIGHT — Star Tutor */}
            <div className="hero-container__right">
              <div className="hero-container__right-inner">
                <div className="tutor-clean">
                  <div className="tutor-clean__header">
                    <h2 className="tutor-clean__name">{starTutor.name}</h2>
                    <p className="tutor-clean__uni">{starTutor.university}</p>
                  </div>
                  <div className="tutor-clean__stats">
                    <div className="tutor-clean__stat">
                      <span className="tutor-clean__stat-val">{starTutor.gpa.toFixed(2)}</span>
                      <span className="tutor-clean__stat-lbl">IPK</span>
                    </div>
                    <div className="tutor-clean__stat">
                      <span className="tutor-clean__stat-val">+{starTutor.studentsCount}</span>
                      <span className="tutor-clean__stat-lbl">Siswa</span>
                    </div>
                    <div className="tutor-clean__stat">
                      <span className="tutor-clean__stat-val">+{starTutor.yearsExperience}</span>
                      <span className="tutor-clean__stat-lbl">Tahun</span>
                    </div>
                  </div>
                  <div className="tutor-clean__tags">
                    {starTutor.subjects.map((sub, i) => (
                      <span key={i} className="tutor-clean__chip">{sub}</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ===================== MOBILE LAYOUT ===================== */}
        <div className="hero-mobile">
          {/* ROW 1: CTA — headline left, slot carousel right */}
          <div className="hero-mobile__cta">
            <div className="hero-mobile__cta-bg" />
            <div className="hero-mobile__cta-inner">
              <div className="hero-mobile__headline">
                <span className="hero-mobile__headline-sub">Bimbel Privat Yogya?</span>
                <span className="hero-mobile__headline-main">Datang ke Rumah, Hasil Nyata</span>
              </div>
              <div className="hero-mobile__slot-card">
                <div className="hero-mobile__slot-lines">
                  {/* Tag line viewport */}
                  <div className="hero-mobile__line-viewport hero-mobile__line-viewport--tag">
                    <div
                      className="hero-mobile__line-wrapper hero-mobile__line-wrapper--tag"
                      style={{ transform: `translateY(-${featureIndex * 16}px)` }}
                    >
                      {heroSlides.map((slide, i) => (
                        <div key={i} className="hero-mobile__tag-item">
                          {slide.tag}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Title 1 line viewport */}
                  <div className="hero-mobile__line-viewport hero-mobile__line-viewport--title">
                    <div
                      className="hero-mobile__line-wrapper hero-mobile__line-wrapper--title1"
                      style={{ transform: `translateY(-${featureIndex * 18}px)` }}
                    >
                      {heroSlides.map((slide, i) => (
                        <div key={i} className="hero-mobile__title-item">
                          {slide.line1}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Title 2 line viewport */}
                  <div className="hero-mobile__line-viewport hero-mobile__line-viewport--title">
                    <div
                      className="hero-mobile__line-wrapper hero-mobile__line-wrapper--title2"
                      style={{ transform: `translateY(-${featureIndex * 18}px)` }}
                    >
                      {heroSlides.map((slide, i) => (
                        <div key={i} className="hero-mobile__title-item">
                          {slide.line2}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Vertical Stepper Bar */}
                <div className="hero-mobile__stepper">
                  {heroSlides.map((_, i) => (
                    <span
                      key={i}
                      className={`hero-mobile__stepper-seg ${i === featureIndex ? "active" : ""}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ROW 2: Tutor — girl left, meta right */}
          <div className="hero-mobile__tutor">
            {/* Background photo */}
            <div className="hero-mobile__tutor-bg">
              <Image
                src="/images/hero/test bg.png"
                alt="Campus background"
                fill
                priority
                sizes="100vw"
                style={{ objectFit: "cover", objectPosition: "center" }}
              />
            </div>
            {/* Girl image — left side */}
            <div className="hero-mobile__girl">
              <Image
                src="/images/hero/Girl test.png"
                alt={starTutor.name}
                fill
                priority
                sizes="50vw"
                style={{ objectFit: "contain", objectPosition: "bottom center" }}
              />
            </div>
            {/* Tutor meta — right side */}
            <div className="hero-mobile__meta">
              <div className="hero-mobile__meta-name">{starTutor.name}</div>
              <div className="hero-mobile__meta-uni">{starTutor.university}</div>
              <div className="hero-mobile__meta-stats">
                <div className="hero-mobile__stat">
                  <span className="hero-mobile__stat-val">{starTutor.gpa.toFixed(2)}</span>
                  <span className="hero-mobile__stat-lbl">IPK</span>
                </div>
                <div className="hero-mobile__stat">
                  <span className="hero-mobile__stat-val">+{starTutor.studentsCount}</span>
                  <span className="hero-mobile__stat-lbl">Siswa</span>
                </div>
                <div className="hero-mobile__stat">
                  <span className="hero-mobile__stat-val">+{starTutor.yearsExperience}</span>
                  <span className="hero-mobile__stat-lbl">Tahun</span>
                </div>
              </div>
              <div className="hero-mobile__chips">
                {starTutor.subjects.map((sub, i) => (
                  <span key={i} className="hero-mobile__chip">{sub}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

      </section>
    </>
  );
}
