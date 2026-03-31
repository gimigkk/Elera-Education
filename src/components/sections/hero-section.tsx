"use client";

import Image from "next/image";
import { starTutor, heroCTA } from "@/data/hero";
import { Navbar } from "@/components/ui/navbar";

export function HeroSection() {
  return (
    <>
      {/* Top Navbar inside site frame */}
      <Navbar />

      {/* Hero Section with bottom divider border */}
      <section id="hero" className="site-section hero-container">
        {/* Layer 0: Background image (Right 50% / Full container cover) */}
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

        {/* Layer 1: Docker Blue panel on Left 50% */}
        <div className="hero-container__overlay" />

        {/* Layer 2: Girl PNG — height-locked overlay cut out */}
        <div className="hero-container__girl">
          <Image
            src="/images/hero/Girl test.png"
            alt={starTutor.name}
            fill
            priority
            sizes="(max-width: 768px) 90vw, 500px"
            style={{ objectFit: "contain", objectPosition: "top center" }}
          />
        </div>

        {/* Layer 2.5: Corner Text Markers (Reference poster style) */}
        <div className="hero-corner hero-corner--top-left">| Bimbel Privat</div>
        <div className="hero-corner hero-corner--bottom-left">| Harga Ramah</div>
        <div className="hero-corner hero-corner--top-right">Jadwal Menyesuaikan |</div>
        <div className="hero-corner hero-corner--bottom-right">Hasil Terbuktikan |</div>

        {/* Layer 3: Grid Content */}
        <div className="hero-container__content">
          {/* LEFT — Edukeo Reference Typographic Poster Layout */}
          <div className="hero-container__left">
            <div className="edukeo-brand">
              {/* Main Headline — Contrasting Weights Title Case */}
              <h1 className="edukeo-brand__headline">
                <span className="edukeo-brand__headline-sub">Bimbel Privat?</span>
                <span className="edukeo-brand__headline-main">Datang ke Rumah, Hasil Nyata</span>
              </h1>

              {/* Feature List Block */}
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

          {/* RIGHT — Star Tutor Showcase (Chips representation for subjects) */}
          <div className="hero-container__right">
            <div className="hero-container__right-inner">
              <div className="tutor-clean">
                {/* Header info */}
                <div className="tutor-clean__header">
                  <h2 className="tutor-clean__name">{starTutor.name}</h2>
                  <p className="tutor-clean__uni">{starTutor.university}</p>
                </div>

                {/* Stats row */}
                <div className="tutor-clean__stats">
                  <div className="tutor-clean__stat">
                    <span className="tutor-clean__stat-val">{starTutor.gpa.toFixed(2)}</span>
                    <span className="tutor-clean__stat-lbl">IPK</span>
                  </div>
                  <div className="tutor-clean__stat">
                    <span className="tutor-clean__stat-val">{starTutor.studentsCount}+</span>
                    <span className="tutor-clean__stat-lbl">Siswa</span>
                  </div>
                  <div className="tutor-clean__stat">
                    <span className="tutor-clean__stat-val">{starTutor.yearsExperience}+</span>
                    <span className="tutor-clean__stat-lbl">Tahun</span>
                  </div>
                </div>

                {/* Subjects Chips (No "Mata Pelajaran" label) */}
                <div className="tutor-clean__tags">
                  {starTutor.subjects.map((sub, i) => (
                    <span key={i} className="tutor-clean__chip">
                      {sub}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
