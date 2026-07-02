# 🧼 SoleCare — Website Jasa Cuci Sepatu Profesional

> **Tagline:** Kotor Hari Ini, Kinclong Besok.

Website profil bisnis + sistem tracking order untuk jasa cuci sepatu lokal di Bandung.  
Dibangun dengan **Next.js 14 (App Router)**, **Tailwind CSS v3**, dan **Framer Motion**.

---

## 📸 Preview

| Halaman | Deskripsi |
|---------|-----------|
| `/` | Beranda — 7 section lengkap (Hero, Cara Kerja, Layanan, Why Us, Testimoni, FAQ, CTA) |
| `/layanan` | Daftar 9 treatment dengan filter kategori & material |
| `/layanan/[slug]` | Detail per layanan (9 halaman) |
| `/aktivitas` | Tracking order + live aktivitas + riwayat + stats + drop points |
| `/tentang` | About us + program loyalitas |
| `/kontak` | Kontak + form → WhatsApp |

---

## 🚀 Menjalankan Project

### Prerequisites
- **Node.js** v18+ 
- **npm** v9+

### Install & Run

```bash
# Masuk ke folder project
cd /Users/nogariantana/File/solecare

# Install dependencies
npm install

# Jalankan development server
npm run dev
```

Buka **http://localhost:3000** di browser.

### Build Production

```bash
npm run build
npm start
```

---

## 📁 Struktur Folder

```
solecare/
├── src/
│   ├── app/                          # Pages (App Router)
│   │   ├── globals.css               # Design system + Google Fonts
│   │   ├── layout.tsx                # Root layout (Navbar + Footer + SEO)
│   │   ├── page.tsx                  # Beranda
│   │   ├── sections/                 # Komponen section untuk Beranda
│   │   │   ├── HeroSection.tsx       # Hero dengan marquee + stats
│   │   │   ├── HowItWorksSection.tsx # 4 langkah cara kerja
│   │   │   ├── ServicesPreview.tsx    # Preview 9 layanan
│   │   │   ├── WhyUsSection.tsx      # 4 keunggulan (2x2 grid)
│   │   │   ├── TestimonialsSection.tsx # 3 testimoni
│   │   │   ├── FAQSection.tsx        # 7 FAQ accordion
│   │   │   └── CTABottomSection.tsx  # Banner CTA biru
│   │   ├── layanan/
│   │   │   ├── page.tsx              # Daftar semua layanan + filter
│   │   │   └── [slug]/
│   │   │       └── page.tsx          # Detail per layanan (SSG)
│   │   ├── aktivitas/
│   │   │   └── page.tsx              # Tracking + riwayat + live feed
│   │   ├── tentang/
│   │   │   └── page.tsx              # About + loyalitas
│   │   └── kontak/
│   │       └── page.tsx              # Kontak + form
│   │
│   ├── components/                   # Komponen reusable
│   │   ├── Navbar.tsx                # Sticky navbar + hamburger mobile
│   │   ├── Footer.tsx                # Footer 4 kolom
│   │   ├── ServiceCard.tsx           # Card layanan (hover lift)
│   │   ├── TestimonialCard.tsx       # Card testimoni + rating
│   │   ├── FAQAccordion.tsx          # Accordion expand/collapse
│   │   ├── StepCard.tsx              # Card cara kerja (numbered)
│   │   ├── TrackingTimeline.tsx      # Timeline status order (vertikal)
│   │   ├── Marquee.tsx               # Horizontal scroll text
│   │   ├── ScrollReveal.tsx          # Framer Motion scroll animation
│   │   └── FilterPill.tsx            # Pill button untuk filter
│   │
│   └── data/                         # Data statis (simulasi backend)
│       ├── services.ts               # 9 treatment lengkap
│       ├── orders.ts                 # 8 dummy order + live activities
│       ├── testimonials.ts           # 3 testimoni pelanggan
│       ├── faq.ts                    # 7 pertanyaan FAQ
│       └── droppoints.ts            # 3 lokasi drop point
│
├── public/                           # Static assets
├── tailwind.config.ts                # Custom design tokens
├── next.config.mjs                   # Next.js config
├── tsconfig.json                     # TypeScript config
└── package.json                      # Dependencies
```

---

## 🎨 Design System

### Warna

| Token | Hex | Penggunaan |
|-------|-----|------------|
| `primary` | `#2563EB` | Tombol, link, aksen utama |
| `primary-50` | `#EFF6FF` | Background badge, hover state |
| `secondary` | `#F8FAFC` | Background section alternatif |
| `accent` | `#10B981` | Status selesai, checkmark |
| `warning` | `#F59E0B` | Status sedang proses |
| `text` | `#0F172A` | Body text, heading |
| `background` | `#FFFFFF` | Background halaman |

### Tipografi

| Jenis | Font | Penggunaan |
|-------|------|------------|
| Heading | **Plus Jakarta Sans** (Bold, Extrabold) | Semua heading, judul, tombol |
| Body | **Inter** (Regular, Medium) | Body text, paragraf |

Font di-load via Google Fonts di `globals.css`.

