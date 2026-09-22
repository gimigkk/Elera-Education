"use client";

import "./hero-section.css";
import Image from "next/image";
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

          {/* Desk Elements: Sticky Notes + Full-Bleed Scattered Stickers */}
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

            {/* 2. BOTTOM-LEFT: Pastel Cyan Sticky Note */}
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

            {/* 3. RIGHT: Pastel Pink Sticky Note */}
            <div className="desk-item desk-item--pink">
              <div className="sticky-note sticky-note--pink">
                <div className="rosette-sticker" aria-hidden="true">★</div>
                <div className="sticky-note__body">
                  <p className="sticky-note__title">TK • SD • SMP</p>
                  <p className="sticky-note__sub">Kurikulum Merdeka &amp; Nasional</p>
                </div>
              </div>
            </div>

            {/* 4. SCATTERED DIE-CUT STICKERS (Bleeding into Gutters & Offscreen) */}
            {/* Left Wing */}
            <div className="hero-sticker hero-sticker--folder-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-folder.webp" alt="" width={194} height={175} />
            </div>
            <div className="hero-sticker hero-sticker--coin-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-coin.webp" alt="" width={187} height={135} />
            </div>
            <div className="hero-sticker hero-sticker--pencil-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-pencil.webp" alt="" width={163} height={225} priority />
            </div>
            <div className="hero-sticker hero-sticker--microphone" aria-hidden="true">
              <Image src="/images/stickers/sticker-microphone.webp" alt="" width={109} height={222} />
            </div>
            <div className="hero-sticker hero-sticker--cabinet-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-cabinet.webp" alt="" width={144} height={210} />
            </div>
            <div className="hero-sticker hero-sticker--magnifier-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-magnifier.webp" alt="" width={89} height={147} />
            </div>
            <div className="hero-sticker hero-sticker--paperclip-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-paperclip.webp" alt="" width={140} height={85} />
            </div>

            {/* Center Area (Top & Bottom of CTA) */}
            <div className="hero-sticker hero-sticker--paperclip-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-paperclip.webp" alt="" width={140} height={85} />
            </div>
            <div className="hero-sticker hero-sticker--gear-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-gear.webp" alt="" width={148} height={149} priority />
            </div>
            <div className="hero-sticker hero-sticker--coin-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-coin.webp" alt="" width={187} height={135} />
            </div>
            <div className="hero-sticker hero-sticker--mouse-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-mouse.webp" alt="" width={138} height={111} />
            </div>
            <div className="hero-sticker hero-sticker--pencil-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-pencil.webp" alt="" width={163} height={225} />
            </div>

            {/* Right Wing */}
            <div className="hero-sticker hero-sticker--briefcase" aria-hidden="true">
              <Image src="/images/stickers/sticker-briefcase.webp" alt="" width={188} height={177} />
            </div>
            <div className="hero-sticker hero-sticker--gear-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-gear.webp" alt="" width={148} height={149} />
            </div>
            <div className="hero-sticker hero-sticker--magnifier-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-magnifier.webp" alt="" width={89} height={147} />
            </div>
            <div className="hero-sticker hero-sticker--robot" aria-hidden="true">
              <Image src="/images/stickers/sticker-robot.webp" alt="" width={264} height={172} />
            </div>
            <div className="hero-sticker hero-sticker--printer" aria-hidden="true">
              <Image src="/images/stickers/sticker-printer.webp" alt="" width={194} height={188} />
            </div>
            <div className="hero-sticker hero-sticker--house" aria-hidden="true">
              <Image src="/images/stickers/sticker-house.webp" alt="" width={252} height={213} />
            </div>
            <div className="hero-sticker hero-sticker--folder-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-folder.webp" alt="" width={194} height={175} />
            </div>
            <div className="hero-sticker hero-sticker--cabinet-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-cabinet.webp" alt="" width={144} height={210} />
            </div>
            <div className="hero-sticker hero-sticker--mouse-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-mouse.webp" alt="" width={138} height={111} />
            </div>
          </div>

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
