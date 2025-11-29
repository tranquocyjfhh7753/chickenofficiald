import { Shield, Zap, Sparkles, LineChart } from "lucide-react"

export function GameInfo() {
  const features = [
    {
      title: "Game Mechanics",
      icon: Zap,
      content: [
        { label: "Game Type", value: "Crash/Multiplier" },
        { label: "Min Bet", value: "$0.10" },
        { label: "Max Bet", value: "$1,000" },
        { label: "Max Win", value: "$500,000" },
        { label: "RTP (Return to Player)", value: "97.5%" },
      ],
    },
    {
      title: "Fairness & Security",
      icon: Shield,
      content: [
        { label: "Verification", value: "Provably Fair" },
        { label: "Algorithm", value: "SHA-256" },
        { label: "Audit Status", value: "Certified" },
        { label: "Random Number Generation", value: "Cryptographic" },
        { label: "Game Hash", value: "Pre-determined" },
      ],
    },
    {
      title: "Game Features",
      icon: Sparkles,
      content: [
        { label: "Auto Cash-Out", value: "Available" },
        { label: "Mobile Play", value: "Fully Optimized" },
        { label: "Live Stats", value: "Real-time" },
        { label: "Game Speed", value: "Instant" },
        { label: "Multi-table", value: "Supported" },
      ],
    },
    {
      title: "Advanced Strategy",
      icon: LineChart,
      content: [
        { label: "Conservative", value: "Cash out at 2-3x" },
        { label: "Moderate", value: "Cash out at 5-8x" },
        { label: "Aggressive", value: "Cash out at 15x+" },
        { label: "Risk Management", value: "Essential" },
        { label: "Bankroll Strategy", value: "Recommended" },
      ],
    },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Complete Game Information</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Everything you need to know about Chicken Road 2
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <feature.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
              </div>

              <div className="space-y-3">
                {feature.content.map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between py-2 border-b border-border/50 last:border-b-0"
                  >
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <span className="text-sm font-semibold">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Strategy Tips */}
        <div className="mt-12 max-w-4xl mx-auto p-8 rounded-xl bg-gradient-to-br from-primary/10 to-transparent border border-primary/30">
          <h3 className="text-2xl font-bold mb-6">Winning Strategies & Tips for Pakistan players</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold mb-3 text-primary">For Beginners</h4>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li>• Start with minimum bets to learn the game</li>
                <li>• Set a target multiplier (2-3x) and stick to it</li>
                <li>• Use auto cash-out to avoid emotional decisions</li>
                <li>• Never chase losses with bigger bets</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold mb-3 text-primary">For Advanced Players</h4>
              <ul className="space-y-2 text-sm text-muted-foreground leading-relaxed">
                <li>• Implement the Martingale strategy with caution</li>
                <li>• Track patterns but remember each round is independent</li>
                <li>• Diversify bet amounts across multiple sessions</li>
                <li>• Set daily win/loss limits and honor them</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
