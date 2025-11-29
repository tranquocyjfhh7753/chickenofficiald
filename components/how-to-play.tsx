import { DollarSign, Navigation, TrendingUp, Coins } from "lucide-react"

const steps = [
  {
    number: "01",
    icon: DollarSign,
    title: "Place Your Bet",
    description: "Choose your wager amount and get ready to start your journey across the road.",
  },
  {
    number: "02",
    icon: Navigation,
    title: "Navigate the Road",
    description: "Guide your chicken across lanes. Each successful step increases your multiplier.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Watch Multiplier Rise",
    description: "Your potential winnings grow with each step. The risk increases, but so do the rewards.",
  },
  {
    number: "04",
    icon: Coins,
    title: "Cash Out or Risk More",
    description: "Decide when to take your winnings. Push further for bigger multipliers or play it safe.",
  },
]

export function HowToPlay() {
  return (
    <section id="how-to-play" className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">How to Play</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Get started in seconds and experience the thrill
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Step Number */}
              <div className="text-6xl font-bold text-primary/20 mb-4">{step.number}</div>

              <div className="space-y-3">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <step.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{step.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{step.description}</p>
              </div>

              {/* Connector Line (desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 -right-4 w-8 h-0.5 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
