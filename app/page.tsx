import { Navigation } from "@/components/navigation"
import { Hero } from "@/components/hero"
import { CardProtection } from "@/components/card-protection"
import { GettingCard } from "@/components/getting-card"
import { Capabilities } from "@/components/capabilities"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <Hero />
        <CardProtection />
        <GettingCard />
        <Capabilities />
      </main>
      <Footer />
    </div>
  )
}

