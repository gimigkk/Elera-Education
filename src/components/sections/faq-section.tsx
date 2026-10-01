"use client";

import "./faq-section.css";
import { useState } from "react";
import { FaChevronDown, FaWhatsapp } from "react-icons/fa6";
import { faqData } from "@/data/faq";
import { heroCTA } from "@/data/hero";
import { FloatUp } from "@/components/ui/float-up";
import { Tooltip } from "@/components/ui/tooltip";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(faqData[0]?.id ?? null);
  const whatsappUrl = `https://wa.me/${heroCTA.ctaWhatsAppNumber}?text=${encodeURIComponent(
    "Halo Elera Education, saya ingin bertanya lebih lanjut mengenai program bimbingan belajar."
  )}`;

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="site-section faq-section" id="faq" aria-labelledby="faq-title">
      <div className="faq-grid">
        {/* Left Column: Heading & CTA Button */}
        <div className="faq-left-cell">
          <FloatUp delay={0} distance={14}>
            <span className="faq-header__tag">Tanya Jawab</span>
          </FloatUp>

          <FloatUp delay={70} distance={14}>
            <h2 id="faq-title" className="faq-header__title">
              Pertanyaan Seputar Bimbel Elera
            </h2>
          </FloatUp>

          <FloatUp delay={140} distance={14}>
            <p className="faq-header__subtitle">
              Jawaban lengkap seputar penentuan jadwal, skema biaya, dan sistem bimbingan belajar privat tatap muka di rumah.
            </p>
          </FloatUp>

          <FloatUp delay={210} distance={14} className="faq-actions">
            <Tooltip content="Konsultasi Gratis via WhatsApp 💬" position="bottom">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="faq-btn-primary"
              >
                <FaWhatsapp className="faq-btn-primary__icon" />
                <span>Tanya via WhatsApp</span>
              </a>
            </Tooltip>
          </FloatUp>
        </div>

        {/* Right Column: FAQ Accordion List (3 core questions) */}
        <div className="faq-list" role="region" aria-label="Daftar Pertanyaan">
          {faqData.map((item, index) => {
            const isOpen = openId === item.id;
            const itemNumber = String(index + 1).padStart(2, "0");
            const headingId = `faq-q-${item.id}`;
            const panelId = `faq-a-${item.id}`;

            return (
              <FloatUp
                key={item.id}
                delay={index * 50}
                distance={12}
                className={`faq-item ${isOpen ? "faq-item--open" : ""}`}
              >
                <button
                  type="button"
                  id={headingId}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  className="faq-item__trigger"
                  onClick={() => toggleItem(item.id)}
                >
                  <div className="faq-item__trigger-left">
                    <span className="faq-item__index" aria-hidden="true">
                      {itemNumber}
                    </span>
                    <span>{item.question}</span>
                  </div>
                  <span className="faq-item__icon-wrap" aria-hidden="true">
                    <FaChevronDown className="faq-item__icon" />
                  </span>
                </button>

                <div
                  id={panelId}
                  role="region"
                  aria-labelledby={headingId}
                  className="faq-item__content"
                >
                  <div className="faq-item__inner">
                    <p className="faq-item__answer">{item.answer}</p>
                  </div>
                </div>
              </FloatUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
