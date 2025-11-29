import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import Link from 'next/link';

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 px-4 overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />

      <div className="container mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          {/* <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-6">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium">Now Live - Play and Win Big!</span>
          </div> */}

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance">
            Chicken Road 2 - Cross the Road,
            <br />
            <span className="text-primary">Risk it All</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto text-pretty">
            The ultimate crash game where every step could multiply your winnings. Navigate your chicken across the road
            and cash out before it's too late!
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
  <Link href="/play" className="w-full sm:w-auto">
    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 w-full">
      Start Playing
      <ArrowRight className="ml-2 w-5 h-5" />
    </Button>
  </Link>
  <Link href="/play" className="w-full sm:w-auto">
    <Button size="lg" variant="outline" className="w-full bg-transparent">
      <Play className="mr-2 w-5 h-5" />
      Watch Demo
    </Button>
  </Link>
</div>

          {/* Game Preview Placeholder */}
          <div className="mt-16 rounded-xl overflow-hidden  ">
            <img src="/hero.webp" alt="Chicken Road 2" className="w-full h-auto" />
          </div>
        </div>
      </div>
    </section>
  )
}
