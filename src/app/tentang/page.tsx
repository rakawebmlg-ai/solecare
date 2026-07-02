import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami",
  description: "Cerita di balik SoleCare — jasa cuci sepatu profesional di Bandung yang didirikan dari kecintaan terhadap sneakers dan kebersihan.",
};

const values = [
  {
    icon: "🎯",
    title: "Kualitas Tanpa Kompromi",
    desc: "Setiap sepatu diperlakukan seperti milik sendiri. Kami menggunakan produk premium dan teknik profesional untuk hasil terbaik.",
  },
  {
    icon: "🤝",
    title: "Transparansi Penuh",
    desc: "Dari harga sampai proses pengerjaan, semuanya jelas. Tracking realtime agar kamu selalu tahu status sepatumu.",
  },
  {
    icon: "💚",
    title: "Peduli Lingkungan",
    desc: "Kami menggunakan produk pembersih ramah lingkungan dan proses hemat air tanpa mengorbankan kualitas.",
  },
];

const stats = [
  { value: "127+", label: "Sepatu Dikerjakan" },
  { value: "89+", label: "Pelanggan Puas" },
  { value: "2024", label: "Tahun Berdiri" },
  { value: "9", label: "Treatment Tersedia" },
];

const loyaltyLevels = [
  {
    level: "Kawan Baru",
    icon: "🌱",
    requirement: "Order pertama",
    benefits: ["Harga normal", "Tracking realtime", "Konsultasi gratis"],
    color: "from-gray-100 to-gray-50",
    borderColor: "border-gray-200",
  },
  {
    level: "Kawan Setia",
    icon: "⭐",
    requirement: "5+ order",
    benefits: ["Diskon 5%", "Prioritas antrean", "Tracking realtime"],
    color: "from-blue-50 to-primary-50",
    borderColor: "border-primary-200",
  },
  {
    level: "Kawan Elite",
    icon: "💎",
    requirement: "15+ order",
    benefits: ["Diskon 10%", "Free delivery", "Prioritas antrean", "Member card"],
    color: "from-violet-50 to-purple-50",
    borderColor: "border-violet-200",
  },
  {
    level: "Kawan Legenda",
    icon: "👑",
    requirement: "30+ order",
    benefits: ["Diskon 15%", "Free delivery", "Dedicated CS", "Exclusive treatment", "Birthday surprise"],
    color: "from-amber-50 to-yellow-50",
    borderColor: "border-amber-200",
  },
];

export default function TentangPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/50 to-white pt-8 md:pt-16 pb-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative">
          <ScrollReveal className="text-center">
            <span className="badge-primary mb-4 inline-flex">Tentang Kami</span>
            <h1 className="section-heading mb-4">
              Cerita di Balik <span className="text-gradient">SoleCare</span>
            </h1>
            <p className="section-subheading mx-auto">
              Dari kecintaan terhadap sneakers, lahirlah SoleCare.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Origin Story */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="prose prose-lg max-w-none">
                <p className="text-gray-600 leading-relaxed text-base md:text-lg mb-6">
                  SoleCare lahir dari sebuah pertanyaan sederhana: <em className="text-text font-medium">&ldquo;Kenapa nggak ada jasa cuci sepatu yang benar-benar profesional, transparan, dan bisa dilacak?&rdquo;</em>
                </p>
                <p className="text-gray-600 leading-relaxed mb-6">
                  Berawal dari garasi kecil di Bandung tahun 2024, kami memulai dengan modal semangat, sikat, dan solusi pembersih racikan sendiri. Satu demi satu sepatu datang, dan satu demi satu pelanggan kembali karena puas dengan hasilnya.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Hari ini, SoleCare melayani ratusan pelanggan dengan 9 treatment lengkap — dari quick clean untuk perawatan rutin hingga repaint dan reparasi untuk restorasi total. Dan yang membedakan kami? <strong className="text-text">Tracking realtime</strong>, sehingga kamu selalu tahu di mana sepatumu.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text mb-3">
              Nilai yang Kami Pegang
            </h2>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {values.map((val, i) => (
              <ScrollReveal key={val.title} delay={i * 0.1}>
                <div className="card p-6 md:p-8 text-center h-full">
                  <div className="text-4xl mb-4">{val.icon}</div>
                  <h3 className="font-heading font-bold text-base md:text-lg text-text mb-2">
                    {val.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{val.desc}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Team Photo Placeholder */}
      <section className="py-12 bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <ScrollReveal>
              <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-primary-50 to-blue-100 aspect-[16/7] flex items-center justify-center">
                <div className="text-center">
                  <div className="text-5xl mb-3">👥</div>
                  <p className="font-heading font-bold text-primary text-lg">Tim SoleCare</p>
                  <p className="text-sm text-primary/60">Dedicated shoe care specialists</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-12 bg-white">
        <div className="container-main">
          <div className="max-w-3xl mx-auto">
            <div className="card !rounded-2xl p-6 md:p-8">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
                {stats.map((stat) => (
                  <ScrollReveal key={stat.label} className="text-center">
                    <div className="text-3xl md:text-4xl font-heading font-extrabold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-xs md:text-sm text-gray-400 font-medium">
                      {stat.label}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <span className="badge-primary mb-4 inline-flex">Program Loyalitas</span>
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text mb-3">
              Makin Sering, Makin <span className="text-gradient">Untung</span>
            </h2>
            <p className="text-gray-500 text-sm md:text-base max-w-lg mx-auto">
              Setiap order menambah poin loyalitasmu. Naik level, dapat benefit lebih banyak!
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
            {loyaltyLevels.map((level, i) => (
              <ScrollReveal key={level.level} delay={i * 0.1}>
                <div className={`card p-5 md:p-6 h-full bg-gradient-to-br ${level.color} ${level.borderColor}`}>
                  <div className="text-3xl mb-3">{level.icon}</div>
                  <h3 className="font-heading font-bold text-base text-text mb-1">
                    {level.level}
                  </h3>
                  <p className="text-xs text-gray-400 mb-4">{level.requirement}</p>
                  <ul className="space-y-2">
                    {level.benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-xs text-gray-600">
                        <svg className="w-3.5 h-3.5 text-accent flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal className="text-center mt-10">
            <p className="text-sm text-gray-500 mb-4">
              Mulai dari order pertamamu — otomatis terdaftar sebagai Kawan Baru!
            </p>
            <a
              href="https://wa.me/628123456789?text=Halo%20SoleCare%2C%20saya%20mau%20order%20cuci%20sepatu"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              Mulai Order Pertama
            </a>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <div className="max-w-2xl mx-auto text-center">
            <ScrollReveal>
              <h2 className="text-2xl md:text-3xl font-heading font-bold text-text mb-4">
                Ada Pertanyaan?
              </h2>
              <p className="text-gray-500 mb-6">
                Tim kami siap membantu. Hubungi atau kunjungi halaman kontak kami.
              </p>
              <Link href="/kontak" className="btn-primary">
                Hubungi Kami
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
