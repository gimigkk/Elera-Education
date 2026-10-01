export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const faqData: FaqItem[] = [
  {
    id: "jadwal",
    question: "Bagaimana penentuan jadwal les?",
    answer:
      "Jadwal fleksibel dan bisa didiskusikan serta disepakati langsung dengan tentor sesuai kenyamanan waktu anak.",
  },
  {
    id: "perbedaan-biaya",
    question: "Apa perbedaan biaya pendaftaran dan biaya per sesi?",
    answer:
      "Biaya pendaftaran dibayarkan untuk 1 tahun atau 1 semester sesuai kebutuhan, sedangkan biaya per sesi dibayarkan setiap pertemuan (90 menit).",
  },
  {
    id: "sistem-pembayaran",
    question: "Bagaimana sistem pembayaran biaya pendaftaran dan biaya per sesi?",
    answer:
      "Biaya pendaftaran bisa dicicil maksimal 3 bulan, dengan cicilan pertama dibayarkan saat les perdana. Untuk biaya per sesi, pembayaran bisa dilakukan mingguan, dua mingguan, atau bulanan di awal.",
  },
];
