import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import '@/i18n'
import AllContexts from '@/contexts/all'
import { Footer, Header } from '@/components/layout'

const inter = Inter({
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className='bg-black'>
      <body className={inter.className}>
        <AllContexts>
          <Header />
          <div>{children}</div>
          <Footer />
        </AllContexts>
      </body>
    </html>
  )
}
