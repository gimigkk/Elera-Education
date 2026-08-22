"use client";

import "./cta-section.css";
import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { heroCTA } from "@/data/hero";
import { FloatUp } from "@/components/ui/float-up";
import { Tooltip } from "@/components/ui/tooltip";

export function CtaSection() {
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const whatsappUrl = `https://wa.me/${heroCTA.ctaWhatsAppNumber}?text=${encodeURIComponent(heroCTA.ctaWhatsAppMessage)}`;

  return (
    <section className="site-section cta-section" id="cta">
      {/* ── 2-Column Split Docker Grid: Header on Left, Full-bleed Map on Right ── */}
      <div className="cta-grid">
        <div className="cta-left-cell">
          <FloatUp delay={0} distance={14}>
            <span className="cta-header__tag">Area Layanan & Pendaftaran</span>
          </FloatUp>

          <div className="cta-left-content">
            <FloatUp delay={70} distance={14}>
              <h2 className="cta-header__title">
                Siap Tingkatkan Prestasi Belajar Anak Anda?
              </h2>
            </FloatUp>

            <FloatUp delay={140} distance={14}>
              <p className="cta-header__subtitle">
                Tentor Elera Education siap datang langsung ke rumah di seluruh area Daerah Istimewa Yogyakarta (D.I. Yogyakarta). Konsultasikan kebutuhan belajar putra-putri Anda secara gratis.
              </p>
            </FloatUp>

            <FloatUp delay={210} distance={14} className="cta-actions">
              <Tooltip content="Konsultasi Gratis via WhatsApp 💬" position="bottom">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="cta-btn-primary"
                >
                  <FaWhatsapp className="cta-btn-primary__icon" />
                  <span>Konsultasi via WhatsApp</span>
                </a>
              </Tooltip>
            </FloatUp>
          </div>
        </div>

        {/* Static Map Cell — Fades in smoothly when iframe finishes loading */}
        <div className="cta-map-cell">
          <iframe
            title="Peta Wilayah Layanan Elera Education D.I. Yogyakarta"
            src="https://maps.google.com/maps?q=Daerah%20Istimewa%20Yogyakarta&t=&z=10&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={false}
            loading="lazy"
            onLoad={() => setIsMapLoaded(true)}
            referrerPolicy="no-referrer-when-downgrade"
            className={`cta-map-iframe ${isMapLoaded ? "is-loaded" : ""}`}
          />
        </div>
      </div>

      {/* ── Docker Registration-style Info Bar: Static Background, Inner Text Floats Up ── */}
      <div className="cta-bottom-bar">
        <FloatUp className="cta-bottom-bar__inner" delay={100} distance={18}>
          <span className="cta-bottom-bar__label">Jangkauan & Layanan</span>
          <div className="cta-bottom-bar__info">
            <span className="cta-bottom-bar__item">
              Area: <strong>D.I. Yogyakarta</strong>
            </span>
            <span className="cta-bottom-bar__divider">·</span>
            <span className="cta-bottom-bar__item">
              Respon: <strong>1x24 Jam Kerja</strong>
            </span>
            <span className="cta-bottom-bar__divider">·</span>
            <span className="cta-bottom-bar__item">
              Sistem: <strong>Tentor Datang Ke Rumah</strong>
            </span>
          </div>
          <p className="cta-bottom-bar__note text-balance">
            Hubungi tim konsultan kami via WhatsApp untuk penyesuaian jadwal dan pemilihan mata pelajaran.
          </p>
        </FloatUp>
      </div>
    </section>
  );
}
