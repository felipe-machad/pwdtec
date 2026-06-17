import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ["latin"],
  variable: '--font-inter'
});

export const metadata: Metadata = {
  title: 'PWRTEC Segurança | Tecnologia e Segurança Eletrônica',
  description: 'Soluções completas em segurança eletrônica: câmeras, monitoramento, alarmes, controle de acesso, cerca elétrica e automação. Atendimento especializado para residências e empresas.',
  keywords: 'segurança eletrônica, câmeras de segurança, monitoramento, alarmes, controle de acesso, cerca elétrica, automação, PWRTEC',
  authors: [{ name: 'PWRTEC Segurança' }],
    icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
  openGraph: {
    title: 'PWRTEC Segurança | Tecnologia e Segurança Eletrônica',
    description: 'Soluções completas em segurança eletrônica para sua empresa e residência.',
    type: 'website',
    locale: 'pt_BR',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0f1f',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-background">
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
