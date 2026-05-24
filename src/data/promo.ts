export interface PromoItem {
  id: string;
  text: string;
  badge?: string;
}

export const promoItems: PromoItem[] = [
  {
    id: "promo-1",
    text: "Bebas Biaya Pendaftaran 100% Jika Mendaftar 2 Bulan Sebelum Semester Baru Dimulai",
    badge: "PROMO SPECIAL",
  },
  {
    id: "promo-2",
    text: "Gratis Biaya Registrasi 100% (Khusus Pendaftaran H-60 Semester Baru)",
    badge: "EARLY BIRD",
  },
  {
    id: "promo-3",
    text: "Bebas Biaya Pendaftaran 100% Jika Mendaftar 2 Bulan Sebelum Semester Baru Dimulai",
    badge: "DISKON 100%",
  },
];
