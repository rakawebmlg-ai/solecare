"use client";

import { motion } from "framer-motion";
import ScrollReveal from "@/components/ScrollReveal";

const features = [
  {
    icon: "⏱",
    title: "24 Jam Responsif",
    desc: "WhatsApp dibalas cepat, konsultasi kapan saja tanpa ribet.",
    color: "from-blue-500 to-primary",
  },
  {
    icon: "🚗",
    title: "Antar-Jemput Gratis",
    desc: "Area Bandung & sekitarnya. Bisa juga via drop point terdekat.",
    color: "from-emerald-500 to-teal-500",
  },
  {
    icon: "📍",
    title: "Tracking Realtime",
    desc: "Pantau status pengerjaan sepatu lewat Order ID di website.",
    color: "from-violet-500 to-purple-500",
  },
  {
    icon: "💎",
    title: "Program Loyalitas",
    desc: "Makin sering cuci, makin banyak benefit. Naik level, dapat diskon!",
    color: "from-amber-500 to-orange-500",
  },
];

export default function WhyUsSection() {
  return (
    <section id="keunggulan" className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <span className="badge-primary mb-4 inline-flex">Kenapa SoleCare?</span>
          <h2 className="section-heading mb-4">
            Bukan Sekadar <span className="text-gradient">Cuci Sepatu</span>
          </h2>
          <p className="section-subheading mx-auto">
            Pengalaman lengkap dari order sampai selesai, semua didesain buat kenyamananmu.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 max-w-3xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4 }}
              className="card p-6 md:p-8 group cursor-default"
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center text-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>

              <h3 className="font-heading font-bold text-base md:text-lg text-text mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-gray-500 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
