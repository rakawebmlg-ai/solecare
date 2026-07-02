import ScrollReveal from "@/components/ScrollReveal";
import TestimonialCard from "@/components/TestimonialCard";
import type { Testimonial } from "@/data/testimonials";

interface TestimonialsSectionProps {
  testimonials: Testimonial[];
}

export default function TestimonialsSection({ testimonials }: TestimonialsSectionProps) {
  return (
    <section id="testimoni" className="section-padding bg-gray-50/50">
      <div className="container-main">
        {/* Header */}
        <ScrollReveal className="text-center mb-12 md:mb-16">
          <span className="badge-primary mb-4 inline-flex">Testimoni</span>
          <h2 className="section-heading mb-4">
            Kata <span className="text-gradient">Mereka</span>
          </h2>
          <p className="section-subheading mx-auto">
            Cerita dari pelanggan yang sudah merasakan pengalaman SoleCare.
          </p>
        </ScrollReveal>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
