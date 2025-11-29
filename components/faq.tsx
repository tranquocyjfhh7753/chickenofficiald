"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "How does Chicken Road 2 work?",
      answer:
        "Chicken Road 2 is a crash-style game where you guide a chicken across a road. Each successful step increases your multiplier. You can cash out at any time to secure your winnings, but if the chicken crashes before you cash out, you lose your bet.",
    },
    {
      question: "Is Chicken Road 2 provably fair?",
      answer:
        "Yes! Every game round is cryptographically secured using SHA-256 hashing. The game outcome is predetermined before the round starts, and you can verify the fairness of each round using the game hash and server seed.",
    },
    {
      question: "What are the minimum and maximum bets?",
      answer:
        "The minimum bet is $0.10, making it accessible for all players. The maximum bet is $1,000 per round. The maximum possible win is capped at $500,000.",
    },
    {
      question: "What is the RTP (Return to Player) percentage?",
      answer:
        "Chicken Road 2 has an RTP of 97.5%, which is higher than most casino games. This means that, on average, players receive $97.50 back for every $100 wagered over the long term.",
    },
    {
      question: "Can I use auto cash-out?",
      answer:
        "You can set an auto cash-out multiplier before starting a round. When your multiplier reaches that target, the game will automatically cash out your winnings. This helps you stick to your strategy and avoid emotional decisions.",
    },
    {
      question: "How fast are the payouts?",
      answer:
        "Payouts are instant! As soon as you cash out, your winnings are credited to your account balance immediately. You can continue playing or withdraw your funds.",
    },
    {
      question: "Is the game mobile-friendly?",
      answer:
        "Yes! Chicken Road 2 is fully optimized for mobile devices. You can play on any smartphone or tablet with the same smooth experience as desktop.",
    },
    {
      question: "What's the best strategy for winning?",
      answer:
        "There's no guaranteed winning strategy as each round is independent and random. However, many successful players use consistent strategies: setting target multipliers (like 2-3x for conservative play), using auto cash-out, and practicing proper bankroll management.",
    },
    {
      question: "Is Chicken Road 2 legal in Pakistan?",
      answer:
        "Yes, Chicken Road 2 is completely legal in Pakistan, as it adheres to fairness, transparency, and convenience for players from Pakistan.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="container mx-auto max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-balance">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Everything you need to know about playing Chicken Road 2
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="rounded-xl border border-border bg-card overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-secondary/50 transition-colors"
              >
                <span className="font-bold text-base md:text-lg pr-4">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 text-primary transition-transform flex-shrink-0 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
