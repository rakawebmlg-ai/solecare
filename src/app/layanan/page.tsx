"use client";

import { useState, useMemo } from "react";
import { services, serviceCategories, materialFilters } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import FilterPill from "@/components/FilterPill";
import ScrollReveal from "@/components/ScrollReveal";
import StepCard from "@/components/StepCard";


const steps = [
  { icon: "💬", title: "Hubungi Kami", description: "Chat via WhatsApp untuk konsultasi gratis." },
  { icon: "🧪", title: "Pilih Treatment", description: "Tentukan treatment terbaik untuk sepatumu." },
  { icon: "📍", title: "Pantau Progress", description: "Tracking realtime via Order ID." },
  { icon: "🎉", title: "Sepatu Kinclong", description: "Terima sepatu bersih di rumah." },
];

export default function LayananPage() {
  const [activeCategory, setActiveCategory] = useState<string>("Semua");
  const [activeMaterial, setActiveMaterial] = useState<string | null>(null);

  const filteredServices = useMemo(() => {
    return services.filter((s) => {
      const catMatch = activeCategory === "Semua" || s.category === activeCategory;
      const matMatch = !activeMaterial || s.compatibleMaterials.includes(activeMaterial);
      return catMatch && matMatch;
    });
  }, [activeCategory, activeMaterial]);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/50 to-white pt-8 md:pt-16 pb-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative">
          <ScrollReveal className="text-center">
            <span className="badge-primary mb-4 inline-flex">9 Treatment Profesional</span>
            <h1 className="section-heading mb-4">
              Layanan <span className="text-gradient">SoleCare</span>
            </h1>
            <p className="section-subheading mx-auto">
              Dari perawatan harian sampai restorasi total — pilih treatment yang paling cocok untuk sepatumu.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-16 md:top-20 z-30 bg-white/90 backdrop-blur-lg border-b border-gray-100">
        <div className="container-main py-4">
          {/* Category Filter */}
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
            {serviceCategories.map((cat) => (
              <FilterPill
                key={cat}
                label={cat}
                isActive={activeCategory === cat}
                onClick={() => setActiveCategory(cat)}
              />
            ))}
          </div>
          {/* Material Filter */}
          <div className="flex gap-2 overflow-x-auto mt-2 scrollbar-hide">
            <button
              onClick={() => setActiveMaterial(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                !activeMaterial
                  ? "bg-gray-800 text-white"
                  : "bg-gray-100 text-gray-500 hover:text-gray-700"
              }`}
            >
              Semua Material
            </button>
            {materialFilters.map((mat) => (
              <button
                key={mat}
                onClick={() => setActiveMaterial(activeMaterial === mat ? null : mat)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all whitespace-nowrap ${
                  activeMaterial === mat
                    ? "bg-gray-800 text-white"
                    : "bg-gray-100 text-gray-500 hover:text-gray-700"
                }`}
              >
                {mat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50/30">
        <div className="container-main">
          {filteredServices.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              {filteredServices.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-5xl mb-4">🔍</div>
              <h3 className="font-heading font-bold text-lg text-text mb-2">
                Tidak ada layanan ditemukan
              </h3>
              <p className="text-sm text-gray-500 mb-6">
                Coba ubah filter kategori atau material.
              </p>
              <button
                onClick={() => {
                  setActiveCategory("Semua");
                  setActiveMaterial(null);
                }}
                className="btn-secondary"
              >
                Reset Filter
              </button>
            </div>
          )}
        </div>
      </section>

      {/* How It Works (Compact) */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <ScrollReveal className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-heading font-bold text-text mb-3">
              Cara Order
            </h2>
            <p className="text-gray-500 text-sm md:text-base">
              4 langkah mudah dari kotor sampai kinclong.
            </p>
          </ScrollReveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
            {steps.map((step, i) => (
              <StepCard key={step.title} step={i + 1} icon={step.icon} title={step.title} description={step.description} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="pb-16 md:pb-24">
        <div className="container-main">
          <div className="card !rounded-2xl p-8 md:p-12 text-center bg-gradient-to-br from-primary-50 to-blue-50 border-primary-100">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-3">
              Bingung pilih treatment?
            </h2>
            <p className="text-gray-500 text-sm md:text-base mb-6 max-w-md mx-auto">
              Konsultasi gratis via WhatsApp. Kirim foto sepatu kamu, kami bantu rekomendasikan treatment terbaik.
            </p>
            <a
              href="https://wa.me/628123456789?text=Halo%20SoleCare%2C%20saya%20butuh%20rekomendasi%20treatment%20untuk%20sepatu%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Konsultasi via WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
