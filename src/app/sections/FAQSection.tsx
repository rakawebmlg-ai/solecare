import ScrollReveal from "@/components/ScrollReveal";
import FAQAccordion from "@/components/FAQAccordion";
import type { FAQItem } from "@/data/faq";

interface FAQSectionProps {
  items: FAQItem[];
}

export default function FAQSection({ items }: FAQSectionProps) {
  return (
    <section id="faq" className="section-padding bg-white">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <span className="badge-primary mb-4 inline-flex">FAQ</span>
          <h2 className="section-heading mb-4">
            Pertanyaan <span className="text-gradient">Umum</span>
          </h2>
          <p className="section-subheading mx-auto">
            Belum yakin? Baca dulu jawaban dari pertanyaan yang sering ditanyakan.
          </p>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="max-w-2xl mx-auto">
          <FAQAccordion items={items} />
        </div>
      </div>
    </section>
  );
}
