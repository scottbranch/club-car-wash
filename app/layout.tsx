import type React from "react"
import type { Metadata } from "next"
import { Open_Sans, Oswald } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/ui/navigation"
import { Footer } from "@/components/ui/footer"

const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  display: "swap",
})
const oswald = Oswald({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  variable: "--font-oswald",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Club Carwash - Experience the Best Car Wash Today",
  description:
    "Visit one of our convenient locations across the Midwest for a top-notch automatic car wash experience.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} ${oswald.variable} font-sans bg-white text-text-primary text-base`}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
