import type { StarTutor, HeroCTA } from "@/types";

export const starTutors: StarTutor[] = [
  {
    name: "Sarah Putri",
    university: "IPB University - S1 Ilmu Komputer",
    gpa: 3.92,
    subjects: ["MTK", "IPA", "B.Ing"],
    studentsCount: 150,
    yearsExperience: 3,
    photoUrl: "/images/hero/Girl test.png",
    bgUrl: "/images/hero/test bg.png",
    quote: "Setiap anak punya cara belajar yang unik — tugas saya menemukan cara terbaik untuk mereka.",
  },
  {
    name: "Rian Hidayat",
    university: "UGM - S1 Teknik Elektro",
    gpa: 3.95,
    subjects: ["MTK", "Fisika", "Kimia"],
    studentsCount: 180,
    yearsExperience: 4,
    photoUrl: "/images/hero/tutor-2.png",
    bgUrl: "/images/hero/bg-2.png",
    quote: "Belajar sains & matematika jadi lebih mudah dengan metode penalaran konsep dasar.",
  },
  {
    name: "Nadia Rahma",
    university: "IPB University - S1 Biologi",
    gpa: 3.89,
    subjects: ["IPA", "Biologi", "B.Ing"],
    studentsCount: 135,
    yearsExperience: 3,
    photoUrl: "/images/hero/tutor-3.png",
    bgUrl: "/images/hero/bg-3.png",
    quote: "Membuat belajar terasa menyenangkan dan mudah dipahami sesuai ritme anak.",
  },
  {
    name: "Aulia Azzahra",
    university: "UGM - S1 Sastra Inggris",
    gpa: 3.91,
    subjects: ["B.Ing", "IPA", "MTK"],
    studentsCount: 145,
    yearsExperience: 3,
    photoUrl: "/images/hero/tutor-4.png",
    bgUrl: "/images/hero/bg-4.png",
    quote: "Pendampingan belajar yang komunikatif dan terstruktur agar anak lebih percaya diri di sekolah.",
  },
];

export const starTutor = starTutors[0];

export const heroCTA: HeroCTA = {
  headline: "Bimbel Datang ke Rumah",
  subheadline:
    "Les privat berkualitas untuk TK hingga SMP. Tentor terbaik, jadwal fleksibel, hasil nyata.",
  features: [
    "Jadwal fleksibel sesuai waktu anak",
    "Tentor berpengalaman & terverifikasi",
    "Kurikulum sesuai sekolah anak",
    "Free konsultasi PR & tugas",
  ],
  ctaText: "Daftar Sekarang",
  ctaWhatsAppNumber: "628129387076",
  ctaWhatsAppMessage:
    "Halo, saya ingin tanya tentang bimbel untuk anak saya kelas ___",
};

