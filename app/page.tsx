import { HeroSection } from "@/components/sections/HeroSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { DomainsSection } from "@/components/sections/DomainsSection";
import { PopularCoursesSection } from "@/components/sections/PopularCoursesSection";
import { WhyChooseUsSection } from "@/components/sections/WhyChooseUsSection";
import { PricingPreviewSection } from "@/components/sections/PricingPreviewSection";
import { RegistrationCTASection } from "@/components/sections/RegistrationCTASection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { ContactSection } from "@/components/sections/ContactSection";
import { FAQSection } from "@/components/sections/FAQSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <DomainsSection />
      <PopularCoursesSection />
      <WhyChooseUsSection />
      <PricingPreviewSection />
      <RegistrationCTASection />
      <TestimonialsSection />
      <GallerySection />
      <ContactSection />
      <FAQSection />
    </>
  );
}
