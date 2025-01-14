import './globals.css'

import { ClerkProvider } from '@clerk/nextjs'
import { dark } from '@clerk/themes'
import type { Metadata } from 'next'
import { Mulish } from 'next/font/google'
import { Toaster } from 'sonner'

import { ThemeProvider } from './_components/theme-provider'

const mulish = Mulish({
  subsets: ['latin-ext'],
})

export const metadata: Metadata = {
  title: 'ModeON Marketing Tracker | Desenvolvido por Reggi Dev',
  description:
    'Aplicativo desenhado para organizar todas os investimentos de marketing da ModeON. Registre investimentos de marketing, categorias e plataformas. Acompanhe gráficos mensais e otimize seus investimentos.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${mulish.className} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <main className="flex h-full flex-col xl:overflow-hidden">
            <ClerkProvider
              appearance={{
                baseTheme: dark,
              }}
            >
              {children}
            </ClerkProvider>
          </main>
        </ThemeProvider>
        <Toaster />
      </body>
    </html>
  )
}
