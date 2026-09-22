import type { Metadata } from "next";
import { Space_Grotesk, Plus_Jakarta_Sans, Instrument_Serif, Caveat } from "next/font/google";
import "./globals.css";
import { ScrollToTopOnRefresh } from "@/components/ui/scroll-to-top";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const caveat = Caveat({
  subsets: ["latin"],
  variable: "--font-handwriting",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://eleraeducation.com"),
  title: "Elera Education | Bimbel Panggilan Privat Yogyakarta",
  description:
    "Bimbel Panggilan Privat Terbaik di Yogyakarta. Tentor datang ke rumah, jadwal fleksibel, dan pendampingan kurikulum terpersonalisasi untuk TK hingga SMP.",
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
  },
  openGraph: {
    title: "Elera Education | Bimbel Panggilan Privat Yogyakarta",
    description:
      "Bimbel Panggilan Privat Terbaik di Yogyakarta. Tentor datang ke rumah, jadwal fleksibel, dan pendampingan kurikulum terpersonalisasi untuk TK hingga SMP.",
    url: "https://eleraeducation.com",
    siteName: "Elera Education",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Elera Education - Bimbel Privat Jogja, Datang ke Rumah, Hasil Nyata",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Elera Education | Bimbel Panggilan Privat Yogyakarta",
    description:
      "Bimbel Panggilan Privat Terbaik di Yogyakarta. Tentor datang ke rumah, jadwal fleksibel, dan pendampingan kurikulum terpersonalisasi untuk TK hingga SMP.",
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${instrumentSerif.variable} ${caveat.variable}`}>
      <body>
        <ScrollToTopOnRefresh />
        {children}
      </body>
    </html>
  );
}
