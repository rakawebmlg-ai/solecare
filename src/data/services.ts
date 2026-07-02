export interface Service {
  slug: string;
  name: string;
  category: "Perawatan Harian" | "Perawatan Khusus" | "Restorasi";
  price: number;
  priceLabel: string;
  duration: string;
  shortDesc: string;
  longDesc: string[];
  tag: string;
  icon: string;
  partsHandled: string[];
  compatibleMaterials: string[];
  processSteps: { step: number; title: string; desc: string }[];
  priceTable?: { material: string; price: string }[];
}

export const services: Service[] = [
  // === PERAWATAN HARIAN ===
  {
    slug: "quick-clean",
    name: "Quick Clean",
    category: "Perawatan Harian",
    price: 15000,
    priceLabel: "Rp15.000",
    duration: "1 hari",
    shortDesc: "Pembersihan cepat untuk sepatu yang tidak terlalu kotor. Cocok untuk perawatan rutin setelah pemakaian sehari-hari.",
    longDesc: [
      "Quick Clean adalah layanan pembersihan cepat yang dirancang untuk sepatu dengan tingkat kotoran ringan. Layanan ini ideal untuk kamu yang ingin menjaga kebersihan sepatu secara rutin tanpa harus menunggu lama.",
      "Proses Quick Clean meliputi pembersihan bagian upper sepatu menggunakan solusi khusus yang aman untuk berbagai jenis material. Kami memastikan sepatu kamu kembali segar dan bersih dalam waktu singkat.",
      "Layanan ini sangat direkomendasikan sebagai perawatan berkala. Dengan rutin melakukan Quick Clean, kamu bisa memperpanjang umur sepatu dan menjaga penampilannya tetap prima."
    ],
    tag: "BAGIAN ATAS",
    icon: "⚡",
    partsHandled: ["Upper sepatu", "Bagian lidah (tongue)", "Bagian luar sol"],
    compatibleMaterials: ["Canvas", "Mesh", "Knit", "Synthetic"],
    processSteps: [
      { step: 1, title: "Inspeksi Awal", desc: "Cek kondisi sepatu dan identifikasi area kotor" },
      { step: 2, title: "Dry Brushing", desc: "Membersihkan debu dan kotoran kering dengan sikat khusus" },
      { step: 3, title: "Spot Cleaning", desc: "Pembersihan area kotor dengan solusi pembersih" },
      { step: 4, title: "Pengeringan", desc: "Pengeringan alami, sepatu siap diambil" },
    ],
    priceTable: [
      { material: "Canvas / Mesh", price: "Rp15.000" },
      { material: "Knit / Synthetic", price: "Rp15.000" },
      { material: "Suede / Nubuck", price: "Rp20.000" },
    ],
  },
  {
    slug: "casual-clean",
    name: "Casual Clean",
    category: "Perawatan Harian",
    price: 20000,
    priceLabel: "Rp20.000",
    duration: "1-2 hari",
    shortDesc: "Cuci menyeluruh bagian atas dan sol luar. Pilihan paling populer untuk pemakaian kasual sehari-hari.",
    longDesc: [
      "Casual Clean adalah layanan cuci sepatu menyeluruh yang menjadi favorit pelanggan kami. Layanan ini mencakup pembersihan bagian upper, sole, dan insole sepatu secara detail.",
      "Dengan menggunakan solusi pembersih premium yang diformulasikan khusus, kami memastikan setiap bagian sepatu dibersihkan secara menyeluruh tanpa merusak material. Proses ini dilakukan oleh teknisi berpengalaman yang memahami karakter setiap jenis sepatu.",
      "Casual Clean adalah pilihan terbaik untuk sepatu yang digunakan sehari-hari. Hasil akhir yang bersih dan segar akan membuat sepatumu terlihat seperti baru lagi."
    ],
    tag: "PALING POPULER",
    icon: "✨",
    partsHandled: ["Upper sepatu", "Sol luar (outsole)", "Insole", "Bagian lidah", "Tali sepatu"],
    compatibleMaterials: ["Canvas", "Mesh", "Knit", "Synthetic", "Mixed"],
    processSteps: [
      { step: 1, title: "Inspeksi & Foto", desc: "Dokumentasi kondisi awal sepatu" },
      { step: 2, title: "Lepas Tali & Insole", desc: "Pisahkan komponen untuk pembersihan optimal" },
      { step: 3, title: "Deep Washing", desc: "Cuci menyeluruh dengan solusi khusus" },
      { step: 4, title: "Pengeringan & QC", desc: "Keringkan dan cek kualitas akhir" },
    ],
    priceTable: [
      { material: "Canvas / Mesh", price: "Rp20.000" },
      { material: "Knit / Synthetic", price: "Rp20.000" },
      { material: "Suede / Nubuck", price: "Rp25.000" },
      { material: "Leather", price: "Rp25.000" },
    ],
  },
  {
    slug: "deep-clean",
    name: "Deep Clean",
    category: "Perawatan Harian",
    price: 25000,
    priceLabel: "Rp25.000",
    duration: "2-3 hari",
    shortDesc: "Cuci deep cleaning untuk seluruh bagian sepatu. Menghilangkan noda membandel dan bau tidak sedap.",
    longDesc: [
      "Deep Clean adalah layanan pembersihan paling menyeluruh dalam kategori perawatan harian. Setiap sudut dan celah sepatu akan dibersihkan secara mendalam, termasuk bagian yang sulit dijangkau.",
      "Layanan ini menggunakan teknik pembersihan multi-tahap yang efektif menghilangkan noda membandel, bakteri penyebab bau, dan kotoran yang sudah menempel lama. Kami juga melakukan deodorizing untuk mengembalikan kesegaran sepatu.",
      "Deep Clean sangat cocok untuk sepatu yang sudah lama tidak dicuci atau sepatu yang digunakan untuk aktivitas outdoor. Hasil akhirnya dijamin memuaskan — sepatu bersih, segar, dan siap dipakai kembali."
    ],
    tag: "SEMUA BAGIAN",
    icon: "🫧",
    partsHandled: ["Upper sepatu", "Sol luar & dalam", "Insole", "Midsole", "Tali sepatu", "Bagian dalam sepatu"],
    compatibleMaterials: ["Canvas", "Mesh", "Knit", "Synthetic", "Leather", "Suede", "Mixed"],
    processSteps: [
      { step: 1, title: "Assessment Detail", desc: "Analisis kondisi, material, dan tingkat kotoran" },
      { step: 2, title: "Pre-treatment", desc: "Aplikasi solusi khusus pada noda membandel" },
      { step: 3, title: "Multi-stage Wash", desc: "Cuci bertahap: upper, sole, insole, interior" },
      { step: 4, title: "Deodorizing", desc: "Penghilangan bau dan antibakteri" },
      { step: 5, title: "Drying & Reshaping", desc: "Pengeringan + pengembalian bentuk sepatu" },
    ],
  },

  // === PERAWATAN KHUSUS ===
  {
    slug: "leather-care",
    name: "Leather Care",
    category: "Perawatan Khusus",
    price: 25000,
    priceLabel: "Rp25.000",
    duration: "2-3 hari",
    shortDesc: "Perawatan khusus untuk sepatu kulit. Membersihkan, melembabkan, dan melindungi material leather.",
    longDesc: [
      "Leather Care adalah layanan khusus yang dirancang untuk merawat dan menjaga keindahan sepatu berbahan kulit. Proses ini tidak hanya membersihkan, tetapi juga menutrisi kulit agar tetap lembut dan tidak mudah pecah-pecah.",
      "Kami menggunakan produk perawatan kulit premium yang diformulasikan untuk menjaga kelembaban alami leather tanpa menyumbat pori-pori material. Proses conditioning yang kami lakukan akan mengembalikan kilau alami kulit sepatu.",
      "Layanan ini wajib untuk pemilik sepatu kulit yang ingin menjaga investasi mereka. Perawatan rutin setiap 2-3 bulan akan memperpanjang umur sepatu kulit secara signifikan."
    ],
    tag: "KULIT",
    icon: "🧴",
    partsHandled: ["Seluruh permukaan kulit", "Jahitan dan sambungan", "Bagian lipatan", "Sol kulit (jika ada)"],
    compatibleMaterials: ["Leather", "Synthetic Leather"],
    processSteps: [
      { step: 1, title: "Inspeksi Material", desc: "Identifikasi jenis kulit dan kondisi permukaan" },
      { step: 2, title: "Gentle Cleaning", desc: "Pembersihan lembut dengan cleaner khusus leather" },
      { step: 3, title: "Conditioning", desc: "Aplikasi conditioner untuk melembabkan kulit" },
      { step: 4, title: "Polishing", desc: "Poles untuk mengembalikan kilau alami" },
      { step: 5, title: "Protection", desc: "Lapisan pelindung untuk mencegah noda & air" },
    ],
  },
  {
    slug: "whitening",
    name: "Whitening",
    category: "Perawatan Khusus",
    price: 30000,
    priceLabel: "Rp30.000",
    duration: "3-4 hari",
    shortDesc: "Mengembalikan warna putih cerah pada sepatu putih yang menguning. Treatment khusus sepatu putih.",
    longDesc: [
      "Whitening adalah treatment khusus yang dirancang untuk mengembalikan kejayaan sepatu putihmu. Proses ini menggunakan teknik whitening profesional yang aman dan efektif untuk menghilangkan noda kuning dan mengembalikan warna putih cerah.",
      "Kami menggunakan whitening agent premium yang diformulasikan khusus agar tidak merusak material sepatu. Proses ini dilakukan secara bertahap untuk memastikan hasil yang merata dan tahan lama.",
      "Whitening cocok untuk semua jenis sepatu putih, mulai dari sneakers kanvas hingga sepatu mesh. Hasil akhir yang putih bersih akan membuat sepatumu kembali tampil percaya diri."
    ],
    tag: "SEPATU PUTIH",
    icon: "🤍",
    partsHandled: ["Upper sepatu putih", "Midsole putih", "Tali sepatu", "Bagian lidah"],
    compatibleMaterials: ["Canvas", "Mesh", "Knit", "Synthetic"],
    processSteps: [
      { step: 1, title: "Color Assessment", desc: "Evaluasi tingkat penguningan dan area target" },
      { step: 2, title: "Deep Clean", desc: "Pembersihan menyeluruh sebelum whitening" },
      { step: 3, title: "Whitening Treatment", desc: "Aplikasi whitening agent secara merata" },
      { step: 4, title: "UV Processing", desc: "Proses penjemuran terkontrol untuk hasil optimal" },
      { step: 5, title: "Final Inspection", desc: "Pengecekan kerataan warna dan finishing" },
    ],
  },
  {
    slug: "unyellowing",
    name: "Unyellowing",
    category: "Perawatan Khusus",
    price: 35000,
    priceLabel: "Rp35.000",
    duration: "4-5 hari",
    shortDesc: "Menghilangkan efek yellowing pada midsole dan outsole. Kembalikan tampilan sol yang bening dan bersih.",
    longDesc: [
      "Unyellowing adalah treatment khusus untuk mengatasi masalah penguningan (yellowing) pada bagian sol sepatu, terutama midsole dan outsole yang transparan atau berwarna putih.",
      "Proses ini menggunakan formula unyellowing profesional yang mampu mengembalikan kejernihan sol tanpa merusak material. Treatment dilakukan dalam beberapa tahap untuk memastikan hasil yang maksimal dan merata.",
      "Layanan ini sangat populer di kalangan kolektor sneakers yang ingin menjaga kondisi sol sepatu agar tetap terlihat baru. Kombinasi dengan Deep Clean akan memberikan hasil yang lebih komprehensif."
    ],
    tag: "SOL SEPATU",
    icon: "💛",
    partsHandled: ["Midsole", "Outsole", "Bagian sol transparan (icy sole)", "Rubber foxing"],
    compatibleMaterials: ["Rubber", "Phylon", "EVA", "TPU", "Icy Sole"],
    processSteps: [
      { step: 1, title: "Sole Assessment", desc: "Evaluasi tingkat yellowing pada sol" },
      { step: 2, title: "Sole Cleaning", desc: "Pembersihan sol dari kotoran sebelum treatment" },
      { step: 3, title: "Unyellowing Application", desc: "Aplikasi formula unyellowing pada seluruh sol" },
      { step: 4, title: "UV Wrapping", desc: "Bungkus sol dan ekspos ke sinar UV terkontrol" },
      { step: 5, title: "Monitoring & Result", desc: "Pantau proses dan evaluasi hasil akhir" },
    ],
  },

  // === RESTORASI ===
  {
    slug: "reglue",
    name: "Reglue",
    category: "Restorasi",
    price: 40000,
    priceLabel: "Rp40.000",
    duration: "3-4 hari",
    shortDesc: "Perbaikan sol yang terlepas atau mulai menganga. Lem ulang dengan lem grade profesional.",
    longDesc: [
      "Reglue adalah layanan restorasi untuk mengatasi masalah sol sepatu yang terlepas, menganga, atau mulai lepas dari upper. Kami menggunakan lem grade profesional yang kuat dan tahan lama.",
      "Proses reglue kami tidak sekadar menempelkan kembali — kami melakukan persiapan permukaan yang tepat, membersihkan sisa lem lama, dan mengaplikasikan lem baru dengan teknik yang menjamin daya rekat maksimal.",
      "Dengan layanan Reglue, sepatu favoritmu yang sudah mulai rusak bisa kembali dipakai dengan nyaman. Kami memberikan garansi daya rekat untuk memastikan kepuasanmu."
    ],
    tag: "PERBAIKAN SOL",
    icon: "🔧",
    partsHandled: ["Sambungan upper-sole", "Midsole ke outsole", "Bagian toe cap", "Heel counter"],
    compatibleMaterials: ["Canvas", "Mesh", "Knit", "Synthetic", "Leather", "Suede", "Mixed"],
    processSteps: [
      { step: 1, title: "Damage Assessment", desc: "Evaluasi kerusakan dan area yang perlu di-reglue" },
      { step: 2, title: "Surface Prep", desc: "Bersihkan sisa lem lama dan kotoran" },
      { step: 3, title: "Adhesive Application", desc: "Aplikasi lem profesional dengan teknik presisi" },
      { step: 4, title: "Pressing & Curing", desc: "Tekan dan diamkan untuk pengeringan optimal" },
      { step: 5, title: "Quality Check", desc: "Uji daya rekat dan finishing" },
    ],
  },
  {
    slug: "repaint",
    name: "Repaint",
    category: "Restorasi",
    price: 50000,
    priceLabel: "Rp50.000",
    duration: "5-7 hari",
    shortDesc: "Cat ulang sepatu untuk mengembalikan atau mengubah warna. Custom color available.",
    longDesc: [
      "Repaint adalah layanan restorasi warna sepatu yang paling komprehensif. Kami dapat mengembalikan warna asli sepatu yang sudah pudar atau bahkan mengubah warna sepatu sesuai keinginanmu.",
      "Kami menggunakan cat sepatu premium yang fleksibel dan tahan lama, sehingga tidak akan pecah-pecah saat sepatu dipakai. Setiap proyek repaint dikerjakan oleh artisan berpengalaman yang memahami teknik pengecatan profesional.",
      "Layanan Repaint membuka kemungkinan tak terbatas — dari restorasi warna original hingga custom color yang unik. Konsultasikan ide warnamu dengan tim kami untuk mendapatkan hasil terbaik."
    ],
    tag: "CUSTOM WARNA",
    icon: "🎨",
    partsHandled: ["Seluruh permukaan upper", "Midsole", "Detail dan aksen", "Outsole (opsional)"],
    compatibleMaterials: ["Leather", "Synthetic Leather", "Canvas", "Rubber"],
    processSteps: [
      { step: 1, title: "Konsultasi Warna", desc: "Diskusi warna target dan referensi" },
      { step: 2, title: "Stripping", desc: "Hapus lapisan cat/finish lama" },
      { step: 3, title: "Base Coat", desc: "Aplikasi lapisan dasar sebagai fondasi warna" },
      { step: 4, title: "Color Application", desc: "Pengecatan warna secara bertahap (2-3 lapisan)" },
      { step: 5, title: "Top Coat & Finishing", desc: "Lapisan pelindung untuk daya tahan dan kilau" },
    ],
    priceTable: [
      { material: "Full Repaint (satu warna)", price: "Rp50.000" },
      { material: "Custom 2 warna", price: "Rp75.000" },
      { material: "Custom pattern/design", price: "Rp100.000+" },
    ],
  },
  {
    slug: "reparasi",
    name: "Reparasi",
    category: "Restorasi",
    price: 50000,
    priceLabel: "Rp50.000",
    duration: "3-5 hari",
    shortDesc: "Perbaikan komprehensif: jahit ulang, ganti tali, patch lubang, perbaikan struktur sepatu.",
    longDesc: [
      "Reparasi adalah layanan perbaikan komprehensif untuk berbagai kerusakan pada sepatu. Dari jahitan yang lepas, lubang kecil, hingga kerusakan struktur — tim kami siap menanganinya.",
      "Setiap reparasi dikerjakan dengan teliti menggunakan material berkualitas. Kami memahami bahwa setiap sepatu memiliki nilai tersendiri bagi pemiliknya, sehingga kami selalu berusaha memberikan hasil terbaik.",
      "Layanan Reparasi kami mencakup berbagai jenis perbaikan. Sebelum memulai, kami akan melakukan assessment menyeluruh dan memberikan estimasi biaya yang transparan."
    ],
    tag: "FULL REPAIR",
    icon: "🛠️",
    partsHandled: ["Jahitan yang lepas", "Lubang pada upper", "Heel counter", "Toe box", "Eyelet dan D-ring", "Zipper (jika ada)"],
    compatibleMaterials: ["Canvas", "Mesh", "Knit", "Synthetic", "Leather", "Suede", "Mixed"],
    processSteps: [
      { step: 1, title: "Full Assessment", desc: "Evaluasi menyeluruh semua kerusakan" },
      { step: 2, title: "Repair Plan", desc: "Rencana perbaikan dan estimasi biaya" },
      { step: 3, title: "Material Sourcing", desc: "Siapkan material pengganti yang sesuai" },
      { step: 4, title: "Repair Process", desc: "Proses perbaikan oleh teknisi ahli" },
      { step: 5, title: "Final QC", desc: "Quality control dan uji fungsi" },
    ],
    priceTable: [
      { material: "Jahit ulang (per area)", price: "Rp20.000" },
      { material: "Patch lubang kecil", price: "Rp30.000" },
      { material: "Reparasi struktur", price: "Rp50.000" },
      { material: "Full reparasi", price: "Rp75.000+" },
    ],
  },
];

export const serviceCategories = ["Semua", "Perawatan Harian", "Perawatan Khusus", "Restorasi"] as const;
export const materialFilters = ["Canvas", "Suede", "Mesh", "Leather", "Knit", "Synthetic", "Mixed"] as const;

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}

export function getRelatedServices(currentSlug: string, count: number = 3): Service[] {
  const current = getServiceBySlug(currentSlug);
  if (!current) return services.slice(0, count);
  
  const sameCategory = services.filter(
    (s) => s.category === current.category && s.slug !== currentSlug
  );
  const others = services.filter(
    (s) => s.category !== current.category && s.slug !== currentSlug
  );
  
  return [...sameCategory, ...others].slice(0, count);
}
