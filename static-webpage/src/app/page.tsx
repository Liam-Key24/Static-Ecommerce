import { SiteLayout } from "@/components/site-layout"
import { HeroSection } from "@/components/hero-section"
import { LookbookGrid } from "@/components/lookbook-grid"

export default function Home() {
  return (
    <SiteLayout>
      <HeroSection />
      <LookbookGrid />
    </SiteLayout>
  )
}

