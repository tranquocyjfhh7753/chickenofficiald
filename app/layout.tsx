// import type React from "react"
// import type { Metadata } from "next"
// import { Geist, Geist_Mono } from "next/font/google"
// import { Analytics } from "@vercel/analytics/next"
// import "./globals.css"

// const _geist = Geist({ subsets: ["latin"] })
// const _geistMono = Geist_Mono({ subsets: ["latin"] })

// // <CHANGE> Updated metadata for Chicken Road 2
// export const metadata: Metadata = {
//   title: "🐔 Chicken Road 2 - The Ultimate Crash Game in Pakistan",
//   description:
//     "Navigate your chicken across the road in this thrilling crash game. Risk it all for massive multipliers and epic wins!",
//   keywords: ["chicken road 2", "chicken game", "chicken road 2 pakistan", "how to play chicken road", "chicken road", "Pakistan gaming chicken road"],
// }

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode
// }>) {
//   return (
//     <html lang="en">
//       <body className={`font-sans antialiased`}>
//         {children}
//         <Analytics />
//       </body>
//     </html>
//   )
// }




import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "🐔 Chicken Road 2 - The Ultimate Crash Game in Pakistan",
  description:
    "Navigate your chicken across the road in this thrilling crash game. Risk it all for massive multipliers and epic wins!",
  keywords: [
    "chicken road 2",
    "chicken game",
    "chicken road 2 pakistan",
    "how to play chicken road",
    "chicken crash game",
    "Pakistan gaming"
  ],
  alternates: {
    canonical: "https://collabs.pk/",
    languages: {
      "en": "https://collabs.pk/",
      "en-PK": "https://collabs.pk/",
    },
  },
  openGraph: {
    title: "Chicken Road 2 – Play the #1 Crash Game in Pakistan",
    description:
      "Play Chicken Road 2, the most exciting crash-style game with huge multipliers and real excitement!",
    url: "https://collabs.pk/",
    siteName: "Chicken Road 2",
    images: [
      {
        url: "https://collabs.pk/cover.jpg",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Chicken Road 2 – Big Wins 2025",
    description: "The official Chicken Road 2 crash game experience.",
    images: ["https://collabs.pk/cover.jpg"],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* HREFLANG */}
      <link rel="alternate" href="https://collabs.pk/" hrefLang="en" />
      <link rel="alternate" href="https://collabs.pk/pk" hrefLang="en-PK" />
      <link rel="alternate" href="https://collabs.pk/" hrefLang="x-default" />

      {/* JSON-LD Schema.org Product */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            name: "Chicken Road 2",
            description: "Win big in Chicken Road 2 – 2025 crash game edition.",
            image: "https://collabs.pk/cover.jpg",
            brand: {
              "@type": "Brand",
              name: "Chicken Road",
            },
            applicationCategory: "Game",
            operatingSystem: "Android, iOS",
            offers: {
              "@type": "Offer",
              price: "0",
              priceCurrency: "USD",
              url: "https://collabs.pk/",
            },
          }),
        }}
      />

      {/* JSON-LD Organization */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Chicken Road 2",
            url: "https://collabs.pk/",
            logo: "https://collabs.pk/logo.png",
            sameAs: [
              "https://facebook.com/",
              "https://instagram.com/",
            ],
          }),
        }}
      />

      {/* Google Analytics */}
      <Script
        async
        src="https://www.googletagmanager.com/gtag/js?id=G-W92H3TKJDJ"
      />
      <Script id="google-analytics">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W92H3TKJDJ');
        `}
      </Script>

      <body className="font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}
