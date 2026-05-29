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
        badge: "Tentor & Kenyamanan",
        title: "Tentor Datang ke Rumah",
        description: "Tentor kompeten dari PTN terbaik datang ke rumah, anak belajar nyaman dan aman tanpa repot diantar.",
      },
      {
        number: "02",
        badge: "Fleksibilitas & Evaluasi",
        title: "Jadwal Fleksibel & Evaluasi",
        description: "Jadwal les menyesuaikan waktu anak, dilengkapi soal-soal evaluasi rutin untuk memantau perkembangan.",
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
        badge: "Bebas Pilih Mapel",
        title: "Bebas Pilih Mata Pelajaran",
        description: "Anak bebas memilih mata pelajaran yang ingin dibahas dalam setiap pertemuan (MTK, IPA, B.Inggris, dll).",
      },
      {
        number: "04",
        badge: "Kurikulum & Modul",
        title: "Kurikulum Sekolah & Modul",
        description: "Materi menyesuaikan kurikulum sekolah anak, serta tersedia modul belajar tambahan khusus kelas 4–6 SD.",
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
        badge: "Kelas Minimalis",
        title: "Kelompok Belajar Minimalis",
        description: "Pilihan Privat (1-on-1), Semi-Privat (2 anak), hingga Kelompok (3-5 anak) agar perhatian tentor 100% fokus.",
      },
      {
        number: "06",
        badge: "Free Support",
        title: "Free Konsultasi PR & Tugas",
        description: "Fasilitas bebas biaya konsultasi untuk pengerjaan PR harian, tugas projek sekolah, dan persiapan ujian.",
      },
    ],
  },
];
