# Elera Education — Landing Page Spec

## 1. Overview

**Project:** Marketing landing page for Elera Education, a home-visit tutoring service (bimbel panggilan) in Indonesia.

**Goal:** Convert visiting parents into leads via a WhatsApp-first CTA, while serving as a clean, modern portfolio piece demonstrating typed data architecture, component composition, and motion design in Next.js.

**Non-goals:** No auth, no CMS, no database, no admin panel, no multi-page site. Single scrolling page.

---

## 2. Tech Stack

| Concern | Choice | Why |
|---|---|---|
| Framework | Next.js 15 (App Router) + TypeScript, static export (`output: "export"`) | Standard modern React baseline; static export means no server runtime, ships as plain HTML/CSS/JS |
| Styling | Tailwind CSS | Fast to write, consistent spacing/color scale |
| Animation | **CSS only** — `@keyframes`, `transition`, `IntersectionObserver` for scroll reveals | No animation library dependency. Covers fades, slides, and reveal-on-scroll at ~0kb JS cost |
| UI primitives | Hand-rolled (`components/ui/`) | Accordion (FAQ) and carousel (hero/tutors) built with plain state + CSS transitions, no library |
| Fonts/Images | `next/font`, `next/image` | Built-in optimization, no extra config |
| Data | Typed local files (`data/*.ts`) | Structured content, swappable for a CMS later without touching components |
| Form handling | Native controlled inputs + WhatsApp deep link | No backend; `wa.me` link is the actual conversion path |
| Deployment | Vercel (or any static host, since output is static) | Zero-config with Next.js |

**Lightweight constraints:**
- No animation libraries (no Framer Motion, no Motion One). All motion is CSS `transition`/`@keyframes`, triggered by a class toggle from a small shared `useInView` hook (wraps `IntersectionObserver`, ~20 lines, no dependency).
- No component libraries (no shadcn/Radix). Carousel and accordion are hand-rolled with `useState` + CSS.
- Avoid client components where not needed — mark sections `"use client"` only if they hold interactive state (carousel, accordion, mobile nav). Static sections (value props, footer, pricing tables) stay server components with zero client JS.
- Target: total JS bundle for the page under ~50kb gzipped.

---

## 3. Folder Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx              # composes all sections in order
│   └── globals.css
├── components/
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── value-props-section.tsx
│   │   ├── programs-section.tsx
│   │   ├── tutors-section.tsx
│   │   ├── testimonials-section.tsx
│   │   ├── pricing-section.tsx
│   │   ├── faq-section.tsx
│   │   ├── cta-section.tsx
│   │   └── footer.tsx
│   └── ui/
│       ├── accordion.tsx        # useState + CSS max-height transition
│       ├── carousel.tsx         # useState + CSS transform/opacity transition
│       ├── whatsapp-button.tsx
│       └── section-heading.tsx
├── hooks/
│   └── use-in-view.ts           # IntersectionObserver wrapper for scroll-reveal classes
├── data/
│   ├── tutors.ts
│   ├── testimonials.ts
│   ├── pricing.ts
│   └── faq.ts
└── types.ts                  # shared interfaces
public/
└── images/
    ├── tutors/
    └── hero/
