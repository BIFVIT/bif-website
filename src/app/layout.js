import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Becoming I Foundation',
  description: 'Where others teach, We educate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="src/assets/BIFFavicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
