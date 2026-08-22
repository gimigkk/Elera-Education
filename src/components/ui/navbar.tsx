"use client";

import "./navbar.css";
import Link from "next/link";
import { FaWhatsapp, FaInstagram } from "react-icons/fa6";
import { heroCTA } from "@/data/hero";
import { EleraLogoIcon } from "./elera-logo";

import { Tooltip } from "@/components/ui/tooltip";

export function Navbar() {
  const whatsappUrl = `https://wa.me/${heroCTA.ctaWhatsAppNumber}?text=${encodeURIComponent(heroCTA.ctaWhatsAppMessage)}`;
  const instagramUrl = "https://www.instagram.com/elera.education.jogja/";

  const navLinks = [
    { label: "Keunggulan", href: "#keunggulan" },
    { label: "Biaya Les", href: "#biaya" },
    { label: "Layanan & Jangkauan", href: "#cta" },
  ];

  return (
    <header className="navbar">
      <div className="navbar__inner">
        {/* Left: Brand Logo */}
        <Link href="/" className="navbar__logo">
          <EleraLogoIcon className="navbar__logo-svg" />
          <div className="navbar__logo-brand">
            <span className="navbar__logo-title">Elera Education</span>
            <span className="navbar__logo-sub">Yogyakarta</span>
          </div>
        </Link>

        {/* Center: Desktop Navlinks */}
        <nav className="navbar__nav">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} className="navbar__link">
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Instagram & WhatsApp CTA Buttons */}
        <div className="navbar__actions">
          <Tooltip content="@elera.education.jogja" position="bottom">
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__ig-btn"
              aria-label="Instagram Elera Education Jogja"
            >
              <FaInstagram />
            </a>
          </Tooltip>

          <Tooltip content="Chat WhatsApp Fast Response 💬" position="bottom" align="right">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="navbar__cta"
              aria-label="WhatsApp Elera Education Jogja"
            >
              <FaWhatsapp className="navbar__cta-icon" />
              <span className="navbar__cta-text">
                Hubungi <span className="navbar__cta-kami">Kami</span>
              </span>
            </a>
          </Tooltip>
        </div>
      </div>
    </header>
  );
}