### Komponen Utama

| Komponen | Class | Spesifikasi |
|----------|-------|-------------|
| Card | `.card` | `border-radius: 16px`, `shadow-card`, `border-gray-100` |
| Card Hover | `.card-hover` | Efek lift (`translateY(-4px)`) + shadow deeper |
| Button Primary | `.btn-primary` | Biru solid, rounded-xl, hover lift + shadow |
| Button Secondary | `.btn-secondary` | Border biru, transparent bg, hover bg-blue-50 |
| Badge | `.badge-primary` | Pill shape, bg-blue-50, text-blue |
| Section | `.section-padding` | `py-16 md:py-24` |

### Breakpoints

| Nama | Min-width | Target |
|------|-----------|--------|
| Default | `0px` | Mobile (375px+) |
| `md` | `768px` | Tablet |
| `lg` | `1280px` | Desktop |

---

## 📄 Halaman

### 1. Beranda (`/`)

**7 section:**

1. **Hero** — Headline besar dengan gradient text "Bandung", 2 CTA (Lacak + Layanan), stats bar (127+ sepatu, 89+ pelanggan, 1.5 hari), marquee treatment horizontal
2. **Cara Kerja** — 4 step cards: Hubungi WA → Pilih Treatment → Pantau Realtime → Terima Kembali
3. **Layanan Preview** — 9 service cards grouped by kategori (Perawatan Harian, Khusus, Restorasi)
4. **Keunggulan** — 2x2 grid: 24 Jam Responsif, Antar-Jemput, Tracking, Loyalitas
5. **Testimoni** — 3 testimonial cards dengan rating bintang
6. **FAQ** — 7 pertanyaan dalam accordion animated
7. **CTA Bottom** — Banner gradient biru dengan tombol WhatsApp + Lacak Order

### 2. Layanan (`/layanan`)

- Hero section
- **Sticky filter bar** dengan 2 baris:
  - Kategori: Semua | Perawatan Harian | Perawatan Khusus | Restorasi
  - Material: Canvas | Suede | Mesh | Leather | Knit | Synthetic | Mixed
- Grid 9 service cards (filtered)
- Cara order ringkas (4 langkah)
- CTA konsultasi WhatsApp

### 3. Detail Layanan (`/layanan/[slug]`)

**9 halaman statis** (SSG via `generateStaticParams`):

| Slug | Layanan | Harga | Durasi |
|------|---------|-------|--------|
| `quick-clean` | Quick Clean | Rp15.000 | 1 hari |
| `casual-clean` | Casual Clean | Rp20.000 | 1-2 hari |
| `deep-clean` | Deep Clean | Rp25.000 | 2-3 hari |
| `leather-care` | Leather Care | Rp25.000 | 2-3 hari |
| `whitening` | Whitening | Rp30.000 | 3-4 hari |
| `unyellowing` | Unyellowing | Rp35.000 | 4-5 hari |
| `reglue` | Reglue | Rp40.000 | 3-4 hari |
| `repaint` | Repaint | Rp50.000 | 5-7 hari |
| `reparasi` | Reparasi | Rp50.000 | 3-5 hari |

Tiap halaman berisi: breadcrumb, header + badge, deskripsi panjang, bagian yang dicuci, material kompatibel, proses pengerjaan (timeline), tabel harga, CTA, 3 layanan terkait.

### 4. Aktivitas / Tracking (`/aktivitas`)

Layout 2 kolom (desktop): Drop Point kiri (sticky) | Konten kanan.

| Section | Deskripsi |
|---------|-----------|
| **Stats Bar** | 3 angka: Sepatu Dicuci (127), Kawan SoleCare (89), Rata-rata Cuci (1h 2d) |
| **Search** | Pill-style input, cari by Order ID (9 karakter) |
| **Live Activity** | Auto-cycling notification (3 detik) menampilkan update order terkini |
| **Riwayat** | List 8 order dengan tab filter: Semua / Proses / Selesai |
| **Drop Points** | 3 lokasi di Bandung dengan jam operasional + WA link |

**Demo Order IDs:**

| Order ID | Status | Layanan | Sepatu |
|----------|--------|---------|--------|
| `SLC001234` | Sedang Diproses | Casual Clean | Nike Air Force 1 |
| `SLC005678` | Siap Dikirim | Whitening | Adidas Superstar |
| `SLC009012` | Selesai | Repaint | Vans Old Skool |
| `SLC003456` | Order Diterima | Deep Clean | New Balance 574 |
| `SLC007890` | Finishing | Leather Care | Dr. Martens 1460 |
| `SLC002345` | Selesai | Quick Clean | Converse Chuck Taylor |
| `SLC004567` | Selesai | Unyellowing | Air Jordan 1 Mid |
| `SLC006789` | Sedang Diproses | Reglue | Nike Air Max 90 |

### 5. Tentang (`/tentang`)

- Origin story brand
- 3 nilai: Kualitas, Transparansi, Peduli Lingkungan
- Team photo placeholder
- Stats: 127+ sepatu, 89+ pelanggan, 2024 tahun berdiri, 9 treatment
- **Program Loyalitas** (4 level): Kawan Baru → Kawan Setia → Kawan Elite → Kawan Legenda

