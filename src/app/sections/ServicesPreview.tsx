import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import ServiceCard from "@/components/ServiceCard";
import type { Service } from "@/data/services";

interface ServicesPreviewProps {
  services: Service[];
}

const categories = [
  { name: "Perawatan Harian", emoji: "🧹" },
  { name: "Perawatan Khusus", emoji: "💎" },
  { name: "Restorasi", emoji: "🔧" },
] as const;

export default function ServicesPreview({ services }: ServicesPreviewProps) {
  return (
    <section id="layanan-preview" className="section-padding bg-gray-50/50">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <span className="badge-primary mb-4 inline-flex">9 Treatment</span>
          <h2 className="section-heading mb-4">
            Layanan <span className="text-gradient">Lengkap</span>
          </h2>
          <p className="section-subheading mx-auto">
            Dari quick clean sampai full reparasi, semua kebutuhan sepatu kamu ada di sini.
          </p>
        </ScrollReveal>

        {/* Services by Category */}
        {categories.map((cat) => {
          const catServices = services.filter((s) => s.category === cat.name);
          return (
            <div key={cat.name} className="mb-12 last:mb-0">
              <ScrollReveal>
                <h3 className="font-heading font-bold text-lg md:text-xl text-text mb-6 flex items-center gap-2">
                  <span>{cat.emoji}</span>
                  {cat.name}
                </h3>
              </ScrollReveal>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {catServices.map((service, index) => (
                  <ServiceCard key={service.slug} service={service} index={index} />
                ))}
              </div>
            </div>
          );
        })}

        {/* CTA */}
        <ScrollReveal className="text-center mt-12">
          <Link href="/layanan" className="btn-primary !px-8">
            Lihat Semua Layanan
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
