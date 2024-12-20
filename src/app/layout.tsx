import React from 'react'
import type { Metadata } from 'next'
import { inter, quicksand } from '@/styles/fonts'
import '@/styles/globals.css'
import { main } from '@/data/metadata'
import { Analytics } from '@vercel/analytics/react'
import { Footer, Navigation, Savedbar } from '@/components/common'
import NewsLetter from '@/components/landing/NewsLetter'
import { Toaster } from '@/components/ui/toaster'
import '@/styles/loading.css'
export const metadata: Metadata = {
  title: 'Dialectic',
  description: main.description,
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${quicksand.variable} ${inter.variable}`}>
        <Analytics />
        {children}

        <Toaster />
      </body>
    </html>
  )
}
