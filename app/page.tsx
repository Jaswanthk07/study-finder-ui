import { Navbar } from "@/components/navbar"
import { DynamicBackground } from "@/components/dynamic-background"
import { HeroSection } from "@/components/hero-section"
import { FeaturesSection } from "@/components/features-section"
import { HighlightsSection } from "@/components/highlights-section"
import { ConnectionsGlider } from "@/components/connections-glider"
import { TestimonialsSection } from "@/components/testimonials-section"
import { PricingSection } from "@/components/pricing-section"
import { GlobeSection } from "@/components/globe-section"
import { VisionSection } from "@/components/vision-section"
import { Footer } from "@/components/footer"
import { ScrollToTop } from "@/components/scroll-to-top"

export default function Home() {
  return (
    <>
      <DynamicBackground />
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <HighlightsSection />
        <ConnectionsGlider />
        <TestimonialsSection />
        <PricingSection />
        <GlobeSection />
        <VisionSection />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  )
}
