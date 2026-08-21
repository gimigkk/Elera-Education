export interface Tutor {
  id: string;
  name: string;
  photoUrl: string;
  subjects: string[];
  education: string;
  levelsCovered: SchoolLevel[];
  featured?: boolean;
}

export type SchoolLevel = "TK" | "SD" | "SMP";

export interface Testimonial {
  id: string;
  parentName: string;
  childLevel: string;
  quote: string;
  rating: 1 | 2 | 3 | 4 | 5;
}

export interface RegistrationFee {
  level: "TK-SD Kelas 6" | "SMP Kelas 7-9";
  duration: "1 Semester" | "1 Tahun";
  price: number;
}

export interface LessonRate {
  level: string;
  classType: "Privat" | "Semi-Privat" | "Kelompok";
  description: string;
  durationMinutes: number;
  price: number;
  priceNote?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

/** Star tutor data displayed in the hero section */
export interface StarTutor {
  name: string;
  university: string;
  gpa: number;
  subjects: string[];
  studentsCount: number;
  yearsExperience: number;
  photoUrl: string;
  bgUrl?: string;
  quote?: string;
}

/** Hero CTA content for the left panel */
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
  cellIndex: number; // 1 to 6
  type: GridCellType;
  imageUrl?: string;
  imageAlt?: string;
  imageBadge?: string;
  imageCategory?: string;
  reasons?: [ValuePropReason, ValuePropReason];
}
