import type { Metadata } from 'next'
import { inter, quicksand } from '@/styles/fonts'
import '@/styles/globals.css'
import { main } from '@/data/metadata'
import { Footer, Navigation, Savedbar } from '@/components/common'
import NewsLetter from '@/components/landing/NewsLetter'

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
    <html lang="en">
      <body className={`${quicksand.variable} ${inter.variable}`}>
        <Savedbar />
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  )
}
