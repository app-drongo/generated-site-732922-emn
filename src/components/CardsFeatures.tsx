// Enhanced by AI on 2025-08-14T16:07:37.989Z
// Section: features
// Category: features

import { Button } from "@/components/ui/button"
import { ArrowRight, Play, Star, Users, Zap } from "lucide-react"
import Link from "next/link"

export default function ConversionFocusedLandingPage() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted/20">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-20 left-20 size-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 size-72 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 sm:py-40 lg:py-48">
        {/* Hero Content */}
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Unlock Your Business Potential
          </h1>
          <p className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-10">
            Our all-in-one platform empowers you to build, grow, and scale your online presence with ease.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="primary" size="lg" className="flex items-center gap-2">
              Start Free Trial
              <ArrowRight className="size-5" />
            </Button>
            <Button variant="outline" size="lg" className="flex items-center gap-2">
              Learn More
              <ArrowRight className="size-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}