import { services } from "@/data/services";
import { testimonials } from "@/data/testimonials";
import { faqItems } from "@/data/faq";
import HeroSection from "./sections/HeroSection";
import HowItWorksSection from "./sections/HowItWorksSection";
import ServicesPreview from "./sections/ServicesPreview";
import WhyUsSection from "./sections/WhyUsSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import FAQSection from "./sections/FAQSection";
import CTABottomSection from "./sections/CTABottomSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <HowItWorksSection />
      <ServicesPreview services={services} />
      <WhyUsSection />
      <TestimonialsSection testimonials={testimonials} />
      <FAQSection items={faqItems} />
      <CTABottomSection />
    </>
  );
}
