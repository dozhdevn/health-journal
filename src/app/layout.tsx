import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { BaseLayout } from '@/widgets/layouts/BaseLayout'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Health Journal',
  description: 'something...',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <BaseLayout>{children}</BaseLayout>
      </body>
    </html>
  )
}
