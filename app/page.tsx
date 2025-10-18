import { HeroSection } from "@/components/hero-section"
import { WhyChooseUs } from "@/components/why-choose-us"
import { ShopByOccasion } from "@/components/shop-by-occasion"
import { FeaturedCollection } from "@/components/featured-collection"
import { HowItWorks } from "@/components/how-it-works"
import { PersonalizationSection } from "@/components/personalization-section"
import { CustomerFavorites } from "@/components/customer-favorites"
import { Testimonials } from "@/components/testimonials"
import { TheJournal } from "@/components/the-journal"
import { Newsletter } from "@/components/newsletter"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { CookieBanner } from "@/components/cookie-banner"

export default function Home() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <ShopByOccasion />
      <FeaturedCollection />
      <HowItWorks />
      <PersonalizationSection />
      <CustomerFavorites />
      <Testimonials />
      <TheJournal />
      <Newsletter />
      <ContactSection />
      <Footer />
      <CookieBanner />
    </main>
  )
}
