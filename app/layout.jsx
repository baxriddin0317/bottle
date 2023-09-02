
import './globals.css'
import { Providers } from './providers'

export const metadata = {
  title: 'Bottle fill',
  description: 'clone app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <Providers>
        {children}
      </Providers>
    </html>
  )
}
