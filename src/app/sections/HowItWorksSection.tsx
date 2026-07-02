import ScrollReveal from "@/components/ScrollReveal";
import StepCard from "@/components/StepCard";

const steps = [
  {
    icon: "💬",
    title: "Hubungi WhatsApp",
    description: "Jadwal jemput atau drop langsung di lokasi terdekat.",
  },
  {
    icon: "🧪",
    title: "Pilih Treatment",
    description: "Konsultasi gratis, pilih treatment sesuai kondisi sepatu.",
  },
  {
    icon: "📍",
    title: "Pantau Realtime",
    description: "Cek status pengerjaan kapan saja via Order ID.",
  },
  {
    icon: "🎉",
    title: "Terima Kembali",
    description: "Bersih, rapi, diantar langsung ke rumahmu.",
  },
];

export default function HowItWorksSection() {
  return (
    <section id="cara-kerja" className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <span className="badge-primary mb-4 inline-flex">Cara Kerja</span>
          <h2 className="section-heading mb-4">
            Semudah <span className="text-gradient">4 Langkah</span>
          </h2>
          <p className="section-subheading mx-auto">
            Dari kotor sampai kinclong, prosesnya simpel dan transparan.
          </p>
        </ScrollReveal>

        {/* Steps Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6 max-w-4xl mx-auto">
          {steps.map((step, index) => (
            <StepCard
              key={step.title}
              step={index + 1}
              icon={step.icon}
              title={step.title}
              description={step.description}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
