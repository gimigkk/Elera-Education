"use client";

import "./hero-section.css";
import Image from "next/image";
import { FaStar } from "react-icons/fa6";
import { heroCTA } from "@/data/hero";
import { UniversityMarquee } from "@/components/sections/university-marquee";
import { Navbar } from "@/components/ui/navbar";
import { FloatUp } from "@/components/ui/float-up";

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
        <div className="hero-mat__gobo" aria-hidden="true">
          <picture>
            <source media="(max-width: 960px)" srcSet="/images/hero/leaf-gobo-portrait.webp" />
            <img
              src="/images/hero/leaf-gobo.webp"
              alt=""
              fetchPriority="high"
              loading="eager"
              decoding="async"
            />
          </picture>
        </div>

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
                  <p className="sticky-note__title">Ramah &amp; Sabar</p>
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
                  <p className="sticky-note__title">PR &amp; Ujian Tuntas!</p>
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
              <Image src="/images/stickers/sticker-folder.webp" alt="" width={194} height={175} sizes="90px" priority />
            </div>
            <div className="hero-sticker hero-sticker--coin-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-coin.webp" alt="" width={187} height={135} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--pencil-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-pencil.webp" alt="" width={163} height={225} sizes="90px" priority />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--microphone" aria-hidden="true">
              <Image src="/images/stickers/sticker-microphone.webp" alt="" width={109} height={222} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--cabinet-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-cabinet.webp" alt="" width={144} height={210} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--magnifier-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-magnifier.webp" alt="" width={89} height={147} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--paperclip-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-paperclip.webp" alt="" width={140} height={85} sizes="90px" loading="eager" decoding="async" />
            </div>

            {/* Center Area (Top & Bottom of CTA) */}
            <div className="hero-sticker hero-sticker--paperclip-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-paperclip.webp" alt="" width={140} height={85} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--gear-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-gear.webp" alt="" width={148} height={149} sizes="90px" priority />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--coin-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-coin.webp" alt="" width={187} height={135} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--mouse-1" aria-hidden="true">
              <Image src="/images/stickers/sticker-mouse.webp" alt="" width={138} height={111} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--pencil-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-pencil.webp" alt="" width={163} height={225} sizes="90px" loading="eager" decoding="async" />
            </div>

            {/* Right Wing */}
            <div className="hero-sticker hero-sticker--briefcase" aria-hidden="true">
              <Image src="/images/stickers/sticker-briefcase.webp" alt="" width={188} height={177} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--gear-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-gear.webp" alt="" width={148} height={149} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--magnifier-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-magnifier.webp" alt="" width={89} height={147} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--robot" aria-hidden="true">
              <Image src="/images/stickers/sticker-robot.webp" alt="" width={264} height={172} sizes="100px" priority />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--printer" aria-hidden="true">
              <Image src="/images/stickers/sticker-printer.webp" alt="" width={194} height={188} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--house" aria-hidden="true">
              <Image src="/images/stickers/sticker-house.webp" alt="" width={252} height={213} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--folder-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-folder.webp" alt="" width={194} height={175} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--cabinet-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-cabinet.webp" alt="" width={144} height={210} sizes="90px" loading="eager" decoding="async" />
            </div>
            <div className="hero-sticker hero-sticker--desktop-only hero-sticker--mouse-2" aria-hidden="true">
              <Image src="/images/stickers/sticker-mouse.webp" alt="" width={138} height={111} sizes="90px" loading="eager" decoding="async" />
            </div>
          </div>

          {/* Desktop Progressive Edge Blur (Figma-style - inside canvas to not bleed into navbar) */}
          <div className="hero-edge-blur hero-edge-blur--left" aria-hidden="true">
            <span className="hero-edge-blur__stage hero-edge-blur__stage--1" />
            <span className="hero-edge-blur__stage hero-edge-blur__stage--2" />
            <span className="hero-edge-blur__stage hero-edge-blur__stage--3" />
          </div>

          <div className="hero-edge-blur hero-edge-blur--right" aria-hidden="true">
            <span className="hero-edge-blur__stage hero-edge-blur__stage--1" />
            <span className="hero-edge-blur__stage hero-edge-blur__stage--2" />
            <span className="hero-edge-blur__stage hero-edge-blur__stage--3" />
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
                <FloatUp delay={60}>
                  <span className="hero-mat__headline-main">Bimbel Privat Jogja,</span>
                </FloatUp>
                <FloatUp delay={160}>
                  <span className="hero-mat__headline-serif">Datang ke Rumah, Hasil Nyata</span>
                </FloatUp>
              </h1>

              <FloatUp delay={260}>
                <p className="hero-mat__sub">
                  Guru privat 1-on-1 datang ke rumah untuk TK, SD, &amp; SMP di Jogja. Jadwal fleksibel &amp; kurikulum terpersonalisasi.
                </p>
              </FloatUp>

              <FloatUp delay={360}>
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
              </FloatUp>
            </div>
          </div>
        </div>

        {/* ================= 2. INTEGRATED UNIVERSITY MARQUEE ================= */}
        <UniversityMarquee />
      </section>
    </>
  );
}
