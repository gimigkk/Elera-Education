"use client";

import Link from "next/link";
import { heroCTA } from "@/data/hero";

export function Navbar() {
  const whatsappUrl = `https://wa.me/${heroCTA.ctaWhatsAppNumber}?text=${encodeURIComponent(heroCTA.ctaWhatsAppMessage)}`;

  return (
    <header className="navbar">
      <div className="navbar__inner">
        <Link href="/" className="navbar__logo">
          <span className="navbar__logo-icon">e</span>
          <span className="navbar__logo-text">
            elera<span className="navbar__logo-sub">education</span>
          </span>
        </Link>

        <nav className="navbar__nav">
          <a href="#program" className="navbar__link">Program</a>
          <a href="#tutors" className="navbar__link">Tentor</a>
          <a href="#harga" className="navbar__link">Harga</a>
          <a href="#faq" className="navbar__link">FAQ</a>
        </nav>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__cta"
        >
          Hubungi Kami
        </a>
      </div>
    </header>
  );
}
