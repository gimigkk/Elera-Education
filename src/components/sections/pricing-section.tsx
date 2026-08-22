"use client";

import "./pricing-section.css";
import { useState, useMemo, useEffect } from "react";
import {
  schoolTiers,
  pricingWhatsApp,
  type SchoolTierKey,
  type ClassOption,
} from "@/data/pricing";

function formatRupiah(n: number): string {
  return "Rp" + n.toLocaleString("id-ID");
}

export function PricingSection() {
  const [activeTier, setActiveTier] = useState<SchoolTierKey>("SD");
  const [activeGradeIdx, setActiveGradeIdx] = useState(0);

  useEffect(() => {
    const handleSelectPricing = (e: Event) => {
      const customEvent = e as CustomEvent<{ tier: SchoolTierKey; gradeIdx?: number }>;
      if (customEvent.detail?.tier) {
        setActiveTier(customEvent.detail.tier);
        setActiveGradeIdx(customEvent.detail.gradeIdx ?? 0);
      }
    };

    window.addEventListener("select-pricing-tier", handleSelectPricing);
    return () => {
      window.removeEventListener("select-pricing-tier", handleSelectPricing);
    };
  }, []);

  const tier = useMemo(
    () => schoolTiers.find((t) => t.key === activeTier)!,
    [activeTier]
  );

  const grades = tier.grades;
  const grade = grades[activeGradeIdx] ?? grades[0];
  const options = grade.options;

  const displayOptions = useMemo(() => {
    const orderMap: Record<string, number> = {
      Kelompok: 0,
      "Semi-Privat": 1,
      Privat: 2,
    };
    return [...options].sort(
      (a, b) => (orderMap[a.type] ?? 99) - (orderMap[b.type] ?? 99)
    );
  }, [options]);

  const handleTierChange = (key: SchoolTierKey) => {
    setActiveTier(key);
    setActiveGradeIdx(0);
  };

  const buildWhatsAppUrl = (opt: ClassOption) => {
    const msg = pricingWhatsApp.buildMessage(
      tier.label,
      grade.label,
      opt.type
    );
    return `https://wa.me/${pricingWhatsApp.number}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section className="site-section pricing-section" id="biaya">
      {/* ── Top Header Area: Tag on top, Row with Title & Desc on Left, Chips on Right ── */}
      <div className="pricing-top">
        <span className="pricing-header__tag">Biaya Les</span>

        <div className="pricing-header-row">
          <div className="pricing-header-left">
            <h2 className="pricing-header__title">
              Program Bimbel Elera
            </h2>
            <p className="pricing-header__subtitle">
              Temukan biaya les yang sesuai dengan jenjang dan kebutuhan belajar
              anak Anda. Tentor datang ke rumah, jadwal fleksibel.
            </p>
          </div>

          <div className="pricing-controls-right">
            {/* Tier selector chips aligned with top of Title */}
            <div className="pricing-tier-pills" role="tablist" aria-label="Pilih jenjang sekolah">
              {schoolTiers.map((t) => (
                <button
                  key={t.key}
                  role="tab"
                  aria-selected={activeTier === t.key}
                  className={`pricing-tier-pill ${activeTier === t.key ? "pricing-tier-pill--active" : ""}`}
                  onClick={() => handleTierChange(t.key)}
                >
                  {t.label}
                </button>
              ))}
            </div>

            {/* Grade sub-selector chips: locked in Row 2 with identical height dummy button when hidden */}
            <div className="pricing-grade-pills" role="tablist" aria-label="Pilih kelas">
              {grades.length > 1 ? (
                grades.map((g, idx) => (
                  <button
                    key={g.key}
                    role="tab"
                    aria-selected={activeGradeIdx === idx}
                    className={`pricing-grade-pill ${activeGradeIdx === idx ? "pricing-grade-pill--active" : ""}`}
                    onClick={() => setActiveGradeIdx(idx)}
                  >
                    {g.label}
                  </button>
                ))
              ) : (
                <button
                  className="pricing-grade-pill pricing-grade-pill--placeholder"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  &nbsp;
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* ── Docker 1px Grid Pricing Cards ── */}
      <div className="pricing-grid-3">
        {displayOptions.map((opt) => {
          const isKelompok = opt.type === "Kelompok";

          if (!opt.available) {
            return (
              <div
                key={opt.type}
                className={`pricing-card pricing-card--unavailable ${isKelompok ? "pricing-card--kelompok" : ""}`}
              >
                <div className="pricing-card__head">
                  <h3 className="pricing-card__type">{opt.type}</h3>
                  <p className="pricing-card__desc">Tidak tersedia untuk {tier.label}</p>
                </div>
                <div className="pricing-card__body">
                  <p className="pricing-card__na">Program kelompok belum tersedia untuk jenjang {tier.label}.</p>
                </div>
              </div>
            );
          }

          const isPopular = opt.type === "Semi-Privat";

          return (
            <div
              key={opt.type}
              className={`pricing-card ${isPopular ? "pricing-card--popular" : ""} ${isKelompok ? "pricing-card--kelompok" : ""}`}
            >
              {isPopular && (
                <span className="pricing-card__badge">Favorit</span>
              )}

              <div className="pricing-card__head">
                <h3 className="pricing-card__type">{opt.type}</h3>
                <p className="pricing-card__desc">{opt.description}</p>
              </div>

              <div className="pricing-card__body">
                <div className="pricing-card__price-block">
                  {opt.originalPricePerChild ? (
                    <span className="pricing-card__original-price">
                      {formatRupiah(opt.originalPricePerChild)}
                    </span>
                  ) : (
                    <span
                      className="pricing-card__original-price pricing-card__original-price--placeholder"
                      aria-hidden="true"
                    >
                      &nbsp;
                    </span>
                  )}
                  <div className="pricing-card__price-amount">
                    <span className="pricing-card__price">
                      {formatRupiah(opt.pricePerChild)}
                    </span>
                    {opt.pricePerChildMax && (
                      <span className="pricing-card__price-range">
                        – {formatRupiah(opt.pricePerChildMax)}
                      </span>
                    )}
                  </div>
                  <span className="pricing-card__per">/anak/sesi</span>
                </div>

                <div className="pricing-card__meta">
                  <div className="pricing-card__meta-row">
                    <span className="pricing-card__meta-check">✓</span>
                    <span>Durasi {opt.durationMinutes} menit / sesi</span>
                  </div>
                  <div className="pricing-card__meta-row">
                    <span className="pricing-card__meta-check">✓</span>
                    <span>Total sesi: {formatRupiah(opt.sessionPrice)}</span>
                  </div>
                  {opt.maxStudents && (
                    <div className="pricing-card__meta-row">
                      <span className="pricing-card__meta-check">✓</span>
                      <span>Maksimal {opt.maxStudents} anak</span>
                    </div>
                  )}
                </div>

                {opt.cocokUntuk && (
                  <p className="pricing-card__cocok">{opt.cocokUntuk}</p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* ── Registration Fee Bar ── */}
      <div className="pricing-registration">
        <div className="pricing-registration__inner">
          <div className="pricing-registration__left">
            <span className="pricing-registration__label">Biaya Pendaftaran</span>
            <div className="pricing-registration__fees">
              <span className="pricing-registration__fee">
                1 Semester: <strong>{formatRupiah(tier.registrationFee.semester)}</strong>
              </span>
              <span className="pricing-registration__divider">·</span>
              <span className="pricing-registration__fee">
                1 Tahun: <strong>{formatRupiah(tier.registrationFee.annual)}</strong>
              </span>
            </div>
          </div>
          <p className="pricing-registration__note">
            Bisa dicicil 2–3 bulan. Pembayaran les di awal per 1 minggu, 2 minggu, atau 1 bulan.
          </p>
        </div>
      </div>
    </section>
  );
}
