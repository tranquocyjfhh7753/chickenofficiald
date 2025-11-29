export function MultiplierTable() {
  const multipliers = [
    { steps: "1-2", multiplier: "1.5x - 2x", risk: "Low", color: "text-green-500" },
    { steps: "3-5", multiplier: "2x - 5x", risk: "Medium", color: "text-yellow-500" },
    { steps: "6-8", multiplier: "5x - 15x", risk: "High", color: "text-orange-500" },
    { steps: "9-12", multiplier: "15x - 50x", risk: "Very High", color: "text-red-500" },
    { steps: "13+", multiplier: "50x - 500x", risk: "Extreme", color: "text-purple-500" },
  ]

  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Multiplier Progression</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Understanding how your winnings grow with each successful step
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="overflow-x-auto rounded-xl border border-border">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-bold">Steps Completed</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Multiplier Range</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Risk Level</th>
                  <th className="px-6 py-4 text-right text-sm font-bold">Example ($10 Bet)</th>
                </tr>
              </thead>
              <tbody>
                {multipliers.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-6 py-4 font-medium">{row.steps}</td>
                    <td className={`px-6 py-4 font-bold ${row.color}`}>{row.multiplier}</td>
                    <td className="px-6 py-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-secondary">
                        {row.risk}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-mono text-primary">
                      ${Number.parseInt(row.multiplier.split("x")[0].trim()) * 10} - $
                      {Number.parseInt(row.multiplier.split("-")[1].trim()) * 10}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-6 p-4 rounded-lg bg-secondary/30 border border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              <strong className="text-foreground">Pro Tip:</strong> The multiplier increases exponentially as you
              progress. Most experienced players cash out between 5x-15x, but the brave risk-takers who reach 13+ steps
              can win life-changing amounts. Also, remember that higher multipliers come with increased risk of losing your bet!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
