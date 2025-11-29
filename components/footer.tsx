export function Footer() {
  return (
    <footer className="border-t border-border bg-secondary/30 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-bold">Chicken Road 2</span>
            </div>
            {/* <p className="text-muted-foreground max-w-md leading-relaxed">
              The ultimate crash game experience. Navigate your chicken across the road and multiply your winnings with
              every successful step.
            </p> */}
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#features" className="text-muted-foreground hover:text-foreground transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#how-to-play" className="text-muted-foreground hover:text-foreground transition">
                  How to Play
                </a>
              </li>
              <li>
                <a href="#stats" className="text-muted-foreground hover:text-foreground transition">
                  Stats
                </a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="font-bold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition">
                  Responsible Gaming
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Chicken Road 2. All rights reserved. 18+ Play responsibly.
            </p>
            <div className="flex items-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                Support
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition">
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
