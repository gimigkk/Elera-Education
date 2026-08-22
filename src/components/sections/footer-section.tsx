"use client";

import "./footer-section.css";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { heroCTA } from "@/data/hero";

import { EleraLogoIcon } from "@/components/ui/elera-logo";

export function FooterSection() {
  const whatsappUrl = `https://wa.me/${heroCTA.ctaWhatsAppNumber}?text=${encodeURIComponent(heroCTA.ctaWhatsAppMessage)}`;
  const instagramUrl = "https://www.instagram.com/elera.education.jogja/";

  const handleProgramClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    tier: "TK" | "SD" | "SMP",
    gradeIdx: number = 0
  ) => {
    e.preventDefault();
    window.dispatchEvent(
      new CustomEvent("select-pricing-tier", {
        detail: { tier, gradeIdx },
      })
    );
    const el = document.getElementById("biaya");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <footer className="site-section footer-section">
      {/* Top 4-Column Docker Grid */}
      <div className="footer-grid">
        {/* Col 1: Brand & Contact Info */}
        <div className="footer-col footer-col--brand">
          <div className="footer-brand-header">
            <Link href="/" className="footer__logo">
              <EleraLogoIcon className="footer__logo-svg" />
              <div className="footer__logo-brand">
                <span className="footer__logo-title">Elera Education</span>
                <span className="footer__logo-sub">Yogyakarta</span>
              </div>
            </Link>

            <div className="footer__socials">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon footer-social-icon--wa"
                aria-label="WhatsApp Elera Education"
              >
                <FaWhatsapp />
              </a>
              <a
                href={instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-icon footer-social-icon--ig"
                aria-label="Instagram Elera Education Jogja"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          <p className="footer__desc">
            Bimbel Panggilan Privat Terbaik di Yogyakarta. Tentor datang ke rumah, jadwal fleksibel, dan pendampingan kurikulum terpersonalisasi untuk TK hingga SMP.
          </p>
        </div>

        {/* Col 2: Program & Jenjang */}
        <div className="footer-col footer-col--program">
          <h3 className="footer__col-title">Program & Jenjang</h3>
          <ul className="footer__list">
            <li>
              <a
                href="#biaya"
                className="footer__link"
                onClick={(e) => handleProgramClick(e, "TK", 0)}
              >
                TK & Calistung
              </a>
            </li>
            <li>
              <a
                href="#biaya"
                className="footer__link"
                onClick={(e) => handleProgramClick(e, "SD", 0)}
              >
                SD Kelas 1 – 3
              </a>
            </li>
            <li>
              <a
                href="#biaya"
                className="footer__link"
                onClick={(e) => handleProgramClick(e, "SD", 1)}
              >
                SD Kelas 4 – 5
              </a>
            </li>
            <li>
              <a
                href="#biaya"
                className="footer__link"
                onClick={(e) => handleProgramClick(e, "SD", 2)}
              >
                SD Kelas 6 (Ujian)
              </a>
            </li>
            <li>
              <a
                href="#biaya"
                className="footer__link"
                onClick={(e) => handleProgramClick(e, "SMP", 0)}
              >
                SMP Kelas 7 – 9
              </a>
            </li>
          </ul>
        </div>

        {/* Col 3: Mata Pelajaran */}
        <div className="footer-col">
          <h3 className="footer__col-title">Mata Pelajaran</h3>
          <ul className="footer__list">
            <li><span className="footer__item-text">Matematika</span></li>
            <li><span className="footer__item-text">IPA / IPAS</span></li>
            <li><span className="footer__item-text">Bahasa Inggris</span></li>
            <li><span className="footer__item-text">Bahasa Indonesia</span></li>
            <li><span className="footer__item-text">Pendidikan Pancasila</span></li>
          </ul>
        </div>

        {/* Col 4: Keunggulan & Layanan */}
        <div className="footer-col">
          <h3 className="footer__col-title">Layanan</h3>
          <ul className="footer__list">
            <li><a href="#keunggulan" className="footer__link">Tentor Datang Ke Rumah</a></li>
            <li><a href="#keunggulan" className="footer__link">Jadwal Fleksibel</a></li>
            <li><a href="#keunggulan" className="footer__link">Free Konsultasi PR</a></li>
            <li><a href="#cta" className="footer__link">Area D.I. Yogyakarta</a></li>
            <li><a href="#cta" className="footer__link">Konsultasi via WhatsApp</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar — Docker 1px border style */}
      <div className="footer-bottom">
        <div className="footer-bottom__inner">
          <p className="footer-bottom__copy">
            © {new Date().getFullYear()} Elera Education. All rights reserved.
          </p>
          <p className="footer-bottom__tagline">
            Developed with ♡ by{" "}
            <a
              href="https://gimiaw.web.id"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-bottom__dev-link"
            >
              @gimigkk
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
