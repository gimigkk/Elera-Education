"use client";

import "./hero-section.css";
import { useState, useEffect } from "react";
import Image from "next/image";
import { starTutors, heroCTA } from "@/data/hero";
import { Navbar } from "@/components/ui/navbar";
import { FloatUp } from "@/components/ui/float-up";
import { FaWhatsapp } from "react-icons/fa6";
import { Tooltip } from "@/components/ui/tooltip";

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
  const [tutorIndex, setTutorIndex] = useState(0);
  const [hasEntered, setHasEntered] = useState(false);

  const whatsappUrl = `https://wa.me/${heroCTA.ctaWhatsAppNumber}?text=${encodeURIComponent(heroCTA.ctaWhatsAppMessage)}`;

  useEffect(() => {
    const entryTimer = setTimeout(() => {
      setHasEntered(true);
    }, 80);
    return () => clearTimeout(entryTimer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setFeatureIndex((prev) => (prev + 1) % heroSlides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [featureIndex]);

  useEffect(() => {
    const tutorTimer = setInterval(() => {
      setTutorIndex((prev) => (prev + 1) % starTutors.length);
    }, 5000);
    return () => clearInterval(tutorTimer);
  }, [tutorIndex]);

  return (
    <>
      {/* Top Navbar inside site frame */}
      <Navbar />

      {/* Hero Section */}
      <section id="hero" className="site-section hero-container">

        {/* ===================== DESKTOP LAYOUT ===================== */}
        <div className="hero-desktop">
          {/* Layer 0: Background image Carousel */}
          <div className="hero-container__bg">
            {starTutors.map((tutor, index) => (
              <div
                key={index}
                className={`hero-container__bg-slide ${index === tutorIndex ? "active" : ""}`}
              >
                <Image
                  src={tutor.bgUrl || "/images/hero/test bg.png"}
                  alt={`${tutor.name} background`}
                  fill
                  priority
                  sizes="(max-width: 1240px) 100vw, 1240px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                />
              </div>
            ))}
          </div>

          {/* Layer 1: Left white dot-grid panel */}
          <div className="hero-container__overlay" />

          {/* Layer 2: Tutor Cutout Carousel centered at split */}
          <div className="hero-container__girl">
            {starTutors.map((tutor, index) => (
              <div
                key={index}
                className={`hero-container__girl-slide ${index === tutorIndex && hasEntered ? "active" : ""}`}
              >
                <Image
                  src={tutor.photoUrl}
                  alt={tutor.name}
                  fill
                  priority
                  sizes="500px"
                  style={{ objectFit: "contain", objectPosition: "bottom center" }}
                />
              </div>
            ))}
          </div>

          {/* Layer 2.5: Corner Text Markers */}
          <div className="hero-corner hero-corner--top-left">| Bimbel Privat</div>
          <div className="hero-corner hero-corner--bottom-left">| Harga Ramah</div>
          <div className="hero-corner hero-corner--top-right">Jadwal Menyesuaikan |</div>
          <div className="hero-corner hero-corner--bottom-right">
            <div className="tutor-carousel__controls">
              {starTutors.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  onClick={() => setTutorIndex(index)}
                  className={`tutor-carousel__dot ${index === tutorIndex ? "active" : ""}`}
                  aria-label={`Lihat tentor ${index + 1}`}
                >
                  {index === tutorIndex && (
                    <span key={tutorIndex} className="tutor-carousel__dot-fill" />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Layer 3: Grid Content */}
          <div className="hero-container__content">
            {/* LEFT — CTA */}
            <div className="hero-container__left">
              <FloatUp className="edukeo-brand" delay={50} distance={24} blur={10}>
                <h1 className="edukeo-brand__headline">
                  <span className="edukeo-brand__headline-sub">Bimbel Privat Yogya?</span>
                  <span className="edukeo-brand__headline-main">Datang ke Rumah, Hasil Nyata</span>
                </h1>

                <div className="edukeo-brand__cta-wrap">
                  <Tooltip content="Konsultasi Gratis via WhatsApp 💬" position="bottom">
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hero-cta-btn"
                    >
                      <FaWhatsapp className="hero-cta-btn__icon" />
                      <span>Konsultasi Sekarang</span>
                    </a>
                  </Tooltip>
                </div>
              </FloatUp>
            </div>

            {/* RIGHT — Star Tutor Carousel (Staggered Slot Machine Reel) */}
            <div className="hero-container__right">
              <FloatUp className="hero-container__right-inner" delay={150} distance={24} blur={10}>
                <div className="tutor-slot">
                  {/* Chips Line Viewport */}
                  <div className="tutor-slot__viewport tutor-slot__viewport--chips">
                    <div
                      className="tutor-slot__wrapper tutor-slot__wrapper--chips"
                      style={{ transform: `translateY(-${tutorIndex * 28}px)` }}
                    >
                      {starTutors.map((tutor, i) => (
                        <div key={i} className="tutor-slot__item tutor-slot__item--chips">
                          <div className="tutor-clean__tags">
                            {tutor.subjects.map((sub, j) => (
                              <span key={j} className="tutor-clean__chip">{sub}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Header Line Viewport (Name + University) */}
                  <div className="tutor-slot__viewport tutor-slot__viewport--header">
                    <div
                      className="tutor-slot__wrapper tutor-slot__wrapper--header"
                      style={{ transform: `translateY(-${tutorIndex * 72}px)` }}
                    >
                      {starTutors.map((tutor, i) => (
                        <div key={i} className="tutor-slot__item tutor-slot__item--header">
                          <div className="tutor-clean__header">
                            <h2 className="tutor-clean__name">{tutor.name}</h2>
                            <p className="tutor-clean__uni">{tutor.university}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Stats Line Viewport */}
                  <div className="tutor-slot__viewport tutor-slot__viewport--stats">
                    <div
                      className="tutor-slot__wrapper tutor-slot__wrapper--stats"
                      style={{ transform: `translateY(-${tutorIndex * 60}px)` }}
                    >
                      {starTutors.map((tutor, i) => (
                        <div key={i} className="tutor-slot__item tutor-slot__item--stats">
                          <div className="tutor-clean__stats">
                            <div className="tutor-clean__stat">
                              <span className="tutor-clean__stat-val">{tutor.gpa.toFixed(2)}</span>
                              <span className="tutor-clean__stat-lbl">IPK</span>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </FloatUp>
            </div>
          </div>
        </div>

        {/* ===================== MOBILE LAYOUT ===================== */}
        <div className="hero-mobile">
          {/* ROW 1: CTA — headline left, slot carousel right */}
          <div className="hero-mobile__cta">
            <div className="hero-mobile__cta-bg" />
            <FloatUp className="hero-mobile__cta-inner" delay={50} distance={20} blur={8}>
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
            </FloatUp>
          </div>

          {/* ROW 2: Tutor — cutout left, meta right */}
          <div className="hero-mobile__tutor">
            {/* Background photo Carousel */}
            <div className="hero-mobile__tutor-bg">
              {starTutors.map((tutor, index) => (
                <div
                  key={index}
                  className={`hero-mobile__bg-slide ${index === tutorIndex ? "active" : ""}`}
                >
                  <Image
                    src={tutor.bgUrl || "/images/hero/test bg.png"}
                    alt={`${tutor.name} background`}
                    fill
                    priority
                    sizes="100vw"
                    style={{ objectFit: "cover", objectPosition: "center" }}
                  />
                </div>
              ))}
            </div>
            {/* Tutor Cutout Carousel — left side */}
            <div className="hero-mobile__girl">
              {starTutors.map((tutor, index) => (
                <div
                  key={index}
                  className={`hero-mobile__girl-slide ${index === tutorIndex && hasEntered ? "active" : ""}`}
                >
                  <Image
                    src={tutor.photoUrl}
                    alt={tutor.name}
                    fill
                    priority
                    sizes="50vw"
                    style={{ objectFit: "contain", objectPosition: "bottom center" }}
                  />
                </div>
              ))}
            </div>
            {/* Tutor Meta Carousel — right side (Staggered Slot Machine Reel) */}
            <FloatUp className="hero-mobile__meta" delay={150} distance={20} blur={8}>
              <div className="hero-mobile__tutor-slot">
                {/* Chips Slot */}
                <div className="hero-mobile__tutor-viewport hero-mobile__tutor-viewport--chips">
                  <div
                    className="hero-mobile__tutor-wrapper hero-mobile__tutor-wrapper--chips"
                    style={{ transform: `translateY(-${tutorIndex * 24}px)` }}
                  >
                    {starTutors.map((tutor, i) => (
                      <div key={i} className="hero-mobile__tutor-item hero-mobile__tutor-item--chips">
                        <div className="hero-mobile__chips">
                          {tutor.subjects.map((sub, j) => (
                            <span key={j} className="hero-mobile__chip">{sub}</span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Header Slot (Name + Uni) */}
                <div className="hero-mobile__tutor-viewport hero-mobile__tutor-viewport--header">
                  <div
                    className="hero-mobile__tutor-wrapper hero-mobile__tutor-wrapper--header"
                    style={{ transform: `translateY(-${tutorIndex * 52}px)` }}
                  >
                    {starTutors.map((tutor, i) => (
                      <div key={i} className="hero-mobile__tutor-item hero-mobile__tutor-item--header">
                        <div className="hero-mobile__meta-header">
                          <div className="hero-mobile__meta-name">{tutor.name}</div>
                          <div className="hero-mobile__meta-uni">{tutor.university}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Stats Slot */}
                <div className="hero-mobile__tutor-viewport hero-mobile__tutor-viewport--stats">
                  <div
                    className="hero-mobile__tutor-wrapper hero-mobile__tutor-wrapper--stats"
                    style={{ transform: `translateY(-${tutorIndex * 48}px)` }}
                  >
                    {starTutors.map((tutor, i) => (
                      <div key={i} className="hero-mobile__tutor-item hero-mobile__tutor-item--stats">
                        <div className="hero-mobile__meta-stats">
                          <div className="hero-mobile__stat">
                            <span className="hero-mobile__stat-val">{tutor.gpa.toFixed(2)}</span>
                            <span className="hero-mobile__stat-lbl">IPK</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="hero-mobile__tutor-dots">
                {starTutors.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    onClick={() => setTutorIndex(index)}
                    className={`hero-mobile__tutor-dot ${index === tutorIndex ? "active" : ""}`}
                    aria-label={`Lihat tentor ${index + 1}`}
                  >
                    {index === tutorIndex && (
                      <span key={tutorIndex} className="hero-mobile__tutor-dot-fill" />
                    )}
                  </button>
                ))}
              </div>
            </FloatUp>
          </div>
        </div>

      </section>
    </>
  );
}
