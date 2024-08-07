import Navbar from '@/components/Navbar'
import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
   subsets: ['latin'],
   display: "swap",
   weight: ["100","200","300", "400", "500", "600", "700", "800"],
   style: "normal" 
})

export const metadata: Metadata = {
  title: 'AI Quito App',
  description: 'Generated by Quito, Chat with a pdf',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}
