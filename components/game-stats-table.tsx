import { TrendingUp, Users, Clock, Trophy } from "lucide-react"

export function GameStatsTable() {
  const realtimeStats = [
    { metric: "Average Win Rate", value: "46.8%", trend: "+2.3%", icon: TrendingUp },
    { metric: "Players Online Now", value: "3,247", trend: "+156", icon: Users },
    { metric: "Avg Game Duration", value: "45s", trend: "-5s", icon: Clock },
    { metric: "Biggest Win Today", value: "$12,450", trend: "285x", icon: Trophy },
  ]

  const payoutHistory = [
    { time: "2 min ago", player: "Player_8274", bet: "$50", multiplier: "127x", payout: "$6,350" },
    { time: "5 min ago", player: "Player_3591", bet: "$25", multiplier: "8x", payout: "$200" },
    { time: "7 min ago", player: "Player_6142", bet: "$100", multiplier: "45x", payout: "$4,500" },
    { time: "12 min ago", player: "Player_9823", bet: "$15", multiplier: "3x", payout: "$45" },
    { time: "18 min ago", player: "Player_4567", bet: "$75", multiplier: "215x", payout: "$16,125" },
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Live Game Statistics</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Real-time data from active games happening right now
          </p>
        </div>

        {/* Real-time Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {realtimeStats.map((stat, index) => (
            <div key={index} className="p-6 rounded-xl bg-card border border-border">
              <div className="flex items-start justify-between mb-3">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <stat.icon className="w-5 h-5 text-primary" />
                </div>
                <span className="text-xs font-medium text-green-500">{stat.trend}</span>
              </div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.metric}</div>
            </div>
          ))}
        </div>

        {/* Recent Payouts Table */}
        <div className="max-w-6xl mx-auto">
          <h3 className="text-2xl font-bold mb-6">Recent Big Wins</h3>
          <div className="overflow-x-auto rounded-xl border border-border bg-card">
            <table className="w-full">
              <thead>
                <tr className="bg-secondary/50 border-b border-border">
                  <th className="px-6 py-4 text-left text-sm font-bold">Time</th>
                  <th className="px-6 py-4 text-left text-sm font-bold">Player</th>
                  <th className="px-6 py-4 text-right text-sm font-bold">Bet Amount</th>
                  <th className="px-6 py-4 text-right text-sm font-bold">Multiplier</th>
                  <th className="px-6 py-4 text-right text-sm font-bold">Payout</th>
                </tr>
              </thead>
              <tbody>
                {payoutHistory.map((record, index) => (
                  <tr
                    key={index}
                    className="border-b border-border last:border-b-0 hover:bg-secondary/30 transition-colors"
                  >
                    <td className="px-6 py-4 text-sm text-muted-foreground">{record.time}</td>
                    <td className="px-6 py-4 font-medium font-mono text-sm">{record.player}</td>
                    <td className="px-6 py-4 text-right font-mono">{record.bet}</td>
                    <td className="px-6 py-4 text-right">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-bold bg-primary/10 text-primary">
                        {record.multiplier}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-right font-bold text-green-500">{record.payout}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
