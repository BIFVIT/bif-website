import { Inter } from 'next/font/google'
import './globals.css'
import Head from 'next/head'
import ThemeSwitcher from "../components/globals/ThemeSwitch"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Becoming I Foundation VIT',
  description: 'Where others teach, We educate',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      {/* The Button Component for Dark Mode toggle */}
      {/* <ThemeSwitcher/> */}
      <Head>
        <link rel="icon" href="https://raw.githubusercontent.com/NotSooShariff/bif-frontend/main/src/assets/favicon.ico" />

        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Becoming I Foundation VIT" />
        <meta name="description" content="Where others Teach, We Educate. At BIF, We empower minds and shape futures. Join us in creating a brighter tomorrow through quality education!" />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Becoming I Foundation VIT" />
        <meta property="og:description" content="Where others Teach, We Educate. At BIF, We empower minds and shape futures. Join us in creating a brighter tomorrow through quality education!" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Becoming I Foundation VIT" />
        <meta property="twitter:description" content="Where others Teach, We Educate. At BIF, We empower minds and shape futures. Join us in creating a brighter tomorrow through quality education!" />
        <meta property="twitter:image" content="" />
      </Head>
      <body className={inter.className}>{children}</body>

    </html>
  )
}
