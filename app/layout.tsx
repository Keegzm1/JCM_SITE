import './globals.css'
import type { Metadata } from 'next'
import { AppProviders } from './providers'

export const metadata: Metadata = {
  title: 'Jesus Christ Ministries',
  description: 'A Place Where Miracles Happen',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <AppProviders>
          {children}
        </AppProviders>
      </body>
    </html>
  )
}