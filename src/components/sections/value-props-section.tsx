"use client";

import "./value-props-section.css";
import Image from "next/image";
import { valuePropGridCells } from "@/data/value-props";
import { FloatUp } from "@/components/ui/float-up";

export function ValuePropsSection() {
  let reasonCounter = 0;

  return (
    <section className="site-section vprop-section" id="keunggulan">
      {/* Section Header: Staggered 3-part header (Tag -> Title -> Subtitle) */}
      <div className="vprop-header">
        <FloatUp delay={0} distance={14}>
          <span className="vprop-header__tag">Keunggulan Utama</span>
        </FloatUp>

        <FloatUp delay={70} distance={14}>
          <h2 className="vprop-header__title">
            Solusi Bimbel Privat Terbaik Untuk Putra-Putri Anda
          </h2>
        </FloatUp>

        <FloatUp delay={140} distance={14}>
          <p className="vprop-header__subtitle">
            Pendampingan belajar tatap muka di rumah dengan tentor mahasiswa & alumni PTN terbaik, jadwal terpersonalisasi, dan perhatian 100% penuh.
          </p>
        </FloatUp>
      </div>

      {/* 2-Row x 3-Column Docker Bento Grid */}
      <div className="vprop-grid-2x3">
        {valuePropGridCells.map((cell) => {
          if (cell.type === "image") {
            /* Static image card — zero animation */
            return (
              <div key={cell.id} className="vprop-card vprop-card--img-full">
                <Image
                  src={cell.imageUrl || ""}
                  alt={cell.imageAlt || ""}
                  fill
                  sizes="(max-width: 960px) 100vw, 33vw"
                  className="vprop-card__full-img"
                />
              </div>
            );
          }

          /* Static text card container — inner reasons 1-6 animate individually */
          return (
            <div key={cell.id} className="vprop-card vprop-card--dual-text">
              {cell.reasons?.map((reason, rIdx) => {
                const globalIndex = reasonCounter++;
                return (
                  <FloatUp
                    key={reason.number}
                    staggerIndex={globalIndex}
                    staggerStep={70}
                    distance={12}
                    className={`vprop-reason ${rIdx === 1 ? "vprop-reason--right" : "vprop-reason--left"}`}
                  >
                    <h3 className="vprop-reason__title">
                      {rIdx === 1 ? (
                        <>
                          {reason.title}
                          <span className="vprop-reason__num">{reason.number}</span>
                        </>
                      ) : (
                        <>
                          <span className="vprop-reason__num">{reason.number}</span>
                          {reason.title}
                        </>
                      )}
                    </h3>
                    <p className="vprop-reason__desc">{reason.description}</p>
                  </FloatUp>
                );
              })}
            </div>
          );
        })}
      </div>
    </section>
  );
}
