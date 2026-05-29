/* ─── Pricing Data — Source of Truth ─────────────────────────────
 * All prices verbatim from:
 *   "Pilihan Program Bimbel ELERA EDUCATION (Tentor Datang ke Rumah).pdf"
 *
 * Structure: 3 SchoolTiers → GradeGroups → ClassOptions
 * ─────────────────────────────────────────────────────────────── */

export type SchoolTierKey = "TK" | "SD" | "SMP";

export interface ClassOption {
  type: "Privat" | "Semi-Privat" | "Kelompok";
  description: string;
  durationMinutes: number;
  sessionPrice: number;
  pricePerChild: number;
  pricePerChildMax?: number;
  originalPricePerChild?: number;
  originalPricePerChildMax?: number;
  maxStudents?: number;
  available: boolean;
  cocokUntuk: string;
}

export interface GradeGroup {
  key: string;
  label: string;
  options: ClassOption[];
}

export interface SchoolTier {
  key: SchoolTierKey;
  label: string;
  grades: GradeGroup[];
  registrationFee: {
    semester: number;
    annual: number;
  };
}

export const schoolTiers: SchoolTier[] = [
  {
    key: "TK",
    label: "TK",
    grades: [
      {
        key: "tk-calistung",
        label: "Calistung",
        options: [
          {
            type: "Privat",
            description: "1 anak 1 tentor",
            durationMinutes: 60,
            sessionPrice: 40_000,
            pricePerChild: 40_000,
            available: true,
            cocokUntuk: "Fokus penuh untuk anak Anda",
          },
          {
            type: "Semi-Privat",
            description: "2–3 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 50_000,
            pricePerChild: 16_500,
            pricePerChildMax: 25_000,
            originalPricePerChild: 40_000,
            maxStudents: 3,
            available: true,
            cocokUntuk: "Belajar bersama teman, biaya lebih hemat",
          },
          {
            type: "Kelompok",
            description: "Tidak tersedia untuk TK",
            durationMinutes: 0,
            sessionPrice: 0,
            pricePerChild: 0,
            available: false,
            cocokUntuk: "",
          },
        ],
      },
    ],
    registrationFee: { semester: 125_000, annual: 200_000 },
  },
  {
    key: "SD",
    label: "SD",
    grades: [
      {
        key: "sd-1-3",
        label: "Kelas 1–3",
        options: [
          {
            type: "Privat",
            description: "1 anak 1 tentor",
            durationMinutes: 90,
            sessionPrice: 45_000,
            pricePerChild: 45_000,
            available: true,
            cocokUntuk: "Perhatian penuh untuk fondasi belajar",
          },
          {
            type: "Semi-Privat",
            description: "2 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 50_000,
            pricePerChild: 25_000,
            originalPricePerChild: 45_000,
            maxStudents: 2,
            available: true,
            cocokUntuk: "Ajak teman atau saudara, lebih seru",
          },
          {
            type: "Kelompok",
            description: "3–5 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 55_000,
            pricePerChild: 11_000,
            pricePerChildMax: 18_000,
            originalPricePerChild: 45_000,
            maxStudents: 5,
            available: true,
            cocokUntuk: "Harga paling hemat untuk belajar ramai",
          },
        ],
      },
      {
        key: "sd-4-5",
        label: "Kelas 4–5",
        options: [
          {
            type: "Privat",
            description: "1 anak 1 tentor",
            durationMinutes: 90,
            sessionPrice: 50_000,
            pricePerChild: 50_000,
            available: true,
            cocokUntuk: "Perhatian penuh menjelang kelas atas",
          },
          {
            type: "Semi-Privat",
            description: "2 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 50_000,
            pricePerChild: 25_000,
            originalPricePerChild: 50_000,
            maxStudents: 2,
            available: true,
            cocokUntuk: "Belajar bareng, biaya terbagi dua",
          },
          {
            type: "Kelompok",
            description: "3–5 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 60_000,
            pricePerChild: 12_000,
            pricePerChildMax: 20_000,
            originalPricePerChild: 50_000,
            maxStudents: 5,
            available: true,
            cocokUntuk: "Hemat dan tetap efektif",
          },
        ],
      },
      {
        key: "sd-6",
        label: "Kelas 6",
        options: [
          {
            type: "Privat",
            description: "1 anak 1 tentor",
            durationMinutes: 90,
            sessionPrice: 55_000,
            pricePerChild: 55_000,
            available: true,
            cocokUntuk: "Persiapan intensif ujian kenaikan kelas",
          },
          {
            type: "Semi-Privat",
            description: "2 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 60_000,
            pricePerChild: 30_000,
            originalPricePerChild: 55_000,
            maxStudents: 2,
            available: true,
            cocokUntuk: "Berdua lebih semangat menghadapi ujian",
          },
          {
            type: "Kelompok",
            description: "3–5 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 65_000,
            pricePerChild: 13_000,
            pricePerChildMax: 21_500,
            originalPricePerChild: 55_000,
            maxStudents: 5,
            available: true,
            cocokUntuk: "Persiapan ujian bareng teman sekelas",
          },
        ],
      },
    ],
    registrationFee: { semester: 125_000, annual: 200_000 },
  },
  {
    key: "SMP",
    label: "SMP",
    grades: [
      {
        key: "smp-7-8",
        label: "Kelas 7–8",
        options: [
          {
            type: "Privat",
            description: "1 anak 1 tentor",
            durationMinutes: 90,
            sessionPrice: 60_000,
            pricePerChild: 60_000,
            available: true,
            cocokUntuk: "Fokus materi SMP yang lebih kompleks",
          },
          {
            type: "Semi-Privat",
            description: "2 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 60_000,
            pricePerChild: 30_000,
            originalPricePerChild: 60_000,
            maxStudents: 2,
            available: true,
            cocokUntuk: "Diskusi berdua, saling bantu memahami",
          },
          {
            type: "Kelompok",
            description: "3–5 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 65_000,
            pricePerChild: 13_000,
            pricePerChildMax: 21_500,
            originalPricePerChild: 60_000,
            maxStudents: 5,
            available: true,
            cocokUntuk: "Belajar kelompok dengan biaya minimal",
          },
        ],
      },
      {
        key: "smp-9",
        label: "Kelas 9",
        options: [
          {
            type: "Privat",
            description: "1 anak 1 tentor",
            durationMinutes: 90,
            sessionPrice: 65_000,
            pricePerChild: 65_000,
            available: true,
            cocokUntuk: "Persiapan ujian akhir secara intensif",
          },
          {
            type: "Semi-Privat",
            description: "2 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 65_000,
            pricePerChild: 32_500,
            originalPricePerChild: 65_000,
            maxStudents: 2,
            available: true,
            cocokUntuk: "Fokus ujian bersama teman dekat",
          },
          {
            type: "Kelompok",
            description: "3–5 anak dalam satu sesi",
            durationMinutes: 90,
            sessionPrice: 70_000,
            pricePerChild: 14_000,
            pricePerChildMax: 23_500,
            originalPricePerChild: 65_000,
            maxStudents: 5,
            available: true,
            cocokUntuk: "Hemat maksimal untuk persiapan ujian",
          },
        ],
      },
    ],
    registrationFee: { semester: 150_000, annual: 250_000 },
  },
];

/** WhatsApp CTA config — shared with hero */
export const pricingWhatsApp = {
  number: "628129387076",
  buildMessage: (tierLabel: string, gradeLabel: string, classType: string) =>
    `Halo, saya ingin mendaftar les ${classType} untuk anak saya ${tierLabel} ${gradeLabel}`,
};
