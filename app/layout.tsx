import "./globals.css"
import { ppEditorialNewUltralightItalic, inter } from "./fonts"
import { Footer } from "@/components/Footer"
import { PageTransition } from "@/components/PageTransition"
import type React from "react"

export const metadata = {
  title: "Le Comte de Beaumont",
  description: "Where advanced technology meets human creativity to set new standards in art, industry, and technological development.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${ppEditorialNewUltralightItalic.variable} ${inter.variable}`}>
      <body className={inter.className}>
        <PageTransition>
          <main>{children}</main>
          <Footer />
        </PageTransition>
      </body>
    </html>
  )
}

