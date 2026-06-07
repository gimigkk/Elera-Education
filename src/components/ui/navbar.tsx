"use client";

import { useState } from "react";
import "./navbar.css";
import Link from "next/link";
import { FaWhatsapp } from "react-icons/fa6";
import { heroCTA } from "@/data/hero";

import { EleraLogoIcon } from "./elera-logo";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const whatsappUrl = `https://wa.me/${heroCTA.ctaWhatsAppNumber}?text=${encodeURIComponent(heroCTA.ctaWhatsAppMessage)}`;

  const navLinks = [
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Biaya Les", href: "#biaya" },
    { label: "Layanan & Jangkauan", href: "#cta" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Left: Brand Logo */}
        <Link href="/" className="navbar__logo" onClick={() => setMobileMenuOpen(false)}>
          <EleraLogoIcon className="navbar__logo-svg" />
          <div className="navbar__logo-brand">
            <span className="navbar__logo-title">Elera Education</span>
            <span className="navbar__logo-sub">Yogyakarta</span>
          </div>
        </Link>

        {/* Center: Perfectly Centered Navlinks */}
        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: CTA & Mobile Toggle */}
        <div className="navbar__actions">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__cta"
          >
            <FaWhatsapp className="navbar__cta-icon" />
            <span>Hubungi Kami</span>
          </a>

          <button
            type="button"
            className={`navbar__toggle ${mobileMenuOpen ? "navbar__toggle--open" : ""}`}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu Navigation"
            aria-expanded={mobileMenuOpen}
          >
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
            <span className="navbar__toggle-bar" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Navigation Menu */}
      {mobileMenuOpen && (
        <div className="navbar__mobile-menu">
          <nav className="navbar__mobile-nav">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="navbar__mobile-link"
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__mobile-cta"
              onClick={() => setMobileMenuOpen(false)}
            >
              <FaWhatsapp className="navbar__cta-icon" />
              <span>Hubungi Kami</span>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
