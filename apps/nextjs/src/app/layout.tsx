import type { Viewport } from 'next'
import { Lexend } from 'next/font/google'
import { Provider } from 'jotai/react'
import { Toaster } from 'sonner'

import { cn } from '@a/ui'
import { ThemeProvider } from '@a/ui/theme'

import Lenis from '~/components/lenis'

import '~/app/globals.css'

const lexend = Lexend({ subsets: ['vietnamese'] })

export const viewport: Viewport = {
  themeColor: [
    { color: 'white', media: '(prefers-color-scheme: light)' },
    { color: 'black', media: '(prefers-color-scheme: dark)' }
  ]
}

const RootLayout = ({ children }: { readonly children: React.ReactNode }) => (
  <html lang='en' suppressHydrationWarning>
    <body
      className={cn(
        'min-h-screen bg-background tracking-tight text-foreground antialiased',
        lexend.className
      )}>
      <Provider>
        <ThemeProvider attribute='class' defaultTheme='light' enableSystem>
          <Lenis>{children}</Lenis>

          <Toaster />
        </ThemeProvider>
      </Provider>
    </body>
  </html>
)

export default RootLayout
