import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import Footer from './components/Footer';
import Navbr from './components/Navbr';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Lotus Glades',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      {/* <Navbr/> */}
      {children}
      <Footer/>
      </body>
    </html>
  )
}
