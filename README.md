# Elera Education — Concept Case Study & Design System

A web application proposal built as a **concept case study** for **Elera Education**—a growing private home tutoring service based in D.I. Yogyakarta, Indonesia.

---

## Project Overview

Elera Education currently does not have a dedicated official website. This project was developed as a voluntary contribution and concept case study to establish a modern web presence for the company (where the author's partner works as a private tutor).

It translates Elera's real-world service model—verbatim pricing catalogs, tutor profiles, Yogyakarta coverage mapping, and direct lead capture—into a high-performance web experience engineered for visual clarity and conversion.

---

## Design System & Aesthetic Philosophy

The visual language of this application is heavily inferred from **Docker’s web design system** ([docker.com](https://www.docker.com)), built upon three core principles:

### 1. Geometric Structuralism
- **Sharp Grid Boundaries**: Sections, cards, and interactive frames use explicit, crisp 1px solid borders (`#CBD5E1` and `--border-color: #001C3E`) to construct clean visual containers without relying on heavy box-shadows or generic gradient blobs.
- **Bento Grid Architecture**: Information is chunked into rigid 2D grid cells (e.g., the 2-row × 3-column Value Proposition grid), providing mathematical order and effortless scannability.

### 2. Universal Page Gutters
- **Structured Layout Containers**: Universal page gutters (`--gutter-x`, `--gutter-y`) are a foundational element of the layout. They establish consistent horizontal baseline padding and vertical rhythm across all viewports.
- **Edge-to-Edge Visual Parity**: Every component—from the dynamic top navigation bar down to the global footer—aligns strictly to the same universal layout grid boundaries.

### 3. High-Contrast Professional Palette
- **Primary Tone**: Clean, bright white (`#FFFFFF`) and slate neutral (`#F9FAFB`) base surfaces.
- **Brand Accents**: Docker-inspired Electric Blue (`#0066FF`) paired with Deep Dark Navy (`#001C3E`) for high-legibility typography and focused interactive accents.
- **Typography**: Geometric headline font (**Space Grotesk**) paired with high-legibility body type (**Plus Jakarta Sans**).

---

## Key Technical & UI Features

- **3D Tutor Cutout Rotations**: Orthographic 3D Y-axis card-flip transitions (`cubic-bezier(0.34, 1.56, 0.64, 1)`) for hero tutor spotlight cutouts with zero perspective distortion.
- **Zero-Layout-Shift `SlotReel` Component**: CSS Grid-stacked layout (`grid-template-areas: "slot"`) ensuring seamless vertical roll-in/roll-out text and price transitions without shifting neighboring element geometry.
- **Synchronized Slot-Machine Tutor Reel**: Auto-playing star tutor carousel with staggered metadata transitions (header, experience chips, and rating stats).
- **Verbatim Pricing Source of Truth**: Full markdown-backed pricing model extracted directly from official program specifications for SD, SMP, and SMA grade tiers.
- **Geographical Service Mapping**: Interactive map integration and CTA section tailored specifically to D.I. Yogyakarta coverage areas.
- **Next.js 16 + Turbopack**: Blazing-fast static compilation, optimized asset loading, and client-side page rendering.

---

## Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Next.js 16](https://nextjs.org/) (App Router & Turbopack) |
| **Library** | [React 19](https://react.dev/) |
| **Styling** | Vanilla CSS (CSS Modules & Custom Properties design system) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) |
| **Typography** | `next/font` (Space Grotesk & Plus Jakarta Sans) |
| **Icons** | React Icons (`react-icons/fi`) + Custom Inline SVGs |

---

## Repository Structure

```text
├── src/
│   ├── app/                    # Next.js App Router (layout, page, metadata)
│   ├── components/
│   │   ├── sections/           # Modular section components & custom CSS
│   │   │   ├── hero-section.tsx / .css        # Hero slot reel & 3D carousel
│   │   │   ├── value-props-section.tsx / .css # Bento grid feature cells
│   │   │   ├── pricing-section.tsx / .css    # Tier selection & SlotReels
│   │   │   ├── cta-section.tsx / .css        # Service area map & contact info
│   │   │   ├── footer-section.tsx / .css     # Standardized global footer
│   │   │   ├── promo-marquee.tsx / .css      # Accent marquee track
│   │   │   └── university-marquee.tsx / .css # Partner trust marquee
│   │   └── ui/                 # Reusable atomic UI elements (Navbar, Logo, etc.)
│   ├── data/                   # Static data models and content configs
│   └── types.ts                # Shared TypeScript type interfaces
├── pricing-source-of-truth.md  # Verbatim program catalog source of truth
├── public/                     # Static media assets, icons, and tutor cutouts
└── next.config.ts              # Next.js build configuration
```

---

## Getting Started

### Prerequisites

Ensure you have **Node.js 18+** installed on your system.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/elera-education.git
   cd elera-education
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Local Development

Start the Next.js development server with Turbopack enabled:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to explore the live application.

### Production Build

To build and validate the optimized production bundle:
```bash
npm run build
```

To run the production server locally:
```bash
npm run start
```

---

## License & Disclaimer

This project is an independent web application proposal and concept study case built for **Elera Education**. All brand names, program details, and media assets belong to their respective owners.
