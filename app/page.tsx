import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { HowToPlay } from "@/components/how-to-play"
import { Stats } from "@/components/stats"
import { Footer } from "@/components/footer"
import { MultiplierTable } from "@/components/multiplier-table"
import { GameStatsTable } from "@/components/game-stats-table"
import { GameInfo } from "@/components/game-info"
import { FAQ } from "@/components/faq"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowToPlay />
        <MultiplierTable />
        <GameStatsTable />
        <Stats />
        <GameInfo />
        <FAQ />
      </main>
      <Footer />
    </div>
  )
}
