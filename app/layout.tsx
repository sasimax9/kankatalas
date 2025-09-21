import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

const alanSans = Inter({
  subsets: ["latin"],
  variable: "--font-alan-sans",
  display: "swap",
})

export const metadata: Metadata = {
  title: "kankatalas - AI & Software Development",
  description:
    "Transform your business with cutting-edge AI/ML solutions, modern UI/UX design, and scalable Python applications.",
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/favicon-16x16.jpg", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.jpg", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.jpg", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`font-sans ${alanSans.variable}`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
