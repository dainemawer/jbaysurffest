import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Bebas_Neue } from "next/font/google"
import "./globals.css"
import Script from "next/script"
import { JsonLdScript } from "@/components/json-ld-script"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
  variable: "--font-bebas",
})

export const metadata: Metadata = {
  title: "Jeffreys Bay Surf Festival 2025",
  description: "South Africa's premier surf, music, and adventure festival at the legendary Supertubes, Jeffreys Bay.",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${workSans.variable} ${bebas.variable} font-sans`}>
        {children}
        <JsonLdScript />
        {/* Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-QR317W614P" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-QR317W614P');
          `}
        </Script>
      </body>
    </html>
  )
}
