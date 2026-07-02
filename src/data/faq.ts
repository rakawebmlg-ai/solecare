export interface FAQItem {
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    question: "Bagaimana cara order?",
    answer:
      "Gampang banget! Kamu cukup hubungi kami via WhatsApp, kirim foto sepatu beserta treatment yang diinginkan. Tim kami akan membantu menentukan treatment terbaik. Setelah deal, kamu bisa drop sepatu ke drop point terdekat atau request antar-jemput gratis.",
  },
  {
    question: "Berapa biaya cuci sepatu?",
    answer:
      "Harga mulai dari Rp15.000 untuk Quick Clean hingga Rp50.000 untuk layanan Repaint dan Reparasi. Harga bisa bervariasi tergantung jenis material dan tingkat kotoran. Kami selalu memberikan estimasi biaya transparan sebelum memulai pengerjaan.",
  },
  {
    question: "Material apa saja yang bisa dicuci?",
    answer:
      "Kami menangani hampir semua jenis material: Canvas, Mesh, Knit, Synthetic, Leather, Suede, Nubuck, dan material campuran. Setiap material ditangani dengan solusi dan teknik khusus yang sesuai.",
  },
  {
    question: "Berapa lama prosesnya?",
    answer:
      "Waktu pengerjaan bervariasi tergantung treatment: Quick Clean selesai 1 hari, Casual Clean 1-2 hari, Deep Clean 2-3 hari. Untuk treatment khusus seperti Whitening (3-4 hari) dan Repaint (5-7 hari). Kamu bisa pantau progress realtime via fitur tracking kami.",
  },
  {
    question: "Apakah bisa antar-jemput?",
    answer:
      "Ya! Kami menyediakan layanan antar-jemput gratis untuk area Bandung dan sekitarnya. Kamu juga bisa drop sepatu langsung ke drop point terdekat. Hubungi WhatsApp kami untuk jadwal pick-up.",
  },
  {
    question: "Bagaimana cara bayar?",
    answer:
      "Kami menerima pembayaran via transfer bank (BCA, BNI, Mandiri), e-wallet (GoPay, OVO, DANA, ShopeePay), dan juga cash saat pengambilan/pengiriman sepatu. Pembayaran dilakukan setelah sepatu selesai dikerjakan.",
  },
  {
    question: "Bagaimana cara melacak order saya?",
    answer:
      "Setelah order dikonfirmasi, kamu akan menerima Order ID unik (format: SLCxxxxxx). Buka halaman Lacak Sepatu di website kami, masukkan Order ID dan 4 digit terakhir nomor WhatsApp kamu, lalu klik Lacak. Status akan update realtime setiap ada perubahan.",
  },
];
