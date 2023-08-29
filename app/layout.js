import { Provider } from '@/components/Context'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bottle fill',
  description: 'clone app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <body className="bg-white dark:bg-brand-black-primary" suppressHydrationWarning={true}>
        <ErrorBoundary>
          <Provider>
            {children}
          </Provider>
        </ErrorBoundary>
      </body>
    </html>
  )
}
