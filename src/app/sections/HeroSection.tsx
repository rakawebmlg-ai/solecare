"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";

const stats = [
  { value: "127+", label: "Sepatu Dicuci" },
  { value: "89+", label: "Pelanggan Puas" },
  { value: "1,5", label: "Hari Rata-rata" },
];

export default function HeroSection() {
  return (
    <section id="hero" className="relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 bg-primary-50 rounded-full blur-3xl opacity-60" />
        <div className="absolute top-1/2 -left-24 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-40" />
      </div>

      <div className="container-main relative pt-12 md:pt-20 pb-8 md:pb-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mb-6"
        >
          <span className="badge-primary !px-4 !py-1.5 !text-xs gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Menerima Order — Bandung & Sekitarnya
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl md:text-5xl lg:text-7xl font-heading font-extrabold text-center text-text leading-[1.1] mb-6 max-w-4xl mx-auto"
        >
          Cuci Sepatu di{" "}
          <span className="text-gradient">Malang</span>,{" "}
          <br className="hidden md:block" />
          Bersih, Cepat,{" "}
          <span className="relative inline-block">
            Bisa Dilacak
            <svg className="absolute -bottom-1 left-0 w-full" viewBox="0 0 200 8" fill="none">
              <path d="M1 5.5C47 2.5 153 2.5 199 5.5" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
            </svg>
          </span>
          .
        </motion.h1>

        {/* Sub-headline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center text-gray-500 text-base md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed"
        >
          9 treatment lengkap, antar-jemput gratis, pantau status realtime.{" "}
          <span className="font-medium text-text">Kotor hari ini, kinclong besok.</span>
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-16"
        >
          <Link href="/aktivitas" className="btn-primary !px-8 !py-3.5 !text-base">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.3-4.3" />
            </svg>
            Lacak Sepatu
          </Link>
          <Link href="/layanan" className="btn-secondary !px-8 !py-3.5 !text-base">
            Lihat Layanan
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-lg mx-auto"
        >
          <div className="card !rounded-2xl p-4 md:p-6">
            <div className="grid grid-cols-3 divide-x divide-gray-100">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center px-2">
                  <div className="text-2xl md:text-3xl font-heading font-extrabold text-primary">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-gray-400 mt-1 font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Marquee */}
      <Marquee />
    </section>
  );
}
