"use client"
import Link from 'next/link';

export function Stats() {
  const stats = [
    { value: "50K+", label: "Active Players" },
    { value: "$2M+", label: "Total Winnings" },
    { value: "100K+", label: "Games Played Daily" },
    { value: "500x", label: "Max Multiplier" },
  ]

  return (
    <section id="stats" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="rounded-2xl bg-gradient-to-br from-primary/20 via-primary/10 to-transparent border border-primary/30 p-8 md:p-12">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Join Thousands of Winners and Change your Life with Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Real players, real wins, real excitement - real money awaits!
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm md:text-base text-muted-foreground font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* CTA Button Section */}
          <div className="text-center">
  <Link href="/play">
    <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl shadow-2xl hover:shadow-orange-500/25 transition-all duration-300 hover:scale-105 hover:from-yellow-300 hover:to-orange-400 active:scale-95 cursor-pointer">
      {/* Animated shine effect */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Button content */}
      <span className="relative flex items-center gap-2">
        <span>🎁</span>
        Claim your bonus!
        <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
      </span>
      
      {/* Pulse animation */}
      <div className="absolute inset-0 rounded-2xl border-2 border-yellow-400 animate-ping opacity-0 group-hover:opacity-30" />
    </button>
  </Link>
  
  <p className="text-sm text-muted-foreground mt-4">
    🔥 Limited time offer - Claim your welcome bonus now!
  </p>
</div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          100% { transform: translateX(200%) skewX(-12deg); }
        }
        .animate-shine {
          animation: shine 2s infinite;
        }
      `}</style>
    </section>
  )
}