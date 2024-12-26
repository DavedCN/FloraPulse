import type { Metadata } from 'next';

import './globals.css'
import Footer from '@/components/Footer';
import Header from '@/components/Header';

export const metadata: Metadata = {
  title: 'FloraPulse',
  description: 'The most accuruate irrigation guidance for orchards and vineyards.',
  icons: {
    icon: '/floralpulse.webp',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main className="relative overflow-hidden">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
