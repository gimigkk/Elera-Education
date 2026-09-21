"use client";

import "./hero-section.css";
import { FaStar } from "react-icons/fa6";
import { heroCTA } from "@/data/hero";
import { UniversityMarquee } from "@/components/sections/university-marquee";
import { Navbar } from "@/components/ui/navbar";

export function HeroSection() {
  const whatsappUrl = `https://wa.me/${heroCTA.ctaWhatsAppNumber}?text=${encodeURIComponent(
    heroCTA.ctaWhatsAppMessage || "Halo, saya ingin tanya tentang bimbel privat Elera Education untuk anak saya"
  )}`;

  return (
    <>
      {/* Original Unchanged Navbar */}
      <Navbar />

      {/* Hero Section Container */}
      <section id="hero" className="hero-mat" aria-label="Elera Education Hero">
        {/* Gobo Window Blind Shadow Overlay (Affects Canvas & Marquee) */}
        <div className="hero-mat__gobo" aria-hidden="true" />

        {/* ================= 1. THE GRID CANVAS (COMPLETE SQUARES) ================= */}
        <div className="hero-mat__canvas">
          {/* Merged Big Grid Cell behind CTA (Excel / Google Sheets style merged cell) */}
          <div className="hero-mat__merged-cell" aria-hidden="true" />

          <div className="hero-mat__inner">
            {/* Coordinate Numbers Aligned to Big Squares (100px) */}
            <div className="hero-mat__numbers" aria-hidden="true">
              {/* Row 1 (top: 12px) */}
              <span className="mat-coord" style={{ top: "12px", left: "calc(50% - 550px + 12px)" }}>12</span>
              <span className="mat-coord" style={{ top: "12px", left: "calc(50% - 450px + 12px)" }}>13</span>
              <span className="mat-coord" style={{ top: "12px", left: "calc(50% + 350px + 12px)" }}>18</span>
              <span className="mat-coord" style={{ top: "12px", left: "calc(50% + 450px + 12px)" }}>19</span>

              {/* Row 2 (top: 112px) */}
              <span className="mat-coord" style={{ top: "112px", left: "calc(50% + 450px + 12px)" }}>25</span>

              {/* Row 3 (top: 212px) */}
              <span className="mat-coord" style={{ top: "212px", left: "calc(50% - 550px + 12px)" }}>26</span>
              <span className="mat-coord" style={{ top: "212px", left: "calc(50% + 450px + 12px)" }}>33</span>

              {/* Row 4 (top: 312px) */}
              <span className="mat-coord" style={{ top: "312px", left: "calc(50% - 550px + 12px)" }}>34</span>

              {/* Row 6 (top: 512px - complete bottom square) */}
              <span className="mat-coord" style={{ top: "512px", left: "calc(50% - 550px + 12px)" }}>42</span>
              <span className="mat-coord" style={{ top: "512px", left: "calc(50% - 450px + 12px)" }}>43</span>
              <span className="mat-coord" style={{ top: "512px", left: "calc(50% + 250px + 12px)" }}>46</span>
              <span className="mat-coord" style={{ top: "512px", left: "calc(50% + 350px + 12px)" }}>47</span>
              <span className="mat-coord" style={{ top: "512px", left: "calc(50% + 450px + 12px)" }}>48</span>
            </div>

            {/* Craft String: Connecting Orange Hexagon pin to Cyan Sticky Note pin */}
            <svg className="hero-mat__string" viewBox="0 0 1280 600" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path
                d="M 114 234 C 104 275, 108 315, 128 359"
                stroke="#E8CBA3"
                strokeWidth="2"
                strokeLinecap="round"
                filter="drop-shadow(0 2px 4px rgba(0,0,0,0.35))"
              />
            </svg>

            {/* Desk Elements: 3 Sticky Notes + 2 Stickers */}
            <div className="hero-mat__elements">
              {/* 1. TOP-LEFT: Canary Yellow Sticky Note */}
              <div className="desk-item desk-item--yellow">
                <div className="sticky-note sticky-note--yellow">
                  <div className="pushpin pushpin--red" aria-hidden="true" />
                  <div className="sticky-note__body">
                    <span className="sticky-note__tag">Catatan</span>
                    <p className="sticky-note__title">Tentor Ramah &amp; Sabar ✨</p>
                    <p className="sticky-note__sub">Belajar asik, bikin anak pede!</p>
                  </div>
                  <div className="mini-badge mini-badge--green">
                    <FaStar className="mini-badge__icon" />
                    <span>5.0</span>
                  </div>
                </div>
              </div>

              {/* 2. CENTER-LEFT: Orange Hexagon Sticker */}
              <div className="desk-item desk-item--orange-hex">
                <div className="sticker-hex">
                  <span className="sticker-hex__pin" aria-hidden="true" />
                  <span className="sticker-hex__icon">💡</span>
                  <span className="sticker-hex__text">1-on-1</span>
                </div>
              </div>

              {/* 3. BOTTOM-LEFT: Pastel Cyan Sticky Note */}
              <div className="desk-item desk-item--cyan">
                <div className="sticky-note sticky-note--cyan">
                  <div className="pushpin pushpin--purple" aria-hidden="true" />
                  <div className="sticky-note__body">
                    <p className="sticky-note__title">PR &amp; Ujian Tuntas! 📝</p>
                    <p className="sticky-note__sub">Jadwal fleksibel di rumah</p>
                  </div>
                  <span className="cyan-stamp">Yogyakarta</span>
                </div>
              </div>

              {/* 4. TOP-RIGHT: Double-Bubble Die-Cut Sticker */}
              <div className="desk-item desk-item--bubble">
                <div className="sticker-bubble">
                  <div className="bubble-top">
                    <span>🎓</span>
                  </div>
                  <div className="bubble-bottom">
                    <span>UGM • UNY</span>
                  </div>
                </div>
              </div>

              {/* 5. RIGHT: Pastel Pink Sticky Note */}
              <div className="desk-item desk-item--pink">
                <div className="sticky-note sticky-note--pink">
                  <div className="rosette-sticker" aria-hidden="true">★</div>
                  <div className="sticky-note__body">
                    <p className="sticky-note__title">TK • SD • SMP</p>
                    <p className="sticky-note__sub">Kurikulum Merdeka &amp; Nasional</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Center CTA */}
            <div className="hero-mat__center">
              <h1 className="hero-mat__headline">
                <span className="hero-mat__headline-main">Bimbel Privat Jogja,</span>
                <span className="hero-mat__headline-serif">Datang ke Rumah, Hasil Nyata</span>
              </h1>

              <p className="hero-mat__sub">
                Guru privat 1-on-1 datang ke rumah untuk TK, SD, &amp; SMP di Jogja. Jadwal fleksibel &amp; kurikulum terpersonalisasi.
              </p>

              <div className="hero-mat__cta-btn-wrap">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-3d"
                  aria-label="Konsultasi Sekarang"
                >
                  <span className="btn-3d__edge" aria-hidden="true" />
                  <span className="btn-3d__front">Konsultasi Sekarang</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ================= 2. INTEGRATED UNIVERSITY MARQUEE ================= */}
        <UniversityMarquee />
      </section>
    </>
  );
}
