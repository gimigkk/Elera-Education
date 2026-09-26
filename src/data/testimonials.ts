export interface ChatReplyQuote {
  senderName?: string;
  text: string;
}

export interface ChatMessage {
  id: string;
  sender: "client" | "admin";
  text?: string;
  forwarded?: boolean;
  replyQuote?: ChatReplyQuote;
  image?: {
    src?: string;
    caption?: string;
    scoreTag?: string;
    subject?: string;
    highlight?: string;
  };
  time: string;
  status?: "sent" | "delivered" | "read";
}

export interface TestimonialContact {
  id: string;
  name: string;
  role: string;
  program: string;
  avatarIcon: "cat" | "rabbit" | "dog" | "bird";
  dateStr: string;
  previewSnippet: string;
  messages: ChatMessage[];
}

export const testimonialsData: TestimonialContact[] = [
  {
    id: "wali-ahmad",
    name: "Ibu Ahmad",
    role: "Wali Murid SD Muhammadiyah",
    program: "Pendampingan ASAT & Ulangan Harian",
    avatarIcon: "cat",
    dateStr: "05/06/26",
    previewSnippet: "Alhamdulillah Ahmad bagus2 nilainya... Dulu rata2 5, 6",
    messages: [
      {
        id: "a-1",
        sender: "client",
        text: "Assalamu'alaikum mbak Rahma... Mbakk.. Aku mau ngucapin terimakasih banyak utk bimbingan les selama ini.. Alhamdulillah Ahmad bagus2 nilainya...",
        time: "05:51",
      },
      {
        id: "a-2",
        sender: "client",
        image: {
          src: "/images/testimonials/lembar-asat-ahmad.webp",
        },
        time: "05:51",
      },
      {
        id: "a-3",
        sender: "client",
        text: "Padahal dulu kalo ulangan nilainya rata2 5, 6 🥺🥺 Sekali lagi mksh bnyak ya mbk.. Mhn maap klo slm bimbingan les anakku ada kurangnya. Pokoke ttp semangat 🥰🙏",
        time: "05:53",
      },
      {
        id: "a-4",
        sender: "admin",
        text: "Waalaikumsalam, alhamdulillah bu, semoga ini bisa dipertahankan nggih, dan saya juga minta maaf jika ada kekurangan selama mendampingi. Tetap semangat belajarnya Ahmad! 🙌💙",
        time: "06:05",
        status: "read",
      },
    ],
  },
  {
    id: "wali-murid-6a",
    name: "Wali Murid Kelas 6A",
    role: "Wali Murid SD Sleman",
    program: "Persiapan TKA & Ujian Sekolah",
    avatarIcon: "dog",
    dateStr: "Kemarin",
    previewSnippet: "Mbak Rahma, ini nilai TKA anak... Matematika 90, B. Indo 96.67",
    messages: [
      {
        id: "t-1",
        sender: "client",
        forwarded: true,
        image: {
          src: "/images/testimonials/nilai-tka-6a.webp",
        },
        time: "14:43",
      },
      {
        id: "t-2",
        sender: "client",
        text: "Assalamu'alaikum warahmatullahi wabarakatuh.\nMbak Rahma, ini nilai TKA anak. Untuk ujian sekolahnya juga alhamdulillah nilainya bagus2 (tapi IPAS remedi wkwkwk). Jazaakillah khayran bantuannya selama ini mbak, meski gk jadi daftar MTsN 6 😂. Tapi kami puas banget dengan nilainya yang membuktikan bahwa sebenarnya dia mampu, dan dia pun abis ujian gak mumet stres.\nSekali lagi, makasih banyak mbak Rahma 🌸",
        time: "14:43",
      },
      {
        id: "t-3",
        sender: "admin",
        text: "Waalaikumsalam wr. wb,\nAlhamdulillah nilainya sudah keluar dan bagus sekali Ibu! Meskipun masih ada 1 mapel yang perlu remidi, proses belajarnya luar biasa. Terimakasih banyak untuk orangtua dan adik! 🎓✨",
        time: "14:50",
        status: "read",
      },
    ],
  },
  {
    id: "siswa-sd-nu",
    name: "Siswa SD NU Sleman",
    role: "Siswa Kelas 6 SD",
    program: "Bimbingan Sukses TKA Sleman",
    avatarIcon: "rabbit",
    dateStr: "Selasa",
    previewSnippet: "siang kak,ini udah dapet nilai tka tkad kemarin🙏🙏",
    messages: [
      {
        id: "s-1",
        sender: "client",
        image: {
          src: "/images/testimonials/skhtka-sd-nu-sleman.webp",
          caption: "siang kak,ini udah dapet nilai tka tkad kemarin🙏🙏",
        },
        time: "14:18",
      },
      {
        id: "s-2",
        sender: "client",
        text: "terimakasi yaa mba rahma udah dampingin saya belajar selama ini,maaf jika ada kesalahan dalam pembelajaran selama inii🙏🙏",
        time: "14:19",
      },
      {
        id: "s-3",
        sender: "admin",
        text: "Siang juga, selamat ya untuk nilainya yang sudah keluar! Nilai TKA Matematika 90 dan Bahasa Indonesia 96,67 mantap sekali. Semoga di jenjang SMP makin berprestasi dan semangat belajarnya! 🌟👏",
        time: "14:26",
        status: "read",
      },
    ],
  },
  {
    id: "wali-murid-rachel",
    name: "Wali Murid Mbak Rachel",
    role: "Wali Murid Privat SD",
    program: "Bimbingan Privat 1-on-1",
    avatarIcon: "bird",
    dateStr: "18.46",
    previewSnippet: "Nilainya memuaskan mbakk... Terimakasihh",
    messages: [
      {
        id: "r-1",
        sender: "client",
        text: "Nilainya memuaskan mbakk",
        time: "18.46",
      },
      {
        id: "r-2",
        sender: "client",
        text: "Terimakasihh",
        time: "18.46",
      },
      {
        id: "r-4",
        sender: "admin",
        replyQuote: {
          senderName: "Wali Murid Mbak Rachel",
          text: "Terimakasih atas semua jasanya mbak",
        },
        text: "Sama-sama. Itu semua juga berkat kerja kerasnya ✨",
        time: "18.47",
        status: "read",
      },
      {
        id: "r-5",
        sender: "client",
        replyQuote: {
          senderName: "Anda",
          text: "Sama-sama. Itu semua juga berkat kerja kerasnya ✨",
        },
        text: "Makasihh banyakk yaa mbakkkkkk",
        time: "18.47",
      },
      {
        id: "r-6",
        sender: "admin",
        text: "Keren banget nilainya😍😍",
        time: "18.47",
        status: "read",
      },
      {
        id: "r-7",
        sender: "client",
        replyQuote: {
          senderName: "Anda",
          text: "Keren banget nilainya😍😍",
        },
        text: "Nggak bisaa bilang yang lain selain terimakasih samaa mbak Rachel",
        time: "18.48",
      },
    ],
  },
];
