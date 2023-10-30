import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import ThemeSwitcher from "../components/globals/ThemeSwitch"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Becoming I Foundation',
  description: 'Where others teach, We educate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeSwitcher/>
      <Head>
        <link rel="icon" href="https://raw.githubusercontent.com/NotSooShariff/bif-frontend/main/src/assets/favicon.ico" />
      </Head>
      <body className={inter.className}>{children}</body>

    </html>
  )
}
