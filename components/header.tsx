"use client"
import Link from 'next/link';
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <span className="text-xl font-bold text-foreground">Chicken Road 2</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <a href="#features" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Features
            </a>
            <a
              href="#how-to-play"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
            >
              How to Play
            </a>
            <a href="#stats" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Stats
            </a>
            <a href="/play" className="text-sm font-medium text-muted-foreground hover:text-foreground transition">
              Bonus
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
  <Link href="/play">
    <Button variant="ghost" size="sm">
      Log In
    </Button>
  </Link>
  <Link href="/play">
    <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
      Play Now
    </Button>
  </Link>
</div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <nav className="flex flex-col gap-4">
              <a
                href="#features"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Features
              </a>
              <a
                href="#how-to-play"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
                onClick={() => setIsMenuOpen(false)}
              >
                How to Play
              </a>
              <a
                href="#stats"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Stats
              </a>
              <a
                href="/play"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition"
                onClick={() => setIsMenuOpen(false)}
              >
                Bonus
              </a>
              <div className="flex flex-col gap-2 pt-2">
                <Button variant="ghost" size="sm">
                  Log In
                </Button>
                <Button size="sm" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  Play Now
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