```

Rule: each section component imports only its own data slice. No cross-imports between `data/*` files. Adding/editing a tutor, price, or FAQ entry never requires touching a component.

---

## 4. Type Definitions (`types.ts`)

```ts
export interface Tutor {
  id: string;
  name: string;
  photoUrl: string;
  subjects: string[];        // e.g. ["Matematika", "IPA"]
  education: string;         // e.g. "Universitas Padjadjaran"
  levelsCovered: SchoolLevel[];
  featured?: boolean;        // true = appears in hero rotation
}

export type SchoolLevel = "TK" | "SD" | "SMP";

export interface Testimonial {
  id: string;
  parentName: string;
  childLevel: string;        // e.g. "SD Kelas 4"
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface RegistrationFee {
  level: "TK-SD Kelas 6" | "SMP Kelas 7-9";
  duration: "1 Semester" | "1 Tahun";
  price: number;             // in IDR
}

export interface LessonRate {
  level: string;              // e.g. "SD Kelas 4 dan 5"
  classType: "Privat" | "Semi-Privat" | "Kelompok";
  description: string;        // e.g. "2 anak dalam satu sesi"
  durationMinutes: number;
  price: number;
  priceNote?: string;         // e.g. "@anak Rp25.000"
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}
```

---

## 5. Data Content (from Elera pricing sheet)

### 5.1 Subjects offered
Bahasa Indonesia, Matematika, IPA/IPAS, Bahasa Inggris, Pendidikan Pancasila.

### 5.2 Program types
Ulangan Harian, Pendalaman Materi, UTS/UAS, TKA/TKAD.

### 5.3 Value propositions (for `value-props-section.tsx`)
- Tentor datang ke rumah
- Jadwal fleksibel sesuai waktu luang anak
- Anak bisa memilih mata pelajaran tiap pertemuan
- Materi menyesuaikan kurikulum sekolah anak
- Modul tambahan tersedia untuk kelas 4–6 SD (biaya tambahan)
- Kelompok belajar minimalis untuk fokus maksimal
- Free konsultasi PR & tugas

### 5.4 Registration fees (`data/pricing.ts` → `registrationFees`)

| Level | Duration | Fee |
|---|---|---|
| TK–SD Kelas 6 | 1 Semester | Rp125.000 |
| TK–SD Kelas 6 | 1 Tahun | Rp200.000 |
| SMP Kelas 7–9 | 1 Semester | Rp150.000 |
| SMP Kelas 7–9 | 1 Tahun | Rp250.000 |

Note: registration fee is waived for pendampingan ujian if enrolled 1–2 months before semester start. Installments: 2 months (semester package) or 3 months (annual package).

### 5.5 Lesson rates (`data/pricing.ts` → `lessonRates`)

| Level | Class Type | Detail | Duration | Price |
|---|---|---|---|---|
| TK-Calistung | Privat | 1 anak 1 tentor | 60 min | Rp40.000 |
| TK-Calistung | Semi-Privat | 2–3 anak | 90 min | Rp50.000 |
| SD Kelas 1-3 | Privat | 1 anak 1 tentor | 90 min | Rp45.000 |
| SD Kelas 1-3 | Semi-Privat | 2 anak | 90 min | Rp50.000 (@Rp25.000) |
| SD Kelas 1-3 | Kelompok | 3–5 anak | 90 min | Rp55.000 (@Rp11.000–18.000) |
| SD Kelas 4-5 | Privat | 1 anak 1 tentor | 90 min | Rp50.000 |
| SD Kelas 4-5 | Semi-Privat | 2 anak | 90 min | Rp50.000 (@Rp25.000) |
| SD Kelas 4-5 | Kelompok | 3–5 anak | 90 min | Rp60.000 (@Rp12.000–20.000) |
| SD Kelas 6 | Privat | 1 anak 1 tentor | 90 min | Rp55.000 |
| SD Kelas 6 | Semi-Privat | 2 anak | 90 min | Rp60.000 (@Rp30.000) |
| SD Kelas 6 | Kelompok | 3–5 anak | 90 min | Rp65.000 (@Rp13.000–21.500) |
| SMP Kelas 7-8 | Privat | 1 anak 1 tentor | 90 min | Rp60.000 |
| SMP Kelas 7-8 | Semi-Privat | 2 anak | 90 min | Rp60.000 (@Rp30.000) |
| SMP Kelas 7-8 | Kelompok | 3–5 anak | 90 min | Rp65.000 (@Rp13.000–21.500) |
| SMP Kelas 9 | Privat | 1 anak 1 tentor | 90 min | Rp65.000 |
| SMP Kelas 9 | Semi-Privat | 2 anak | 90 min | Rp65.000 (@Rp32.500) |
| SMP Kelas 9 | Kelompok | 3–5 anak | 90 min | Rp70.000 (@Rp14.000–23.500) |

Payment cadence for lessons: weekly, biweekly, or monthly, paid in advance.

### 5.6 Tutors, testimonials
Placeholder entries in `data/tutors.ts` and `data/testimonials.ts` — to be replaced with real content. Mark 2–3 tutors with `featured: true` to drive the hero carousel.

### 5.7 FAQ (seed content, editable in `data/faq.ts`)
- Bagaimana cara memilih tentor?
- Apakah bisa ganti tentor di tengah semester?
- Bagaimana sistem pembayaran & cicilan?
- Apakah tersedia untuk semua kecamatan?
- Apa bedanya kelas Privat, Semi-Privat, dan Kelompok?

---

## 6. Page Sections (in render order)

1. **Hero** — rotating/carousel of featured tutors, poster-style, primary WhatsApp CTA visible above the fold.
2. **Value Proposition** — grid of the 7 bullet points in §5.3.
3. **Jenjang & Mata Pelajaran** — subjects (§5.1) crossed with school levels (TK–SMP Kelas 9).
4. **Profil Pengajar** — full tutor grid (all tutors, not just featured).
5. **Testimoni** — testimonial cards/carousel.
6. **Paket Harga** — two tables: registration fees and lesson rates, from §5.4–5.5. Consider tabs by school level to avoid an overwhelming single table.
7. **FAQ** — accordion, seeded from §5.7.
8. **Kontak / CTA** — final WhatsApp CTA with prefilled message template (e.g. `"Halo, saya ingin tanya tentang bimbel untuk anak saya kelas ___"`), plus microcopy: "Isi form, tim kami akan hubungi kamu dalam 1x24 jam."
9. **Footer** — contact info, social links, subjects list, copyright.

No separate "how it works" section — the CTA note above covers process expectations inline.

---

## 7. Non-Functional Requirements

- **Responsive:** mobile-first (majority of traffic expected from WhatsApp/Instagram referral on phones).
- **Performance:** target Lighthouse 90+ on mobile; lazy-load tutor/testimonial images below the fold.
- **Accessibility:** accordion and carousel must be keyboard-navigable; sufficient color contrast on CTA buttons.
- **SEO:** basic metadata (title, description, OG image) in `layout.tsx`; static generation, no client-side data fetching needed.
- **Localization:** all content in Bahasa Indonesia; currency formatted as `Rp125.000` (period as thousands separator).

---

## 8. Out of Scope / Future Considerations

- Real backend for the registration form (currently WhatsApp deep link only).
- CMS integration — if content changes frequently in production, migrate `data/*.ts` to a headless CMS (e.g. Sanity) behind the same TypeScript interfaces.
- Multi-language support.
- Online payment for registration fees.