### 6. Kontak (`/kontak`)

- Layout 2 kolom: Info kontak (kiri) | Form (kanan)
- Info: WhatsApp, Email, Alamat, Jam Operasional
- Form: Nama, WhatsApp, Pesan → redirect ke `wa.me`
- Map placeholder
- 3 Drop points

---

## 🔧 Komponen

### `Navbar`
Sticky navbar dengan backdrop blur. Logo "SC" monogram. Desktop: menu + CTA "Lacak Sepatumu". Mobile: hamburger dengan slide-in panel (Framer Motion). Active link indicator animasi.

### `Footer`
4 kolom: Brand + social media | Navigasi | 9 Layanan links | Kontak. Social icons: Instagram, TikTok, WhatsApp.

### `ServiceCard`
Card layanan reusable. Menampilkan icon, tag badge, nama, durasi + harga, deskripsi singkat, material badges, tombol detail. Hover: lift + deeper shadow (Framer Motion).

### `TrackingTimeline`
Timeline vertikal 5 step status order. Animasi staggered: dot scales in, connector line fills, label fades in. Warna: hijau (selesai), biru (current), abu-abu (pending).

### `FAQAccordion`
Accordion dengan expand/collapse animasi (Framer Motion height auto). Rotating chevron icon. Active state: border biru, icon filled.

### `ScrollReveal`
Wrapper Framer Motion untuk fade-in animasi saat scroll. Support 4 arah (up/down/left/right), configurable delay, `useInView` dengan threshold.

### `Marquee`
Horizontal infinite scroll CSS animation menampilkan nama 9 treatment.

---

## 📊 Data Layer

Semua data disimpan dalam file TypeScript statis di `src/data/`. Ini memudahkan konversi ke API/database di masa depan.

### `services.ts`
- **9 layanan** dengan data lengkap: slug, nama, kategori, harga, durasi, deskripsi pendek & panjang, tag, icon, partsHandled, compatibleMaterials, processSteps, priceTable
- Helper: `getServiceBySlug()`, `getRelatedServices()`

### `orders.ts`
- **8 dummy order** dengan status berbeda-beda
- **5 live activity** notifications
- **Activity stats** (total sepatu, total pelanggan, rata-rata durasi)
- Helper: `findOrder()`

### `testimonials.ts`
- 3 testimoni dengan avatar initial, nama, loyalty level, rating, kutipan

### `faq.ts`
- 7 FAQ items (pertanyaan + jawaban)

### `droppoints.ts`
- 3 drop point di Bandung: HQ Dago, Buah Batu, Pasteur

---

## 🎞️ Animasi (Framer Motion)

| Animasi | Lokasi | Efek |
|---------|--------|------|
| Fade-in on scroll | Semua section | Elemen muncul saat masuk viewport |
| Hover lift | ServiceCard, Feature cards | `translateY(-6px)` + shadow deeper |
| Marquee | Hero section | Infinite horizontal scroll (CSS) |
| Accordion | FAQ | Height auto animate + rotate chevron |
| Hamburger | Navbar mobile | 3 span morphing ke X |
| Slide-in panel | Mobile menu | Spring animation `x: 100% → 0` |
| Live ticker | Aktivitas | Auto-cycle setiap 3 detik dengan fade |
| Timeline | Tracking result | Staggered dot + connector + label |
| Stats count-in | Aktivitas | Number + scale animation on mount |
| Active indicator | Navbar | `layoutId` spring animation |

---

## 🔗 Placeholder yang Perlu Diganti

| Placeholder | Lokasi | Nilai Saat Ini |
|-------------|--------|----------------|
| Nama Kota | Seluruh site | `Bandung` |
| Nomor WhatsApp | Seluruh site | `628123456789` |
| Email | Footer, Kontak | `hello@solecare.id` |
| Alamat | Footer, Kontak, Drop Points | Jl. Ir. H. Juanda No. 123 |
| Google Maps | Kontak | Placeholder visual |
| Team Photo | Tentang | Placeholder visual |
| Social Media | Footer | `#` links |

---

## 📱 Responsive Design

Site didesain **mobile-first**:
- **Mobile (375px+)**: Single column, hamburger menu, bottom CTA
- **Tablet (768px+)**: 2-column grids, expanded cards
- **Desktop (1280px+)**: Full layout, sticky sidebar (aktivitas), 3-column grids

---

## 🛠️ Tech Stack

| Teknologi | Versi | Penggunaan |
|-----------|-------|------------|
| [Next.js](https://nextjs.org) | 14.2 | Framework, App Router, SSG |
| [TypeScript](https://typescriptlang.org) | 5.x | Type safety |
| [Tailwind CSS](https://tailwindcss.com) | 3.x | Styling, design system |
| [Framer Motion](https://framer.com/motion) | 11.x | Animasi, transisi |
| [React](https://react.dev) | 18.x | UI library |

---

## 📝 Lisensi

© 2024 SoleCare. All rights reserved.
# solecare
