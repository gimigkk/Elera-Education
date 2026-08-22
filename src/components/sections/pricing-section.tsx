"use client";

import "./pricing-section.css";
import { useState, useMemo, useEffect } from "react";
import { FloatUp } from "@/components/ui/float-up";
import {
  schoolTiers,
  pricingWhatsApp,
  type SchoolTierKey,
  type ClassOption,
} from "@/data/pricing";

function formatRupiah(n: number): string {
  return "Rp" + n.toLocaleString("id-ID");
}

interface SlotReelProps {
  valueKey: string | number;
  children: React.ReactNode;
  className?: string;
  as?: "span" | "div" | "p" | "strong";
  delay?: number;
}

function SlotReel({
  valueKey,
  children,
  className = "",
  as = "span",
  delay = 0,
}: SlotReelProps) {
  const Component = as;

  const [state, setState] = useState({
    valueKey,
    currentChildren: children,
    prevChildren: children,
    animating: false,
    animVersion: 0,
  });

  if (valueKey !== state.valueKey) {
    setState({
      valueKey,
      currentChildren: children,
      prevChildren: state.currentChildren,
      animating: true,
      animVersion: state.animVersion + 1,
    });
  } else if (children !== state.currentChildren && !state.animating) {
    setState((prev) => ({
      ...prev,
      currentChildren: children,
    }));
  }

  useEffect(() => {
    if (state.animating) {
      const timer = setTimeout(() => {
        setState((s) => ({ ...s, animating: false }));
      }, 350 + delay);
      return () => clearTimeout(timer);
    }
  }, [state.valueKey, state.animating, state.animVersion, delay]);

  if (!state.animating) {
    return (
      <Component className={`slot-viewport slot-viewport--${as} ${className}`}>
        <span className="slot-item">{state.currentChildren}</span>
      </Component>
    );
  }

  const delayStyle = delay > 0 ? { animationDelay: `${delay}ms` } : undefined;

  return (
    <Component className={`slot-viewport slot-viewport--${as} ${className}`}>
      <span
        key={`old-${state.animVersion}`}
        className="slot-item slot-item--old"
        style={delayStyle}
      >
        {state.prevChildren}
      </span>
      <span
        key={`new-${state.animVersion}`}
        className="slot-item slot-item--new"
        style={delayStyle}
      >
        {state.currentChildren}
      </span>
    </Component>
  );
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

  return (
    <section className="site-section pricing-section" id="biaya">
      {/* ── Top Header Area: Staggered Tag -> Title -> Subtitle -> Filter Chips ── */}
      <div className="pricing-top">
        <FloatUp delay={0} distance={14}>
          <span className="pricing-header__tag">Biaya Les</span>
        </FloatUp>

        <div className="pricing-header-row">
          <div className="pricing-header-left">
            <FloatUp delay={70} distance={14}>
              <h2 className="pricing-header__title">
                Program Bimbel Elera
              </h2>
            </FloatUp>
            <FloatUp delay={140} distance={14}>
              <p className="pricing-header__subtitle">
                Temukan biaya les yang sesuai dengan jenjang dan kebutuhan belajar
                anak Anda. Tentor datang ke rumah, jadwal fleksibel.
              </p>
            </FloatUp>
          </div>

          <FloatUp delay={200} distance={14} className="pricing-controls-right">
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

            {/* Grade sub-selector chips: float up whenever top tier chip changes */}
            <div key={activeTier} className="pricing-grade-pills" role="tablist" aria-label="Pilih kelas">
              {grades.length > 1 ? (
                grades.map((g, idx) => (
                  <button
                    key={g.key}
                    role="tab"
                    aria-selected={activeGradeIdx === idx}
                    className={`pricing-grade-pill pricing-grade-pill--animate ${activeGradeIdx === idx ? "pricing-grade-pill--active" : ""}`}
                    onClick={() => setActiveGradeIdx(idx)}
                    style={{
                      "--stagger-desktop": `${(grades.length - 1 - idx) * 45}ms`,
                      "--stagger-mobile": `${idx * 45}ms`,
                    } as React.CSSProperties}
                  >
                    {g.label}
                  </button>
                ))
              ) : (
                <button
                  className="pricing-grade-pill pricing-grade-pill--placeholder pricing-grade-pill--animate"
                  aria-hidden="true"
                  tabIndex={-1}
                >
                  &nbsp;
                </button>
              )}
            </div>
          </FloatUp>
        </div>
      </div>

      {/* ── Docker 1px Grid Pricing Cards ── */}
      <div className="pricing-grid-3">
        {displayOptions.map((opt, cardIdx) => {
          const isKelompok = opt.type === "Kelompok";
          const baseDelay = cardIdx * 45;

          if (!opt.available) {
            return (
              <FloatUp
                key={opt.type}
                staggerIndex={cardIdx}
                staggerStep={80}
                distance={20}
                className={`pricing-card pricing-card--unavailable ${isKelompok ? "pricing-card--kelompok" : ""} pricing-card--tk-unavailable`}
              >
                <div className="pricing-card__head">
                  <div className="pricing-card__head-top">
                    <h3 className="pricing-card__type">{opt.type}</h3>
                  </div>
                  <SlotReel valueKey={`unavail-${tier.label}`} as="p" className="pricing-card__desc" delay={baseDelay}>
                    Tidak tersedia untuk {tier.label}
                  </SlotReel>
                </div>
                <div className="pricing-card__body">
                  <SlotReel valueKey={`unavail-msg-${tier.label}`} as="p" className="pricing-card__na" delay={baseDelay + 35}>
                    Program kelompok belum tersedia untuk jenjang {tier.label}.
                  </SlotReel>
                </div>
              </FloatUp>
            );
          }

          const isPopular = opt.type === "Semi-Privat";
          const priceAmountKey = `${opt.pricePerChild}-${opt.pricePerChildMax ?? ""}`;
          const origPriceKey = opt.originalPricePerChild ? String(opt.originalPricePerChild) : "no-orig";

          return (
            <FloatUp
              key={opt.type}
              staggerIndex={cardIdx}
              staggerStep={80}
              distance={20}
              className={`pricing-card ${isPopular ? "pricing-card--popular" : ""} ${isKelompok ? "pricing-card--kelompok" : ""}`}
            >
              <div className="pricing-card__head">
                <div className="pricing-card__head-top">
                  <h3 className="pricing-card__type">{opt.type}</h3>
                  {isPopular && (
                    <span className="pricing-card__badge">Favorit</span>
                  )}
                </div>
                <SlotReel valueKey={opt.description} as="p" className="pricing-card__desc" delay={baseDelay}>
                  {opt.description}
                </SlotReel>
              </div>

              <div className="pricing-card__body">
                <div className="pricing-card__price-block">
                  <SlotReel
                    valueKey={origPriceKey}
                    as="span"
                    delay={baseDelay + 20}
                    className={!opt.originalPricePerChild ? "pricing-card__orig-slot--empty" : ""}
                  >
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
                  </SlotReel>

                  <SlotReel valueKey={priceAmountKey} as="div" className="pricing-card__price-amount-wrap" delay={baseDelay + 35}>
                    <div className="pricing-card__price-amount">
                      <span className="pricing-card__price">
                        {formatRupiah(opt.pricePerChild)}
                      </span>
                      {opt.pricePerChildMax && (
                        <span className="pricing-card__price-range">
                          – {formatRupiah(opt.pricePerChildMax)}
                        </span>
                      )}
                      <span className="pricing-card__per">/anak/sesi</span>
                    </div>
                  </SlotReel>
                </div>

                <div className="pricing-card__meta">
                  <div className="pricing-card__meta-row">
                    <span className="pricing-card__meta-check">✓</span>
                    <SlotReel valueKey={opt.durationMinutes} as="span" delay={baseDelay + 50}>
                      <span>Durasi {opt.durationMinutes} menit / sesi</span>
                    </SlotReel>
                  </div>
                  <div className="pricing-card__meta-row">
                    <span className="pricing-card__meta-check">✓</span>
                    <span>
                      Total sesi:{" "}
                      <SlotReel valueKey={opt.sessionPrice} as="span" delay={baseDelay + 65}>
                        {formatRupiah(opt.sessionPrice)}
                      </SlotReel>
                    </span>
                  </div>
                  {opt.maxStudents && (
                    <div className="pricing-card__meta-row">
                      <span className="pricing-card__meta-check">✓</span>
                      <SlotReel valueKey={opt.maxStudents} as="span" delay={baseDelay + 80}>
                        <span>Maksimal {opt.maxStudents} anak</span>
                      </SlotReel>
                    </div>
                  )}
                </div>

                {opt.cocokUntuk && (
                  <SlotReel valueKey={opt.cocokUntuk} as="p" className="pricing-card__cocok" delay={baseDelay + 95}>
                    {opt.cocokUntuk}
                  </SlotReel>
                )}
              </div>
            </FloatUp>
          );
        })}
      </div>

      {/* ── Registration Fee Bar: Static Background, Inner Text Floats Up ── */}
      <div className="pricing-registration">
        <FloatUp className="pricing-registration__inner" delay={100} distance={18}>
          <div className="pricing-registration__left">
            <span className="pricing-registration__label">Biaya Pendaftaran</span>
            <div className="pricing-registration__fees">
              <span className="pricing-registration__fee">
                1 Semester:{" "}
                <SlotReel valueKey={tier.registrationFee.semester} as="strong" delay={135}>
                  {formatRupiah(tier.registrationFee.semester)}
                </SlotReel>
              </span>
              <span className="pricing-registration__divider">·</span>
              <span className="pricing-registration__fee">
                1 Tahun:{" "}
                <SlotReel valueKey={tier.registrationFee.annual} as="strong" delay={165}>
                  {formatRupiah(tier.registrationFee.annual)}
                </SlotReel>
              </span>
            </div>
          </div>
          <p className="pricing-registration__note">
            Bisa dicicil 2–3 bulan. Pembayaran les di awal per 1 minggu, 2 minggu, atau 1 bulan.
          </p>
        </FloatUp>
      </div>
    </section>
  );
}
