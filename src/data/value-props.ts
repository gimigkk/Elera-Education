import type { ValuePropGridCell } from "@/types";

export const valuePropGridCells: ValuePropGridCell[] = [
  // Cell 1: FULL IMAGE (Row 1, Col 1)
  {
    id: "cell-1-img",
    cellIndex: 1,
    type: "image",
    imageUrl: "/images/vprops/home-tutor.png",
    imageAlt: "Tentor Datang ke Rumah",
    imageBadge: "Kenyamanan Belajar",
    imageCategory: "Pendampingan Tatap Muka di Rumah",
  },
  // Cell 2: TEXT CARD WITH 2 REASONS (Row 1, Col 2)
  {
    id: "cell-2-text",
    cellIndex: 2,
    type: "text-dual",
    reasons: [
      {
        number: "01",
        badge: "Kenyamanan Rumah",
        title: "Tentor Datang ke Rumah",
        description: "Anak belajar nyaman dan aman di lingkungan rumah tanpa perlu repot diantar ke tempat les.",
      },
      {
        number: "02",
        badge: "Fleksibilitas Waktu",
        title: "Jadwal Fleksibel",
        description: "Bebas menentukan hari dan jam les sesuai rutinitas anak serta ketersediaan waktu keluarga.",
      },
    ],
  },
  // Cell 3: FULL IMAGE (Row 1, Col 3)
  {
    id: "cell-3-img",
    cellIndex: 3,
    type: "image",
    imageUrl: "/images/vprops/subjects.png",
    imageAlt: "Pilihan Mata Pelajaran Terlengkap",
    imageBadge: "Personalisasi",
    imageCategory: "Materi Sesuai Kurikulum Sekolah",
  },
  // Cell 4: TEXT CARD WITH 2 REASONS (Row 2, Col 1)
  {
    id: "cell-4-text",
    cellIndex: 4,
    type: "text-dual",
    reasons: [
      {
        number: "03",
        badge: "Pilihan Mapel",
        title: "Bebas Pilih Mata Pelajaran",
        description: "Fokus pelajaran bisa disesuaikan tiap sesi (Matematika, IPA, B. Inggris, B. Indo, PPKn).",
      },
      {
        number: "04",
        badge: "Kurikulum Sekolah",
        title: "Kurikulum Menyesuaikan Sekolah",
        description: "Pendampingan materi dan PR dipersonalisasi mengikuti kurikulum dan modul dari sekolah siswa.",
      },
    ],
  },
  // Cell 5: FULL IMAGE (Row 2, Col 2)
  {
    id: "cell-5-img",
    cellIndex: 5,
    type: "image",
    imageUrl: "/images/vprops/homework.png",
    imageAlt: "Pendampingan Belajar Maksimal",
    imageBadge: "Perhatian 100%",
    imageCategory: "Free Konsultasi PR & Tugas",
  },
  // Cell 6: TEXT CARD WITH 2 REASONS (Row 2, Col 3)
  {
    id: "cell-6-text",
    cellIndex: 6,
    type: "text-dual",
    reasons: [
      {
        number: "05",
        badge: "Fokus Maksimal",
        title: "Kelompok Belajar Minimalis",
        description: "Pilihan Privat (1 anak 1 tentor) hingga Semi-Privat (2-3 anak) agar tentor fokus maksimal.",
      },
      {
        number: "06",
        badge: "Free Support",
        title: "Free Konsultasi PR & Tugas",
        description: "Bantuan pengerjaan PR harian, tugas projek sekolah, dan persiapan ujian tanpa biaya tambahan.",
      },
    ],
  },
];
