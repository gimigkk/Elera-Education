"use client";

import Image from "next/image";
import { valuePropGridCells } from "@/data/value-props";

export function ValuePropsSection() {
  return (
    <section className="site-section vprop-section" id="keunggulan">
      {/* Section Header */}
      <div className="vprop-header">
        <span className="vprop-header__tag">KEUNGGULAN UTAMA</span>
        <h2 className="vprop-header__title">
          Solusi Bimbel Privat Terbaik Untuk Putra-Putri Anda
        </h2>
        <p className="vprop-header__subtitle">
          Pendampingan belajar tatap muka di rumah dengan tentor mahasiswa & alumni PTN terbaik, jadwal terpersonalisasi, dan perhatian 100% penuh.
        </p>
      </div>

      {/* 2-Row x 3-Column Docker Bento Grid */}
      <div className="vprop-grid-2x3">
        {valuePropGridCells.map((cell) => {
          if (cell.type === "image") {
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

          return (
            <div key={cell.id} className="vprop-card vprop-card--dual-text">
              {cell.reasons?.map((reason) => (
                <div key={reason.number} className="vprop-reason">
                  <div className="vprop-reason__header">
                    <span className="vprop-reason__num">{reason.number}</span>
                    <h3 className="vprop-reason__title">{reason.title}</h3>
                  </div>
                  <p className="vprop-reason__desc">{reason.description}</p>
                </div>
              ))}
            </div>
          );
        })}
      </div>
    </section>
  );
}
