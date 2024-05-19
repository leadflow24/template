import '../styles/globals.css'

import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { getServerSession } from 'next-auth'
import { ReactNode } from 'react'

import { Toaster } from '@/components/ui/sonner/sonner'
import { auth } from '@/lib/auth'
import Providers from '@/providers/session-provider'
import { ThemeProvider } from '@/providers/theme-provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Project template',
  description: 'Project template description',
  openGraph: {
    images: ['/favicon.ico'],
    url: 'https://example.com',
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  const session = await getServerSession(auth)

  return (
    <html lang="en" className="h-full w-full">
      <body className={`${inter.className} h-full w-full`}>
        <Providers session={session}>
          <ThemeProvider
            attribute="class"
            disableTransitionOnChange
            defaultTheme="system"
            enableSystem
          >
            {children}
            <Toaster position="top-center" richColors />
          </ThemeProvider>
        </Providers>
      </body>
    </html>
  )
}
