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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL
  ? process.env.NEXT_PUBLIC_SITE_URL
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://elera-edu.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Elera Education | Bimbel Privat Jogja - Tentor Datang ke Rumah",
    template: "%s | Elera Education",
  },
  description:
    "Bimbel privat terbaik di Jogja guru datang ke rumah untuk TK, SD, & SMP. Jadwal fleksibel, pendampingan kurikulum personal, dan tentor pilihan kampus ternama.",
  keywords: [
    "bimbel privat jogja",
    "les privat jogja",
    "les privat datang ke rumah jogja",
    "bimbel tk sd smp jogja",
    "guru les privat yogyakarta",
    "les privat sleman",
    "les privat bantul",
    "les calistung jogja",
    "bimbel ujian sekolah jogja",
    "elera education jogja",
  ],
  authors: [{ name: "Elera Education", url: siteUrl }],
  creator: "Elera Education",
  publisher: "Elera Education",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/icon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/icon.svg" }],
  },
  openGraph: {
    title: "Elera Education | Bimbel Privat Jogja - Tentor Datang ke Rumah",
    description:
      "Bimbel privat datang ke rumah untuk TK, SD, & SMP di Yogyakarta. Pendampingan personal 1-on-1, jadwal fleksibel, dan tentor PTN ternama.",
    url: siteUrl,
    siteName: "Elera Education",
    locale: "id_ID",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        type: "image/jpeg",
        alt: "Elera Education - Bimbel Privat Jogja Datang ke Rumah",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Elera Education | Bimbel Privat Jogja - Tentor Datang ke Rumah",
    description:
      "Bimbel privat datang ke rumah untuk TK, SD, & SMP di Yogyakarta. Pendampingan personal 1-on-1, jadwal fleksibel, dan tentor PTN ternama.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  category: "Education",
  verification: {
    google: "hgIC2XmT3XQbkI6Rf0V0I8VHzGPfxRVSG_9_QqsI12A",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["EducationalOrganization", "LocalBusiness"],
      "@id": `${siteUrl}/#organization`,
      name: "Elera Education",
      alternateName: "Bimbel Privat Elera Education Jogja",
      url: siteUrl,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/icon.svg`,
      },
      image: `${siteUrl}/og-image.jpg`,
      description:
        "Bimbingan belajar panggilan privat terbaik di Yogyakarta untuk jenjang TK, SD, dan SMP. Guru les privat datang langsung ke rumah dengan kurikulum personal dan jadwal fleksibel.",
      telephone: "+6283176268728",
      priceRange: "Rp 35.000 - Rp 95.000",
      currenciesAccepted: "IDR",
      paymentAccepted: "Cash, Transfer Bank",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Yogyakarta",
        addressRegion: "Daerah Istimewa Yogyakarta",
        addressCountry: "ID",
      },
      geo: {
        "@type": "GeoCoordinates",
        latitude: -7.7956,
        longitude: 110.3695,
      },
      areaServed: [
        { "@type": "City", name: "Yogyakarta" },
        { "@type": "AdministrativeArea", name: "Kabupaten Sleman" },
        { "@type": "AdministrativeArea", name: "Kabupaten Bantul" },
      ],
      sameAs: ["https://www.instagram.com/elera.education.jogja/"],
      openingHoursSpecification: [
        {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ],
          opens: "07:00",
          closes: "21:00",
        },
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: siteUrl,
      name: "Elera Education",
      publisher: {
        "@id": `${siteUrl}/#organization`,
      },
      inLanguage: "id-ID",
    },
    {
      "@type": "FAQPage",
      "@id": `${siteUrl}/#faq`,
      mainEntity: [
        {
          "@type": "Question",
          name: "Bagaimana penentuan jadwal les?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Jadwal fleksibel dan bisa didiskusikan serta disepakati langsung dengan tentor sesuai kenyamanan waktu anak.",
          },
        },
        {
          "@type": "Question",
          name: "Apa perbedaan biaya pendaftaran dan biaya per sesi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biaya pendaftaran dibayarkan untuk 1 tahun atau 1 semester sesuai kebutuhan, sedangkan biaya per sesi dibayarkan setiap pertemuan (90 menit).",
          },
        },
        {
          "@type": "Question",
          name: "Bagaimana sistem pembayaran biaya pendaftaran dan biaya per sesi?",
          acceptedAnswer: {
            "@type": "Answer",
            text: "Biaya pendaftaran bisa dicicil maksimal 3 bulan, dengan cicilan pertama dibayarkan saat les perdana. Untuk biaya per sesi, pembayaran bisa dilakukan mingguan, dua mingguan, atau bulanan di awal.",
          },
        },
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${spaceGrotesk.variable} ${plusJakartaSans.variable} ${instrumentSerif.variable} ${caveat.variable}`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <ScrollToTopOnRefresh />
        {children}
      </body>
    </html>
  );
}
