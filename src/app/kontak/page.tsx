"use client";

import { useState, FormEvent } from "react";
import { dropPoints } from "@/data/droppoints";
import ScrollReveal from "@/components/ScrollReveal";

export default function KontakPage() {
  const [form, setForm] = useState({ name: "", wa: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const waMessage = `Halo SoleCare, saya ${form.name}.\n\n${form.message}\n\n(WhatsApp: ${form.wa})`;
    window.open(
      `https://wa.me/628123456789?text=${encodeURIComponent(waMessage)}`,
      "_blank"
    );
  };

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary-50/50 to-white pt-8 md:pt-16 pb-12">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-primary-100/40 rounded-full blur-3xl" />
        </div>
        <div className="container-main relative">
          <ScrollReveal className="text-center">
            <span className="badge-primary mb-4 inline-flex">Kontak</span>
            <h1 className="section-heading mb-4">
              Hubungi <span className="text-gradient">Kami</span>
            </h1>
            <p className="section-subheading mx-auto">
              Ada pertanyaan, saran, atau mau langsung order? Kami siap membantu!
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* Contact Content */}
      <section className="section-padding !pt-8 bg-white">
        <div className="container-main">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 max-w-5xl mx-auto">
            {/* Left: Contact Info */}
            <div>
              <ScrollReveal>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-6">
                  Informasi Kontak
                </h2>

                <div className="space-y-4 mb-8">
                  {/* WhatsApp */}
                  <a
                    href="https://wa.me/628123456789"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="card p-4 flex items-center gap-4 group card-hover"
                  >
                    <div className="w-12 h-12 rounded-xl bg-green-50 flex items-center justify-center flex-shrink-0 group-hover:bg-green-100 transition-colors">
                      <svg className="w-6 h-6 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">WhatsApp</p>
                      <p className="font-heading font-semibold text-text">+62 812-3456-789</p>
                    </div>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:hello@solecare.id"
                    className="card p-4 flex items-center gap-4 group card-hover"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary-50 flex items-center justify-center flex-shrink-0 group-hover:bg-primary-100 transition-colors">
                      <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Email</p>
                      <p className="font-heading font-semibold text-text">hello@solecare.id</p>
                    </div>
                  </a>

                  {/* Address */}
                  <div className="card p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-amber-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Alamat</p>
                      <p className="font-heading font-semibold text-text text-sm">
                        Jl. Ir. H. Juanda No. 123, Dago, Bandung 40135
                      </p>
                    </div>
                  </div>

                  {/* Hours */}
                  <div className="card p-4 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-violet-50 flex items-center justify-center flex-shrink-0">
                      <svg className="w-6 h-6 text-violet-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-gray-400">Jam Operasional</p>
                      <p className="font-heading font-semibold text-text text-sm">
                        Senin–Sabtu: 09.00–21.00 WIB
                      </p>
                      <p className="text-xs text-gray-400">
                        Minggu: 10.00–18.00 WIB
                      </p>
                    </div>
                  </div>
                </div>

                {/* Map Placeholder */}
                <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-50 aspect-[16/9] flex items-center justify-center border border-gray-200">
                  <div className="text-center">
                    <div className="text-4xl mb-2">🗺️</div>
                    <p className="font-heading font-semibold text-gray-400 text-sm">Google Maps</p>
                    <p className="text-xs text-gray-300">Jl. Ir. H. Juanda No. 123, Dago, Bandung</p>
                  </div>
                </div>
              </ScrollReveal>
            </div>

            {/* Right: Contact Form */}
            <div>
              <ScrollReveal delay={0.1}>
                <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-6">
                  Kirim Pesan
                </h2>

                <form onSubmit={handleSubmit} className="card p-6 md:p-8 !rounded-2xl">
                  <div className="space-y-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-sm font-heading font-semibold text-text mb-2">
                        Nama Lengkap
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        required
                        placeholder="Nama kamu"
                        value={form.name}
                        onChange={(e) => setForm({ ...form, name: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-text text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>

                    {/* WhatsApp */}
                    <div>
                      <label htmlFor="contact-wa" className="block text-sm font-heading font-semibold text-text mb-2">
                        Nomor WhatsApp
                      </label>
                      <input
                        id="contact-wa"
                        type="tel"
                        required
                        placeholder="08xxxxxxxxxx"
                        value={form.wa}
                        onChange={(e) => setForm({ ...form, wa: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-text text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      />
                    </div>

                    {/* Message */}
                    <div>
                      <label htmlFor="contact-message" className="block text-sm font-heading font-semibold text-text mb-2">
                        Pesan
                      </label>
                      <textarea
                        id="contact-message"
                        required
                        rows={4}
                        placeholder="Tulis pesan atau pertanyaanmu di sini..."
                        value={form.message}
                        onChange={(e) => setForm({ ...form, message: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-gray-50 text-text text-sm placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                      />
                    </div>

                    {/* Submit */}
                    <button type="submit" className="btn-primary w-full !py-3.5">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                      </svg>
                      Kirim via WhatsApp
                    </button>
                  </div>

                  <p className="text-xs text-gray-400 mt-3 text-center">
                    Form ini akan mengarahkan ke WhatsApp untuk mengirim pesan.
                  </p>
                </form>
              </ScrollReveal>
            </div>
          </div>
        </div>
      </section>

      {/* Drop Points */}
      <section className="section-padding bg-gray-50/50">
        <div className="container-main">
          <ScrollReveal className="text-center mb-10">
            <h2 className="text-xl md:text-2xl font-heading font-bold text-text mb-3">
              📍 Drop Point
            </h2>
            <p className="text-gray-500 text-sm">
              Antar langsung sepatumu ke lokasi terdekat.
            </p>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {dropPoints.map((dp) => (
              <div key={dp.name} className="card p-5 md:p-6">
                <div className="w-10 h-10 rounded-xl bg-primary-50 flex items-center justify-center text-lg mb-4">
                  📍
                </div>
                <h3 className="font-heading font-bold text-sm text-text mb-2">{dp.name}</h3>
                <p className="text-xs text-gray-500 mb-3 leading-relaxed">{dp.address}</p>
                <div className="flex items-center gap-1.5 text-xs text-gray-400 mb-1">
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  {dp.hours}
                </div>
                <a
                  href={`https://wa.me/${dp.phone}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-primary mt-3 hover:underline"
                >
                  Hubungi Drop Point
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
