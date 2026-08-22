# Elera Education — Case Study & Design Engineering

A web application proposal and case study built for **Elera Education**, a private home tutoring service operating in D.I. Yogyakarta, Indonesia.

## Context & Motivation

Elera Education is a growing local education initiative in Yogyakarta. Prior to this project, they operated without an official web presence, relying entirely on direct messaging and word-of-mouth. Because my partner works as one of their tutors, I built this concept to serve as a production-grade proposal—bridging real business data with a highly structured, modern design system.

---

## Design Choices & Aesthetic Direction

### Docker-Inspired Structural Engineering
Rather than leaning into soft SaaS tropes (gradient blobs, floating cards, noisy blur backdrops), the visual language is adapted from **Docker's web design system**:

- **Geometric Grid Lines**: Sections and cards are defined by sharp, explicit 1px single-thickness borders (`#CBD5E1`). Section dividers share adjacent border properties to eliminate doubled border artifacts across rows.
- **Universal Page Gutters**: All components bind to standardized horizontal and vertical layout variables (`--gutter-x`, `--gutter-y`). This ensures that regardless of device viewport, the visual margin and internal padding maintain perfect mathematical rhythm.
- **Controlled Palette**: A high-contrast palette pairing pure white backgrounds (`#FFFFFF`) with Docker Electric Blue (`#0066FF`) and Deep Navy (`#001C3E`) text for high legibility.

### Bento Grid Value Propositions
Instead of generic three-column feature blocks, key value propositions are presented in a structured 2-row × 3-column Bento Grid. Full-bleed image cutouts alternate with dual-reason text cells, maintaining strict baseline alignment and equal cell height.

---

## Engineering Mechanics

### Zero-Layout-Shift Slot Transitions (`SlotReel`)
Animating text or price changes often causes layout reflows when values change length. 

To eliminate layout shifts, pricing cards and tutor metadata utilize a custom `SlotReel` architecture using CSS Grid stacking:
- Parent containers lock cell size using `grid-template-areas: "slot"`.
- Old and new text reels overlay in the exact same grid area (`grid-area: slot`).
- Outgoing elements roll up and out while incoming elements roll up into place, completely isolating layout geometry from dynamic content changes.

### Orthographic 3D Cutout Rotations
Tutor profile cards utilize a custom Y-axis flip animation on hover and carousel rotation:
- To keep the tutor cutouts feeling crisp and orthographic rather than visually distorted by camera perspective, an extended perspective depth (`8000px`) is applied.
- The 90-degree `rotateY` flip transitions with a custom spring curve (`cubic-bezier(0.34, 1.56, 0.64, 1)`), giving the cutout a tactile, physical feel while maintaining flat visual precision.

### Markdown Pricing Source of Truth
Pricing structures for SD, SMP, and SMA grade tiers are decoupled into `pricing-source-of-truth.md`. Component states consume structured data parsed directly from this source, ensuring 100% verbatim fidelity to Elera's actual program catalog.

---

## Key Components Overview

- `src/components/sections/hero-section.tsx`: Staggered slot-machine tutor carousel with 3D cutout flips.
- `src/components/sections/value-props-section.tsx`: 2×3 Bento grid with image cutouts and structural borders.
- `src/components/sections/pricing-section.tsx`: Interactive tier filter with zero-shift `SlotReel` price counters.
- `src/components/sections/cta-section.tsx`: D.I. Yogyakarta coverage map and tutor request flow.
- `src/components/sections/footer-section.tsx`: Unified grid footer with brand metadata and navigation links.
