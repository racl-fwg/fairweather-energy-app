// next/app/layout.tsx

'use client' // Mark it as a client-side component

import { SessionProvider } from 'next-auth/react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import './globals.css'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <SessionProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </SessionProvider>
      </body>
    </html>
  )
}
