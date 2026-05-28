export interface RegistrationFee {
  gradeRange: string;
  duration: "1 Semester" | "1 Tahun";
  fee: number;
}

export interface PricingPlan {
  gradeCategory: string;
  gradeLabel: string;
  classType: "Privat" | "Semi-Privat" | "Kelompok";
  ratioDescription: string;
  durationMinutes: number;
  feePerSession: number;
  feePerChildRange?: string;
}

export const registrationFees: RegistrationFee[] = [
  { gradeRange: "TK - SD Kelas 6", duration: "1 Semester", fee: 125000 },
  { gradeRange: "TK - SD Kelas 6", duration: "1 Tahun", fee: 200000 },
  { gradeRange: "SMP Kelas 7 - 9", duration: "1 Semester", fee: 150000 },
  { gradeRange: "SMP Kelas 7 - 9", duration: "1 Tahun", fee: 250000 },
];

export const pricingPlans: PricingPlan[] = [
  // TK - Calistung
  {
    gradeCategory: "TK - Calistung",
    gradeLabel: "TK / PAUD (Calistung)",
    classType: "Privat",
    ratioDescription: "1 anak 1 tentor",
    durationMinutes: 60,
    feePerSession: 40000,
  },
  {
    gradeCategory: "TK - Calistung",
    gradeLabel: "TK / PAUD (Calistung)",
    classType: "Semi-Privat",
    ratioDescription: "2–3 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 50000,
    feePerChildRange: "Rp 16.500 – Rp 25.000",
  },

  // SD Kelas 1 - 3
  {
    gradeCategory: "SD Kelas 1-3",
    gradeLabel: "SD Kelas 1, 2 & 3",
    classType: "Privat",
    ratioDescription: "1 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 45000,
  },
  {
    gradeCategory: "SD Kelas 1-3",
    gradeLabel: "SD Kelas 1, 2 & 3",
    classType: "Semi-Privat",
    ratioDescription: "2 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 50000,
    feePerChildRange: "Rp 25.000",
  },
  {
    gradeCategory: "SD Kelas 1-3",
    gradeLabel: "SD Kelas 1, 2 & 3",
    classType: "Kelompok",
    ratioDescription: "3–5 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 55000,
    feePerChildRange: "Rp 11.000 – Rp 18.000",
  },

  // SD Kelas 4 & 5
  {
    gradeCategory: "SD Kelas 4-5",
    gradeLabel: "SD Kelas 4 & 5",
    classType: "Privat",
    ratioDescription: "1 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 50000,
  },
  {
    gradeCategory: "SD Kelas 4-5",
    gradeLabel: "SD Kelas 4 & 5",
    classType: "Semi-Privat",
    ratioDescription: "2 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 50000,
    feePerChildRange: "Rp 25.000",
  },
  {
    gradeCategory: "SD Kelas 4-5",
    gradeLabel: "SD Kelas 4 & 5",
    classType: "Kelompok",
    ratioDescription: "3–5 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 60000,
    feePerChildRange: "Rp 12.000 – Rp 20.000",
  },

  // SD Kelas 6
  {
    gradeCategory: "SD Kelas 6",
    gradeLabel: "SD Kelas 6",
    classType: "Privat",
    ratioDescription: "1 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 55000,
  },
  {
    gradeCategory: "SD Kelas 6",
    gradeLabel: "SD Kelas 6",
    classType: "Semi-Privat",
    ratioDescription: "2 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 60000,
    feePerChildRange: "Rp 30.000",
  },
  {
    gradeCategory: "SD Kelas 6",
    gradeLabel: "SD Kelas 6",
    classType: "Kelompok",
    ratioDescription: "3–5 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 65000,
    feePerChildRange: "Rp 13.000 – Rp 21.500",
  },

  // SMP Kelas 7 & 8
  {
    gradeCategory: "SMP Kelas 7-8",
    gradeLabel: "SMP Kelas 7 & 8",
    classType: "Privat",
    ratioDescription: "1 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 60000,
  },
  {
    gradeCategory: "SMP Kelas 7-8",
    gradeLabel: "SMP Kelas 7 & 8",
    classType: "Semi-Privat",
    ratioDescription: "2 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 60000,
    feePerChildRange: "Rp 30.000",
  },
  {
    gradeCategory: "SMP Kelas 7-8",
    gradeLabel: "SMP Kelas 7 & 8",
    classType: "Kelompok",
    ratioDescription: "3–5 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 65000,
    feePerChildRange: "Rp 13.000 – Rp 21.500",
  },

  // SMP Kelas 9
  {
    gradeCategory: "SMP Kelas 9",
    gradeLabel: "SMP Kelas 9",
    classType: "Privat",
    ratioDescription: "1 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 65000,
  },
  {
    gradeCategory: "SMP Kelas 9",
    gradeLabel: "SMP Kelas 9",
    classType: "Semi-Privat",
    ratioDescription: "2 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 65000,
    feePerChildRange: "Rp 32.500",
  },
  {
    gradeCategory: "SMP Kelas 9",
    gradeLabel: "SMP Kelas 9",
    classType: "Kelompok",
    ratioDescription: "3–5 anak 1 tentor",
    durationMinutes: 90,
    feePerSession: 70000,
    feePerChildRange: "Rp 14.000 – Rp 23.500",
  },
];
