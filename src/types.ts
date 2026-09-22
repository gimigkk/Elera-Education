/** Hero CTA content */
export interface HeroCTA {
  headline: string;
  subheadline: string;
  features: string[];
  ctaText: string;
  ctaWhatsAppNumber: string;
  ctaWhatsAppMessage: string;
}

export interface University {
  id: string;
  name: string;
  line1: string;
  line2: string;
  shortName: string;
  logoUrl: string;
}

export interface ValuePropReason {
  number: string;
  badge: string;
  title: string;
  description: string;
}

export type GridCellType = "image" | "text-dual";

export interface ValuePropGridCell {
  id: string;
  cellIndex: number;
  type: GridCellType;
  imageUrl?: string;
  imageAlt?: string;
  imageBadge?: string;
  imageCategory?: string;
  reasons?: [ValuePropReason, ValuePropReason];
}
