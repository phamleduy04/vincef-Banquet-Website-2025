import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navigation from "@/components/navigation"
import BackgroundPreloader from "@/components/background-preloader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "VINCEF Banquet 2025",
  description: "Website for VINCEF Banquet 2025",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <BackgroundPreloader />
        <Navigation />
        <main>{children}</main>
      </body>
    </html>
  )
}