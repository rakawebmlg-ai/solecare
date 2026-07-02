import Link from "next/link";
import { notFound } from "next/navigation";
import { services, getServiceBySlug, getRelatedServices } from "@/data/services";
import ServiceCard from "@/components/ServiceCard";
import type { Metadata } from "next";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getServiceBySlug(params.slug);
  if (!service) return { title: "Layanan Tidak Ditemukan" };
  return {
    title: `${service.name} — Mulai ${service.priceLabel}`,
    description: service.shortDesc,
  };
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = getServiceBySlug(params.slug);
  if (!service) notFound();

  const related = getRelatedServices(params.slug, 3);

  return (
    <>
      {/* Breadcrumb */}
      <section className="bg-gray-50/50 border-b border-gray-100">
        <div className="container-main py-4">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-primary transition-colors">Beranda</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <Link href="/layanan" className="hover:text-primary transition-colors">Layanan</Link>
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-text font-medium">{service.name}</span>
          </nav>
        </div>
      </section>

      {/* Header */}
      <section className="section-padding !pb-12 bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-4xl">{service.icon}</span>
              <span className="badge-primary">{service.category}</span>
              <span className="badge-warning">{service.duration}</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-heading font-extrabold text-text mb-3">
              {service.name}
            </h1>
            <div className="flex items-center gap-4 mb-6">
              <span className="text-2xl md:text-3xl font-heading font-extrabold text-primary">
                {service.priceLabel}
              </span>
              <span className="text-gray-400 text-sm">mulai dari</span>
            </div>
            <div className="space-y-4">
              {service.longDesc.map((para, i) => (
                <p key={i} className="text-gray-600 leading-relaxed">{para}</p>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Gets Cleaned */}
      <section className="py-12 bg-gray-50/50">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-6">
              🧹 Apa yang Dicuci?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {service.partsHandled.map((part) => (
                <div key={part} className="flex items-center gap-3 card p-4">
                  <div className="w-8 h-8 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-4 h-4 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm font-medium text-text">{part}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Compatible Materials */}
      <section className="py-12 bg-white">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-6">
              🏷️ Cocok untuk Material
            </h2>
            <div className="flex flex-wrap gap-2">
              {service.compatibleMaterials.map((mat) => (
                <span key={mat} className="badge-primary !px-4 !py-2 !text-sm">
                  {mat}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <section className="py-12 bg-gray-50/50">
        <div className="container-main">
          <div className="max-w-3xl">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-8">
              ⚙️ Proses Pengerjaan
            </h2>
            <div className="space-y-0">
              {service.processSteps.map((step, i) => (
                <div key={step.step} className="flex gap-4">
                  {/* Timeline */}
                  <div className="flex flex-col items-center">
                    <div className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-heading font-bold text-sm flex-shrink-0">
                      {step.step}
                    </div>
                    {i < service.processSteps.length - 1 && (
                      <div className="w-0.5 h-12 bg-primary-200 my-1" />
                    )}
                  </div>
                  {/* Content */}
                  <div className="pb-8">
                    <h3 className="font-heading font-bold text-base text-text mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-500">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Price Table */}
      {service.priceTable && service.priceTable.length > 0 && (
        <section className="py-12 bg-white">
          <div className="container-main">
            <div className="max-w-3xl">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-6">
                💰 Harga Transparan
              </h2>
              <div className="card overflow-hidden">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-100">
                      <th className="text-left px-6 py-3 text-xs font-heading font-semibold text-gray-500 uppercase tracking-wider">
                        Jenis / Material
                      </th>
                      <th className="text-right px-6 py-3 text-xs font-heading font-semibold text-gray-500 uppercase tracking-wider">
                        Harga
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {service.priceTable.map((row, i) => (
                      <tr key={i} className="border-b border-gray-50 last:border-0">
                        <td className="px-6 py-4 text-sm text-text">{row.material}</td>
                        <td className="px-6 py-4 text-sm font-heading font-bold text-primary text-right">
                          {row.price}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-12 bg-gray-50/50">
        <div className="container-main">
          <div className="max-w-3xl">
            <div className="card !rounded-2xl p-8 md:p-10 bg-gradient-to-br from-primary-50 to-blue-50 border-primary-100 text-center">
              <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-3">
                Mau coba {service.name}?
              </h2>
              <p className="text-gray-500 text-sm mb-6">
                Order sekarang via WhatsApp atau lacak order yang sudah berjalan.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                <a
                  href={`https://wa.me/628123456789?text=Halo%20SoleCare%2C%20saya%20mau%20order%20${encodeURIComponent(service.name)}%20untuk%20sepatu%20saya`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  Order via WhatsApp
                </a>
                <Link href="/aktivitas" className="btn-secondary">
                  Lacak Order Saya
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="section-padding bg-white">
        <div className="container-main">
          <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-8 text-center">
            Layanan Terkait
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
            {related.map((s, i) => (
              <ServiceCard key={s.slug} service={s} index={i} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
