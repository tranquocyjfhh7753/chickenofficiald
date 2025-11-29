import { Zap, Trophy, Shield, TrendingUp } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "Instant Action",
    description: "Fast-paced gameplay with instant results. No waiting, just pure adrenaline-fueled gaming.",
  },
  {
    icon: Trophy,
    title: "Massive Multipliers",
    description: "Watch your winnings multiply with each successful step. The further you go, the bigger the rewards.",
  },
  {
    icon: Shield,
    title: "Provably Fair",
    description: "Transparent and verifiable game outcomes. Every round is cryptographically secure and fair.",
  },
  {
    icon: TrendingUp,
    title: "Strategic Depth",
    description: "Balance risk and reward. Master the art of knowing when to cash out for maximum profit.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Why Players Love Chicken Road 2</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Experience the perfect blend of excitement, strategy, and big wins
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
